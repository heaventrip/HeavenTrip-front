<template>
  <div>
    <main class="checkout-main-container">
      <div class="container-fluid h-100">
        <div class="row h-100">
          <div class="col-12 col-xl-4 p-0 bg-image h-100 position-relative">
            <img class="img-fluid checkout-info-img" fluid :src="require('@/assets/images/checkout_bg.jpg')" />
            <div class="d-flex align-items-center share-social-icons text-white">
              <h6 class="font-weight-normal mr-3 mb-0">Partage à un pote!</h6>
              <a href="#" class="rounded-circle d-inline-block">
                <InlineSvg class="mr-2" :src="require('@/assets/svg/instagram-light.svg')" height="30" />
              </a>
              <a href="#" class="rounded-circle d-inline-block">
                <InlineSvg class="mr-2" :src="require('@/assets/svg/facebook-light.svg')" height="30" />
              </a>
            </div>
          </div>
          <div class="col-12 col-xl-8 p-0 h-100">
            <div class="checkout-body-content">
              <div class="d-flex w-100 py-5">
                <div class="text-uppercase" style="font-weight: 600">Participants</div>
                <div class="text-uppercase pr-4 ml-auto" style="font-weight: 400">Options</div>
                <div class="text-uppercase px-4" style="border-left: 1px dashed #7c7c7c; border-right: 1px dashed #7c7c7c; font-weight: 400">Assurance</div>
                <div class="text-uppercase pl-4" style="font-weight: 400">Paiement</div>
              </div>
              <div class="tab-content">
                <transition name="fade" mode="out-in">
                  <CheckoutWizardBooker @complete="bookerComplete = true" @incomplete="bookerComplete = false" @updated-booker="setBooker" v-if="activeStep === 'booker'" />
                  <CheckoutWizardParticipants v-else-if="activeStep === 'participants'" />
                  <CheckoutWizardForm v-else-if="activeStep === 'options'" />
                  <CheckoutWizardForm2 v-else-if="activeStep === 'insurance'" />
                  <Step5 :course="course" v-else-if="activeStep === 'validation'" />
                  <Step6 v-else-if="activeStep === 'payment'" />
                </transition>
                <div class="d-flex">
                  <button @click.prevent="prevStep" v-show="steps.indexOf(activeStep) !== 0" class="btn text-uppercase prev-step-btn mr-auto" style="border-radius: 0">Précédent</button>
                  <button @click.prevent="nextStep" :disabled="!stepIsComplete(activeStep)" class="btn text-uppercase next-step-btn ml-auto" style="border-radius: 0">étape suivante</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
// import Step1 from './Step1.vue'
import CheckoutWizardBooker from './wizard/CheckoutWizardBooker.vue'
import CheckoutWizardParticipants from './wizard/CheckoutWizardParticipants.vue'
import CheckoutWizardForm from './wizard/CheckoutWizardForm.vue'
import CheckoutWizardForm2 from './wizard/CheckoutWizardForm2.vue'
import Step5 from './Step5.vue'
import Step6 from './Step6.vue'

export default {
  name: 'CheckOutSections',
  components: {
    // Step1,
    CheckoutWizardBooker,
    CheckoutWizardParticipants,
    CheckoutWizardForm,
    CheckoutWizardForm2,
    Step5,
    Step6
  },
  props: ['course', 'session', 'participantsNb'],
  data() {
    return {
      steps: ['booker', 'participants', 'options', 'insurance'],
      bookerComplete: false,
      participantsComplete: false,
      optionsComplete: false,
      insuranceComplete: false,
      activeStep: '',
      extraParticipants: [],
      booker: {}
    }
  },
  watch: {
    course: {
      immediate: true,
      handler(val) {
        this.activeStep = 'booker'
      }
    }
  },
  computed: {
    partipantsNb() {
      return this.booker.length + this.extraParticipants.length
    }
  },
  methods: {
    nextStep() {
      if (!this.stepIsComplete(this.activeStep)) return

      let currIndex = this.steps.indexOf(this.activeStep)
      this.activeStep = this.steps[currIndex + 1]
    },
    prevStep() {
      let currIndex = this.steps.indexOf(this.activeStep)
      this.activeStep = this.steps[currIndex - 1]
    },
    stepIsComplete(step) {
      return this.$data[`${step}Complete`]
    },
    setBooker(val) {
      this.booker = val
    },
    submitBookingForm() {
      const AUTH_TOKEN_KEY = 'authToken'
      let token = localStorage.getItem(AUTH_TOKEN_KEY)
      this.$axios.post(
        '/reservations',
        {
          booker: this.booker,
          extraParticipants: this.extraParticipants
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
    }
  },
  mounted() {
    // $(function () {
    //   $('[data-toggle="tooltip"]').tooltip();
    //   $(
    //     ".avalaible-mem,.validate-btn-info,.card-transfer,.bank-transfer"
    //   ).hide();
    //   $(".custom-control.custom-radio").change(function () {
    //     if ($("#customRadio3").is(":checked")) {
    //       $(this).parent().find(".avalaible-mem").show();
    //     } else {
    //       $(this).parent().find(".avalaible-mem").hide();
    //     }
    //   });
    //   $(".custom-control.sameAddrCheck").change(function () {
    //     if ($("#sameAddr").is(":checked")) {
    //       $(".login-tabs").hide();
    //       $(".validate-btn-info").show();
    //     } else {
    //       $(".login-tabs").show();
    //       $(".validate-btn-info").hide();
    //     }
    //   });
    //   $("input[type=radio][name=choicePay]").change(function () {
    //     if ($("#card_transfer").is(":checked")) {
    //       $(".card-transfer").show();
    //       $("#card-number").focus();
    //       $(".bank-transfer").hide();
    //     } else if ($("#bank_transfer").is(":checked")) {
    //       $(".card-transfer").hide();
    //       $(".bank-transfer").show();
    //     }
    //   });
    // });
  }
}
</script>
