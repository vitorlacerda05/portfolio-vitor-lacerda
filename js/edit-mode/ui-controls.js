function showResetButton() {
  const resetBtn = document.getElementById('reset-button');
  if (resetBtn) {
    resetBtn.style.display = 'flex';
  }
}

function showToaster(type) {
  const toasterEnabled = document.getElementById('toaster-enabled');
  const toasterDisabled = document.getElementById('toaster-disabled');
  
  if (toasterEnabled) toasterEnabled.classList.remove('show');
  if (toasterDisabled) toasterDisabled.classList.remove('show');
  
  if (type === 'enabled' && toasterEnabled) {
    toasterEnabled.classList.add('show');
    setTimeout(() => {
      toasterEnabled.classList.remove('show');
    }, 2500);
  } else if (type === 'disabled' && toasterDisabled) {
    toasterDisabled.classList.add('show');
    setTimeout(() => {
      toasterDisabled.classList.remove('show');
    }, 2500);
  }
}

window.uiControls = {
  showResetButton,
  showToaster
};
