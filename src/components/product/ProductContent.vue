<template>
  <!-- <div class="stay-dropdown d-block d-lg-none">
    <select class="form-control select-place">
      <option selected="" value="#pills-info">Infos séjour</option>
      <option value="#pills-activityspot">Activités & spot</option>
      <option value="#pills-place">Vie sur place</option>
      <option value="#pills-programe">Programme</option>
      <option value="#pills-tips">Tips & astuces</option>
      <option value="#pills-opinion">Vos avis</option>
    </select>
  </div> -->
  <div>
    <div style="position: fixed; top: 0px; z-index: 2; width: 100vw">
      <ProductNav :course="course" />
      <ul style="height: 50px" class="bg-white nav nav-pills nav-justified text-uppercase font-weight-bold narrow-header-pills d-none d-lg-flex align-items-center" id="pills-tab " role="tablist">
        <li class="nav-item" role="presentation" type="button">
          <a @click.prevent="scrollToSection('product-tab-infos')" class="nav-link" id="pills-infos-tab" data-toggle="pill" aria-controls="pills-info" aria-selected="false">01. Infos séjour</a>
        </li>
        <li class="nav-item" role="presentation" type="button">
          <a @click.prevent="scrollToSection('product-tab-activities')" class="nav-link" id="pills-activities-tab" data-toggle="pill" aria-controls="pills-activityspot" aria-selected="true">02. Activités & spot</a>
        </li>
        <li class="nav-item" role="presentation" type="button">
          <a @click.prevent="scrollToSection('product-tab-living')" class="nav-link" id="pills-living-tab" data-toggle="pill" aria-controls="pills-place" aria-selected="false">03. Vie sur place</a>
        </li>
        <li class="nav-item" role="presentation" type="button">
          <a @click.prevent="scrollToSection('product-tab-program')" class="nav-link" id="pills-program-tab" data-toggle="pill" aria-controls="pills-programe" aria-selected="false">04. Programme</a>
        </li>
        <li class="nav-item" role="presentation" type="button">
          <a @click.prevent="scrollToSection('product-tab-tips')" class="nav-link" id="pills-tips-tab" data-toggle="pill" aria-controls="pills-tips" aria-selected="false">05. Tips & astuces</a>
        </li>
        <li class="nav-item" role="presentation" type="button">
          <a @click.prevent="scrollToSection('product-tab-reviews')" class="nav-link" id="pills-reviews-tab" data-toggle="pill" aria-controls="pills-opinion" aria-selected="false">06. Vos avis </a>
        </li>
      </ul>
    </div>
    <!-- <div class="main-slider">
      <swiper v-if="!asideSlider" :slidesPerView="3" :spaceBetween="5" :slidesPerGroup="3" :loop="true" :loopFillGroupWithBlank="false" :navigation="true" class="mySwiper">
        <swiper-slide v-for="(imgSrc, index) in imgs" :key="imgSrc" @click="showImg(index)">
          <img class="swiper-slide__img" :src="imgSrc" />
        </swiper-slide>
      </swiper>
      <vue-easy-lightbox v-if="!asideSlider" loop scrollDisabled escDisabled moveDisabled :visible="visible" :imgs="imgs" :index="index" @hide="handleHide"></vue-easy-lightbox>
    </div> -->
    <div class="product-content d-flex justify-content-around">
      <div class="w-50 tab-content main-tab d-flex flex-column justify-content-around" id="pills-tabContent" style="position: relative; padding: 0rem 3rem 3.5rem 3rem; min-height: 100vh">
        <div id="product-tab-infos" class="product-section pt-5">
          <ProductTabInfos :course="course" />
        </div>
        <div id="product-tab-activities" class="product-section" style="padding-top: 4rem">
          <ProductTabActivities :course="course" />
        </div>
        <div id="product-tab-living" class="product-section" style="padding-top: 4rem">
          <ProductTabLiving :course="course" />
        </div>
        <div id="product-tab-program" class="product-section" style="padding-top: 4rem">
          <ProductTabProgram :course="course" />
        </div>
        <div id="product-tab-tips" class="product-section" style="padding-top: 4rem">
          <ProductTabTips :course="course" />
        </div>
        <div id="product-tab-reviews" class="product-section" style="padding-top: 4rem; min-height: 100vh">
          <ProductTabReviews :course="course" />
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
        <div class="aside-slider">
          <transition name="fade" @after-leave="afterLeave">
            <swiper v-if="asideSlider" class="mb-4" :spaceBetween="10" :autoplay="{ delay: 5000 }" :loop="true" :effect="'fade'" :pagination="{ type: 'fraction', renderFraction: renderSwiperFraction }" :navigation="true">
              <swiper-slide><img class="swiper-slide__img" :src="require('@/assets/images/beach.jpg')" width="100%" /></swiper-slide>
              <swiper-slide><img class="swiper-slide__img" :src="require('@/assets/images/beach1.jpg')" width="100%" /></swiper-slide>
              <swiper-slide><img class="swiper-slide__img" :src="require('@/assets/images/beach.jpg')" width="100%" /></swiper-slide>
              <swiper-slide><img class="swiper-slide__img" :src="require('@/assets/images/beach1.jpg')" width="100%" /></swiper-slide>
            </swiper>
          </transition>
          <div class="linear-block font-weight-bold py-3 my-5">DISCUSSIONS</div>
          <ul class="list-unstyled mb-0 discuss-list mt-3">
            <li v-for="msg in messages" :key="msg">
              <div class="d-flex mt-3 mb-5" style="padding-left: 2rem">
                <div class="">
                  <div class="profile-container">
                    <img class="img-fill" fluid :src="require('@/assets/images/ui_faces/4.jpg')" />
                  </div>
                </div>
                <div class="ml-4">
                  <h6 class="discuss-head">
                    {{ msg.user.firstName }} {{ msg.user.lastName }}<span class="ml-2" style="font-size: 0.75rem; color: #b4b4b4">{{ msg.createdAt }}</span>
                  </h6>
                  <p class="content-desc">{{ msg.content }}</p>
                </div>
              </div>
            </li>
          </ul>
          <form @submit.prevent="submitMessageForm" class="d-flex align-items-center pr-3" style="border: 1px solid #ebebeb">
            <textarea placeholder="Tape ici ton message..." v-model="inputMessage" class="reply-container form-control p-3" rows="1"></textarea>
            <InlineSvg :src="require('@/assets/svg/send.svg')" class="ml-3" height="20" />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductNav from '@/components/product/ProductNav.vue'
import ProductTabInfos from '@/components/product/tabs/ProductTabInfos.vue'
import ProductTabActivities from '@/components/product/tabs/ProductTabActivities.vue'
import ProductTabLiving from '@/components/product/tabs/ProductTabLiving.vue'
import ProductTabProgram from '@/components/product/tabs/ProductTabProgram.vue'
import ProductTabReviews from '@/components/product/tabs/ProductTabReviews.vue'
import ProductTabTips from '@/components/product/tabs/ProductTabTips.vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import VueEasyLightbox from 'vue-easy-lightbox'
import SwiperCore, { Thumbs, Navigation, Pagination, EffectFade, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
SwiperCore.use([Thumbs, Navigation, Pagination, EffectFade, Autoplay])
gsap.registerPlugin(ScrollTrigger)

export default {
  name: 'ProductContent',
  components: {
    ProductNav,
    ProductTabInfos,
    ProductTabActivities,
    ProductTabLiving,
    ProductTabProgram,
    ProductTabReviews,
    ProductTabTips,
    // VueEasyLightbox,
    Swiper,
    SwiperSlide
  },
  props: ['course'],
  // props: ['nav-is-active', 'course'],
  // emits: ['slide-is-up', 'slide-is-down'],
  data() {
    return {
      messages: [],
      messageSentSuccess: true,
      inputMessage: '',
      asideSlider: true,
      imgs: ['https://via.placeholder.com/450.png/', 'https://via.placeholder.com/300.png/', 'https://via.placeholder.com/150.png/', 'https://via.placeholder.com/450.png/'], // Img Url , string or Array of string
      visible: false,
      index: 0, // default: 0
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
  created() {
    this.fetchMessages()
  },
  methods: {
    fetchMessages() {
      this.$axios.get('/messages', { courseId: this.$props.course.id }).then((res) => (this.messages = res.data.messages))
    },
    afterLeave() {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
    isInViewport(element) {
      const rect = element.getBoundingClientRect()
      return rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    },
    submitMessageForm() {
      if (!this.inputMessage) return

      this.$axios
        .post('/messages', { message: { courseId: this.$props.courseId } })
        .then(() => this.fetchMessages())
        .catch((err) => alert(err))
    },
    initTabsGsap() {
      // let tabs = ['infos', 'activities', 'living', 'program', 'tips', 'reviews']
      // let scrollUpTl = gsap.timeline({
      //   scrollTrigger: {
      //     trigger: `#product-tab-${tabs[index]}`,
      //     start: 'bottom bottom',
      //     end: 'top bottom',
      //     markers: true,
      //     onToggle: () => console.log('scrollup')
      //   },
      //   ease: 'none'
      // })
      // scrollUpTl.to(`#pills-${tabs[index]}-tab`, { className: '+=active' })
      // if (index !== tabs.length - 1) {
      //   scrollUpTl.to(`#pills-${tabs[index + 1]}-tab`, { className: '-=active' }, '<')
      // }
    },
    // initGsap() {
    //   let that = this
    //   gsap.set('.main-slider .swiper-slide__img', { height: window.innerHeight * 0.5 + 'px' })
    //   gsap.to(['.swiper-slide__img', '.swiper-container'], {
    //     scrollTrigger: {
    //       pin: true,
    //       pinSpacing: false,
    //       trigger: '.swiper-container',
    //       start: 'top 102',
    //       end: 'bottom 102', //
    //       scrub: true,
    //       onLeave: () => (that.asideSlider = true)
    //     },
    //     height: '0px',
    //     ease: 'none'
    //   })
    //   gsap.set('.pin-spacer', { backgroundColor: '#fcfcfc' })
    // },
    // asideGsap() {
    //   console.log('ok1')
    //   document.addEventListener('wheel', (e) => {
    //     if (e.deltaY < 0 && window.scrollY < window.innerHeight * 0.5) {
    //       gsap.set(['.swiper-container', '.main-slider .swiper-slide__img'], { height: window.innerHeight * 0.5 + 'px' })
    //       this.asideSlider = false
    //     }
    //   })
    // },
    showImg(index) {
      this.index = index
      this.visible = true
    },
    handleHide() {
      this.visible = false
    },
    renderSwiperFraction(currentClass, totalClass) {
      return `<span style="${this.currentPaginationStyle}" class="${currentClass}"></span>
      <span style="${this.currentPaginationStyle}">.</span>
      <sup><span style="${this.totalPaginationStyle}" class="${totalClass}"></span></sup>`
    },
    scrollToSection(el) {
      document.querySelector(`#${el}`).scrollIntoView({ behavior: 'smooth' })
    }
    // scroll to top when user reaches top of content (wheel up)
    // handleScrollUp() {
    //   let contentTop = window.innerHeight * 0.9
    //   if (window.pageYOffset < contentTop) {
    //     window.scrollTo({ top: 0, behavior: 'smooth' })
    //     gsap.to('.header--product', { height: window.innerHeight, ease: 'power3.out', duration: 1 }) // duration 1000sec same as above
    //     this.slideIsUp = false
    //   }
    // },
    // first scroll down brings page up (wheel down)
    // handleScrollDown() {
    //   this.slidingUp = true
    //   setTimeout(() => {
    //     window.scrollTo({ top: window.innerHeight })
    //     this.slidingUp = false
    //     this.slideIsUp = true
    //   }, 800)
    // }
  },
  mounted() {
    let sectionNames = ['infos', 'activities', 'living', 'program', 'tips', 'reviews']
    let sections = Array.from(document.querySelectorAll('.product-section'))
    let navLinks = Array.from(document.querySelectorAll('.nav-link'))

    document.addEventListener('scroll', () => {
      const threshold = 100
      const viewportTop = window.scrollY + threshold

      for (const [id, section] of sections.entries()) {
        const sectionTop = section.offsetTop
        const sectionBottom = sectionTop + section.clientHeight

        if (viewportTop <= sectionBottom && viewportTop >= sectionTop) {
          const previousActive = document.querySelector('.nav-link.active')
          if (previousActive) previousActive.classList.remove('active')
          navLinks[id].classList.toggle('active', true)
        }
      }
    })
  }
}
</script>

<style scoped>
.aside-slider {
  position: sticky;
  top: calc(100px + 5vh); /* nav height + extra space */
}
.aside-slider .swiper-slide__img {
  height: 20vh;
  margin-top: 50px;
}
.reply-container {
  font-size: 0.8rem;
  color: #292f33;
  font-weight: 400;
}
.profile-container {
  margin: auto;
  width: 60px;
  height: 60px;
}
.discuss-head {
  display: block;
  color: #292f33;
  font-size: 0.8rem;
}
.swiper-button-prev,
.swiper-button-next {
  color: #292f33;
}
.swiper-slide__img {
  display: block;
  width: 100%;
  object-fit: cover;
}
.nav-link {
  padding: 0.5rem !important;
}
.product-content {
  background-color: #fcfcfc;
  padding-top: 100px; /* nav height  */
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
