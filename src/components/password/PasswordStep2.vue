<template>
  <img class="user_icon d-block mx-auto" fluid :src="require('@/assets/images/mic.png')" />
  <h6 class="info-text text-uppercase mt-3">
    <strong class="text-danger d-block">Un email a été envoyé.</strong>
    Il Contient le lien Pour réinitialiser ton mot de passe
  </h6>
  <button @click.prevent="$emit('filled')" class="btn btn-dark btn-block text-uppercase border-0 rounded-0 modal-btn sent">DEMANDE ENVOYée</button>
</template>

<script>
export default {
  name: 'PasswordStep2',
  emits: ['filled']
}
</script>

<style></style>
