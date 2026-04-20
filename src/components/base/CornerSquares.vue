<script setup>
defineProps({
  positions: {
    type: Array,
    default: () => ['top-left', 'top-right', 'bottom-left', 'bottom-right']
  }
})
</script>

<template>
  <div
    v-for="pos in positions"
    :key="pos"
    :class="['corner-square', pos]"
  ></div>
</template>

<style scoped>
.corner-square {
  box-sizing: border-box;
  position: absolute;
  width: 12px;
  height: 12px;
  background-color: #FDFDFD;
  border: 2px solid var(--blue-200);
  z-index: 2;
}

.corner-square.top-left {
  top: -6px;
  left: -6px;
}

.corner-square.top-right {
  top: -6px;
  right: -6px;
}

.corner-square.bottom-left {
  bottom: -6px;
  left: -6px;
}

.corner-square.bottom-right {
  bottom: -6px;
  right: -6px;
}

@media screen and (max-width: 1026px) {
  .corner-square {
    width: 10px;
    height: 10px;
  }
}

@media screen and (max-width: 601px) {
  .corner-square {
    width: 8px;
    height: 8px;
  }
}
</style>
