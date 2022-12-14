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
      <Notification title="Reunião de pais e mestres" time="11m atrás">
        Aviso de reunião de pais e mestres no dia 12/12 às 20:00 hrs. Contamos
        com sua presença
      </Notification>

      <Notification title="Recesso escolar" time="12h atrás">
        Aviso de recesso escolar entre os dias 16/12 à 31/12. Desejamos a toda
        família boas festas.
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
