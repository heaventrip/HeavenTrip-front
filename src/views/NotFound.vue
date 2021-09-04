<template>
  <div class="wrapper">
    <div class="message">Désolé, cette page n'existe pas...</div>
    <Button @click="goBack" text="Revenir sur le site" color="grey" width="300px" size="1rem" />
  </div>
</template>

<script>
import Button from '@/components/elements/Button.vue'
export default {
  name: 'NotFound',
  components: {
    Button
  },
  methods: {
    goBack() {
      history.back()
    }
  }
}
</script>

<style scoped>
.wrapper {
  position: fixed;
  overflow: none;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.message {
  font-size: 3rem;
  font-family: Oswald, sans-serif;
  font-weight: 500;
  margin-bottom: 2rem;
  color: #292f33;
}
</style>
