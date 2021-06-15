<template>
  <div class="stay-dropdown d-block d-lg-none">
    <select class="form-control select-place">
      <option selected="" value="#pills-info">INFOS SéJOUR</option>
      <option value="#pills-activityspot">ACTIVITéS & spot</option>
      <option value="#pills-place">VIE SUR PLACE</option>
      <option value="#pills-programe">PROGRAMME</option>
      <option value="#pills-tips">TIPS & ASTUCES</option>
      <option value="#pills-opinion">VOS AVIS</option>
    </select>
  </div>
  <div style="position: relative">
    <div class="slider" :class="{ 'slider--up': slidingUp }" v-if="!slideIsUp"></div>
    <ul
      :class="{ 'fade--out': slidingUp, 'fade--in--menu': slideIsUp }"
      style="position: relative"
      :style="[slideIsUp && !navIsActive ? 'height: 6vh; position: sticky; top: 0px; z-index: 2' : 'height: 10vh']"
      class="bg-white nav nav-pills nav-justified text-uppercase font-weight-bold narrow-header-pills d-none d-lg-flex align-items-center"
      id="pills-tab "
      role="tablist"
    >
      <li class="nav-item" role="presentation">
        <a @click.prevent="scrollToSection('product-tab-infos')" class="nav-link" id="pills-info-tab" data-toggle="pill" aria-controls="pills-info" aria-selected="false">01. Infos séjour</a>
      </li>
      <li class="nav-item" role="presentation">
        <a @click.prevent="scrollToSection('product-tab-activities').scrollIntoView()" class="nav-link active" id="pills-activityspot-tab" data-toggle="pill" aria-controls="pills-activityspot" aria-selected="true">02. Activités & spot</a>
      </li>
      <li class="nav-item" role="presentation">
        <a @click.prevent="scrollToSection('product-tab-living').scrollIntoView()" class="nav-link" id="pills-place-tab" data-toggle="pill" aria-controls="pills-place" aria-selected="false">03. Vie sur place</a>
      </li>
      <li class="nav-item" role="presentation">
        <a @click.prevent="scrollToSection('product-tab-program').scrollIntoView()" class="nav-link" id="pills-programe-tab" data-toggle="pill" aria-controls="pills-programe" aria-selected="false">04. Programme</a>
      </li>
      <li class="nav-item" role="presentation">
        <a @click.prevent="scrollToSection('product-tab-tips').scrollIntoView()" class="nav-link" id="pills-tips-tab" data-toggle="pill" aria-controls="pills-tips" aria-selected="false">05. Tips & astuces</a>
      </li>
      <li class="nav-item" role="presentation">
        <a @click.prevent="scrollToSection('product-tab-reviews').scrollIntoView()" class="nav-link" id="pills-opinion-tab" data-toggle="pill" aria-controls="pills-opinion" aria-selected="false">06. Vos avis </a>
      </li>
    </ul>
    <div class="product-content d-flex justify-content-around">
      <div :class="{ 'fade--out': slidingUp, 'fade--in--content': slideIsUp }" class="w-50 tab-content main-tab d-flex flex-column justify-content-around" id="pills-tabContent" style="position: relative; padding: 3.5rem 3rem; min-height: 100vh">
        <div id="product-tab-infos" class="pt-5">
          <ProductTabInfos />
        </div>
        <div id="product-tab-activities" style="padding-top: 4rem">
          <ProductTabActivities />
        </div>
        <div id="product-tab-living" style="padding-top: 4rem">
          <ProductTabLiving />
        </div>
        <div id="product-tab-program" style="padding-top: 4rem">
          <ProductTabProgram />
        </div>
        <div id="product-tab-tips" style="padding-top: 4rem">
          <ProductTabTips />
        </div>
        <div id="product-tab-reviews" style="padding-top: 4rem; min-height: 100vh">
          <ProductTabReviews />
        </div>
        <!-- <div class="w-50" id="pills-info" aria-labelledby="pills-info-tab">
        </div>
        <div class="w-50" id="pills-activityspot" aria-labelledby="pills-activityspot-tab">
        </div>
        <div class="w-50" id="pills-place" aria-labelledby="pills-place-tab">
        </div>
        <div class="w-50" id="pills-programe" aria-labelledby="pills-programe-tab">
        </div>
        <div class="w-50" id="pills-tips" aria-labelledby="pills-tips-tab">
        </div>
        <div class="w-50" id="pills-opinion" aria-labelledby="pills-opinion-tab">
        </div> -->
      </div>
      <div class="" style="width: 35%">
        <div class="" style="position: sticky; top: 10vh">
          <h6 class="galary-head font-weight-bold mb-0 d-flex">
            GALERIE PHOTOS
            <span class="galary-count ml-auto font-weight-normal">24 médias</span>
          </h6>
          <swiper :spaceBetween="10" :autoplay="{ delay: 5000 }" :loop="true" :effect="'fade'" :pagination="{ type: 'fraction', renderFraction: renderFraction }" :navigation="true">
            <swiper-slide><img :src="require('@/assets/images/beach.jpg')" width="100%" /></swiper-slide>
            <swiper-slide><img :src="require('@/assets/images/beach1.jpg')" width="100%" /></swiper-slide>
            <swiper-slide><img :src="require('@/assets/images/beach.jpg')" width="100%" /></swiper-slide>
            <swiper-slide><img :src="require('@/assets/images/beach1.jpg')" width="100%" /></swiper-slide>
          </swiper>
          <h6 class="galary-head font-weight-bold mb-4 d-flex">
            DISCUSSIONS
            <span class="count-circle ml-auto font-weight-normal"><i class="fas fa-ellipsis-h"></i></span>
          </h6>
          <ul class="list-unstyled mb-0 discuss-list mt-3">
            <li>
              <div class="form-row mt-3 mb-5">
                <div class="col-2">
                  <div class="profile-container">
                    <img class="img-fill" fluid :src="require('@/assets/images/ui_faces/4.jpg')" />
                  </div>
                </div>
                <div class="col-10">
                  <h6 class="discuss-head">Helena Brauer <span>Jeudi à 12:37</span></h6>
                  <p class="content-desc">During a project build, it is necessary to evaluate the product design and development against project requirements and outcomes</p>
                  <a href="#" class="reply-text text-reset">LUI REPONDRE</a>
                </div>
              </div>
            </li>
            <li>
              <div class="form-row mt-3 mb-5">
                <div class="col-2">
                  <div class="profile-container">
                    <img class="img-fill" fluid :src="require('@/assets/images/ui_faces/1.jpg')" />
                  </div>
                </div>
                <div class="col-10">
                  <h6 class="discuss-head">Helena Brauer <span>Jeudi à 12:37</span></h6>
                  <p class="content-desc">During a project build, it is necessary to evaluate the product design and development against project requirements and outcomes</p>
                  <a href="#" class="reply-text text-reset">LUI REPONDRE</a>
                </div>
              </div>
            </li>
            <li>
              <div class="form-row mt-3 mb-5">
                <div class="col-2">
                  <div class="profile-container">
                    <img class="img-fill" fluid :src="require('@/assets/images/ui_faces/2.jpg')" />
                  </div>
                </div>
                <div class="col-10">
                  <h6 class="discuss-head">Helena Brauer <span>Jeudi à 12:37</span></h6>
                  <p class="content-desc">During a project build, it is necessary to evaluate the product design and development against project requirements and outcomes</p>
                  <a href="#" class="reply-text text-reset">LUI REPONDRE</a>
                </div>
              </div>
            </li>
          </ul>
          <div class="reply-block position-relative pr-4 mb-5">
            <div class="profile-container float-right">
              <img class="img-fill" fluid :src="require('@/assets/images/ui_faces/2.jpg')" />
            </div>
            <textarea class="reply-container form-control pr-5" rows="1">Répondre…</textarea>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductTabInfos from '@/components/product/tabs/ProductTabInfos.vue'
import ProductTabActivities from '@/components/product/tabs/ProductTabActivities.vue'
import ProductTabLiving from '@/components/product/tabs/ProductTabLiving.vue'
import ProductTabProgram from '@/components/product/tabs/ProductTabProgram.vue'
import ProductTabReviews from '@/components/product/tabs/ProductTabReviews.vue'
import ProductTabTips from '@/components/product/tabs/ProductTabTips.vue'
import SwiperCore, { Thumbs, Navigation, Pagination, EffectFade, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import gsap from 'gsap'
SwiperCore.use([Thumbs, Navigation, Pagination, EffectFade, Autoplay])

export default {
  name: 'ProductContent',
  components: {
    ProductTabInfos,
    ProductTabActivities,
    ProductTabLiving,
    ProductTabProgram,
    ProductTabReviews,
    ProductTabTips,
    Swiper,
    SwiperSlide
  },
  props: ['nav-is-active'],
  emits: ['slide-is-up', 'slide-is-down'],
  data() {
    return {
      clickedInfos: false,
      clickedActivities: false,
      clickedLiving: false,
      clickedProgram: false,
      clickedTips: false,
      clickedReviews: false,
      slidingUp: false,
      slideIsUp: false,
      navIsActive: this.$props.navIsActive,
      currentPaginationStyle: `
        font-family: Oswald, sans-serif;
        font-weight: 800;
        font-size: 2rem;
        color: #fff;`,
      totalPaginationStyle: `
        font-family: Oswald, sans-serif;
        color: rgba(250, 250, 250, 0.7);
        font-size: 1rem;`
    }
  },
  watch: {
    navIsActive(newVal) {
      console.log(newVal)
      if (newVal === true) {
        gsap.set('.header--product', { height: window.innerHeight, ease: 'power3.out' })
      }
    },
    slideIsUp(newVal) {
      let that = this

      if (newVal === true) {
        this.$emit('slide-is-up')
        window.removeEventListener('scroll', that.handleScrollDown)
        window.addEventListener('scroll', that.handleScrollUp)
      }
      if (newVal === false) {
        this.$emit('slide-is-down')
        window.removeEventListener('scroll', that.handleScrollUp)

        setTimeout(function () {
          window.addEventListener('scroll', that.handleScrollDown)
        }, 1000) // wait for scrollTo to finish
      }
    }
  },
  methods: {
    renderFraction(currentClass, totalClass) {
      return `<span style="${this.currentPaginationStyle}" class="${currentClass}"></span>
      <span style="${this.currentPaginationStyle}">.</span>
      <sup><span style="${this.totalPaginationStyle}" class="${totalClass}"></span></sup>`
    },
    scrollToSection(el) {
      document.querySelector(`#${el}`).scrollIntoView()
    },
    // scroll to top when user reaches top of content (wheel up)
    handleScrollUp() {
      let contentTop = window.innerHeight * 0.9
      if (window.pageYOffset < contentTop) {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        gsap.to('.header--product', { height: window.innerHeight, ease: 'power3.out', duration: 1 }) // duration 1000sec same as above
        this.slideIsUp = false
      }
    },
    // first scroll down brings page up (wheel down)
    handleScrollDown() {
      this.slidingUp = true
      setTimeout(() => {
        window.scrollTo({ top: window.innerHeight })
        this.slidingUp = false
        this.slideIsUp = true
      }, 800)
    }
  },
  mounted() {
    let tl = gsap.timeline({ duration: 1 })
    tl.from('.header-bg-image', { scale: 1.2, duration: 10 })
    tl.to('.header--product', { height: window.innerHeight * 0.9, ease: 'power3.out' }, '<0.4')
    tl.from('.product-header-infos__title', { opacity: 0, duration: 0.9 }, '<0.7')

    window.addEventListener('scroll', this.handleScrollDown)
  }
}
</script>

<style scoped>
.swiper-button-prev,
.swiper-button-next {
  color: #292f33;
}
.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.nav-link {
  padding: 0.5rem !important;
}
.product-content {
  background-color: #fcfcfc;
}
.slider {
  background-color: #fcfcfc;
  position: absolute;
  width: 100vw;
  height: 100vh;
}
.slider--up {
  transition: transform 0.8s cubic-bezier(0.85, 0, 0.15, 1);
  transform: translateY(-90vh);
}
.fade--out {
  transition: opacity 0.3s ease 0.2s;
  opacity: 0;
}
.fade--in--menu {
  transition: opacity 0.3s ease;
  opacity: 1;
}
.fade--in--content {
  transition: opacity 0.8s ease 0.4s;
  opacity: 1;
}
</style>
