<template>
  <div>
    <HeaderComponent have-back-button />

    <main>
      <div class="voltar">
        <a href="/usuario"><img src="/icons/left-arrow.svg" alt="Voltar" /></a>
      </div>
      <p class="texto">Notas de {{ aluno.nome }}</p>

      <ul class="lista">
        <li
          v-for="(disciplina, key) in aluno.disciplinas"
          :key="key"
          class="list-item"
        >
          <span class="list-title">{{ disciplina.nome }}</span>
          <Badge
            v-if="disciplina.frequencia"
            :variant="presentState(disciplina.frequencia)"
          >
            {{ disciplina.frequencia.presenca }}
            /
            {{ disciplina.frequencia.total }}
          </Badge>
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Badge from '~/components/Badge.vue'
import HeaderComponent from '~/components/Header.vue'
export default {
  components: {
    HeaderComponent,
    Badge,
  },

  computed: {
    ...mapState('aluno', {
      aluno: (state) => state,
    }),
  },

  methods: {
    presentState({ presenca, total }) {
      if (presenca / total < 0.5) {
        return 'danger'
      }

      if (presenca / total < 0.75) {
        return 'warning'
      }

      return 'success'
    },
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

.list-item {
  background-color: #f2f2f2;
  margin: 1rem 2rem;
  border-radius: 4px;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.25rem;
}

.list-item span.list-title {
  font-size: 1.5rem;
  font-weight: 400;
  color: #333;
}
</style>
