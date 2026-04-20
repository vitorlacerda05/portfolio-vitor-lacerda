<script setup>
defineProps({
  editMode: { type: Boolean, default: false }
})
const emit = defineEmits(['toggle-edit', 'open-mobile'])

function setHand() {
  emit('toggle-edit', false)
}
function setPencil() {
  emit('toggle-edit', true)
}
</script>

<template>
  <nav class="navbar animate__animated animate__fadeInDown animate__delay-1s">
    <div class="navbar-options">
      <div class="navbar-divider"></div>
      <button
        :class="['option-hand', { active: !editMode }]"
        type="button"
        aria-label="Modo navegação"
        @click="setHand"
      >
        <div class="option-icon cursor-icon"></div>
      </button>
      <button
        :class="['option-pencil', { active: editMode }]"
        type="button"
        aria-label="Modo edição"
        @click="setPencil"
      >
        <div class="option-icon pencil-icon"></div>
      </button>
    </div>

    <div class="navbar-links">
      <a href="#projects-section" class="navbar-link">
        <span class="medium-base">Projetos</span>
      </a>
      <a href="#about-section" class="navbar-link">
        <span class="medium-base">Sobre</span>
      </a>
      <a href="#contact-section" class="navbar-link">
        <span class="medium-base">Contatos</span>
      </a>
    </div>

    <button
      class="mobile-menu-btn"
      type="button"
      aria-label="Abrir menu"
      @click="emit('open-mobile')"
    >
      <i class="fas fa-bars"></i>
    </button>
  </nav>
</template>

<style scoped>
.navbar {
  margin: 32px auto 0 auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 4px;
  background-color: var(--white);
  border-radius: 12px;
  box-shadow: 0 8px 24px 0 rgba(0, 0, 0, 0.08);
  width: fit-content;
}

.navbar-options {
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;
  padding: 0 8px 0 0;
  position: relative;
  flex-shrink: 0;
}

.navbar-divider {
  position: absolute;
  border-right: 1px solid var(--blue-gray-100);
  top: 0;
  bottom: 0;
  right: -1px;
  pointer-events: none;
}

.option-pencil,
.option-hand {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  overflow: visible;
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  background-color: transparent;
  transition: all 0.2s ease;
}

.option-icon {
  width: 32px;
  height: 32px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  flex-shrink: 0;
}

.pencil-icon {
  background-image: url('/assets/images/homepage/navbar/pencil-black.svg');
}

.option-pencil.active .pencil-icon {
  background-image: url('/assets/images/homepage/navbar/pencil-white.svg');
}

.cursor-icon {
  background-image: url('/assets/images/homepage/navbar/cursor-black.svg');
}

.option-hand.active .cursor-icon {
  background-image: url('/assets/images/homepage/navbar/cursor-white.svg');
}

.option-pencil.active,
.option-hand.active {
  background-color: var(--blue-500);
}

.option-pencil:hover:not(.active),
.option-hand:hover:not(.active) {
  background-color: var(--blue-50);
}

.navbar-links {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 8px;
  flex-shrink: 0;
}

.navbar-link {
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;
  padding: 12px;
  border-radius: 12px;
  flex-shrink: 0;
  text-decoration: none;
  color: var(--blue-gray-900);
  transition: all 0.2s ease;
}

.navbar-link:hover {
  background-color: var(--blue-50);
}

.navbar-link span {
  white-space: normal;
  word-wrap: break-word;
  line-height: 1.5;
}

.mobile-menu-btn {
  display: none;
  background: none;
  border: 2px solid transparent;
  color: var(--blue-gray-700);
  font-size: 24px;
  width: 48px;
  height: 48px;
  cursor: pointer;
  padding: 8px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.mobile-menu-btn:hover {
  border-color: var(--blue-500);
}

@media screen and (max-width: 601px) {
  .navbar {
    margin: 16px 16px 0 auto;
    padding: 8px;
    width: fit-content;
    justify-content: flex-end;
  }

  .navbar-options {
    display: none;
  }

  .navbar-links {
    display: none;
  }

  .mobile-menu-btn {
    display: flex;
  }
}
</style>
