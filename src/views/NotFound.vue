<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="not-found">
    <div class="not-found-content">
      <h1 class="title-lg">404</h1>
      <p class="regular-lg">Essa página não existe.</p>
      <RouterLink to="/" class="back-home">← Voltar para a home</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.not-found {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(270deg, #E8F2F7 0%, #E3F2FD 100%);
}

.not-found-content {
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
}

.not-found-content h1 {
  color: var(--blue-gray-900);
  font-family: 'Karla', sans-serif;
  margin: 0;
}

.not-found-content p {
  color: var(--blue-gray-700);
  margin: 0;
}

.back-home {
  color: var(--blue-700);
  text-decoration: underline;
  margin-top: 12px;
}
</style>
