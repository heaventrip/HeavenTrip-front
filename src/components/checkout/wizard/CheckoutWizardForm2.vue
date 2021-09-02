<template>
  <!-- NOTE RECAP BOOKING -->
  <div class="card completed rounded-0 mb-0 p-0">
    <div class="card-header rounded-0 border-0 p-0 d-flex">
      <h6 class="mb-0 text-uppercase font-weight-normal d-flex align-items-center check-head px-5 p-4 flex-1">
        <div class="participant-img-container position-relative">
          <img
            class="participant-img mr-3"
            fluid
            src="https://res.cloudinary.com/heaventrip/image/upload/v1624841583/yow5loelun43c3xbdbiw.jpg"
            style="height: 50px; border: 1px solid #292f33; box-shadow: none; outline: none"
          />
          <span class="participant-check" style="border: 4px solid #ebebeb"></span>
        </div>
        <strong class="participant-name h6 mb-0 font-weight-bold">{{ booker.infos.firstName }}</strong>
        <div class="completion-details">
          <ul class="completion-details-list mb-0 list-unstyled d-flex">
            <li>
              <h6 class="detail-head mb-0">chambre privé</h6>
              <p class="detail-desc mb-0">à partager avec Axel</p>
            </li>
            <li>
              <h6 class="detail-head mb-0">Matériel</h6>
              <p class="detail-desc mb-0">Avec location</p>
            </li>
            <li data-toggle="tooltip" data-placement="top" title="SUP-PADDLE - PLONGéE SOUS MARINE">
              <h6 class="detail-head mb-0">2 activités en +</h6>
              <p class="detail-desc mb-0">sélectionnées</p>
            </li>
          </ul>
        </div>
        <div class="ml-auto text-right check-amount-head">Mon séjour<br /><strong class="check-amount d-block mt-1">2 220 &euro;</strong></div>
      </h6>
      <div class="d-flex flex-column">
        <button class="btn text-uppercase personalize-btn rounded-0 border-0 px-4 flex-1">MODIFIER</button>
      </div>
    </div>
  </div>
  <div class="card completed rounded-0 mb-0 p-0" v-for="(extraParticipant, index) in localExtraParticipants" :key="extraParticipant">
    <div class="card-header rounded-0 border-0 p-0 d-flex">
      <h6 class="mb-0 text-uppercase font-weight-normal d-flex align-items-center check-head px-5 p-4 flex-1">
        <div class="participant-img-container position-relative">
          <InlineSvg :src="require('@/assets/svg/avatar-empty.svg')" height="50" style="margin-right: 1rem" fill="#292f33" />
        </div>
        <strong class="participant-name h6 mb-0 font-weight-bold">{{ extraParticipant.infos.firstName }}</strong>
        <div class="completion-details">
          <ul class="completion-details-list mb-0 list-unstyled d-flex">
            <li>
              <h6 class="detail-head mb-0">chambre privé</h6>
              <p class="detail-desc mb-0">à partager avec Axel</p>
            </li>
            <li>
              <h6 class="detail-head mb-0">Matériel</h6>
              <p class="detail-desc mb-0">Avec location</p>
            </li>
            <li data-toggle="tooltip" data-placement="top" title="SUP-PADDLE - PLONGéE SOUS MARINE">
              <h6 class="detail-head mb-0">2 activités en +</h6>
              <p class="detail-desc mb-0">sélectionnées</p>
            </li>
          </ul>
        </div>
        <div class="ml-auto text-right check-amount-head">Mon séjour<br /><strong class="check-amount d-block mt-1">2 220 &euro;</strong></div>
      </h6>
      <div class="d-flex flex-column">
        <button class="btn text-uppercase personalize-btn rounded-0 border-0 px-4 flex-1">MODIFIER</button>
        <button @click.prevent="localExtraParticipants.splice(index, 1)" class="btn text-uppercase personalize-btn rounded-0 border-0 px-4" style="margin-top: 1px">RETIRER</button>
      </div>
    </div>
  </div>
  <!-- NOTE ASSURANCES -->
  <div class="card mb-0 rounded-0 border-0 px-5">
    <div class="card-header border-0 p-0 d-flex">
      <h6 class="mb-0 text-uppercase font-weight-bold d-flex align-items-center check-head py-4 flex-1">
        <div style="font-size: 1rem; font-weight: 400">ASSURANCE DE :</div>
        <div class="ml-auto text-right" style="font-size: 1rem; font-weight: 800">{{ booker.infos.firstName }} {{ booker.infos?.lastName }}</div>
      </h6>
    </div>
    <div class="card-body border-top">
      <p class="font-weight-500">Choisissez votre formule d’assurance :</p>
      <div class="custom-radio-container assurance-radio-container">
        <div class="row">
          <div class="col-12 col-lg-6">
            <div class="custom-control p-0 pb-3 mt-2">
              <label class="" for="booker-ins1">
                <input v-model="localBooker.booking.insurance" value="ins1" type="radio" id="booker-ins1" name="insurance_plan_booker" class="custom-control p-0-input" />
                <span class="d-flex align-items-center mb-2 font-weight-bold" style="width: 90%"> Rapatriement&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;60&euro;/pers. </span>
              </label>
            </div>
            <ul class="pl-3 assurance-list font-weight-500">
              <img class="mb-3" fluid :src="require('@/assets/images/GEODESK_logo_Color.png')" style="height: 12px" />
              <li>Responsabilite civile</li>
              <li>Rapatriement</li>
              <li>Assistance medicale</li>
              <li>Assurance bagages</li>
              <li>Assistance voyage</li>
            </ul>
          </div>
          <div class="col-12 col-lg-6">
            <div class="custom-control p-0 pb-3 mt-2">
              <label class="" for="booker-ins2">
                <input v-model="localBooker.booking.insurance" value="ins2" type="radio" id="booker-ins2" name="insurance_plan_booker" class="custom-control p-0-input" />
                <span class="d-flex align-items-center mb-2 font-weight-bold" style="width: 90%"> Rapatriement&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;60&euro;/pers. </span>
              </label>
            </div>
            <ul class="pl-3 assurance-list font-weight-500">
              <img class="mb-3" fluid :src="require('@/assets/images/GEODESK_logo_Color.png')" style="height: 12px" />
              <li>Responsabilite civile</li>
              <li>Rapatriement</li>
              <li>Assistance medicale</li>
              <li>Assurance bagages</li>
              <li>Assistance voyage</li>
            </ul>
          </div>
          <div class="col-12">
            <div class="custom-control p-0 pb-2 mt-4">
              <label class="" for="booker-ins3">
                <input v-model="localBooker.booking.insurance" value="ins2" type="radio" id="booker-ins3" name="insurance_plan_booker" class="custom-control p-0-input" />
                <span class="d-flex align-items-center mb-2 font-weight-bold" style="width: 90%"> Je suis déjà assuré&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0&euro; </span>
              </label>
            </div>
            <p class="assurance-para font-weight-500">
              Si vous ne prenez pas d'assurances avec Heaven Trip, il vous sera demande de bien vouloir nous transmettre les informations de votre police d'assurance et les personnes a contacter en
              cas d'urgence
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="card mb-0 rounded-0 border-0 px-5" v-for="(extraParticipant, index) in localExtraParticipants" :key="extraParticipant">
    <div class="card-header border-0 p-0 d-flex">
      <h6 class="mb-0 text-uppercase font-weight-bold d-flex align-items-center check-head py-4 flex-1">
        <div style="font-size: 1rem; font-weight: 400">ASSURANCE DE :</div>
        <div class="ml-auto text-right" style="font-size: 1rem; font-weight: 800">{{ extraParticipant.infos.firstName }} {{ extraParticipant.infos?.lastName }}</div>
      </h6>
    </div>
    <div class="card-body border-top">
      <p class="font-weight-500">Choisissez votre formule d’assurance :</p>
      <div class="custom-radio-container assurance-radio-container">
        <div class="row">
          <div class="col-12 col-lg-5">
            <div class="custom-control p-0 pb-2 mt-4">
              <label class="" :for="`extraPart${index}-ins1`">
                <input v-model="extraParticipant.booking.insurance" type="radio" :id="`extraPart${index}-ins1`" :name="`insurance_plan_extraPart${index}`" class="custom-control p-0-input" />
                <span class="d-flex align-items-center mb-2 font-weight-bold dotted-border">
                  Rapatriment 60&euro;/pers.
                  <div class="ml-auto">
                    <img class="" fluid :src="require('@/assets/images/GEODESK_logo_Color.png')" />
                  </div>
                </span>
              </label>
            </div>
            <ul class="pl-3 assurance-list font-weight-500">
              <li>Responsabilite civile</li>
              <li>Rapatriement</li>
              <li>Assistance medicale</li>
              <li>Assurance bagages</li>
              <li>Assistance voyage</li>
            </ul>
          </div>
          <div class="col-12 col-lg-6 offset-lg-1">
            <div class="custom-control p-0 pb-3 mt-2 mb-4">
              <label class="" :for="`extraPart${index}-ins2`">
                <input v-model="extraParticipant.booking.insurance" type="radio" :id="`extraPart${index}-ins2`" :name="`insurance_plan_extraPart${index}`" class="custom-control p-0-input" />
                <span class="d-flex align-items-center mb-2 font-weight-bold dotted-border">
                  Rapatriment 60&euro;/pers.
                  <div class="ml-auto">
                    <img class="" fluid :src="require('@/assets/images/GEODESK_logo_Color.png')" />
                  </div>
                </span>
              </label>
            </div>
            <ul class="pl-3 assurance-list font-weight-500">
              <li>Responsabilite civile</li>
              <li>Rapatriement</li>
              <li>Assistance medicale</li>
              <li>Assurance bagages</li>
              <li>Assistance voyage</li>
            </ul>
          </div>
          <div class="col-12">
            <div class="custom-control p-0 pb-3 mt-2 mb-4">
              <label class="" :for="`extraPart${index}-ins3`">
                <input v-model="extraParticipant.booking.insurance" type="radio" :id="`extraPart${index}-ins3`" :name="`insurance_plan_extraPart${index}`" class="custom-control p-0-input" />
                <span class="d-flex align-items-center mb-2 font-weight-bold dotted-border">
                  Rapatriment 60&euro;/pers.
                  <div class="ml-auto">
                    <img class="" fluid :src="require('@/assets/images/GEODESK_logo_Color.png')" />
                  </div>
                </span>
              </label>
            </div>
            <p class="assurance-para font-weight-500">
              Si vous ne prenez pas d'assurances avec Heaven Trip, il vous sera demande de bien vouloir nous transmettre les informations de votre police d'assurance et les personnes a contacter en
              cas d'urgence
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CheckoutWizardForm2',
  props: ['booker', 'extra-participants', 'course'],
  emits: ['complete', 'updated-booker', 'updated-participants'],
  data() {
    return {
      localBooker: this.$props.booker,
      localExtraParticipants: this.$props.extraParticipants
    }
  },
  computed: {
    filled() {
      if (this.localExtraParticipants.length) return this.bookerInsuranceFilled && this.participantsInsuranceFilled
      else return this.bookerInsuranceFilled
    },
    bookerInsuranceFilled() {
      return ['ins1', 'ins2', 'ins3'].includes(this.localBooker.booking.insurance)
    },
    participantsInsuranceFilled() {
      let insurancesArr = this.localExtraParticipants.map((part) => part.booking.insurance)
      return insurancesArr.every((el) => el)
    }
  },
  watch: {
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
  }
}
</script>

<style scoped>
.personalize-btn,
.personalize-btn:active {
  background-color: #292f33;
}
.personalize-btn:hover {
  background-color: #d82558;
  color: white;
}
.card {
  border: none;
  box-shadow: rgb(240, 240, 240) 0px 0px 6px;
  border-radius: 0 !important;
  margin-top: 2rem;
  padding: 1.25rem 1.5rem;
}
.card-body {
  padding-left: 0;
  padding-right: 0;
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
  margin-right: 0.5rem;
  transition: 0.25s ease;
  box-shadow: inset 0 0 0 0.125em #b4b4b4;
}
</style>
