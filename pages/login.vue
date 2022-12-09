<template>
  <div>
    <header>
      <button></button>
    </header>

    <div class="logo-inicial">
      <img class="logo" src="/images/logo/green_logo.svg" alt="Logo" />
      <h1>Together</h1>
      <p>JUNTOS PELA EDUCAÇÃO</p>
    </div>

    <main class="login">
      <div class="username">
        <label for="username">Digite o número de RA ou CPF</label>
        <input id="username" type="text" name="username" />
      </div>

      <div class="password">
        <label for="pass">Senha</label>
        <input
          id="pass"
          type="password"
          name="password"
          minlength="8"
          required
        />
      </div>

      <input class="botao" type="submit" value="LOGIN" />
    </main>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
button {
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
  padding-top: 80px;
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
}

.username {
  font-size: 1.25rem;
  display: grid;
  margin: auto;
  padding-top: 100px;
}

.username input {
  border-radius: 15px;
  background: #d9d9d9;
  height: 2.5rem;
  border-style: none;
}

.password {
  font-size: 1.25rem;
  display: grid;
  margin: auto;
  padding-top: 90px;
  padding-bottom: 10px;
}

.password input {
  border-radius: 15px;
  background: #d9d9d9;
  height: 2.5rem;
  border-style: none;
  width: 15rem;
}

.botao {
  display: block;
  border-radius: 35px;
  font-size: 1.3rem;
  background: #2be888;
  border-style: none;
  margin: 7rem 9rem;
  padding: 0.7rem;
}
</style>
