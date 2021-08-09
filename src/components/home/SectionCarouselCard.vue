<template>
  <div class="card-block" :class="`card-block-${index}`" :data-index="index" :style="{ width: cardWidth + 'px' }" @mouseenter="transformCard('bigger', $event)" @mouseleave="transformCard('smaller', $event)">
    <div class="shadow-effect overflow-hidden position-relative">
      <Tag style="position: absolute; top: 7%; left: 2rem; z-index: 1" color="grey" text="2 départs" />
      <Tag style="position: absolute; top: 7%; left: 7rem; z-index: 1" color="pink" text="nouveau" />
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
            <img class="slider-icon d-none d-lg-inline-block" fluid :src="require('@/assets/images/pink.png')" />
            <img class="slider-icon d-none d-md-inline-block d-lg-none" fluid :src="require('@/assets/images/pink2.png')" />
            <img class="slider-icon d-inline-block d-md-none" fluid :src="require('@/assets/images/surf-1.png')" />
            <div class="card__footer__infos text-left" :class="{ 'card__footer__infos--border': hovered }">
              <div class="card__footer__infos__heading d-flex align-items-center">
                <span class="card__footer__infos__heading-sport text--20 text--grey text--bold" style="text-shadow: 0px 0px 6px rgba(41, 47, 51, 0.15)">{{ course?.sports[0].name }}</span>
                <InlineSvg class="card__footer__infos__heading-arrow" :src="require('@/assets/svg/triangle-right.svg')" height="10" fill="#793f4e" />
                <span class="card__footer__infos__heading-spot d-inline-block align-middle">{{ course.spot?.name }}</span>
              </div>
              <div class="card__footer__infos__sub-heading mb-0 d-none d-md-inline-block">
                <span>inclus :&nbsp;</span>
                <span>yoga - rando - vtt neige</span>
              </div>
            </div>
          </div>
          <div class="card__footer__price text-right d-none d-lg-inline-block align-self-center">
            <div class="card__footer__price__info" style="font-weight: 300">par pers.</div>
            <div class="card__footer__price__euro">{{ course?.price.toString()[0] }}&thinsp;{{ course?.price.toString().slice(1) }}&thinsp;&euro;</div>
          </div>
        </div>
        <div class="hoverable-div">
          <div class="d-flex">
            <InlineProductInfos
              class="InlineProduct"
              :infos="[course.spot?.country, course?.duration, 'Tout niveaux', course?.max]"
              pt="0.8rem"
              pb="0rem"
              pr="0.4rem"
              pl="0.4rem"
              :icons="['globe', 'timer', 'intensity-2-white', 'people']"
              color="#7c7c7c"
              width="100%"
              letter-spacing="0px"
              icon-margin="8px"
              justify-content=""
            />
            <InlineAvatars class="pl-4" :avatars="avatarKeys" :heart="false" spacing="-10px" border-color="white" :outline="true" :count="true" mt="0rem" mb="0rem" />
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
  name: 'SectionCarouselCard',
  props: ['course', 'index', 'cards-arr'],
  data() {
    return {
      animFinished: true,
      hovered: false,
      cardTl: null,
      avatarKeys: [],
      wishlisted: false,
      cardWidth: 500,
      cardExpand: 70
    }
  },
  components: {
    InlineAvatars,
    InlineProductInfos,
    Tag
  },
  watch: {
    course(val) {
      if (!val.wishlistUsers) return

      val.wishlistUsers.forEach((user) => this.avatarKeys.push(user.avatarKey))
    }
  },
  methods: {
    cardAnim(card, cardsToSlide) {
      let movingInfos = card.querySelector('.hoverable-div')
      let staticInfos = card.querySelector('.card__footer__static-infos')
      let heartIcon = card.querySelector('.card-block__heart-icon')

      let tl = gsap
        .timeline({ defaults: { duration: 0.5, ease: 'power3.inOut' } })
        .pause()
        .to(card, { width: this.cardWidth + this.cardExpand + 'px' })
        .to(staticInfos, { y: '-=45px' }, '<')
        .to(movingInfos, { y: '-=100' }, '<')
        .to(heartIcon, { autoAlpha: 1 }, '<')
        .to(cardsToSlide, { x: '+=70' }, '<')
      return tl
    },
    addToWishlist() {
      if (!this.wishlisted)
        this.$axios
          .post('/wishlists', { wishlist: { courseId: this.$props.course.id } })
          .then(() => (this.wishlisted = true))
          .catch((err) => console.log(err))
      else this.$axios.delete('/wishlists', { wishlist: { courseId: this.$props.course.id } }).then(() => (this.wishlisted = false))
    },
    cardsToSlide(card) {
      const cardPosition = this.$props.cardsArr.indexOf(card)
      return this.$props.cardsArr.slice(cardPosition + 1)
    },

    // transformCard(type, event) {
    //   let card = event.target

    //   // simultaneously we want it to push the following cards to the right

    //   if (type === 'bigger') {
    //     // init timeline here because 'bigger' will always be the first event triggered
    //     // and update it whenever another card is hovered
    //     this.cardTl = this.cardAnim(card, cardsToSlide)

    //     this.cardTl.play()

    //     card.querySelector('.card__bg-image').classList.add('card__bg-image--hover')
    //     card.querySelector('.card__footer__price').classList.add('border-0')
    //   } else {
    //     this.cardTl.reverse()

    //     card.querySelector('.card__bg-image').classList.remove('card__bg-image--hover')
    //     card.querySelector('.card__footer__price').classList.remove('border-0')
    //   }
    // },
    transformCard(type, event) {
      let card = event.target
      let cardPosition = this.$props.cardsArr.indexOf(card)
      let cardsToSlide = this.$props.cardsArr.slice(cardPosition + 1)

      if (type === 'bigger') {
        this.cardTl = card.tl(cardsToSlide)
        this.cardTl.play()

        card.querySelector('.card__bg-image').classList.add('card__bg-image--hover')
        card.querySelector('.card__footer__price').classList.add('border-0')
      } else {
        this.cardTl.reverse()

        card.querySelector('.card__bg-image').classList.remove('card__bg-image--hover')
        card.querySelector('.card__footer__price').classList.remove('border-0')
      }
    }
  },
  mounted() {
    // check if course is already wishlisted
    this.$axios
      .get('/wishlists', { wishlist: { courseId: this.$props.course.id } })
      .then(() => (this.wishlisted = true))
      .catch(() => (this.wishlisted = false))

    let cards = document.querySelectorAll('.card-block')

    cards.forEach((card) => {
      let movingInfos = card.querySelector('.hoverable-div')
      let staticInfos = card.querySelector('.card__footer__static-infos')
      let heartIcon = card.querySelector('.card-block__heart-icon')

      const tl = (cardsToSlide) => {
        return gsap
          .timeline({ defaults: { duration: 0.5, ease: 'power3.inOut' } })
          .pause()
          .to(card, { width: this.cardWidth + this.cardExpand + 'px' })
          .to(staticInfos, { y: '-=45px' }, '<')
          .to(movingInfos, { y: '-=100' }, '<')
          .to(heartIcon, { autoAlpha: 1 }, '<')
          .to(cardsToSlide, { x: '+=70' }, '<')
      }
      card.tl = tl
    })
  }
}
</script>

<style scoped>
.card__footer__static-infos {
  transform: translateY(45px);
}
.hoverable-div {
  transform: translateY(100px);
}
.InlineProduct {
  margin-left: 0.6rem;
  margin-right: 0.6rem;
}
.card__footer__infos {
  position: relative;
  flex-grow: 1;
}
.card__footer__infos--border::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -0.9rem;
  width: 100%;
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
  line-height: 1;
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
  margin-left: 0.8rem;
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
