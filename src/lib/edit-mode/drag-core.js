let isDraggableEnabled = true

function disableLinksInDraggable() {
  const draggableElements = document.querySelectorAll('.draggable')
  draggableElements.forEach(element => {
    const links = element.querySelectorAll('a')
    links.forEach(link => {
      link.classList.add('link-disabled')
      link.addEventListener('click', preventLinkClick, true)
    })
  })
}

function enableLinksInDraggable() {
  const draggableElements = document.querySelectorAll('.draggable')
  draggableElements.forEach(element => {
    const links = element.querySelectorAll('a')
    links.forEach(link => {
      link.classList.remove('link-disabled')
      link.removeEventListener('click', preventLinkClick, true)
    })
  })
}

function preventLinkClick(event) {
  if (isDraggableEnabled) {
    event.preventDefault()
    event.stopPropagation()
    return false
  }
}

function dragMoveListener(event) {
  const target = event.target
  const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
  const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

  target.style.transform = `translate(${x}px, ${y}px)`
  target.setAttribute('data-x', x)
  target.setAttribute('data-y', y)

  if (target.classList.contains('animate__animated')) {
    target.style.animationPlayState = 'paused'
  }
}

export function resetPositions() {
  const draggableElements = document.querySelectorAll('.draggable')
  draggableElements.forEach(element => {
    element.style.transform = 'translate(0px, 0px)'
    element.setAttribute('data-x', 0)
    element.setAttribute('data-y', 0)

    if (element.classList.contains('animate__animated')) {
      element.style.animationPlayState = 'running'
    }
  })

  if (window.__paintSystem) {
    window.__paintSystem.clearPaintCanvas()
  }
}

export function toggleDraggableInteract(enabled) {
  if (!window.interact) return
  const draggableElements = document.querySelectorAll('.draggable')

  if (enabled) {
    draggableElements.forEach(element => {
      element.classList.remove('draggable-disabled')
    })

    disableLinksInDraggable()

    window.interact('.draggable').draggable({
      inertia: true,
      modifiers: [
        window.interact.modifiers.restrictRect({
          restriction: '.page-white-container',
          endOnly: true
        })
      ],
      autoScroll: true,
      listeners: {
        start(event) {
          event.target.style.zIndex = 1000
          if (event.target.classList.contains('animate__animated')) {
            event.target.style.animationPlayState = 'paused'
          }
        },
        move: dragMoveListener,
        end(event) {
          event.target.style.zIndex = ''
          if (window.__uiControls?.showResetButton) {
            window.__uiControls.showResetButton()
          }
        }
      }
    })
  } else {
    draggableElements.forEach(element => {
      element.classList.add('draggable-disabled')
    })

    enableLinksInDraggable()
    window.interact('.draggable').unset()
  }
}

export const dragCore = {
  isDraggableEnabled: () => isDraggableEnabled,
  setDraggableEnabled: (enabled) => { isDraggableEnabled = enabled },
  toggleDraggableInteract,
  resetPositions,
  disableLinksInDraggable,
  enableLinksInDraggable
}

// Also expose via window for paint-system access (keeps existing pattern)
if (typeof window !== 'undefined') {
  window.__dragCore = dragCore
}
