<template>
  <div class="d-flex h-100 align-items-center justify-content-center fg-1">
    <div class="d-flex align-items-center">
      <svg xmlns="http://www.w3.org/2000/svg" height="150" viewBox="0 0 100 100">
        <g id="Calque_2" data-name="Calque 2">
          <g id="Calque_1-2" data-name="Calque 1">
            <path fill="#d82558" d="M48.37,0A52.19,52.19,0,0,0,15.62,10.85l7.63,7.61A41.66,41.66,0,0,1,77.14,22.9a41.48,41.48,0,0,1,4.34,53.68l7.61,7.6A52.26,52.26,0,0,0,48.37,0Z" />
            <path xmlns="http://www.w3.org/2000/svg" fill="white" d="M76.11,88.8a46.3,46.3,0,0,1-61.37-3.52,46,46,0,0,1-3.49-61.22l-.87-.88a47.22,47.22,0,0,0,3.49,63A47.52,47.52,0,0,0,77,89.67Z" />
          </g>
        </g>
        <InlineSvg :src="require(`@/assets/svg/lens.svg`)" height="80" viewBox="-12 -21 50 50" fill="white" />
      </svg>
      <!-- <img class="head-icon d-inline-block" fluid :src="require('@/assets/svg/picto-ski.svg')" /> -->
      <!-- <img class="head-pin-icon d-none d-lg-inline-block" fluid :src="require('@/assets/images/head-pin.png')" /> -->
      <div style="margin-left: 2.5rem; position: relative; top: 4px">
        <!-- <h1 class="heading text-uppercase mb-2">{{ featuredCourse.sports?.[0].name }}</h1> -->
        <h1 class="heading text-uppercase mb-2"><span style="font-weight: bold">Recherche</span></h1>
        <h5 class="header-infos__sub-title d-block"><i class="fas fa-caret-right mr-1"></i>12 séjours</h5>
      </div>
    </div>
  </div>
  <div class="d-flex flex-column align-items-center">
    <span class="header-infos__mentions__title">Critères sélectionnés :</span>
    <InlineProductInfos :infos="['france', '7 jours', 'confirmé', '10 places']" color="white" :icons="['globe', 'timer', 'intensity-2-white', 'people']" width="30%" :divider="false" pt="1rem" />
  </div>
</template>

<script>
import InlineProductInfos from '@/components/elements/InlineProductInfos.vue'

export default {
  name: 'SearchHeaderInfos',
  components: {
    InlineProductInfos
  }
}
</script>

<style scoped>
.header-infos__sub-title {
  font-size: 1.4rem;
  font-weight: 200;
  letter-spacing: 1px;
}
.heading {
  font-size: 3.5rem;
  font-weight: 400;
  letter-spacing: 0.6px;
}
.header-infos__mentions__title {
  text-transform: uppercase;
  text-align: center;
  font-family: Oswald, sans-serif;
  font-weight: bold;
  letter-spacing: 0.09rem;
  padding-bottom: 0.6rem;
}
</style>
