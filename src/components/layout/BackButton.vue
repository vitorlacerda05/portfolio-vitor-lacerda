<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="back-section">
    <RouterLink to="/" class="back-button">
      <div class="back-icon">
        <i class="fas fa-arrow-right"></i>
      </div>
      <div class="back-text">Voltar</div>
    </RouterLink>
  </div>
</template>

<style scoped>
.back-section {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
  justify-content: flex-start;
  padding-left: 40px;
  width: 100%;
}

.back-button {
  background: white;
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: flex-start;
  padding: 12px 24px;
  border-radius: 100px;
  box-shadow: 2px 4px 10px 0px rgba(0, 0, 0, 0.05);
  text-decoration: none;
  color: var(--blue-gray-900);
  transition: all 0.3s ease;
}

.back-button:hover {
  transform: translateY(-2px);
  box-shadow: 2px 6px 15px 0px rgba(0, 0, 0, 0.1);
}

.back-icon {
  width: 20px;
  height: 20px;
  transform: rotate(180deg);
  display: flex;
  align-items: center;
  justify-content: center;
}

.back-text {
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: var(--blue-gray-900);
}
</style>
