<template>
  <!-- NOTE toggled dnone -->
  <div class="agency-content-wrapper d-none flex-column justify-content-center">
    <div class="row no-gutters justify-content-center align-items-center">
      <div class="col-3">
        <div class="row align-items-center text-center">
          <div class="big-letters">
            HE<button @click="onClicked('concept')" class="btn choose-btn d-inline align-text-bottom">LE CONCEPT</button>
            <div class="text-content concept">Si tu as besoin de conseils, de renseignements tu peux nous joindre par téléphone, formulaire ou via les réseaux sociaux</div>
          </div>
        </div>
      </div>
      <div class="col-3">
        <div class="row align-items-center text-center">
          <div class="big-letters">
            AV<button @click="onClicked('team')" class="btn choose-btn d-inline align-text-bottom">LA TEAM</button>
            <div class="text-content team">Si tu as besoin de conseils, de renseignements tu peux nous joindre par téléphone, formulaire ou via les réseaux sociaux</div>
          </div>
        </div>
      </div>
      <div class="col-3">
        <div class="row align-items-center text-center">
          <div class="big-letters">
            EN<button @click="onClicked('contact')" class="btn choose-btn d-inline align-text-bottom">CONTACT</button>
            <div class="text-content team">Si tu as besoin de conseils, de renseignements tu peux nous joindre par téléphone, formulaire ou via les réseaux sociaux</div>
          </div>
        </div>
      </div>
      <!-- <div class="col-3">
        <div class="row align-items-center text-center">
          <div class="big-letters">
            EN<button @click="onClicked('contact')" class="btn choose-btn d-inline align-text-bottom">NOUS CONTACTER</button>
            <div class="text-content contact">Si tu as besoi dsdzd dz ar téléphone, formulaire ou via les réseaux sociaux</div>
          </div>
        </div>
      </div> -->
    </div>
    <div class="row justify-content-center bottom-text">
      <div class="text-center">
        Heaven Trip c'est pas juste une nouvelle agence de voyage, c'est la rencontre de deux passionnés qui veulent reconnecter les uns aux autres <br />à travers des expériences concentrées sur l'humain, et le dépassement de soi. Ici, on valorise ce que tu veux devenir et non ce que tu es.
      </div>
    </div>
  </div>
  <NavConcept />
  <NavTeam v-show="false" />
  <NavContact v-show="false" />
</template>

<script>
import NavConcept from '@/components/nav/NavConcept.vue'
import NavTeam from '@/components/nav/NavTeam.vue'
import NavContact from '@/components/nav/NavContact.vue'

export default {
  name: 'AgencyTab',
  components: {
    NavConcept,
    NavTeam,
    NavContact
  },
  data() {
    return {
      agencyIsActive: true,
      conceptIsActive: false,
      teamIsActive: false,
      contactIsActive: false
    }
  },
  methods: {
    onClicked(tab) {
      let varName = tab + 'IsActive'
      if (this.$data[varName] === true) return // if already active do nothing
      ;[this.agencyIsActive, this.conceptIsActive, this.teamIsActive, this.contactIsActive].forEach((el) => (el = false))
      this.$data[varName] = true
    }
  }
}
</script>

<style scoped>
.big-letters {
  position: relative;
  font-size: 220px;
  font-weight: 700;
  color: #292f330d;
}
.choose-btn {
  font-weight: bold;
  border: 1px solid #292f33;
  border-radius: 0;
  padding: 0.5rem 1.5rem;
  margin-left: 10px;
  position: relative;
  bottom: 62px; /** line-height + padding-y */
  color: #292f33;
  letter-spacing: 0.5px;
  font-size: 0.875rem;
}
.text-content {
  position: absolute;
  right: -90px;
  bottom: 45%;
  color: #292f33;
  font-size: 0.8rem;
  font-weight: 100;
  font-family: Muli, sans-serif;
  max-width: 300px;
  line-height: 1.8;
}
.bottom-text {
  color: #292f3333;
  font-size: 0.8rem;
  font-weight: bold;
  line-height: 1.8;
  letter-spacing: 0.2px;
  margin-top: 10vh;
}
.agency-content-wrapper {
  height: calc(100% - 10vh);
  position: relative;
  top: -5vh;
}
</style>
