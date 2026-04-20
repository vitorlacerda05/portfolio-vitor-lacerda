<script setup>
import HighlightSquare from './HighlightSquare.vue'

const highlights = [
  { target: '3', label: 'Anos de experiência' },
  { target: '+15', label: 'Projetos de Product Design' },
  { target: '+25', label: 'Projetos de desenvolvimento' },
  { target: '7', label: 'Prêmios nacionais e internacionais' }
]
</script>

<template>
  <div id="about-section" class="about-section">
    <div class="about-top" data-animate="animate__fadeIn" data-delay="animate__delay">
      <div class="about-title-section">
        <div class="about-title title-md">
          <span>
            Além de designer, Vitor é
            <span class="text-highlight">cofundador da UrbVerde</span>,
            com experiência em gestão de produtos e desenvolvimento
          </span>
        </div>
        <div class="about-description regular-lg">
          <p data-animate="animate__fadeIn" data-delay="animate__delay">
            Cursa Sistemas de Informação na USP, onde conduz pesquisas em Interação Humano-Computador,
            explorando como o design pode gerar impacto social e inovação tecnológica.
            Suas entregas já foram reconhecidas por prêmios nacionais e internacionais,
            incluindo a menção honrosa na Competição de UX Design da Sociedade Brasileira de Computação.
          </p>
        </div>
      </div>
      <div class="about-image">
        <img src="/assets/images/homepage/vitor-lacerda-image.png" alt="Vitor Lacerda" />
      </div>
    </div>

    <div class="highlight" data-animate="animate__fadeIn" data-delay="animate__delay">
      <div class="highlight-content">
        <HighlightSquare
          v-for="h in highlights"
          :key="h.label"
          :target="h.target"
          :label="h.label"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 72px;
  position: relative;
}

.about-top {
  display: flex;
  flex-direction: row;
  gap: 72px;
  align-items: flex-start;
  width: 100%;
}

.about-title-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 32px;
  color: var(--white);
}

.about-title {
  text-align: left;
  min-width: 100%;
  color: var(--white);
}

.about-description {
  color: var(--blue-50);
  height: auto;
  width: 100%;
  font-weight: 300;
}

.about-image {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  flex: 1 0 0;
  align-self: stretch;
  width: 100%;
  max-width: 400px;
  aspect-ratio: 513/380;
  background: var(--white);
  border-radius: 16px;
  position: relative;
  overflow: hidden;
}

.about-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px;
}

.highlight {
  width: 100%;
  position: relative;
  height: auto;
}

.highlight-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  width: 100%;
}

.text-highlight {
  position: relative;
  display: inline;
  padding: 0px 4px;
  background: linear-gradient(135deg, var(--blue-800), var(--blue-700));
  transform: rotate(-5deg);
  border-radius: 4px;
  transform-origin: center;
}

@media screen and (max-width: 768px) {
  .highlight-content {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 20px;
  }
}

@media screen and (max-width: 601px) {
  .about-top {
    flex-direction: column;
  }
  .about-image {
    max-width: 100%;
    width: 100%;
    aspect-ratio: 513/380;
    min-height: 250px;
  }
  .highlight-content {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
}

@media screen and (max-width: 480px) {
  .highlight-content {
    grid-template-columns: 1fr;
    gap: 12px;
  }
  .about-image {
    aspect-ratio: 513/380;
    min-height: 200px;
  }
}
</style>
