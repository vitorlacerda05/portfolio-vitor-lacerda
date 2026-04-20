<script setup>
import { onMounted, onUnmounted, watch } from 'vue'

const props = defineProps({
  open: { type: Boolean, default: false }
})
const emit = defineEmits(['close'])

function onOverlayClick(e) {
  if (e.target.classList.contains('mobile-overlay')) emit('close')
}

function onKeydown(e) {
  if (e.key === 'Escape' && props.open) emit('close')
}

watch(
  () => props.open,
  (open) => {
    document.body.style.overflow = open ? 'hidden' : ''
  }
)

onMounted(() => {
  document.addEventListener('keydown', onKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <div :class="['mobile-overlay', { active: open }]" @click="onOverlayClick">
    <div class="mobile-dropdown">
      <div class="mobile-dropdown-header">
        <button
          class="mobile-close-btn"
          type="button"
          aria-label="Fechar menu"
          @click="emit('close')"
        >
          <i class="fas fa-times"></i>
        </button>
      </div>
      <nav class="mobile-nav">
        <a href="#projects-section" class="mobile-nav-link" @click="emit('close')">Projetos</a>
        <a href="#about-section" class="mobile-nav-link" @click="emit('close')">Sobre</a>
        <a href="#contact-section" class="mobile-nav-link" @click="emit('close')">Contatos</a>
      </nav>
    </div>
  </div>
</template>

<style scoped>
.mobile-overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1000;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.mobile-overlay.active {
  display: block;
  opacity: 1;
}

.mobile-dropdown {
  position: absolute;
  top: 0;
  right: 0;
  width: 280px;
  height: 100vh;
  background: linear-gradient(180deg, var(--white) 0%, var(--blue-50) 100%);
  padding: 24px;
  box-sizing: border-box;
  transform: translateX(100%);
  transition: transform 0.3s ease;
  z-index: 1002;
}

.mobile-overlay.active .mobile-dropdown {
  transform: translateX(0);
}

.mobile-dropdown-header {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 40px;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transform: translateY(-10px);
  transition: opacity 0.3s ease, transform 0.3s ease, visibility 0s ease 0.3s;
}

.mobile-overlay.active .mobile-dropdown-header {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
  transform: translateY(0);
  transition: opacity 0.3s ease 0.5s, transform 0.3s ease 0.5s, visibility 0s ease 0.5s;
}

.mobile-close-btn {
  background: none;
  border: 2px solid transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--blue-gray-700);
  font-size: 24px;
  width: 48px;
  height: 48px;
  cursor: pointer;
  padding: 8px;
  border-radius: 4px;
  transition: all 0.2s ease;
}

.mobile-close-btn:hover {
  border-color: var(--blue-500);
}

.mobile-nav {
  display: flex;
  flex-direction: column;
  gap: 24px;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transform: translateY(10px);
  transition: opacity 0.3s ease, transform 0.3s ease, visibility 0s ease 0.3s;
}

.mobile-overlay.active .mobile-nav {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
  transform: translateY(0);
  transition: opacity 0.3s ease 0.5s, transform 0.3s ease 0.5s, visibility 0s ease 0.5s;
}

.mobile-nav-link {
  color: var(--blue-gray-700);
  text-decoration: none;
  font-size: 18px;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  padding: 12px;
  transition: color 0.2s ease, background-color 0.2s ease;
  border-radius: 8px;
}

.mobile-nav-link:hover {
  color: var(--blue-500);
  background-color: var(--blue-50);
}
</style>
