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
  background-color: var(--blue-700);
  box-shadow: 0 0 50px 0 rgba(25, 118, 210, 0.75);
  border-radius: 8px;
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
}

.highlight-square::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(180deg, #1E88E5 0%, #1976D2 100%);
  border-radius: 8px;
  padding: 1px;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: xor;
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  pointer-events: none;
}

.highlight-number {
  white-space: normal;
  word-wrap: break-word;
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
</style>
