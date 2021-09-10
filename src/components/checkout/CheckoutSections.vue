<template>
  <div class="checkout-main-container">
    <div class="top-infos-container" v-if="activeStep === 'validation'">
      <div class="top-info top-info-back" type="button" @click="activeStep = 'insurance'">
        <InlineSvg :src="require('@/assets/svg/arrow-right.svg')" transform="rotate(180)" class="mr-3" height="12" fill="white" />
        <span class="d-inline-block align-middle">Retour</span>
      </div>
      <div class="top-info">Besoin d'informations?</div>
      <div class="top-info">Remboursement intégral en cas de non-départ confirmé</div>
      <div class="top-info">Annulation sans frais jusqu'au {{ new Date(session.cancelDate).toLocaleString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' }) }}</div>
    </div>
    <div class="d-flex h-100 w-100">
      <div class="col-xl-4 p-0 bg-image h-100 position-relative" v-if="activeStep !== 'validation'">
        <img class="img-fluid checkout-info-img" fluid :src="course?.cover" />
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
      <div class="checkout-body-content h-100" style="position: relative; overflow: auto" :class="[activeStep === 'validation' ? 'col-xl-12 p-0' : 'col-xl-8']">
        <div
          class="checkout-progress-bar"
          style="position: sticky; top: 0; z-index: 15"
          :class="[
            activeStep === 'booker' || activeStep === 'participants' || activeStep === 'insurance' || (activeStep === 'options' && $windowWidth <= 1366)
              ? 'checkout-progress-bar--bg-fade'
              : 'checkout-progress-bar--bg-white'
          ]"
          v-if="activeStep !== 'validation' && activeStep !== 'success'"
        >
          <div class="d-flex w-100 py-5">
            <div class="checkout-step text-uppercase pr-4" style="font-weight: 700" :style="activeStep === 'booker' ? '' : 'color: #b4b4b487;'">Mes infos</div>
            <div class="checkout-step text-uppercase px-4" :style="activeStep === 'participants' ? '' : 'color: #b4b4b487;'" style="font-weight: 600">Participants</div>
            <div class="checkout-step text-uppercase px-4" :style="activeStep === 'options' ? '' : 'color: #b4b4b487;'" style="font-weight: 600">Options</div>
            <div class="checkout-step text-uppercase px-4" :style="activeStep === 'insurance' ? '' : 'color: #b4b4b487;'" style="font-weight: 600">Assurance</div>
            <div class="checkout-step text-uppercase pl-4" :style="activeStep === 'validation' ? '' : 'color: #b4b4b487;'" style="font-weight: 600">Paiement</div>
          </div>
        </div>
        <transition name="fade" mode="out-in" @before-leave="beforeLeave">
          <div class="tab-content" :key="activeStep" style="margin-top: 0.1rem" :style="[activeStep === 'validation' ? 'max-width: unset' : '']">
            <!-- eslint-disable-next-line prettier/prettier -->
            <CheckoutWizardBooker v-if="activeStep === 'booker'" :avatar-key="avatarKey" @complete="(status) => (bookerComplete = status)" @updated-booker-infos="setBooker" :booker="booker" />
            <keep-alive>
              <component
                :is="'CheckoutWizardParticipants'"
                v-if="activeStep === 'participants'"
                @complete="(status) => (participantsComplete = status)"
                @updated-participants="setParticipants"
                @clicked-my-infos="activeStep = 'booker'"
                :avatar-key="avatarKey"
                :extra-participants="extraParticipants"
                :booker="booker"
                ref="participants"
              ></component>
            </keep-alive>
            <keep-alive>
              <component
                :is="'CheckoutWizardForm'"
                v-if="activeStep === 'options'"
                @complete="(status) => (optionsComplete = status)"
                @updated-participants="setParticipants"
                @updated-booker="setBooker"
                @updated-isLastParticipant="(val) => (isLastParticipant = val)"
                :avatar-key="avatarKey"
                :booker="booker"
                :extra-participants="extraParticipants"
                :course="course"
                :needs-reset="needsReset"
              >
              </component>
            </keep-alive>
            <keep-alive>
              <component
                :is="'CheckoutWizardForm2'"
                v-if="activeStep === 'insurance'"
                @complete="(status) => (insuranceComplete = status)"
                @updated-participants="setParticipants"
                @updated-booker="setBooker"
                :avatar-key="avatarKey"
                :booker="booker"
                :extra-participants="extraParticipants"
                :course="course"
                :booker-expense="bookerExpense"
                :extra-participants-expense="extraParticipantsExpense"
              ></component>
            </keep-alive>
            <!-- eslint-disable-next-line prettier/prettier -->
            <CheckoutWizardValidation :avatar-key="avatarKey" :total-price="totalPrice" v-if="activeStep === 'validation'" @complete="submitBookingForm" :course="course" :booker="booker" :extra-participants="extraParticipants" />
            <router-view></router-view>
            <!-- <CheckoutSuccess v-else-if="activeStep === 'success'" /> -->
            <div class="nav-buttons-container d-flex justify-content-end mt-4" v-if="activeStep !== 'validation' && activeStep !== 'success'">
              <button
                @click.prevent="prevStep"
                v-show="steps.indexOf(activeStep) !== 0"
                class="btn text-uppercase prev-step-btn prev-btn mr-3"
                :class="{ 'mr-auto': !showNextBtn }"
                style="border-radius: 0"
              >
                Précédent
              </button>
              <button @click.prevent="nextStep" v-show="showNextBtn" class="btn text-uppercase next-step-btn next-btn" style="border-radius: 0">
                {{ bookerInputsChanged && activeStep === 'booker' ? 'valider' : 'étape suivante' }}
              </button>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import CheckoutWizardBooker from './wizard/CheckoutWizardBooker.vue'
import CheckoutWizardParticipants from './wizard/CheckoutWizardParticipants.vue'
import CheckoutWizardForm from './wizard/CheckoutWizardForm.vue'
import CheckoutWizardForm2 from './wizard/CheckoutWizardForm2.vue'
import CheckoutWizardValidation from './wizard/CheckoutWizardValidation.vue'
// import CheckoutSuccess from './CheckoutSuccess.vue'
import { isLoggedIn } from '@/utils/auth'
// import { loadStripe } from '@stripe/stripe-js'

export default {
  name: 'CheckoutSections',
  components: {
    CheckoutWizardBooker,
    CheckoutWizardParticipants,
    CheckoutWizardForm,
    CheckoutWizardForm2,
    CheckoutWizardValidation
    // CheckoutSuccess
  },
  emits: ['booker-expense', 'extra-participants-expense', 'extra-participants-nb', 'changed-step'],
  props: ['course', 'session', 'total-price'],
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
          firstName: '',
          lastName: '',
          birthDate: '',
          phone: '',
          email: '',
          gender: '',
          country: '',
          city: '',
          street: '',
          postalCode: ''
        },
        booking: {
          room: 0,
          roomMate: '',
          equipmentRental: null,
          noExtraActivities: false,
          extraActivities: [],
          comment: '',
          insurance: ''
        }
      },
      bookerInputsChanged: false,
      updatedBooker: null,
      updatedExtraParticipants: null,
      avatarKey: '',
      isLastParticipant: false,
      needsReset: false,
      currUser: null
    }
  },
  watch: {
    currUser: {
      immediate: true,
      handler(val) {
        if (!val) return
        ;['firstName', 'lastName', 'birthDate', 'phone', 'email', 'gender', 'country', 'city', 'street', 'postalCode'].forEach((attr) => {
          this.booker.infos[attr] = val[attr]
        })
      }
    },
    extraParticipants: {
      deep: true,
      handler(val) {
        this.$emit('extra-participants-nb', val.length)
      }
    },
    bookerExpense(val) {
      this.$emit('booker-expense', val)
    },
    extraParticipantsExpense(val) {
      this.$emit('extra-participants-expense', val)
    },
    course: {
      immediate: true,
      handler(val) {
        this.activeStep = 'booker'
      }
    },
    activeStep: {
      immediate: true,
      handler(newVal, oldVal) {
        this.$emit('changed-step', newVal)

        if (oldVal === 'insurance' && newVal === 'options') this.needsReset = true
        else this.needsReset = false

        if (newVal === 'insurance') document.querySelector('.checkout-body-content').scrollTo({ top: 0, behavior: 'smooth' })
      }
    }
  },
  computed: {
    showNextBtn() {
      return (!this.extraParticipants.length && this.activeStep === 'options') || (this.isLastParticipant && this.activeStep === 'options') || this.activeStep !== 'options'
    },
    bookerExpense() {
      return this.bookerEquipmentExpense + this.bookerInsuranceExpense + this.bookerRoomExpense + this.bookerActivitiesExpense
    },
    extraParticipantsExpense() {
      return this.extraParticipantsEquipmentExpense + this.extraParticipantsInsuranceExpense + this.extraParticipantsRoomExpense + this.extraParticipantsActivitiesExpense
    },
    bookerEquipmentExpense() {
      if (!this.booker.booking) return 0

      if (this.booker.booking.equipmentRental) return 50
      else return 0
    },
    bookerInsuranceExpense() {
      if (!this.booker.booking) return 0

      return Object.values(this.booker.booking.insurance)[0] || 0
    },
    bookerRoomExpense() {
      if (!this.booker.booking) return 0

      return Object.values(this.booker.booking.room)[0] || 0
    },
    bookerActivitiesExpense() {
      if (!this.booker.booking) return 0

      let activitiesPrices = this.booker.booking.extraActivities.map((el) => Object.values(el)[0])

      if (!activitiesPrices.length) return 0

      return activitiesPrices.reduce((s, el) => s + el)
    },
    extraParticipantsEquipmentExpense() {
      if (!this.extraParticipants.length) return 0

      let total = 0

      this.extraParticipants.forEach((partic) => {
        if (partic.booking.equipmentRental) total += 50
      })
      return total
    },
    extraParticipantsInsuranceExpense() {
      if (!this.extraParticipants.length) return 0

      let total = 0

      this.extraParticipants.forEach((partic) => {
        total += Object.values(partic.booking.insurance)[0] || 0
      })
      return total
    },
    extraParticipantsRoomExpense() {
      if (!this.extraParticipants.length) return 0

      let total = 0

      this.extraParticipants.forEach((partic) => {
        total += Object.values(partic.booking.room)[0] || 0
      })
      return total
    },
    extraParticipantsActivitiesExpense() {
      if (!this.extraParticipants.length) return 0

      let total = 0

      this.extraParticipants.forEach((partic) => {
        partic.booking.extraActivities.forEach((el) => (total += Object.values(el)[0]))
      })

      return total
    },
    showMenu() {
      return this.activeStep === 'options' && this.transitionEntered
    },
    params() {
      let params = {
        reservation: {
          equipmentRental: this.booker.booking.equipmentRental,
          comment: this.booker.booking.comment,
          insurance: Object.keys(this.booker.booking.insurance)[0],
          roomId: Object.keys(this.booker.booking.room)[0],
          sessionId: this.$props.session.id,
          alternativeIds: this.booker.booking.extraActivities.map((el) => Object.keys(el)[0])
        }
      }

      if (this.extraParticipants.length) {
        params.reservation.extraParticipantsReservationsAttributes = new Array()

        this.extraParticipants.forEach((part) => {
          params.reservation.extraParticipantsReservationsAttributes.push({
            equipmentRental: part.booking.equipmentRental,
            comment: part.booking.comment,
            insurance: Object.keys(part.booking.insurance)[0],
            roomId: Object.keys(part.booking.room)[0],
            alternativeIds: part.booking.extraActivities.map((el) => Object.keys(el)[0]),
            extraParticipantAttributes: {
              firstName: part.infos.firstName,
              birthDate: part.infos.birthDate,
              email: part.infos.email
            }
          })
        })
      }

      return params
    }
  },
  methods: {
    isLoggedIn() {
      return isLoggedIn()
    },
    async updateUser() {
      return this.$axios
        .put('/users/current', { user: this.booker.infos })
        .then((res) => {
          this.currUser = res.data.user
        })
        .catch((err) => this.$notify({ group: 'app', type: 'error', text: err.response?.data?.message || err.message }))
    },
    isComplete(step) {
      return this.$data[`${step}Complete`]
    },
    beforeLeave() {
      if (this.activeStep === 'options') this.transitionEntered = true
    },
    async nextStep() {
      if (!this.isComplete(this.activeStep)) {
        if (this.activeStep === 'participants') this.$refs.participants.touch()

        this.$notify({ group: 'app', type: 'info', text: 'Tous les champs doivent être renseignés !' })
        return
      }

      if (this.activeStep === 'booker') await this.updateUser()

      let currIndex = this.steps.indexOf(this.activeStep)
      this.activeStep = this.steps[currIndex + 1]
    },
    prevStep() {
      let currIndex = this.steps.indexOf(this.activeStep)
      this.activeStep = this.steps[currIndex - 1]
    },
    setBooker(val) {
      this.booker = val

      if (this.activeStep === 'booker') this.bookerInputsChanged = true
    },
    setParticipants(val) {
      this.extraParticipants = val
    },
    submitBookingForm() {
      const AUTH_TOKEN_KEY = 'authToken'
      const token = localStorage.getItem(AUTH_TOKEN_KEY)
      this.$axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

      this.$axios
        .post('/reservations', this.params, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then((res) => {
          window.location.href = res.data.url
        })
        .catch((err) => this.$notify({ group: 'app', type: 'error', text: err.response?.data?.message || err.message }))
    }
  },
  created() {
    if (!isLoggedIn()) return

    const AUTH_TOKEN_KEY = 'authToken'
    const token = localStorage.getItem(AUTH_TOKEN_KEY)
    this.$axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

    this.$axios
      .get('/users/current')
      .then((res) => {
        this.currUser = res.data.user
        this.$root.initialLoading = false
      })
      .catch((err) => {
        this.$notify({ type: 'error', text: err.message })
        this.$root.initialLoading = false
      })
  },
  mounted() {
    // this.submitBookingForm()
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
.checkout-step:not(:last-of-type) {
  border-right: 1px dashed #b4b4b487;
}
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
.next-btn,
.prev-btn {
  background-color: white;
  color: #292f33;
  border: 1px solid #292f33;
}
.next-btn:hover,
.prev-btn:hover {
  background-color: #292f33;
  color: white;
}
.next-btn.disable,
.prev-btn.disable {
  color: #f1f1f1;
  border: 1px solid #b4b4b4;
}
.next-btn.disable:hover,
.prev-btn.disable:hover {
  background-color: white;
  color: #f1f1f1;
}

.top-infos-container {
  display: flex;
  width: max-content;
  position: absolute;
  z-index: 100;
}
.top-info {
  color: #292f33;
  font-weight: 500;
  font-family: Oswald, sans-serif;
  padding: 1rem 1rem;
  font-size: 0.85rem;
}
.top-info {
  background-color: white;
  color: #292f33;
  margin: 0 1px;
  box-shadow: rgb(240, 240, 240) 0px 1px 3px;
}
.top-info-back {
  background-color: #292f33;
  color: white;
  transition: all 0.3s ease;
  padding-left: 2rem;
  padding-right: 2rem;
}
.top-info-back:hover {
  background-color: #d82558;
}
</style>
