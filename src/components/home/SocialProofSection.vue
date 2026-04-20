<script setup>
import CommentCard from './CommentCard.vue'

const comments = [
  {
    quote:
      '"O projeto que trabalhei em parceria com a UrbVerde foi essencialmente determinado pelas habilidades de ideação e levantamento de pesquisas secundárias realizadas (...). Recomendo Vitor como um ativo dedicado, proativo e sobretudo com a dose certa de paixão e ceticismo, que resulta numa experiência familiar e útil para o usuário final."',
    name: 'Gabe Bo',
    position: 'Product Designer Senior, 150k followers Linkedin',
    avatar: '/assets/images/homepage/social-proof/gabe.png'
  },
  {
    quote:
      '"Vitor foi ótimo líder de projeto no desenvolvimento do contrato da Pact com a Engaj. Transparente no desenho de cronograma e expectativa de resultados com assertividade nas entregas. Domínio técnico das frentes envolvidas no projeto e bom comunicador."',
    name: 'Lucas Pena',
    position: 'CEO Pact Legal Insights',
    avatar: '/assets/images/homepage/social-proof/lucas.png'
  }
]
</script>

<template>
  <div class="social-proof-section" data-animate="animate__fadeIn" data-delay="animate__delay">
    <div class="social-proof-title title-lg">
      <span>Recomendado pelos melhores!</span>
    </div>
    <div class="comments-wrapper">
      <CommentCard
        v-for="c in comments"
        :key="c.name"
        :quote="c.quote"
        :name="c.name"
        :position="c.position"
        :avatar="c.avatar"
      />
    </div>
  </div>
</template>

<style scoped>
.social-proof-section {
  display: flex;
  flex-direction: column;
  gap: 64px;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  max-width: 976px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.social-proof-title {
  color: var(--white);
  text-align: left;
  width: 100%;
}

.comments-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  width: 100%;
}

@media screen and (max-width: 1026px) {
  .social-proof-section {
    gap: 56px;
  }
  .comments-wrapper {
    gap: 24px;
  }
}

@media screen and (max-width: 768px) {
  .comments-wrapper {
    grid-template-columns: 1fr;
  }
}
</style>
