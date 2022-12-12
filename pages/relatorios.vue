<template>
  <div>
    <HeaderComponent have-back-button />

    <main>
      <div class="voltar">
        <a href="/usuario"><img src="/icons/left-arrow.svg" alt="Voltar" /></a>
      </div>
      <p class="texto">Relatórios!</p>
    </main>
  </div>
</template>

<script>
import HeaderComponent from '~/components/Header.vue'
export default {
  components: {
    HeaderComponent,
  },
}
</script>

<style scoped>
body {
  margin: 0px;
  padding: 0px;
  border: 0px;
}

button {
  background-color: #ff66c4;
  width: 100%;
  height: 76px;
  border: none;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
}

.logo {
  display: block;
}

.voltar {
  padding: 1rem;
}

.texto {
  display: grid;
  text-align: center;
  font-family: Roboto;
  font-size: 2rem;
  font-weight: 400;
  margin: 40px 30px;
}
</style>
