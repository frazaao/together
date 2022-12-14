<template>
  <div>
    <HeaderComponent have-back-button />

    <main>
      <div class="voltar">
        <a href="/usuario"><img src="/icons/left-arrow.svg" alt="Voltar" /></a>
      </div>
      <p class="texto">Notas de {{ aluno.nome }}</p>

      <div class="filter">
        <label for="semestre">Selecione o bimestre</label>
        <select id="semestre" v-model="searchPeriod" name="semestre">
          <option :value="null" default>Selecione</option>
          <option :value="1" default>1º Bimestre</option>
          <option :value="2" default>2º Bimestre</option>
          <option :value="3" default>3º Bimestre</option>
        </select>
      </div>

      <ul class="lista">
        <li
          v-for="(disciplina, key) in aluno.disciplinas"
          :key="key"
          class="list-item"
        >
          <span class="list-title">{{ disciplina.nome }}</span>
          <Badge
            v-if="disciplina.nota"
            :variant="presentState(getNota(disciplina, searchPeriod))"
          >
            {{ getNota(disciplina, searchPeriod).nota }}
            /
            {{ getNota(disciplina, searchPeriod).total }}
          </Badge>

          <Badge v-else variant="default"> N/A </Badge>
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

  data: () => ({
    searchPeriod: null,
  }),

  computed: {
    ...mapState('aluno', {
      aluno: (state) => state,
    }),
  },

  methods: {
    presentState({ nota, total }) {
      if (nota / total < 0.5) {
        return 'danger'
      }

      if (nota / total < 0.75) {
        return 'warning'
      }

      return 'success'
    },

    getNota(disciplina, periodo = null) {
      if (!periodo) {
        return {
          nota: disciplina.nota[disciplina.nota.length - 1].valor,
          total: 10,
        }
      }

      const nota = disciplina.nota.filter((nota) => {
        return nota.semestre === periodo
      })

      return {
        nota: nota[0].valor,
        total: 10,
      }
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

.filter {
  padding: 0 5rem;
}

select {
  border: none;
  margin: 0 auto;
  width: 100%;
  min-height: 44px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
  border-radius: 0.5rem;
  padding: 0 1rem;
  outline: none;
  transition: all 0.2s ease-in-out;
}

select:focus {
  box-shadow: 0 0 8px rgba(255, 34, 226, 0.5);
}
</style>
