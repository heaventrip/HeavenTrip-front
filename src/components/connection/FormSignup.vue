<template>
  <div>
    <p class="text-left content-head mb-5">Merci de remplir tous les champs pour valider votre inscription :</p>
    <div class="row">
      <div class="col-12 col-lg-6">
        <div class="form-group has-float-label">
          <input id="signup-firstName" v-model="user.firstName" class="form-control" :class="{ 'field-error': v$.user.firstName.$error }" type="text" name="" placeholder=" " />
          <label for="signup-firstName">Prénom </label>
          <div v-if="v$.user.firstName.$errors.length" class="field-error-message">{{ v$.user.firstName.$errors[0].$message }}</div>
        </div>
      </div>
      <div class="col-12 col-lg-6">
        <div class="form-group has-float-label">
          <input id="signup-lastName" v-model="user.lastName" class="form-control" :class="{ 'field-error': v$.user.lastName.$error }" type="text" name="" placeholder=" " />
          <label for="signup-lastName">Nom</label>
          <div v-if="v$.user.lastName.$errors.length" class="field-error-message">{{ v$.user.lastName.$errors[0].$message }}</div>
        </div>
      </div>
      <div class="col-12 col-lg-8">
        <div class="form-group has-float-label">
          <input id="signup-email" v-model="user.email" class="form-control" :class="{ 'field-error': v$.user.email.$error }" type="text" name="" placeholder=" " />
          <label for="signup-email">Adresse e-mail</label>
          <div v-if="v$.user.email.$errors.length" class="field-error-message">{{ v$.user.email.$errors[0].$message }}</div>
        </div>
      </div>
      <div class="col-12 col-lg-4">
        <div class="form-group has-float-label">
          <input
            id="signup-birthDate"
            v-model="user.birthDate"
            type="date"
            name=""
            class="form-control"
            :class="{ 'field-error': v$.user.birthDate.$error }"
            placeholder=" "
            datepicker
            :min="minBirthDate"
            required
          />
          <label for="signup-birthDate">Date de naissance</label>
          <div v-if="v$.user.birthDate.$errors.length" class="field-error-message">{{ v$.user.birthDate.$errors[0].$message }}</div>
          <span class="validity"></span>
        </div>
      </div>
      <div class="col-12 col-lg-6">
        <div class="form-group has-float-label">
          <input id="signup-password" v-model="user.password" class="form-control" :class="{ 'field-error': v$.user.password.$error }" type="password" name="" placeholder=" " />
          <label for="signup-password">Mot de passe</label>
          <div v-if="v$.user.password.$errors.length" class="field-error-message">{{ v$.user.password.$errors[0].$message }}</div>
        </div>
      </div>
      <div class="col-12 col-lg-6">
        <div class="form-group has-float-label">
          <input
            id="signup-passwordConfirmation"
            v-model="user.passwordConfirmation"
            class="form-control"
            :class="{ 'field-error': v$.user.passwordConfirmation.$error }"
            type="password"
            name=""
            placeholder=" "
          />
          <label for="signup-passwordConfirmation">Confirmer le mot de passe</label>
          <div v-if="v$.user.passwordConfirmation.$errors.length" class="field-error-message">{{ v$.user.passwordConfirmation.$errors[0].$message }}</div>
        </div>
      </div>
    </div>
    <div class="d-flex regist mb-1">
      <div>
        <label for="signup-legal" class="password-link mr-auto">
          En cliquant sur poursuivre l'inscription, tu acceptes nos <router-link target="_blank" to="/legal" class="text-danger">CGV</router-link> et
          <router-link target="_blank" to="/legal" class="text-danger">CGU</router-link></label
        >
      </div>
    </div>
    <Button @click="validateForm" text="Poursuivre l'inscription" px="1.5rem" size=".8rem" height="50px" width="100%" weight="bold" text-color="#fff" color="pink" />
  </div>
</template>

<script>
import { email, required, minLength, sameAs, helpers } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'
import Button from '@/components/elements/Button.vue'

export default {
  name: 'FormSignup',
  components: {
    Button
  },
  emits: ['submitted-form'],
  setup() {
    return { v$: useVuelidate() }
  },
  data() {
    return {
      errors: [],
      user: {
        firstName: '',
        lastName: '',
        birthDate: '',
        email: '',
        password: '',
        passwordConfirmation: ''
      }
    }
  },
  validations() {
    return {
      user: {
        firstName: {
          required: helpers.withMessage('Ce champ est requis', required)
        },
        lastName: {
          required: helpers.withMessage('Ce champ est requis', required)
        },
        birthDate: {
          required: helpers.withMessage('Ce champ est requis', required)
        },
        email: {
          required: helpers.withMessage('Ce champ est requis', required),
          email: helpers.withMessage("L'email doit être au format xxx@xxx.xxx", email)
        },
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
  computed: {
    minBirthDate() {
      let currDate = new Date()
      let minYear = currDate.getFullYear() - 18
      currDate.setFullYear(minYear)
      console.log(currDate.toISOString().slice(0, 10))
      return currDate.toISOString().slice(0, 10)
    }
  },
  methods: {
    validateForm() {
      this.v$.$touch()
      if (this.v$.$error) return

      this.$emit('completed', this.user)
    }
  }
}
</script>

<style scoped>
input[type='date']::-webkit-inner-spin-button,
input[type='date']::-webkit-calendar-picker-indicator {
  display: none;
  -webkit-appearance: none;
}
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
.field-error {
  border-bottom: 1px solid tomato !important;
}
.field-error-message {
  position: absolute;
  font-family: Muli, sans-serif;
  color: tomato;
  font-size: 0.6rem;
}
.password-link {
  font-size: 0.7rem;
}
</style>
