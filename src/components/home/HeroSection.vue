<template>
  <div class="hero-section animate__animated animate__fadeInUp animate__delay">
    <div class="vector-2 draggable">
      <img src="/assets/images/homepage/vector/vector-2.svg" alt="Vector 2" />
    </div>

    <div class="vector-1 draggable">
      <img src="/assets/images/homepage/vector/vector-1.svg" alt="Vector 1" />
    </div>

    <div class="title draggable">
      <div class="regular-base comment-label">
        <div class="comment-label-content">
          <span class="comment-symbol">⌗</span>
        </div>
        <span class="comment-text">hero-section</span>
      </div>

      <div class="hero-content">
        <img
          src="/assets/images/homepage/hero-image.png"
          alt="Hero Image"
          class="hero-image"
        />
        <div class="title-text">
          <p class="title-md">
            <span class="dash">— </span>
            <span>
              Sou Product Designer e pesquisador na USP. Orquestro estratégia,
              prototipagem e código para resolver problemas reais.
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero-section {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 72px;
  align-items: center;
  justify-content: center;
  padding: 0;
  position: relative;
  width: 100%;
  height: 100%;
}

.vector-2 {
  position: absolute;
  height: 120px;
  left: -64px;
  top: 48px;
  width: 120px;
  z-index: 1;
}

.vector-1 {
  position: absolute;
  bottom: -104px;
  height: 240px;
  right: -82px;
  width: 232px;
  z-index: 1;
  transform: rotate(360deg);
}

.vector-2 img,
.vector-1 img {
  display: block;
  max-width: none;
  width: 100%;
  height: 100%;
}

.title {
  background-color: var(--white);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 24px 32px;
  position: relative;
  flex-shrink: 0;
  width: 100%;
  z-index: 2;
  outline: 2px solid var(--blue-gray-100);
}

.title:hover {
  outline: 2px solid var(--blue-500);
}

.title.draggable.draggable-disabled:hover:not(:active) {
  outline: 2px solid var(--blue-gray-100) !important;
}

.title.draggable:not(.draggable-disabled):hover:not(:active) {
  outline: 2px solid var(--blue-500) !important;
}

.draggable:active {
  outline: 2px solid var(--blue-500);
}

.comment-label {
  position: absolute;
  left: 72px;
  font-style: normal;
  color: var(--blue-gray-300);
  font-size: 16px;
  text-align: center;
  top: -30px;
  transform: translateX(-50%);
  display: none;
  align-items: center;
  gap: 4px;
}

.comment-label-content {
  display: flex;
  align-items: center;
  justify-content: center;
}

.comment-symbol {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  opacity: 1;
}

.title:hover .comment-label {
  color: var(--blue-500);
}

.title.draggable.draggable-disabled:hover .comment-label {
  color: var(--blue-gray-300) !important;
}

.title-text {
  flex: 1;
  min-width: 0;
  position: relative;
  flex-shrink: 0;
}

.title-text span {
  color: var(--blue-gray-900);
}

.title-text p {
  line-height: normal;
}

.title-text .dash {
  font-family: 'Karla', sans-serif;
  font-weight: 400;
}

.hero-content {
  display: flex;
  flex-direction: row;
  gap: 40px;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
}

.hero-image {
  width: 127.5px;
  max-width: 100%;
  height: 147px;
  flex-shrink: 0;
  object-fit: cover;
}

@media screen and (max-width: 1026px) {
  .title {
    padding: 36px 28px;
  }
}

@media screen and (max-width: 601px) {
  .vector-1,
  .vector-2 {
    display: none;
  }

  .title {
    padding: 28px 20px;
  }

  .hero-content {
    flex-direction: column;
    gap: 24px;
  }
}
</style>
