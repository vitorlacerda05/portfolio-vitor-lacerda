let toasterTimeouts = {
  enabled: null,
  disabled: null
};

function showResetButton() {
  const resetBtn = document.getElementById('reset-button');
  if (resetBtn) {
    resetBtn.style.display = 'flex';
  }
}

function showToaster(type) {
  const toasterEnabled = document.getElementById('toaster-enabled');
  const toasterDisabled = document.getElementById('toaster-disabled');
  
  if (toasterTimeouts.enabled) {
    clearTimeout(toasterTimeouts.enabled);
    toasterTimeouts.enabled = null;
  }
  if (toasterTimeouts.disabled) {
    clearTimeout(toasterTimeouts.disabled);
    toasterTimeouts.disabled = null;
  }
  
  if (toasterEnabled) toasterEnabled.classList.remove('show');
  if (toasterDisabled) toasterDisabled.classList.remove('show');
  
  if (type === 'enabled' && toasterEnabled) {
    toasterEnabled.classList.add('show');
    toasterTimeouts.enabled = setTimeout(() => {
      toasterEnabled.classList.remove('show');
      toasterTimeouts.enabled = null;
    }, 2500);

  } else if (type === 'disabled' && toasterDisabled) {
    toasterDisabled.classList.add('show');
    toasterTimeouts.disabled = setTimeout(() => {
      toasterDisabled.classList.remove('show');
      toasterTimeouts.disabled = null;
    }, 2500);
  }
}

window.uiControls = {
  showResetButton,
  showToaster
};
