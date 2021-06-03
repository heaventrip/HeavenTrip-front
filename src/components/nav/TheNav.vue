<template>
  <nav class="navbar navbar-expand-lg navbar-dark border-lg-0 main-navbar">
    <a class="navbar-brand pl-sm-5 pl-lg-0" href="/"><img class="logo" fluid :src="require('@/assets/images/logo.png')" /></a>
    <!-- NOTE MOBILE ONLY -->
    <a href="#" class="text-white ml-auto d-inline-block d-lg-none mail-btn">
      <img class="mail-icon" fluid :src="require('@/assets/images/svg/PICTO_CONTACT_MOBILE.svg')" data-toggle="modal" data-target="#profile" />
    </a>
    <a href="#" class="text-white user-circle d-lg-none">
      <i class="fa fa-user-circle mx-auto"></i>
    </a>
    <button class="navbar-toggler rounded-0 collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <!-- <span class="navbar-toggler-icon"></span> -->
      <img class="menu-icon mx-auto" fluid :src="require('@/assets/images/menu.png')" />
      <i class="fa fa-times cross-sym mx-auto"></i>
    </button>

    <div class="collapse navbar-collapse text-white" id="navbarSupportedContent">
      <div class="logged_in-div d-none align-items-center bg-white d-lg-none">
        <!-- d-flex -->
        <a href="#"><img class="menu-icon mr-4" fluid :src="require('@/assets/images/svg/PICTO_LOG_USER_PROFIL_SUB_MENU_2.svg')" /></a>
        <img fluid :src="require('@/assets/images/avatar.png')" class="d-block user_img rounded-circle" alt="..." />
        <h5 class="logged_in_name mb-0 text-uppercase">MARION <span>Klein</span></h5>
        <div class="position-relative ml-auto">
          <img class="picto-icon" fluid :src="require('@/assets/images/svg/PICTO_CHAT.svg')" />
          <div class="notify-number">1</div>
        </div>
      </div>
      <ul id="header_nav" class="navbar-nav mx-md-5 text-uppercase nav nav-pills mobile-navs">
        <li class="nav-item">
          <a @click.prevent="onClicked('activities')" class="nav-link" id="pills-activites-tab" data-toggle="pill" href="#pills-activites" role="tab" aria-controls="pills-activites" aria-selected="false"
            ><span>01</span> activites <i class="fas fa-chevron-right float-right nav-arrow d-block d-lg-none"></i
          ></a>
        </li>
        <li class="nav-item">
          <a @click.prevent="onClicked('destinations')" class="nav-link" id="pills-destination-tab" data-toggle="pill" href="#pills-destination" role="tab" aria-controls="pills-destination" aria-selected="false"
            ><span>02</span> destination <i class="fas fa-chevron-right float-right nav-arrow d-block d-lg-none"></i
          ></a>
        </li>
        <li class="nav-item">
          <a @click.prevent="onClicked('agency')" class="nav-link" id="pills-agence-tab" data-toggle="pill" href="#pills-agence" role="tab" aria-controls="pills-agence" aria-selected="false"><span>03</span> l'agence <i class="fas fa-chevron-right float-right nav-arrow d-block d-lg-none"></i></a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" id="pills-activity-tab" data-toggle="pill" href="#pills-activity" role="tab" aria-controls="pills-activity" aria-selected="true"><span>04</span> actualités <i class="fas fa-chevron-right float-right nav-arrow d-block d-lg-none"></i></a>
        </li>
      </ul>
      <button class="btn nav-btn btn-lg btn-outline-light text-uppercase d-none d-lg-inline-block">creer ton séjour</button>
      <div class="d-lg-none nav-btm-div d-none align-items-center">
        <!-- d-flex -->
        <a href="#" class="social-circle d-inline-block mr-3"><img class="img-fluid" fluid :src="require('@/assets/images/insta.png')" /></a>
        <a href="#" class="social-circle d-inline-block mr-3"><img class="img-fluid" fluid :src="require('@/assets/images/fb.png')" /></a>
        <span class="text-lowercase hashtag">#yourheaventrip</span>
        <a href="#" class="d-inline-block ml-auto hashtag active font-weight-normal">FR</a>
        <span class="mx-1 font-weight-bold">-</span>
        <a href="#" class="d-inline-block hashtag font-weight-normal">EN</a>
      </div>
      <div class="tab-content main-wrapper" :class="{ 'd-none': !navIsActive }">
        <div v-show="activitiesIsActive" id="pills-activites" role="tabpanel" aria-labelledby="pills-activites-tab" class="wrapper h-100 p-0 tab-pane fade black pt-lg-5 home-wrapper show active">
          <ActivitiesTab />
        </div>
        <div v-show="destinationsIsActive" id="pills-destination" role="tabpanel" aria-labelledby="pills-destination-tab" class="wrapper h-100 p-0 tab-pane fade black pt-lg-5 home-wrapper show active">
          <DestinationsTab />
        </div>
        <div v-show="agencyIsActive" id="pills-agence" role="tabpanel" aria-labelledby="pills-agence-tab" class="wrapper h-100 p-0 tab-pane fade home-wrapper show active">
          <AgencyTab ref="agencyTab" />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import AgencyTab from '@/components/nav/AgencyTab.vue'
import ActivitiesTab from '@/components/nav/ActivitiesTab.vue'
import DestinationsTab from '@/components/nav/DestinationsTab.vue'

export default {
  name: 'Nav',
  emits: ['changed-nav-status'],
  components: {
    AgencyTab,
    ActivitiesTab,
    DestinationsTab
  },
  data() {
    return {
      headerEl: '',
      activitiesIsActive: false,
      destinationsIsActive: false,
      agencyIsActive: false,
      bgFilter: {
        light: 'opacity(0.4)',
        dark: 'brightness(0.5)'
      }
    }
  },
  computed: {
    navIsActive() {
      return this.activitiesIsActive || this.destinationsIsActive || this.agencyIsActive
    }
  },
  watch: {
    navIsActive: function (newVal) {
      this.$emit('changed-nav-status', newVal)
    },
    activitiesIsActive: function (newVal) {
      if (newVal === true) this.changeBgFilter(this.bgFilter.dark)
    },
    destinationsIsActive: function (newVal) {
      if (newVal === true) this.changeBgFilter(this.bgFilter.dark)
    },
    agencyIsActive: function (newVal) {
      if (newVal === true) {
        this.changeBgFilter(this.bgFilter.light)
        document.body.style.position = 'fixed'
        document.querySelector('.search').style.visibility = 'hidden'
      }
      if (newVal === false) {
        document.body.style.position = 'static' // reset
        document.querySelector('.search').style.visibility = 'visible'
      }
    }
  },
  methods: {
    changeBgFilter(filter) {
      this.headerEl.style.filter = `blur(3px) ${filter}`
    },
    onClicked(tab) {
      // these must be reset so user lands back on menu later
      this.$refs.agencyTab.conceptIsActive = false
      this.$refs.agencyTab.teamIsActive = false
      this.$refs.agencyTab.contactIsActive = false

      let varName = tab + 'IsActive'

      // if already active do nothing
      // eslint-disable-next-line prettier/prettier
      if (this.$data[varName] === true) return

      // only show the one clicked
      ;['activitiesIsActive', 'destinationsIsActive', 'agencyIsActive'].forEach((el) => (this.$data[el] = false))
      this.$data[varName] = true
    }
  },
  mounted() {
    this.headerEl = document.querySelector('.header-bg-image')
  }
}
</script>

<style scoped>
.navbar {
  height: 70px; /* easier to manipulate with fixed height */
  z-index: 1;
}
.tab-content.main-wrapper {
  z-index: 1;
}
</style>
