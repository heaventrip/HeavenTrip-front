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
              <span class="font-weight-bold d-none d-lg-inline-block">{{ firstName }},</span>
              sélectionné une vignette pour connaitre les dates de departs et les places restantes. Tu pourras y v! sélectionné une vignette pour connaitre les dates de departs et les places restantes. Tu pourras y voir les autres Trippers interesses ou inscrits et chater avec eux !
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="d-flex align-items-center justify-content-center w-100">
        <div class="ml-auto">
          <transition :name="counterSlideDir" mode="out-in">
            <span class="slider-counter__current">{{ parseInt(cardsRef[0]?.index) + 1 }}</span>
          </transition>
          <span class="slider-counter__current mx-1">.</span>
          <sup
            ><span class="slider-counter__total">{{ nbOfCards }}</span></sup
          >
        </div>
        <div class="ml-5 w-50">
          <div class="text-uppercase font-weight-bold activites-link d-block text-right text-decoration-none">
            <span class="bg-white position-relative pl-4"><a class="text-dark" href="">toutes les activites</a> <img class="ml-1 align-baseline" fluid :src="require('@/assets/images/ARROW_EXIT.png')" /></span>
          </div>
        </div>
        <div class="mx-auto">
          <ul class="nav nav-pills mb-0 justify-content-center" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
              <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Nos inspirations</a>
            </li>
            <li class="nav-item" role="presentation">
              <a class="nav-link multiactivity-item" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Multi-activités</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="d-flex align-items-center mt-4">
        <div class="slider-buttons col-2 text-center">
          <div @click="slideLeft" type="button" style="transform: translateY(-220%); text-align: left; margin-left: 3vw">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" viewBox="0 0 40 40" fill="#292f33">
              <g id="Calque_2" data-name="Calque 2">
                <g id="Calque_1-2" data-name="Calque 1">
                  <path id="PICTO_ARROW_RIGHT_1" data-name="PICTO ARROW RIGHT 1" d="M23.56,14.74,17,21.27l6.6,6.53-2,2-8.64-8.53,8.64-8.54Z" />
                  <path d="M5.52,9.38l.08-.09-.51-.52L5,8.87A18.48,18.48,0,0,0,31.13,35l.1-.08-.52-.52-.09.08A17.75,17.75,0,0,1,5.52,9.38Z" />
                  <path d="M24.27.53A20.22,20.22,0,0,0,8.93,3.08a20.77,20.77,0,0,0-3.44,2.7l-.36.35.35.35,2.41,2.4.34.34.34-.33A16.13,16.13,0,0,1,11.25,6.8,16,16,0,0,1,30.93,9a16.6,16.6,0,0,1,2.27,2.86,15.94,15.94,0,0,1-2.09,19.53l-.33.34.34.34,2.4,2.41.35.35.35-.36a20.32,20.32,0,0,0-9.95-34Z" />
                </g>
              </g>
            </svg>
          </div>
          <div @click="slideRight" type="button" style="transform: translateY(-170%); text-align: left; margin-left: 3vw">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" viewBox="0 0 40 40" fill="#292f33">
              <g id="Calque_2" data-name="Calque 2">
                <g id="Calque_1-2" data-name="Calque 1">
                  <path id="PICTO_ARROW_RIGHT_1" data-name="PICTO ARROW RIGHT 1" d="M16.44,25.26,23,18.73l-6.6-6.53,2-2,8.64,8.53-8.64,8.54Z" />
                  <path d="M34.48,30.62l-.08.09.51.52.09-.1A18.48,18.48,0,0,0,8.87,5l-.1.08.52.52.09-.08a17.75,17.75,0,0,1,25.1,25.09Z" />
                  <path
                    d="M15.73,39.47a20.22,20.22,0,0,0,15.34-2.55,20.77,20.77,0,0,0,3.44-2.7l.36-.35-.35-.35-2.41-2.4-.34-.34-.34.33a16.13,16.13,0,0,1-2.68,2.09A16,16,0,0,1,9.07,31,16.6,16.6,0,0,1,6.8,28.11,15.94,15.94,0,0,1,8.89,8.58l.33-.34L8.88,7.9,6.48,5.49l-.35-.35-.35.36a20.32,20.32,0,0,0,10,34Z"
                  />
                </g>
              </g>
            </svg>
          </div>
        </div>
        <div class="col-12 tab-content order-lg-3" id="pills-tabContent">
          <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
            <div class="cards-slider d-flex overflow-hidden">
              <HomeCarouselCard
                v-for="(course, index) in courses"
                @mouseenter="cardsRef[index].biggerCard()"
                @mouseleave="cardsRef[index].smallerCard()"
                :index="index"
                :ref="(card) => cardsRef.push(card)"
                :course="course"
                :key="course.id"
                :style="`transform: translateX(${index * (cardWidth + cardMargin) + currentViewportWidth * 0.1}px)`"
              />
            </div>
          </div>
          <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">123456</div>
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
      cardsRef: [],
      counterSlideDir: 'vertical-slide-up',
      nbOfCards: 0,
      cardMargin: 40,
      cardWidth: 520,
      firstName: '',
      animFinished: true,
      courses: [],
      currentViewportWidth: '',
      firstCardIndex: 0,
      leftSlideTl: null,
      rightSlideTl: null
    }
  },
  computed: {
    windowWrap() {
      return gsap.utils.wrap(0, (this.cardWidth + this.cardMargin) * this.nbOfCards)
    }
  },
  methods: {
    initLeftSlideTl() {
      let tl = gsap.timeline({ onStart: () => (this.animFinished = false), onComplete: () => (this.animFinished = true) }).pause()

      // slide all left
      this.cardsRef.forEach((card, index) => {
        tl.to(
          card.$el,
          {
            x: `-=${this.cardWidth + this.cardMargin}`,
            ease: CustomEase.create('custom', 'M0,0,C0.31,0.024,0.393,0.414,0.436,0.548,0.558,0.934,0.818,1.001,1,1'),
            duration: 1,
            modifiers: {
              x: (x) => this.windowWrap(parseFloat(x)) + 'px'
            }
          },
          index === 0 ? '' : '<0.08'
        )
      })
      // and fade first one and put it at the end
      tl.to(
        this.cardsRef[0].$el,
        {
          opacity: 0,
          duration: 0.5,
          ease: 'power2.in',
          onComplete: () => {
            gsap.to(this.cardsRef[0].$el, { opacity: 1, duration: 0.5, ease: 'power4.out' })
            this.cardsRef.push(this.cardsRef.shift())
          }
        },
        '0'
      )
      this.leftSlideTl = tl
    },
    initRightSlideTl() {
      let tl = gsap.timeline({ onStart: () => (this.animFinished = false), onComplete: () => (this.animFinished = true) }).pause()

      // slide all right
      this.cardsRef.forEach((card, index) => {
        tl.to(
          card.$el,
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
      tl.to(
        this.cardsRef[this.cardsRef.length - 1].$el,
        {
          opacity: 1,
          duration: 0.5,
          ease: 'power2.out',
          onComplete: () => {
            this.cardsRef.unshift(this.cardsRef.pop())
          }
        },
        '0'
      )
      this.rightSlideTl = tl
    },
    slideLeft() {
      this.counterSlideDir = 'vertical-slide-up'

      if (this.animFinished) {
        this.leftSlideTl.play()
      }
    },
    slideRight() {
      this.counterSlideDir = 'vertical-slide-down'

      if (this.animFinished) {
        this.rightSlideTl.play()
      }
    }
  },
  beforeUpdate() {
    this.cardsRef = []
  },
  updated() {
    this.$nextTick(() => {
      this.nbOfCards = this.cardsRef.length
      this.initLeftSlideTl()
      this.initRightSlideTl()
    })
  },
  mounted() {
    this.currentViewportWidth = window.innerWidth
    this.firstName = localStorage.getItem('user.firstName')

    this.$axios.get('/courses').then((res) => {
      this.courses = res.data.courses
    })
  }
}
</script>

<style scoped>
.slider-buttons {
  position: absolute;
  z-index: 2;
}
.cards-slider {
  padding-top: 2rem;
  position: relative;
  margin-bottom: 6rem;
  min-height: 420px;
}
/* .customers-testimonials .item-details .content.hover::after {
  content: none !important;
}
.customers-testimonials .new-link {
  background-color: unset;
  font-size: unset;
  border-bottom-left-radius: unset;
} */
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
