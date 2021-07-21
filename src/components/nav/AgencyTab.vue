<template>
  <NavConcept v-if="conceptIsActive" />
  <NavTeam v-else-if="teamIsActive" />
  <NavContact v-else-if="contactIsActive" />
  <div v-else class="d-flex agency-content-wrapper flex-column justify-content-center">
    <div class="row no-gutters justify-content-center align-items-center">
      <div class="col-3">
        <div class="row align-items-center text-center">
          <div class="big-letters">
            HE<button @click.prevent="onClicked('concept')" class="btn choose-btn agency-btn d-inline align-text-bottom">LE CONCEPT</button>
            <div class="text-content concept">Si tu as besoin de conseils, de renseignements tu peux nous joindre par téléphone, formulaire ou via les réseaux sociaux</div>
          </div>
        </div>
      </div>
      <div class="col-3">
        <div class="row align-items-center text-center">
          <div class="big-letters">
            AV<button @click.prevent="onClicked('team')" class="btn choose-btn agency-btn d-inline align-text-bottom">LA TEAM</button>
            <div class="text-content team">Si tu as besoin de conseils, de renseignements tu peux nous joindre par téléphone, formulaire ou via les réseaux sociaux</div>
          </div>
        </div>
      </div>
      <div class="col-3">
        <div class="row align-items-center text-center">
          <div class="big-letters">
            EN<button @click.prevent="onClicked('contact')" class="btn choose-btn agency-btn d-inline align-text-bottom">CONTACT</button>
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
      <InlineSvg :src="require('@/assets/svg/left-quote.svg')" height="50" opacity="0.06" style="transform: translateY(-50%)" />
      <div class="text-center">
        Heaven Trip c'est pas juste une nouvelle agence de voyage, c'est la rencontre de deux passionnés qui veulent reconnecter les uns aux autres <br />à travers des expériences concentrées sur l'humain, et le dépassement de soi. Ici, on valorise ce que tu veux devenir et non ce que tu es.
      </div>
      <InlineSvg :src="require('@/assets/svg/right-quote.svg')" height="50" opacity="0.06" style="transform: translateY(50%)" />
    </div>
  </div>
</template>

<script>
// eslint-disable prettier/prettier
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
      conceptIsActive: false,
      teamIsActive: false,
      contactIsActive: false
    }
  },
  computed: {
    tabsActive() {
      return this.conceptIsActive || this.teamIsActive || this.contactIsActive
    }
  },
  watch: {
    tabsActive(newVal) {
      let visibility = newVal === true ? 'hidden' : 'visible'
      if (document.querySelector('.search')) {
        document.querySelector('.search').style.visibility = visibility
      }
    },
    conceptIsActive(newVal) {
      if (newVal === true) {
        document.querySelector('nav').style.position = 'static'
        document.querySelector('.header-bg-image').style.filter = 'opacity(0)'
        document.querySelector('.tab-content.main-wrapper').style.top = '0px'
        document.querySelector('.tab-content.main-wrapper').style.zIndex = '-1'
        document.querySelector('.navbar-nav').style.position = 'absolute'
        document.querySelector('.navbar-nav').style.left = 'calc(100vw / 12 * 5)' // line up with col-5
      }
      if (newVal === false) {
        document.querySelector('nav').style.position = 'relative' // reset
        document.querySelector('.tab-content.main-wrapper').style.top = '8vh' // initial
        document.querySelector('.tab-content.main-wrapper').style.zIndex = '1' // initial
        document.querySelector('.navbar-nav').style.position = 'unset' // initial
        document.querySelector('.navbar-nav').style.left = 'unset'
      }
    }
  },
  methods: {
    resetTabs() {
      ;['conceptIsActive', 'teamIsActive', 'contactIsActive'].forEach((el) => (this.$data[el] = false))
    },
    onClicked(tab) {
      let varName = tab + 'IsActive'

      // if already active do nothing
      // eslint-disable-next-line prettier/prettier
      if (this.$data[varName] === true) return

      // only show the one clicked
      this.resetTabs()
      this.$data[varName] = true
    }
  }
}
</script>

<style scoped>
.navbar-nav .nav-link:hover {
  border-bottom: 1px solid red !important;
}
.big-letters {
  position: relative;
  font-size: 220px;
  font-weight: 700;
  color: #292f330d;
}
.choose-btn {
  font-weight: bold;
  border: 1px solid #292f3399;
  border-radius: 0;
  padding: 0.5rem 1.5rem;
  margin-left: 10px;
  position: relative;
  bottom: 62px; /** line-height + padding-y */
  color: #292f33;
  letter-spacing: 0.5px;
  font-size: 0.875rem;
}
.agency-btn {
  background-color: transparent;
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
}
</style>
