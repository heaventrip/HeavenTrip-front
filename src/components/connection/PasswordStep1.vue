<template>
  <p class="content-head">Assure toi de renseigner un mail valide :</p>
  <form>
    <input v-model="email" class="form-control modal-input mb-2" type="text" name="" placeholder="Email" />
    <a @click.prevent="$emit('clicked-password-retrieved')" class="password-link d-block text-right mb-5" href="#">J’ai retrouvé mon mot de passe</a>
    <button @click.prevent="submitForm" class="btn btn-dark btn-block text-uppercase border-0 rounded-0 modal-btn">Valider</button>
  </form>
</template>

<script>
export default {
  name: 'PasswordStep1',
  emits: ['filled', 'clicked-password-retrieved'],
  data() {
    return {
      email: ''
    }
  },
  methods: {
    submitForm() {
      this.$emit('filled')
      this.sendEmail()
    },
    sendEmail() {
      this.$axios
        .post('/forgot-password', {
          user: {
            email: this.email
          }
        })
        .then((resp) => {
          console.log(resp.data.message)
        })
        .catch((err) => {
          this.errors.push(err.response.data.message)
        })
    }
  }
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
