<template>
  <div class="main-app">
    <Nuxt />
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.main-app {
  display: flex;
  position: relative;
  inset: 0;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  overflow-x: hidden;
}
.main-app > * {
  flex: 1;
  width: 100%;
  height: 100%;
}
</style>
