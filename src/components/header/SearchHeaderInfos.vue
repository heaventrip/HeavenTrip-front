<template>
  <div class="d-flex h-100 align-items-center justify-content-center fg-1">
    <div class="d-flex align-items-center">
      <InlineSvg :src="require('@/assets/svg/circle-ski-light.svg')" class="d-inline-block" style="max-width: 150px" />
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
