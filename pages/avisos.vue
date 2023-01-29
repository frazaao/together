<template>
  <div>
    <HeaderComponent have-back-button />

    <main>
      <div class="voltar">
        <a href="/usuario"><img src="/icons/left-arrow.svg" alt="Voltar" /></a>
      </div>
      <p class="texto">Avisos!</p>
    </main>

    <div class="notification-wrapper">
      <Notification
        v-for="commentary in commentaries"
        :key="commentary.id"
        :title="`De ${commentary.professor.nome} sobre ${commentary.aluno.nome}`"
        :time="mountDateString(commentary.created_at)"
      >
        {{ commentary.conteudo }}
      </Notification>
    </div>
  </div>
</template>

<script>
import HeaderComponent from '~/components/Header.vue'
import Notification from '~/components/notification/Notification.vue'
export default {
  components: {
    HeaderComponent,
    Notification,
  },

  data: () => ({
    commentaries: [],
  }),

  async mounted() {
    this.commentaries = await this.fetchCommentaries()
  },

  methods: {
    async fetchCommentaries() {
      try {
        const { value: token } = await window.cookieStore.get('token')
        const { data } = await this.$axios.get(
          'http://localhost:8000/api/comentario',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )

        return data
      } catch {
        // TODO: Throw new Error 404 not found
      }
    },

    mountDateString(date) {
      return new Date(date).toLocaleDateString('pt-BR')
    },
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

.notification-wrapper {
  padding: 0 2rem;
}
</style>
