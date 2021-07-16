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
  <div class="header">
    <TheNavSticky />
  </div>
  <div class="product-content d-flex" :class="{ blur: showedSessions }">
    <!-- <div class="whitespace-big-screen"></div> -->
    <div class="tab-content main-tab d-flex flex-column justify-content-around" id="pills-tabContent" style="">
      <div class="product-nav-tabs">
        <ProductNav :course="course" />
        <ul style="height: 100px; background-color: white; font-weight: 400; padding: 0 7vw" class="nav nav-pills nav-justified text-uppercase narrow-header-pills d-none d-lg-flex align-items-center" id="pills-tab" role="tablist">
          <li class="nav-item" role="presentation" type="button">
            <a @click.prevent="scrollToSection('product-tab-infos')" class="nav-link" id="pills-infos-tab" data-toggle="pill" aria-controls="pills-info" aria-selected="false">Infos séjour</a>
          </li>
          <li class="nav-item" role="presentation" type="button">
            <a @click.prevent="scrollToSection('product-tab-activities')" class="nav-link" id="pills-activities-tab" data-toggle="pill" aria-controls="pills-activityspot" aria-selected="true">Activités & spot</a>
          </li>
          <li class="nav-item" role="presentation" type="button">
            <a @click.prevent="scrollToSection('product-tab-living')" class="nav-link" id="pills-living-tab" data-toggle="pill" aria-controls="pills-place" aria-selected="false">Vie sur place</a>
          </li>
          <li class="nav-item" role="presentation" type="button">
            <a @click.prevent="scrollToSection('product-tab-program')" class="nav-link" id="pills-program-tab" data-toggle="pill" aria-controls="pills-programe" aria-selected="false">Programme</a>
          </li>
          <li class="nav-item" role="presentation" type="button">
            <a @click.prevent="scrollToSection('product-tab-tips')" class="nav-link" id="pills-tips-tab" data-toggle="pill" aria-controls="pills-tips" aria-selected="false">Tips & astuces</a>
          </li>
          <li class="nav-item" role="presentation" type="button">
            <a @click.prevent="scrollToSection('product-tab-reviews')" class="nav-link" id="pills-reviews-tab" data-toggle="pill" aria-controls="pills-opinion" aria-selected="false">Vos avis </a>
          </li>
        </ul>
      </div>
      <div id="product-tab-infos" class="product-section" style="">
        <ProductTabInfos :course="course" />
      </div>
      <div id="product-tab-activities" class="product-section">
        <ProductTabActivities :course="course" />
      </div>
      <div id="product-tab-living" class="product-section">
        <ProductTabLiving :course="course" />
      </div>
      <div id="product-tab-program" class="product-section">
        <ProductTabProgram :course="course" />
      </div>
      <div id="product-tab-tips" class="product-section">
        <ProductTabTips :course="course" />
      </div>
      <div id="product-tab-reviews" class="product-section" style="min-height: 100vh">
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
    <div class="gallery-comment-block">
      <div class="aside-slider">
        <transition name="fade" @after-leave="afterLeave">
          <swiper v-if="asideSlider" :spaceBetween="10" :autoplay="{ delay: 5000 }" :loop="true" :effect="'fade'" :pagination="{ type: 'fraction', renderFraction: renderSwiperFraction }" :navigation="true">
            <swiper-slide><img class="swiper-slide__img" :src="require('@/assets/images/beach.jpg')" /></swiper-slide>
            <swiper-slide><img class="swiper-slide__img" :src="require('@/assets/images/beach1.jpg')" /></swiper-slide>
            <swiper-slide><img class="swiper-slide__img" :src="require('@/assets/images/beach.jpg')" /></swiper-slide>
            <swiper-slide><img class="swiper-slide__img" :src="require('@/assets/images/beach1.jpg')" /></swiper-slide>
          </swiper>
        </transition>
        <div class="d-flex flex-column" style="padding: 1rem; padding-left: 1rem; padding-top: 2rem; height: calc(100% - 25vh)">
          <div class="messages-container" style="">
            <div class="font-weight-bold mb-5">DISCUSSIONS ENTRE TRIPPERS :</div>
            <ul class="list-unstyled mb-0 discuss-list mt-3">
              <li v-for="msg in messages" :key="msg">
                <div class="d-flex">
                  <div class="">
                    <div class="profile-container">
                      <img class="img-fill" fluid :src="require('@/assets/images/ui_faces/4.jpg')" />
                    </div>
                  </div>
                  <div class="ml-4 pt-2">
                    <h6 class="discuss-head">
                      {{ msg.user.firstName }} {{ msg.user.lastName }}<span class="ml-2" style="font-size: 0.75rem; color: #b4b4b4">{{ new Date(msg.createdAt).toLocaleString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }) }}</span>
                    </h6>
                    <p class="content-desc">{{ msg.content }}</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <form @submit.prevent="submitMessageForm" class="mt-auto d-flex align-items-center" style="background-color: #fcfcfc">
            <label class="message-input-label">
              <textarea placeholder="Tape ici ton message..." v-model="inputMessage" class="reply-container form-control;" style="padding-left: 2rem" rows="1"> </textarea>
            </label>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheNavSticky from '@/components/nav/TheNavSticky.vue'
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
    TheNavSticky,
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
  props: ['course', 'showed-sessions', 'selected-session'],
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
    let sections = Array.from(document.querySelectorAll('.product-section'))
    let navLinks = Array.from(document.querySelectorAll('.product-nav-tabs .nav-link'))

    document.addEventListener('scroll', () => {
      const threshold = 100
      const viewportTop = window.scrollY + threshold

      for (const [id, section] of sections.entries()) {
        const sectionTop = section.offsetTop
        const sectionBottom = sectionTop + section.clientHeight

        if (viewportTop <= sectionBottom && viewportTop >= sectionTop) {
          const previousActive = document.querySelector('.product-nav-tabs .nav-link.active')
          if (previousActive) previousActive.classList.remove('active')
          navLinks[id].classList.toggle('active', true)
        }
      }
    })
  }
}
</script>

<style scoped>
.messages-container {
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  padding-top: 1rem;
}
@media only screen and (max-width: 1440px) {
  .messages-container {
    padding: 0 1rem;
  }
}
.message-input-label {
  position: relative;
  width: 100%;
}
.message-input-label:before {
  content: '';
  position: absolute;
  right: 2rem;
  top: 0;
  bottom: 0;
  width: 20px;
  background: url('../../assets/svg/send.svg') center / contain no-repeat;
}
.reply-container {
  width: 85%;
  overflow: visible !important;
}
.reply-container::placeholder {
  color: #292f33;
  font-weight: 500;
}
.reply-container:focus {
  outline: none;
  color: #292f33;
  height: 6rem;
}
.main-tab {
  max-width: 1000px;
  position: relative;
  padding: 0rem 0rem 3.5rem 0rem;
  min-height: 100vh;
  width: 57vw;
  margin-left: auto;
  margin-right: auto;
}
/* .gallery-comment-block {
  padding-left: 2rem;
} */
.aside-slider {
  top: 71px;
  width: inherit;
  position: fixed;
  background-color: white;
  box-shadow: 0 0 3px #ebebeb;
  height: calc(100vh - 71px - 100px - 40px); /* substract top nav and booking footer */
}
@media only screen and (min-width: 1441px) {
  .aside-slider {
    height: calc(100vh - 71px - 120px - 40px);
  }
}
.aside-slider .swiper-slide__img {
  height: 25vh;
  display: block;
  width: 100%;
  object-fit: cover;
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

.nav-link {
  padding: 0.5rem !important;
}
.product-content {
  background-color: #fcfcfc;
  padding-left: 1rem;
  position: relative;
  top: 70px;
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
.product-nav-tabs {
  position: fixed;
  top: 70px;
  right: 0;
  left: 0;
  width: 70vw;
  z-index: 2;
  box-shadow: 0px 3px 6px #00000005;
}
.gallery-comment-block {
  width: 30vw;
}
.blur {
  filter: blur(3px) opacity(0.2);
  top: -70px;
}
@media only screen and (max-width: 2000px) {
  /* .whitespace-big-screen {
    display: none;
  } */
  .nav--big-screen {
    display: none;
  }
}
@media only screen and (min-width: 2001px) {
  /* .whitespace-big-screen {
    height: 170px;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    background: white;
    z-index: 1;
  } */
  .aside-slider {
    z-index: 2;
  }
}
</style>
