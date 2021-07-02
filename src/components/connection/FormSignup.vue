<template>
  <div class="register-form h-100 d-flex flex-column">
    <p class="text-left content-head mb-4">Merci de remplir tous les champs pour valider votre inscription :</p>
    <form id="register-form" @submit.prevent="submitRegisterForm" method="post" style="position: relative">
      <transition name="slide">
        <div v-if="errResponse" class="error-container">{{ errResponse }}</div>
      </transition>
      <div class="row">
        <div class="col-12 col-lg-6">
          <div class="form-group position-relative">
            <input v-model="firstName" class="form-control modal-input" type="text" name="" placeholder="Prénom" :style="{ backgroundColor: [firstNameIsValid ? '' : '#fff8f8'] }" />
            <i class="fa fa-check check-sym"></i>
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div class="form-group">
            <input v-model="lastName" class="form-control modal-input" type="text" name="" placeholder="Nom" :style="{ backgroundColor: [lastNameIsValid ? '' : '#fff8f8'] }" />
          </div>
        </div>
        <div class="col-12 col-lg-7">
          <div class="form-group">
            <input v-model="email" class="form-control modal-input" type="mail" name="register_email" placeholder="Adresse mail" :style="{ backgroundColor: [emailIsValid ? '' : '#fff8f8'] }" />
          </div>
        </div>
        <div class="col-12 col-lg-5">
          <div class="form-group">
            <input v-model="birthDate" type="date" name="" class="form-control modal-input" style="padding-left: 0.5rem" placeholder=" " required datepicker id="birthdate" :style="{ backgroundColor: [birthDateIsValid ? '' : '#fff8f8'] }" />
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div class="form-group">
            <input v-model="password" class="form-control modal-input" type="password" autocomplete="off" name="register_password" placeholder="Mot de passe" :style="{ backgroundColor: [passwordIsValid ? '' : '#fff8f8'] }" />
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div class="form-group">
            <input v-model="passwordConfirmation" class="form-control modal-input" type="password" name="register_password_confirmation" placeholder="Retaper le mot de passe" :style="{ backgroundColor: [passwordConfirmationIsValid ? '' : '#fff8f8'] }" />
          </div>
        </div>
      </div>
      <button class="btn btn-dark btn-block text-uppercase border-0 rounded-0 modal-btn mb-2 mt-0" :disabled="!formIsValid">S'inscrire</button>
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
        <button disabled class="btn btn-block rounded-0 social-btn fb-btn mb-3 mb-lg-0 text-left pl-4"><i class="fab fa-facebook-f mr-3 h5 mb-0 align-text-bottom"></i>S'inscrire avec Facebook</button>
      </div>
      <div class="col-12 col-lg-6">
        <button disabled class="btn btn-block rounded-0 social-btn text-left pl-4">
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
      errors: [],
      firstName: '',
      lastName: '',
      birthDate: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      firstNameIsValid: '',
      lastNameIsValid: '',
      birthDateIsValid: '',
      emailIsValid: '',
      passwordIsValid: '',
      passwordConfirmationIsValid: '',
      errResponse: ''
    }
  },
  computed: {
    formIsEmpty() {
      return !this.birthDate && !this.firstName && !this.lastName && !this.email && !this.password && !this.passwordConfirmation
    },
    formIsValid() {
      return this.birthDateIsValid && this.firstNameIsValid && this.lastNameIsValid && this.emailIsValid && this.passwordIsValid && this.passwordConfirmationIsValid
    }
  },
  watch: {
    firstName(val) {
      if (this.validateUserInfo(val)) this.firstNameIsValid = true
      else this.firstNameIsValid = false
    },
    lastName(val) {
      if (this.validateUserInfo(val)) this.lastNameIsValid = true
      else this.lastNameIsValid = false
    },
    birthDate(val) {
      if (this.validateUserInfo(val)) this.birthDateIsValid = true
      else this.birthDateIsValid = false
    },
    email(val) {
      if (this.validateEmail(val)) this.emailIsValid = true
      else this.emailIsValid = false
    },
    password(val) {
      if (this.validatePassword(val)) this.passwordIsValid = true
      else this.passwordIsValid = false
    },
    passwordConfirmation(val) {
      if (this.validatePasswordConfirmation(val)) this.passwordConfirmationIsValid = true
      else this.passwordConfirmationIsValid = false
    }
  },
  methods: {
    validateUserInfo(input) {
      return !!input
    },
    validateEmail(email) {
      var regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return regexp.test(email)
    },
    validatePassword(pw) {
      return pw.length > 5
    },
    validatePasswordConfirmation(pwConf) {
      if (!this.passwordIsValid) return

      return pwConf.length === this.password.length
    },
    async submitRegisterForm() {
      if (!this.formIsValid) return
      this.$axios
        .post('/registration', {
          user: {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            birthDate: this.birthDate,
            password: this.password,
            passwordConfirmation: this.passwordConfirmation
          }
        })
        .then((res) => {
          this.firstName = ''
          this.lastName = ''
          this.birthDate = ''
          this.email = ''
          this.password = ''
          this.passwordConfirmation = ''
          this.$emit('submitted-form')
        })
        .catch((err) => (this.errResponse = err.message))
      // this.$router.push('/');
    }
  }
}
</script>

<style>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateY(2rem);
  opacity: 0;
}
.error-container {
  position: absolute;
  top: -2.5rem;
  height: 2rem;
  line-height: 2rem;
  font-weight: 300;
  font-family: Muli, sans-serif;
  font-size: 0.8rem;
  padding: 0 1rem;
  width: 100%;
  background-color: #fff8f8;
  border-left: 4px solid red;
}
.error-field {
  background-color: #fff8f8;
}
.errors {
  color: #ff0000;
}
.modal-input--error {
  color: #ff0000;
  border-left: 4px solid #ff0000;
}
</style>
