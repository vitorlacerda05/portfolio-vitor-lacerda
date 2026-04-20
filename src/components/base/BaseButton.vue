<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: v => ['primary', 'secondary'].includes(v)
  },
  to: { type: [String, Object], default: null },
  href: { type: String, default: null },
  target: { type: String, default: null },
  type: { type: String, default: 'button' }
})

const tag = computed(() => {
  if (props.to) return 'router-link'
  if (props.href) return 'a'
  return 'button'
})

const rel = computed(() => (props.target === '_blank' ? 'noopener noreferrer' : null))
</script>

<template>
  <component
    :is="tag === 'router-link' ? RouterLink : tag"
    :class="['btn', `btn-${variant}`]"
    :to="tag === 'router-link' ? to : undefined"
    :href="tag === 'a' ? href : undefined"
    :target="tag === 'a' ? target : undefined"
    :rel="tag === 'a' ? rel : undefined"
    :type="tag === 'button' ? type : undefined"
  >
    <slot />
  </component>
</template>

<style scoped>
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 32px;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
}

.btn-primary {
  border-radius: 16px;
  background: var(--blue-600);
  color: var(--white);
  max-width: 240px;
  width: 100%;
}

.btn-primary:hover {
  background: var(--blue-700);
  transform: scale(1.02);
}

.btn-secondary {
  border-radius: 100px;
  background: var(--white);
  color: var(--blue-800);
}

.btn-secondary:hover {
  transform: scale(1.02);
}
</style>
