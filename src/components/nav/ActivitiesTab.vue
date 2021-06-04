<template>
  <div class="container flex-column align-items-center h-100" v-if="loaded">
    <div v-for="category in sportCategories" :key="category" class="sports-block flex-column justify-content-center w-100 flex-grow-1" :class="[category.name === activeCategory ? 'd-flex' : 'd-none']">
      <div class="row no-gutters align-items-center justify-content-start py-3">
        <div v-for="(sport, index) in category.sports.slice(0, 3)" :key="sport" class="col-3" :class="[category.sports.length === 1 && index === 0 ? 'offset-3' : '', category.sports.length === 2 && index === 0 ? 'offset-1' : '']">
          <svg transform="translate(0, -5) rotate(-30)" height="100" width="100" viewBox="0 0 400 400">
            <svg x="-10" height="400" width="200" fill="none">
              <circle cx="205" cy="220" r="50%" stroke="white" stroke-width="4" />
            </svg>
            <svg x="210" height="400" width="200" fill="none">
              <circle cx="-5" cy="220" r="50%" stroke="orange" stroke-width="17" />
            </svg>
          </svg>
          <span class="sport-name">{{ sport.name }}</span>
        </div>
        <!-- <div class="col-3" v-if="category.sports.length >= 2">
            <svg transform="translate(0, -5) rotate(-30)" height="110" width="110" viewBox="0 0 400 400">
              <svg x="-10" height="400" width="200" fill="none">
                <circle cx="205" cy="220" r="50%" stroke="white" stroke-width="4" />
              </svg>
              <svg x="210" height="400" width="200" fill="none">
                <circle cx="-5" cy="220" r="50%" stroke="orange" stroke-width="17" />
              </svg>
            </svg>
            <span class="sport-name">Chiens</span>
          </div>
          <div class="col-3" v-if="category.sports.length >= 3">
            <svg transform="translate(0, -5) rotate(-30)" height="110" width="110" viewBox="0 0 400 400">
              <svg x="-10" height="400" width="200" fill="none">
                <circle cx="205" cy="220" r="50%" stroke="white" stroke-width="4" />
              </svg>
              <svg x="210" height="400" width="200" fill="none">
                <circle cx="-5" cy="220" r="50%" stroke="orange" stroke-width="17" />
              </svg>
            </svg>
            <span class="sport-name">Surf</span>
          </div> -->
      </div>
      <div class="row no-gutters align-items-center justify-content-start py-3" v-if="category.sports.length > 3">
        <div v-for="sport in category.sports.slice(3, 6)" :key="sport" class="col-3">
          <svg transform="translate(0, -5) rotate(-30)" height="100" width="100" viewBox="0 0 400 400">
            <svg x="-10" height="400" width="200" fill="none">
              <circle cx="205" cy="220" r="50%" stroke="white" stroke-width="4" />
            </svg>
            <svg x="210" height="400" width="200" fill="none">
              <circle cx="-5" cy="220" r="50%" stroke="orange" stroke-width="17" />
            </svg>
          </svg>
          <span class="sport-name">{{ sport.name }}</span>
        </div>
      </div>
      <div class="row no-gutters align-items-center justify-content-start py-3" v-if="category.sports.length > 6">
        <div v-for="sport in category.sports.slice(6)" :key="sport" class="col-3">
          <svg transform="translate(0, -5) rotate(-30)" height="100" width="100" viewBox="0 0 400 400">
            <svg x="-10" height="400" width="200" fill="none">
              <circle cx="205" cy="220" r="50%" stroke="white" stroke-width="4" />
            </svg>
            <svg x="210" height="400" width="200" fill="none">
              <circle cx="-5" cy="220" r="50%" stroke="orange" stroke-width="17" />
            </svg>
          </svg>
          <span class="sport-name">{{ sport.name }}</span>
        </div>
      </div>
    </div>
    <div class="wrapper-head-para text-center mt-auto" :style="{ visibility: clickedMultiActivity ? '' : 'hidden' }" style="padding-bottom: 1.5rem">(Variable prénom), choisis un sport et découvre nos compositions en séjours multi-activités.</div>
    <div id="activites_pills">
      <!-- <h4 class="nav-head m-0">
          <a href="#header_nav" class="text-reset pr-3"><i class="fas fa-chevron-left"></i></a>
          . ACTIVITéS
        </h4> -->
      <ul class="nav navbar-nav border-0 mobile-navs" id="activites_pills_tab" role="tablist" aria-orientation="vertical">
        <li class="nav-item" role="presentation">
          <a @click="clicked(sportCategories[0]?.name)" class="nav-link active text-uppercase" id="v-pills-vent-mer-tab" data-toggle="pill" href="#v-pills-vent-mer" role="tab" aria-controls="v-pills-vent-mer" aria-selected="false">{{ sportCategories[0]?.name }}</a>
        </li>
        <li class="nav-item" role="presentation">
          <a @click="clicked(sportCategories[1]?.name)" class="nav-link text-uppercase" style="border-bottom: none !important" id="v-pills-montagne-tab" data-toggle="pill" href="#v-pills-montagne" role="tab" aria-controls="v-pills-montagne" aria-selected="false">{{ sportCategories[1]?.name }}</a>
        </li>
        <li class="nav-item" role="presentation">
          <a @click="clicked(sportCategories[2]?.name)" class="nav-link text-uppercase" style="border-bottom: none !important" id="v-pills-pied-tab" data-toggle="pill" href="#v-pills-pied" role="tab" aria-controls="v-pills-pied" aria-selected="false">{{ sportCategories[2]?.name }}</a>
        </li>
        <li class="nav-item" role="presentation">
          <a @click="clicked(sportCategories[3]?.name)" class="nav-link text-uppercase" style="border-bottom: none !important" id="v-pills-multi-acti-tab" data-toggle="pill" href="#v-pills-multi-acti" role="tab" aria-controls="v-pills-multi-acti" aria-selected="false">{{ sportCategories[3]?.name }}</a>
        </li>
        <li class="nav-item" role="presentation">
          <a @click="clicked(sportCategories[4]?.name)" class="nav-link text-uppercase" style="border-bottom: none !important" id="v-pills-bien-tab" data-toggle="pill" href="#v-pills-bien" role="tab" aria-controls="v-pills-bien" aria-selected="false">{{ sportCategories[4]?.name }}</a>
        </li>
        <li class="nav-item" role="presentation">
          <a @click="clicked(sportCategories[5]?.name)" class="nav-link text-uppercase" style="border-bottom: none !important" id="v-pills-neige-tab" data-toggle="pill" href="#v-pills-neige" role="tab" aria-controls="v-pills-neige" aria-selected="false">{{ sportCategories[5]?.name }}</a>
        </li>
      </ul>
    </div>
    <!-- <div class="main-row w-100 d-flex flex-column align-items-center m-0 mt-5">
    </div> -->
  </div>
  <!-- <div class="tab-content wrapper-content" id="activites_pills_tabContent">
          <div class="tab-pane fade active show" style="padding-top: 20px" id="v-pills-vent-mer" role="tabpanel" aria-labelledby="v-pills-vent-mer-tab">
            <h4 class="nav-head m-0">
              <a href="#activites_pills" class="text-reset pr-3"><i class="fas fa-chevron-left"></i></a>
              . VENT & MER
            </h4>
            <ul class="list-unstyled wrapper-content-list quad-list">
              <li>
                <span class="img-container"><img fluid :src="require('@/assets/images/Outline.svg')" /></span>
                Kitesurf
                <i class="fas fa-arrow-right float-right mt-1 chevron-left"></i>
              </li>
              <li>
                <span class="img-container"><img fluid :src="require('@/assets/images/Outline.svg')" /></span>
                Paddle
                <i class="fas fa-arrow-right float-right mt-1 chevron-left"></i>
              </li>
              <li>
                <span class="img-container"><img fluid :src="require('@/assets/images/Outline.svg')" /></span>
                Windsurf
                <i class="fas fa-arrow-right float-right mt-1 chevron-left"></i>
              </li>
              <li>
                <span class="img-container"><img fluid :src="require('@/assets/images/Outline.svg')" /></span>
                Surf
                <i class="fas fa-arrow-right float-right mt-1 chevron-left"></i>
              </li>
            </ul>
          </div>
          <div class="tab-pane fade" style="padding-top: 20px" id="v-pills-montagne" role="tabpanel" aria-labelledby="v-pills-montagne-tab">asdfghj</div>
          <div class="tab-pane fade" style="padding-top: 20px" id="v-pills-pied" role="tabpanel" aria-labelledby="v-pills-pied-tab">zxcvbnm</div>
          <div class="tab-pane fade" style="padding-top: 20px" id="v-pills-multi-acti" role="tabpanel" aria-labelledby="v-pills-multi-acti-tab">
            <h4 class="nav-head m-0">
              <a href="#activites_pills" class="text-reset pr-3"><i class="fas fa-chevron-left"></i></a>
              . MULTI - ACTIVITES
            </h4>
            <ul class="list-unstyled wrapper-content-list quad-list">
              <li>
                <span class="img-container"><img fluid :src="require('@/assets/images/Outline.svg')" /></span>
                VTT Descente
                <i class="fas fa-arrow-right float-right mt-1 chevron-left"></i>
              </li>
              <li>
                <span class="img-container"><img fluid :src="require('@/assets/images/Outline.svg')" /></span>
                Via Ferrata
                <i class="fas fa-arrow-right float-right mt-1 chevron-left"></i>
              </li>
              <li>
                <span class="img-container"><img fluid :src="require('@/assets/images/Outline.svg')" /></span>
                Rafting
                <i class="fas fa-arrow-right float-right mt-1 chevron-left"></i>
              </li>
              <li>
                <span class="img-container"><img fluid :src="require('@/assets/images/Outline.svg')" /></span>
                Paddle
                <i class="fas fa-arrow-right float-right mt-1 chevron-left"></i>
              </li>
              <li>
                <span class="img-container"><img fluid :src="require('@/assets/images/Outline.svg')" /></span>
                Randonnée
                <i class="fas fa-arrow-right float-right mt-1 chevron-left"></i>
              </li>
              <li>
                <span class="img-container"><img fluid :src="require('@/assets/images/Outline.svg')" /></span>
                Escalade
                <i class="fas fa-arrow-right float-right mt-1 chevron-left"></i>
              </li>
              <li>
                <span class="img-container"><img fluid :src="require('@/assets/images/Outline.svg')" /></span>
                Parapente
                <i class="fas fa-arrow-right float-right mt-1 chevron-left"></i>
              </li>
              <li>
                <span class="img-container"><img fluid :src="require('@/assets/images/Outline.svg')" /></span>
                Canonying
                <i class="fas fa-arrow-right float-right mt-1 chevron-left"></i>
              </li>
              <li>
                <span class="img-container"><img fluid :src="require('@/assets/images/Outline.svg')" /></span>
                Yoga
                <i class="fas fa-arrow-right float-right mt-1 chevron-left"></i>
              </li>
              <li>
                <span class="img-container"><img fluid :src="require('@/assets/images/Outline.svg')" /></span>
                Wakeboard
                <i class="fas fa-arrow-right float-right mt-1 chevron-left"></i>
              </li>
              <li>
                <span class="img-container"><img fluid :src="require('@/assets/images/Outline.svg')" /></span>
                VTT Rando
                <i class="fas fa-arrow-right float-right mt-1 chevron-left"></i>
              </li>
            </ul>
          </div>
          <div class="tab-pane fade" style="padding-top: 20px" id="v-pills-bien" role="tabpanel" aria-labelledby="v-pills-bien-tab">zxcvbnm</div>
          <div class="tab-pane fade" style="padding-top: 20px" id="v-pills-neige" role="tabpanel" aria-labelledby="v-pills-neige-tab">123456789</div>
        </div> -->
</template>

<script>
export default {
  name: 'ActivitiesTab',
  data() {
    return {
      loaded: false,
      clickedMultiActivity: false,
      sportCategories: [],
      activeCategory: ''
      // windAndWater: '',
      // mountain: '',
      // walk: '',
      // multiActivities: '',
      // wellNess: '',
      // snow: ''
    }
  },
  watch: {
    sportCategories() {
      console.log(this.sportCategories[0].name)
    }
  },
  created() {
    this.$axios.get('/sport-categories').then((res) => {
      this.sportCategories = res.data.sportCategories
      this.loaded = true
    })
  },
  methods: {
    clicked(category) {
      this.activeCategory = category
      if (category.includes('activ')) {
        this.clickedMultiActivity = true
      } else {
        this.clickedMultiActivity = false
      }
    }
  }
}
</script>

<style scoped>
.sports-block {
  padding-left: calc(100% / 4); /* col-2 offset */
}
.nav-item {
  border: none !important;
}
.container {
  flex-wrap: nowrap !important;
  padding-bottom: 12vh;
}
.wrapper-head-para {
  font-family: Muli, sans-serif;
}
.sport-name {
  padding-left: 1rem;
}
/* md breakpoint */
@media (max-width: 1600px) {
  .nav-item {
    padding-top: 4px !important;
    padding-bottom: 4px !important;
  }
  .main-row {
    margin-top: 0 !important;
  }
}
</style>
