<template>
  <p class="content-head">Merci de saisir ton nouveau mot de passe :</p>
  <form>
    <input class="form-control modal-input" type="password" autocomplete="off" name="" value="" placeholder="Nouveau mot de passe" />
    <input class="form-control modal-input" type="password" autocomplete="off" name="" placeholder="Confirmation de ton mot de passe" />
    <button @click.prevent="$emit('filled')" class="btn btn-dark btn-block text-uppercase border-0 rounded-0 modal-btn">Valider</button>
  </form>
</template>

<script>
export default {
  name: 'PasswordStep3',
  emits: ['filled']
}
</script>

<style></style>
