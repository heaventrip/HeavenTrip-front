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
        <ul
          style="height: 100px; background-color: white; font-weight: 400; padding: 0 2.3vw"
          class="nav nav-pills nav-justified text-uppercase narrow-header-pills d-none d-lg-flex align-items-center"
          id="pills-tab"
          role="tablist"
        >
          <li class="nav-item" role="presentation" type="button">
            <a @click.prevent="scrollToSection('product-tab-infos')" class="nav-link" id="pills-infos-tab" data-toggle="pill" aria-controls="pills-info" aria-selected="false">Infos séjour</a>
          </li>
          <li class="nav-item" role="presentation" type="button">
            <a @click.prevent="scrollToSection('product-tab-activities')" class="nav-link" id="pills-activities-tab" data-toggle="pill" aria-controls="pills-activityspot" aria-selected="true"
              >Activités & spot</a
            >
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
          <swiper
            v-if="asideSlider"
            @after-init="setCustomButtons"
            :spaceBetween="10"
            :autoplay="{ delay: 5000 }"
            :loop="true"
            :effect="'fade'"
            :pagination="{ type: 'fraction', renderFraction: renderSwiperFraction }"
            :navigation="true"
          >
            <swiper-slide
              ><img class="swiper-slide__img" src="https://images.ctfassets.net/8dtxc3nuj0tn/7iSX7q6Kg5PsKz8TO8r2TX/83aefe5811d393613010ba2d7ead7df2/kitesurf-elgouna-diving" @click="showImg(0)"
            /></swiper-slide>
            <swiper-slide
              ><img class="swiper-slide__img" src="https://images.ctfassets.net/8dtxc3nuj0tn/1NwMNTi8UI1plqxbjZ2fOD/45660f775915d1aed122f60e0bed6282/kitesurf-elgouna-paddle.jpg" @click="showImg(1)"
            /></swiper-slide>
            <swiper-slide
              ><img class="swiper-slide__img" src="https://images.ctfassets.net/8dtxc3nuj0tn/3xNc0qwmQom0Dad0Ony1SY/d5347600c812d31df01166eb7e3c2554/kitesurf-elgouna-lecon.jpg" @click="showImg(2)"
            /></swiper-slide>
            <swiper-slide
              ><img class="swiper-slide__img" src="https://images.ctfassets.net/8dtxc3nuj0tn/7hs9rPXy3OcgCjnKOUuEaP/461f8a21de4a0bb481bc9407e0d0f647/kitesurf-elgouna-dauphin" @click="showImg(3)"
            /></swiper-slide>
            <swiper-slide
              ><img class="swiper-slide__img" src="https://images.ctfassets.net/8dtxc3nuj0tn/xq9P8R3xr0freagUL2M1B/95126b093d7e4c3c2342f6e508584136/kitesurf-elgouna-cover2" @click="showImg(4)"
            /></swiper-slide>
          </swiper>
        </transition>
        <vue-easy-lightbox loop scrollDisabled escDisabled moveDisabled :visible="visible" :imgs="imgs" :index="index" @hide="visible = false"></vue-easy-lightbox>
        <div class="d-flex flex-column" style="padding: 1rem; padding-left: 1rem; padding-top: 2rem; height: calc(100% - 25vh)">
          <div class="font-weight-bold mb-5">DISCUSSIONS ENTRE TRIPPERS :</div>
          <div class="messages-container" @wheel.stop style="">
            <!-- <Message
              :user="{
                firstName: 'Geoff',
                lastName: 'M'
              }"
              content="cc cest le Jo"
              createdAt="2021-08-05T11:13:32.612Z"
              position="right"
            />
            <Message
              :user="{
                firstName: 'Maria',
                lastName: 'Golo'
              }"
              content="ergerg grzzdf zefzefzefzef ze fzefsd f z efzefzef zef "
              createdAt="2021-08-05T11:13:32.612Z"
              position="left"
            /> -->
            <ul class="list-unstyled mb-0 discuss-list mt-3" v-if="messages">
              <li v-for="msg in messages" :key="msg">
                <Message :user="msg.user" :key="msg.user.id + msg.createdAt" :content="msg.content" :createdAt="msg.createdAt" :position="isCurrentUser(msg.user) ? 'right' : 'left'" />
              </li>
            </ul>
          </div>
          <form @submit.prevent="submitMessageForm" class="mt-auto d-flex align-items-center" style="background-color: #ebebeb">
            <textarea placeholder="Tape ici ton message..." v-model="inputMessage" class="reply-container form-control;" style="padding-left: 2rem" rows="2"> </textarea>
            <button class="ml-3 fg-1 text-center" type="submit">
              <InlineSvg class="svg-btn-send" :src="require('@/assets/svg/send.svg')" height="20" />
            </button>
            <!-- <label class="message-input-label">
            </label> -->
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
import Message from '@/components/product/Message.vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import VueEasyLightbox from 'vue-easy-lightbox'
import SwiperCore, { Thumbs, Navigation, Pagination, EffectFade, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { isCurrentUser } from '@/utils/auth'
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
    VueEasyLightbox,
    Message,
    Swiper,
    SwiperSlide
  },
  props: ['course', 'showed-sessions', 'selected-session'],
  emits: ['active-lightbox'],
  data() {
    return {
      messages: [],
      messageSentSuccess: true,
      inputMessage: '',
      asideSlider: true,
      imgs: [
        'https://images.ctfassets.net/8dtxc3nuj0tn/7iSX7q6Kg5PsKz8TO8r2TX/83aefe5811d393613010ba2d7ead7df2/kitesurf-elgouna-diving',
        'https://images.ctfassets.net/8dtxc3nuj0tn/1NwMNTi8UI1plqxbjZ2fOD/45660f775915d1aed122f60e0bed6282/kitesurf-elgouna-paddle.jpg',
        'https://images.ctfassets.net/8dtxc3nuj0tn/3xNc0qwmQom0Dad0Ony1SY/d5347600c812d31df01166eb7e3c2554/kitesurf-elgouna-lecon.jpg',
        'https://images.ctfassets.net/8dtxc3nuj0tn/7hs9rPXy3OcgCjnKOUuEaP/461f8a21de4a0bb481bc9407e0d0f647/kitesurf-elgouna-dauphin',
        'https://images.ctfassets.net/8dtxc3nuj0tn/xq9P8R3xr0freagUL2M1B/95126b093d7e4c3c2342f6e508584136/kitesurf-elgouna-cover2'
      ],
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
        text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.3);
        font-weight: 800;
        font-size: 2.4rem;
        color: #fff;`,
      totalPaginationStyle: `
        font-family: Oswald, sans-serif;
        color: rgba(250, 250, 250, 0.7);
        font-size: 1.5rem;
        vertical-align: sub;
        `
    }
  },
  watch: {
    visible(val) {
      this.$emit('active-lightbox', val)
    }
  },
  created() {
    this.fetchMessages()
  },
  methods: {
    isCurrentUser(user) {
      return isCurrentUser(user)
    },
    fetchMessages() {
      this.$axios.get('/messages', { params: { courseId: this.$props.course.id } }).then((res) => (this.messages = res.data.messages)) //this.messages = res.data.messages
      /* this.messages = [
        {
          user: {
            firstName: 'Geoff',
            lastName: 'M'
          },
          content: 'cc cest le Jo',
          createdAt: '2021-08-05T11:13:32.612Z'
        },
        {
          user: {
            firstName: 'Marie',
            lastName: 'Dag'
          },
          content: 'zefazef rvzefz zefzefzef',
          createdAt: '2021-08-05T11:13:32.612Z'
        },
        {
          user: {
            firstName: 'Bonie',
            lastName: 'M'
          },
          content: 'zefazef rvzefz zefzefzezev fjghjyhjlhk dfsgdsfgdf',
          createdAt: '2021-08-05T11:13:32.612Z'
        },
        {
          user: {
            firstName: 'Marie',
            lastName: 'Dag'
          },
          content: 'zefazef rvzefz zefzefzef zefazef rvzefz zefzefzef zefazef rvzefz zefzefzefzefazef rvzefz zefzefzef',
          createdAt: '2021-08-05T11:13:32.612Z'
        }
      ] */
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

      const AUTH_TOKEN_KEY = 'authToken'
      const token = localStorage.getItem(AUTH_TOKEN_KEY)
      this.$axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

      this.$axios
        .post('/messages', { message: { courseId: this.$props.course.id, content: this.inputMessage } })
        .then((res) => {
          console.log(res)
          this.fetchMessages()
        })
        .catch((err) => console.log(err))
    },
    showImg(index) {
      this.index = index
      this.visible = true
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
    handleHide() {
      this.visible = false
    },
    renderSwiperFraction(currentClass, totalClass) {
      return `
        <div style="text-align: left; margin-left: 1rem">
          <span style="${this.currentPaginationStyle}" class="${currentClass}"></span>
          <span style="${this.currentPaginationStyle}">.</span>
          <sup><span style="${this.totalPaginationStyle}" class="${totalClass}"></span></sup>
        </div>
      `
    },
    scrollToSection(el) {
      document.querySelector(`#${el}`).scrollIntoView({ behavior: 'smooth' })
    },
    setCustomButtons() {}
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
    this.setCustomButtons()

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
.svg-btn-send:hover {
  fill: #a2a2a2;
}
.svg-btn-send:active {
  fill: #d3d3d3;
}
.customized-prev {
  display: none !important;
}
.customized-next {
  display: none !important;
}
button {
  all: unset;
}
.messages-container::-webkit-scrollbar {
  width: 12px;
}

.messages-container::-webkit-scrollbar-track {
  background: #ebebeb;
}

.messages-container::-webkit-scrollbar-thumb {
  background-color: #292f33;
  border-radius: 10px;
  border: 5px solid #ebebeb;
}
.messages-container {
  display: flex;
  flex-direction: column-reverse;
  overflow-y: scroll;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  padding-top: 1rem;
  overscroll-behavior: none;
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
}
.main-tab {
  max-width: 1100px;
  position: relative;
  padding: 0rem 0rem 8rem 0rem;
  min-height: 100vh;
  width: 53vw;
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
  height: calc(100vh - 32px - 100px - 40px); /* substract top nav and booking footer */
}
@media only screen and (min-width: 1441px) {
  .aside-slider {
    height: calc(100vh - 32px - 120px - 40px); /* height: calc(100vh - 71px - 120px - 40px);*/
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

.nav-link {
  padding: 0.5rem !important;
}
.product-content {
  background-color: #fcfcfc;
  padding-left: 1rem;
  position: relative;
  top: 70px;
}
/* .slider {
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
} */

.product-nav-tabs {
  position: fixed;
  top: 70px;
  right: 0;
  left: 0;
  width: 63vw;
  z-index: 2;
  box-shadow: 0px 3px 6px #00000005;
}
.gallery-comment-block {
  width: 38vw;
  z-index: 1;
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
