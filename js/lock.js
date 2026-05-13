import { state, SCENES } from './state.js';
import { startForegroundMode } from './scenes.js';
import { updateThreeUpStatusDisplay } from './status.js';

export function toggleLock(event) {
    if (state.currentScene !== SCENES.FOREGROUND_CASCADE) return;

    const container = event.currentTarget;
    const slotId = parseInt(container.id.split('-')[1]);
    const isLocked = state.lockedSlots[slotId];

    state.lockedSlots[slotId] = !isLocked;

    container.classList.toggle('locked-lane', !isLocked);

    let icon = container.querySelector('.lock-icon');
    if (!isLocked) {
        if (!icon) {
            icon = document.createElement('span');
            icon.className = 'lock-icon text-3xl';
            container.appendChild(icon);
        }
        icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lock-keyhole"><circle cx="12" cy="16" r="1"/><path d="M10 16v-4"/><path d="M12 2C7.58 2 4 5.58 4 10v3a8 8 0 0 0 8 8 8 8 0 0 0 8-8v-3c0-4.42-3.58-8-8-8z"/><path d="M18 10h-2v-3a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v3H6"/></svg>`;

        if (!state.foregroundSwapInterval) {
            startForegroundMode();
        }
    } else {
        if (icon) {
            icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-unlock"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/></svg>`;
            setTimeout(() => icon.remove(), 500);
        }
    }

    updateThreeUpStatusDisplay();
}
