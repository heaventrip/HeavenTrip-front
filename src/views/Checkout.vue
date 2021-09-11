<template>
  <div>
    <CheckoutHeader :total-price="totalPrice" :course="course" :session="session" :active-step="activeStep" v-if="activeStep !== 'success'" />
    <CheckoutSections
      @extra-participants-expense="(val) => (extraParticipantsExpense = val)"
      @extra-participants-nb="(val) => (extraParticipantsNb = val)"
      @booker-expense="(val) => (bookerExpense = val)"
      @changed-step="setActiveStep"
      :course="course"
      :session="session"
      :participants-nb="participantsNb"
      :total-price="totalPrice"
    />
  </div>
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
      extraParticipantsNb: 0,
      extraParticipantsExpense: 0
    }
  },
  computed: {
    totalPrice() {
      if (!this.course) return
      return this.course.price * (this.extraParticipantsNb + 1) + this.bookerExpense + this.extraParticipantsExpense
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
