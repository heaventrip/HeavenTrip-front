<template>
  <div class="form-group has-float-label">
    <input id="prenom" class="form-control" type="text" name="" placeholder=" " />
    <label for="prenom">Adresse e-mail</label>
  </div>
  <div class="form-group has-float-label">
    <input id="emailAddr" class="form-control" type="email" name="" placeholder=" " />
    <label for="emailAddr">Mot de passe</label>
  </div>
  <div>
    <Button class="" text="S'inscrire" px="1.5rem" size=".8rem" height="50px" width="100%" weight="bold" text-color="#fff" background-color="#d82558" />
  </div>
</template>

<script>
import Button from '@/components/elements/Button.vue'
import { loginUser } from '@/utils/auth'

export default {
  name: 'FormLogin',
  emits: ['clicked-signup', 'clicked-password-forgotten', 'login-success'],
  components: {
    Button
  },
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
