let isDraggableEnabled = true;

// Function to enable/disable draggable functionality
function toggleDraggable(enabled) {
  isDraggableEnabled = enabled;
  
  if (enabled) {
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
        },
        move: dragMoveListener,
        end: function (event) {
          event.target.style.zIndex = '';
          showResetButton();
        }
      }
    });
  } else {
    interact('.draggable').unset();
  }
}

// Initial Interact.js configuration
interact('.draggable')
  .draggable({
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
        if (!isDraggableEnabled) return false;
        event.target.style.zIndex = 1000;
      },
      move: dragMoveListener,
      end: function (event) {
        event.target.style.zIndex = '';
        showResetButton();
      }
    }
  });

// Function to move the element
function dragMoveListener(event) {
  const target = event.target;
  const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
  const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

  target.style.transform = `translate(${x}px, ${y}px)`;
  target.setAttribute('data-x', x);
  target.setAttribute('data-y', y);
}

// Function to show the reset button
function showResetButton() {
  const resetBtn = document.getElementById('reset-button');
  if (resetBtn) {
    resetBtn.style.display = 'flex';
  }
}

// Function to reset positions
function resetPositions() {
  const draggableElements = document.querySelectorAll('.draggable');
  draggableElements.forEach(element => {
    element.style.transform = 'translate(0px, 0px)';
    element.setAttribute('data-x', 0);
    element.setAttribute('data-y', 0);
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