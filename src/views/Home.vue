<script setup>
import Navbar from '../components/layout/Navbar.vue'
import MobileMenu from '../components/layout/MobileMenu.vue'
import AppFooter from '../components/layout/AppFooter.vue'
import HeroSection from '../components/home/HeroSection.vue'
import ProjectsSection from '../components/home/ProjectsSection.vue'
import MainBottom from '../components/home/MainBottom.vue'
import BaseButton from '../components/base/BaseButton.vue'
import ResetButton from '../components/base/ResetButton.vue'
import Toaster from '../components/base/Toaster.vue'
import { ref } from 'vue'
import { useEditMode } from '../composables/useEditMode.js'
import { useScrollAnimations } from '../composables/useScrollAnimations.js'
import { useSeo } from '../composables/useSeo.js'

useSeo({
  title: 'Vitor Lacerda - Product Designer',
  description: 'Vitor Lacerda é Product Designer e pesquisador na USP. Cofundador da UrbVerde com projetos premiados. Especialista em UX/UI Design.',
  keywords: 'product designer, ux designer, ui designer, portfolio ux, portfolio ui, ux ui designer, designer junior, freelance ux, freelance ui, vitor lacerda, usp, urbverde, design thinking, experiência do usuário, interface design, user experience, user interface',
  url: 'https://vitorlacerda.com/',
  ogType: 'website',
  schema: {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Vitor Lacerda',
    jobTitle: 'Product Designer',
    description: 'Product Designer e pesquisador na USP. Cofundador da UrbVerde, com experiência em gestão de produtos e desenvolvimento.',
    url: 'https://vitorlacerda.com',
    image: 'https://vitorlacerda.com/assets/images/homepage/vitor-lacerda-image.png',
    sameAs: [
      'https://www.linkedin.com/in/vitorlacerda05/',
      'https://github.com/vitorlacerda05',
      'http://lattes.cnpq.br/8815889895192997'
    ],
    alumniOf: { '@type': 'EducationalOrganization', name: 'Universidade de São Paulo - USP' },
    worksFor: { '@type': 'Organization', name: 'UrbVerde' },
    knowsAbout: ['UX Design', 'UI Design', 'Product Design', 'Design Thinking', 'Prototipagem', 'Desenvolvimento Front-end']
  }
})

const { editMode, showReset, toaster, toggleEditMode, resetPositions } = useEditMode()
useScrollAnimations()

const mobileMenuOpen = ref(false)
</script>

<template>
  <div class="page-white-container">
    <Navbar
      :edit-mode="editMode"
      @toggle-edit="toggleEditMode"
      @open-mobile="mobileMenuOpen = true"
    />
    <MobileMenu :open="mobileMenuOpen" @close="mobileMenuOpen = false" />

    <main class="main-top">
      <HeroSection />
      <ProjectsSection />
      <BaseButton href="#contact-section" variant="primary">
        Como posso te ajudar?
      </BaseButton>
    </main>
  </div>

  <MainBottom />
  <AppFooter />

  <ResetButton :show="showReset" @click="resetPositions" />

  <Toaster
    :show="toaster.show && toaster.variant === 'enabled'"
    variant="enabled"
    icon="fa-pen"
    message="Modo edição ativado, divirta-se!"
  />
  <Toaster
    :show="toaster.show && toaster.variant === 'disabled'"
    variant="disabled"
    icon="fa-lock"
    message="Modo edição desativado"
  />
</template>
