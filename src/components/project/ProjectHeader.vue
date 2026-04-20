<script setup>
import Badge from '../base/Badge.vue'
import CornerSquares from '../base/CornerSquares.vue'

defineProps({
  project: { type: Object, required: true }
})
</script>

<template>
  <div class="main-content">
    <div class="project-info">
      <div class="project-header">
        <h1 class="project-title project-h1-alt">{{ project.title }}</h1>
        <div class="badges-wrapper">
          <Badge
            v-for="b in project.badges"
            :key="b"
            variant="project"
          >
            {{ b }}
          </Badge>
        </div>
      </div>
      <div class="project-description">
        <p class="description-text">{{ project.description }}.</p>
        <div class="project-date">
          <span class="date-text regular-sm">{{ project.date }}</span>
        </div>
      </div>
    </div>
    <div class="project-image-container">
      <div class="image-wrapper">
        <img
          :src="project.image.src"
          :alt="project.image.alt"
          class="project-image"
        />
      </div>
      <CornerSquares />
    </div>
  </div>
</template>

<style scoped>
.main-content {
  display: flex;
  gap: 40px;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  width: 100%;
}

.project-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 40px 0 40px 12px;
  min-height: 0;
  min-width: 0;
  max-width: 600px;
}

.project-header {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  justify-content: flex-start;
}

.project-title {
  padding: 0 !important;
  margin: 0 !important;
  line-height: 1.25;
  color: var(--blue-gray-900);
  width: 100%;
}

.badges-wrapper {
  display: flex;
  gap: 8px;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
}

.project-description {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
}

.description-text {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: var(--blue-gray-700);
  width: 100%;
}

.project-date {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  color: var(--blue-gray-600);
}

.project-image-container {
  width: fit-content;
  max-width: 100%;
  max-height: 600px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  border: 2px solid var(--blue-200);
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.15);
}

.image-wrapper {
  width: fit-content;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}

.project-image {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 600px;
  object-fit: contain;
  object-position: center;
}

@media screen and (max-width: 1080px) {
  .main-content {
    flex-direction: column;
  }
}
</style>
