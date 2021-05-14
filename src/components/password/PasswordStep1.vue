<template>
  <p class="content-head">Assure toi de renseigner un mail valide :</p>
  <form>
    <input class="form-control modal-input mb-2" type="text" name="" value="axel.sonderer@gmail.com" placeholder="Email" />
    <a class="password-link d-block text-right mb-5" href="#">J’ai retrouvé mon mot de passe</a>
    <button @click.prevent="$emit('filled')" class="btn btn-dark btn-block text-uppercase border-0 rounded-0 modal-btn">Valider</button>
  </form>
</template>

<script>
export default {
  name: 'PasswordStep1',
  emits: ['filled']
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
