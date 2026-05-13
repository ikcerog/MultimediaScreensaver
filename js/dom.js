export const dom = {};

export function initDom() {
    dom.container = document.getElementById('slideshow-container');
    dom.zoomSlider = document.getElementById('zoom-slider');
    dom.zoomValue = document.getElementById('zoom-value');
    dom.imageCount = document.getElementById('image-count');
    dom.sceneStatus = document.getElementById('scene-status');
    dom.threeUpStatus = document.getElementById('three-up-status');
    dom.backgroundLayer = document.getElementById('background-layer');
    dom.foregroundLayer = document.getElementById('foreground-layer');
    dom.bgSlotA = document.getElementById('bg-slot-a');
    dom.bgSlotB = document.getElementById('bg-slot-b');
    dom.initialMessage = document.getElementById('initial-message');
    dom.paceControls = document.getElementById('pace-controls');
    dom.panelToggle = document.getElementById('panel-toggle');
    dom.reshuffleButton = document.getElementById('reshuffle-button');
    dom.audioToggle = document.getElementById('audio-toggle');

    dom.messageBox = document.getElementById('message-box');
    dom.messageClose = document.getElementById('message-close');
    dom.messageContent = document.getElementById('message-content');
}
