<template>
  <!-- <div style="position: fixed; width: 100vw"> -->
  <CheckOutHeader :course="course" :session="session" :active-step="activeStep" v-if="activeStep !== 'success'" />
  <CheckOutSections :course="course" :session="session" :participantsNb="participantsNb" @changed-step="setActiveStep" />
  <!-- </div> -->
</template>
<script>
import CheckOutHeader from '@/components/checkout/CheckOutHeader'
import CheckOutSections from '@/components/checkout/CheckOutSections'

export default {
  name: 'CheckOutHome',
  props: ['productId'],
  components: {
    CheckOutHeader,
    CheckOutSections
  },
  data() {
    return {
      course: null,
      session: null,
      participantsNb: 0,
      activeStep: ''
    }
  },
  methods: {
    setActiveStep(step) {
      this.activeStep = step
    }
  },
  async created() {
    await this.$axios.get(`/courses/${this.$props.productId}`).then((res) => (this.course = res.data.course))
    await this.$axios.get(`/sessions?courseId=${this.$props.productId}`).then((res) => (this.session = res.data.sessions[0]))
    this.participantsNb = this.$route.params.participantsNb
  }
}
</script>
