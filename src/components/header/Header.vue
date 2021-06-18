<template>
  <div
    class="header d-flex flex-column text-white"
    :class="{
      'header--home': currentRoute('/'),
      'header-filter--home': !navIsActive && currentRoute('/'),
      'header-filter--grey': activitiesIsActive || destinationsIsActive,
      'header-filter--light': agencyIsActive,
      'header--search': currentRoute('/search'),
      'header-filter--search': !navIsActive && currentRoute('/search'),
      'header-filter--search--grey': (activitiesIsActive || destinationsIsActive) && currentRoute('/search'),
      'header-filter--search--light': agencyIsActive && currentRoute('/search'),
      'header--product': currentRoute('/product'),
      'header-filter--product': !navIsActive && currentRoute('/product'),
      'header-filter--product--grey': (activitiesIsActive || destinationsIsActive) && currentRoute('/product'),
      'header-filter--product--light': agencyIsActive && currentRoute('/product')
    }"
  >
    <div
      class="header-bg-container"
      :class="{
        'header-bg-container--home': currentRoute('/'),
        'header-bg-container--search': currentRoute('/search'),
        'header-bg-container--product': currentRoute('/product')
      }"
    >
      <img src="@/assets/images/combined.png" class="header-bg-image" :style="[navIsActive ? 'filter: blur(4px)' : '']" />
    </div>
    <ConnectionButtons />
    <TheNav @changed-nav-status="setNavStatus" @changed-tab="setActiveTab" />
    <HomeHeaderInfos @toggled-sessions="toggleSessions = true" v-if="currentRoute('/') && !navIsActive" />
    <ProductHeaderInfos v-else-if="currentRoute('/product') && !navIsActive" ref="productHeaderInfos" :course="course" />
    <SearchHeaderInfos v-else-if="currentRoute('/search') && !navIsActive" />
    <div class="search-div navbar-dark bg-white text-dark d-none">
      <div class="header-block text-uppercase d-flex justify-content-between align-items-center text-white">
        <h3 class="search-head">MA RECHERCHE</h3>
        <button class="rounded-0 btn search-cancel" type="button">
          <i class="fa fa-times cross-sym mx-auto"></i>
        </button>
      </div>
      <form class="d-flex justify-content-between align-items-center search-block">
        <input type="text" class="form-control border-0" name="" placeholder="Recherche manuelle" />
        <button class="rounded-0 btn" type="button">
          <img class="" fluid :src="require('@/assets/images/search.png')" />
        </button>
      </form>
      <ul class="navbar-nav inner-nav-list first p-0 chevron-list">
        <li class="nav-item selected">
          <a class="nav-link" href="#"><img class="mr-3 svg" fluid :src="require('@/assets/images/svg/Outline.svg')" /> <i class="fas fa-chevron-right chevron-right"></i> Février <i class="fa fa-times cross-sym ml-auto"></i></a>
        </li>
        <li class="nav-item selected">
          <a class="nav-link" href="#"><img class="mr-3 svg" fluid :src="require('@/assets/images/svg/Outline.svg')" /> <i class="fas fa-chevron-right chevron-right"></i> Kitesurf <i class="fa fa-times cross-sym ml-auto"></i></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><img class="mr-3 svg" fluid :src="require('@/assets/images/svg/Outline_dark.svg')" /> <i class="fas fa-chevron-right chevron-right"></i> Pays <i class="fa fa-chevron-right ml-auto"></i></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><img class="mr-3 svg" fluid :src="require('@/assets/images/svg/Outline_dark.svg')" /> <i class="fas fa-chevron-right chevron-right"></i> Niveau <i class="fa fa-chevron-right ml-auto"></i></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><img class="mr-3 svg" fluid :src="require('@/assets/images/svg/Outline_dark.svg')" /> <i class="fas fa-chevron-right chevron-right"></i> Dernières places <i class="fa fa-chevron-right ml-auto"></i></a>
        </li>
      </ul>
      <button class="result-btn btn btn-block btn-dark rounded-0 text-uppercase">Voir les résultats</button>
    </div>
    <div class="search-div navbar-dark bg-white text-dark d-none">
      <div class="header-block text-uppercase d-flex justify-content-between align-items-center text-white">
        <h3 class="search-head">MA RECHERCHE <span class="sub-head">activité</span></h3>
        <button class="rounded-0 btn search-cancel" type="button">
          <i class="fa fa-times cross-sym mx-auto"></i>
        </button>
      </div>
      <ul class="navbar-nav inner-nav-list first p-0">
        <li class="nav-item">
          <a class="nav-link" href="#"><img class="mr-3 svg" fluid :src="require('@/assets/images/svg/Outline_dark.svg')" /> <i class="fas fa-chevron-right chevron-right"></i> Kitesurf </a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" href="#"><img class="mr-3 svg" fluid :src="require('@/assets/images/svg/Outline.svg')" /> <i class="fas fa-chevron-right chevron-right"></i> Kitesurf </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><img class="mr-3 svg" fluid :src="require('@/assets/images/svg/Outline_dark.svg')" /> <i class="fas fa-chevron-right chevron-right"></i> Kitesurf </a>
        </li>
      </ul>
      <div class="content-div p-5">
        <p class="font-weight-bold">Slide droite vers la gauche avec un effet escalier (chaque ligne arrive en décalée) et une transition progressive sur l’opacité.</p>
        <p class="font-weight-bold">La validation d’un item fait office de validation Et permet de revenir à l’écran précédent.</p>
      </div>
    </div>
    <div class="pre-booking-footer sticky-bottom d-none d-lg-block" v-if="toggleSessions">
      <SessionsMenu />
    </div>
  </div>
</template>

<script>
import TheNav from '@/components/nav/TheNav.vue'
import ConnectionButtons from '@/components/connection/ConnectionButtons.vue'
import HomeHeaderInfos from './HomeHeaderInfos.vue'
import ProductHeaderInfos from '@/components/header/ProductHeaderInfos.vue'
import SearchHeaderInfos from '@/components/header/SearchHeaderInfos.vue'
import SessionsMenu from '@/components/SessionsMenu.vue'

export default {
  name: 'Header',
  components: {
    TheNav,
    ConnectionButtons,
    HomeHeaderInfos,
    ProductHeaderInfos,
    SearchHeaderInfos,
    SessionsMenu
  },
  props: ['course'],
  data() {
    return {
      token: true,
      toggleSessions: false,
      // navIsActive: false,
      agencyIsActive: false,
      destinationsIsActive: false,
      activitiesIsActive: false
    }
  },
  watch: {
    $route(to, from) {
      console.log('to', to)
      console.log('from', from)
    },
    navIsActive(newVal) {
      if (newVal === true) this.$emit('nav-is-active')
    }
  },
  computed: {
    navIsActive() {
      return this.activitiesIsActive || this.destinationsIsActive || this.agencyIsActive
    }
  },
  methods: {
    currentRoute(route) {
      return this.$route.path.includes(route)
    },
    setNavStatus(status) {
      this.navIsActive = status
    },
    setActiveTab(clickedTab) {
      let varName = clickedTab + 'IsActive'
      ;['activitiesIsActive', 'destinationsIsActive', 'agencyIsActive'].forEach((el) => (this.$data[el] = false))
      this.$data[varName] = true
    },
    logout(event) {
      localStorage.removeItem('user-token')
      window.location.reload()
    },
    // displayMenu(menu) {
    //   $('#pills-activites').removeClass('active')
    //   $('#pills-agence').removeClass('active')
    //   $('#pills-destination').removeClass('active')
    //   $(`#${menu}`).addClass('active')
    // },
    jquery() {
      $('.selection').select2({
        minimumResultsForSearch: Infinity
      })
      $('[data-toggle="tooltip"]').tooltip()
      $('.user-circle').hide()
      $('#navbarSupportedContent').on('shown.bs.collapse', function () {
        $('.navbar').css({
          'border-bottom': 'none',
          'background-color': '#292F33'
        })
        $('.user-circle').show()
        $('.header .navbar-dark .navbar-brand .logo').css('max-width', '100px')
        $('body').css('overflow', 'hidden')
      })
      $('#navbarSupportedContent').on('hidden.bs.collapse', function () {
        $('.navbar').css({
          'border-bottom': '1px solid hsla(0,0%,98%,.5)',
          'background-color': 'transparent'
        })
        $('.user-circle').hide()
        $('.header .navbar-dark .navbar-brand .logo').css('max-width', '130px')
        $('body').css('overflow', 'visible')
      })
    }
  },
  mounted() {
    var token_val = localStorage.getItem('user-token')
    if (!token_val) {
      this.token = false
    }
    this.jquery()

    // working contentful auth
    const client = this.$contentful.createClient({
      space: '4nx5joo7rzn4',
      accessToken: 'nbv0vn5HDMDtpCH4M8Z07vc-p6Zk6tCWt-1Z0YcUp9o'
    })
    client.getAsset('2tfU1nf8WzcYTiSlj6QpeQ').then((e) => console.log(e))
  }
}
</script>

<style scoped>
/* HOME */
.header--home {
  min-height: 94vh;
  padding-bottom: 13vh;
}
.header-filter--home::after {
  content: '';
  position: absolute;
  background: linear-gradient(to right, #5a3a5f 0%, #5a3a5f62 100%);
  opacity: 0.6;
  width: 100%;
  height: 94vh; /* corresponds height of image */
  z-index: -1;
  transition: background-color 0.5s ease-in;
}
.header-filter--grey::after {
  content: '';
  position: absolute;
  background-color: #292f33;
  opacity: 0.9;
  width: 100%;
  height: 94vh; /* corresponds height of image */
  z-index: -1;
  transition: background-color 0.5s ease-in-out;
}
.header-filter--light::after {
  content: '';
  position: absolute;
  background-color: #fff;
  opacity: 0.8;
  width: 100%;
  height: 94vh; /* corresponds height of image */
  z-index: -1;
  transition: background-color 0.5s ease-in-out;
}
/* SEARCH */
.header--search {
  height: 100vh;
  padding-bottom: 3vh;
}
.header-filter--search::after {
  content: '';
  position: absolute;
  background-color: #5a3a5fb3;
  /* opacity: 0.6; */
  width: 100%;
  height: 100vh; /* corresponds height of image */
  z-index: -1;
}
.header-filter--search--grey::after {
  content: '';
  position: absolute;
  background-color: #292f33;
  opacity: 0.9;
  width: 100%;
  height: 100vh; /* corresponds height of image */
  z-index: -1;
}
.header-filter--search--light::after {
  content: '';
  position: absolute;
  background-color: #fff;
  opacity: 0.8;
  width: 100%;
  height: 100vh; /* corresponds height of image */
  z-index: -1;
}
/* PRODUCT */
.header--product {
  height: 100vh;
  padding-bottom: 3vh;
}
.header-filter--product::after {
  content: '';
  position: absolute;
  background-color: #5a3a5fb3;
  /* opacity: 0.6; */
  width: 100%;
  height: 100vh; /* corresponds height of image */
  z-index: -1;
}
.header-filter--product--grey::after {
  content: '';
  position: absolute;
  background-color: #292f33;
  opacity: 0.9;
  width: 100%;
  height: 100vh; /* corresponds height of image */
  z-index: -1;
}
.header-filter--product--light::after {
  content: '';
  position: absolute;
  background-color: #fff;
  opacity: 0.8;
  width: 100%;
  height: 100vh; /* corresponds height of image */
  z-index: -1;
}
.header-bg-image {
  z-index: -1;
  object-fit: cover;
  height: 105%;
  width: 100%;
}
.header-bg-container {
  position: absolute;
  width: 100vw;
  overflow: hidden;
  z-index: -1;
}
.header-bg-container--home {
  height: 94vh;
}
.header-bg-container--product {
  height: 100vh;
}
.header-bg-container--search {
  height: 100%;
}
</style>
