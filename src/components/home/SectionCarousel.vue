<template>
  <section class="carousel-section">
    <div class="container">
      <div class="search row">
        <div class="col-12 col-sm-10 col-lg-9 mx-auto rounded p-0" style="position: relative; bottom: 50px; border-radius: 10px; box-shadow: 0 0 0px 6px rgba(0, 0, 0, 0.09); background-color: rgba(0, 0, 0, 0.09); max-width: 1200px">
          <div class="bg-white d-flex centered-div">
            <div class="d-flex align-items-center flex-1 search-input-container" style="padding: 1.4rem 2rem 1.6rem 2rem">
              <InlineSvg class="search-bar__fillter__svg" :src="require('@/assets/svg/lens.svg')" height="22" />
              <input v-model="freeSearch" class="form-control p-0 search-input ml-3" type="text" name="" placeholder="Ma recherche manuelle" />
            </div>
            <ul class="list-unstyled mb-0 search-list d-none d-lg-inline-flex ml-auto flex-2 w-100">
              <li class="main-filter activity-filter" style="flex-grow: 0.9">
                <div class="position-relative multi-select-filter">
                  <div style="position: absolute; top: 50%; transform: translateY(-50%); text-align: center; width: 100%">
                    <InlineSvg class="search-bar__fillter__svg" :src="require('@/assets/svg/activity-search.svg')" height="22" />
                    <span class="search-bar__fillter__name">Activités</span>
                  </div>
                  <Multiselect class="activity-multiselect" ref="activityMultiselect" @open="setMultiSelect('activity')" @close="setBgWhite('activity')" v-model="activitySelection.value" v-bind="activitySelection" style="width: 100%">
                    <template v-slot:clear><div></div></template>
                  </Multiselect>
                </div>
              </li>
              <li class="main-filter country-filter" style="flex-grow: 0.8">
                <div class="position-relative multi-select-filter">
                  <div style="position: absolute; top: 50%; transform: translateY(-50%); text-align: center; width: 100%">
                    <InlineSvg class="search-bar__fillter__svg" :src="require('@/assets/svg/country-search.svg')" height="22" />
                    <span v-if="countrySelection.value" class="search-bar__fillter__name">{{ countrySelection.value }}</span>
                    <span v-else class="search-bar__fillter__name">Pays</span>
                  </div>
                  <Multiselect class="country-multiselect" ref="countryMultiselect" @open="setMultiSelect('country')" @close="setBgWhite('country')" v-model="countrySelection.value" v-bind="countrySelection" style="width: 100%">
                    <template v-slot:clear><div></div></template>
                  </Multiselect>
                </div>
              </li>
              <li class="main-filter month-filter" style="flex-grow: 1">
                <div class="position-relative multi-select-filter">
                  <div style="position: absolute; top: 50%; transform: translateY(-50%); text-align: center; width: 100%; padding-right: 1rem">
                    <InlineSvg class="search-bar__fillter__svg pl-3" :src="require('@/assets/svg/date-search.svg')" height="22" />
                    <span class="search-bar__fillter__name">Mois de départ</span>
                  </div>
                  <Multiselect class="month-multiselect" ref="monthMultiselect" @open="setMultiSelect('month')" @close="setBgWhite('month')" v-model="monthSelection.value" v-bind="monthSelection" style="width: 100%">
                    <template v-slot:clear><div></div></template>
                  </Multiselect>
                </div>
              </li>
            </ul>
            <button class="btn btn-light bg-white text-uppercase search-btn filter-btn px-3 px-sm-4 rounded-right ml-auto border-left d-inline-block d-lg-none">
              <img class="mx-2" fluid :src="require('@/assets/images/mob-1.png')" />
            </button>
            <button @click.prevent="submitSearchForm" class="btn btn-dark text-uppercase search-btn px-3 px-sm-5 rounded-right border-0" style="border-left: 1px solid rgba(255, 255, 255, 0.1) !important">
              <div class="d-none d-lg-inline-block mb-1">rechercher</div>
              <div style="font-size: 0.8rem; font-weight: 300; text-transform: none">12 résultats</div>
            </button>
          </div>
          <div class="tags-container d-flex justify-content-center">
            <Button @click="clearFilters" text="<span style='text-transform: lowercase;'>supprimer tous les filtres</span>" background-color="#7c7c7c" text-color="#fff" style="transform: translateY(3px)" v-if="!!monthSelection.value.length || !!activitySelection.value.length" height="38px" />
          </div>
        </div>
      </div>
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
      <div class="row">
        <div class="col-12">
          <div class="row">
            <div class="col-12 mx-auto text-center d-block d-md-none">
              <form>
                <div class="form-group">
                  <select class="form-control select-place">
                    <option selected="" disabled="" hidden="">Nos inspirations</option>
                    <option value="#pills-home">Nos inspirations</option>
                    <option value="#pills-profile">Dernières places</option>
                    <option value="#pills-contact">Multi-activités</option>
                  </select>
                </div>
              </form>
            </div>
            <div class="col-12 col-sm-10 col-lg-4 order-lg-2 d-none d-md-block ml-auto">
              <ul class="nav nav-pills mb-0 justify-content-center" id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                  <a class="nav-link" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Nos inspirations</a>
                </li>
                <li class="nav-item" role="presentation">
                  <a class="nav-link active" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Dernières places</a>
                </li>
                <li class="nav-item" role="presentation">
                  <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Multi-activités</a>
                </li>
              </ul>
            </div>
            <div class="offset-lg-2 col-lg-6 align-self-center order-lg-1 d-none d-lg-block">
              <div class="text-uppercase font-weight-bold activites-link d-block text-right text-decoration-none">
                <span class="bg-white position-relative pl-4"><a class="text-dark" href="">toutes les activites</a> <img class="ml-1 align-baseline" fluid :src="require('@/assets/images/ARROW_EXIT.png')" /></span>
              </div>
            </div>
          </div>
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
          <div class="tab-pane fade" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
            <div class="cards-slider d-flex overflow-hidden" style="position: relative; width: 100%; height: 40vh; margin-bottom: 3rem"></div>
          </div>
          <div class="tab-pane fade show active" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" style="">
            <div class="cards-slider d-flex overflow-hidden">
              <SectionCarouselCard v-for="(course, index) in courses" :key="course.id" :course="course" :cards-arr="cardsArr" :index="index" />
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
import Multiselect from '@vueform/multiselect'
import SectionCarouselCard from '@/components/home/SectionCarouselCard.vue'
import Button from '@/components/elements/Button.vue'
import { gsap } from 'gsap'
import { CustomEase } from 'gsap/CustomEase'
gsap.registerPlugin(CustomEase)

export default {
  name: 'SectionCarousel',
  components: {
    SectionCarouselCard,
    Button,
    Multiselect
  },
  data() {
    return {
      nbOfCards: 0,
      cardMargin: 40,
      cardWidth: 520,
      firstName: '',
      animFinished: true,
      freeSearch: '',
      isMounted: false,
      hovered: false,
      courses: [],
      currentViewportWidth: '',
      cardsArr: [],
      monthSelection: {
        hideSelected: false,
        noOptionsText: 'La liste est vide',
        mode: 'tags',
        value: [],
        openDirection: 'top',
        caret: false,
        options: [
          { value: '1', label: 'Janvier' },
          { value: '2', label: 'Février' },
          { value: '3', label: 'Mars' },
          { value: '4', label: 'Avril' },
          { value: '5', label: 'Mai' },
          { value: '6', label: 'Juin' },
          { value: '7', label: 'Juillet' },
          { value: '8', label: 'Août' },
          { value: '9', label: 'Septembre' },
          { value: '10', label: 'Octobre' },
          { value: '11', label: 'Novembre' },
          { value: '12', label: 'Décembre' }
        ],
        createTag: true
      },
      activitySelection: {
        hideSelected: false,
        noOptionsText: 'La liste est vide',
        mode: 'tags',
        value: [],
        openDirection: 'top',
        caret: false,
        options: [],
        createTag: true
      },
      countrySelection: {
        hideSelected: false,
        noOptionsText: 'La liste est vide',
        value: 0,
        openDirection: 'top',
        caret: false,
        options: []
      }
    }
  },
  watch: {
    firstName(newVal) {
      this.firstName = newVal
    }
  },
  methods: {
    // shiftCardsRight(index) {
    //   this.cardsArr.slice(parseInt(index) + 1).forEach((card) => {
    //     gsap.to(card, {
    //       x: '+=50'
    //     })
    //   })
    // },
    // shiftCardsLeft(index) {
    //   this.cardsArr.slice(parseInt(index) + 1).forEach((card) => {
    //     gsap.to(card, {
    //       x: '-=50'
    //     })
    //   })
    // },
    slideLeft() {
      let windowWrap = gsap.utils.wrap(0, (this.cardWidth + this.cardMargin) * this.nbOfCards) // card width * nb of cards
      let tl = gsap.timeline({ onStart: () => (this.animFinished = false), onComplete: () => (this.animFinished = true) }).pause()

      // slide all left
      this.cardsArr.forEach((card, index) => {
        tl.to(
          card,
          {
            x: `-=${this.cardWidth + this.cardMargin}`,
            ease: CustomEase.create('custom', 'M0,0,C0.31,0.024,0.393,0.414,0.436,0.548,0.558,0.934,0.818,1.001,1,1'),
            duration: 1.0,
            modifiers: {
              x: (x) => windowWrap(parseFloat(x)) + 'px'
            }
          },
          index === 0 ? '' : '<0.08'
        )
      })

      // then fade first one and put it at the end
      tl.to(
        this.cardsArr[0],
        {
          opacity: 0,
          duration: 0.5,
          ease: 'power2.in',
          onComplete: () => {
            gsap.to(this.cardsArr[0], { opacity: 1, duration: 0.5, ease: 'power4.out' })
            this.cardsArr.push(this.cardsArr.shift())
          }
        },
        '0'
      )

      if (this.animFinished) {
        tl.play()
      }
    },
    slideRight() {
      let windowWrap = gsap.utils.wrap(0, (this.cardWidth + this.cardMargin) * this.nbOfCards) // card width * nb of cards
      let tl = gsap.timeline({ onStart: () => (this.animFinished = false), onComplete: () => (this.animFinished = true) }).pause()

      // slide all left
      this.cardsArr.forEach((card, index) => {
        tl.to(
          card,
          {
            x: `+=${this.cardWidth + this.cardMargin}`,
            ease: CustomEase.create('custom', 'M0,0,C0.31,0.024,0.393,0.414,0.436,0.548,0.558,0.934,0.818,1.001,1,1'),
            duration: 1.0,
            modifiers: {
              x: (x) => windowWrap(parseFloat(x)) + 'px'
            }
          },
          '<'
        )
      })

      // then bring back last one
      tl.to(
        this.cardsArr[this.cardsArr.length - 1],
        {
          opacity: 1,
          duration: 0.5,
          ease: 'power2.out',
          onComplete: () => {
            this.cardsArr.unshift(this.cardsArr.pop())
          }
        },
        '0'
      )

      if (this.animFinished) {
        tl.play()
      }
    },
    submitSearchForm() {
      this.$router.push({ name: 'Search', query: { country: this.countrySelection.value, month: this.monthSelection.value, activity: this.activitySelection.value } })
      // this.$axios
      //   .post('/courses/search', {
      //     q: {
      //       free_search: this.freeSearch,
      //       spot_country_id_eq: this.countrySelection.value,
      //       sports_id_in: this.activitySelection.value,
      //       sessions_month_of_departure_eq: this.monthSelection.value
      //     }
      //   })
      //   .then((res) => console.log(res))
    },
    setMultiSelect(which) {
      this.setBgGrey(which)
      let filterDropdown = document.querySelector(`.${which}-multiselect .multiselect-options`)
      this.$nextTick(function () {
        filterDropdown.scrollTo({ top: filterDropdown.scrollHeight * -1 })
      })
    },
    clearFilters() {
      this.$refs.countryMultiselect.clear()
      this.$refs.monthMultiselect.clear()
      this.$refs.activityMultiselect.clear()
    },
    setBgGrey(filterEl) {
      let element = document.querySelector(`.${filterEl}-filter`)
      element.style.backgroundColor = '#292f33'
      element.style.color = '#fff'
      element.querySelector('.search-bar__fillter__svg').style.fill = '#fff'
    },
    setBgWhite(filterEl) {
      let element = document.querySelector(`.${filterEl}-filter`)
      element.style.backgroundColor = '#fff'
      element.style.color = '#292f33'
      element.querySelector('.search-bar__fillter__svg').style.fill = '#fff'
    },
    turnBgGrey(el) {
      if (!el.querySelector('.multiselect-options').style.display === 'none') return
      el.style.backgroundColor = '#292f33'
      el.style.borderColor = '#292f33'
      el.style.color = '#fff'
      el.querySelector('.search-bar__fillter__svg').style.fill = '#fff'
    },
    turnBgWhite(el) {
      if (!el.querySelector('.multiselect-options').style.display === 'none') return
      el.style.backgroundColor = '#fff'
      el.style.borderColor = '#fff'
      el.style.color = '#292f33'
      el.querySelector('.search-bar__fillter__svg').style.fill = '#292f33'
    }
  },
  async mounted() {
    this.currentViewportWidth = window.innerWidth
    // gsap.utils.toArray('.card-block').forEach((card, index) => {
    //   gsap.set(card, { x: 550 * index })
    // })

    document.querySelectorAll('.multiselect-tags').forEach((tagContainer) => {
      document.querySelector('.tags-container').prepend(tagContainer)
    })
    document.querySelectorAll('.multi-select-filter').forEach((el) => {
      el.addEventListener('mouseenter', (e) => this.turnBgGrey(e.target))
      el.addEventListener('mouseleave', (e) => this.turnBgWhite(e.target))
    })
    this.$axios.get('/countries').then((res) => {
      res.data.countries.forEach((country) => {
        this.countrySelection.options.push({ value: country.id, label: country.name })
      })
    })
    this.$axios.get('/sports').then((res) => {
      res.data.sports.forEach((sport) => {
        this.activitySelection.options.push({ value: sport.id, label: sport.name })
      })
    })
    await this.$axios.get('/courses').then((res) => {
      this.courses = res.data.courses
    })
    this.$nextTick(() => {
      let cardBlocks = document.querySelectorAll('.card-block')
      this.nbOfCards = cardBlocks.length
      cardBlocks.forEach((el) => this.cardsArr.push(el))

      gsap.set('.card-block', {
        x: (i) => i * (this.cardWidth + this.cardMargin) + this.currentViewportWidth * 0.1 // left offset of 10vw
      })
    })

    this.firstName = localStorage.getItem('user.firstName')
  }
}
</script>

<style scoped>
.multi-select-filter {
  transition: all 0.3s ease;
}
.search-input::placeholder {
  color: #b4b4b4;
  letter-spacing: 0.02rem;
}
.search-bar__fillter__name {
  margin-left: 1rem;
  vertical-align: middle;
  font-size: 0.875rem;
}
.centered-div {
  box-shadow: none;
  border-radius: 6px;
}
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
</style>
