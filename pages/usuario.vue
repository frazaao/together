<template>
  <div>
    <HeaderComponent />

    <main>
      <h1 class="texto">Olá, {{ usuario.nome }}!</h1>

      <div class="navegacao">
        <CircleMenuItem
          link="/disciplina"
          src="/icons/disciplina.svg"
          alt="Ícone de disciplina"
        >
          Disciplina
        </CircleMenuItem>

        <CircleMenuItem
          link="/frequencia"
          src="/icons/frequencia.svg"
          alt="Ícone de frequencia"
        >
          Frequência
        </CircleMenuItem>

        <CircleMenuItem
          link="/notas"
          src="/icons/notas.svg"
          alt="Ícone de notas"
        >
          Notas
        </CircleMenuItem>

        <CircleMenuItem
          link="/avisos"
          src="/icons/avisos.svg"
          alt="Ícone de avisos"
        >
          Avisos
        </CircleMenuItem>

        <CircleMenuItem
          link="/relatorios"
          src="/icons/relatorios.svg"
          alt="Ícone de relatorios"
        >
          Relatórios
        </CircleMenuItem>

        <CircleMenuItem
          link="/sair"
          src="/icons/logout.svg"
          alt="Ícone de sair"
        >
          Sair
        </CircleMenuItem>
      </div>
    </main>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import HeaderComponent from '~/components/Header.vue'
import CircleMenuItem from '~/components/pages/usuario/CircleMenuItem.vue'

export default {
  components: {
    HeaderComponent,
    CircleMenuItem,
  },

  computed: {
    ...mapState('usuario', {
      usuario: (state) => state,
    }),
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

p {
  font-family: Roboto;
  font-weight: 400;
  font-size: 1.25rem;
}
</style>
