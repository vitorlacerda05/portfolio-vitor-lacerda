<script setup>
defineProps({
  target: { type: String, required: true },
  label: { type: String, required: true }
})
</script>

<template>
  <div class="highlight-square">
    <div class="highlight-number title-lg">
      <p :data-target="target">{{ target.replace(/\d+/g, '0') }}</p>
    </div>
    <div class="highlight-text regular-base">
      <p>{{ label }}</p>
    </div>
  </div>
</template>

<style scoped>
.highlight-square {
  /* Tratado como "bloco de dado": elevação sólida e sutil, borda nítida — sem o glow pesado */
  background: linear-gradient(180deg, var(--blue-600) 0%, var(--blue-700) 100%);
  border: 1px solid rgba(255, 255, 255, 0.14);
  box-shadow: 0 10px 28px -10px rgba(13, 71, 161, 0.6);
  border-radius: 12px;
  padding: 24px 16px 8px 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  justify-content: start;
  text-align: center;
  color: var(--white);
  min-height: 140px;
  position: relative;
  transition: transform 0.2s ease-out, box-shadow 0.2s ease-out, border-color 0.2s ease-out;
}

.highlight-square:hover {
  transform: translateY(-3px);
  box-shadow: 0 16px 34px -10px rgba(13, 71, 161, 0.7);
  border-color: var(--purple);
}

.highlight-number {
  white-space: normal;
  word-wrap: break-word;
  color: var(--white);
}

/* Acento sutil de marca sob o número */
.highlight-number::after {
  content: '';
  display: block;
  width: 28px;
  height: 3px;
  margin: 10px auto 0;
  border-radius: 999px;
  background: var(--white);
  opacity: 0.9;
}

.highlight-text {
  max-width: 100%;
  color: var(--blue-50);
}

@media screen and (max-width: 768px) {
  .highlight-square {
    padding: 24px 20px;
    min-height: 120px;
  }
  .highlight-number { font-size: 2rem; }
  .highlight-text { font-size: 0.85rem; }
}

@media screen and (max-width: 601px) {
  .highlight-square {
    padding: 20px 16px;
    min-height: 100px;
    justify-content: center;
  }
  .highlight-number { font-size: 1.8rem; }
  .highlight-text { font-size: 0.8rem; }
}

@media screen and (max-width: 480px) {
  .highlight-square {
    padding: 24px 20px;
    min-height: 110px;
    justify-content: center;
  }
}

@media (prefers-reduced-motion: reduce) {
  .highlight-square,
  .highlight-square:hover {
    transition: none;
    transform: none;
  }
}
</style>
