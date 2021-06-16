<template>
  <p class="content-head">Assure toi de renseigner un mail valide :</p>
  <form>
    <input v-model="email" class="form-control modal-input mb-2" type="text" name="" placeholder="Email" :style="[errors.includes('email') && !validEmail(email) ? 'background-color: #fff8f8; border-left: 4px solid red' : '']" />
    <a @click.prevent="$emit('clicked-password-retrieved')" class="password-link d-block text-right mb-5" href="#">J’ai retrouvé mon mot de passe</a>
    <button @click="submitForm" class="btn btn-dark btn-block text-uppercase border-0 rounded-0 modal-btn" :disabled="!formIsFilled">Valider</button>
  </form>
</template>

<script>
export default {
  name: 'PasswordStep1',
  emits: ['filled', 'clicked-password-retrieved'],
  data() {
    return {
      email: '',
      errors: []
    }
  },
  computed: {
    formIsFilled() {
      return !!this.email
    }
  },
  methods: {
    validEmail: function (email) {
      var regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return regexp.test(email)
    },
    submitForm() {
      if (!this.validEmail(this.email)) {
        this.errors.push('email')
        return
      }
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
