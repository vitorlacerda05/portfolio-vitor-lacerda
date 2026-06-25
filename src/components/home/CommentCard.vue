<script setup>
defineProps({
  quote: { type: String, required: true },
  name: { type: String, required: true },
  position: { type: String, required: true },
  avatar: { type: String, required: true }
})
</script>

<template>
  <div class="comment">
    <div class="comment-content">
      <p class="comment-quote">{{ quote }}</p>
    </div>
    <div class="comment-details">
      <div class="comment-avatar">
        <img :src="avatar" :alt="`Foto de ${name}`" />
      </div>
      <div class="comment-info">
        <p class="comment-name medium-base">{{ name }}</p>
        <p class="comment-position regular-sm">{{ position }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.comment {
  background-color: var(--blue-700);
  box-shadow: 0 0 50px 0 rgba(25, 118, 210, 0.55);
  border-radius: 24px;
  padding: 40px 40px 32px 40px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 32px;
  transition: transform 0.2s ease-out, box-shadow 0.2s ease-out;
}

.comment:hover {
  transform: translateY(-3px);
  box-shadow: 0 0 60px 0 rgba(25, 118, 210, 0.7);
}

.comment::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(180deg, #1E88E5 0%, #1976D2 100%);
  border-radius: 24px;
  padding: 1px;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: xor;
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  pointer-events: none;
}

.comment-content {
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
}

.comment-quote {
  font-family: 'Karla', sans-serif;
  font-style: italic;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  color: var(--white);
  width: 100%;
}

.comment-details {
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
}

.comment-avatar {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  flex-shrink: 0;
}

.comment-avatar img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
}

.comment-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
  min-width: 0;
}

.comment-name,
.comment-position {
  color: var(--blue-50);
  width: 100%;
}

.comment-name {
  color: var(--white);
}

.comment-position {
  font-weight: 400;
}

@media screen and (max-width: 1026px) {
  .comment {
    padding: 32px 32px 24px 32px;
    gap: 24px;
  }
  .comment-quote {
    font-size: 16px;
  }
}

@media screen and (max-width: 601px) {
  .comment-avatar {
    width: 48px;
    height: 48px;
  }
  .comment-quote {
    font-size: 15px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .comment,
  .comment:hover {
    transition: none;
    transform: none;
  }
}
</style>
