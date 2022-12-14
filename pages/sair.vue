<template>
  <div></div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  mounted() {
    this.clearState()
    this.$router.push('/login')
  },

  methods: {
    ...mapActions('usuario', {
      clearState: 'clearState',
    }),
  },
}
</script>

<style lang="scss" scoped></style>
