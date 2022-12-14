<template>
  <div class="notification">
    <div class="icon-wrapper">
      <BIconBell />
    </div>
    <div class="content-wrapper">
      <div class="header">
        <span class="title">{{ title }}</span>
        <span class="time">{{ time }}</span>
      </div>
      <div class="content">
        <slot name="default" />
      </div>
    </div>
  </div>
</template>

<script>
import { BIconBell } from 'bootstrap-vue'

export default {
  name: 'NotificationComponent',

  components: {
    BIconBell,
  },

  props: {
    title: {
      type: String,
      default: '',
    },

    time: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped>
.notification {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 2rem;
}
.icon-wrapper {
  width: 1.5rem;
  height: 1.5rem;
  background: #c0f9dc;
  color: #349061;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.content-wrapper {
  flex: 1;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.title {
  color: #349061;
  font-weight: 600;
}

.time {
  color: #b9b9c3;
  font-size: 0.75rem;
}

.content {
  font-size: 0.875rem;
  color: #6e6b7b;
  margin-top: 0.5rem;
}
</style>
