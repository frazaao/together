<template>
  <div class="w-100 h-full d-flex align-items-center justify-content-center">
    <b-spinner label="Carregando"></b-spinner>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'IndexPage',

  async mounted() {
    if (!window.cookieStore.get('token')) {
      this.$router.push('/login')
      return
    }

    try {
      const { value: token } = await window.cookieStore.get('token')
      const { data } = await this.$axios.get('http://localhost:8000/api/me', {
        headers: { Authorization: `Bearer ${token}` },
      })

      this.updateState({
        nome: data.nome,
        perfil: data.perfil,
      })

      this.updateAlunoState(data.aluno[0])

      this.$router.push('/usuario')
    } catch {
      this.$router.push('/login')
    }
  },

  methods: {
    ...mapActions('usuario', {
      updateState: 'updateState',
    }),

    ...mapActions('aluno', {
      updateAlunoState: 'updateAlunoState',
    }),
  },
}
</script>
