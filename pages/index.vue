<template>
  <div></div>
</template>

<script>
export default {
  name: 'IndexPage',

  mounted() {
    if (!localStorage.getItem('usuario')) {
      this.$router.push('/login')
      return
    }

    this.$router.push('/usuario')
  },
}
</script>
