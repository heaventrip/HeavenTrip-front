<template>
  <div class="checkout-main-container" :style="[activeStep === 'validation' ? 'height: calc(100vh - 170px)' : '']">
    <div class="top-infos-container">
      <div class="top-info" type="button" @click="nextStep">Retour</div>
      <div class="top-info">aaaaaaaa</div>
      <div class="top-info">aaaaaaaa</div>
      <div class="top-info">aaaaaaaa</div>
    </div>
    <div class="container-fluid p-0 h-100">
      <div class="row no-gutters h-100">
        <div class="col-12 col-xl-4 p-0 bg-image h-100 position-relative" v-if="activeStep !== 'validation'">
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
        <div class="col-12 p-0 h-100" :class="[activeStep === 'validation' ? 'col-xl-12' : 'col-xl-8']">
          <div class="checkout-body-content" style="position: relative" :class="[activeStep === 'validation' ? 'p-0' : '']">
            <div class="checkout-progress-bar" style="position: sticky; top: 0; z-index: 15" :class="[activeStep === 'booker' ? 'checkout-progress-bar--bg-fade' : 'checkout-progress-bar--bg-white']" v-if="activeStep !== 'validation' && activeStep !== 'success'">
              <div class="d-flex w-100 py-5">
                <div class="text-uppercase" style="font-weight: 700">Mes infos</div>
                <div class="text-uppercase pr-4 ml-auto" style="color: #b4b4b487; font-weight: 600">Options</div>
                <div class="text-uppercase px-4" style="color: #b4b4b487; border-left: 1px dashed #b4b4b487; border-right: 1px dashed #b4b4b487; font-weight: 600">Assurance</div>
                <div class="text-uppercase pl-4" style="color: #b4b4b487; font-weight: 600">Paiement</div>
              </div>
            </div>
            <transition name="fade" mode="out-in" @before-leave="beforeLeave">
              <div class="tab-content" :key="activeStep" style="margin-top: 0.1rem" :style="[activeStep === 'validation' ? 'max-width: unset' : '']">
                <keep-alive>
                  <CheckoutWizardBooker @complete="bookerComplete = true" @incomplete="bookerComplete = false" @updated-booker="setBooker" v-if="activeStep === 'booker'" />
                  <CheckoutWizardParticipants @complete="participantsComplete = true" @incomplete="participantsComplete = false" @updated-participants="setParticipants" v-else-if="activeStep === 'participants'" :booker="booker" />
                  <CheckoutWizardForm @complete="optionsComplete = true" @incomplete="optionsComplete = false" @updated-participants="setParticipants" @updated-booker="setBooker" :booker="booker" :extra-participants="extraParticipants" :course="course" v-else-if="activeStep === 'options'" />
                  <CheckoutWizardForm2 @complete="insuranceComplete = true" @incomplete="insuranceComplete = false" @updated-participants="setParticipants" :booker="booker" :extra-participants="extraParticipants" :course="course" v-else-if="activeStep === 'insurance'" />
                </keep-alive>
                <Step5 :course="course" :booker="booker" :extra-participants="extraParticipants" v-if="activeStep === 'validation'" />
                <Step6 v-if="activeStep === 'success'" />
                <div class="d-flex justify-content-end mt-4" v-if="activeStep !== 'validation' && activeStep !== 'success'">
                  <button @click.prevent="prevStep" v-show="steps.indexOf(activeStep) !== 0" class="btn text-uppercase prev-step-btn mr-3" style="border-radius: 0">Précédent</button>
                  <button @click.prevent="nextStep" class="btn text-uppercase next-step-btn next-btn disable" style="border-radius: 0">étape suivante</button>
                  <!-- <button @click.prevent="nextStep" :disabled="!stepIsComplete(activeStep)" class="btn text-uppercase next-step-btn" style="border-radius: 0">étape suivante</button> -->
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
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
      transitionEntered: false,
      steps: ['booker', 'participants', 'options', 'insurance', 'validation', 'success'],
      bookerComplete: false,
      participantsComplete: false,
      optionsComplete: false,
      insuranceComplete: false,
      activeStep: '',
      extraParticipants: [],
      booker: {
        infos: {
          firstName: 'a',
          lastName: 'a',
          birthDate: 'a',
          phone: 'a',
          email: 'a',
          gender: 'a',
          country: 'a',
          city: 'a',
          street: 'a',
          postalCode: 'a'
        },
        booking: {
          room: ['a'],
          roomMate: 'a',
          equipmentRental: true,
          noExtraActivities: true,
          extraActivities: ['a'],
          extraNotes: 'a',
          insurance: 'a'
        }
      }
    }
  },
  watch: {
    course: {
      immediate: true,
      handler(val) {
        this.activeStep = 'validation'
      }
    },
    activeStep: {
      immediate: true,
      handler(val) {
        this.$emit('changed-step', val)
      }
    }
  },
  computed: {
    partipantsNb() {
      return this.booker.length + this.extraParticipants.length
    },
    showMenu() {
      return this.activeStep === 'options' && this.transitionEntered
    }
  },
  methods: {
    beforeLeave() {
      console.log('AAAAAAAAAAA')
      if (this.activeStep === 'options') this.transitionEntered = true
    },
    nextStep() {
      // if (!this.stepIsComplete(this.activeStep)) return

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
    setParticipants(val) {
      this.extraParticipants = val
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

<style scoped>
.tab-content,
.checkout-progress-bar {
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
}
.checkout-progress-bar {
  height: 120px;
}
.checkout-progress-bar--bg-fade {
  background: linear-gradient(180deg, rgb(255, 255, 255) 70%, rgba(255, 255, 255, 0) 100%);
  /* box-shadow: 0px 20px 10px red, 0px 30px 20px red, 0px 76px 60px red; */
  box-shadow: -10px -5px 5px white, 10px -5px 5px white;
}
.checkout-progress-bar--bg-white {
  background-color: white;
  outline: 5px solid white;
}
.next-btn {
  background-color: white;
  color: #292f33;
  border: 1px solid #292f33;
}
.next-btn:hover {
  background-color: #292f33;
  color: white;
}
.next-btn.disable {
  color: #ebebeb;
  border: 1px solid #b4b4b4;
}
.next-btn.disable:hover {
  background-color: white;
  color: #ebebeb;
}
.top-infos-container {
  display: flex;
  width: max-content;
  position: absolute;
}
.top-info {
  font-weight: 500;
  font-family: Oswald, sans-serif;
  padding: 1rem 2rem;
}
.top-info:first-of-type {
  background-color: #292f33;
  color: white;
}
.top-info {
  background-color: white;
  color: #292f33;
}
</style>
