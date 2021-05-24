<template>
  <div class="header d-flex flex-column text-white">
    <img src="@/assets/images/combined.png" class="header-bg-image" />
    <ConnectionButtons />
    <TheNav @changed-nav-status="setNavStatus" />
    <HomeHeaderInfos v-if="$route.name == 'Home' && !navIsActive" />
    <ProductHeaderInfos v-else-if="$route.name == 'ProductHome' && !navIsActive" />
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
  </div>
  <div class="pre-booking-footer sticky-bottom d-none d-lg-block" v-if="toggleSessions">
    <SessionsMenu />
  </div>
</template>

<script>
import TheNav from '@/components/nav/TheNav.vue'
import ConnectionButtons from '@/components/connection/ConnectionButtons.vue'
import HomeHeaderInfos from './HomeHeaderInfos.vue'
import ProductHeaderInfos from '@/components/product/ProductHeaderInfos.vue'
import SessionsMenu from '@/components/SessionsMenu.vue'

export default {
  name: 'Header',
  components: {
    TheNav,
    ConnectionButtons,
    HomeHeaderInfos,
    ProductHeaderInfos,
    SessionsMenu
  },
  data() {
    return {
      token: true,
      toggleSessions: false,
      navIsActive: false
    }
  },
  methods: {
    setNavStatus(status) {
      this.navIsActive = status
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
  }
}
</script>

<style scoped>
.header {
  min-height: 94vh;
  padding-bottom: 15vh;
}
.header-bg-image {
  object-fit: cover;
  position: absolute;
  height: 94vh;
  width: 100%;
  z-index: -1;
}
.pre-booking-footer {
  bottom: 0;
}
</style>
