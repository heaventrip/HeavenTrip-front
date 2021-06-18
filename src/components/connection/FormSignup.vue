<template>
  <div class="register-form h-100 d-flex flex-column">
    <p class="text-left content-head mb-4">Merci de remplir tous les champs pour valider votre inscription :</p>
    <form id="register-form" @submit.prevent="checkRegisterForm" method="post">
      <div class="row">
        <div class="col-12 col-lg-6">
          <div class="form-group position-relative">
            <input v-model="firstName" class="form-control modal-input" type="text" name="" placeholder="Prénom" :style="[registerErrors.includes('firstName') && !firstName ? 'background-color: #fff8f8; border-left: 4px solid red' : '']" />
            <i class="fa fa-check check-sym"></i>
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div class="form-group">
            <input v-model="lastName" class="form-control modal-input" type="text" name="" placeholder="Nom" :style="[registerErrors.includes('lastName') && !lastName ? 'background-color: #fff8f8; border-left: 4px solid red' : '']" />
          </div>
        </div>
        <div class="col-12">
          <div class="form-group">
            <input v-model="registerEmail" class="form-control modal-input" type="mail" name="register_email" placeholder="Adresse mail" :style="[registerErrors.includes('registerEmail') && !registerEmail ? 'background-color: #fff8f8; border-left: 4px solid red' : '']" />
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div class="form-group">
            <input
              v-model="registerPassword"
              class="form-control modal-input"
              type="password"
              autocomplete="off"
              name="register_password"
              placeholder="Mot de passe"
              :style="[registerErrors.includes('registerPassword') && !registerPassword ? 'background-color: #fff8f8; border-left: 4px solid red' : '']"
            />
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div class="form-group">
            <input
              v-model="registerPasswordConfirmation"
              class="form-control modal-input"
              type="password"
              name="register_password_confirmation"
              placeholder="Retaper le mot de passe"
              :style="[registerErrors.includes('registerPasswordConfirmation') && !registerPasswordConfirmation ? 'background-color: #fff8f8; border-left: 4px solid red' : '']"
            />
          </div>
        </div>
      </div>
      <button class="btn btn-dark btn-block text-uppercase border-0 rounded-0 modal-btn mb-2 mt-0" :disabled="!formIsFilled">S'inscrire</button>
    </form>
    <div class="d-flex regist mb-4">
      <a class="password-link mr-auto" href="#">En cliquant, tu acceptes nos <span class="text-danger text-decoration-underline">conditions générales d'utilisation</span></a>
      <a class="ml-auto acc-text d-none d-lg-block" style="cursor: pointer" @click.stop="$emit('clicked-existing-account')">J'ai déjà un compte</a>
    </div>
    <h6 class="prefer-text text-center">
      <span>Ou si tu préfères par</span>
    </h6>
    <div class="form-row">
      <div class="col-12 col-lg-6">
        <button class="btn btn-block rounded-0 social-btn fb-btn mb-3 mb-lg-0 text-left pl-4"><i class="fab fa-facebook-f mr-3 h5 mb-0 align-text-bottom"></i>S'inscrire avec Facebook</button>
      </div>
      <div class="col-12 col-lg-6">
        <button class="btn btn-block rounded-0 social-btn text-left pl-4">
          <svg class="mr-3 h5 mb-0 align-text-bottom" id="Groupe_90" data-name="Groupe 90" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
            <path id="Tracé_2140" data-name="Tracé 2140" d="M4.876,145.622,4.11,148.48l-2.8.059a11.019,11.019,0,0,1-.081-10.272h0l2.492.457L4.814,141.2a6.565,6.565,0,0,0,.062,4.42Z" transform="translate(0 -132.327)" fill="#fbbb00" />
            <path id="Tracé_2141" data-name="Tracé 2141" d="M272.194,208.176a11,11,0,0,1-3.921,10.633h0l-3.139-.16-.444-2.773a6.556,6.556,0,0,0,2.821-3.348h-5.882v-4.352h10.566Z" transform="translate(-250.386 -199.231)" fill="#518ef8" />
            <path id="Tracé_2142" data-name="Tracé 2142" d="M47.084,315.692h0a11,11,0,0,1-16.575-3.365l3.565-2.918a6.542,6.542,0,0,0,9.427,3.35Z" transform="translate(-29.198 -296.114)" fill="#28b446" />
            <path id="Tracé_2143" data-name="Tracé 2143" d="M45.415,2.532,41.852,5.45a6.541,6.541,0,0,0-9.644,3.425L28.625,5.941h0A11,11,0,0,1,45.415,2.532Z" transform="translate(-27.394)" fill="#f14336" />
          </svg>
          S'inscrire avec Google
        </button>
      </div>
    </div>
    <p class="recaptcha text-center mb-0">
      Ce site est protégé par reCAPTCHA.
      <span class="highlights">La politique de confidentialité</span>
      et les
      <span class="highlights">conditions d'utilisation</span> de Google s'appliquent.
    </p>
  </div>
</template>

<script>
export default {
  name: 'ConnectionModal',
  emits: ['clicked-existing-account', 'submitted-form'],
  data() {
    return {
      registerErrors: [],
      firstName: '',
      lastName: '',
      registerEmail: '',
      registerPassword: '',
      registerPasswordConfirmation: ''
    }
  },
  computed: {
    formIsFilled() {
      return !!(this.firstName && this.lastName && this.registerEmail && this.registerPassword && this.registerPasswordConfirmation)
    }
  },
  methods: {
    checkRegisterForm() {
      this.registerErrors = []
      let err = this.registerErrors

      if (!this.firstName) err.push('firstName')
      if (!this.lastName) err.push('lastName')
      if (!this.validEmail(this.registerEmail)) err.push('registerEmail')
      if (this.registerPassword === '') err.push('registerPassword')
      if (this.registerPassword !== this.registerPasswordConfirmation) err.push('registerPasswordConfirmation')
      if (!err.length) this.submitRegisterForm()
    },
    submitRegisterForm() {
      this.$axios
        .post('/registration', {
          user: {
            first_name: this.firstName,
            last_name: this.lastName,
            email: this.registerEmail,
            password: this.registerPassword,
            password_confirmation: this.registerPasswordConfirmation
          }
        })
        .then((response) => {
          alert("Inscription réussie! Veuillez vérifier l'email" + this.registerEmail + "et confirmer l'inscription puis connectez-vous.")
          this.registerEmail = ''
          this.registerPassword = ''
          this.registerPasswordConfirmation = ''
          this.$emit('submitted-form')
        })
        .catch((err) => {
          this.registerErrors.push(err.response.data.message)
        })
      // this.$router.push('/');
    },
    validEmail: function (email) {
      var regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return regexp.test(email)
    }
  }
}
</script>

<style>
.errors {
  color: #ff0000;
}
.modal-input--error {
  color: #ff0000;
  border-left: 4px solid #ff0000;
}
</style>
