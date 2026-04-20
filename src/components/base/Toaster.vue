<script setup>
defineProps({
  show: { type: Boolean, default: false },
  variant: {
    type: String,
    default: 'enabled',
    validator: v => ['enabled', 'disabled'].includes(v)
  },
  icon: { type: String, required: true },
  message: { type: String, required: true }
})
</script>

<template>
  <div :class="['toaster', `toaster-${variant}`, { show }]">
    <div class="toaster-content">
      <i :class="['toaster-icon', 'fas', icon]"></i>
      <span class="regular-base">{{ message }}</span>
    </div>
  </div>
</template>

<style scoped>
.toaster {
  position: fixed;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1001;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}

.toaster.show {
  opacity: 1;
  visibility: visible;
}

.toaster-content {
  background: var(--white);
  border-radius: 12px;
  padding: 16px 24px;
  box-shadow: 0px 8px 24px rgba(33, 150, 243, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  height: auto;
  width: auto;
}

.toaster-enabled .toaster-content {
  border: 2px solid var(--blue-500);
}

.toaster-disabled .toaster-content {
  border: 2px solid var(--blue-gray-200);
}

.toaster-icon {
  font-size: 16px;
  line-height: 1;
  color: var(--blue-gray-600);
}

.toaster-content span {
  color: var(--blue-gray-800);
  text-align: center;
}
</style>
