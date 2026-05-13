export const MAX_IMAGES = 200;
export const THREE_UP_SLOTS = 3;
export const THREE_UP_SET_SIZE = 9;
export const THREE_UP_TRANSITIONS_PER_SCENE = 8;
export const MIN_BACKGROUND_HOLD_TIME = 12000;

export const PACE_SETTINGS = {
    '8000': 'Slow (8s)',
    '5000': 'Mid (5s)',
    '3000': 'Fast (3s)'
};

export const SCENES = {
    BACKGROUND_REVEAL: 'Fullpage Focus (1-Up)',
    FOREGROUND_CASCADE: 'Triple Cascade (3-Up)',
    PAUSED: 'Paused (Controls Open)'
};

export const state = {
    imageFiles: [],
    currentIndex: 0,
    slidePace: 5000,
    currentScene: SCENES.BACKGROUND_REVEAL,
    threeUpInternalTransitionsRemaining: 0,
    lockedSlots: [false, false, false],
    currentBgSlot: 'b',

    foregroundSwapInterval: null,
    backgroundSwapInterval: null,
    backgroundHoldTimeout: null,
    internalSlideTimeout: null,

    messageTimeout: null
};
