import { ref, nextTick, onMounted, onBeforeUnmount } from 'vue'
import { dragCore } from '../lib/edit-mode/drag-core.js'
import { paintSystem } from '../lib/edit-mode/paint-system.js'

/**
 * Drives the "pencil vs hand" edit mode:
 * - Hand (default): drag disabled, paint disabled, links clickable.
 * - Pencil: interact.js draggable + canvas paint active, links frozen.
 *
 * Must be called from a component that actually renders `.page-white-container`
 * and `.draggable` nodes (i.e. Home view).
 */
export function useEditMode() {
  const editMode = ref(false) // false = hand, true = pencil
  const showReset = ref(false)
  const toaster = ref({ show: false, variant: 'enabled' })

  let toasterTimeout = null

  function showToaster(variant) {
    if (toasterTimeout) clearTimeout(toasterTimeout)
    toaster.value = { show: true, variant }
    toasterTimeout = setTimeout(() => {
      toaster.value = { ...toaster.value, show: false }
      toasterTimeout = null
    }, 2500)
  }

  function showResetButton() {
    showReset.value = true
  }

  // Expose to paint-system / drag-core via window
  if (typeof window !== 'undefined') {
    window.__uiControls = { showResetButton, showToaster }
  }

  function applyMode(pencil, { announce = true } = {}) {
    editMode.value = pencil
    dragCore.setDraggableEnabled(pencil)

    if (pencil) {
      paintSystem.initPaintCanvas()
      paintSystem.addPaintEventListeners()
      dragCore.toggleDraggableInteract(true)
      if (announce) showToaster('enabled')
    } else {
      paintSystem.removePaintEventListeners()
      document.body.style.cursor = 'default'
      dragCore.toggleDraggableInteract(false)
      if (announce) showToaster('disabled')
    }
  }

  function toggleEditMode(pencil) {
    applyMode(pencil, { announce: true })
  }

  function resetPositions() {
    dragCore.resetPositions()
    showReset.value = false
  }

  function onSmoothAnchor(e) {
    const href = e.currentTarget.getAttribute('href') || ''
    if (!href.startsWith('#')) return
    const id = href.slice(1)
    const target = document.getElementById(id)
    if (!target) return
    e.preventDefault()
    const top = target.offsetTop - 80
    window.scrollTo({ top, behavior: 'smooth' })
  }

  function bindAnchors() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', onSmoothAnchor)
    })
  }

  function unbindAnchors() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.removeEventListener('click', onSmoothAnchor)
    })
  }

  onMounted(async () => {
    await nextTick()
    // Initial state: hand active, drag disabled (no toaster on first load).
    applyMode(false, { announce: false })
    bindAnchors()
  })

  onBeforeUnmount(() => {
    paintSystem.removePaintEventListeners()
    paintSystem.destroyPaintCanvas()
    if (window.interact) window.interact('.draggable').unset()
    unbindAnchors()
    if (toasterTimeout) clearTimeout(toasterTimeout)
    document.body.style.cursor = ''
  })

  return {
    editMode,
    showReset,
    toaster,
    toggleEditMode,
    resetPositions
  }
}
