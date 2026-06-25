<script setup>
import HighlightSquare from './HighlightSquare.vue'

// Ícone de troféu desenhado "a mão livre", no mesmo estilo da seção "Como eu trabalho".
const TROPHY = `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 4h10v4a5 5 0 0 1-10 0z"/><path d="M7 6H4v1a3 3 0 0 0 3 3"/><path d="M17 6h3v1a3 3 0 0 1-3 3"/><path d="M12 13v3"/><path d="M9 20h6"/><path d="M9.5 20c0-1.5.7-2.4 2.5-2.4s2.5.9 2.5 2.4"/></svg>`

const highlights = [
  { target: '+3', label: 'Anos de experiência' },
  { target: '+20k', label: 'Usuários impactados' },
  { target: '+50', label: 'Países alcançados' },
  { target: '7', label: 'Prêmios nacionais e internacionais' }
]

const awards = [
  {
    title: 'Prêmio Sociedade Brasileira de Computação',
    subtitle: 'Competição Nacional de UX Design'
  },
  {
    title: 'Prêmio USP',
    subtitle: 'Impacto Social para Cidades e Comunidades Sustentáveis'
  },
  {
    title: 'Google Startup in School',
    subtitle: 'Projeto destaque da região de São Paulo'
  },
  {
    title: 'Prêmio da COP 30 — ONU',
    subtitle: 'Técnicas e Tecnologias para Promoção de Justiça Climática'
  },
  {
    title: 'Hackathon Beta',
    subtitle: 'Menção honrosa na Semana Acadêmica de Computação'
  }
]

// Leve rotação "à mão livre", no mesmo espírito da seção "Como eu trabalho".
const awardRotations = ['-1.2deg', '0.9deg', '-0.8deg', '1.1deg', '-0.6deg']
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
          Foi <span class="text-highlight">cofundador da UrbVerde</span>, levando a solução para 20 mil usuários em 50 países
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
            <span class="text-highlight">Graduando e pesquisador na USP</span>, na área de Interação Humano-Computador e Dados
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
        <ul class="about-awards">
          <li
            v-for="(award, i) in awards"
            :key="award.subtitle"
            class="award-item"
            :style="{ '--rot': awardRotations[i % awardRotations.length] }"
          >
            <span class="award-icon" v-html="TROPHY"></span>
            <span class="award-body">
              <span class="award-title">{{ award.title }}</span>
              <span class="award-sub regular-sm">{{ award.subtitle }}</span>
            </span>
          </li>
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
  font-weight: 400;
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
  list-style: none;
  margin: 0 auto;
  padding: 0;
  max-width: 760px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px 24px;
}

/* 5º card (último, ímpar) ocupa as duas colunas mas fica centralizado e com metade da largura */
.award-item:last-child:nth-child(odd) {
  grid-column: 1 / -1;
  justify-self: center;
  width: calc(50% - 12px);
}

.award-item {
  display: flex;
  align-items: center;
  gap: 16px;
  min-height: 92px;
  padding: 18px 20px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  transform: rotate(var(--rot));
  transition: transform 0.2s ease-out, background 0.2s ease-out, border-color 0.2s ease-out;
}

.award-item:hover {
  transform: rotate(0deg) translateY(-2px);
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.28);
}

.award-icon {
  display: grid;
  place-items: center;
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: linear-gradient(135deg, var(--blue-300) 0%, var(--blue-500) 100%);
  color: var(--white);
  box-shadow: 0 4px 12px -4px rgba(13, 71, 161, 0.7);
}

.award-body {
  display: flex;
  flex-direction: column;
  gap: 3px;
  min-width: 0;
}

.award-title {
  font-family: 'Karla', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.2;
  color: var(--white);
}

.award-sub {
  color: var(--blue-50);
  line-height: 1.45;
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
  border: 3px solid rgba(255, 255, 255, 0.85);
  border-radius: 16px;
  box-shadow: 6px 7px 0 rgba(13, 71, 161, 0.45);
  position: relative;
  overflow: hidden;
  transform: rotate(var(--img-rot, -1.4deg));
  transition: transform 0.25s ease-out;
}

/* Rotações alternadas, no mesmo espírito das cards "Como eu trabalho" */
.about-intro-group .about-image {
  --img-rot: -1.6deg;
}

.about-block.reverse .about-image {
  --img-rot: 1.6deg;
}

.research-group .about-image {
  --img-rot: -1.1deg;
}

.about-image:hover {
  transform: rotate(0deg);
}

.about-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 13px;
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

@media screen and (max-width: 520px) {
  .about-awards {
    grid-template-columns: 1fr;
  }
  .award-item:last-child:nth-child(odd) {
    grid-column: auto;
    justify-self: stretch;
    width: auto;
  }
}

@media (prefers-reduced-motion: reduce) {
  .award-item,
  .award-item:hover {
    transition: none;
    transform: rotate(var(--rot));
  }
  .about-image {
    transition: none;
  }
  .about-image:hover {
    transform: rotate(var(--img-rot, -1.4deg));
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
