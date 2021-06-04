<template>
  <div class="d-flex flex-column align-items-center justify-content-center">
    <div class="d-flex align-items-center">
      <InlineSvg :src="require('@/assets/svg/circle-ski-light.svg')" class="d-inline-block" style="max-width: 116px" />
      <!-- <img class="head-icon d-inline-block" fluid :src="require('@/assets/svg/picto-ski.svg')" /> -->
      <!-- <img class="head-pin-icon d-none d-lg-inline-block" fluid :src="require('@/assets/images/head-pin.png')" /> -->
      <div style="margin-left: 1.5rem; position: relative; top: 4px">
        <!-- <h1 class="heading text-uppercase mb-2">{{ featuredCourse.sports?.[0].name }}</h1> -->
        <h1 class="heading text-uppercase mb-2"><span style="font-weight: bold">Recherche</span></h1>
        <h5 class="header-infos__sub-title text-uppercase d-block"><i class="fas fa-caret-right mr-1"></i>12 séjours</h5>
      </div>
    </div>
    <div>Critères sélectionnés :</div>
    <InlineProductInfos :infos="['france', '7 jours', 'confirmé', '10 places']" color="white" icon="globe" pl="1rem" pr="1rem" width="auto" />
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
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0.6px;
}
</style>
