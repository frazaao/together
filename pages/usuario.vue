<template>
  <div>
    <HeaderComponent />

    <main>
      <h1 class="texto">Olá, Usuário!</h1>

      <div class="nomes">
        <p class="nome_disciplina">Disciplina</p>
        <p class="nome_frequencia">Frequência</p>
        <p class="nome_notas">Notas</p>
        <p class="nome_avisos">Avisos</p>
        <p class="nome_relatorios">Relatórios</p>
        <p class="nome_sair">Sair</p>
      </div>

      <div class="navegacao">
        <a href="/disciplina"
          ><img class="disciplina" src="/icons/disciplina.svg" alt=""
        /></a>
        <a href="/frequencia"
          ><img class="frequencia" src="/icons/frequencia.svg" alt=""
        /></a>
        <a href="/notas"><img class="notas" src="/icons/notas.svg" alt="" /></a>
        <a href="/avisos"
          ><img class="avisos" src="/icons/avisos.svg" alt=""
        /></a>
        <a href="/relatorios"
          ><img class="relatorios" src="/icons/relatorio.svg" alt=""
        /></a>
        <a href="/sair"><img class="sair" src="/icons/logout.svg" alt="" /></a>
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

.texto {
  font-size: 1.7rem;
  margin: 2rem 2rem;
  margin-bottom: 6rem;
}

.navegacao {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 100px;
}

a {
  text-decoration: none;
  background: #f2f2f2;
  border-radius: 50%;
  margin: auto;
  height: 120px;
  width: 120px;
}

p {
  font-family: Roboto;
  font-weight: 400;
  font-size: 1.25rem;
}

.disciplina {
  position: relative;
  top: 2rem;
  left: 2rem;
}

.frequencia {
  position: relative;
  top: 2rem;
  left: 2rem;
}

.notas {
  position: relative;
  top: 2rem;
  left: 2rem;
}

.avisos {
  position: relative;
  top: 2rem;
  left: 2rem;
}

.recado {
  position: relative;
  top: 2rem;
  left: 2rem;
}

.relatorios {
  position: relative;
  top: 2rem;
  left: 2rem;
}

.sair {
  position: relative;
  top: 2.4rem;
  left: 2.5rem;
}

.nomes {
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: absolute;
  gap: 100px;
}

.nome_disciplina {
  position: relative;
  top: 8rem;
  left: 2.5rem;
}

.nome_frequencia {
  position: relative;
  top: 8rem;
  left: 6.3rem;
}

.nome_notas {
  position: relative;
  top: 12.5rem;
  left: 3.2rem;
}

.nome_avisos {
  position: relative;
  top: 12.5rem;
  left: 7.3rem;
}

.nome_relatorios {
  position: relative;
  top: 17.4rem;
  left: 2.2rem;
}

.nome_sair {
  position: relative;
  top: 17.4rem;
  left: 8rem;
}
</style>
