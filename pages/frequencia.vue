<template>
  <div>
    <HeaderComponent have-back-button />

    <main>
      <div class="voltar">
        <a href="/usuario"><img src="/icons/left-arrow.svg" alt="Voltar" /></a>
      </div>
      <p class="texto">Frequencia de {{ aluno.nome }}</p>

      <b-row class="justify-content-center">
        <b-col md="auto" class="d-flex justify-content-center">
          <b-calendar
            :value="value"
            :date-info-fn="isPresent"
            locale="pt-BR"
            @context="onContext"
          ></b-calendar>
        </b-col>
      </b-row>
    </main>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import HeaderComponent from '~/components/Header.vue'

export default {
  components: {
    HeaderComponent,
  },

  data: () => ({
    value: '',
    context: null,
    attendances: [],
  }),

  computed: {
    ...mapState('aluno', {
      aluno: (state) => state,
    }),
  },

  async mounted() {
    this.attendances = await this.fetchAttendances()
  },

  methods: {
    onContext(ctx) {
      this.context = ctx
    },

    async fetchAttendances() {
      const { value: token } = await window.cookieStore.get('token')
      const { data } = await this.$axios.get(
        'http://localhost:8000/api/presenca',
        { headers: { Authorization: `Bearer ${token}` } }
      )

      return data
    },

    isPresent(ymd, date) {
      const attendance = this.attendances.find((attendance) => {
        const attendanceDate = new Date(attendance.created_at)
        return (
          `${attendanceDate.getDate()}-${attendanceDate.getMonth()}-${attendanceDate.getFullYear()}` ===
          `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`
        )
      })

      if (!attendance) {
        return ''
      }

      return attendance.presenca ? 'table-success' : 'table-danger'
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

::v-deep .b-calendar-header,
::v-deep b-calendar-grid-help {
  display: none;
}
</style>
