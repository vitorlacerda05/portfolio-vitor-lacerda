<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { PROJECTS } from '../../data/projects.js'
import ProjectCard from './ProjectCard.vue'

const FILTERS = ['UX Design', 'Product Manager', 'Development', 'Scientific Research']
const DEFAULT_FILTER = 'UX Design'

const route = useRoute()
const router = useRouter()

const activeFilter = ref(DEFAULT_FILTER)

function toSlug(s) {
  return s.toLowerCase().replace(/\s+/g, '-')
}
function fromSlug(s) {
  return s.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
}

const visibleProjects = computed(() => {
  if (activeFilter.value === 'All') return PROJECTS
  return PROJECTS.filter(p => p.badges.includes(activeFilter.value))
})

function applyFilter(filter) {
  activeFilter.value = filter
  router.replace({ query: { ...route.query, filter: toSlug(filter) } })
}

onMounted(() => {
  const slug = route.query.filter
  if (typeof slug === 'string') {
    const candidate = fromSlug(slug)
    const match = FILTERS.find(f => f === candidate)
    if (match) activeFilter.value = match
  }
})
</script>

<template>
  <div
    id="projects-section"
    class="projects-section draggable animate__animated animate__fadeInUp animate__delay-1s"
  >
    <div class="work-wrapper">
      <div class="project-frame-container">
        <div class="project-frame-switch-icon regular-base">
          <span>❖</span>
        </div>
        <div class="project-filters">
          <button
            v-for="f in FILTERS"
            :key="f"
            :class="['project-filter-btn', 'regular-base', { active: activeFilter === f }]"
            type="button"
            @click="applyFilter(f)"
          >
            {{ f }}
          </button>
        </div>
      </div>
      <div class="works" id="projects-grid">
        <ProjectCard
          v-for="(project, i) in visibleProjects"
          :key="project.id"
          :project="project"
          :title-tag="i === 0 ? 'h1' : 'h3'"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.projects-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 80px;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
}

.work-wrapper {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 40px;
  position: relative;
  border-radius: 8px;
  width: 100%;
  height: 100%;
  pointer-events: auto;
}

.work-wrapper::before {
  content: '';
  position: absolute;
  border: 2px dashed var(--purple);
  inset: 0;
  pointer-events: none;
  border-radius: 8px;
}

.works {
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;
  padding: 0;
  position: relative;
  flex-shrink: 0;
  width: 100%;
}

.project-frame-container {
  position: absolute;
  top: -40px;
  left: 274px;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
}

.project-frame-switch-icon {
  width: 32px;
  height: auto;
  text-align: center;
  position: relative;
  display: none;
  align-items: center;
  justify-content: center;
}

.project-filters {
  display: flex;
  gap: 4px;
  align-items: center;
}

.project-filter-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px 10px;
  border-radius: 4px;
  color: var(--blue-gray-700);
  font-size: 16px;
  white-space: nowrap;
  transition: color 0.15s, background 0.15s;
}

.project-filter-btn:hover {
  background: var(--blue-50);
}

.project-filter-btn.active {
  color: var(--blue-gray-900);
  background: var(--blue-100);
}

/* Draggable states */
.projects-section.draggable {
  cursor: grab;
  user-select: none;
  outline: 2px solid transparent;
  transform: translate(0px, 0px);
  will-change: transform;
}

.projects-section.draggable.animate__animated {
  animation-fill-mode: both;
}

.projects-section.draggable[style*='transform'] {
  animation: none !important;
  animation-play-state: paused !important;
}

.projects-section.draggable:hover {
  outline: 2px solid #9747ff;
}

.projects-section.draggable:active {
  outline: 2px solid #9747ff;
  cursor: grabbing;
}

.projects-section.draggable.draggable-disabled {
  cursor: default;
  outline: none;
}

.projects-section.draggable.draggable-disabled:hover {
  outline: none;
  cursor: default;
}

.projects-section.draggable:not(.draggable-disabled) .project-filter-btn {
  pointer-events: none;
  opacity: 0.5;
}

.projects-section.draggable :deep(.project-card) {
  cursor: grab !important;
  user-select: none;
}

.projects-section.draggable-disabled :deep(.project-card) {
  cursor: pointer !important;
  user-select: auto;
}

.projects-section.draggable :deep(.project-card:hover:not(:active)) {
  outline: 2px solid transparent !important;
  cursor: grab !important;
}

.projects-section.draggable-disabled :deep(.project-card:hover:not(:active)) {
  outline: 2px solid var(--purple) !important;
  cursor: pointer !important;
}

.projects-section.draggable :deep(.project-card:active) {
  outline: 2px solid transparent;
  cursor: grabbing !important;
}

.projects-section.draggable-disabled :deep(.project-card:active) {
  outline: 2px solid var(--purple);
  cursor: pointer !important;
}

@media screen and (max-width: 725px) {
  .work-wrapper {
    padding: 32px;
  }
  .works {
    gap: 24px;
  }
}

@media screen and (max-width: 601px) {
  .works {
    grid-template-columns: 1fr;
  }
}
</style>
