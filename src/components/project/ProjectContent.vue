<script setup>
import { computed } from 'vue'
import { markdownToHtml } from '../../lib/markdown.js'

const props = defineProps({
  markdown: { type: String, required: true }
})

const html = computed(() => markdownToHtml(props.markdown))
</script>

<template>
  <div
    class="project-content animate__animated animate__fadeInUp animate__delay"
    v-html="html"
  ></div>
</template>

<style scoped>
.project-content {
  display: flex;
  padding: 80px 16px 0 16px;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
}

/* --- Image styles (from old projects-styles.css) --- */
.project-content :deep(.project-img-wrapper) {
  box-shadow:
    0 0 0.5px 0 rgba(0, 0, 0, 0.18),
    0 3px 8px 0 rgba(0, 0, 0, 0.10),
    0 1px 3px 0 rgba(0, 0, 0, 0.10);
  display: inline-block;
  border-radius: 8px;
  overflow: hidden;
  max-width: 1200px;
  height: auto;
  max-height: 800px;
  margin: 64px 24px 0 24px;
}

.project-content :deep(.project-img-wrapper img) {
  display: block;
  max-width: 100%;
  height: auto;
}

.project-content :deep(.project-shadow) {
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.10);
}

/* --- Quote --- */
.project-content :deep(.quote) {
  border-left: 4px solid var(--blue-gray-800);
  padding-left: 24px;
  max-width: 928px;
  margin: 2em 0 1em 0;
}

/* --- Callout --- */
.project-content :deep(.callout) {
  background-color: var(--off-white-blue);
  padding: 24px 32px;
  border-radius: 12px;
  width: calc(100% - 24px);
  max-width: 928px;
  margin: 2em 0 1em 0;
}

/* --- HR --- */
.project-content :deep(hr) {
  border: none;
  height: 1px;
  background-color: var(--blue-gray-100);
  margin: 2em 0;
  width: 100%;
  max-width: 928px;
}

/* --- Links inside project content --- */
.project-content :deep(a) {
  color: var(--blue-700);
  text-decoration: underline;
}
</style>
