<template>
  <img class="user_icon d-block mx-auto" fluid :src="require('@/assets/images/mic.png')" />
  <h6 class="info-text text-uppercase mt-3">
    <strong class="text-danger d-block">Ton nouveau mot de passe a été enregistré.</strong>
    Tu peux maintenant te reconnecter.
  </h6>
  <button @click.prevent="$emit('complete')" class="btn btn-dark btn-block text-uppercase border-0 rounded-0 modal-btn">SE CONNECTER</button>
</template>

<script>
export default {
  name: 'PasswordStep4',
  emits: ['complete']
}
</script>

<style scoped>
button:hover {
  background-color: #d82558 !important;
}
button:active {
  background-color: #292f33 !important;
}
</style>
