<template>
  <p class="content-head">Merci de saisir ton nouveau mot de passe :</p>
  <form>
    <div class="form-group has-float-label">
      <input
        v-model="firstPassword"
        id="login-password"
        class="form-control mb-5 mt-5"
        type="password"
        name=""
        autocomplete="off"
        placeholder=" "
        :style="[errors.includes('first') ? 'border-bottom: 1px solid red' : '']"
      />
      <label for="login-password">Nouveau mot de passe</label>
    </div>
    <div class="form-group has-float-label">
      <input
        v-model="secondPassword"
        id="login-second-password"
        class="form-control mb-5"
        type="password"
        name=""
        autocomplete="off"
        placeholder=" "
        :style="[errors.includes('second') ? 'border-bottom: 1px solid red' : '']"
      />
      <label for="login-second-password">Confirmation de ton mot de passe</label>
    </div>
    <!--    <input class="form-control modal-input" type="password" autocomplete="off" name="" value="" placeholder="Nouveau mot de passe" />
    <input class="form-control modal-input" type="password" autocomplete="off" name="" placeholder="Confirmation de ton mot de passe" /> -->
    <Button
      id="btn-validate"
      @click="
        () => {
          if (firstPassword === secondPassword) {
            $emit('filled')
          }
        }
      "
      text="Valider"
      px="1.5rem"
      size=".8rem"
      height="50px"
      width="100%"
      weight="bold"
      color="white"
      :disabled="!formIsFilled"
    />
  </form>
</template>

<script>
import Button from '@/components/elements/Button.vue'

export default {
  name: 'PasswordStep3',
  emits: ['filled'],
  components: {
    Button
  },
  data() {
    return {
      firstPassword: '',
      secondPassword: '',
      errors: []
    }
  },
  watch: {
    firstPassword() {
      this.validPassword('first')
    },
    secondPassword() {
      this.validPassword('second')
    }
  },
  methods: {
    validPassword: function (type) {
      if (this.firstPassword != this.secondPassword && this.secondPassword) {
        if (type === 'first') {
          this.errors = [...this.errors, 'first']
        }
        if (type === 'second') {
          this.errors = [...this.errors, 'second']
        }
      }
      if (this.firstPassword === this.secondPassword) {
        this.errors = []
      }
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
