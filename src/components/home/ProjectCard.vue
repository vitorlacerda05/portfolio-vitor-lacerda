<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import Badge from '../base/Badge.vue'
import CornerSquares from '../base/CornerSquares.vue'

const props = defineProps({
  project: { type: Object, required: true },
  titleTag: { type: String, default: 'h3' }
})

const emit = defineEmits(['lock-click'])

const isLocked = computed(() => Boolean(props.project.locked))
const isExternal = computed(() => !isLocked.value && Boolean(props.project.url))
const hasImage = computed(() => Boolean(props.project.image?.src))
const hasDescription = computed(() => Boolean(props.project.description))

const rootTag = computed(() => {
  if (isLocked.value) return 'div'
  return isExternal.value ? 'a' : RouterLink
})
const rootProps = computed(() => {
  if (isLocked.value) {
    return { role: 'button', tabindex: '0', 'aria-haspopup': 'dialog' }
  }
  return isExternal.value
    ? { href: props.project.url, target: '_blank', rel: 'noopener noreferrer' }
    : { to: { name: 'project', params: { id: props.project.id } } }
})

function handleClick(event) {
  if (!isLocked.value) return
  event.preventDefault()
  emit('lock-click', props.project)
}

function handleKeydown(event) {
  if (!isLocked.value) return
  if (event.key === 'Enter' || event.key === ' ' || event.key === 'Spacebar') {
    event.preventDefault()
    emit('lock-click', props.project)
  }
}
</script>

<template>
  <component
    :is="rootTag"
    v-bind="rootProps"
    :class="['project-card', project.cardBg, { 'no-image': !hasImage, locked: isLocked }]"
    :data-badges="project.badges.join(',')"
    @click="handleClick"
    @keydown="handleKeydown"
  >
    <div v-if="hasImage" class="project-image-container">
      <div class="project-image-single">
        <img :src="project.image.src" :alt="project.image.alt" />
        <CornerSquares />
      </div>
    </div>
    <div class="project-content">
      <div class="project-content-top">
        <div class="project-title-container">
          <component :is="titleTag" class="project-title">
            <i
              v-if="isLocked"
              class="fas fa-lock project-lock-icon"
              aria-hidden="true"
            ></i>
            <span v-if="isLocked" class="sr-only">Projeto confidencial: </span>{{ project.title }}
          </component>
        </div>
        <div class="card-badges-wrapper">
          <Badge v-for="b in project.badges" :key="b">{{ b }}</Badge>
        </div>
      </div>
      <div class="project-content-bottom">
        <p v-if="hasDescription" class="project-description regular-sm">{{ project.description }}</p>
        <span class="card-date regular-sm">{{ project.date }}</span>
      </div>
    </div>
  </component>
</template>

<style scoped>
.project-card {
  border-radius: 14px;
  cursor: pointer;
  display: flex;
  border: 2px solid var(--blue-gray-200);
  outline: 2px solid transparent;
  flex-direction: column;
  gap: 0;
  padding: 0;
  position: relative;
  overflow: hidden;
  height: auto;
  text-decoration: none;
  color: inherit;
  box-shadow: 4px 5px 0 rgba(38, 50, 56, 0.06);
  transform: none;
  transition: transform 0.2s ease-out, box-shadow 0.2s ease-out, border-color 0.2s ease-out;
}

.project-card:hover,
.project-card:focus-visible {
  transform: rotate(var(--rot, 0deg)) translateY(-2px);
  box-shadow: 5px 7px 0 rgba(170, 105, 255, 0.16);
  border-color: var(--purple);
}

.project-card:focus-visible {
  outline: 2px solid var(--blue-700);
  outline-offset: 2px;
}

@media (prefers-reduced-motion: reduce) {
  .project-card {
    transition: none;
  }
  .project-card:hover,
  .project-card:focus-visible {
    transform: none;
  }
}

.project-card.bg-green { background-color: var(--off-white-green); }
.project-card.bg-yellow { background-color: var(--off-white-yellow); }
.project-card.bg-blue { background-color: var(--off-white-blue); }
.project-card.bg-purple { background-color: var(--off-white-purple); }
.project-card.bg-red { background-color: var(--off-white-red); }
.project-card.bg-pink { background-color: var(--off-white-pink); }
.project-card.bg-brown { background-color: var(--off-white-brown); }

.project-image-container {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}

.project-image-single {
  position: relative;
  width: 100%;
  flex-shrink: 0;
}

.project-image-single img {
  width: 100%;
  height: 280px;
  object-fit: cover;
  object-position: top;
  display: block;
}

.project-image-single :deep(.corner-square) {
  display: none;
}

.project-content {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px 32px 32px;
}

.project-content-top,
.project-content-bottom {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.project-title {
  color: var(--blue-gray-900);
  font-family: 'Karla', sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: normal;
  margin: 0;
}

.project-lock-icon {
  font-size: 0.85em;
  color: var(--blue-gray-500);
  margin-right: 8px;
  transition: color 0.2s ease-out;
}

.project-card.locked:hover .project-lock-icon,
.project-card.locked:focus-visible .project-lock-icon {
  color: var(--purple);
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.project-description {
  color: var(--blue-gray-500);
}

.project-title-container {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.card-badges-wrapper {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  align-items: flex-start;
}

.card-date {
  color: var(--blue-gray-500);
}

@media screen and (max-width: 1026px) {
  .project-image-single img { height: 240px; }
  .project-title { font-size: 20px; }
  .project-description { font-size: 13px; }
  .project-content { padding: 20px 24px 24px; }
}
</style>
