<template>
  <div class="login-form">
    <div class="row">
      <div class="col-12 col-lg-6">
        <button disabled class="btn btn-block rounded-0 social-btn fb-btn mb-3 mb-lg-0 text-left pl-4"><i class="fab fa-facebook-f mr-3 h5 mb-0 align-text-bottom"></i>Connexion avec Facebook</button>
      </div>
      <div class="col-12 col-lg-6">
        <button disabled class="btn btn-block rounded-0 social-btn text-left pl-4">
          <svg class="mr-3 h5 mb-0 align-text-bottom" id="Groupe_90" data-name="Groupe 90" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
            <path id="Tracé_2140" data-name="Tracé 2140" d="M4.876,145.622,4.11,148.48l-2.8.059a11.019,11.019,0,0,1-.081-10.272h0l2.492.457L4.814,141.2a6.565,6.565,0,0,0,.062,4.42Z" transform="translate(0 -132.327)" fill="#fbbb00" />
            <path id="Tracé_2141" data-name="Tracé 2141" d="M272.194,208.176a11,11,0,0,1-3.921,10.633h0l-3.139-.16-.444-2.773a6.556,6.556,0,0,0,2.821-3.348h-5.882v-4.352h10.566Z" transform="translate(-250.386 -199.231)" fill="#518ef8" />
            <path id="Tracé_2142" data-name="Tracé 2142" d="M47.084,315.692h0a11,11,0,0,1-16.575-3.365l3.565-2.918a6.542,6.542,0,0,0,9.427,3.35Z" transform="translate(-29.198 -296.114)" fill="#28b446" />
            <path id="Tracé_2143" data-name="Tracé 2143" d="M45.415,2.532,41.852,5.45a6.541,6.541,0,0,0-9.644,3.425L28.625,5.941h0A11,11,0,0,1,45.415,2.532Z" transform="translate(-27.394)" fill="#f14336" />
          </svg>
          Connexion avec Google
        </button>
      </div>
    </div>
    <h6 class="prefer-text text-uppercase font-weight-bold my-4 text-center">
      <span>Ou par adresse mail</span>
    </h6>
    <div class="row">
      <div class="col-12 col-lg-10 mx-auto">
        <form id="login-form" @submit.prevent="submitLoginForm" method="post" style="position: relative">
          <transition name="slide">
            <div v-if="errResponse" class="error-container">{{ errResponse }}</div>
          </transition>
          <div class="row">
            <div class="col-12">
              <div class="form-group">
                <input v-model="email" class="form-control modal-input" type="mail" name="email" placeholder="Adresse mail" :style="{ backgroundColor: [this.email !== '' && emailIsValid ? '' : '#fff8f8'] }" />
              </div>
            </div>
            <div class="col-12">
              <div class="form-group">
                <input v-model="password" class="form-control modal-input mb-2" type="password" autocomplete="off" name="password" placeholder="Mot de passe" :style="{ backgroundColor: [passwordIsValid ? '' : '#fff8f8'] }" />
                <a @click.stop="$emit('clicked-password-forgotten')" class="password-link text-right mb-4 d-block" href="#">Mot de passe oublié</a>
              </div>
            </div>
          </div>
          <button class="btn btn-dark btn-block text-uppercase border-0 rounded-0 modal-btn mb-4 mt-0" :disabled="!formIsValid">SE CONNECTER</button>
        </form>
      </div>
    </div>
    <h6 class="prefer-text text-center">
      <span>Pas encore de compte ?</span>
    </h6>
    <button class="d-none btn btn-danger btn-block text-uppercase border-0 rounded-0 modal-btn mb-0 mt-0">s'INSCRIRE</button>
    <button class="btn btn-danger btn-block text-uppercase border-0 rounded-0 modal-btn mb-0 mt-0" @click.stop="$emit('clicked-signup')">INSCRIPTION</button>
  </div>
</template>

<script>
import { loginUser } from '@/utils/auth'

export default {
  name: 'FormLogin',
  emits: ['clicked-signup', 'clicked-password-forgotten', 'login-success'],
  data() {
    return {
      email: '',
      password: '',
      emailIsValid: '',
      passwordIsValid: '',
      errResponse: ''
    }
  },
  computed: {
    formIsEmpty() {
      return !this.email && !this.password
    },
    formIsValid() {
      return this.emailIsValid && this.passwordIsValid
    }
  },
  watch: {
    email(val) {
      if (this.validateEmail(val)) this.emailIsValid = true
      else this.emailIsValid = false
    },
    password(val) {
      if (this.validatePassword(val)) this.passwordIsValid = true
      else this.passwordIsValid = false
    }
  },
  methods: {
    validateEmail(email) {
      var regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return regexp.test(email)
    },
    validatePassword(password) {
      return password.length > 5
    },
    async submitLoginForm() {
      if (!this.formIsValid) return
      loginUser(this.email, this.password)
        .then(() => this.$emit('login-success'))
        .catch((err) => (this.errResponse = err.message))
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
