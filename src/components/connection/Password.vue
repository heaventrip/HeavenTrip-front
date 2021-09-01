<template>
  <div v-if="step == 1">
    <PasswordStep1 @clicked-password-retrieved="$emit('clicked-password-retrieved')" @filled="step = 2" />
  </div>
  <div v-else-if="step == 2" class="text-center">
    <PasswordStep2 @filled="step = 3" />
  </div>
  <div v-else-if="step == 3">
    <PasswordStep3 @filled="step = 4" />
  </div>
  <div v-else class="text-center">
    <PasswordStep4 @complete="$emit('password-updated')" />
  </div>
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
  emits: ['passwordUpdated', 'clicked-password-retrieved'],
  data() {
    return {
      step: 1
    }
  },
  watch: {
    step() {
      if (this.step === 3) {
        this.$emit('change-news-password')
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
