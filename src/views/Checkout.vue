<template>
  <!-- <div style="position: fixed; width: 100vw"> -->
  <CheckoutHeader :total-price="totalPrice" :course="course" :session="session" :active-step="activeStep" v-if="activeStep !== 'success'" />
  <CheckoutSections
    @extra-participants-expenses="(val) => (extraParticipantsExpenses = val)"
    @booker-expense="(val) => (bookerExpense = val)"
    :course="course"
    :session="session"
    :participantsNb="participantsNb"
    @changed-step="setActiveStep"
  />
  <!-- </div> -->
</template>
<script>
import CheckoutHeader from '@/components/checkout/CheckoutHeader'
import CheckoutSections from '@/components/checkout/CheckoutSections'

export default {
  name: 'Checkout',
  props: ['productId'],
  components: {
    CheckoutHeader,
    CheckoutSections
  },
  data() {
    return {
      course: null,
      session: null,
      participantsNb: 0,
      activeStep: '',
      avatarKeys: [],
      bookerExpense: 0,
      extraParticipantsExpenses: 0
    }
  },
  computed: {
    totalPrice() {
      if (!this.course) return
      return this.course.price + this.bookerExpense + this.extraParticipantsExpenses
    }
  },
  methods: {
    setActiveStep(step) {
      this.activeStep = step
    }
  },
  created() {
    this.$axios.get(`/courses/${this.$props.productId}`).then((res) => {
      this.course = res.data.course
      this.totalPrice = res.data.price
    })
    this.$axios.get(`/sessions?courseId=${this.$props.productId}`).then((res) => {
      this.session = res.data.sessions[0]
      this.$root.initialLoading = false
    })
    this.participantsNb = this.$route.params.participantsNb
    this.avatarKeys = this.$route.params.avatarKeys
  }
}
</script>
