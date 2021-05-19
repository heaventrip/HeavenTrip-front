<template>
  <div class="header bg-dark text-white p-0">
    <div class="container-fluid p-0">
      <div class="header-part">
        <ul class="list-unstyled mb-0 ml-auto d-none d-lg-flex text-uppercase profile-menu float-right">
          <li v-if="token">
            <a v-on:click="logout()" class="text-reset px-4 py-3 d-inline-block">se déconnecter</a>
          </li>
          <li v-else>
            <a href="login.html" class="text-reset px-4 py-3 d-inline-block" data-toggle="modal" data-target="#login">se connecter</a>
          </li>
          <li>
            <a href="#" class="px-4 py-3 profile-link font-weight-bold d-inline-block" data-toggle="modal" data-target="#profile">creér son profil</a>
          </li>
        </ul>
        <div class="clearfix"></div>
        <nav class="navbar navbar-expand-lg navbar-dark border-lg-0 main-navbar">
          <a class="navbar-brand pl-sm-5 pl-lg-0" href="/"><img class="logo" fluid :src="require('@/assets/images/logo.png')" /></a>
          <a href="#" class="text-white ml-auto d-inline-block d-lg-none mail-btn">
            <img class="mail-icon" fluid :src="require('@/assets/images/svg/PICTO_CONTACT_MOBILE.svg')" data-toggle="modal" data-target="#profile" />
          </a>
          <a href="#" class="text-white user-circle">
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
                <a @mouseover="displayMenu('pills-activites')" class="nav-link" id="pills-activites-tab" data-toggle="pill" href="#pills-activites" role="tab" aria-controls="pills-activites" aria-selected="false"
                  ><span>01</span> activites <i class="fas fa-chevron-right float-right nav-arrow d-block d-lg-none"></i
                ></a>
              </li>
              <li class="nav-item">
                <a @mouseover="displayMenu('pills-destination')" class="nav-link" id="pills-destination-tab" data-toggle="pill" href="#pills-destination" role="tab" aria-controls="pills-destination" aria-selected="false"
                  ><span>02</span> destination <i class="fas fa-chevron-right float-right nav-arrow d-block d-lg-none"></i
                ></a>
              </li>
              <li class="nav-item">
                <a @mouseover="displayMenu('pills-agence')" class="nav-link" id="pills-agence-tab" data-toggle="pill" href="#pills-agence" role="tab" aria-controls="pills-agence" aria-selected="false"
                  ><span>03</span> l'agence <i class="fas fa-chevron-right float-right nav-arrow d-block d-lg-none"></i
                ></a>
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
                <AgencyTab />
                <!-- <div class="agency-content-wrapper d-flex flex-column justify-content-center">
                  <div class="row justify-content-center align-items-center">
                    <div class="col-3">
                      <div class="row align-items-center text-center">
                        <div class="big-letters">
                          HE<button class="btn choose-btn d-inline align-text-bottom">LE CONCEPT</button>
                          <div class="text-content concept">Si tu as besoin de conseils, de renseignements tu peux nous joindre par téléphone, formulaire ou via les réseaux sociaux</div>
                        </div>
                      </div>
                    </div>
                    <div class="col-3">
                      <div class="row align-items-center text-center">
                        <div class="big-letters">
                          AV<button class="btn choose-btn d-inline align-text-bottom">LA TEAM</button>
                          <div class="text-content team">Si tu as besoin de conseils, de renseignements tu peux nous joindre par téléphone, formulaire ou via les réseaux sociaux</div>
                        </div>
                      </div>
                    </div>
                    <div class="col-3">
                      <div class="row align-items-center text-center">
                        <div class="big-letters">
                          EN<button class="btn choose-btn d-inline align-text-bottom">NOUS CONTACTER</button>
                          <div class="text-content text-content-contact">Si tu as besoi dsdzd dz ar téléphone, formulaire ou via les réseaux sociaux</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row justify-content-center bottom-text">
                    <div class="text-center">
                      Heaven Trip c'est pas juste une nouvelle agence de voyage, c'est la rencontre de deux passionnés qui veulent reconnecter les uns aux autres <br />à travers des expériences concentrées sur l'humain, et le dépassement de soi. Ici, on valorise ce que tu veux devenir et non ce que
                      tu es.
                    </div>
                  </div>
                </div> -->
              </div>
            </div>
          </div>
        </nav>
        <div class="tab-content">
          <div id="pills-activity" role="tabpanel" aria-labelledby="pills-activity-tab" class="wrapper tab-pane fade show active home-wrapper pb-0">
            <HeaderText />
          </div>
        </div>
      </div>
    </div>
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
import SessionsMenu from './SessionsMenu.vue'
import ActivitiesTab from './ActivitiesTab.vue'
import DestinationsTab from './DestinationsTab.vue'
import AgencyTab from './AgencyTab.vue'
import HeaderText from './HeaderText.vue'

export default {
  name: 'Header',
  components: {
    SessionsMenu,
    ActivitiesTab,
    DestinationsTab,
    AgencyTab,
    HeaderText
  },
  data() {
    return {
      token: true,
      toggleSessions: false
    }
  },
  mounted() {
    var token_val = localStorage.getItem('user-token')
    if (!token_val) {
      this.token = false
    }
    $(function () {
      $('.selection').select2({
        minimumResultsForSearch: Infinity
      })
      var backButton =
        '<span class="slick-prev"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAwCAMAAABUpcipAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAOpQTFRFAAAAe3t7enp6d3d3e3t7fHx8e3t7eXl5fHx8fHx8e3t7enp6fHx8cXFxfHx8gICAfHx8e3t7fHx8fHx8ZmZme3t7eXl5eHh4e3t7fHx8fHx8dnZ2e3t7e3t7e3t7gICAfHx8e3t7fHx8fHx8e3t7e3t7fHx8fHx8e3t7e3t7e3t7fHx8e3t7e3t7e3t7eHh4fHx8fHx8e3t7e3t7e3t7e3t7e3t7gICAdHR0fHx8e3t7gICAfHx8e3t7fHx8enp6AAAAgICAe3t7e3t7e3t7e3t7e3t7enp6e3t7e3t7fHx8fHx8fHx8e3t7SJvSHgAAAE50Uk5TAI9gHs//7BNA76Aw0gmcEPVNgMwF+Cggh5DrDd9f8ganV1DQx59vwODwsGd8/u4Rd+UfcJebpAQL/ZMSY/ShQQECW9vigTQybqztyL/VnvtSXwAAAWpJREFUeJyNlddaxCAQhdk1KAkqGktcuxvdFLurrr338v6vY4bEhBTCnDvg/+YwDAOEFOp0CUZjFh2fQHDMppQ6Zo5T0OSUkYN4dNrICeBmELlYEG/WzLnAdcycNJ6bN4NOwi0smjkPjJfMHOkl3PIKAlxNwDUEBzVZ30A6byI46bzVvNSnSrEEOGtSEb5CsgTc1rmpJJRvR7svhXTbT7sgIemButSlVXE5H1STZkFJIY08OR8n4K7emtsRL/a4h+Das1Y4uXdLw3kKJ+/EvmgGmc+VUaSvdVlxa2kUwSYPDhGgAO8jTEhowmPjY0KyLhyYuTSkfYINiXkpyBDIU4x5jH0sRAjkGYJMX+bzkZlMGyC+MJMMCkQvr67rS6Ob0qXhkqS3d/cPJezx6bnyAYkg67qX17f/ufePzy9a/4D6Yd6i3z+JfvNh1omF3KjW1aBevQVEN65S4bAaLmcdP7cMXN5M5WfAQIrjH3uPHRYBYnIgAAAAAElFTkSuQmCC"/></span>'
      var nextButton =
        '<span class="slick-next"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAwCAMAAABUpcipAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAPZQTFRFAAAAfX19enp6gICAe3t7e3t7fHx8fHx8e3t7fHx8e3t7e3t7fHx8cHBwe3t7e3t7e3t7e3t7fHx8fHx8e3t7fHx8e3t7fHx8e3t7gICAfX19e3t7fHx8eXl5e3t7fX19enp6fHx8enp6fHx8fX19e3t7fHx8fHx8e3t7gICAe3t7e3t7fHx8fHx8fHx8eHh4d3d3fHx8fHx8enp6e3t7e3t7e3t7fX19fHx8fHx8fHx8fHx8fX19fHx8enp6fHx8enp6e3t7fHx8fHx8fHx8e3t7fHx8e3t7fHx8e3t7e3t7e3t7e3t7e3t7fHx8fHx8gICAd3d3WaJ1zQAAAFJ0Uk5TAD8wEE+Pv//ff59f7xDP9tHL5UCg87Z7Phg1bK0T7DdL92C5Mx+xTOIMnXyEgLsgD+GvSc2wcCvtUKl3WMBH0EVTcZ7OHXWb0oFVPPBX9ZAEHq06TacAAAFZSURBVHicjdXZVsIwEADQkZSmiAaRqiioUHBfUNzXooIriv7/z5ikHpNA08y8tb2dZE4mCYAeUzlwBPHyPk0i8AtW7k1TM4K8l8KKAU2JmeIYm2XqY2muPK+lrZgylG8XFpeqy/J5pVYv/VGf6HB1jdL6uvlzI2wm4xtlRa325MQ3NlNkemxtSxq55U5LSkRO2JWjEzeEPVk7AsK+kAcYeShkBwGPjjnsYlKeiJQVtwM45fAMAxvYWcqU5xhY45Bh4IUYW1se0rXVdmnUTRi9ssBrfXW4szbUDYchwsEth3cIB/cKxpQVjDDqqv7DzsSuDnXYUxkjyjL6+EHBbPmoD5Eln4wuz5B9syMjW4sMxtYacpaMz9zFtmnpUUb24wDb4S/IkdvIkwpekQnfkNv6neJ29YdwQ3fJn18C2raSihHubP5O7jzE4SgvoJHbiQto6J6fiCj+UQ+/I/0ehXptCecAAAAASUVORK5CYII="/></span>'
      $('.slider1').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        draggable: true,
        centerPadding: '60px',
        prevArrow: backButton,
        nextArrow: nextButton,
        responsive: [
          {
            breakpoint: 2561,
            settings: {
              initialSlide: 1,
              arrows: true,
              centerMode: true,
              centerPadding: '60px',
              slidesToShow: 3,
              draggable: false
            }
          },
          {
            breakpoint: 1441,
            settings: {
              initialSlide: 1,
              arrows: true,
              centerMode: true,
              centerPadding: '80px',
              slidesToShow: 2,
              draggable: false
            }
          },
          {
            breakpoint: 1025,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '80px',
              slidesToShow: 1
            }
          },
          {
            breakpoint: 991,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '90px',
              slidesToShow: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: false,
              // centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
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

      $('.select-dropdown .cancel,.grid-list,.hoverable-div,.view-link,.centered-img').hide()
      $('.map-section .city-head .select-toggle').removeAttr('data-toggle')
      $('.select-dropdown').on('show.bs.dropdown', function () {
        $('.map-content').css('margin-top', '7rem')
        $('.zone-div').hide()
      })
      $('.select-dropdown').on('hide.bs.dropdown', function () {
        $('.map-content').css('margin-top', '0')
      })
      $('.dropdown-menu li a').click(function () {
        var selText = $(this).text()
        $(this).parents('.btn-group').find('.select-toggle').addClass('text-warning').html(selText)
        $(this).parents('.btn-group').find('.cancel').show()
        $(this).parents('.btn-group').find('.chevron').hide()
        $('.grid-list,.view-link,.centered-img').show()
        $('.map-section .img-fill').addClass('blurred-img')
        $('.map-section .city-head .select-toggle').attr('data-toggle', 'dropdown')
        $('.map-section .city-head,.map-section .flex-div .activity-count').removeClass('zero-opacity')
      })
      $('.select-dropdown .cancel').click(function () {
        $(this)
          .parents('.btn-group')
          .find('.select-toggle.tous')
          .removeClass('text-warning')
          .html('tous' + '<i class="fa fa-chevron-down ml-2 chevron"></i>')
        $(this)
          .parents('.btn-group')
          .find('.select-toggle.toutes')
          .removeClass('text-warning')
          .html('toutes' + '<i class="fa fa-chevron-down ml-2 chevron"></i>')
        $(this).parents('.btn-group').find('.cancel').hide()
        $(this).parents('.btn-group').find('.chevron').show()
        if ($(this).parents().hasClass('country-head')) {
          $('.zone-div').show()
          $('.grid-list,.view-link,.centered-img,.map-section .city-head .cancel').hide()
          $('.map-section .img-fill').removeClass('blurred-img')
          $('.map-section .city-head .select-toggle').removeAttr('data-toggle')
          $('.map-section .city-head,.map-section .flex-div .activity-count').addClass('zero-opacity')
          $('.select-toggle.toutes')
            .removeClass('text-warning')
            .html('toutes' + '<i class="fa fa-chevron-down ml-2 chevron"></i>')
        }
        // if ($(this).parents().hasClass('city-head') ) {
        // }
      })
      $('#mapCarousel').owlCarousel({
        loop: false,
        center: true,
        items: 3,
        margin: 0,
        autoplay: false,
        dots: true,
        nav: true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        responsive: {
          0: {
            items: 2
          },
          768: {
            items: 2
          },
          1170: {
            items: 3
          }
        }
      })
      $('.owl-carousel').find('.owl-nav,.owl-dots').removeClass('disabled')
      $('.owl-carousel').on('changed.owl.carousel', function (event) {
        $(this).find('.owl-nav,.owl-dots').removeClass('disabled')
      })
      $('select.select-place').change(function () {
        var selectedCountry = $(this).children('option:selected').val()
        $('.nav-pills a[href="' + selectedCountry + '"]').tab('show')
      })
    })
    var width = $(window).width()
    if (width >= 1100) {
      $('.customers-testimonials')
        .on('mouseenter', '.shadow-effect', function () {
          $(this).parent().animate({ width: '+=50px' })
          $(this).parent().find('.content').addClass('hover')
          $(this).parent().find('.hoverable-div').slideDown()
          $(this).parent().find('.trip-link').animate({ bottom: '+=45px' })
        })
        .on('mouseleave', '.shadow-effect', function () {
          $(this).parent().animate({ width: '-=50px' })
          $(this).parent().find('.content').removeClass('hover')
          $(this).parent().find('.hoverable-div').slideUp()
          $(this).parent().find('.trip-link').animate({ bottom: '-=45px' })
        })
    }
    if (width >= 792) {
      $('#header_nav.navbar-nav .nav-link').on('click', function (e) {
        e.preventDefault()
        $('.home-wrapper').removeClass('active')
        var wrapper_id = $(this).attr('href').split('=')
        $('.home-wrapper' + wrapper_id + '').addClass('active')
      })
    }
    if (width < 692) {
      $('#header_nav.navbar-nav.mobile-navs .nav-link').on('click', function (e) {
        e.preventDefault()
        $('#header_nav').hide()
        $('#activites_pills').show()
        var forward_id = $(this).attr('href').split('=')
        $('.main-wrapper .tab-pane').removeClass('active')
        $('.main-wrapper .tab-pane' + forward_id + '').addClass('active')
      })
      $('#activites_pills_tab.navbar-nav.mobile-navs .nav-link').on('click', function (e) {
        e.preventDefault()
        var in_forward_id = $(this).attr('href').split('=')
        $('.main-wrapper .tab-pane' + in_forward_id + '').addClass('active')
        $('#activites_pills').hide()
      })
      $('#agence_pills_tab.nav-pills.mobile-navs .nav-link').on('click', function (e) {
        e.preventDefault()
        var ag_forward_id = $(this).attr('href').split('=')
        $('.main-wrapper .tab-pane' + ag_forward_id + '').addClass('active')
        $('#agence_pills').hide()

        if ($('.inner-tab-content.tab-content>.tab-pane').hasClass('show')) {
          $('.inner-tab-content.tab-content>.tab-pane.show').addClass('active')
        }
      })
      $('#pills-activity-tab').on('click', function (e) {
        $('.navbar-toggler').trigger('click')
        $('#header_nav').show()
        e.preventDefault()
      })
      $('.nav-head a').click(function () {
        var back_id = $(this).attr('href').split('=')
        $('' + back_id + '').show()
        $(this).parent().parent().removeClass('active')
        if (back_id == '#header_nav') {
          $('.main-wrapper .tab-pane').removeClass('active')
        }
        return false
      })
    }
    $('#pills-team-tab').on('click', function (e) {
      $('.team-slider').slick({
        dots: true,
        arrows: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        centerMode: false,
        draggable: true,
        centerPadding: '80px',
        responsive: [
          {
            breakpoint: 2561,
            settings: {
              initialSlide: 1,
              centerMode: false,
              centerPadding: '80px',
              slidesToShow: 4
            }
          },
          {
            breakpoint: 1441,
            settings: {
              initialSlide: 1,
              centerMode: false,
              centerPadding: '80px',
              slidesToShow: 4
            }
          },
          {
            breakpoint: 1025,
            settings: {
              centerMode: false,
              centerPadding: '100px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 991,
            settings: {
              centerMode: true,
              centerPadding: '100px',
              slidesToShow: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              dots: true,
              centerMode: true,
              centerPadding: '70px',
              slidesToShow: 1
            }
          }
        ]
      })
      $('.slick-dots li:nth-child(2)').triggerHandler('click')
      e.preventDefault()
    })
  },
  methods: {
    logout: function (event) {
      localStorage.removeItem('user-token')
      window.location.reload()
    },
    displayMenu(menu) {
      $('#pills-activites').removeClass('active')
      $('#pills-agence').removeClass('active')
      $('#pills-destination').removeClass('active')
      $(`#${menu}`).addClass('active')
    }
  }
}
</script>

<style scoped>
.header {
  min-height: unset;
  height: 94vh;
}
.pre-booking-footer {
  bottom: 0;
}
.header-part {
  background-color: rgba(255, 255, 255, 0.863);
}
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
.text-content-contact {
  right: -60px;
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
