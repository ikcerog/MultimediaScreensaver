import { state, SCENES, MAX_IMAGES } from './state.js';
import { dom } from './dom.js';
import { showMessage, updateStatus } from './utils.js';
import { stopSlideshow, startSlideshow } from './scenes.js';

export function processFile(file) {
    const reader = new FileReader();
    reader.onload = function(e) {
        const tempImg = new Image();
        tempImg.onload = function() {
            const aspectRatio = tempImg.width / tempImg.height;

            if (state.imageFiles.length < MAX_IMAGES) {
                state.imageFiles.push({
                    base64: e.target.result,
                    type: file.type,
                    aspectRatio: aspectRatio
                });
                updateStatus();

                dom.initialMessage.classList.add('hidden');

                if (state.imageFiles.length === 1 && !dom.panelToggle.checked) {
                    startSlideshow();
                }
            } else {
                showMessage(`Maximum of ${MAX_IMAGES} images reached.`, 'bg-red-600');
            }
        };
        tempImg.src = e.target.result;
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
        if (file && file.type.startsWith('image/')) {
            processFile(file);
            filesLoaded++;
        }
    });

    if (filesLoaded > 0) {
        showMessage(`Successfully added ${filesLoaded} image file(s).`, 'bg-green-600');
    } else {
        showMessage(`No valid image files found in drop.`, 'bg-yellow-600');
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

    showMessage(`Reshuffled ${arr.length} image(s).`, 'bg-indigo-600');
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
