<template>
  <div>
    <HeaderComponent have-back-button />

    <main>
      <div class="voltar">
        <a href="/usuario"><img src="/icons/left-arrow.svg" alt="Voltar" /></a>
      </div>
      <p class="texto">Disciplinas Matrículadas!</p>

      <ul class="lista">
        <li class="lista1"></li>
        <li class="lista2"></li>
        <li class="lista3"></li>
        <li class="lista4"></li>
        <li class="lista5"></li>
        <li class="lista6"></li>
      </ul>
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

.lista {
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 5rem;
  list-style: none;
  padding-left: 20px;
  padding-right: 20px;
}

.lista1 {
  background-color: #f2f2f2;
  margin: 1rem 2rem;
  border-radius: 4px;
  height: 3rem;
}

.lista2 {
  background: #f2f2f2;
  margin: 1rem 2rem;
  border-radius: 4px;
  height: 3rem;
}

.lista3 {
  background: #f2f2f2;
  margin: 1rem 2rem;
  border-radius: 4px;
  height: 3rem;
}

.lista4 {
  background: #f2f2f2;
  margin: 1rem 2rem;
  border-radius: 4px;
  height: 3rem;
}

.lista5 {
  background: #f2f2f2;
  margin: 1rem 2rem;
  border-radius: 4px;
  height: 3rem;
}

.lista6 {
  background: #f2f2f2;
  margin: 1rem 2rem;
  border-radius: 4px;
  height: 3rem;
}
</style>
