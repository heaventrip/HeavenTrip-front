<template>
  <section class="carousel-section">
    <div class="container">
      <HomeSearch />
      <div class="row">
        <div class="col-12 col-sm-11 col-lg-9 mx-auto my-lg-4">
          <div class="grid-box my-5">
            <div class="text-center text-md-right">
              <h5 class="red-head text-danger mt-1 font-weight-500">Découvre</h5>
              <h2 class="text-uppercase heading mb-0">nos <strong>activités</strong></h2>
            </div>
            <div class="d-none d-md-inline-block">
              <span class="separator"></span>
            </div>
            <p class="mb-0 d-none d-md-inline-block">
              <span class="font-weight-bold d-none d-lg-inline-block">{{ $root.currUser?.firstName }},</span>
              sélectionné une vignette pour connaitre les dates de departs et les places restantes. Tu pourras y v! sélectionné une vignette pour connaitre les dates de departs et les places
              restantes. Tu pourras y voir les autres Trippers interesses ou inscrits et chater avec eux !
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="d-flex justify-content-end" style="margin-right: 10vw">
        <ul class="nav nav-pills mb-0 justify-content-center" id="pills-tab" role="tablist">
          <li class="nav-item" role="presentation">
            <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Nos inspirations</a>
          </li>
          <li class="nav-item" role="presentation">
            <a class="nav-link multiactivity-item" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Multi-activités</a>
          </li>
        </ul>
      </div>
      <div class="d-flex align-items-center mt-4" style="margin-bottom: 5rem">
        <div class="col-12 tab-content order-lg-3" id="pills-tabContent">
          <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
            <div class="cards-slider d-flex overflow-hidden">
              <div
                v-for="(course, index) in courses"
                :key="course.id"
                :style="`transform: translateX(${index * (cardWidth + cardMargin)}px)`"
                @mouseenter="enterCard(index)"
                @mouseleave="leaveCard(index)"
              >
                <HomeCarouselCard :index="index" :course="course" :ref="`card${index}`" />
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
            <div class="cards-slider d-flex overflow-hidden">
              <!-- <div
                v-for="(course, index) in courses.filter((el) => el.multisport)"
                :key="course.id"
                :style="`transform: translateX(${index * (cardWidth + cardMargin)}px)`"
                @mouseenter="enterCard((index + 1) * 10)"
                @mouseleave="leaveCard((index + 1) * 10)"
              >
                <HomeCarouselCard :index="(index + 1) * 10" :course="course" :ref="`card${(index + 1) * 10}`" />
              </div> -->
            </div>
          </div>
          <div class="d-flex align-items-center justify-content-end" style="margin-right: 5vw">
            <div class="slider-buttons d-flex">
              <div @click="slideLeft" type="button" style="">
                <svg xmlns="http://www.w3.org/2000/svg" class="slider-buttons__left" width="50" viewBox="0 0 40 40" fill="#292f33">
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
              <div @click="slideRight" type="button" style="">
                <svg xmlns="http://www.w3.org/2000/svg" class="slider-buttons__right" width="50" viewBox="0 0 40 40" fill="#292f33">
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
            </div>
            <div style="min-width: 60px">
              <transition :name="counterSlideDir" mode="out-in">
                <span class="slider-counter__current">{{ firstCardIndex + 1 }}</span>
              </transition>
              <span class="slider-counter__current mx-1">.</span>
              <sup
                ><span class="slider-counter__total">{{ nbOfCards }}</span></sup
              >
            </div>
            <div class="ml-5 w-25">
              <div class="text-uppercase font-weight-bold activites-link d-block text-right text-decoration-none">
                <span class="bg-white position-relative pl-4"
                  ><a class="text-dark" href="">toutes les activites</a> <img class="ml-1 align-baseline" fluid :src="require('@/assets/images/ARROW_EXIT.png')"
                /></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-9 ml-auto align-self-center order-lg-1 d-none d-md-block d-lg-none">
          <a href="#" class="text-uppercase font-weight-bold text-dark activites-link d-block text-right"
            ><span class="bg-white position-relative pl-4">toutes les activites <img class="ml-1 align-baseline" fluid :src="require('@/assets/images/ARROW_EXIT.png')" /></span
          ></a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import HomeCarouselCard from '@/components/home/HomeCarouselCard.vue'
import HomeSearch from '@/components/home/HomeSearch.vue'
import { gsap } from 'gsap'
import { CustomEase } from 'gsap/CustomEase'
gsap.registerPlugin(CustomEase)

export default {
  name: 'HomeCarousel',
  components: {
    HomeCarouselCard,
    HomeSearch
  },
  data() {
    return {
      cards: [],
      counterSlideDir: 'vertical-slide-up',
      nbOfCards: 1,
      cardMargin: 40,
      cardWidth: 520,
      firstName: '',
      animFinished: true,
      courses: [],
      currentViewportWidth: '',
      cardIndexCounter: 0,
      leftSlideTl: null,
      rightSlideTl: null,
      counter: 0
    }
  },
  computed: {
    windowWrap() {
      return gsap.utils.wrap(this.cardWidth * -1, (this.cardWidth + this.cardMargin) * (this.nbOfCards - 1))
    },
    firstCardIndex() {
      return this.cardIndexCounter % this.nbOfCards
    }
  },
  watch: {
    cards: {
      handler(newVal, oldVal) {
        if (newVal.length < this.courses.length) return

        this.nbOfCards = newVal.length

        this.initLeftSlideTl()
        // this.initRightSlideTl()
      }
    }
  },
  methods: {
    enterCard(index) {
      if (!this.$refs) return

      this.$refs[`card${index}`].biggerCard()
    },
    leaveCard(index) {
      if (!this.$refs) return

      this.$refs[`card${index}`].smallerCard()
    },
    initLeftSlideTl() {
      let shallowCards = this.cards
      let that = this
      let tl = gsap
        .timeline({
          onComplete: () => {
            that.cardIndexCounter++
            shallowCards.push(shallowCards.shift())
          },
          onReverseComplete: () => {
            that.cardIndexCounter--
            shallowCards.unshift(shallowCards.pop())
          }
        })
        .pause()

      // slide all left
      tl.to(shallowCards, {
        x: `-=${this.cardWidth + this.cardMargin}`,
        duration: 1,
        ease: CustomEase.create('custom', 'M0,0,C0.31,0.024,0.393,0.414,0.436,0.548,0.558,0.934,0.818,1.001,1,1'),
        modifiers: {
          x: (x) => that.windowWrap(parseFloat(x)) + 'px'
        },
        stagger: {
          each: 0.08,
          from: 'start'
        }
      })
      // and fade first one and put it at the end
      // tl.to(
      //   that.cards[that.firstCardIndex],
      //   {
      //     opacity: 0,
      //     duration: 0.5,
      //     ease: 'power4.in',
      //     onComplete: () => {
      //       gsap.to(that.cards[that.firstCardIndex], { opacity: 1, duration: 0.5, ease: 'power4.out' })
      //     }
      //   },
      //   '0'
      // )
      this.leftSlideTl = tl
    },
    initRightSlideTl() {
      let that = this
      let tl = gsap.timeline().pause()

      // slide all right
      this.cards.forEach((card, index) => {
        tl.to(
          card,
          {
            x: `+=${this.cardWidth + this.cardMargin}`,
            ease: CustomEase.create('custom', 'M0,0,C0.31,0.024,0.393,0.414,0.436,0.548,0.558,0.934,0.818,1.001,1,1'),
            duration: 1.0,
            modifiers: {
              x: (x) => this.windowWrap(parseFloat(x)) + 'px'
            }
          },
          '<'
        )
      })

      // and bring back last one
      // tl.to(
      //   this.cards[this.cards.length - 1],
      //   {
      //     opacity: 1,
      //     duration: 0.5,
      //     ease: 'power2.out'
      //   },
      //   '0'
      // )
      this.rightSlideTl = tl
    },
    slideLeft() {
      this.counterSlideDir = 'vertical-slide-up'
      this.leftSlideTl.invalidate().restart()
    },
    slideRight() {
      this.counterSlideDir = 'vertical-slide-down'
      this.leftSlideTl.reverse()
    }
  },
  updated() {
    if (!this.cards.length) this.cards = Object.values(this.$refs).map((ref) => ref.$el.parentElement)
  },
  created() {
    this.$axios.get('/courses').then((res) => {
      this.courses = res.data.courses
    })
  },
  mounted() {
    this.currentViewportWidth = window.innerWidth
    this.firstName = localStorage.getItem('user.firstName')
  }
}
</script>

<style scoped>
.cards-slider {
  padding-top: 2rem;
  position: relative;
  margin-bottom: 3rem;
  min-height: 420px;
}
.slider-buttons {
  margin-right: 5%;
}
.slider-buttons__left {
  margin-right: 1.5rem;
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
.slider-counter__current {
  font-family: Oswald, sans-serif;
  text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.3);
  font-weight: 600;
  font-size: 2.4rem;
  color: #292f33;
  display: inline-block;
}
.slider-counter__total {
  font-family: Oswald, sans-serif;
  color: #292f33;
  font-size: 1.5rem;
  vertical-align: sub;
}
.multiactivity-item {
  transition: color 0.3s ease;
  color: initial;
}
.multiactivity-item:hover {
  color: #292f33;
}
</style>
