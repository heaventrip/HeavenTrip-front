<template>
  <!-- eslint-disable vue/no-mutating-props -->
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
  <div class="card card-header border-0 p-0 flex-row align-items-center pb-3" style="display: flex; flex-wrap: wrap; outline: 5px solid white; z-index: 15">
    <div class="position-relative">
      <h6 class="font-weight-normal mb-0 d-inline-block bg-white pr-3 position-relative text-uppercase">Complète la réservation de :</h6>
    </div>
    <div class="d-inline-block mr-auto" style="flex-grow: 0.9; height: 1px; background-color: #ebebeb"></div>
    <div class="participant-img-container participant-opacity position-relative">
      <div class="d-inline-block" style="position: relative; margin-left: 3rem">
        <img class="participant-img mr-3" fluid :src="require('@/assets/images/ui_faces/1.jpg')" style="height: 50px" />
        <span class="participant-check"></span>
      </div>
      <strong class="text-uppercase participant-name h6 mb-0 font-weight-bold" style="display: inline; vertical-align: middle">{{ booker.infos.firstName || 'Participant 1' }}</strong>
    </div>
    <div class="participant-add position-relative d-flex align-items-center" :class="[extraParticipantForHeader === extraParticipant ? '' : 'participant-opacity']" v-for="(extraParticipantForHeader, index) in extraParticipants" :key="extraParticipantForHeader">
      <i class="fa fa-caret-right mx-3 small align-baseline caret-icon"></i>
      <InlineSvg :src="require('@/assets/svg/avatar-empty.svg')" class="mr-2" height="50" fill="#292f33" />
      <strong class="text-uppercase participant-name h6 mb-0 font-weight-bold">{{ extraParticipantForHeader.infos.firstName || `Participant ${index + 2}` }}</strong>
    </div>
  </div>
  <!-- NOTE booker -->
  <div class="card d-block px-5" :class="[localExtraParticipants.length > 0 ? '' : 'mb-5']">
    <div class="card-body">
      <h6 class="font-weight-bold">Quel type de chambre :</h6>
      <p class="font-weight-500" style="font-family: 0.875rem">Dans la limite des stocks disponibles !</p>
      <div class="custom-radio-container">
        <div class="custom-control" v-for="(room, index) in course.rooms" :key="room">
          <label class="">
            <input v-model="localBooker.booking.room" :value="index" type="radio" :id="`bookerRoom${index}`" :name="`bookerRoom${index}`" class="" />
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
      <p class="font-weight-500" style="font-family: 0.875rem">Matériel correspondant uniquement a tan activité principale</p>
      <div class="custom-radio-container">
        <div class="custom-control">
          <label class="" for="customRadio5">
            <input v-model="localBooker.booking.equipmentRental" :value="true" type="radio" id="customRadio5" name="materielBooker" class="" />
            <span class="d-flex align-items-center w-100 dotted-border">
              <div>
                <div class="font-weight-bold text-uppercase">avec materiel</div>
                <p class="font-weight-500 mb-0">Je voyage léger</p>
              </div>
              <div class="ml-auto font-weight-bold text-uppercase">inclus</div>
            </span>
          </label>
        </div>
        <div class="custom-control">
          <label class="" for="customRadio6">
            <input v-model="localBooker.booking.equipmentRental" :value="false" type="radio" id="customRadio6" name="materielBooker" class="" />
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
      <div class="custom-radio-container inline-blocks py-3">
        <div class="custom-control custom-radio bg-light rounded border mb-3">
          <label class="d-flex align-items-center border-0 m-0" for="customRadio7">
            <input v-model="localBooker.booking.extraActivities" value="1" type="checkbox" id="customRadio7" class="" :disabled="localBooker.booking.noExtraActivities" />
            <span class="font-weight-bold text-uppercase">
              <div style="margin-right: 2.25rem">sup-paddle</div>
              <div class="border-left pl-4">+ 60&euro;<small class="text-lowercase">/pers.</small></div>
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
    <div class="card-body border-top d-none">
      <h6 class="font-weight-bold text-uppercase mb-1">infos a savoir</h6>
      <p class="font-weight-500" style="font-family: 0.875rem">Tu peux exprimer une demande specifique ou nous alerter sur tes allergies alimentaires etc...</p>
      <textarea class="form-control info-textarea bg-light p-4 mb-4 mt-5" rows="5">Fais-toi plaisir !</textarea>
      <button class="btn btn-danger text-uppercase shadow p-3 px-4 continue-btn">continuer</button>
    </div>
    <div class="card-body border-top">
      <h6 class="font-weight-bold text-uppercase">infos a savoir</h6>
      <p class="font-weight-500" style="font-family: 0.875rem">Tu peux exprimer une demande specifique ou nous alerter sur tes allergies alimentaires etc...</p>
      <textarea v-model="localBooker.booking.extraNotes" class="form-control info-textarea bg-light p-4 mb-4 mt-5" rows="5">Fais-toi plaisir !</textarea>
    </div>
  </div>
  <!-- NOTE extras -->
  <div class="card d-block px-5 mb-5" v-for="(extraParticipant, mainLoopIndex) in localExtraParticipants" :key="extraParticipant">
    <div class="card-body">
      <h6 class="font-weight-bold">Quel type de chambre :</h6>
      <p class="font-weight-500">Dans la limite des stocks disponibles !</p>
      <div class="custom-radio-container">
        <div class="custom-control" v-for="(room, index) in course.rooms" :key="room">
          <label class="">
            <input v-model="extraParticipant.booking.room" :value="index" type="radio" :id="`extraPart${mainLoopIndex}-${index}`" :name="`extraPartRoom${mainLoopIndex}-${index}`" class="" />
            <div class="d-flex align-items-center w-100" :class="{ 'dotted-border': index !== course.rooms.length - 1 }">
              <span>
                <div class="font-weight-bold text-uppercase">{{ room.title }}</div>
                <p class="font-weight-500 mb-0">{{ room.subtitle }}</p>
              </span>
              <div class="avalaible-mem col-6 justify-content-center align-items-center" v-if="room.is_sharable">
                <p class="font-weight-500 mb-0">A partager avec :</p>
                <select v-model="extraParticipant.booking.roomMate" class="form-control col-5 ml-3 text-capitalize custom-select">
                  <option>{{ booker.infos.firstName }}</option>
                  <option :disabled="extraParticipantForName === extraParticipant ? true : false" v-for="extraParticipantForName in localExtraParticipants" :key="extraParticipantForName">{{ extraParticipantForName.infos.firstName }}</option>
                </select>
              </div>
              <div class="ml-auto font-weight-bold text-uppercase">+ {{ room.price }} &euro;</div>
            </div>
          </label>
        </div>
      </div>
    </div>
    <div class="card-body border-top">
      <h6 class="font-weight-bold">Avec ou sans location matériel :</h6>
      <p class="font-weight-500">Matériel correspondant uniquement a tan activité principale</p>
      <div class="custom-radio-container">
        <div class="custom-control">
          <label class="">
            <div class="d-flex align-items-center pb-3 mb-3 dotted-border w-100">
              <input v-model="extraParticipant.booking.equipmentRental" :value="true" type="radio" :id="`extraPart${mainLoopIndex}-with`" :name="`material-extraPart${mainLoopIndex}`" class="" />
              <span>
                <div class="font-weight-bold text-uppercase">avec materiel</div>
                <p class="font-weight-500 mb-0">Je voyage lègé</p>
              </span>
              <div class="ml-auto font-weight-bold text-uppercase">inclus</div>
            </div>
          </label>
        </div>
        <div class="custom-control">
          <label class="">
            <input v-model="extraParticipant.booking.equipmentRental" :value="false" type="radio" :id="`extraPart${mainLoopIndex}-without`" :name="`material-extraPart${mainLoopIndex}`" class="" />
            <div class="d-flex align-items-center w-100">
              <span>
                <div class="font-weight-bold text-uppercase">sans materiel</div>
                <p class="font-weight-500 mb-0">Je préfére venir avec mon matos !</p>
              </span>
              <div class="ml-auto font-weight-bold text-uppercase">reduction de 380 &euro;</div>
            </div>
          </label>
        </div>
      </div>
    </div>
    <div class="card-body border-top">
      <h6 class="font-weight-bold">Activites en +</h6>
      <p class="font-weight-500">Vous pouvez sélectionner plusieurs activités</p>
      <div class="custom-radio-container inline-blocks py-3">
        <div class="custom-control custom-radio bg-light rounded border">
          <label class="d-flex align-items-center border-0" for="customRadio8">
            <input v-model="extraParticipant.booking.extraActivities" value="1" type="checkbox" id="customRadio8" class="" :disabled="extraParticipant.booking.noExtraActivities" />
            <div class="font-weight-bold text-uppercase">
              sup-paddle<span class="border-left">+ 60&euro;<small class="text-lowercase">/pers.</small></span>
            </div>
          </label>
        </div>
      </div>
      <div class="col-12 p-0">
        <div class="custom-control custom-checkbox other-activity-check">
          <label class="mb-0" for="exampleCheck4" style="font-weight: 400">je ne souhaite pas d'autres activites</label>
          <input v-model="extraParticipant.booking.noExtraActivities" type="checkbox" class="" id="exampleCheck4" />
        </div>
      </div>
    </div>

    <div class="card-body border-top d-none">
      <h6 class="font-weight-bold text-uppercase mb-1">infos a savoir</h6>
      <p class="font-weight-500">Tu peux exprimer une demande specifique ou nous alerter sur tes allergies alimentaires etc...</p>
      <textarea class="form-control info-textarea bg-light p-4 mb-4 mt-5" rows="5">Fais-toi plaisir !</textarea>
      <button class="btn btn-danger text-uppercase shadow p-3 px-4 continue-btn">continuer</button>
    </div>
    <div class="card-body border-top">
      <h6 class="font-weight-bold text-uppercase mb-1">infos a savoir</h6>
      <p class="font-weight-500">Tu peux exprimer une demande specifique ou nous alerter sur tes allergies alimentaires etc...</p>
      <textarea v-model="extraParticipant.booking.extraNotes" class="form-control info-textarea bg-light p-4 mb-4 mt-5" rows="5">Fais-toi plaisir !</textarea>
    </div>
  </div>
  <div class="card p-0" style="position: relative" v-if="localExtraParticipants.length">
    <div @click="addParticipant" class="btn-next-participant" type="button">
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
  props: ['booker', 'extra-participants', 'course'],
  data() {
    return {
      localBooker: this.$props.booker,
      localExtraParticipants: this.$props.extraParticipants
    }
  },
  methods: {
    filled() {
      console.log(this.bookerBookingFilled, this.participantsBookingFilled)
      return this.bookerBookingFilled() && this.participantsBookingFilled()
    },
    bookerBookingFilled() {
      return Object.values(this.localBooker.booking).every((el) => el && el.length !== 0)
    },
    participantsBookingFilled() {
      let arr = new Array()
      this.localExtraParticipants.forEach((part) => arr.concat(Object.values(part.booking)))
      return arr.every((el) => el && el.length !== 0)
    }
  },
  watch: {
    booker(v) {
      console.log(v)
    },
    extraParticipants(v) {
      console.log(v)
    },
    filled(val) {
      if (val) this.$emit('complete')
      else this.$emit('incomplete')
    },
    localBooker: {
      deep: true,
      handler(val) {
        console.log(val, this.bookerBookingFilled())
        this.$emit('updated-booker', val)
      }
    },
    localExtraParticipants: {
      deep: true,
      handler(val) {
        console.log(val, this.participantsBookingFilled())
        this.$emit('updated-participants', val)
      }
    }
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
.card-booker {
  background-color: #ebebeb38;
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
  /* Accessible outline */
  /* Remove comment to use */
  /*
  	&:focus-within {
  			outline: .125em solid $primary-color;
  	}
  */
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
