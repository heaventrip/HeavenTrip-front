<template>
  <div class="d-flex h-100 align-items-center justify-content-center fg-1">
    <div class="product-header-infos__title d-flex align-items-center" style="z-index: 5">
      <InlineSvg :src="require('@/assets/svg/circle-ski-light.svg')" class="d-inline-block" style="max-width: 116px" />
      <!-- <img class="head-icon d-inline-block" fluid :src="require('@/assets/svg/picto-ski.svg')" /> -->
      <!-- <img class="head-pin-icon d-none d-lg-inline-block" fluid :src="require('@/assets/images/head-pin.png')" /> -->
      <div style="margin-left: 1.5rem; position: relative; top: 4px">
        <!-- <h1 class="heading text-uppercase mb-2">{{ featuredCourse.sports?.[0].name }}</h1> -->
        <h1 class="heading text-uppercase mb-2">
          <!-- <router-link :to="{ name: 'CheckOutHome', params: { productId: course.id } }"> -->
          <span style="color: #fff; font-weight: bold">{{ course.sports ? course.sports[0]?.name : '' }}</span>
          <!-- </router-link> -->
        </h1>
        <h5 class="text-white header-infos__sub-title text-uppercase d-block"><i class="fas fa-caret-right mr-1"></i>12 séjours</h5>
      </div>
    </div>
  </div>
  <div class="header__bottom-infos d-flex flex-column align-items-center" style="z-index: 10">
    <InlineProductInfos :infos="[course.country?.name, `${course.duration} jours`, course.level?.name, `${course.max} places`]" color="white" icon="globe" width="max-content" :divider="true" pt="1rem" />
  </div>
  <ul class="header__bottom-popup-menu bg-white nav nav-pills nav-justified text-uppercase font-weight-bold narrow-header-pills d-none d-lg-flex align-items-center" id="pills-tab " role="tablist">
    <li class="nav-item" type="button" role="presentation">
      <a @click.prevent="scrollToSection('product-tab-infos')" class="nav-link p-0" id="pills-info-tab" data-toggle="pill" aria-controls="pills-info" aria-selected="false">01. Infos séjour</a>
    </li>
    <li class="nav-item" type="button" role="presentation">
      <a @click.prevent="scrollToSection('product-tab-activities').scrollIntoView()" class="nav-link p-0" id="pills-activityspot-tab" data-toggle="pill" aria-controls="pills-activityspot" aria-selected="true">02. Activités & spot</a>
    </li>
    <li class="nav-item" type="button" role="presentation">
      <a @click.prevent="scrollToSection('product-tab-living').scrollIntoView()" class="nav-link p-0" id="pills-place-tab" data-toggle="pill" aria-controls="pills-place" aria-selected="false">03. Vie sur place</a>
    </li>
    <li class="nav-item" type="button" role="presentation">
      <a @click.prevent="scrollToSection('product-tab-program').scrollIntoView()" class="nav-link p-0" id="pills-programe-tab" data-toggle="pill" aria-controls="pills-programe" aria-selected="false">04. Programme</a>
    </li>
    <li class="nav-item" type="button" role="presentation">
      <a @click.prevent="scrollToSection('product-tab-tips').scrollIntoView()" class="nav-link p-0" id="pills-tips-tab" data-toggle="pill" aria-controls="pills-tips" aria-selected="false">05. Tips & astuces</a>
    </li>
    <li class="nav-item" type="button" role="presentation">
      <a @click.prevent="scrollToSection('product-tab-reviews').scrollIntoView()" class="nav-link p-0" id="pills-opinion-tab" data-toggle="pill" aria-controls="pills-opinion" aria-selected="false">06. Vos avis </a>
    </li>
  </ul>
</template>

<script>
import InlineProductInfos from '@/components/elements/InlineProductInfos.vue'
import gsap from 'gsap'

export default {
  name: 'ProductHeaderInfos',
  components: {
    InlineProductInfos
  },
  props: ['course'],
  data() {
    return {
      imgs: ['https://via.placeholder.com/450.png/', 'https://via.placeholder.com/300.png/', 'https://via.placeholder.com/150.png/', 'https://via.placeholder.com/450.png/']
    }
  },
  mounted() {
    gsap.set('.header__bottom-popup-menu', {
      y: '+=' + window.innerHeight * 0.1 // 10vh
    })
    let tl = gsap.timeline()
    // tl.from('.header-product__bg', { scale: 1.2, duration: 10 })
    tl.from('.product-header-infos__title', { opacity: 0, duration: 0.9 }, '<0.7')
    tl.to(
      ['.header__bottom-popup-menu', '.header__bottom-infos'],
      {
        y: '-=' + window.innerHeight * 0.1
      },
      '<'
    )
    // tl.to('.header--product', { height: window.innerHeight * 0.9, ease: 'power3.out' }, '<0.4')
  }
}
</script>

<style scoped>
.header__bottom-popup-menu,
.header__bottom-infos {
  position: absolute;
  bottom: 0;
  z-index: 1;
}
.header__bottom-popup-menu {
  width: 100vw;
  height: 10vh;
}
.header__bottom-infos {
  width: 100%;
}
.header-infos__sub-title {
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0.6px;
}
.header-infos__mentions__title {
  text-transform: uppercase;
  text-align: center;
  font-family: Oswald, sans-serif;
  font-weight: bold;
}
</style>
