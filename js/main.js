import { state, SCENES } from './state.js';
import { dom, initDom } from './dom.js';
import { hideMessage, updateStatus } from './utils.js';
import { stopSlideshow, startSlideshow, setBackgroundAudio } from './scenes.js';
import { handleDrop, handleDragOver, handleDragLeave, clearImages, shuffleImages } from './files.js';
import { updateZoomScale, setPace } from './controls.js';

// Expose clearImages globally for the inline onclick handler in the HTML.
window.clearImages = clearImages;

document.addEventListener('DOMContentLoaded', () => {
    initDom();

    updateStatus();
    clearImages();
    updateZoomScale(parseInt(dom.zoomSlider.value));

    const initialButton = dom.paceControls.querySelector(`[data-pace="${state.slidePace}"]`);
    if (initialButton) {
        initialButton.classList.add('active');
    }

    document.body.addEventListener('dragover', handleDragOver);
    document.body.addEventListener('dragleave', handleDragLeave);
    document.body.addEventListener('drop', handleDrop);

    dom.paceControls.addEventListener('click', (e) => {
        const button = e.target.closest('.pace-button');
        if (button) {
            const paceMs = parseInt(button.dataset.pace);
            setPace(paceMs, button);
        }
    });

    dom.zoomSlider.addEventListener('input', (e) => {
        const percent = parseInt(e.target.value);
        dom.zoomValue.textContent = `${percent}%`;
        updateZoomScale(percent);
    });

    dom.panelToggle.addEventListener('change', () => {
        if (dom.panelToggle.checked) {
            stopSlideshow();
            dom.sceneStatus.textContent = SCENES.PAUSED;
        } else {
            if (state.imageFiles.length > 0) {
                startSlideshow();
            } else {
                dom.sceneStatus.textContent = "Awaiting Images...";
            }
        }
    });

    dom.messageClose.addEventListener('click', hideMessage);

    dom.reshuffleButton.addEventListener('click', shuffleImages);

    dom.audioToggle.checked = state.audioEnabled;
    dom.audioToggle.addEventListener('change', () => {
        setBackgroundAudio(dom.audioToggle.checked);
    });
});
