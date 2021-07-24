<template>
  <p class="text-left content-head mb-4">Merci de remplir tous les champs pour valider votre inscription :</p>
  <transition name="slide">
    <div v-if="errResponse" class="error-container">{{ errResponse }}</div>
  </transition>
  <div class="row">
    <div class="col-12 col-lg-6">
      <div class="form-group has-float-label">
        <input id="signup-firstName" v-model="firstName" class="form-control" type="text" name="" placeholder=" " />
        <label for="signup-firstName">Prénom </label>
      </div>
    </div>
    <div class="col-12 col-lg-6">
      <div class="form-group has-float-label">
        <input id="signup-lastName" v-model="lastName" class="form-control" type="text" name="" placeholder=" " />
        <label for="signup-lastName">Nom</label>
      </div>
    </div>
    <div class="col-12 col-lg-8">
      <div class="form-group has-float-label">
        <input id="signup-email" v-model="email" class="form-control" type="text" name="" placeholder=" " />
        <label for="signup-email">Adresse e-mail</label>
      </div>
    </div>
    <div class="col-12 col-lg-4">
      <div class="form-group has-float-label">
        <input id="signup-birthDate" v-model="birthDate" class="form-control" type="text" name="" placeholder=" " required datepicker />
        <label for="signup-birthDate">Date de naissance</label>
      </div>
    </div>
    <div class="col-12 col-lg-6">
      <div class="form-group has-float-label">
        <input id="signup-password" v-model="password" class="form-control" type="text" name="" placeholder=" " />
        <label for="signup-password">Mot de passe</label>
      </div>
    </div>
    <div class="col-12 col-lg-6">
      <div class="form-group has-float-label">
        <input id="signup-passwordConfirmation" v-model="passwordConfirmation" class="form-control" type="text" name="" placeholder=" " />
        <label for="signup-passwordConfirmation">Confirmer le mot de passe</label>
      </div>
    </div>
  </div>
  <Button :class="{ 'bttn-disabled': !formIsValid }" text="S'inscrire" px="1.5rem" size=".8rem" height="50px" width="100%" weight="bold" text-color="#fff" color="pink" />
  <div class="d-flex regist mb-4">
    <div>
      <input id="signup-legal" type="checkbox" v-model="legal" />
      <label for="signup-legal" class="ml-2 password-link mr-auto"> En cliquant, tu acceptes nos <span class="text-danger text-decoration-underline">conditions générales d'utilisation</span> </label>
    </div>
    <a class="ml-auto acc-text d-none d-lg-block" style="cursor: pointer; font-size: 0.875rem" @click.stop="$emit('clicked-existing-account')">J'ai déjà un compte</a>
  </div>
</template>

<script>
import Button from '@/components/elements/Button.vue'

export default {
  name: 'FormSignup',
  components: {
    Button
  },
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
      legal: '',
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
      return this.birthDateIsValid && this.firstNameIsValid && this.lastNameIsValid && this.emailIsValid && this.passwordIsValid && this.passwordConfirmationIsValid && this.legal
    }
  },
  watch: {
    legal(v) {
      console.log(v)
    },
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

<style scoped>
.has-float-label .form-control:placeholder-shown:not(:focus) + label {
  top: 0.15em;
  font-size: 130%;
  color: #fff;
  opacity: 1;
}
.has-float-label label::after {
  display: none;
}
.has-float-label label {
  left: 0;
}
.form-group {
  margin-bottom: 2rem;
}
.form-control {
  padding-left: 0;
  border-radius: 0;
  border: none;
  border-bottom: 1px solid #b4b4b4;
  background-color: transparent;
}
.form-control:focus {
  background-color: transparent;
  border-radius: 0;
  border: none;
  border-bottom: 1px solid white;
}
.bttn-disabled {
  pointer-events: none;
  cursor: default;
  opacity: 0.5;
}
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
