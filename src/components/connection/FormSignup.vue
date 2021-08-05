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
        <input id="signup-birthDate" type="date" name="" class="form-control" placeholder=" " datepicker :min="minBirthDate" required v-model="birthDate" />
        <label for="signup-birthDate">Date de naissance</label>
        <span class="validity"></span>
      </div>
    </div>
    <div class="col-12 col-lg-6">
      <div class="form-group has-float-label">
        <input id="signup-password" v-model="password" class="form-control" type="password" name="" placeholder=" " />
        <label for="signup-password">Mot de passe</label>
      </div>
    </div>
    <div class="col-12 col-lg-6">
      <div class="form-group has-float-label">
        <input id="signup-passwordConfirmation" v-model="passwordConfirmation" class="form-control" type="password" name="" placeholder=" " />
        <label for="signup-passwordConfirmation">Confirmer le mot de passe</label>
      </div>
    </div>
  </div>
  <Button @click="submitRegisterForm" :class="{ 'bttn-disabled': !formIsValid }" text="S'inscrire" px="1.5rem" size=".8rem" height="50px" width="100%" weight="bold" text-color="#fff" color="pink" />
  <div class="d-flex regist mb-4">
    <div>
      <input id="signup-legal" type="checkbox" v-model="legal" />
      <label for="signup-legal" class="ml-2 password-link mr-auto"> En cliquant sur s'inscrire, tu acceptes nos <router-link target="_blank" to="/legal" class="text-danger">CGV</router-link> et <router-link target="_blank" to="/legal" class="text-danger">CGU</router-link></label>
    </div>
  </div>
</template>

<script>
import Button from '@/components/elements/Button.vue'

export default {
  name: 'FormSignup',
  components: {
    Button
  },
  emits: ['submitted-form'],
  data() {
    return {
      errors: [],
      firstName: '',
      lastName: '',
      birthDate: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      legal: true,
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
    },
    minBirthDate() {
      let currDate = new Date()
      let minYear = currDate.getFullYear() - 18
      currDate.setFullYear(minYear)
      console.log(currDate.toISOString().slice(0, 10))
      return currDate.toISOString().slice(0, 10)
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
    test() {
      this.$emit('submitted-form')
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
          alert('Un mail de confirmation vient de vous être envoyé')
        })
        .catch((err) => (this.errResponse = err.message))
      // this.$router.push('/');
    }
  }
}
</script>

<style scoped>
.bttn--pink:hover {
  border: 1px solid white;
}
.has-float-label .form-control:placeholder-shown:not(:focus) + label {
  top: 0.15em;
  font-size: 100%;
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
  padding-bottom: 0.1rem;
  color: #fff;
}
label > .text-danger {
  font-weight: bold;
}
.form-control:focus {
  background-color: transparent;
  border-radius: 0;
  border: none;
  border-bottom: 1px solid white;
}
#signup-birthDate:invalid + span:after {
  content: 'Désolé, tu dois être majeur !';
  padding-left: 5px;
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
