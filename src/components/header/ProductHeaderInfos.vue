<template>
  <div class="header">
    <TheNavSticky />
  </div>
  <div class="product-infos__container">
    <div class="header__main-title d-flex align-items-center justify-content-center">
      <div class="product-header-infos__title d-flex align-items-center" style="z-index: 5">
        <svg xmlns="http://www.w3.org/2000/svg" height="120" viewBox="0 0 100 100">
          <g id="Calque_2" data-name="Calque 2">
            <g id="Calque_1-2" data-name="Calque 1">
              <path fill="#d82558" d="M48.37,0A52.19,52.19,0,0,0,15.62,10.85l7.63,7.61A41.66,41.66,0,0,1,77.14,22.9a41.48,41.48,0,0,1,4.34,53.68l7.61,7.6A52.26,52.26,0,0,0,48.37,0Z" />
              <path xmlns="http://www.w3.org/2000/svg" fill="white" d="M76.11,88.8a46.3,46.3,0,0,1-61.37-3.52,46,46,0,0,1-3.49-61.22l-.87-.88a47.22,47.22,0,0,0,3.49,63A47.52,47.52,0,0,0,77,89.67Z" />
            </g>
          </g>
          <InlineSvg v-if="course.sports && course.sports[0].picto !== null" :src="require(`@/assets/svg/${course.sports[0].picto}.svg`)" viewBox="-12 -14 50 50" fill="white" />
        </svg>
        <!-- <img class="head-icon d-inline-block" fluid :src="require('@/assets/svg/picto-ski.svg')" /> -->
        <!-- <img class="head-pin-icon d-none d-lg-inline-block" fluid :src="require('@/assets/images/head-pin.png')" /> -->
        <div style="margin-left: 2rem; position: relative; top: 4px">
          <!-- <h1 class="heading text-uppercase mb-2">{{ featuredCourse.sports?.[0].name }}</h1> -->
          <h1 class="heading text-uppercase mb-2">
            <!-- <router-link :to="{ name: 'CheckOutHome', params: { productId: course.id } }"> -->
            <span style="color: #fff; font-weight: bold; font-size: 3rem; letter-spacing: 0.03rem">{{ course.sports ? course.sports[0].name : '' }}</span>
            <!-- </router-link> -->
          </h1>
          <h5 v-if="!course.multisport" class="text-white header-infos__sub-title text-uppercase d-block"><i class="fas fa-caret-right mr-1"></i>{{ course?.spot?.name }}</h5>
          <div class="d-flex" v-else>
            <Tag class="mr-2" v-for="sport in course.sports" :text="sport.name" color="grey-product-header" :key="sport" />
          </div>
        </div>
      </div>
    </div>
    <div class="header__bottom-infos d-flex flex-column align-items-center">
      <div class="block d-flex align-items-center text-uppercase justify-content-between">
        <div class="block__item">
          <Tag :text="`${course.sessions?.length} départs`" color="white" style="width: min-content" />
        </div>
        <div class="block__item">
          <div class="block__item__content">
            <InlineSvg class="block__item__svg" :src="require(`@/assets/svg/globe.svg`)" height="28" />
            <span class="block__text-content">
              <div class="block__text-content__title">Pays</div>
              <div>{{ course.country?.name }}</div>
            </span>
          </div>
        </div>
        <div class="block__item">
          <div class="block__item__content">
            <InlineSvg class="block__item__svg" :src="require(`@/assets/svg/spot.svg`)" height="28" />
            <span class="block__text-content">
              <div class="block__text-content__title">Spot</div>
              <div>{{ course.spot?.name }}</div>
            </span>
          </div>
        </div>
      </div>
      <div class="block d-flex align-items-center text-uppercase justify-content-between">
        <div class="block__item">
          <div class="block__item__content--first">
            <InlineSvg class="block__item__svg" :src="require(`@/assets/svg/timer.svg`)" height="28" />
            <span class="block__text-content">
              <div class="block__text-content__title">Durée</div>
              <div>{{ course.duration?.name }}</div>
            </span>
          </div>
        </div>
        <div class="block__item">
          <div class="block__item__content">
            <InlineSvg class="block__item__svg" :src="require(`@/assets/svg/intensity-2-dark.svg`)" height="28" />
            <span class="block__text-content">
              <div class="block__text-content__title">Niveau</div>
              <div>{{ course.level?.name }}</div>
            </span>
          </div>
        </div>
        <div class="block__item">
          <div class="block__item__content">
            <InlineSvg class="block__item__svg" :src="require(`@/assets/svg/people.svg`)" height="28" />
            <span class="block__text-content">
              <div class="block__text-content__title">Groupe</div>
              <div>{{ course.max }}</div>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="scrolldown-icon">
      <svg id="PICTO_EXPLORE" class="mr-3" xmlns="http://www.w3.org/2000/svg" width="13" height="30" viewBox="0 0 10.61 24.495">
        <path
          class="scrolldown-icon__mouse"
          id="Tracé_2498"
          data-name="Tracé 2498"
          d="M38.884,34.308h0V42.26a4.421,4.421,0,1,0,8.842,0V34.308a4.421,4.421,0,1,0-8.842,0Zm-.884,0a5.305,5.305,0,1,1,10.61,0V42.26a5.305,5.305,0,1,1-10.61,0V34.308Z"
          transform="translate(-38 -29)"
          fill="#fff"
          fill-rule="evenodd"
        />
        <path id="Tracé_2499" data-name="Tracé 2499" d="M49,35.442V37.21a.442.442,0,0,0,.884,0V35.442a.442.442,0,1,0-.884,0Z" transform="translate(-44.137 -32.347)" fill="#fff" fill-rule="evenodd" />
        <path class="scrolldown-icon__arrow" id="Tracé_2500" data-name="Tracé 2500" d="M45.953,78.735,48.384,76.3a.442.442,0,1,1,.625.625l-2.744,2.744a.442.442,0,0,1-.625,0l-2.765-2.765a.442.442,0,1,1,.625-.625Z" transform="translate(-40.648 -55.307)" fill="#fff" fill-rule="evenodd" />
      </svg>
      <span>Détails & booking</span>
    </div>
  </div>
  <ul class="header__bottom-popup-menu bg-white nav nav-pills nav-justified text-uppercase font-weight-bold narrow-header-pills d-none d-lg-flex align-items-center" id="pills-tab" role="tablist">
    <li class="nav-item" type="button" role="presentation">
      <a @click.prevent="$emit('clicked-tab', 'activities')" class="nav-link p-0" id="pills-info-tab" data-toggle="pill" aria-controls="pills-info" aria-selected="false">01. Infos séjour</a>
    </li>
    <li class="nav-item" type="button" role="presentation">
      <a @click.prevent="$emit('clicked-tab', 'activities')" class="nav-link p-0" id="pills-activityspot-tab" data-toggle="pill" aria-controls="pills-activityspot" aria-selected="true">02. Activités & spot</a>
    </li>
    <li class="nav-item" type="button" role="presentation">
      <a @click.prevent="$emit('clicked-tab', 'living')" class="nav-link p-0" id="pills-place-tab" data-toggle="pill" aria-controls="pills-place" aria-selected="false">03. Vie sur place</a>
    </li>
    <li class="nav-item" type="button" role="presentation">
      <a @click.prevent="$emit('clicked-tab', 'program')" class="nav-link p-0" id="pills-programe-tab" data-toggle="pill" aria-controls="pills-programe" aria-selected="false">04. Programme</a>
    </li>
    <li class="nav-item" type="button" role="presentation">
      <a @click.prevent="$emit('clicked-tab', 'tips')" class="nav-link p-0" id="pills-tips-tab" data-toggle="pill" aria-controls="pills-tips" aria-selected="false">05. Tips & astuces</a>
    </li>
    <li class="nav-item" type="button" role="presentation">
      <a @click.prevent="$emit('clicked-tab', 'reviews')" class="nav-link p-0" id="pills-opinion-tab" data-toggle="pill" aria-controls="pills-opinion" aria-selected="false">06. Vos avis </a>
    </li>
  </ul>
</template>

<script>
import TheNavSticky from '@/components/nav/TheNavSticky.vue'
import Tag from '@/components/elements/Tag.vue'
import gsap from 'gsap'
// import Tag from '../elements/Tag.vue'

export default {
  name: 'ProductHeaderInfos',
  props: ['course'],
  components: {
    TheNavSticky,
    Tag
  },
  data() {
    return {
      imgs: ['https://via.placeholder.com/450.png/', 'https://via.placeholder.com/300.png/', 'https://via.placeholder.com/150.png/', 'https://via.placeholder.com/450.png/']
    }
  },
  methods: {
    animateIcon(type) {
      if (type === 'big') gsap.to('.scrolldown-icon', { scale: 1.2, duration: 0.15 })
      if (type === 'small') gsap.to('.scrolldown-icon', { scale: 1, duration: 0.15 })
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
      ['.header__bottom-popup-menu'],
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
.header__main-title {
  height: 45%;
  margin-top: auto;
}
.header__bottom-infos {
  margin-bottom: auto;
}
.scrolldown-icon {
  filter: opacity(0.5);
  align-self: center;
  color: #fff;
  margin-top: auto;
  margin-bottom: auto;
  text-transform: uppercase;
  font-size: 0.75rem;
  font-weight: 200;
  font-family: Oswald, sans-serif;
}
.product-infos__container {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 70px - 10vh);
  /* padding-bottom: 10vh */
  justify-content: center;
  position: relative;
  top: 70px;
}

/* Inline infos block */
.block__item {
  width: 33%;
}
.block__item:nth-child(2) {
  padding: 0;
  text-align: center;
  width: 50%;
  border-left: 1px solid rgba(255, 255, 255, 0.15);
  border-right: 1px solid rgba(255, 255, 255, 0.15);
}
.block__item:first-child {
  text-align: left;
}
.block__item__content {
  width: max-content;
  margin-left: 25%;
}
.block__text-content div:last-child {
  font-weight: 500;
}
.half-border {
  width: 50%;
  height: 1px;
  background: rgba(250, 250, 250, 0.35);
}
.block {
  width: 58%;
  height: max-content;
  padding: 2.5rem 0;
}
.block:first-of-type {
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
}
.block__text-content {
  margin-left: 0.6rem;
  display: inline-block;
  vertical-align: middle;
  font-size: 0.8175rem;
  letter-spacing: 0.13rem;
  color: #fff;
  text-align: left;
}
.block__text-content__title {
  color: rgba(250, 250, 250, 0.6);
  font-size: 0.75rem;
}
.block__item__svg {
  fill: #fff;
}

.header__bottom-popup-menu {
  position: absolute;
  bottom: 0;
  z-index: 1;
  width: 100vw;
  height: 10vh;
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
