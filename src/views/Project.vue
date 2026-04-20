<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import BackButton from '../components/layout/BackButton.vue'
import AppFooter from '../components/layout/AppFooter.vue'
import ProjectHeader from '../components/project/ProjectHeader.vue'
import ProjectContent from '../components/project/ProjectContent.vue'
import ContactSection from '../components/home/ContactSection.vue'
import { findProject } from '../data/projects.js'
import { PROJECT_MARKDOWN } from '../content/index.js'
import { useScrollAnimations } from '../composables/useScrollAnimations.js'
import { useProjectNumbering } from '../composables/useProjectNumbering.js'
import { useSeo } from '../composables/useSeo.js'

import '../styles/project-numbering.css'

const props = defineProps({
  id: { type: String, required: true }
})

const router = useRouter()
const project = computed(() => findProject(props.id))
const markdown = computed(() => PROJECT_MARKDOWN[props.id] ?? '')

if (!project.value) {
  router.replace({ name: 'not-found' })
}

if (project.value) {
  const seo = project.value.seo ?? {}
  useSeo({
    title: seo.title ?? `${project.value.title} | Vitor Lacerda`,
    description: seo.description ?? project.value.description,
    keywords: seo.keywords,
    url: `https://vitorlacerda.com/project/${project.value.id}`,
    image: `https://vitorlacerda.com${project.value.image.src}`,
    ogType: seo.ogType ?? 'article',
    schema: seo.schema
  })
}

useScrollAnimations()
useProjectNumbering()
</script>

<template>
  <template v-if="project">
    <div class="project-container animate__animated animate__fadeIn animate__delay">
      <BackButton />
      <ProjectHeader :project="project" />
    </div>

    <ProjectContent :markdown="markdown" />

    <ContactSection variant="project" />

    <AppFooter />
  </template>
</template>

<style scoped>
.project-container {
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  justify-content: center;
  padding: 56px 24px 120px 24px;
  height: auto;
  background: linear-gradient(270deg, #E8F2F7 0%, #E3F2FD 100%);
  margin: 0 auto;
}
</style>
