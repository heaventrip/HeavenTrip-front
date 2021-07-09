<template>
  <div class="checkout-main-container" :style="[activeStep === 'validation' ? 'height: calc(100vh - 181px)' : '']">
    <div class="top-infos-container">
      <div class="top-info" type="button" @click="nextStep">Retour</div>
      <div class="top-info">aaaaaaaa</div>
      <div class="top-info">aaaaaaaa</div>
      <div class="top-info">aaaaaaaa</div>
    </div>
    <div class="container-fluid h-100">
      <div class="row h-100">
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
          <div class="checkout-body-content" style="position: relative">
            <div style="position: sticky; top: 0; z-index: 15; outline: 5px solid white" v-if="activeStep !== 'validation' && activeStep !== 'success'">
              <div class="d-flex w-100 py-5" style="background: white">
                <div class="text-uppercase" style="font-weight: 600">Participants</div>
                <div class="text-uppercase pr-4 ml-auto" style="font-weight: 400">Options</div>
                <div class="text-uppercase px-4" style="border-left: 1px dashed #7c7c7c; border-right: 1px dashed #7c7c7c; font-weight: 400">Assurance</div>
                <div class="text-uppercase pl-4" style="font-weight: 400">Paiement</div>
              </div>
              <div class="card card-header border-0 p-0 d-flex flex-row align-items-center" v-if="activeStep === 'options'">
                <div class="position-relative">
                  <h6 class="font-weight-normal mb-0 d-inline-block bg-white pr-3 position-relative text-uppercase">Complète ta réservation</h6>
                </div>
                <div class="d-inline-block mr-auto" style="flex-grow: 0.9; height: 1px; background-color: #ebebeb"></div>
                <div class="participant-img-container participant-opacity position-relative">
                  <div class="d-inline-block" style="position: relative; margin-left: 3rem">
                    <img class="participant-img mr-3" fluid :src="require('@/assets/images/ui_faces/1.jpg')" />
                    <span class="participant-check"></span>
                  </div>
                  <strong class="participant-name h6 mb-0 font-weight-bold" style="display: inline; vertical-align: middle">{{ booker.infos.firstName || 'Participant 1' }}</strong>
                </div>
                <div class="participant-add position-relative d-flex align-items-center" :class="[extraParticipantForHeader === extraParticipant ? '' : 'participant-opacity']" v-for="(extraParticipantForHeader, index) in extraParticipants" :key="extraParticipantForHeader">
                  <i class="fa fa-caret-right mx-3 small align-baseline caret-icon"></i>
                  <i class="far fa-user-circle mx-3 align-baseline participant-icon"></i>
                  <strong class="participant-name h6 mb-0 font-weight-bold">{{ extraParticipantForHeader.infos.firstName || `Participant ${index + 2}` }}</strong>
                </div>
              </div>
            </div>
            <div class="tab-content">
              <keep-alive>
                <CheckoutWizardBooker @complete="bookerComplete = true" @incomplete="bookerComplete = false" @updated-booker="setBooker" v-if="activeStep === 'booker'" />
                <CheckoutWizardParticipants @complete="participantsComplete = true" @incomplete="participantsComplete = false" @updated-participants="setParticipants" v-else-if="activeStep === 'participants'" />
                <CheckoutWizardForm @complete="optionsComplete = true" @incomplete="optionsComplete = false" @updated-participants="setParticipants" @updated-booker="setBooker" :booker="booker" :extra-participants="extraParticipants" :course="course" v-else-if="activeStep === 'options'" />
                <CheckoutWizardForm2 @complete="insuranceComplete = true" @incomplete="insuranceComplete = false" @updated-participants="setParticipants" :booker="booker" :extra-participants="extraParticipants" :course="course" v-else-if="activeStep === 'insurance'" />
              </keep-alive>
              <Step5 :course="course" :booker="booker" :extra-participants="extraParticipants" v-if="activeStep === 'validation'" />
              <Step6 v-if="activeStep === 'success'" />
              <div class="d-flex justify-content-end mt-4" v-if="activeStep !== 'validation' && activeStep !== 'success'">
                <button @click.prevent="prevStep" v-show="steps.indexOf(activeStep) !== 0" class="btn text-uppercase prev-step-btn mr-3" style="border-radius: 0">Précédent</button>
                <button @click.prevent="nextStep" class="btn text-uppercase next-step-btn" style="border-radius: 0">étape suivante</button>
                <!-- <button @click.prevent="nextStep" :disabled="!stepIsComplete(activeStep)" class="btn text-uppercase next-step-btn" style="border-radius: 0">étape suivante</button> -->
              </div>
            </div>
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
        this.activeStep = 'booker'
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
    }
  },
  methods: {
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
