<script setup>
import BaseButton from '../base/BaseButton.vue'

defineProps({
  variant: {
    type: String,
    default: 'home',
    validator: v => ['home', 'project'].includes(v)
  },
  icon: { type: String, required: true },
  iconAlt: { type: String, required: true },
  title: { type: String, required: true },
  info: { type: String, required: true },
  ctaHref: { type: String, required: true },
  ctaLabel: { type: String, required: true },
  ctaTarget: { type: String, default: null }
})
</script>

<template>
  <div :class="['contact-ctt', `contact-ctt--${variant}`]">
    <div class="contact-ctt-content">
      <div class="contact-ctt-header">
        <img class="contact-ctt-icon" :src="icon" :alt="iconAlt" />
        <div class="contact-ctt-text">
          <div class="contact-ctt-title medium-lg">
            <p>{{ title }}</p>
          </div>
          <div class="contact-ctt-info regular-sm">
            <p>{{ info }}</p>
          </div>
        </div>
      </div>
      <BaseButton
        variant="secondary"
        :href="ctaHref"
        :target="ctaTarget"
      >
        {{ ctaLabel }}
      </BaseButton>
    </div>
  </div>
</template>

<style scoped>
.contact-ctt {
  display: flex;
  flex: 1;
  border-radius: 8px;
  position: relative;
  border: 2px solid rgba(255, 255, 255, 0.05);
}

.contact-ctt--home {
  background: linear-gradient(90deg, rgba(230, 230, 230, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%);
}

.contact-ctt--project {
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  flex: 1 0 0;
  background: linear-gradient(90deg, rgba(25, 118, 210, 0.90) 0%, rgba(30, 136, 229, 0.90) 100%);
}

.contact-ctt-content {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
  width: 100%;
  min-width: 200px;
  height: auto;
}

.contact-ctt-header {
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: flex-start;
  width: 100%;
  height: 100%;
}

.contact-ctt-icon {
  width: 56px;
  height: 56px;
  flex-shrink: 0;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}

.contact-ctt-text {
  display: flex;
  flex-direction: column;
  gap: 4px;
  color: var(--white);
}

.contact-ctt-title {
  text-align: left;
}

.contact-ctt-info {
  text-align: left;
  min-width: 100%;
  word-break: break-word;
  overflow-wrap: break-word;
}
</style>
