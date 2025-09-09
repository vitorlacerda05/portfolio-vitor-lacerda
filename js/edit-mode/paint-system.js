let isPainting = false;
let paintCanvas = null;
let paintContext = null;
let paintHistory = [];

function initPaintCanvas() {
  const container = document.querySelector('.page-white-container');
  if (!container || paintCanvas) return;
  
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
  
  resizePaintCanvas();
  window.addEventListener('resize', resizePaintCanvas);
}

function resizePaintCanvas() {
  if (!paintCanvas) return;
  
  const container = document.querySelector('.page-white-container');
  const rect = container.getBoundingClientRect();
  
  paintCanvas.width = rect.width;
  paintCanvas.height = rect.height;
  
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
  if (!window.dragCore.isDraggableEnabled() || !paintCanvas) return;
  
  isPainting = true;
  const rect = paintCanvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  
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
  if (!window.dragCore.isDraggableEnabled()) {
    document.body.style.cursor = 'default';
    return;
  }
  
  if (isOverDraggableElement(event)) {
    document.body.style.cursor = 'grab';
  } else {
    document.body.style.cursor = 'crosshair';
  }
}

function addPaintEventListeners() {
  const container = document.querySelector('.page-white-container');
  if (!container) return;
  
  container.addEventListener('mousedown', handlePaintStart);
  container.addEventListener('mousemove', handlePaintMove);
  container.addEventListener('mouseup', handlePaintEnd);
  container.addEventListener('mouseleave', handlePaintEnd);
  container.addEventListener('mousemove', updateCursor);
  
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
  
  container.removeEventListener('touchstart', handlePaintStart);
  container.removeEventListener('touchmove', handlePaintMove);
  container.removeEventListener('touchend', handlePaintEnd);
}

function handlePaintStart(event) {
  if (!window.dragCore.isDraggableEnabled() || isOverDraggableElement(event)) return;
  
  event.preventDefault();
  startPaint(event);
}

function handlePaintMove(event) {
  if (!window.dragCore.isDraggableEnabled()) return;
  
  if (isPainting && !isOverDraggableElement(event)) {
    event.preventDefault();
    paint(event);
  }
}

function handlePaintEnd(event) {
  if (!window.dragCore.isDraggableEnabled()) return;
  
  if (isPainting) {
    event.preventDefault();
    stopPaint();
    if (window.showResetButton) {
      window.showResetButton();
    }
  }
}

window.paintSystem = {
  initPaintCanvas,
  clearPaintCanvas,
  addPaintEventListeners,
  removePaintEventListeners
};
