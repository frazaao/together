<template>
  <div class="app">
    <header></header>

    <b-toast
      id="error-toast"
      :solid="true"
      title="BootstrapVue"
      variant="danger"
      toaster="b-toaster-top-center"
    >
      Usuario ou senha errada
    </b-toast>

    <div class="logo-inicial">
      <img class="logo" src="/images/logo/green_logo.svg" alt="Logo" />
      <h1>Together</h1>
      <p>JUNTOS PELA EDUCAÇÃO</p>
    </div>

    <main class="login">
      <div class="username">
        <label for="username">Usuário</label>
        <input
          id="username"
          v-model="user"
          type="text"
          name="username"
          required
        />
      </div>

      <div class="password">
        <label for="pass">Senha</label>
        <input
          id="pass"
          v-model="password"
          type="password"
          name="password"
          minlength="8"
          required
        />
      </div>

      <input
        class="botao"
        type="submit"
        value="LOGIN"
        @click.prevent="handleLogin"
      />
    </main>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data: () => ({
    user: '',
    password: '',
  }),

  mounted() {
    if (!localStorage.getItem('usuario')) {
      this.$router.push('/login')
      return
    }

    this.$router.push('/usuario')
  },

  methods: {
    async handleLogin() {
      if (!(await this.assertUserAndPassword())) {
        return
      }
      await this.setLocalStorageWithUserData()
      this.redirectToUserPage()
    },

    async assertUserAndPassword() {
      try {
        const { data } = await this.$axios.post(
          'http://localhost:8000/api/login',
          {
            senha: this.password,
            email: this.user,
          }
        )

        this.setCookieWithAuthorizationToken(data.token)
        return true
      } catch {
        this.$bvToast.show('error-toast')
        return false
      }
    },

    setCookieWithAuthorizationToken(token) {
      window.cookieStore.set('token', token)
    },

    async setLocalStorageWithUserData() {
      try {
        const { value: token } = await window.cookieStore.get('token')
        const { data } = await this.$axios.get('http://localhost:8000/api/me', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        this.updateState({
          nome: data.nome,
          perfil: data.perfil,
        })

        this.updateAlunoState(data.aluno[0])
      } catch {
        // TODO: Throw new Error 401 UNAUTHORIZED
      }
    },

    redirectToUserPage() {
      this.$router.push('/usuario')
    },

    ...mapActions('usuario', {
      updateState: 'updateState',
    }),

    ...mapActions('aluno', {
      updateAlunoState: 'updateAlunoState',
    }),
  },
}
</script>

<style scoped>
.app {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
}

header {
  background-color: #2be888;
  width: 100%;
  height: 76px;
  border: none;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
}

.logo {
  display: block;
  margin: auto;
}

.logo-inicial,
h1 {
  display: grid;
  margin: auto;
}

.logo-inicial p {
  display: grid;
  margin: auto;
  font-size: 0.8rem;
  color: #ff66c4;
}

.login {
  width: 100%;
  display: grid;
  margin: auto;
  gap: 2rem;
  padding: 0 4rem;
}

.username {
  font-size: 1.25rem;
  display: grid;
  margin: auto;
  width: 100%;
}

.username input {
  border-radius: 15px;
  background: #d9d9d9;
  height: 2.5rem;
  border-style: none;
  width: 100%;
}

.password {
  font-size: 1.25rem;
  display: grid;
  margin: auto;
  width: 100%;
}

.password input {
  border-radius: 15px;
  background: #d9d9d9;
  height: 2.5rem;
  border-style: none;
  width: 100%;
}

.botao {
  display: block;
  border-radius: 35px;
  font-size: 1.3rem;
  background: #2be888;
  border-style: none;
  padding: 1rem 2rem;
  width: fit-content;
  margin: 0 auto;
}
</style>
