<script setup>
import HighlightSquare from './HighlightSquare.vue'

const highlights = [
  { target: '3', label: 'Anos de experiência' },
  { target: '+15', label: 'Projetos de Product Design' },
  { target: '+25', label: 'Projetos de desenvolvimento' },
  { target: '7', label: 'Prêmios nacionais e internacionais' }
]

const awards = [
  'Menção honrosa na Competição Nacional de UX Design da Sociedade Brasileira de Computação (SBC)',
  'Prêmio USP de Impacto Social para Cidades e Comunidades Sustentáveis',
  'Projeto destaque da região de São Paulo no Google Startup In School',
  'Prêmio no Eixo IV, de Técnicas e Tecnologias para Promoção de Justiça Climática',
  'Menção Honrosa no Hackathon Beta da Semana Acadêmica de Computação'
]
</script>

<template>
  <div id="about-section" class="about-section">
    <div class="about-intro-group">
      <div class="about-block" data-animate="animate__fadeIn" data-delay="animate__delay">
        <div class="about-block-text">
          <h3 class="about-block-title title-md">
            Product Manager com experiência sólida em
            <span class="text-highlight">design e desenvolvimento</span>
          </h3>
          <p class="about-block-description regular-lg">
            Hoje Vitor atua como Product Manager na Visio.ai, mas chegou até aqui por um caminho
            pouco comum. Antes de liderar produto, passou anos desenhando telas e escrevendo código.
            Foi Product Designer na Ploomes e, por mais de quatro anos, à frente do produto da
            UrbVerde, sempre circulando entre Figma, front-end e decisões estratégicas.
          </p>
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


    <div class="about-block reverse" data-animate="animate__fadeIn" data-delay="animate__delay">
      <div class="about-block-text">
        <h3 class="about-block-title title-md">
          Foi <span class="text-highlight">cofundador da UrbVerde</span>, levando a solução para 20 mil usuários em todo o mundo
        </h3>
        <p class="about-block-description regular-lg">
          A UrbVerde é a primeira plataforma SIG que leva dados sociais e ambientais urbanos
          para todos os municípios do Brasil. Vitor coordenou o time de tecnologia, desenhou
          as telas e participou do front-end. Ao lado de mais de 50 pesquisadores, ajudou a
          construir uma iniciativa presente em 800+ municípios brasileiros e 50+ países.
        </p>
      </div>
      <div class="about-image">
        <img src="/assets/images/homepage/about-urbverde.png" alt="UrbVerde" />
      </div>
      
    </div>

    <div class="research-group" data-animate="animate__fadeIn" data-delay="animate__delay">
      <div class="about-block">
        <div class="about-block-text">
          <h3 class="about-block-title title-md">
            <span class="text-highlight">Graduando e pesquisador na USP</span>, na área de Interação Humano-Computador
          </h3>
          <p class="about-block-description regular-lg">
            Estudante de Sistemas de Informação na USP, Vitor se dedica à pesquisa em Interação
            Humano-Computador e gestão de projetos, sempre explorando como o design pode gerar
            impacto social. Já participou de mais de cinco iniciações científicas e publicou em
            revistas acadêmicas. Esse trabalho, somado aos projetos de produto, rendeu alguns
            reconhecimentos:
          </p>
        </div>
        <div class="about-image">
          <img src="/assets/images/homepage/about-research.png" alt="Pesquisa científica" />
        </div>
      </div>

      <div class="awards-container">
        <ul class="about-awards project-h3">
          <li v-for="award in awards" :key="award">{{ award }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 240px;
  position: relative;
}

.about-intro-group {
  display: flex;
  flex-direction: column;
  gap: 80px;
  width: 100%;
}

.about-block {
  display: flex;
  flex-direction: row;
  gap: 72px;
  align-items: center;
  width: 100%;
}

.about-block.reverse {
  flex-direction: row-reverse;
}

.about-block-text {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
  color: var(--white);
}

.about-block-title {
  text-align: left;
  color: var(--white);
}

.about-block-description {
  color: var(--blue-50);
  font-weight: 300;
  margin: 0;
}

.research-group {
  display: flex;
  flex-direction: column;
  gap: 80px;
  width: 100%;
}

.awards-container {
  width: 100%;
}

.about-awards {
  color: var(--blue-50);
  font-weight: 300;
  margin: 0;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-weight: 500
}

.about-awards li {
  line-height: 1.5;
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
  .about-section {
    gap: 120px;
  }
}

@media screen and (max-width: 601px) {
  .about-block,
  .about-block.reverse {
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
