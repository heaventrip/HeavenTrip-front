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
          <a class="nav-link" id="pills-activites-tab" data-toggle="pill" href="#pills-activites" role="tab" aria-controls="pills-activites" aria-selected="false"><span>01</span> activites <i class="fas fa-chevron-right float-right nav-arrow d-block d-lg-none"></i></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="pills-destination-tab" data-toggle="pill" href="#pills-destination" role="tab" aria-controls="pills-destination" aria-selected="false"><span>02</span> destination <i class="fas fa-chevron-right float-right nav-arrow d-block d-lg-none"></i></a>
        </li>
        <li class="nav-item">
          <a @click.prevent="clickedAgency = true" class="nav-link" id="pills-agence-tab" data-toggle="pill" href="#pills-agence" role="tab" aria-controls="pills-agence" aria-selected="false"><span>03</span> l'agence <i class="fas fa-chevron-right float-right nav-arrow d-block d-lg-none"></i></a>
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
      <div class="tab-content main-wrapper">
        <div id="pills-activites" role="tabpanel" aria-labelledby="pills-activites-tab" class="wrapper h-100 p-0 tab-wrapper tab-pane fade black pt-lg-5 home-wrapper">
          <ActivitiesTab />
        </div>
        <div id="pills-destination" role="tabpanel" aria-labelledby="pills-destination-tab" class="wrapper h-100 p-0 tab-wrapper tab-pane fade black pt-lg-5 home-wrapper">
          <DestinationsTab />
        </div>
        <div id="pills-agence" role="tabpanel" aria-labelledby="pills-agence-tab" class="wrapper h-100 p-0 tab-pane fade home-wrapper">
          <div v-if="clickedAgency" class="agency-content-wrapper d-flex flex-column justify-content-center">
            <div class="row justify-content-center align-items-center">
              <div class="col-3">
                <div class="row align-items-center text-center">
                  <div class="big-letters">
                    HE<button @click="clickedConcept = true" class="btn choose-btn d-inline align-text-bottom">LE CONCEPT</button>
                    <div class="text-content concept">Si tu as besoin de conseils, de renseignements tu peux nous joindre par téléphone, formulaire ou via les réseaux sociaux</div>
                  </div>
                </div>
              </div>
              <div class="col-3">
                <div class="row align-items-center text-center">
                  <div class="big-letters">
                    AV<button @click="clickedTeam = true" class="btn choose-btn d-inline align-text-bottom">LA TEAM</button>
                    <div class="text-content team">Si tu as besoin de conseils, de renseignements tu peux nous joindre par téléphone, formulaire ou via les réseaux sociaux</div>
                  </div>
                </div>
              </div>
              <div class="col-3">
                <div class="row align-items-center text-center">
                  <div class="big-letters">
                    EN<button @click="clickedContact = true" class="btn choose-btn d-inline align-text-bottom">NOUS CONTACTER</button>
                    <div class="text-content text-content-contact">Si tu as besoi dsdzd dz ar téléphone, formulaire ou via les réseaux sociaux</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row justify-content-center bottom-text">
              <div class="text-center">
                Heaven Trip c'est pas juste une nouvelle agence de voyage, c'est la rencontre de deux passionnés qui veulent reconnecter les uns aux autres <br />à travers des expériences concentrées sur l'humain, et le dépassement de soi. Ici, on valorise ce que tu veux devenir et non ce que tu es.
              </div>
            </div>
          </div>
          <NavConcept v-show="clickedConcept" />
          <NavTeam v-show="clickedTeam" />
          <NavContact v-show="clickedContact" />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import ActivitiesTab from '@/components/nav/ActivitiesTab.vue'
import DestinationsTab from '@/components/nav/DestinationsTab.vue'
import NavConcept from '@/components/nav/NavConcept.vue'
import NavTeam from '@/components/nav/NavTeam.vue'
import NavContact from '@/components/nav/NavContact.vue'

export default {
  name: 'Nav',
  components: {
    ActivitiesTab,
    NavConcept,
    NavTeam,
    NavContact,
    DestinationsTab
  }
}
</script>

<style></style>
