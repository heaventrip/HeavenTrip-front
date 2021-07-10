<template>
  <div class="checkout-header sticky-header">
    <div class="checkout-header-div m-flex bg-dark text-white d-flex align-items-center text-uppercase" v-if="activeStep !== 'validation'">
      <a href="#" class="back-to-home-link text-reset text-decoration-none font-weight-500 d-flex align-items-center align-self-stretch bg-danger px-3"><i class="fa fa-home h6 mb-0"></i></a>
      <a href="#" class="descriptif-link text-reset text-decoration-none font-weight-bold d-flex align-items-center align-self-stretch px-4 ml-5" style="border-right: 1px solid white"><i class="fa fa-chevron-left mr-3 h6 mb-0"></i> descriptif</a>
      <div class="mb-0 ml-4 pr-4 border-right font-weight-light">{{ course?.sports[0].sportCategories[0].name }}</div>
      <div class="mb-0 ml-3 font-weight-bold">{{ course?.sports[0].name }}</div>
      <p class="ml-auto mb-0 cap-letter font-weight-light mb-0 text-right">Besoin d'un conseil ou d'un renseignement ?</p>
      <div class="d-flex justify-content-around text-white text-uppercase font-weight-500 mail-box" style="margin-right: 6rem">
        <a href="tel:0369316618" class="text-reset text-decoration-none border-right px-4"><img class="mr-3" fluid :src="require('@/assets/images/tel.png')" /><img class="mr-3 hover-img" fluid :src="require('@/assets/images/tel_h.png')" />03 69 31 66 18</a>
        <a href="#" class="text-reset text-decoration-none pl-4"><img class="mr-3" fluid :src="require('@/assets/images/chat.png')" /><img class="mr-3 hover-img" fluid :src="require('@/assets/images/chat_h.png')" />écrivez-nous</a>
      </div>
    </div>
    <div class="checkout-header-block d-flex shadow-sm block-header position-relative">
      <div class="d-flex align-items-center checkout-header-block-container flex-1 text-white" style="background-color: #5a3a5f">
        <svg xmlns="http://www.w3.org/2000/svg" height="100" viewBox="0 0 100 100">
          <g id="Calque_2" data-name="Calque 2">
            <g id="Calque_1-2" data-name="Calque 1">
              <path fill="#d82558" d="M48.37,0A52.19,52.19,0,0,0,15.62,10.85l7.63,7.61A41.66,41.66,0,0,1,77.14,22.9a41.48,41.48,0,0,1,4.34,53.68l7.61,7.6A52.26,52.26,0,0,0,48.37,0Z" />
              <path xmlns="http://www.w3.org/2000/svg" fill="white" d="M76.11,88.8a46.3,46.3,0,0,1-61.37-3.52,46,46,0,0,1-3.49-61.22l-.87-.88a47.22,47.22,0,0,0,3.49,63A47.52,47.52,0,0,0,77,89.67Z" />
            </g>
          </g>
          <InlineSvg v-if="course?.sports && course?.sports[0].picto !== null" :src="require(`@/assets/svg/${course.sports[0].picto}.svg`)" viewBox="-15 -18 57 57" fill="white" />
        </svg>
        <div style="margin-left: 1.2rem">
          <h2 class="heading text-uppercase mb-2 font-weight-bold" style="">{{ course?.sports[0].name }}</h2>
          <div class="text-uppercase spacing-word"><i class="fas fa-caret-right mr-1"></i> {{ course?.spot?.name }}</div>
        </div>
        <div class="checkout-header-divider h-75" style="margin: 0 4rem 0 5rem">
          <span class="line"></span>
        </div>
        <div class="text-uppercase text-white font-weight-500 calender-dates mr-5">
          <a href="#" class="text-reset text-decoration-none">
            <InlineSvg :src="require('@/assets/svg/date-search.svg')" fill="white" height="20" class="mr-3 d-inline-block" />
            <span class="d-inline-block align-middle" style="font-weight: 100">départ :&nbsp;</span>
            <span class="d-inline-block align-middle">&nbsp;06/10/2020</span>
          </a>
          <a href="#" class="text-reset text-decoration-none">
            <InlineSvg :src="require('@/assets/svg/date-search.svg')" fill="white" height="20" class="mr-3 d-inline-block" />
            <span class="d-inline-block align-middle" style="font-weight: 100">retour :&nbsp;</span>
            <span class="d-inline-block align-middle">&nbsp;06/10/2020</span>
          </a>
        </div>
        <div class="recap-div div-nav-link ml-auto d-none">
          <h6 class="font-weight-bold text-uppercase recap-head mt-0">recap séjour :</h6>
          <ul class="list-unstyled font-weight-500 recap-list mt-3 mb-0">
            <li>
              <span class="bg-white pr-3">Trippers</span>
              <span class="bg-white pl-3">2 x 1990 &euro;</span>
            </li>
            <li class="flag">
              <span class="bg-white pr-3">Options séjour</span>
              <span class="bg-white pl-3">120 &euro;</span>
            </li>
            <li class="flag">
              <span class="bg-white pr-3">Remise spéciale</span>
              <span class="bg-white pl-3">5 %</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="ml-auto activity-total d-flex align-items-center total-amount-block" style="border-left: 1px solid rgba(255, 255, 255, 0.15); color: white" :style="{ backgroundColor: activeStep === 'validation' ? '#292f33' : 'rgb(90, 58, 95)' }">
        <div class="total-amount text-uppercase mb-0">
          PRIX TOTAL :<br /><span class="amount font-weight-bold">{{ course?.price.toString()[0] }}&thinsp;{{ course?.price.toString().slice(1) }}&thinsp;&euro;</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CheckOutHeader',
  props: ['course', 'session', 'active-step'],
  data() {
    return {}
  }
}
</script>

<style scoped>
.back-to-home-link {
  border-right: 1px solid white;
  transition: all 0.3s ease;
}
.back-to-home-link:hover {
  color: #292f33 !important;
  background-color: white !important;
}
.descriptif-link {
  transition: all 0.3s ease;
}
.descriptif-link:hover {
  background-color: white;
  color: #292f33 !important;
}
</style>
