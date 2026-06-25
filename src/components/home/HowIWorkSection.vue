<script setup>
// Setas e icones desenhados "a mao livre" (estilo whiteboard/Excalidraw),
// herdam a cor via currentColor do elemento pai.
const ARROW = `<svg viewBox="0 0 44 24" width="38" height="20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12c7-1.6 15 1.6 23 .4 3-.4 6-.4 11-.4"/><path d="M29 5l9 7-9 7"/></svg>`

const SPARKLE = `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.2l1.9 4.9 4.9 1.9-4.9 1.9L12 16.8l-1.9-4.9L5.2 10l4.9-1.9z"/><path d="M19 14.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8z"/></svg>`

const steps = [
  {
    key: 'discovery',
    label: 'Discovery',
    icon: `<svg viewBox="0 0 48 48" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M31 20.5c0 5.7-4.7 10.3-10.4 10-5.3-.2-9.6-4.6-9.6-10C11 14.8 15.7 10.2 21.4 10.5 26.7 10.7 31 15.1 31 20.5Z"/><path d="M28.5 28.5 38 37.5"/></svg>`
  },
  {
    key: 'priorizacao',
    label: 'Priorização',
    icon: `<svg viewBox="0 0 48 48" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 14.5h9"/><path d="M11 24h16"/><path d="M11 33.5h23"/><path d="M40 13.5v21"/><path d="M36.5 31l3.5 3.5 3.5-3.5"/></svg>`
  },
  {
    key: 'delivery',
    label: 'Delivery',
    icon: `<svg viewBox="0 0 48 48" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M42 7 21 26"/><path d="M42 7 30 42 21 26 6 18 42 7Z"/></svg>`
  },
  {
    key: 'metricas',
    label: 'Métricas',
    icon: `<svg viewBox="0 0 48 48" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 9.5v28.5h28.5"/><path d="M17.5 38V27.5"/><path d="M25.5 38V20.5"/><path d="M33.5 38V13.5"/></svg>`
  }
]

const rotations = ['-1.2deg', '0.9deg', '-0.7deg', '1.1deg']
</script>

<template>
  <section class="hiw-section">
    <div class="hiw-inner" data-animate="animate__fadeIn" data-delay="animate__delay">
      <div class="hiw-header">
        <h2 class="hiw-title title-md">Como eu trabalho</h2>
        <span class="hiw-badge regular-sm">
          <span class="hiw-badge-icon" v-html="SPARKLE"></span>
          com IA agêntica
        </span>
      </div>
      <p class="hiw-subtitle regular-lg">
        Um resumo de como eu levo um produto da ideia até o impacto.
      </p>

      <div class="hiw-flow">
        <template v-for="(step, i) in steps" :key="step.key">
          <article class="hiw-card" :style="{ '--rot': rotations[i] }">
            <span class="hiw-icon" v-html="step.icon"></span>
            <h3 class="hiw-card-title title-sm">{{ step.label }}</h3>
          </article>
          <div v-if="i < steps.length - 1" class="hiw-arrow" v-html="ARROW"></div>
        </template>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hiw-section {
  width: 100%;
}

.hiw-inner {
  box-sizing: border-box;
  width: 100%;
}

.hiw-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
}

.hiw-title {
  color: var(--blue-gray-900);
  margin: 0;
}

.hiw-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
  padding: 6px 12px;
  background: var(--off-white-purple);
  border: 2px solid var(--purple);
  border-radius: 999px;
  color: var(--blue-gray-900);
  font-weight: 500;
  white-space: nowrap;
  transform: rotate(-1.5deg);
  box-shadow: 2px 3px 0 rgba(170, 105, 255, 0.16);
}

.hiw-badge-icon {
  display: grid;
  place-items: center;
  color: var(--purple);
}

.hiw-subtitle {
  color: var(--blue-gray-600);
  margin: 12px 0 0;
  max-width: 60ch;
}

.hiw-flow {
  display: flex;
  align-items: stretch;
  gap: 10px;
  margin-top: 36px;
}

.hiw-card {
  flex: 1 1 0;
  min-width: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 14px;
  padding: 24px 18px;
  background: var(--white);
  border: 2px solid var(--blue-gray-200);
  border-radius: 14px;
  box-shadow: 4px 5px 0 rgba(38, 50, 56, 0.06);
  transform: rotate(var(--rot));
  transition: transform 0.2s ease-out, box-shadow 0.2s ease-out, border-color 0.2s ease-out;
}

.hiw-card:hover {
  transform: rotate(0deg) translateY(-2px);
  box-shadow: 5px 7px 0 rgba(170, 105, 255, 0.16);
  border-color: var(--purple);
}

.hiw-icon {
  display: grid;
  place-items: center;
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: var(--off-white-purple);
  color: var(--blue-gray-900);
}

.hiw-card-title {
  color: var(--blue-gray-900);
  margin: 0;
}

.hiw-arrow {
  flex: 0 0 auto;
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--purple);
}

@media screen and (max-width: 880px) {
  .hiw-flow {
    flex-direction: column;
    gap: 4px;
  }

  .hiw-card {
    flex-direction: row;
    justify-content: flex-start;
    text-align: left;
    gap: 16px;
    transform: rotate(0deg);
  }

  .hiw-arrow {
    transform: rotate(90deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .hiw-card,
  .hiw-card:hover {
    transition: none;
    transform: rotate(var(--rot));
  }
}
</style>
