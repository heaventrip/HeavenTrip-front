<template>
  <div class="card-block" :data-index="index" style="width: 540px" @mouseenter="transformCard('bigger', $event)" @mouseleave="transformCard('smaller', $event)">
    <div class="shadow-effect overflow-hidden position-relative">
      <Tag style="position: absolute; top: 7%; left: 2rem; z-index: 1" color="grey" text="2 départs" />
      <Tag style="position: absolute; top: 7%; left: 7rem; z-index: 1" color="pink" text="nouveau" />
      <transition name="fade">
        <InlineSvg class="card-block__heart-icon" :src="require('@/assets/svg/heart-outline.svg')" style="opacity: 0; position: absolute; top: 7%; right: 7%" height="20" />
      </transition>
      <a href="/product">
        <img class="card__bg-image img-responsive img-fill" :src="require('@/assets/images/s1.png')" alt="" />
      </a>
      <div class="card__footer item-details" style="width: 100%">
        <div class="card__footer__static-infos content d-flex justify-content-between">
          <div class="d-flex align-items-center text-uppercase" style="flex-grow: 1; margin-right: 2rem">
            <img class="slider-icon d-none d-lg-inline-block" fluid :src="require('@/assets/images/pink.png')" />
            <img class="slider-icon d-none d-md-inline-block d-lg-none" fluid :src="require('@/assets/images/pink2.png')" />
            <img class="slider-icon d-inline-block d-md-none" fluid :src="require('@/assets/images/surf-1.png')" />
            <div class="card__footer__infos text-left" :class="{ 'card__footer__infos--border': hovered }">
              <div class="card__footer__infos__heading d-flex align-items-center">
                <span class="card__footer__infos__heading-sport text--20 text--grey text--bold" style="text-shadow: 0px 0px 6px rgba(41, 47, 51, 0.15)">{{ pCourse.sports[0]?.name }}</span>
                <InlineSvg class="card__footer__infos__heading-arrow" :src="require('@/assets/svg/triangle-right.svg')" height="10" fill="#793f4e" />
                <span class="card__footer__infos__heading-spot d-inline-block align-middle">{{ pCourse.spot?.name }}</span>
              </div>
              <div class="card__footer__infos__sub-heading mb-0 d-none d-md-inline-block">
                <span>inclus :&nbsp;</span>
                <span>yoga - rando - vtt neige</span>
              </div>
            </div>
          </div>
          <div class="card__footer__price text-right d-none d-lg-inline-block align-self-center">
            <div class="card__footer__price__info" style="font-weight: 300">par pers.</div>
            <div class="card__footer__price__euro">{{ pCourse.price }}&euro;</div>
          </div>
        </div>
        <div class="hoverable-div">
          <div class="d-flex">
            <InlineProductInfos class="InlineProduct" :infos="[pCourse.spot?.country, pCourse?.duration, pCourse?.max, 'Tout niveaux']" pt="0.8rem" pb="0rem" pr="0.4rem" pl="0.4rem" icon="globe" color="#7c7c7c" width="100%" letter-spacing="0px" icon-margin="8px" justify-content="" />
            <InlineAvatars class="pl-4" :avatars="[1, 2]" :heart="false" spacing="-10px" border-color="white" :outline="true" :count="true" mt="0rem" mb="0rem" />
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
  data() {
    return {
      hovered: false,
      pCourse: this.$props.course,
      cardTl: null,
      cardsArr: []
    }
  },
  components: {
    InlineAvatars,
    InlineProductInfos,
    Tag
  },
  props: ['course', 'index'],
  methods: {
    transformCard(type, event) {
      let card = event.target

      if (!this.cardTl) {
        let movingInfos = card.querySelector('.hoverable-div')
        let staticInfos = card.querySelector('.card__footer__static-infos')
        let heartIcon = card.querySelector('.card-block__heart-icon')
        this.cardTl = gsap
          .timeline({
            defaults: {
              duration: 0.5,
              ease: 'power3.inOut'
            }
          })
          .to(card, { width: '590px' })
          .to(staticInfos, { y: '-=45px' }, '<')
          .to(movingInfos, { y: '-=100' }, '<')
          .to(heartIcon, { autoAlpha: 1 }, '<')
      }

      if (type === 'bigger') {
        this.cardTl.play()
        gsap.to(this.cardsArr.slice(parseInt(card.dataset.index) + 1), {
          x: '+=50',
          duration: 0.5,
          ease: 'power3.inOut'
        })
        card.querySelector('.card__bg-image').classList.add('card__bg-image--hover')
        card.querySelector('.card__footer__price').classList.add('border-0')
      }
      if (type === 'smaller') {
        this.cardTl.reverse()
        gsap.to(this.cardsArr.slice(parseInt(card.dataset.index) + 1), {
          x: '-=50',
          duration: 0.5,
          ease: 'power3.inOut'
        })
        card.querySelector('.card__bg-image').classList.remove('card__bg-image--hover')
        card.querySelector('.card__footer__price').classList.remove('border-0')
      }
    }
  },
  mounted() {
    this.cardsArr = gsap.utils.toArray('.card-block')
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
