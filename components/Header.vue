<template>
  <header>
    <button class="header">
      <a v-if="haveBackButton" @click="back">
        <img src="/icons/left-arrow.svg" alt="Seta para a esquerda" />
      </a>
      <img class="logo" src="/images/logo/white_logo.svg" alt="" />
    </button>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',

  props: {
    haveBackButton: Boolean,
  },

  methods: {
    back() {
      this.$router.back()
    },
  },
}
</script>

<style scoped>
.header {
  background-color: #ff66c4;
  width: 100%;
  border: none;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
}

a img {
  width: 1.125rem;
}
</style>
