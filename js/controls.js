import { state, SCENES } from './state.js';
import { dom } from './dom.js';
import { startSlideshow } from './scenes.js';

export function updateZoomScale(percentage) {
    const baseScale = 1.05;
    const zoomDecimal = baseScale + (percentage / 100);
    dom.container.style.setProperty('--zoom-scale-end', zoomDecimal);

    const panValue = percentage === 0 ? '0' : '-1%';
    dom.container.style.setProperty('--pan-x', panValue);
    dom.container.style.setProperty('--pan-y', panValue);
}

export function setPace(paceMs, button) {
    state.slidePace = paceMs;

    document.querySelectorAll('.pace-button').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    if (state.imageFiles.length > 0 && state.currentScene !== SCENES.PAUSED) {
        startSlideshow();
    }
}
