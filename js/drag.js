let isDraggableEnabled = true;
let isPainting = false;
let paintCanvas = null;
let paintContext = null;
let paintHistory = [];

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
    // Initialize paint canvas
    initPaintCanvas();
    
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
    
    // Add paint event listeners
    addPaintEventListeners();
    
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
    // Remove paint event listeners
    removePaintEventListeners();
    
    // Reset cursor to default
    document.body.style.cursor = 'default';
    
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
  
  // Clear paint canvas
  clearPaintCanvas();
  
  // Hide the reset button
  const resetBtn = document.getElementById('reset-button');
  if (resetBtn) {
    resetBtn.style.display = 'none';
  }
}

// Paint functionality
function initPaintCanvas() {
  const container = document.querySelector('.page-white-container');
  if (!container || paintCanvas) return;
  
  // Create canvas overlay
  paintCanvas = document.createElement('canvas');
  paintCanvas.id = 'paint-canvas';
  paintCanvas.style.position = 'absolute';
  paintCanvas.style.top = '0';
  paintCanvas.style.left = '0';
  paintCanvas.style.width = '100%';
  paintCanvas.style.height = '100%';
  paintCanvas.style.pointerEvents = 'none';
  paintCanvas.style.zIndex = '1';
  
  container.appendChild(paintCanvas);
  paintContext = paintCanvas.getContext('2d');
  
  // Set canvas size
  resizePaintCanvas();
  
  // Add resize listener
  window.addEventListener('resize', resizePaintCanvas);
}

function resizePaintCanvas() {
  if (!paintCanvas) return;
  
  const container = document.querySelector('.page-white-container');
  const rect = container.getBoundingClientRect();
  
  paintCanvas.width = rect.width;
  paintCanvas.height = rect.height;
  
  // Redraw paint history
  redrawPaintHistory();
}

function redrawPaintHistory() {
  if (!paintContext || paintHistory.length === 0) return;
  
  paintContext.clearRect(0, 0, paintCanvas.width, paintCanvas.height);
  
  paintHistory.forEach(stroke => {
    paintContext.beginPath();
    paintContext.strokeStyle = stroke.color;
    paintContext.lineWidth = stroke.width;
    paintContext.lineCap = 'round';
    paintContext.lineJoin = 'round';
    
    for (let i = 0; i < stroke.points.length; i++) {
      const point = stroke.points[i];
      if (i === 0) {
        paintContext.moveTo(point.x, point.y);
      } else {
        paintContext.lineTo(point.x, point.y);
      }
    }
    paintContext.stroke();
  });
}

function clearPaintCanvas() {
  if (!paintContext) return;
  
  paintContext.clearRect(0, 0, paintCanvas.width, paintCanvas.height);
  paintHistory = [];
}

function startPaint(event) {
  if (!isDraggableEnabled || !paintCanvas) return;
  
  isPainting = true;
  const rect = paintCanvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  
  // Start new stroke
  paintHistory.push({
    color: '#2196F3',
    width: 3,
    points: [{ x, y }]
  });
  
  paintContext.beginPath();
  paintContext.strokeStyle = '#2196F3';
  paintContext.lineWidth = 3;
  paintContext.lineCap = 'round';
  paintContext.lineJoin = 'round';
  paintContext.moveTo(x, y);
}

function paint(event) {
  if (!isPainting || !paintContext || paintHistory.length === 0) return;
  
  const rect = paintCanvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  
  // Add point to current stroke
  const currentStroke = paintHistory[paintHistory.length - 1];
  currentStroke.points.push({ x, y });
  
  paintContext.lineTo(x, y);
  paintContext.stroke();
}

function stopPaint() {
  isPainting = false;
}

function isOverDraggableElement(event) {
  const draggableElements = document.querySelectorAll('.draggable');
  for (let element of draggableElements) {
    const rect = element.getBoundingClientRect();
    if (event.clientX >= rect.left && event.clientX <= rect.right &&
        event.clientY >= rect.top && event.clientY <= rect.bottom) {
      return true;
    }
  }
  return false;
}

function updateCursor(event) {
  if (!isDraggableEnabled) {
    document.body.style.cursor = 'default';
    return;
  }
  
  if (isOverDraggableElement(event)) {
    document.body.style.cursor = 'grab';
  } else {
    document.body.style.cursor = 'crosshair';
  }
}

// Paint event listeners management
function addPaintEventListeners() {
  const container = document.querySelector('.page-white-container');
  if (!container) return;
  
  container.addEventListener('mousedown', handlePaintStart);
  container.addEventListener('mousemove', handlePaintMove);
  container.addEventListener('mouseup', handlePaintEnd);
  container.addEventListener('mouseleave', handlePaintEnd);
  container.addEventListener('mousemove', updateCursor);
  
  // Touch events for mobile
  container.addEventListener('touchstart', handlePaintStart, { passive: false });
  container.addEventListener('touchmove', handlePaintMove, { passive: false });
  container.addEventListener('touchend', handlePaintEnd);
}

function removePaintEventListeners() {
  const container = document.querySelector('.page-white-container');
  if (!container) return;
  
  container.removeEventListener('mousedown', handlePaintStart);
  container.removeEventListener('mousemove', handlePaintMove);
  container.removeEventListener('mouseup', handlePaintEnd);
  container.removeEventListener('mouseleave', handlePaintEnd);
  container.removeEventListener('mousemove', updateCursor);
  
  // Touch events for mobile
  container.removeEventListener('touchstart', handlePaintStart);
  container.removeEventListener('touchmove', handlePaintMove);
  container.removeEventListener('touchend', handlePaintEnd);
}

function handlePaintStart(event) {
  if (!isDraggableEnabled || isOverDraggableElement(event)) return;
  
  event.preventDefault();
  startPaint(event);
}

function handlePaintMove(event) {
  if (!isDraggableEnabled) return;
  
  if (isPainting && !isOverDraggableElement(event)) {
    event.preventDefault();
    paint(event);
  }
}

function handlePaintEnd(event) {
  if (!isDraggableEnabled) return;
  
  if (isPainting) {
    event.preventDefault();
    stopPaint();
    showResetButton();
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