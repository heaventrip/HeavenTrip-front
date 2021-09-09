<template>
  <transition name="fade" mode="out-in">
    <div :key="step">
      <PasswordStep1 v-if="step === 'emailForm'" @clicked-password-retrieved="$emit('clicked-password-retrieved')" @filled="step = 'emailSuccess'" />
      <PasswordStep2 v-if="step === 'emailSuccess'" :user-email="userEmail" />
      <PasswordStep3 v-if="step === 'passwordForm'" @filled="step = 'passwordSuccess'" :token="token" />
      <PasswordStep4 v-if="step === 'passwordSuccess'" @complete="$emit('password-updated')" />
    </div>
  </transition>
</template>

<script>
import PasswordStep1 from './PasswordStep1.vue'
import PasswordStep2 from './PasswordStep2.vue'
import PasswordStep3 from './PasswordStep3.vue'
import PasswordStep4 from './PasswordStep4.vue'

export default {
  name: 'Password',
  components: {
    PasswordStep1,
    PasswordStep2,
    PasswordStep3,
    PasswordStep4
  },
  props: ['token', 'user-email'],
  emits: ['password-updated', 'clicked-password-retrieved', 'updated-step'],
  data() {
    return {
      step: 'emailForm'
    }
  },
  watch: {
    token: {
      immediate: true,
      handler(val) {
        if (val) this.step = 'passwordForm'
      }
    },
    step: {
      immediate: true,
      handler(val) {
        this.$emit('updated-step', val)
      }
    }
  }
}
</script>

<style scoped>
.separator-line {
  width: 60%;
  margin-right: auto;
  margin-left: auto;
}
</style>
