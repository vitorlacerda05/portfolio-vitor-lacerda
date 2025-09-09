let isDraggableEnabled = true;

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

function preventLinkClick(event) {
  if (isDraggableEnabled) {
    event.preventDefault();
    event.stopPropagation();
    return false;
  }
}

function dragMoveListener(event) {
  const target = event.target;
  const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
  const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

  target.style.transform = `translate(${x}px, ${y}px)`;
  target.setAttribute('data-x', x);
  target.setAttribute('data-y', y);
  
  if (target.classList.contains('animate__animated')) {
    target.style.animationPlayState = 'paused';
  }
}

function resetPositions() {
  const draggableElements = document.querySelectorAll('.draggable');
  draggableElements.forEach(element => {
    element.style.transform = 'translate(0px, 0px)';
    element.setAttribute('data-x', 0);
    element.setAttribute('data-y', 0);
    
    if (element.classList.contains('animate__animated')) {
      element.style.animationPlayState = 'running';
    }
  });
  
  if (window.clearPaintCanvas) {
    window.clearPaintCanvas();
  }
  
  const resetBtn = document.getElementById('reset-button');
  if (resetBtn) {
    resetBtn.style.display = 'none';
  }
}

function initDraggable() {
  interact('.draggable').draggable({
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
        
        if (event.target.classList.contains('animate__animated')) {
          event.target.style.animationPlayState = 'paused';
        }
      },
      move: dragMoveListener,
      end: function (event) {
        event.target.style.zIndex = '';
        if (window.showResetButton) {
          window.showResetButton();
        }
      }
    }
  });
}

function toggleDraggableInteract(enabled) {
  const draggableElements = document.querySelectorAll('.draggable');
  
  if (enabled) {
    draggableElements.forEach(element => {
      element.classList.remove('draggable-disabled');
    });
    
    disableLinksInDraggable();
    
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
          
          if (event.target.classList.contains('animate__animated')) {
            event.target.style.animationPlayState = 'paused';
          }
        },
        move: dragMoveListener,
        end: function (event) {
          event.target.style.zIndex = '';
          if (window.showResetButton) {
            window.showResetButton();
          }
        }
      }
    });
  } else {
    draggableElements.forEach(element => {
      element.classList.add('draggable-disabled');
    });
    
    enableLinksInDraggable();
    interact('.draggable').unset();
  }
}

document.addEventListener('DOMContentLoaded', function() {
  disableLinksInDraggable();
  
  const resetBtn = document.getElementById('reset-button');
  if (resetBtn) {
    resetBtn.addEventListener('click', resetPositions);
  }
  
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

window.dragCore = {
  isDraggableEnabled: () => isDraggableEnabled,
  setDraggableEnabled: (enabled) => { isDraggableEnabled = enabled; },
  toggleDraggableInteract,
  resetPositions
};
