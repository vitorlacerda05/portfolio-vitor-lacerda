<script setup>
import { ref, watch, nextTick, onBeforeUnmount } from 'vue'

const props = defineProps({
  show: { type: Boolean, default: false },
  project: { type: Object, default: null }
})

const emit = defineEmits(['close'])

const dialogRef = ref(null)
const closeBtnRef = ref(null)

function close() {
  emit('close')
}

function onKeydown(event) {
  if (event.key === 'Escape') {
    event.preventDefault()
    close()
  }
}

function onBackdropClick(event) {
  if (event.target === event.currentTarget) close()
}

watch(
  () => props.show,
  async (visible) => {
    if (visible) {
      document.addEventListener('keydown', onKeydown)
      document.body.style.overflow = 'hidden'
      await nextTick()
      closeBtnRef.value?.focus()
    } else {
      document.removeEventListener('keydown', onKeydown)
      document.body.style.overflow = ''
    }
  }
)

onBeforeUnmount(() => {
  document.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <Teleport to="body">
    <Transition name="locked-modal">
      <div
        v-if="show"
        class="locked-modal-backdrop"
        @click="onBackdropClick"
      >
        <div
          ref="dialogRef"
          class="locked-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="locked-modal-title"
          aria-describedby="locked-modal-desc"
        >
          <button
            ref="closeBtnRef"
            type="button"
            class="locked-modal-close"
            aria-label="Fechar"
            @click="close"
          >
            <i class="fas fa-xmark" aria-hidden="true"></i>
          </button>

          <div class="locked-modal-header">
            <div class="locked-modal-icon" aria-hidden="true">
              <i class="fas fa-lock"></i>
            </div>
            <h2 id="locked-modal-title" class="locked-modal-title">
              Projeto confidencial
            </h2>
          </div>

          <p id="locked-modal-desc" class="locked-modal-desc regular-base">
            <template v-if="project">
              <strong>{{ project.title }}</strong> está sob acordo de
              confidencialidade (NDA).
            </template>
            <template v-else>
              Este projeto está sob acordo de confidencialidade (NDA).
            </template>
            Por conter dados proprietários e informações sensíveis, não posso
            exibir telas, métricas ou detalhes do produto publicamente.
          </p>

          <p class="locked-modal-desc regular-base">
            Entre em contato para eu explicar sobre o processo e os cases.
          </p>

          <div class="locked-modal-actions">
            <a
              class="locked-modal-cta"
              href="#contact-section"
              @click="close"
            >
              Entrar em contato
            </a>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.locked-modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 1100;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: rgba(38, 50, 56, 0.55);
  backdrop-filter: blur(2px);
}

.locked-modal {
  position: relative;
  width: 100%;
  max-width: 440px;
  background: var(--white);
  border: 2px solid var(--blue-gray-200);
  border-radius: 16px;
  box-shadow: 8px 10px 0 rgba(38, 50, 56, 0.1);
  padding: 40px 32px 32px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  gap: 16px;
}

.locked-modal-header {
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
}

.locked-modal-close {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 36px;
  height: 36px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 8px;
  background: transparent;
  color: var(--blue-gray-500);
  font-size: 18px;
  cursor: pointer;
  transition: background 0.2s ease-out, color 0.2s ease-out;
}

.locked-modal-close:hover,
.locked-modal-close:focus-visible {
  background: var(--blue-50);
  color: var(--blue-gray-800);
}

.locked-modal-icon {
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--off-white-purple);
  color: var(--purple);
  font-size: 20px;
}

.locked-modal-title {
  color: var(--blue-gray-900);
  font-family: 'Karla', sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 1.2;
  margin: 0;
}

.locked-modal-desc {
  color: var(--blue-gray-600);
  margin: 0;
}

.locked-modal-desc strong {
  color: var(--blue-gray-800);
}

.locked-modal-actions {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  margin-top: 8px;
}

.locked-modal-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  border-radius: 12px;
  background: var(--blue-600);
  color: var(--white);
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  transition: background 0.2s ease-out, transform 0.2s ease-out;
}

.locked-modal-cta:hover,
.locked-modal-cta:focus-visible {
  background: var(--blue-700);
  transform: scale(1.02);
}

.locked-modal-enter-active,
.locked-modal-leave-active {
  transition: opacity 0.2s ease;
}

.locked-modal-enter-active .locked-modal,
.locked-modal-leave-active .locked-modal {
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.locked-modal-enter-from,
.locked-modal-leave-to {
  opacity: 0;
}

.locked-modal-enter-from .locked-modal,
.locked-modal-leave-to .locked-modal {
  transform: translateY(8px) scale(0.98);
  opacity: 0;
}

@media (prefers-reduced-motion: reduce) {
  .locked-modal-enter-active,
  .locked-modal-leave-active,
  .locked-modal-enter-active .locked-modal,
  .locked-modal-leave-active .locked-modal {
    transition: none;
  }
}

@media screen and (max-width: 601px) {
  .locked-modal {
    padding: 36px 24px 24px;
  }
}
</style>
