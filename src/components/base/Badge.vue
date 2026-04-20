<script setup>
defineProps({
  variant: {
    type: String,
    default: 'card',
    validator: v => ['card', 'project'].includes(v)
  }
})
</script>

<template>
  <span :class="['badge', `badge-${variant}`, 'regular-sm']">
    <slot />
  </span>
</template>

<style scoped>
.badge {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 8px;
  border-radius: 4px;
  background: var(--blue-100);
}

.badge-card {
  color: var(--blue-gray-700);
}

.badge-project {
  color: var(--blue-gray-900);
  gap: 10px;
  border: 1px solid var(--blue-50);
}
</style>
