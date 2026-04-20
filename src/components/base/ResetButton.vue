<script setup>
defineProps({
  show: { type: Boolean, default: false }
})
defineEmits(['click'])
</script>

<template>
  <button v-show="show" class="reset-button" @click="$emit('click')">
    <i class="fas fa-rotate-left"></i>
    <span class="regular-base">Desfazer mudanças</span>
  </button>
</template>

<style scoped>
.reset-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: var(--white);
  border: 2px solid var(--blue-500);
  border-radius: 99px;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  color: var(--blue-gray-800);
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  z-index: 1000;
}

.reset-button:hover {
  border-color: var(--blue-400);
  background-color: var(--white);
  transform: translateY(-2px);
  box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.15);
}

.reset-button i {
  color: var(--blue-gray-600);
  font-size: 16px;
}
</style>
