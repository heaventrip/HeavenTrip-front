<template>
  <!-- <div class="preview-card border-0 d-none align-items-center text-uppercase flex-row bg-dark text-white px-5 rounded-lg mb-5">
    <span class="font-weight-light mr-5 ml-2">vous êtes {{ $parent.partipantsNb }} trippers</span>
    <ul class="list-unstyled mb-0 font-weight-500 name-list d-flex">
      <li>marion</li>
      <li>
        axel
        <a href="#"><i class="fa fa-times-circle ml-2 align-baseline text-white"></i></a>
      </li>
    </ul>
    <a href="#" class="ml-auto font-weight-light text-reset">modifier</a>
  </div> -->
  <!-- TODO séparer les participants -->
  <div class="card card-header border-0 p-0 flex-row align-items-center pb-3" style="display: flex; flex-wrap: wrap; outline: 5px solid white" :style="{ zIndex: $windowWidth <= 1366 ? '' : '15' }">
    <div class="position-relative">
      <h6 class="font-weight-normal mb-0 d-inline-block bg-white pr-3 position-relative text-uppercase pr-4">Complète la réservation de :</h6>
    </div>
    <div class="d-inline-block mr-auto" style="flex-grow: 1; height: 1px; background-color: #ebebeb"></div>
    <div class="participant-img-container position-relative" :class="{ 'participant-opacity': currForm !== 'booker' }">
      <div class="d-inline-block" style="position: relative; margin-left: 3rem">
        <img
          v-if="avatarKey"
          class="participant-img mr-3"
          fluid
          :src="`https://res.cloudinary.com/heaventrip/image/upload/v1624837376/${avatarKey}.jpg`"
          style="height: 70px; border: 1px solid #292f33; box-shadow: none; outline: none"
        />
        <InlineSvg v-else :src="require('@/assets/svg/avatar-empty.svg')" height="70" style="margin-right: 1rem" fill="#292f33" />
        <span class="participant-check"></span>
      </div>
      <strong class="text-uppercase participant-name h6 mb-0 font-weight-bold" style="display: inline; vertical-align: middle">{{ booker.infos.firstName || 'Participant 1' }}</strong>
    </div>
    <div
      class="participant-add position-relative d-flex align-items-center"
      v-for="(extraParticipantForHeader, index) in extraParticipants"
      :key="extraParticipantForHeader"
      :class="{ 'participant-opacity': extraParticipantForHeader !== localExtraParticipants[currFormParticipant] }"
    >
      <i class="fa fa-caret-right mx-3 small align-baseline caret-icon"></i>
      <InlineSvg :src="require('@/assets/svg/avatar-empty.svg')" class="mr-2" height="50" fill="#292f33" />
      <strong class="text-uppercase participant-name h6 mb-0 font-weight-bold">{{ extraParticipantForHeader.infos.firstName || `Participant ${index + 2}` }}</strong>
    </div>
  </div>
  <transition name="fade" mode="out-in" @enter="scroll">
    <!-- NOTE booker -->
    <div v-if="currForm === 'booker'" class="card card-participant card-booker d-block px-5" :class="[localExtraParticipants.length > 0 ? '' : 'mb-5']">
      <div class="card-body">
        <h6 class="font-weight-bold">Quel type de chambre :</h6>
        <p class="font-weight-500" style="font-family: 0.875rem">Dans la limite des stocks disponibles !</p>
        <div class="hidable custom-radio-container">
          <div class="custom-control" v-for="(room, index) in course.rooms" :key="room">
            <label class="">
              <input v-model="localBooker.booking.room" :value="{ [room.id]: room.price }" type="radio" :id="`bookerRoom${index}`" :name="`bookerRoom${index}`" class="" />
              <span class="d-flex align-items-center w-100" :class="[index !== course.rooms.length - 1 ? 'dotted-border' : '']">
                <div>
                  <div class="font-weight-bold text-uppercase">{{ room.title }}</div>
                  <p class="font-weight-500 mb-0">{{ room.subtitle }}</p>
                </div>
                <div class="avalaible-mem col-6 justify-content-center align-items-center" v-if="room.is_sharable && extraParticipants.length > 0">
                  <p class="font-weight-500 mb-0">A partager avec :</p>
                  <select v-model="localBooker.booking.roomMate" class="form-control col-5 ml-3 text-capitalize custom-select">
                    <option v-for="extraParticipant in localExtraParticipants" :key="extraParticipant">{{ extraParticipant.infos.firstName }}</option>
                  </select>
                </div>
                <div class="ml-auto font-weight-bold text-uppercase">+ {{ room.price }} &euro;</div>
              </span>
            </label>
          </div>
        </div>
      </div>
      <div class="card-body border-top">
        <h6 class="font-weight-bold">Avec ou sans location matériel :</h6>
        <p class="font-weight-500" style="font-family: 0.875rem">Matériel correspondant uniquement a ton activité principale</p>
        <div class="hidable custom-radio-container">
          <div class="custom-control">
            <label class="" for="materielBooker-with">
              <input v-model="localBooker.booking.equipmentRental" :value="true" type="radio" id="materielBooker-with" name="materielBooker" class="" />
              <span class="d-flex align-items-center w-100 dotted-border">
                <div>
                  <div class="font-weight-bold text-uppercase">avec matériel</div>
                  <p class="font-weight-500 mb-0">Je voyage léger</p>
                </div>
                <div class="ml-auto font-weight-bold text-uppercase">inclus</div>
              </span>
            </label>
          </div>
          <div class="custom-control">
            <label class="" for="materielBooker-without">
              <input v-model="localBooker.booking.equipmentRental" :value="false" type="radio" id="materielBooker-without" name="materielBooker" class="" />
              <span class="d-flex align-items-center w-100">
                <div>
                  <div class="font-weight-bold text-uppercase">sans materiel</div>
                  <p class="font-weight-500 mb-0" style="font-family: 0.875rem">Je préfére venir avec mon matos !</p>
                </div>
                <div class="ml-auto font-weight-bold text-uppercase">reduction de 380 &euro;</div>
              </span>
            </label>
          </div>
        </div>
      </div>
      <div class="card-body border-top">
        <h6 class="font-weight-bold">Activites en +</h6>
        <p class="font-weight-500">Vous pouvez sélectionner plusieurs activités</p>
        <div class="hidable">
          <div class="custom-radio-container inline-blocks py-3 d-flex flex-wrap px-0">
            <div v-for="extraActivity in course?.alternatives?.filter((el) => el.isOption)" :key="extraActivity.id" class="custom-control custom-radio bg-light rounded border m-2">
              <label class="d-flex align-items-center border-0 m-0" for="customRadio7">
                <input
                  v-model="localBooker.booking.extraActivities"
                  :value="{ [extraActivity.id]: extraActivity.price }"
                  type="checkbox"
                  id="customRadio7"
                  class=""
                  :disabled="localBooker.booking.noExtraActivities"
                />
                <span class="font-weight-bold text-uppercase">
                  <div style="margin-right: 2.25rem">{{ extraActivity.title }}</div>
                  <div class="border-left pl-4">+ {{ extraActivity.price }}&euro;<small class="text-lowercase">/pers.</small></div>
                </span>
              </label>
            </div>
          </div>
          <div class="custom-control custom-checkbox other-activity-check">
            <label class="mb-0" for="exampleCheck3" style="font-weight: 400">
              <input v-model="localBooker.booking.noExtraActivities" type="checkbox" class="" id="exampleCheck3" />
              <span>Je ne souhaite pas d'autres activites</span>
            </label>
          </div>
        </div>
      </div>
      <!-- <div class="border-top d-none">
    <h6 class="font-weight-bold text-uppercase mb-1">infos a savoir</h6>
    <p class="font-weight-500" style="font-family: 0.875rem">Tu peux exprimer une demande specifique ou nous alerter sur tes allergies alimentaires etc...</p>
    <textarea class="form-control info-textarea bg-light p-4 mb-4 mt-5" rows="5">Fais-toi plaisir !</textarea>
    <button class="btn btn-danger text-uppercase shadow p-3 px-4 continue-btn">continuer</button>
    </div> -->
      <div class="card-body border-top">
        <h6 class="font-weight-bold text-uppercase">infos a savoir</h6>
        <p class="font-weight-500" style="font-family: 0.875rem">Tu peux exprimer une demande specifique ou nous alerter sur tes allergies alimentaires etc...</p>
        <textarea v-model="localBooker.booking.comment" class="hidable form-control info-textarea bg-light p-4 mb-4 mt-5" rows="5">Fais-toi plaisir !</textarea>
      </div>
    </div>
    <div v-else>
      <!-- NOTE extras -->
      <div class="card card-participant card-extra-participant d-block px-5 mb-5">
        <div class="card-body">
          <h6 class="font-weight-bold">Quel type de chambre :</h6>
          <p class="font-weight-500" style="font-family: 0.875rem">Dans la limite des stocks disponibles !</p>
          <div class="hidable custom-radio-container">
            <div class="custom-control" v-for="(room, index) in course.rooms" :key="room">
              <label class="">
                <input
                  v-model="localExtraParticipants[currFormParticipant].booking.room"
                  :value="{ [room.id]: room.price }"
                  type="radio"
                  :id="`extraPart${currFormParticipant}-${index}`"
                  :name="`extraPartRoom${currFormParticipant}-${index}`"
                  class=""
                />
                <span class="d-flex align-items-center w-100" :class="[index !== course.rooms.length - 1 ? 'dotted-border' : '']">
                  <div>
                    <div class="font-weight-bold text-uppercase">{{ room.title }}</div>
                    <p class="font-weight-500 mb-0">{{ room.subtitle }}</p>
                  </div>
                  <div class="avalaible-mem col-6 justify-content-center align-items-center" v-if="room.is_sharable && extraParticipants.length > 0">
                    <p class="font-weight-500 mb-0">A partager avec :</p>
                    <select v-model="localExtraParticipants[currFormParticipant].booking.roomMate" class="form-control col-5 ml-3 text-capitalize custom-select">
                      <option>{{ booker.infos.firstName }}</option>
                      <option v-for="extraParticipant in localExtraParticipants" :key="extraParticipant">{{ extraParticipant.infos.firstName }}</option>
                    </select>
                  </div>
                  <div class="ml-auto font-weight-bold text-uppercase">+ {{ room.price }} &euro;</div>
                </span>
              </label>
            </div>
          </div>
        </div>
        <div class="card-body border-top">
          <h6 class="font-weight-bold">Avec ou sans location matériel :</h6>
          <p class="font-weight-500" style="font-family: 0.875rem">Matériel correspondant uniquement a tan activité principale</p>
          <div class="hidable custom-radio-container">
            <div class="custom-control">
              <label class="" :for="`extraPart${currFormParticipant}-with`">
                <input
                  v-model="localExtraParticipants[currFormParticipant].booking.equipmentRental"
                  :value="true"
                  type="radio"
                  :id="`extraPart${currFormParticipant}-with`"
                  :name="`material-extraPart${currFormParticipant}`"
                  class=""
                />
                <span class="d-flex align-items-center w-100 dotted-border">
                  <div>
                    <div class="font-weight-bold text-uppercase">avec matériel</div>
                    <p class="font-weight-500 mb-0">Je voyage léger</p>
                  </div>
                  <div class="ml-auto font-weight-bold text-uppercase">inclus</div>
                </span>
              </label>
            </div>
            <div class="custom-control">
              <label class="" :for="`extraPart${currFormParticipant}-without`">
                <input
                  v-model="localExtraParticipants[currFormParticipant].booking.equipmentRental"
                  :value="false"
                  type="radio"
                  :id="`extraPart${currFormParticipant}-without`"
                  :name="`material-extraPart${currFormParticipant}`"
                  class=""
                />
                <span class="d-flex align-items-center w-100">
                  <div>
                    <div class="font-weight-bold text-uppercase">sans materiel</div>
                    <p class="font-weight-500 mb-0" style="font-family: 0.875rem">Je préfére venir avec mon matos !</p>
                  </div>
                  <div class="ml-auto font-weight-bold text-uppercase">reduction de 380 &euro;</div>
                </span>
              </label>
            </div>
          </div>
        </div>
        <div class="card-body border-top">
          <h6 class="font-weight-bold">Activites en +</h6>
          <p class="font-weight-500">Vous pouvez sélectionner plusieurs activités</p>
          <div class="hidable">
            <div class="custom-radio-container inline-blocks py-3 d-flex flex-wrap px-0">
              <div v-for="extraActivity in course?.alternatives?.filter((el) => el.isOption)" :key="extraActivity.id" class="custom-control custom-radio bg-light rounded border m-2">
                <label class="d-flex align-items-center border-0 m-0" :for="`extraPart${currFormParticipant}-activ0`">
                  <input
                    v-model="localExtraParticipants[currFormParticipant].booking.extraActivities"
                    :value="{ [extraActivity.id]: extraActivity.price }"
                    type="checkbox"
                    :id="`extraPart${currFormParticipant}-activ0`"
                    class=""
                    :disabled="localExtraParticipants[currFormParticipant].booking.noExtraActivities"
                  />
                  <!-- TODO extracti -->
                  <span class="font-weight-bold text-uppercase">
                    <div style="margin-right: 2.25rem">{{ extraActivity.title }}</div>
                    <div class="border-left pl-4">+ {{ extraActivity.price }}&euro;<small class="text-lowercase">/pers.</small></div>
                  </span>
                </label>
              </div>
            </div>
            <div class="custom-control custom-checkbox other-activity-check">
              <label class="mb-0" :for="`extraPart${currFormParticipant}-noextra`" style="font-weight: 400">
                <input v-model="localExtraParticipants[currFormParticipant].booking.noExtraActivities" type="checkbox" class="" :id="`extraPart${currFormParticipant}-noextra`" />
                <span>Je ne souhaite pas d'autres activites</span>
              </label>
            </div>
          </div>
        </div>
        <!-- <div class="card-body border-top d-none">
      <h6 class="font-weight-bold text-uppercase mb-1">infos a savoir</h6>
      <p class="font-weight-500">Tu peux exprimer une demande specifique ou nous alerter sur tes allergies alimentaires etc...</p>
      <textarea class="form-control info-textarea bg-light p-4 mb-4 mt-5" rows="5">Fais-toi plaisir !</textarea>
      <button class="btn btn-danger text-uppercase shadow p-3 px-4 continue-btn">continuer</button>
      </div> -->
        <div class="card-body border-top">
          <h6 class="font-weight-bold text-uppercase">infos a savoir</h6>
          <p class="font-weight-500" style="font-family: 0.875rem">Tu peux exprimer une demande specifique ou nous alerter sur tes allergies alimentaires etc...</p>
          <textarea v-model="localExtraParticipants[currFormParticipant].booking.comment" class="hidable form-control info-textarea bg-light p-4 mb-4 mt-5" rows="5">Fais-toi plaisir !</textarea>
        </div>
      </div>
    </div>
  </transition>
  <div class="card p-0" style="position: relative" v-if="extraParticipants.length && !(currForm === 'extraParticipant' && currFormParticipant === extraParticipants.length - 1)">
    <div @click="nextParticipant" class="btn-next-participant" type="button">
      <div class="d-flex flex-row align-items-center" style="padding: 1.25rem 2.25rem">
        <span class="mr-auto">Continuer avec la réservation de :</span>
        <div class="d-inline-block" style="position: relative" data-v-9215de46="">
          <InlineSvg :src="require('@/assets/svg/avatar-empty.svg')" height="50" style="margin-left: 1rem; margin-right: 1rem" fill="white" />
        </div>
        <div class="text-uppercase participant-name h6 mb-0 font-weight-bold">{{ booker.infos.firstName }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CheckoutWizardForm',
  props: ['booker', 'extra-participants', 'course', 'avatar-key'],
  emits: ['complete', 'updated-participants', 'updated-booker'],
  data() {
    return {
      currFormParticipant: 0,
      currFormStep: 0,
      currForm: 'booker',
      localBooker: this.$props.booker,
      localExtraParticipants: this.$props.extraParticipants
    }
  },
  methods: {
    initFormDisplay(type) {
      let mainCard
      if (type === 'extraParticipant') {
        mainCard = document.querySelectorAll(`.card-${type}`)[this.currFormParticipant]
      } else {
        mainCard = document.querySelector(`.card-${type}`)
      }
      let cards = Array.from(mainCard.querySelectorAll('.card-body'))
      let hiddenCards = cards.splice(1)
      let buttons = document.querySelector('.nav-buttons-container')

      buttons.style.display = 'none'
      hiddenCards.forEach((card, index) => {
        card.querySelector('.hidable').style.display = 'none'
        card.style.filter = 'opacity(0.2)'

        // only second card is half visible, others are hidden
        if (index !== 0) card.style.display = 'none'
      })
    },
    scroll() {
      this.initFormDisplay('extra-participant')
      document.querySelector('.card-header').scrollIntoView(false) // scroll top of div
    },
    nextFormStep(step) {
      let nextCard = document.querySelectorAll('.card-body')[step]
      nextCard.querySelector('.hidable').style.display = ''
      nextCard.removeAttribute('style') // remove opacity

      if (step === 3) {
        // TODO only for last participant !
        let buttons = document.querySelector('.nav-buttons-container')
        buttons.style.display = ''
      } else {
        let followingCard = document.querySelectorAll('.card-body')[step + 1]
        followingCard.style.display = ''
      }

      nextCard.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' })

      this.currFormStep = step
    },
    nextParticipant() {
      if (this.currForm === 'booker') this.currForm = 'extraParticipant'
      if (this.currForm === 'extraParticipant' && this.participantsBookingFilled) this.currFormParticipant++
    }
  },
  computed: {
    filled() {
      if (this.localExtraParticipants.length) return this.bookerBookingFilled && this.participantsBookingFilled
      else return this.bookerBookingFilled
    },
    bookerBookingFilled() {
      return this.bookerRoomFilled && this.bookerEquipmentFilled && this.bookerActivitiesFilled
    },
    participantsBookingFilled() {
      return this.extraParticipantRoomFilled && this.extraParticipantEquipmentFilled && this.extraParticipantActivitiesFilled
    },
    bookerRoomFilled() {
      return !!this.localBooker.booking.room
    },
    bookerEquipmentFilled() {
      return this.localBooker.booking.equipmentRental !== null
    },
    bookerActivitiesFilled() {
      return this.localBooker.booking.noExtraActivities || this.localBooker.booking.extraActivities.length
    },
    extraParticipantRoomFilled() {
      if (!this.localExtraParticipants.length) return
      return !!this.localExtraParticipants[this.currFormParticipant].booking.room
      // return !!this.localExtraParticipants[this.currFormParticipant].booking.room.length && !!this.localExtraParticipants[this.currFormParticipant].booking.roomMate
    },
    extraParticipantEquipmentFilled() {
      if (!this.localExtraParticipants.length) return
      return this.localExtraParticipants[this.currFormParticipant].booking.equipmentRental !== null
    },
    extraParticipantActivitiesFilled() {
      if (!this.localExtraParticipants.length) return
      return this.localExtraParticipants[this.currFormParticipant].booking.noExtraActivities || this.localExtraParticipants[this.currFormParticipant].booking.extraActivities.length
    }
  },
  watch: {
    bookerRoomFilled: {
      handler(val) {
        if (val) this.nextFormStep(1)
      }
    },
    'localBooker.booking.equipmentRental': {
      handler(val) {
        if (val) this.nextFormStep(2)
      }
    },
    'localBooker.booking.noExtraActivities': {
      handler(val) {
        if (val) this.nextFormStep(3)
      }
    },
    extraParticipantRoomFilled(val) {
      if (val) this.nextFormStep(1)
    },
    extraParticipantEquipmentFilled(val) {
      if (val) this.nextFormStep(2)
    },
    extraParticipantActivitiesFilled(val) {
      if (val) this.nextFormStep(3)
    },
    filled(val) {
      if (val) this.$emit('complete', true)
      else this.$emit('complete', false)
    },
    localBooker: {
      deep: true,
      handler(val) {
        this.$emit('updated-booker', val)
      }
    },
    localExtraParticipants: {
      deep: true,
      handler(val) {
        this.$emit('updated-participants', val)
      }
    }
  },
  mounted() {
    this.initFormDisplay('booker')
  }
}
</script>

<style scoped>
.btn-next-participant,
.btn-next-participant:active {
  border: 1px solid #ebebeb;
  padding: 0 1.5rem;
  text-align: center;
  background-color: #292f33;
  font-family: Oswald, sans-serif;
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: 500;
  transition: all 0.3s ease;
  color: #fff;
}
.btn-next-participant:hover {
  background-color: #d82558;
  color: #fff;
}
.custom-radio-container {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  margin-top: 3rem;
}
.custom-checkbox {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}
.dotted-border {
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px dashed #dbdbdb;
}

.participant-name {
  font-size: 0.875rem;
}
.card {
  border: none;
  box-shadow: rgb(240, 240, 240) 0px 0px 6px;
  max-width: 1200px;
  padding: 1.25rem 2.25rem;
  border-radius: 0 !important;
}
.card-header {
  position: sticky;
  top: 130px;
  box-shadow: 0 20px 40px white;
}
.card-body:not(:first-of-type) {
  padding-top: 4rem;
}
.card-body:not(:last-of-type) {
  padding-bottom: 4rem;
}

form {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
}

label {
  display: flex;
  cursor: pointer;
  font-weight: 500;
  position: relative;
  overflow: hidden;
  margin-bottom: 0.375em;
}
label input {
  position: absolute;
  left: -9999px;
}
label input:checked + span:before {
  box-shadow: inset 0 0 0 0.35em #d82558;
}
label span {
  display: flex;
  align-items: center;
  padding: 0.375em;
  transition: 0.25s ease;
}

label span:before {
  display: flex;
  flex-shrink: 0;
  content: '';
  background-color: #fff;
  width: 1.2em;
  height: 1.2em;
  border-radius: 50%;
  margin-right: 1.5rem;
  transition: 0.25s ease;
  box-shadow: inset 0 0 0 0.125em #b4b4b4;
}
</style>
