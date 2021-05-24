<template>
  <div class="container">
    <div class="row w-100 wrapper-head-para" :style="{ visibility: clickedMultiactivity }" style="margin-left: 65px; margin-right: 65px; padding-bottom: 1.5rem; border-bottom: 1px dashed #7c7c7ca6">(Variable prénom), choisis un sport et découvre nos compositions en séjours multi-activités.</div>
    <div class="row w-100 m-0 mt-5">
      <div id="activites_pills" class="col-12 col-lg-3">
        <h4 class="nav-head m-0">
          <a href="#header_nav" class="text-reset pr-3"><i class="fas fa-chevron-left"></i></a>
          . ACTIVITéS
        </h4>
        <ul class="nav navbar-nav inner-nav-list flex-column nav-pills wrapper-pills border-0 mobile-navs" id="activites_pills_tab" role="tablist" aria-orientation="vertical">
          <li class="nav-item" role="presentation">
            <a class="nav-link active" id="v-pills-vent-mer-tab" data-toggle="pill" href="#v-pills-vent-mer" role="tab" aria-controls="v-pills-vent-mer" aria-selected="false">VENT & MER <i class="fa fa-chevron-right chevron-left float-right"></i></a>
          </li>
          <li class="nav-item" role="presentation">
            <a class="nav-link" id="v-pills-montagne-tab" data-toggle="pill" href="#v-pills-montagne" role="tab" aria-controls="v-pills-montagne" aria-selected="false">MONTAGNE <i class="fa fa-chevron-right chevron-left float-right"></i></a>
          </li>
          <li class="nav-item" role="presentation">
            <a @click="clickedMultiactivity = ''" class="nav-link" id="v-pills-pied-tab" data-toggle="pill" href="#v-pills-pied" role="tab" aria-controls="v-pills-pied" aria-selected="false">A PIED <i class="fa fa-chevron-right chevron-left float-right"></i></a>
          </li>
          <li class="nav-item" role="presentation">
            <a @click="clickedMultiactivity = 'hidden'" class="nav-link" id="v-pills-multi-acti-tab" data-toggle="pill" href="#v-pills-multi-acti" role="tab" aria-controls="v-pills-multi-acti" aria-selected="false">MULTI - ACTIVITES <i class="fa fa-chevron-right chevron-left float-right"></i></a>
          </li>
          <li class="nav-item" role="presentation">
            <a class="nav-link" id="v-pills-bien-tab" data-toggle="pill" href="#v-pills-bien" role="tab" aria-controls="v-pills-bien" aria-selected="false">BIEN-ÊTRE <i class="fa fa-chevron-right chevron-left float-right"></i></a>
          </li>
          <li class="nav-item" role="presentation">
            <a class="nav-link" id="v-pills-neige-tab" data-toggle="pill" href="#v-pills-neige" role="tab" aria-controls="v-pills-neige" aria-selected="false">NEIGE <i class="fa fa-chevron-right chevron-left float-right"></i></a>
          </li>
        </ul>
      </div>
      <div class="col-12 col-lg-9">
        <div class="row h-100 justify-content-center align-items-center main-grid">
          <div class="col-3">
            <svg transform="translate(0, -5) rotate(-30)" height="110" width="110" viewBox="0 0 400 400">
              <svg x="-10" height="400" width="200" fill="none">
                <circle cx="205" cy="220" r="50%" stroke="white" stroke-width="4" />
              </svg>
              <svg x="210" height="400" width="200" fill="none">
                <circle cx="-5" cy="220" r="50%" stroke="orange" stroke-width="17" />
              </svg>
            </svg>
            <span class="sport-name">Plongée</span>
          </div>
          <div class="col-3" v-if="activitiesCount >= 2">
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
          <div class="col-3" v-if="activitiesCount >= 3">
            <svg transform="translate(0, -5) rotate(-30)" height="110" width="110" viewBox="0 0 400 400">
              <svg x="-10" height="400" width="200" fill="none">
                <circle cx="205" cy="220" r="50%" stroke="white" stroke-width="4" />
              </svg>
              <svg x="210" height="400" width="200" fill="none">
                <circle cx="-5" cy="220" r="50%" stroke="orange" stroke-width="17" />
              </svg>
            </svg>
            <span class="sport-name">Surf</span>
          </div>
        </div>
        <div class="row justify-content-center align-items-center" v-if="activitiesCount > 3">
          <div class="col-3" v-if="activitiesCount >= 4">4</div>
          <div class="col-3" v-if="activitiesCount >= 5">5</div>
          <div class="col-3" v-if="activitiesCount >= 6">6</div>
        </div>
        <div class="row justify-content-center align-items-center" v-if="activitiesCount > 6">
          <div class="col-3" v-if="activitiesCount >= 6">7</div>
          <div class="col-3" v-if="activitiesCount >= 8">8</div>
          <div class="col-3" v-if="activitiesCount >= 9">9</div>
        </div>
      </div>
    </div>
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
      activitiesCount: 3,
      clickedMultiactivity: false
    }
  }
}
</script>

<style scoped>
.main-grid {
  position: relative;
  left: -5vw;
}
.wrapper-head-para {
  font-family: Muli, sans-serif;
}
.sport-name {
  padding-left: 1rem;
}
</style>
