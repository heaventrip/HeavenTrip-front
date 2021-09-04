<template>
  <p class="content-head">Assure toi de renseigner un mail valide :</p>
  <form>
    <div class="form-group has-float-label">
      <input
        v-model="email"
        id="login-email"
        class="form-control mb-2"
        type="text"
        name=""
        autocomplete="off"
        placeholder=" "
        :style="[errors.includes('email') && !validEmail(email) ? 'border-bottom: 1px solid red' : '']"
      />
      <label for="login-email">Adresse e-mail</label>
    </div>

    <a @click.prevent="$emit('clicked-password-retrieved')" class="password-link d-block text-right mb-5" href="#">J’ai retrouvé mon mot de passe</a>
    <!--  <button @click.stop="submitForm" class="btn btn-dark btn-block text-uppercase border-0 rounded-0 modal-btn" :disabled="!formIsFilled">Valider</button> -->
    <Button id="btn-validate" @click="submitForm" text="Valider" px="1.5rem" size=".8rem" height="50px" width="100%" weight="bold" color="white" :disabled="!formIsFilled" />
  </form>
</template>

<script>
import Button from '@/components/elements/Button.vue'

export default {
  name: 'PasswordStep1',
  emits: ['filled', 'clicked-password-retrieved'],
  data() {
    return {
      email: '',
      errors: []
    }
  },
  components: {
    Button
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
#btn-validate:hover {
  background-color: #d82558;
}
.content-head {
  margin-bottom: 30px;
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
