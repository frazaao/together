<template>
  <div>
    <HeaderComponent have-back-button />

    <main>
      <div class="voltar">
        <a href="/usuario"><img src="/icons/left-arrow.svg" alt="Voltar" /></a>
      </div>
      <p class="texto">Notas de {{ aluno.nome }}</p>

      <div class="filter w-100">
        <label for="semestre">Selecione o bimestre</label>
        <select id="semestre" v-model="searchPeriod" name="semestre">
          <option :value="null" default>Selecione</option>
          <option value="primeiro" default>1º Bimestre</option>
          <option value="segundo" default>2º Bimestre</option>
          <option value="terceiro" default>3º Bimestre</option>
          <option value="quarto" default>4º Bimestre</option>
        </select>
      </div>

      <div
        v-if="isLoading"
        class="d-flex align-items-center justify-content-center my-4 py-4"
      >
        <b-spinner label="Carregando"></b-spinner>
      </div>

      <ul v-else class="lista">
        <li v-for="score in getNota()" :key="score.id" class="list-item">
          <span class="list-title">{{ score.disciplina.titulo }}</span>
          <span>{{ getBimestre(score.trimestre) }}</span>
          <Badge :variant="presentState({ nota: score.valor, total: 25 })">
            {{ `${score.valor}/25` }}
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

  data: () => ({
    searchPeriod: null,
    scores: [],
    isLoading: false,
  }),

  computed: {
    ...mapState('aluno', {
      aluno: (state) => state,
    }),
  },

  async mounted() {
    this.scores = await this.fetchScores()
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

    async fetchScores() {
      this.isLoading = true
      const { value: token } = await window.cookieStore.get('token')
      const { id } = await JSON.parse(window.localStorage.getItem('aluno'))
      try {
        const { data } = await this.$axios.get(
          `https://togetherapp.shop/api/nota/aluno/${id}`,
          { headers: { Authorization: `Bearer ${token}` } }
        )
        return data.nota
      } catch {
        //
      } finally {
        this.isLoading = false
      }
    },

    getBimestre(bimestre) {
      const options = {
        primeiro: '1º',
        segundo: '2º',
        terceiro: '3º',
        quarto: '4º',
      }

      return options[bimestre]
    },

    getNota() {
      if (!this.searchPeriod) {
        return this.scores
      }

      return this.scores.filter(
        (score) => score.trimestre === this.searchPeriod
      )
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
  margin: 1rem 0;
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
  padding: 0 1.25rem;
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
