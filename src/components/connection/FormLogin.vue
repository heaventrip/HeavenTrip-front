<template>
  <div>
    <div class="form-group has-float-label">
      <input id="login-email" v-model="email" class="form-control" :class="{ 'field-error': v$.email.$error }" type="email" name="" placeholder=" " />
      <label for="login-email">E-mail</label>
      <div v-if="v$.email.$errors.length" class="field-error-message">{{ v$.email.$errors[0].$message }}</div>
    </div>
    <div class="form-group has-float-label">
      <input id="login-password" v-model="password" class="form-control" :class="{ 'field-error': v$.password.$error }" type="password" name="" placeholder=" " />
      <label for="login-password">Mot de passe</label>
      <div v-if="v$.password.$errors.length" class="field-error-message">{{ v$.password.$errors[0].$message }}</div>
      <div type="button" @click="$emit('clicked-password-forgotten')" class="mt-2 text-right" style="font-family: Muli, sans-serif; font-size: 0.75rem">Mot de passe oublié</div>
    </div>
    <div>
      <Button @click="submitLoginForm" text="Se connecter" px="1.5rem" size=".8rem" height="50px" width="100%" weight="bold" color="white" />
    </div>
  </div>
</template>

<script>
import { email, required, minLength, helpers } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'
import Button from '@/components/elements/Button.vue'
import { loginUser } from '@/utils/auth'

export default {
  name: 'FormLogin',
  emits: ['clicked-signup', 'clicked-password-forgotten', 'login-success'],
  components: {
    Button
  },
  setup() {
    return { v$: useVuelidate() }
  },
  data() {
    return {
      email: '',
      password: ''
    }
  },
  validations() {
    return {
      email: {
        required: helpers.withMessage('Ce champ est requis', required),
        email: helpers.withMessage("L'email doit être au format xxx@xxx.xxx", email)
      },
      password: {
        required: helpers.withMessage('Ce champ est requis', required),
        minLength: helpers.withMessage('5 caractères minimum sont requis', minLength(5))
      }
    }
  },
  methods: {
    async submitLoginForm() {
      this.v$.$touch()
      if (this.v$.$error) return

      loginUser(this.email, this.password)
        .then((user) => {
          this.$root.currUser = user
          this.$emit('login-success')
        })
        .catch((err) => {
          this.$notify({ group: 'modal', type: 'error', text: 'Identifiants invalides' })
        })
    }
  }
}
</script>

<style scoped>
.bttn--white:hover {
  background-color: #d82558;
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
  border-bottom: 1px solid #ffffff33;
  background-color: transparent;
  padding-bottom: 0.1rem;
  color: #fff;
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
.field-error {
  border-bottom: 1px solid tomato !important;
}
.field-error-message {
  position: absolute;
  font-family: Muli, sans-serif;
  color: tomato;
  font-size: 0.6rem;
}
@media only screen and (max-height: 950px) {
  .form-control,
  .form-group {
    font-size: 0.8rem;
  }
}
</style>
