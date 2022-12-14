<template>
  <a :href="link">
    <div>
      <img :class="className" :src="src" :alt="alt" />
    </div>
    <slot name="default" />
  </a>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true,
    },
    src: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      default: '',
    },
    alt: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
a {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: black;
  font-weight: 600;
}

a div {
  background: #f2f2f2;
  border-radius: 50%;
  margin: auto;
  height: 120px;
  width: 120px;
  padding: 2rem;
  transition: all 0.2s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
}

a div:hover {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.125);
}
</style>
