<template>
  <div>
    <HeaderComponent have-back-button />

    <main>
      <div class="voltar">
        <a href="/usuario"><img src="/icons/left-arrow.svg" alt="Voltar" /></a>
      </div>
      <p class="texto">Disciplinas Matrículadas!</p>

      <div
        v-if="isLoading"
        class="d-flex align-items-center justify-content-center my-4 py-4"
      >
        <b-spinner label="Carregando"></b-spinner>
      </div>

      <ul class="lista">
        <li
          v-for="discipline in disciplines"
          :key="discipline.id"
          class="list-item"
        >
          <span class="list-title">{{ discipline.titulo }}</span>
          <Badge> Matriculado </Badge>
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
    disciplines: [],
    isLoading: false,
  }),

  computed: {
    ...mapState('aluno', {
      aluno: (state) => state,
    }),
  },

  mounted() {
    this.fetchStudentDiscipline()
  },

  methods: {
    async fetchStudentDiscipline() {
      this.isLoading = true
      try {
        const { value: token } = await window.cookieStore.get('token')
        const { data } = await this.$axios.get(
          'https://togetherapp.shop/api/aluno',
          { headers: { Authorization: `Bearer ${token}` } }
        )

        this.disciplines = data[0].turma[0].disciplina
      } catch {
        // TODO: Throw new Error 404 not found
      } finally {
        this.isLoading = false
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
</style>
