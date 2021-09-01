<template>
  <img class="user_icon d-block mx-auto" fluid :src="require('@/assets/images/mic.png')" />
  <h6 class="info-text text-uppercase mt-3 mb-5">
    <strong class="text-danger d-block mb-3">Un email a été envoyé.</strong>
    Il Contient le lien Pour réinitialiser ton mot de passe
  </h6>
  <Button id="btn-validate" @click="$emit('filled')" text="Renvoyer l'email" px="1.5rem" size=".8rem" height="50px" width="100%" weight="bold" color="white" :disabled="!formIsFilled" />
</template>

<script>
import Button from '@/components/elements/Button.vue'

export default {
  name: 'PasswordStep2',
  emits: ['filled'],
  components: {
    Button
  }
}
</script>

<style scoped>
#btn-validate:hover {
  background-color: #d82558;
}
button:hover {
  background-color: #d82558 !important;
}
button:active {
  background-color: #292f33 !important;
}
</style>
