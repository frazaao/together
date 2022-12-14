<template>
  <span :class="`${variant} badge-custom`">
    <slot name="default" />
  </span>
</template>

<script>
export default {
  name: 'BadgeComponent',

  props: {
    variant: {
      type: String,
      default: 'success',
    },
  },
}
</script>

<style scoped>
.badge-custom {
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-weight: 600;
  min-width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.success {
  background: #b7f0d3;
  color: #349061;
}

.warning {
  background: #f0eab7;
  color: #904a34;
}

.danger {
  background: #f0b7b7;
  color: #903434;
}
</style>
