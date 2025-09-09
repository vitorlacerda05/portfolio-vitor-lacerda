let isDraggableEnabled = true;

// Function to disable all links inside draggable elements
function disableLinksInDraggable() {
  const draggableElements = document.querySelectorAll('.draggable');
  draggableElements.forEach(element => {
    const links = element.querySelectorAll('a');
    links.forEach(link => {
      link.classList.add('link-disabled');
      link.addEventListener('click', preventLinkClick, true);
    });
  });
}

// Function to enable all links inside draggable elements
function enableLinksInDraggable() {
  const draggableElements = document.querySelectorAll('.draggable');
  draggableElements.forEach(element => {
    const links = element.querySelectorAll('a');
    links.forEach(link => {
      link.classList.remove('link-disabled');
      link.removeEventListener('click', preventLinkClick, true);
    });
  });
}

// Function to prevent link clicks when drag is enabled
function preventLinkClick(event) {
  if (isDraggableEnabled) {
    event.preventDefault();
    event.stopPropagation();
    return false;
  }
}

// Function to enable/disable draggable functionality
function toggleDraggable(enabled, showToasterMessage = true) {
  isDraggableEnabled = enabled;
  
  // Get all draggable elements
  const draggableElements = document.querySelectorAll('.draggable');
  
  if (enabled) {
    // Remove disabled class from all draggable elements
    draggableElements.forEach(element => {
      element.classList.remove('draggable-disabled');
    });
    
    // Disable all links inside draggable elements
    disableLinksInDraggable();
    
    // Show toaster
    if (showToasterMessage) {
      showToaster('enabled');
    }
    
    // Re-enable draggable for all elements
    interact('.draggable').draggable({
      inertia: true,
      modifiers: [
        interact.modifiers.restrictRect({
          restriction: '.page-white-container',
          endOnly: true
        })
      ],
      autoScroll: true,
      listeners: {
        start: function (event) {
          event.target.style.zIndex = 1000;
          
          // Pausar animações do Animate.css quando começar a arrastar
          if (event.target.classList.contains('animate__animated')) {
            event.target.style.animationPlayState = 'paused';
          }
        },
        move: dragMoveListener,
        end: function (event) {
          event.target.style.zIndex = '';
          showResetButton();
        }
      }
    });
  } else {
    // Add disabled class to all draggable elements
    draggableElements.forEach(element => {
      element.classList.add('draggable-disabled');
    });
    
    // Re-enable all links inside draggable elements
    enableLinksInDraggable();
    
    // Show toaster
    if (showToasterMessage) {
      showToaster('disabled');
    }
    
    // Disable draggable for all elements
    interact('.draggable').unset();
  }
}

// Initial Interact.js configuration
interact('.draggable')
  .draggable({
    inertia: true,
    modifiers: [
      interact.modifiers.restrictRect({
        restriction: 'body',
        endOnly: true
      })
    ],
    autoScroll: true,
    listeners: {
      start: function (event) {
        if (!isDraggableEnabled) return false;
        event.target.style.zIndex = 1000;
        
        // Pausar animações do Animate.css quando começar a arrastar
        if (event.target.classList.contains('animate__animated')) {
          event.target.style.animationPlayState = 'paused';
        }
      },
      move: dragMoveListener,
      end: function (event) {
        event.target.style.zIndex = '';
        showResetButton();
      }
    }
  });

// Initialize links as disabled since draggable is enabled by default
document.addEventListener('DOMContentLoaded', function() {
  disableLinksInDraggable();
});

// Function to move the element
function dragMoveListener(event) {
  const target = event.target;
  const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
  const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

  // Garantir que as transformações do drag tenham prioridade sobre as animações
  target.style.transform = `translate(${x}px, ${y}px)`;
  target.setAttribute('data-x', x);
  target.setAttribute('data-y', y);
  
  // Pausar animações durante o movimento
  if (target.classList.contains('animate__animated')) {
    target.style.animationPlayState = 'paused';
  }
}

// Function to show the reset button
function showResetButton() {
  const resetBtn = document.getElementById('reset-button');
  if (resetBtn) {
    resetBtn.style.display = 'flex';
  }
}

// Function to show toaster
function showToaster(type) {
  const toasterEnabled = document.getElementById('toaster-enabled');
  const toasterDisabled = document.getElementById('toaster-disabled');
  
  // Hide both toasters first
  if (toasterEnabled) toasterEnabled.classList.remove('show');
  if (toasterDisabled) toasterDisabled.classList.remove('show');
  
  // Show the appropriate toaster
  if (type === 'enabled' && toasterEnabled) {
    toasterEnabled.classList.add('show');
    // Hide toaster after 3 seconds
    setTimeout(() => {
      toasterEnabled.classList.remove('show');
    }, 2500);
  } else if (type === 'disabled' && toasterDisabled) {
    toasterDisabled.classList.add('show');
    // Hide toaster after 3 seconds
    setTimeout(() => {
      toasterDisabled.classList.remove('show');
    }, 2500);
  }
}

// Function to reset positions
function resetPositions() {
  const draggableElements = document.querySelectorAll('.draggable');
  draggableElements.forEach(element => {
    element.style.transform = 'translate(0px, 0px)';
    element.setAttribute('data-x', 0);
    element.setAttribute('data-y', 0);
    
    // Retomar animações quando resetar posições
    if (element.classList.contains('animate__animated')) {
      element.style.animationPlayState = 'running';
    }
  });
  
  // Hide the reset button
  const resetBtn = document.getElementById('reset-button');
  if (resetBtn) {
    resetBtn.style.display = 'none';
  }
}

// Add click event to the reset button
document.addEventListener('DOMContentLoaded', function() {
  const resetBtn = document.getElementById('reset-button');
  if (resetBtn) {
    resetBtn.addEventListener('click', resetPositions);
  }
  
  // Smooth navigation for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        const elementPosition = targetElement.offsetTop - 80;
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}); 