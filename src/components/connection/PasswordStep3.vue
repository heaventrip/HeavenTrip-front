<template>
  <p class="content-head">Merci de saisir ton nouveau mot de passe :</p>
  <form>
    <div class="form-group has-float-label mb-5 mt-5">
      <input v-model="password" id="login-password" class="form-control" :class="{ 'field-error': v$.user.password.$error }" type="password" name="" autocomplete="off" placeholder=" " />
      <label for="login-password">Nouveau mot de passe</label>
      <div v-if="v$.user.password.$errors.length" class="field-error-message">{{ v$.user.password.$errors[0].$message }}</div>
    </div>
    <div class="form-group has-float-label mb-5">
      <input
        v-model="passwordConfirmation"
        id="login-second-password"
        class="form-control"
        :class="{ 'field-error': v$.user.passwordConfirmation.$error }"
        type="password"
        name=""
        autocomplete="off"
        placeholder=" "
      />
      <label for="login-second-password">Confirmation de ton mot de passe</label>
      <div v-if="v$.user.passwordConfirmation.$errors.length" class="field-error-message">{{ v$.user.passwordConfirmation.$errors[0].$message }}</div>
    </div>
    <!--    <input class="form-control modal-input" type="password" autocomplete="off" name="" value="" placeholder="Nouveau mot de passe" />
    <input class="form-control modal-input" type="password" autocomplete="off" name="" placeholder="Confirmation de ton mot de passe" /> -->
    <Button id="btn-validate" @click="submitPasswordForm" text="Valider" px="1.5rem" size=".8rem" height="50px" width="100%" weight="bold" color="white" :disabled="!formIsFilled" />
  </form>
</template>

<script>
import { required, sameAs, minLength, helpers } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'
import Button from '@/components/elements/Button.vue'

export default {
  name: 'PasswordStep3',
  emits: ['filled'],
  components: {
    Button
  },
  props: ['token'],
  data() {
    return {
      user: {
        password: '',
        passwordConfirmation: '',
        recoverPasswordToken: this.$props.token
      }
    }
  },
  setup() {
    return { v$: useVuelidate() }
  },
  validations() {
    return {
      user: {
        password: {
          required: helpers.withMessage('Ce champ est requis', required),
          minLength: helpers.withMessage('5 caractères minimum sont requis', minLength(5))
        },
        passwordConfirmation: {
          required: helpers.withMessage('Ce champ est requis', required),
          sameAs: helpers.withMessage("Le mot de passe n'est pas identique", sameAs(this.user.password))
        }
      }
    }
  },
  methods: {
    submitPasswordForm() {
      this.v$.$touch()
      if (this.v$.$error) return

      this.$axios
        .post('/update-password', {
          user: this.user
        })
        .catch((err) => this.$notify({ group: 'modal', type: 'error', text: err.response?.data?.message || err.message }))
    }
  }
}
</script>

<style scoped>
#btn-validate:hover {
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
  letter-spacing: 0.03rem;
  left: 0;
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
button:hover {
  background-color: #d82558 !important;
}
button:active {
  background-color: #292f33 !important;
}
</style>
