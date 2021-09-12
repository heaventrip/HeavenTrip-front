<template>
  <div class="header">
    <TheNavSticky />
  </div>
  <div class="product-content d-flex" :class="{ blur: showedSessions }">
    <!-- <div class="whitespace-big-screen"></div> -->
    <div class="tab-content main-tab d-flex flex-column justify-content-around" id="pills-tabContent" style="">
      <div class="product-nav-tabs">
        <ProductNav :course="course" />
        <ul
          style="height: 100px; background-color: #fcfcfc; font-weight: 400; padding: 0 2.3vw 0 0"
          class="nav nav-pills nav-justified text-uppercase narrow-header-pills d-none d-lg-flex align-items-center"
          id="pills-tab"
          role="tablist"
        >
          <li class="nav-item fg-0 d-flex" style="background-color: white; height: inherit" role="presentation" type="button">
            <a class="m-auto" @click.prevent="$emit('go-header')">
              <InlineSvg :src="require('@/assets/svg/small-card.svg')" height="26" />
            </a>
          </li>
          <li class="nav-item" role="presentation" type="button">
            <a @click.prevent="scrollToSection('product-tab-infos')" class="nav-link active" id="pills-infos-tab" data-toggle="pill" aria-controls="pills-info" aria-selected="false">Infos séjour</a>
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
        <ProductTabProgram :course="course" :programs="sortPrograms(course?.programs)" />
      </div>
      <div id="product-tab-tips" class="product-section">
        <ProductTabTips :course="course" />
      </div>
      <div id="product-tab-reviews" class="product-section" style="min-height: 100vh">
        <ProductTabReviews :course="course" />
      </div>
    </div>
    <div class="gallery-comment-block">
      <div class="aside-slider">
        <transition name="fade" @after-leave="afterLeave">
          <swiper
            v-if="asideSlider"
            @after-init="setCustomButtons"
            :spaceBetween="10"
            :speed="1400"
            :autoplay="{ delay: 8000 }"
            :loop="true"
            :effect="'fade'"
            :pagination="{ type: 'fraction', renderFraction: renderSwiperFraction }"
            :navigation="{ nextEl: '.slider-buttons__right', prevEl: '.slider-buttons__left' }"
          >
            <div @click="slideUp" type="button" style="position: absolute; top: 1.6rem; right: 2.6rem; z-index: 1; opacity: 60%; transform: rotate(90deg)">
              <svg xmlns="http://www.w3.org/2000/svg" class="slider-buttons__left" width="50" viewBox="0 0 40 40" fill="white">
                <g id="Calque_2" data-name="Calque 2">
                  <g id="Calque_1-2" data-name="Calque 1">
                    <path class="slider__arrow-left" data-name="PICTO ARROW RIGHT 1" d="M23.56,14.74,17,21.27l6.6,6.53-2,2-8.64-8.53,8.64-8.54Z" />
                    <path d="M5.52,9.38l.08-.09-.51-.52L5,8.87A18.48,18.48,0,0,0,31.13,35l.1-.08-.52-.52-.09.08A17.75,17.75,0,0,1,5.52,9.38Z" />
                    <path
                      d="M24.27.53A20.22,20.22,0,0,0,8.93,3.08a20.77,20.77,0,0,0-3.44,2.7l-.36.35.35.35,2.41,2.4.34.34.34-.33A16.13,16.13,0,0,1,11.25,6.8,16,16,0,0,1,30.93,9a16.6,16.6,0,0,1,2.27,2.86,15.94,15.94,0,0,1-2.09,19.53l-.33.34.34.34,2.4,2.41.35.35.35-.36a20.32,20.32,0,0,0-9.95-34Z"
                    />
                  </g>
                </g>
              </svg>
            </div>
            <div @click="slideDown" type="button" style="position: absolute; top: 5.6rem; right: 2.6rem; z-index: 1; opacity: 60%; transform: rotate(90deg)">
              <svg xmlns="http://www.w3.org/2000/svg" class="slider-buttons__right" width="50" viewBox="0 0 40 40" fill="white">
                <g id="Calque_2" data-name="Calque 2">
                  <g id="Calque_1-2" data-name="Calque 1">
                    <path class="slider__arrow-right" data-name="PICTO ARROW RIGHT 1" d="M16.44,25.26,23,18.73l-6.6-6.53,2-2,8.64,8.53-8.64,8.54Z" />
                    <path d="M34.48,30.62l-.08.09.51.52.09-.1A18.48,18.48,0,0,0,8.87,5l-.1.08.52.52.09-.08a17.75,17.75,0,0,1,25.1,25.09Z" />
                    <path
                      d="M15.73,39.47a20.22,20.22,0,0,0,15.34-2.55,20.77,20.77,0,0,0,3.44-2.7l.36-.35-.35-.35-2.41-2.4-.34-.34-.34.33a16.13,16.13,0,0,1-2.68,2.09A16,16,0,0,1,9.07,31,16.6,16.6,0,0,1,6.8,28.11,15.94,15.94,0,0,1,8.89,8.58l.33-.34L8.88,7.9,6.48,5.49l-.35-.35-.35.36a20.32,20.32,0,0,0,10,34Z"
                    />
                  </g>
                </g>
              </svg>
            </div>
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
        <div class="messaging d-flex flex-column">
          <div class="messaging-header">
            <div class="messaging-header-title" style="color: #292f33">
              <svg id="PICTO_CHAT" xmlns="http://www.w3.org/2000/svg" width="18.285" height="14.298" viewBox="0 0 18.285 14.298">
                <path
                  id="PICTO_CHAT-2"
                  data-name="PICTO_CHAT"
                  d="M2.361,14.289a.093.093,0,0,1-.053-.085V11.228A3.8,3.8,0,0,1,0,7.719v-.08a3.8,3.8,0,0,1,2.881-3.7c0,.045,0,.092,0,.137v.086a5.085,5.085,0,0,0,5.055,5.1h3.935l.823.714a3.748,3.748,0,0,1-3.031,1.545H5.638l-3.178,2.75a.091.091,0,0,1-.1.013Zm13.287-3.1-3.4-2.947H7.933a4.059,4.059,0,0,1-4.04-4.078V4.078A4.059,4.059,0,0,1,7.933,0h6.313a4.059,4.059,0,0,1,4.04,4.078v.085a4.081,4.081,0,0,1-2.473,3.76v3.189a.1.1,0,0,1-.058.091.1.1,0,0,1-.042.009A.1.1,0,0,1,15.648,11.189ZM13.733,4.121a.939.939,0,1,0,.94-.948h0A.944.944,0,0,0,13.733,4.121Zm-3.583,0a.94.94,0,1,0,.94-.948A.944.944,0,0,0,10.149,4.121Zm-3.583,0a.94.94,0,1,0,.939-.948A.944.944,0,0,0,6.566,4.121Z"
                  fill="#292f33"
                />
              </svg>
              JE PAPOTE AVEC :
            </div>
            <div class="messaging-tabs">
              <div class="messaging-tab-btn noselect" @click="activeTabMassaging = 'participants'" :class="[{ active: activeTabMassaging === 'participants' }]"># LES PARTICIPANTS</div>
              <div class="messaging-tab-btn noselect" @click="activeTabMassaging = 'interested'" :class="[{ active: activeTabMassaging === 'interested' }]"># TOUT LES INTERESSES</div>
            </div>
          </div>
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
            <ul class="messages-container-ul list-unstyled mb-0 discuss-list mt-3" v-if="messagesParticipant && activeTabMassaging === 'participants'">
              <li v-for="msg in messagesParticipant" :key="msg">
                <Message :user="msg.user" :key="msg.user.id + msg.createdAt" :content="msg.content" :createdAt="msg.createdAt" :position="isCurrentUser(msg.user) ? 'right' : 'left'" />
              </li>
            </ul>
            <ul class="messages-container-ul list-unstyled mb-0 discuss-list mt-3" v-else-if="messagesWishlist && activeTabMassaging === 'interested'">
              <li v-for="msg in messagesWishlist" :key="msg">
                <Message :user="msg.user" :key="msg.user.id + msg.createdAt" :content="msg.content" :createdAt="msg.createdAt" :position="isCurrentUser(msg.user) ? 'right' : 'left'" />
              </li>
            </ul>
            <ul class="messages-container-ul list-unstyled mb-0 discuss-list mt-3" v-if="messages">
              <li v-for="msg in messages" :key="msg">
                <Message :user="msg.user" :key="msg.user.id + msg.createdAt" :content="msg.content" :createdAt="msg.createdAt" :position="isCurrentUser(msg.user) ? 'right' : 'left'" />
              </li>
            </ul>
          </div>
          <form @submit.prevent="submitMessageForm" class="message-send-form mt-auto d-flex align-items-center" style="background-color: #5a3a5f">
            <textarea
              @keypress="
                (e) => {
                  if (e.keyCode === 13) {
                    if (e.preventDefault) e.preventDefault()
                    submitMessageForm()
                    return false
                  }
                }
              "
              placeholder="Tape ici ton message..."
              v-model="inputMessage"
              class="reply-container form-control;"
              type="submit"
              style="padding-left: 3rem"
              rows="2"
            >
            </textarea>
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
      activeTabMassaging: 'interested',
      messages: [],
      messagesParticipant: [],
      messagesWishlist: [],
      isParticipant: false,
      isIntressed: false,
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
    belongChannel() {
      this.$axios
        .get('/users/current')
        .then((res) => {
          res.data.user.participatingCourses.ids.find((id) => id === this.$props.course?.id) ? (this.isParticipant = true) : (this.isParticipant = false)
          res.data.user.wishlistCourses.ids.find((id) => id === this.$props.course?.id) ? (this.isIntressed = true) : (this.isIntressed = false)
        })
        .catch((err) => {
          this.$notify({ type: 'error', text: err.message })
        })
    },
    fetchMessages() {
      this.belongChannel()
      if (this.isParticipant) {
        this.$axios.get('/messages', { params: { courseId: this.$props.course?.id, channel: 1 } }).then((res) => {
          this.messagesParticipant = res.data.messages
        })
      }
      if (this.isIntressed) {
        this.$axios.get('/messages', { params: { courseId: this.$props.course?.id, channel: 0 } }).then((res) => {
          this.messagesWishlist = res.data.messages
        })
      }

      this.$axios.get('/messages', { params: { courseId: this.$props.course?.id } }).then((res) => (this.messages = res.data.messages)) //this.messages = res.data.messages
      /* this.messages = [
        {
          user: {
            firstName: 'Geoff',
            lastName: 'M'
          },
          content: 'cc cest le Jo',
          createdAt: '2021-08-05T11:13:32.612Z'
        }
      ] */
    },
    sortPrograms(programs) {
      if (programs) {
        programs.sort((a, b) => {
          return a.dayId - b.dayId
        })
        return programs
      }
      return []
    },
    afterLeave() {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
    isInViewport(element) {
      const rect = element.getBoundingClientRect()
      return rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    },
    submitMessageForm() {
      this.belongChannel()
      if (!this.inputMessage) return

      const AUTH_TOKEN_KEY = 'authToken'
      const token = localStorage.getItem(AUTH_TOKEN_KEY)
      this.$axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
      if (this.isParticipant || this.isIntressed) {
        this.$axios
          .post('/messages', { message: { courseId: this.$props.course.id, content: this.inputMessage, channel: this.isParticipant ? 1 : this.isIntressed ? 0 : '' } })
          .then((res) => {
            console.log(res)
            this.fetchMessages()
            this.inputMessage = ''
          })
          .catch((err) => console.log(err))
      } else {
        this.$axios
          .post('/messages', { message: { courseId: this.$props.course.id, content: this.inputMessage } })
          .then((res) => {
            console.log(res)
            this.fetchMessages()
            this.inputMessage = ''
          })
          .catch((err) => console.log(err))
      }
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
.svg-btn-send {
  fill: #ffffff;
  height: 17px;
  margin-bottom: 3px;
  transition: all 0.2s ease;
}
.slider-buttons__left:hover .slider__arrow-left {
  animation: 0.3s ease-in 0s hideLeftArrow, 0.3s ease-out 0.3s showLeftArrow;
}
.slider-buttons__right:hover .slider__arrow-right {
  animation: 0.3s ease-in 0s hideRightArrow, 0.3s ease-out 0.3s showRightArrow;
}
@keyframes hideLeftArrow {
  from {
    transform: translateX(0px);
    opacity: 1;
  }
  to {
    transform: translateX(-20px);
    opacity: 0;
  }
}
@keyframes showLeftArrow {
  from {
    transform: translateX(20px);
    opacity: 0;
  }
  to {
    transform: translateX(0px);
    opacity: 1;
  }
}
@keyframes hideRightArrow {
  from {
    transform: translateX(0px);
    opacity: 1;
  }
  to {
    transform: translateX(20px);
    opacity: 0;
  }
}
@keyframes showRightArrow {
  from {
    transform: translateX(-20px);
    opacity: 0;
  }
  to {
    transform: translateX(0px);
    opacity: 1;
  }
}
.svg-btn-send:hover {
  fill: #d82558;
}
.svg-btn-send:active {
  fill: #a51e44;
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
.messaging {
  background-color: #fcfcfc;
  padding: 0.4rem 1.4rem 0rem 0rem;
  height: calc(100% - 32vh);
}
.messaging-header {
  display: flex;
  height: 65px;
  max-height: 65px;
  min-height: 65px;
  align-items: center;
  justify-content: space-between;
  background-color: white;
}
.messaging-header-title {
  font-weight: 700;
  font-size: 0.85rem;
  margin-left: calc(2vw - 8px);
}
.messaging-header-title svg {
  margin-right: 0.4vw;
}
.messaging-tabs {
  display: flex;
  font-size: 0.76rem;
  align-items: center;
  height: 100%;
}
.messaging-tab-btn {
  padding: 0px 2vw 0px 2vw;
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
}
.messaging-tab-btn:hover {
  background-color: #f5f5f5;
}
.active.messaging-tab-btn {
  background-color: #292f33;
  color: white;
}
.messages-container-ul {
  padding: 0px 26px 0px 36px;
}
.messages-container::-webkit-scrollbar {
  width: 12px;
}

.messages-container::-webkit-scrollbar-track {
  background: #f5f5f5;
}

.messages-container::-webkit-scrollbar-thumb {
  background-color: #292f33;
  border-radius: 10px;
  border: 5px solid #f5f5f5;
}
.messages-container {
  margin-right: 15px;
  margin-bottom: 30px;
  margin-top: 30px;
  display: flex;
  background-color: #fcfcfc;
  flex-direction: column-reverse;
  overflow-y: auto;
  /*   padding-left: 2.5rem;
  padding-right: 2.5rem;
  padding-top: 1rem; */
  padding: 0 1rem;
  overscroll-behavior: none;
}
/* @media only screen and (max-width: 1440px) {
  .messages-container {
    padding: 0 1rem;
  }
} */
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
.message-send-form {
  border: solid 2px #00000021;
}
.reply-container {
  background-color: #5a3a5f;
  color: white !important;
  width: 85%;
  overflow: visible !important;
  padding: 22px;
  /* height: 71px; */
  height: calc(71px - 8px); /* -8px is border from message-send-form */
  font-size: 0.8rem;
  letter-spacing: 0.03rem;
  font-weight: 400;
}

.reply-container::placeholder {
  color: #ffffff;
  font-weight: 500;
}
.reply-container:focus::placeholder {
  color: #ffffffc0;
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
  box-shadow: 0 0 3px #f1f1f1;
  height: calc(100vh - 32px - 100px - 40px); /* substract top nav and booking footer */
}
@media only screen and (min-width: 1441px) {
  .aside-slider {
    height: calc(100vh - 32px - 120px - 40px); /* height: calc(100vh - 71px - 120px - 40px);*/
  }
}
.aside-slider .swiper-slide__img {
  height: 32vh;
  display: block;
  width: 100%;
  object-fit: cover;
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
  font-size: 0.8rem;
  font-weight: 500;
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
