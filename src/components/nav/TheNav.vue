<template>
  <nav class="navbar navbar-expand-lg navbar-dark border-lg-0 main-navbar align-items-baseline">
    <a @mouseover="leftAllTabs" class="navbar-brand pl-sm-5 pl-lg-0" style="margin-right: 0px; padding-right: 5rem; transform: translateY(5px)" href="/">
      <InlineSvg class="svg-logo" v-if="['agency', 'news'].includes(activeTab)" :src="require('@/assets/svg/logo-dark.svg')" />
      <InlineSvg class="svg-logo" v-else :src="require('@/assets/svg/logo-white.svg')" />
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
          <a @mouseover="onMouseOvered('activities')" class="nav-link" id="pills-activities-tab" data-toggle="pill" href="#pills-activities">
            <span>01</span> activites <i class="fas fa-chevron-right float-right nav-arrow d-block d-lg-none"></i>
            <div class="nav-annim-border"></div>
          </a>
        </li>
        <li class="nav-item">
          <a @mouseover="onMouseOvered('destinations')" class="nav-link" id="pills-destinations-tab" data-toggle="pill" href="#pills-destinations">
            <span>02</span> destination <i class="fas fa-chevron-right float-right nav-arrow d-block d-lg-none"></i>
            <div class="nav-annim-border"></div>
          </a>
        </li>
        <li class="nav-item">
          <a @mouseover="onMouseOvered('agency')" class="nav-link" id="pills-agency-tab" data-toggle="pill" href="#pills-agency">
            <span>03</span> l'agence <i class="fas fa-chevron-right float-right nav-arrow d-block d-lg-none"></i>
            <div class="nav-annim-border"></div>
          </a>
        </li>
        <li class="nav-item">
          <a @mouseover="onMouseOvered('news')" class="nav-link" id="pills-news-tab" type="button" data-toggle="pill" href="#pills-news">
            <span>04</span> actualités <i class="fas fa-chevron-right float-right nav-arrow d-block d-lg-none"></i>
            <div class="nav-annim-border"></div>
          </a>
        </li>
      </ul>
      <!-- <button v-if="agencyIsActive" class="btn nav-btn btn-lg text-uppercase d-none d-lg-inline-block" style="border: 1px solid #292f33">creer ton séjour</button>
      <button v-else class="btn nav-btn btn-lg btn-outline-light text-uppercase d-none d-lg-inline-block">creer ton séjour</button> -->
      <ul v-if="activeTab === 'activities' && sportCategories.length" class="nav navbar-nav border-0 mobile-navs" id="activites_pills_tab" style="position: relative; left: 3rem; z-index: 2; width: max-content">
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
        <!-- <div type="button" style="position: absolute; top: 20px; right: 8%; z-index: 10">
          <InlineSvg v-if="activeTab === 'agency'" :src="require('@/assets/svg/cross.svg')" height="25" />
          <InlineSvg v-else :src="require('@/assets/svg/cross.svg')" fill="white" height="25" />
        </div> -->
        <transition name="nav-fade">
          <div v-show="activeTab === 'activities'" id="pills-activities" class="wrapper h-100 p-0 tab-pane black pt-lg-5 home-wrapper show active">
            <keep-alive>
              <component :is="'ActivitiesTab'" ref="activitiesTab" @fetched-categ="setCateg"></component>
            </keep-alive>
          </div>
        </transition>
        <transition name="nav-fade">
          <div v-show="activeTab === 'agency'" id="pills-agency" class="wrapper h-100 p-0 tab-pane home-wrapper show active">
            <keep-alive>
              <component :is="'AgencyTab'" ref="agencyTab"></component>
            </keep-alive>
          </div>
        </transition>
        <transition name="nav-fade">
          <div v-show="activeTab === 'destinations'" id="pills-destinations" class="wrapper h-100 p-0 tab-pane black pt-lg-5 home-wrapper show active">
            <keep-alive>
              <component :is="'DestinationsTab'"></component>
            </keep-alive>
          </div>
        </transition>
        <transition name="nav-fade">
          <div v-show="activeTab === 'news'" id="pills-news" class="wrapper h-100 p-0 tab-pane black pt-lg-5 home-wrapper show active">
            <keep-alive>
              <component :is="'HomeArticles'" :in-nav="true"></component>
            </keep-alive>
          </div>
        </transition>
      </div>
    </div>
  </nav>
</template>

<script>
import AgencyTab from '@/components/nav/AgencyTab.vue'
import ActivitiesTab from '@/components/nav/ActivitiesTab.vue'
import DestinationsTab from '@/components/nav/DestinationsTab.vue'
import HomeArticles from '@/components/home/HomeArticles.vue'

export default {
  name: 'Nav',
  emits: ['changed-tab', 'left-all-tabs'],
  props: ['active-tab'],
  components: {
    AgencyTab,
    ActivitiesTab,
    DestinationsTab,
    HomeArticles
  },
  data() {
    return {
      sportCategories: []
    }
  },
  computed: {
    navIsActive() {
      return !!this.$props.activeTab
    }
  },
  watch: {
    activeTab(newVal, oldVal) {
      // no restyling needed when going from agency to news or activities to destinations
      if (['agency', 'news'].includes(newVal) && ['agency', 'news'].includes(oldVal)) return
      if (['activities', 'destinations'].includes(newVal) && ['activities', 'destinations'].includes(oldVal)) return

      if (newVal === 'agency' || newVal === 'news') {
        if (oldVal === 'agency') {
          document.body.style.position = 'fixed'
        }

        document.querySelector('#header_nav').style.borderBottom = '1px solid #292f3399'
        document.querySelectorAll('.navbar-nav .nav-link').forEach((el) => {
          el.classList.toggle('navbar-grey', true)
          el.style.color = '#292f33'
        })
      }

      if (newVal === 'activities' || newVal === 'destinations') {
        if (oldVal === 'agency') {
          this.$refs.agencyTab.resetTabs()
          document.body.style.position = 'static'
        }

        document.querySelector('#header_nav').removeAttribute('style')
        document.querySelectorAll('.navbar-nav .nav-link').forEach((el) => {
          el.classList.toggle('navbar-grey', false)
          el.style.color = '#fff'
        })
      }
    }
  },
  methods: {
    setCateg(categ) {
      this.sportCategories = categ
    },
    onMouseOvered(tab) {
      // if already active do nothing except for agency
      if (this.$props.activeTab === tab && tab !== 'agency') return

      if (tab === 'agency') this.$refs.agencyTab.resetTabs()

      this.$emit('changed-tab', tab)
    },

    leftAllTabs() {
      document.body.style.position = 'static'
      this.$emit('left-all-tabs')
    },

    onClicked(tab) {
      // if already active do nothing except for agency
      if (this.$props.activeTab === tab && tab !== 'agency') return

      if (tab === 'agency') this.$refs.agencyTab.resetTabs()

      this.$emit('changed-tab', tab)
    }
  },
  unmounted() {
    this.leftAllTabs()
  }
}
</script>

<style scoped>
.nav-fade-enter-active,
.nav-fade-leave-active {
  transition: all 0.5s cubic-bezier(0.86, 0, 0.07, 1);
}
.nav-fade-enter-from,
.nav-fade-leave-to {
  opacity: 0;
}
#navbarSupportedContent {
  flex-direction: column;
  align-items: flex-start;
}
.subactivity-nav__item {
  font-size: 0.8rem !important;
  color: rgba(250, 250, 250, 0.3) !important;
  border: none !important;
  font-family: Muli, sans-serif !important;
  transition: all 0.3s ease;
}
.subactivity-nav__item.active {
  font-weight: 800 !important;
  color: white !important;
}
.subactivity-nav__item:hover {
  color: white !important;
}
.svg-logo {
  width: 140px;
}
.navbar-collapse {
  padding: 0px;
}
@media only screen and (min-height: 1000px) {
  .navbar-collapse ul {
    margin-top: 1em;
  }
}
@media only screen and (min-width: 1439px) {
  .navbar-collapse {
    padding: 0px;
  }
  .nav-pills {
    margin-top: 0px !important;
  }
  /*.subactivity-nav__item {
    font-size: 0.875rem !important;
  }*/
}
.navbar {
  height: 70px; /* easier to manipulate with fixed height */
  z-index: 1;
}
.tab-content.main-wrapper {
  z-index: 1;
}
</style>
