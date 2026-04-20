<script setup>
import AboutSection from './AboutSection.vue'
import SocialProofSection from './SocialProofSection.vue'
import ContactSection from './ContactSection.vue'
</script>

<template>
  <div class="wave-separator">
    <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
      <defs>
        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color: var(--blue-700); stop-opacity: 1" />
          <stop offset="100%" style="stop-color: var(--blue-600); stop-opacity: 1" />
        </linearGradient>
      </defs>
      <path d="M0,0 C300,120 900,120 1200,0 L1200,120 L0,120 Z" fill="url(#waveGradient)" />
    </svg>
  </div>

  <div id="main-bottom" class="main-bottom">
    <div class="section">
      <img
        src="/assets/images/homepage/vector/rectangle-2.svg"
        alt=""
        class="rectangle-1"
        aria-hidden="true"
      />
      <img
        src="/assets/images/homepage/vector/rectangle-2.svg"
        alt=""
        class="rectangle-2"
        aria-hidden="true"
      />
      <img
        src="/assets/images/homepage/vector/rectangle-3.svg"
        alt=""
        class="rectangle-3"
        aria-hidden="true"
      />

      <AboutSection />
      <SocialProofSection />
      <ContactSection variant="home" />
    </div>
  </div>
</template>

<style scoped>
.wave-separator {
  position: relative;
  width: 100%;
  height: 80px;
  overflow: hidden;
  margin-top: -1px;
  background-color: #F7F9FB;
}

.wave-separator svg {
  width: 100%;
  height: 100%;
  display: block;
}

.main-bottom {
  background: linear-gradient(180deg, var(--blue-600) 0%, var(--blue-700) 100%);
  padding: 22vh 24px 22vh 24px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 26px;
  overflow: hidden;
}

.section {
  max-width: 976px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 22vh;
  overflow: visible;
}

.rectangle-1,
.rectangle-2,
.rectangle-3 {
  position: absolute;
  z-index: 0;
  pointer-events: none;
}

.rectangle-1 {
  right: 0px;
  bottom: 1600px;
}

.rectangle-2 {
  left: 0px;
  bottom: 850px;
  opacity: 0.76;
}

.rectangle-3 {
  right: 0px;
  bottom: 0px;
}

@media screen and (max-width: 768px) {
  .wave-separator {
    height: 60px;
  }
}

@media screen and (max-width: 601px) {
  .main-bottom {
    padding: 16vh 24px 16vh 24px;
    gap: 26px;
  }
  .section {
    gap: 16vh;
  }
  .rectangle-1,
  .rectangle-2,
  .rectangle-3 {
    display: none;
  }
}

@media screen and (max-width: 480px) {
  .wave-separator {
    height: 40px;
  }
}
</style>
