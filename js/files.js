import { state, SCENES, MAX_IMAGES } from './state.js';
import { dom } from './dom.js';
import { showMessage, updateStatus } from './utils.js';
import { stopSlideshow, startSlideshow } from './scenes.js';

function registerMedia(base64, fileType, aspectRatio, mediaType) {
    if (state.imageFiles.length >= MAX_IMAGES) {
        showMessage(`Maximum of ${MAX_IMAGES} files reached.`, 'bg-red-600');
        return;
    }
    state.imageFiles.push({ base64, type: fileType, aspectRatio, mediaType });
    updateStatus();
    dom.initialMessage.classList.add('hidden');

    if (state.imageFiles.length === 1 && !dom.panelToggle.checked) {
        startSlideshow();
    }
}

export function processFile(file) {
    const reader = new FileReader();
    const isVideo = file.type.startsWith('video/');

    reader.onload = function(e) {
        const dataUrl = e.target.result;

        if (isVideo) {
            const tempVid = document.createElement('video');
            tempVid.preload = 'metadata';
            tempVid.muted = true;
            tempVid.onloadedmetadata = () => {
                const aspectRatio = tempVid.videoWidth / tempVid.videoHeight;
                registerMedia(dataUrl, file.type, aspectRatio, 'video');
            };
            tempVid.onerror = () => {
                showMessage(`Failed to read video metadata for ${file.name}.`, 'bg-red-600');
            };
            tempVid.src = dataUrl;
        } else {
            const tempImg = new Image();
            tempImg.onload = () => {
                const aspectRatio = tempImg.width / tempImg.height;
                registerMedia(dataUrl, file.type, aspectRatio, 'image');
            };
            tempImg.src = dataUrl;
        }
    };
    reader.readAsDataURL(file);
}

export function handleDrop(event) {
    event.preventDefault();
    document.body.classList.remove('drag-over');

    let filesLoaded = 0;
    const dt = event.dataTransfer;

    const files = dt.items
        ? Array.from(dt.items).filter(item => item.kind === 'file').map(item => item.getAsFile())
        : Array.from(dt.files);

    files.forEach(file => {
        if (file && (file.type.startsWith('image/') || file.type.startsWith('video/'))) {
            processFile(file);
            filesLoaded++;
        }
    });

    if (filesLoaded > 0) {
        showMessage(`Successfully added ${filesLoaded} media file(s).`, 'bg-green-600');
    } else {
        showMessage(`No valid image or video files found in drop.`, 'bg-yellow-600');
    }
}

export function handleDragOver(event) {
    event.preventDefault();
    document.body.classList.add('drag-over');
}

export function handleDragLeave() {
    document.body.classList.remove('drag-over');
}

export function shuffleImages() {
    const arr = state.imageFiles;
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    state.currentIndex = 0;

    if (state.currentScene === SCENES.FOREGROUND_CASCADE) {
        // Force a fresh 3-Up scene prep with the new order
        state.currentScene = SCENES.BACKGROUND_REVEAL;
        dom.foregroundLayer.style.opacity = '0';
        dom.foregroundLayer.style.pointerEvents = 'none';
        dom.foregroundLayer.innerHTML = '';
    }

    if (state.imageFiles.length > 0 && !dom.panelToggle.checked) {
        startSlideshow();
    }

    showMessage(`Reshuffled ${arr.length} item(s).`, 'bg-indigo-600');
}

export function clearImages() {
    state.imageFiles.splice(0, state.imageFiles.length);
    state.currentIndex = 0;
    state.lockedSlots = [false, false, false];
    stopSlideshow();
    updateStatus();
    state.currentScene = SCENES.BACKGROUND_REVEAL;

    dom.bgSlotA.innerHTML = '';
    dom.bgSlotB.innerHTML = '';
    dom.bgSlotA.style.opacity = '0';
    dom.bgSlotB.style.opacity = '0';
    dom.initialMessage.classList.remove('hidden');

    dom.foregroundLayer.innerHTML = '';
    dom.sceneStatus.textContent = "Awaiting Images...";
}
