<template>
  <div class="card-block" :style="{ width: cardWidth + 'px' }">
    <div class="shadow-effect overflow-hidden position-relative">
      <Tag style="position: absolute; top: 7%; left: 2rem; z-index: 1" color="grey" :text="`${course?.sessions?.length} départ${course?.sessions?.length > 1 ? 's' : ''}`" />
      <!-- <Tag style="position: absolute; top: 7%; left: 7rem; z-index: 1" color="pink" text="nouveau" /> -->
      <Tag v-if="!course?.multisport" style="position: absolute; top: 7%; left: 7rem; z-index: 1" color="pink" text="Multi-activités" />
      <div @click="addToWishlist" type="button" class="card-block__heart-icon" style="opacity: 0; position: absolute; top: 7%; right: 7%; z-index: 5">
        <InlineSvg v-if="wishlisted" :src="require('@/assets/svg/heart-outline.svg')" fill="#d82558" height="20" />
        <InlineSvg v-else :src="require('@/assets/svg/heart-outline.svg')" height="20" />
      </div>
      <!-- <InlineSvg v-if="wishlisted" class="card-block__heart-icon" :src="require('@/assets/svg/heart-outline.svg')" fill="#d82558" height="20" style="opacity: 0; position: absolute; top: 7%; right: 7%" />
      <InlineSvg v-else class="card-block__heart-icon" :src="require('@/assets/svg/heart-outline.svg')" height="20" style="opacity: 0; position: absolute; top: 7%; right: 7%" /> -->
      <a href="/product">
        <img class="card__bg-image img-responsive img-fill" :src="course.cover" alt="" />
      </a>
      <div class="card__footer item-details" style="width: 100%">
        <div class="card__footer__static-infos content d-flex justify-content-between">
          <div class="d-flex align-items-center text-uppercase" style="flex-grow: 1; margin-right: 2rem">
            <svg class="mr-3" xmlns="http://www.w3.org/2000/svg" fill="#d82558" height="80" viewBox="0 0 42.57972 37.89174">
              <path
                id="BACKGROUND_PICTO"
                data-name="BACKGROUND PICTO"
                d="M0,37.89123V0H35.35305a3.722,3.722,0,0,1,3.58921,2.68541,1.35541,1.35541,0,0,1,.06208.1694l3.56129,15.70049a.58657.58657,0,0,1,0,.25554L39.0284,34.944a.526.526,0,0,1-.04812.13139,3.72108,3.72108,0,0,1-3.62434,2.81631Z"
              />
              <InlineSvg v-if="course?.multisport" :src="require(`@/assets/svg/playcards.svg`)" viewBox="-14 0 54 24" fill="white" />
              <InlineSvg v-else-if="course?.sports[0]?.picto" :src="require(`@/assets/svg/${course.sports[0].picto}.svg`)" viewBox="-14 0 54 24" fill="white" />
            </svg>
            <div class="card__footer__infos text-left" :class="{ 'card__footer__infos--border': hovered }">
              <div class="card__footer__infos__heading d-flex flex-column">
                <span class="card__footer__infos__heading-sport text--20 text--grey text--bold" style="text-shadow: 0px 0px 6px rgba(41, 47, 51, 0.15)">{{ course?.sports[0]?.name }}</span>
                <div>
                  <InlineSvg class="card__footer__infos__heading-arrow" :src="require('@/assets/svg/triangle-right.svg')" height="10" fill="#793f4e" />
                  <span class="card__footer__infos__heading-spot d-inline-block align-middle">{{ course.spot?.name }}</span>
                </div>
              </div>
              <div v-if="course.multisport" class="card__footer__infos__sub-heading mb-0 d-none d-md-inline-block">
                <span>inclus :&nbsp;</span>
                <span>yoga - rando - vtt neige</span>
              </div>
            </div>
          </div>
          <div class="card__footer__price text-right d-none d-lg-inline-block align-self-center">
            <div class="card__footer__price__info" style="font-weight: 300">par pers. :</div>
            <div class="card__footer__price__euro">{{ course?.price >= 1000 ? `${course?.price.toString()[0]} ${course?.price.toString().slice(-3)}` : course?.price }}&hairsp;&euro;</div>
          </div>
        </div>
        <div class="hoverable-div">
          <div class="d-flex">
            <InlineProductInfos
              class="InlineProduct"
              :infos="['Tout ', 'Tout ', 'Tout niveaux', course?.max]"
              pt="0.8rem"
              pb="0rem"
              pr="0.4rem"
              pl="0.4rem"
              :icons="['globe', 'timer', 'intensity-2-dark', 'people']"
              color="#7c7c7c"
              width="100%"
              letter-spacing="0px"
              icon-margin="8px"
              justify-content=""
            />
            <InlineAvatars
              class="pl-4"
              :avatars="['p4w0wymrut9wlukdhdpd', 'p4w0wymrut9wlukdhdpd', 'p4w0wymrut9wlukdhdpd']"
              :heart="false"
              spacing="-10px"
              border-color="white"
              :outline="true"
              :count="true"
              mt="0rem"
              mb="0rem"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tag from '@/components/elements/Tag.vue'
import InlineAvatars from '@/components/elements/InlineAvatars.vue'
import InlineProductInfos from '@/components/elements/InlineProductInfos.vue'
import gsap from 'gsap'

export default {
  name: 'HomeCarouselCard',
  props: ['course', 'index', 'cards-ref'],
  data() {
    return {
      animFinished: true,
      hovered: false,
      cardTl: null,
      avatarKeys: [],
      wishlisted: false,
      cardWidth: 500,
      cardExpand: 70,
      activeCard: '',
      tl: null,
      cardsToSlide: ''
    }
  },
  components: {
    InlineAvatars,
    InlineProductInfos,
    Tag
  },
  watch: {
    course: {
      immediate: true,
      handler(val) {
        console.log('ccccccccccccccccccc', val)
        if (!val.wishlistUsers) return

        val.wishlistUsers.forEach((user) => this.avatarKeys.push(user.avatarKey))
      }
    },
    avatarKeys: {
      deep: true,
      handler(val) {
        document.querySelector('.card__footer__infos--border').style.width = `calc(100% - ${val.length * 40}px);`
      }
    }
  },
  methods: {
    setTimeline() {
      let movingInfos = this.$el.querySelector('.hoverable-div')
      let staticInfos = this.$el.querySelector('.card__footer__static-infos')
      let heartIcon = this.$el.querySelector('.card-block__heart-icon')

      const tl = gsap
        .timeline({ defaults: { duration: 0.5, ease: 'power3.inOut' } })
        .pause()
        .to(this.$el, { width: this.cardWidth + this.cardExpand + 'px' })
        .to(staticInfos, { y: '-=45px' }, '<')
        .to(movingInfos, { y: '-=100' }, '<')
        .to(heartIcon, { autoAlpha: 1 }, '<')
      // .to(cards, { x: '+=70' }, '<')
      this.tl = tl
    },
    addToWishlist() {
      const AUTH_TOKEN_KEY = 'authToken'
      const token = localStorage.getItem(AUTH_TOKEN_KEY)
      this.$axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

      if (!this.wishlisted)
        this.$axios
          .post('/wishlists', { wishlist: { courseId: this.$props.course.id } })
          .then(() => (this.wishlisted = true))
          .catch((err) => console.log(err))
      else this.$axios.delete('/wishlists', { params: { courseId: this.$props.course.id } }).then(() => (this.wishlisted = false))
    },
    getCardsToSlide(card) {
      const cardPosition = this.$props.cardsArr.indexOf(card)
      console.log(this.$props.cardsArr.slice(cardPosition + 1))
      return this.$props.cardsArr.slice(cardPosition + 1)
    },
    biggerCard() {
      this.hovered = true
      this.tl.play()

      this.cardBgImage.classList.add('card__bg-image--hover')
    },
    smallerCard() {
      this.hovered = false
      this.tl.reverse()

      this.cardBgImage.classList.remove('card__bg-image--hover')
    }
  },
  created() {
    // check if course is already wishlisted
    this.$axios
      .get('/wishlists', { params: { courseId: this.$props.course.id } })
      .then(() => (this.wishlisted = true))
      .catch(() => (this.wishlisted = false))
  },
  mounted() {
    this.setTimeline()
    this.cardBgImage = this.$el.querySelector('.card__bg-image')
    this.cardFooterPrice = this.$el.querySelector('.card__footer__price')
  }
}
</script>

<style scoped>
.card__footer__static-infos {
  transform: translateY(45px);
}
.hoverable-div {
  transform: translateY(120px);
}
.InlineProduct {
  margin-left: 0.6rem;
  margin-right: 0.6rem;
}
.card__footer__infos {
  position: relative;
  flex-grow: 1;
}
.card__footer__infos--border {
  transition: background 0.3s ease;
}
.card__footer__infos--border::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -1.2rem;
  height: 1px;
  background: rgba(41, 47, 51, 0.1);
}
.card-block {
  /* box-shadow: 0px 2px 6px rgb(0, 0, 0, 0.05) !important; */
  box-shadow: 0px -1px 10px rgba(41, 47, 51, 0.1) !important;
  margin: 0 1rem;
  position: absolute;
  border-radius: 11px;
}
.card__footer__price__info {
  font-size: 0.8rem;
  line-height: 1.4;
}
.card__footer__price__euro {
  font-size: 1.625rem;
  font-weight: 600;
  line-height: 1;
}
.card__footer__price--hover {
  border: none;
  margin-left: 3rem;
}
.card__footer__infos__sub-heading {
  font-size: 0.75rem;
  color: #292f33;
}
.card__footer__infos__sub-heading span:first-child {
  font-weight: bold;
}
.card__footer__infos__sub-heading span:last-child {
  font-weight: normal;
}
.card__footer__infos__heading-arrow {
  margin-right: 0.7rem;
  /* margin-left: 0.8rem; */
}
.card__footer__infos__heading-sport {
  font-size: 1.6rem;
  letter-spacing: 0.04rem;
}

.card__footer__infos__heading-spot {
  font-weight: normal;
  color: #793f4e;
  font-size: 0.8rem;
}
.shadow-effect {
  box-shadow: none !important;
  background: linear-gradient(0deg, rgba(255, 255, 255, 1) 30%, rgba(0, 0, 0, 0) 100%, rgba(0, 212, 255, 1) 100%) !important;
  margin: 0 !important;
  border-radius: 11px;
}
.card__bg-image {
  border-radius: 11px !important;
  transition: 0.5s ease;
  filter: none !important;
}
.card__bg-image--hover {
  transition: 0.5s ease;
  filter: blur(2px) opacity(0.4) !important;
}
.card__footer {
  padding: 10px 35px 30px 0px;
  position: absolute;
  z-index: 1;
  bottom: 0;
}
.card__footer__price {
  padding-left: 1.5rem;
  border-left: 1px solid rgba(41, 47, 51, 0.25);
}
.fade-enter-active {
  transition: opacity 0.3s ease-in-out;
}
.fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
