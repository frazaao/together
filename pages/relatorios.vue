<template>
  <div>
    <HeaderComponent have-back-button />

    <main>
      <div class="voltar">
        <a href="/usuario"><img src="/icons/left-arrow.svg" alt="Voltar" /></a>
      </div>
      <h1 class="texto">Relatórios!</h1>

      <div class="texto_lista">
        <p>Como deseja visualizar:</p>
        <select class="lista">
          <option value="">Item1</option>
          <option value="">Item2</option>
          <option value="">Item3</option>
          <option value="">Item4</option>
        </select>
      </div>
      <div class="botao">
        <button class="processar">Processar</button>
      </div>
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
.header {
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

.texto_lista {
  margin: 0.5rem;
}

.texto_lista {
  display: grid;
  grid-template-columns: 1fr;
  margin: 7rem 5rem;
}

.lista {
  text-align: center;
  background: #f2f2f2;
  border-radius: 15px;
  height: 3rem;
  border-style: none;
}

.botao {
  display: grid;
  grid-template-columns: 1fr;
  margin: 14rem 9rem;
}

.processar {
  text-align: center;
  border-radius: 35px;
  border-style: none;
  background: rgba(43, 232, 136, 0.3);
  color: #349061;
  font-weight: 700;
  height: 2rem;
}

.texto_lista p {
  margin-left: 0.5rem;
}
</style>
