import { state, SCENES, MIN_BACKGROUND_HOLD_TIME } from './state.js';
import { dom } from './dom.js';

export function updateThreeUpStatusDisplay() {
    const lockedCount = state.lockedSlots.filter(l => l).length;
    if (state.currentScene === SCENES.FOREGROUND_CASCADE) {
        if (lockedCount > 0) {
            dom.threeUpStatus.innerHTML = `<span class="text-amber-400">LOCKED: ${lockedCount} lane(s) held.</span> (Click a lane to unlock)`;
        } else {
            dom.threeUpStatus.textContent = `Internal swaps left: ${state.threeUpInternalTransitionsRemaining}`;
        }
    } else if (state.currentScene === SCENES.BACKGROUND_REVEAL && state.backgroundHoldTimeout && state.backgroundHoldTimeout.startTime) {
        const remainingTime = Math.ceil((state.backgroundHoldTimeout.startTime + MIN_BACKGROUND_HOLD_TIME - Date.now()) / 1000);
        dom.threeUpStatus.textContent = `3-Up returns in: ${Math.max(0, remainingTime)}s`;

        if (!dom.panelToggle.checked) {
            requestAnimationFrame(updateThreeUpStatusDisplay);
        }
    } else {
        dom.threeUpStatus.textContent = '';
    }
}
