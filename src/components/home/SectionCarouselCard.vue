<template>
  <div class="card-block" style="width: 540px" @mouseenter="biggerCard($event)" @mouseleave="smallerCard($event)">
    <div class="shadow-effect overflow-hidden position-relative">
      <Tag style="position: absolute; top: 7%; left: 5%; z-index: 1" color="grey" text="2 départs" />
      <Tag style="position: absolute; top: 7%; left: 20%; z-index: 1" color="pink" text="nouveau" />
      <transition name="fade">
        <InlineSvg v-if="hovered" :src="require('@/assets/svg/heart-outline.svg')" style="position: absolute; top: 7%; right: 7%" />
      </transition>
      <a href="/product">
        <img class="card__bg-image img-responsive img-fill" :src="require('@/assets/images/s1.png')" alt="" />
      </a>
      <div class="card__footer item-details" style="width: 100%">
        <div class="content d-flex justify-content-between">
          <div class="text-uppercase">
            <div class="d-flex align-items-center">
              <img class="slider-icon d-none d-lg-inline-block" fluid :src="require('@/assets/images/pink.png')" />
              <img class="slider-icon d-none d-md-inline-block d-lg-none" fluid :src="require('@/assets/images/pink2.png')" />
              <img class="slider-icon d-inline-block d-md-none" fluid :src="require('@/assets/images/surf-1.png')" />
              <div class="card__footer__infos text-left">
                <div class="card__footer__infos__heading d-flex align-items-center">
                  <span class="card__footer__infos__heading-sport text--20 text--grey text--bold" style="text-shadow: 0px 0px 6px rgba(41, 47, 51, 0.15)">ski freeride</span>
                  <InlineSvg class="card__footer__infos__heading-arrow" :src="require('@/assets/svg/triangle-right.svg')" height="10" fill="#793f4e" />
                  <span class="card__footer__infos__heading-spot d-inline-block align-middle">serre-chevalier</span>
                </div>
                <div class="card__footer__infos__sub-heading mb-0 d-none d-md-inline-block">
                  <span>inclus :&nbsp;</span>
                  <span>yoga - rando - vtt neige</span>
                </div>
              </div>
            </div>
          </div>
          <div class="card__footer__price text-right d-none d-lg-inline-block align-self-center">
            <div class="card__footer__price__info" style="font-weight: 300">par pers.</div>
            <div class="card__footer__price__euro">1 390&euro;</div>
          </div>
        </div>
        <div class="hoverable-div">
          <div class="d-flex">
            <InlineProductInfos class="" :infos="['France', '7 jours', '10 places', 'Tout niveaux']" pt="0.5rem" pb="0.5rem" pr="0.4rem" pl="0.4rem" icon="globe" color="#292f33" width="100%" letter-spacing="0px" icon-margin="8px" justify-content="" />
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

export default {
  name: 'SectionCarouselCard',
  data() {
    return {
      hovered: false
    }
  },
  components: {
    InlineAvatars,
    InlineProductInfos,
    Tag
  },
  methods: {
    biggerCard(event) {
      this.hovered = true
      $(event.target).animate({ width: '+=50px' })
      $(event.target).find('.content').addClass('hover')
      $(event.target).find('.hoverable-div').slideDown()
      $(event.target).find('.card__bg-image').addClass('card__bg-image--hover')
      // $(event.target).find('.trip-link').animate({ bottom: '+=45px' })
    },
    smallerCard(event) {
      this.hovered = false
      $(event.target).animate({ width: '-=50px' })
      $(event.target).find('.content').removeClass('hover')
      $(event.target).find('.hoverable-div').slideUp()
      $(event.target).find('.card__bg-image').removeClass('card__bg-image--hover')
      // $(event.target).find('.trip-link').animate({ bottom: '-=45px' })
    }
  }
}
</script>

<style scoped>
.hoverable-div {
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
  filter: blur(3px) opacity(0.4) !important;
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
