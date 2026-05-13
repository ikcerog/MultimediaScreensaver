import {
    state,
    SCENES,
    THREE_UP_SLOTS,
    THREE_UP_SET_SIZE,
    THREE_UP_TRANSITIONS_PER_SCENE,
    MIN_BACKGROUND_HOLD_TIME
} from './state.js';
import { dom } from './dom.js';
import { createMediaElement, findNextImages } from './utils.js';
import { updateThreeUpStatusDisplay } from './status.js';
import { toggleLock } from './lock.js';

export function stopSlideshow() {
    clearInterval(state.foregroundSwapInterval);
    clearInterval(state.backgroundSwapInterval);
    clearTimeout(state.backgroundHoldTimeout);
    clearTimeout(state.internalSlideTimeout);
    state.foregroundSwapInterval = null;
    state.backgroundSwapInterval = null;
    state.backgroundHoldTimeout = null;
    state.internalSlideTimeout = null;
}

export function startSlideshow() {
    stopSlideshow();
    if (state.imageFiles.length === 0) return;

    if (state.lockedSlots.some(l => l) && state.currentScene === SCENES.FOREGROUND_CASCADE) {
        dom.sceneStatus.textContent = "Lanes Locked (Unlocking resumes scene cycle)";
        startForegroundMode();
        return;
    }

    if (state.currentScene === SCENES.FOREGROUND_CASCADE) {
        startForegroundMode();
    } else {
        startBackgroundMode();
    }
}

export function startBackgroundMode() {
    if (state.imageFiles.length === 0) return;

    state.currentScene = SCENES.BACKGROUND_REVEAL;
    dom.sceneStatus.textContent = SCENES.BACKGROUND_REVEAL;

    updateBackgroundScene();

    state.backgroundSwapInterval = setInterval(updateBackgroundScene, state.slidePace);

    updateThreeUpStatusDisplay();

    const startTime = Date.now();
    state.backgroundHoldTimeout = setTimeout(() => {
        if (state.currentScene === SCENES.BACKGROUND_REVEAL) {
            startForegroundMode();
        }
    }, MIN_BACKGROUND_HOLD_TIME);
    state.backgroundHoldTimeout.startTime = startTime;
}

export async function startForegroundMode() {
    if (state.imageFiles.length < THREE_UP_SLOTS) {
        console.warn("Not enough images for 3-Up. Staying in 1-Up mode.");
        startBackgroundMode();
        return;
    }

    if (state.backgroundSwapInterval) {
        clearInterval(state.backgroundSwapInterval);
        clearTimeout(state.backgroundHoldTimeout);
    }

    if (state.currentScene !== SCENES.FOREGROUND_CASCADE) {
        const success = await prepareForegroundScene();

        if (!success) {
            startBackgroundMode();
            return;
        }

        state.currentScene = SCENES.FOREGROUND_CASCADE;
        dom.sceneStatus.textContent = `FADING IN ${SCENES.FOREGROUND_CASCADE}`;

        dom.foregroundLayer.style.opacity = '1';
        dom.foregroundLayer.style.pointerEvents = 'all';

        // Mute + pause any background video while 3-Up is on top
        [dom.bgSlotA, dom.bgSlotB].forEach(slot => {
            const v = slot.querySelector('video');
            if (v) { v.muted = true; v.pause(); }
        });

        state.threeUpInternalTransitionsRemaining = THREE_UP_TRANSITIONS_PER_SCENE;
    }

    if (!state.foregroundSwapInterval) {
        setTimeout(() => {
            dom.sceneStatus.textContent = SCENES.FOREGROUND_CASCADE;
            updateForegroundSlots();
            state.foregroundSwapInterval = setInterval(handleForegroundStep, state.slidePace);
        }, 1000);
    }
}

function handleForegroundStep() {
    const anyLocked = state.lockedSlots.some(l => l);

    updateForegroundSlots();

    if (anyLocked) {
        dom.sceneStatus.textContent = SCENES.FOREGROUND_CASCADE + " (LOCKED)";
        return;
    }

    state.threeUpInternalTransitionsRemaining--;

    if (state.threeUpInternalTransitionsRemaining > 0) {
        return;
    }

    dom.sceneStatus.textContent = `FADING OUT ${SCENES.FOREGROUND_CASCADE}...`;
    clearInterval(state.foregroundSwapInterval);
    state.foregroundSwapInterval = null;

    dom.foregroundLayer.style.opacity = '0';
    dom.foregroundLayer.style.pointerEvents = 'none';

    setTimeout(() => {
        dom.foregroundLayer.innerHTML = '';
        startBackgroundMode();
    }, 1000);
}

async function prepareForegroundScene() {
    state.lockedSlots = [false, false, false];

    const portraitImages = findNextImages(THREE_UP_SET_SIZE, file => file.aspectRatio < 1.0);

    if (portraitImages.length < THREE_UP_SLOTS) {
        console.warn("Not enough portrait images for 3-Up. Requires at least 3.");
        return false;
    }

    dom.foregroundLayer.innerHTML = '';
    dom.foregroundLayer.className = 'slideshow-layer opacity-0 z-20 layout-3-up';
    dom.foregroundLayer.style.pointerEvents = 'all';

    const imageLoadPromises = [];

    for (let i = 0; i < THREE_UP_SLOTS; i++) {
        const slotContainer = document.createElement('div');
        slotContainer.className = 'slide-image-container';
        slotContainer.id = `slot-${i}`;
        slotContainer.addEventListener('click', toggleLock);

        for (let j = 0; j < 3; j++) {
            const imageIndex = (i + j * THREE_UP_SLOTS) % portraitImages.length;
            const file = portraitImages[imageIndex];

            const promise = createMediaElement(file).then(media => {
                media.style.opacity = j === 0 ? '1' : '0';
                media.style.zIndex = j === 0 ? '1' : '0';
                media.dataset.slotIndex = j;
                if (media.tagName === 'VIDEO') {
                    media.muted = true; // 3-Up lanes never play audio
                    if (j === 0) {
                        media.play().catch(() => {});
                    } else {
                        media.pause();
                    }
                }
                slotContainer.appendChild(media);
            });
            imageLoadPromises.push(promise);
        }

        dom.foregroundLayer.appendChild(slotContainer);
    }

    await Promise.all(imageLoadPromises);
    return true;
}

function updateForegroundSlots() {
    updateThreeUpStatusDisplay();

    const availableSlots = [0, 1, 2].filter(i => !state.lockedSlots[i]);

    if (availableSlots.length === 0) return;

    const randomIndex = Math.floor(Math.random() * availableSlots.length);
    const slotIndexToUpdate = availableSlots[randomIndex];

    const slotContainer = dom.foregroundLayer.querySelector(`#slot-${slotIndexToUpdate}`);
    if (!slotContainer) return;

    const currentImages = Array.from(slotContainer.querySelectorAll('.slide-image'));

    const activeImage = currentImages.find(img => img.style.opacity === '1');

    if (activeImage) {
        const activeSlotIndex = parseInt(activeImage.dataset.slotIndex);
        const nextSlotIndex = (activeSlotIndex + 1) % currentImages.length;
        const nextImage = currentImages.find(img => parseInt(img.dataset.slotIndex) === nextSlotIndex);

        if (nextImage) {
            activeImage.style.opacity = '0';
            activeImage.style.zIndex = '0';
            if (activeImage.tagName === 'VIDEO') activeImage.pause();

            nextImage.style.opacity = '1';
            nextImage.style.zIndex = '1';
            if (nextImage.tagName === 'VIDEO') {
                nextImage.currentTime = 0;
                nextImage.play().catch(() => {});
            }
        }
    }
}

async function updateBackgroundScene() {
    dom.sceneStatus.textContent = SCENES.BACKGROUND_REVEAL;
    updateThreeUpStatusDisplay();

    let nextImageFiles = findNextImages(1, file => file.aspectRatio >= 1.0);

    if (nextImageFiles.length === 0) {
        nextImageFiles = findNextImages(1, () => true);
        if (nextImageFiles.length === 0) {
            console.error("No images available for background scene.");
            return false;
        }
        console.warn("Could not find a landscape image (aspect ratio >= 1.0). Falling back to the next available image.");
    }

    const file = nextImageFiles[0];

    const activeSlot = (state.currentBgSlot === 'a') ? dom.bgSlotA : dom.bgSlotB;
    const inactiveSlot = (state.currentBgSlot === 'a') ? dom.bgSlotB : dom.bgSlotA;

    const newMedia = await createMediaElement(file);

    // Pause + mute the outgoing media (if it was a video)
    const outgoingVideo = activeSlot.querySelector('video');
    if (outgoingVideo) {
        outgoingVideo.muted = true;
        outgoingVideo.pause();
    }

    inactiveSlot.innerHTML = '';
    inactiveSlot.appendChild(newMedia);

    if (newMedia.tagName === 'VIDEO') {
        newMedia.muted = !state.audioEnabled;
        newMedia.play().catch(() => {});
    }

    activeSlot.style.zIndex = '1';
    inactiveSlot.style.zIndex = '2';

    inactiveSlot.style.opacity = '1';
    activeSlot.style.opacity = '0';

    state.currentBgSlot = (state.currentBgSlot === 'a') ? 'b' : 'a';

    return true;
}

export function setBackgroundAudio(enabled) {
    state.audioEnabled = enabled;
    [dom.bgSlotA, dom.bgSlotB].forEach(slot => {
        const v = slot.querySelector('video');
        if (!v) return;
        // Only the visible slot may emit audio
        if (slot.style.opacity === '1') {
            v.muted = !enabled;
        } else {
            v.muted = true;
        }
    });
}
