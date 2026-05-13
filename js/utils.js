import { state } from './state.js';
import { dom } from './dom.js';

export function createImageElement(file) {
    const img = document.createElement('img');
    img.src = file.base64;
    img.className = 'slide-image absolute inset-0';

    return new Promise((resolve) => {
        img.onload = () => resolve(img);
        img.onerror = () => {
            console.error("Image loading failed (Base64 likely corrupted or broken). Using fallback.");
            img.src = `https://placehold.co/1000x1000/374151/D1D5DB?text=Image+Error`;
            resolve(img);
        };

        if (img.complete && img.naturalHeight !== 0) {
            resolve(img);
        }
    });
}

export function findNextImages(count, filterFn) {
    const results = [];
    let imagesFound = 0;
    let nextIndex = state.currentIndex;
    let safetyCounter = 0;

    while (imagesFound < count && safetyCounter < state.imageFiles.length * 2) {
        const file = state.imageFiles[nextIndex % state.imageFiles.length];
        if (file && filterFn(file)) {
            results.push(file);
            imagesFound++;
        }
        nextIndex = (nextIndex + 1) % state.imageFiles.length;
        safetyCounter++;
    }

    state.currentIndex = nextIndex;
    return results;
}

export function updateStatus() {
    dom.imageCount.textContent = state.imageFiles.length;
}

export function hideMessage() {
    clearTimeout(state.messageTimeout);
    dom.messageBox.classList.remove('opacity-100');
    dom.messageBox.classList.add('opacity-0');
    setTimeout(() => dom.messageBox.classList.add('hidden'), 300);
}

export function showMessage(message, bgColor = 'bg-red-600') {
    clearTimeout(state.messageTimeout);
    dom.messageContent.textContent = message;
    dom.messageBox.className = dom.messageBox.className.replace(/bg-[\w-]+/g, '');
    dom.messageBox.classList.remove('hidden', 'opacity-0');
    dom.messageBox.classList.add('flex', 'opacity-100', bgColor);
    state.messageTimeout = setTimeout(hideMessage, 10000);
}
