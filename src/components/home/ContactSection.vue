<script setup>
import ContactCard from './ContactCard.vue'

defineProps({
  variant: {
    type: String,
    default: 'home',
    validator: v => ['home', 'project'].includes(v)
  }
})
</script>

<template>
  <div
    id="contact-section"
    :class="['contact-section', `contact-section--${variant}`]"
    data-animate="animate__fadeIn"
    data-delay="animate__delay"
  >
    <div :class="[variant === 'home' ? 'contact-title title-lg' : 'contact-title-project project-h1-alt']">
      <span>— Como posso te ajudar?</span>
    </div>
    <div class="contact-cards">
      <ContactCard
        :variant="variant"
        icon="/assets/images/homepage/social/LinkedIn.svg"
        icon-alt="LinkedIn"
        title="LinkedIn"
        info="/vitorlacerda05"
        cta-href="https://www.linkedin.com/in/vitorlacerda05/"
        cta-target="_blank"
        cta-label="Acessar LinkedIn ↗"
      />
      <ContactCard
        :variant="variant"
        icon="/assets/images/homepage/social/Email.svg"
        icon-alt="Email"
        title="Email"
        info="vitorlacerda05@gmail.com"
        cta-href="mailto:vitorlacerda05@gmail.com"
        cta-label="Enviar Email ↗"
      />
    </div>
  </div>
</template>

<style scoped>
.contact-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 72px;
  position: relative;
}

.contact-section--project {
  display: flex;
  max-width: 976px;
  width: 100%;
  padding: 128px 24px 160px 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  align-self: stretch;
  margin: 0 auto;
}

.contact-title {
  color: var(--white);
  text-align: left;
  width: 100%;
}

.contact-title-project {
  color: var(--blue-gray-900);
  text-align: left;
  width: 100%;
  margin: 0 !important;
  padding: 0 !important;
}

.contact-cards {
  display: flex;
  flex-direction: row;
  gap: 32px;
  align-items: stretch;
  flex: 1;
  flex-wrap: wrap;
  width: 100%;
}

@media screen and (max-width: 601px) {
  .contact-cards {
    flex-direction: column;
    gap: 24px;
  }
}
</style>
