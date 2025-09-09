function toggleDraggable(enabled, showToasterMessage = true) {
  window.dragCore.setDraggableEnabled(enabled);
  
  if (enabled) {
    window.paintSystem.initPaintCanvas();
    window.paintSystem.addPaintEventListeners();
    window.dragCore.toggleDraggableInteract(true);
    
    if (showToasterMessage) {
      window.uiControls.showToaster('enabled');
    }
  } else {
    window.paintSystem.removePaintEventListeners();
    document.body.style.cursor = 'default';
    window.dragCore.toggleDraggableInteract(false);
    
    if (showToasterMessage) {
      window.uiControls.showToaster('disabled');
    }
  }
}

window.toggleDraggable = toggleDraggable;