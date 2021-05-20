<template>
  <div>
    <header class="header bg-dark text-white p-0">
      <div class="container-fluid p-0">
        <div class="header-part">
          <ul class="list-unstyled mb-0 ml-auto d-none d-lg-flex text-uppercase profile-menu float-right">
            <li v-if="token">
              <a v-on:click="logout()" class="text-reset pr-4" data-toggle="modal" data-target="#login">se déconnecter</a>
            </li>
            <li v-else>
              <a href="/" class="text-reset pr-4" data-toggle="modal" data-target="#login">se connecter</a>
            </li>
            <li>
              <a href="#" class="text-reset pl-3 profile-link font-weight-bold" data-toggle="modal" data-target="#profile">creér son profil</a>
            </li>
          </ul>
          <div class="clearfix"></div>
          <nav class="navbar navbar-expand-lg navbar-dark border-lg-0 main-navbar">
            <a class="navbar-brand pl-sm-5 pl-lg-0" href="/"><img class="logo" fluid :src="require('@/assets/images/logo.png')" /></a>
            <a href="#" class="text-white ml-auto d-inline-block d-lg-none mail-btn">
              <img class="mail-icon" fluid :src="require('@/assets/images/svg/PICTO_CONTACT_MOBILE.svg')" data-toggle="modal" data-target="#login" />
            </a>
            <button class="navbar-toggler rounded-0 collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <!-- <span class="navbar-toggler-icon"></span> -->
              <img class="menu-icon mx-auto" fluid :src="require('@/assets/images/menu.png')" />
              <i class="fa fa-times cross-sym mx-auto"></i>
            </button>

            <div class="collapse navbar-collapse text-white" id="navbarSupportedContent">
              <ul class="navbar-nav mx-md-5 text-uppercase">
                <li class="nav-item active">
                  <a class="nav-link" href="#"><span>01</span> activites <i class="fas fa-chevron-right float-right nav-arrow d-block d-lg-none"></i></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#"><span>02</span> destination <i class="fas fa-chevron-right float-right nav-arrow d-block d-lg-none"></i></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/product"><span>03</span> l'agence <i class="fas fa-chevron-right float-right nav-arrow d-block d-lg-none"></i><span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#"><span>04</span> actualités <i class="fas fa-chevron-right float-right nav-arrow d-block d-lg-none"></i></a>
                </li>
              </ul>
              <button class="btn nav-btn btn-lg btn-outline-light text-uppercase d-none d-lg-inline-block">creer ton séjour</button>
            </div>
          </nav>
          <div class="wrapper d-flex align-items-center search-wrapper">
            <div class="content w-100">
              <div class="d-flex align-items-center mb-1 justify-content-center flex-column">
                <div class="d-flex align-items-center justify-content-center mb-5">
                  <img class="head-icon" fluid :src="require('@/assets/images/pink.png')" />
                  <div>
                    <h1 class="heading text-uppercase mb-2">
                      <strong>MULTI-ACTVIVITéS</strong>
                    </h1>
                    <h5 class="sub-heading text-uppercase"><i class="fas fa-caret-right mr-1"></i> 12 séjours</h5>
                  </div>
                </div>
                <div class="selection-div position-relative text-uppercase py-4 border-top d-flex align-items-center justify-content-center flex-column flex-lg-row">
                  <h6 class="mb-3 mb-lg-0 font-weight-bold letter-space">critères sélectionnés :</h6>
                  <ul class="list-unstyled mb-0 d-flex align-items-center justify-content-center selection-div-list">
                    <li class="d-none"><img class="mr-2 icons" fluid :src="require('@/assets/images/surf.png')" />SURF</li>
                    <li><img class="mr-2 icons" fluid :src="require('@/assets/images/globe.png')" />ESPAGNE</li>
                    <li><img class="mr-2 icons" fluid :src="require('@/assets/images/cal_light.png')" />Décembre</li>
                    <li class="d-none"><img class="mr-2 icons" fluid :src="require('@/assets/images/star_white.png')" />Dernières places</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <a class="details-link text-uppercase text-white font-weight-bold d-block mx-auto d-lg-none pl-3 text-center" href="#">Détails <i class="fas fa-long-arrow-alt-down ml-2 symbol"></i></a>
        </div>
      </div>
    </header>
  </div>
</template>
<script>
export default {
  name: 'SearchHeader',
  mounted() {
    var token_val = localStorage.getItem('user-token')
    if (!token_val) {
      this.token = false
    }
  },
  data() {
    return {
      token: true,
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    logout: function (event) {
      localStorage.removeItem('user-token')
      this.$router.push('/')
    }
  }
}
</script>
