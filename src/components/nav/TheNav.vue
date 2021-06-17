<template>
  <nav class="navbar navbar-expand-lg navbar-dark border-lg-0 main-navbar align-items-start">
    <a class="navbar-brand pl-sm-5 pl-lg-0" href="/">
      <InlineSvg v-if="agencyIsActive" :src="require('@/assets/svg/logo-dark.svg')" width="180" />
      <InlineSvg v-else :src="require('@/assets/svg/logo-white.svg')" width="180" />
    </a>
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
          <a @click.prevent="onClicked('activities')" class="nav-link" id="pills-activites-tab" data-toggle="pill" href="#pills-activites"><span>01</span> activites <i class="fas fa-chevron-right float-right nav-arrow d-block d-lg-none"></i></a>
        </li>
        <li class="nav-item">
          <a @click.prevent="onClicked('destinations')" class="nav-link" id="pills-destination-tab" data-toggle="pill" href="#pills-destination"><span>02</span> destination <i class="fas fa-chevron-right float-right nav-arrow d-block d-lg-none"></i></a>
        </li>
        <li class="nav-item">
          <a @click.prevent="onClicked('agency')" class="nav-link" id="pills-agence-tab" data-toggle="pill" href="#pills-agence"><span>03</span> l'agence <i class="fas fa-chevron-right float-right nav-arrow d-block d-lg-none"></i></a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" id="pills-activity-tab" data-toggle="pill" href="#pills-activity"><span>04</span> actualités <i class="fas fa-chevron-right float-right nav-arrow d-block d-lg-none"></i></a>
        </li>
      </ul>
      <button v-if="agencyIsActive" class="btn nav-btn btn-lg text-uppercase d-none d-lg-inline-block" style="border: 1px solid #292f33">creer ton séjour</button>
      <button v-else class="btn nav-btn btn-lg btn-outline-light text-uppercase d-none d-lg-inline-block">creer ton séjour</button>
      <ul v-if="activitiesIsActive && sportCategories !== []" class="nav navbar-nav border-0 mobile-navs" id="activites_pills_tab" style="position: relative; left: 3rem; z-index: 2; width: max-content; margin-top: 2rem">
        <li class="nav-item" role="presentation">
          <a @click="$refs.activitiesTab.activeCategory = sportCategories[0]?.name" class="nav-link active text-uppercase subactivity-nav__item" style="border-bottom: none !important" id="v-pills-vent-mer-tab" data-toggle="pill" href="#v-pills-vent-mer">{{ sportCategories[0]?.name }}</a>
        </li>
        <li class="nav-item" role="presentation">
          <a @click="$refs.activitiesTab.activeCategory = sportCategories[1]?.name" class="nav-link text-uppercase subactivity-nav__item" style="border-bottom: none !important" id="v-pills-montagne-tab" data-toggle="pill" href="#v-pills-montagne">{{ sportCategories[1]?.name }}</a>
        </li>
        <li class="nav-item" role="presentation">
          <a @click="$refs.activitiesTab.activeCategory = sportCategories[2]?.name" class="nav-link text-uppercase subactivity-nav__item" style="border-bottom: none !important" id="v-pills-pied-tab" data-toggle="pill" href="#v-pills-pied">{{ sportCategories[2]?.name }}</a>
        </li>
        <li class="nav-item" role="presentation">
          <a @click="$refs.activitiesTab.activeCategory = sportCategories[3]?.name" class="nav-link text-uppercase subactivity-nav__item" style="border-bottom: none !important" id="v-pills-multi-acti-tab" data-toggle="pill" href="#v-pills-multi-acti">{{ sportCategories[3]?.name }}</a>
        </li>
        <li class="nav-item" role="presentation">
          <a @click="$refs.activitiesTab.activeCategory = sportCategories[4]?.name" class="nav-link text-uppercase subactivity-nav__item" style="border-bottom: none !important" id="v-pills-bien-tab" data-toggle="pill" href="#v-pills-bien">{{ sportCategories[4]?.name }}</a>
        </li>
        <li class="nav-item" role="presentation">
          <a @click="$refs.activitiesTab.activeCategory = sportCategories[5]?.name" class="nav-link text-uppercase subactivity-nav__item" style="border-bottom: none !important" id="v-pills-neige-tab" data-toggle="pill" href="#v-pills-neige">{{ sportCategories[5]?.name }}</a>
        </li>
      </ul>
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
        <div v-show="activitiesIsActive" id="pills-activites" class="wrapper h-100 p-0 tab-pane black pt-lg-5 home-wrapper show active">
          <ActivitiesTab ref="activitiesTab" />
        </div>
        <div v-show="destinationsIsActive" id="pills-destination" class="wrapper h-100 p-0 tab-pane black pt-lg-5 home-wrapper show active">
          <DestinationsTab />
        </div>
        <div v-show="agencyIsActive" id="pills-agence" class="wrapper h-100 p-0 tab-pane home-wrapper show active">
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
  emits: ['changed-nav-status', 'changed-tab'],
  components: {
    AgencyTab,
    ActivitiesTab,
    DestinationsTab
  },
  data() {
    return {
      // headerEl: '',
      activitiesIsActive: false,
      destinationsIsActive: false,
      agencyIsActive: false,
      sportCategories: []
      // bgFilter: {
      //   light: 'opacity(0.4)',
      //   dark: 'brightness(0.5)'
      // }
    }
  },
  computed: {
    navIsActive() {
      return this.activitiesIsActive || this.destinationsIsActive || this.agencyIsActive
    }
  },
  watch: {
    // navIsActive: function (newVal) {
    //   this.$emit('changed-nav-status', newVal)
    // },
    activitiesIsActive: function (newVal) {
      if (newVal === true) {
        this.$emit('changed-tab', 'activities')
        // this.changeBgFilter(this.bgFilter.dark)
      }
    },
    destinationsIsActive: function (newVal) {
      if (newVal === true) {
        this.$emit('changed-tab', 'destinations')
        // this.changeBgFilter(this.bgFilter.dark)
      }
    },
    agencyIsActive: function (newVal) {
      if (newVal === true) {
        this.$emit('changed-tab', 'agency')
        // this.changeBgFilter(this.bgFilter.light)
        document.body.style.position = 'fixed'
        document.querySelector('#header_nav').style.borderBottom = '1px solid #292f3399'
        document.querySelectorAll('.navbar-nav .nav-link').forEach((el) => {
          el.classList.toggle('navbar-grey', true)
          el.style.color = '#292f33'
        })
      }
      if (newVal === false) {
        document.body.style.position = 'static' // reset
        document.querySelector('#header_nav').removeAttribute('style')
        document.querySelectorAll('.navbar-nav .nav-link').forEach((el) => {
          el.classList.toggle('navbar-grey', false)
          el.style.color = '#fff'
        })
      }
    }
  },
  methods: {
    changeBgFilter(filter) {
      this.headerEl.style.filter = 'blur(3px)'
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
    // this.headerEl = document.querySelector('.header-bg-image')
  }
}
</script>

<style scoped>
#navbarSupportedContent {
  flex-wrap: wrap;
  align-items: flex-start;
  padding-right: 30%;
}
.subactivity-nav__item {
  color: rgba(250, 250, 250, 0.3) !important;
  border: none !important;
  font-family: Muli, sans-serif !important;
}
.subactivity-nav__item.active {
  font-weight: 800 !important;
  color: white !important;
}
.subactivity-nav__item:hover {
  color: white !important;
}
.navbar {
  height: 70px; /* easier to manipulate with fixed height */
  z-index: 1;
}
.tab-content.main-wrapper {
  z-index: 1;
}
</style>
