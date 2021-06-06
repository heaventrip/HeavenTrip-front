<template>
  <div class="card-block" style="width: 540px" @mouseenter="biggerCard($event)" @mouseleave="smallerCard($event)">
    <div class="shadow-effect overflow-hidden position-relative">
      <Tag style="position: absolute; top: 5%; left: 5%" color="white" text="2 départs" />
      <Tag style="position: absolute; top: 5%; left: 20%" color="grey" text="nouveau" />
      <transition name="fade">
        <InlineSvg v-if="hovered" :src="require('@/assets/svg/heart-outline.svg')" style="position: absolute; top: 5%; right: 5%" />
      </transition>
      <a href="/product"><img class="img-responsive img-fill" fluid :src="require('@/assets/images/s1.png')" alt="" /></a>
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
          <transition name="fade" mode="out-in">
            <div v-if="hovered" key="hovered">
              <InlineAvatars class="ml-auto" :avatars="[1, 2, 3, 4]" :heart="false" spacing="-10px" border-color="white" :outline="true" :count="true" />
            </div>
            <div v-else key="notHovered" class="card__footer__price text-right d-none d-lg-inline-block align-self-center">
              <div class="card__footer__price__info" style="font-weight: 300">par pers.</div>
              <div class="card__footer__price__euro">1 390&euro;</div>
            </div>
          </transition>
          <ul class="img-list list-unstyled d-none d-md-inline-flex d-lg-none align-items-center justify-content-center mx-4 mb-0">
            <li>
              <a href="#"><img class="img-fluid user_icon rounded-circle" fluid :src="require('@/assets/images/t1.png')" /> </a>
            </li>
            <li>
              <a href="#"><img class="img-fluid user_icon rounded-circle" fluid :src="require('@/assets/images/t2.png')" /> </a>
            </li>
            <li>
              <a href="#"><img class="img-fluid user_icon rounded-circle" fluid :src="require('@/assets/images/t3.png')" /> </a>
            </li>
            <li>
              <a href="#"><img class="img-fluid user_icon rounded-circle" fluid :src="require('@/assets/images/t4.png')" /> </a>
            </li>
            <li><small>+1.5k</small></li>
          </ul>
        </div>
        <div class="hoverable-div">
          <InlineProductInfos :infos="['France', '7 jours', 'Tous niveaux', '10 places']" pt="0.8rem" pb="0.8rem" pr="0.5rem" icon="globe" color="#292f33" width="max-content" letter-spacing="0px" />
          <div class="card__footer__price text-right d-none d-lg-inline-block align-self-center" style="border: none; padding-bottom: 0.8rem">
            <div class="card__footer__price__info" style="font-weight: 300">par pers.</div>
            <div class="card__footer__price__euro">1 390&euro;</div>
          </div>
        </div>
        <div class="d-flex d-lg-none justify-content-between mt-1 mt-md-3">
          <ul class="list-unstyled py-3 text-uppercase list-info mb-0 d-none d-md-inline-flex d-lg-none ml-md-3">
            <li><img class="icons mr-2" fluid :src="require('@/assets/images/globe_d.png')" />espagne</li>
            <li><img class="icons mr-2" fluid :src="require('@/assets/images/timer_d.png')" />8 jours</li>
            <li><img class="icons mr-2" fluid :src="require('@/assets/images/circle_d.png')" />tous niveaux</li>
            <li><img class="icons mr-2" fluid :src="require('@/assets/images/places_d.png')" />10 places</li>
          </ul>

          <ul class="img-list list-unstyled d-inline-flex d-md-none align-items-center mx-3 mb-0">
            <li class="mr-4 grid-col"><img class="icons" fluid :src="require('@/assets/images/timer_d.png')" /><span>8 jours</span></li>
            <li>
              <a href="#"><img class="img-fluid user_icon rounded-circle" fluid :src="require('@/assets/images/t2.png')" /> </a>
            </li>
            <li>
              <a href="#"><img class="img-fluid user_icon rounded-circle" fluid :src="require('@/assets/images/t3.png')" /> </a>
            </li>
            <li>
              <a href="#"><img class="img-fluid user_icon rounded-circle" fluid :src="require('@/assets/images/t4.png')" /> </a>
            </li>
            <li><small>+1.5k</small></li>
          </ul>
          <a href="#" class="btn bg-dark text-white small font-weight-bold rounded-pill d-inline-flex align-items-center d-lg-none border-radius-style euro">1 990&euro;</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
    InlineProductInfos
  },
  methods: {
    biggerCard(event) {
      this.hovered = true
      $(event.target).animate({ width: '+=50px' })
      $(event.target).find('.content').addClass('hover')
      $(event.target).find('.hoverable-div').slideDown()
      $(event.target).find('.trip-link').animate({ bottom: '+=45px' })
    },
    smallerCard(event) {
      this.hovered = false
      $(event.target).animate({ width: '-=50px' })
      $(event.target).find('.content').removeClass('hover')
      $(event.target).find('.hoverable-div').slideUp()
      $(event.target).find('.trip-link').animate({ bottom: '-=45px' })
    }
  }
}
</script>

<style scoped>
.card-block {
  margin: 0 1rem;
  position: absolute;
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
  box-shadow: 0px 2px 6px rgb(0, 0, 0, 0.05) !important;
  background: linear-gradient(0deg, rgba(255, 255, 255, 1) 30%, rgba(0, 0, 0, 0) 100%, rgba(0, 212, 255, 1) 100%) !important;
  margin: 0 !important;
}
.img-fill {
  border-radius: 11px !important;
}
.img-fill.img--hover {
  filter: blur(2px) opacity(0.5) !important;
}
.card__footer {
  padding: 10px 35px 30px 0px;
  position: absolute;
  z-index: 1;
  bottom: 0;
}
.card__footer__price {
  padding-left: 1rem;
  border-left: 1px solid rgba(41, 47, 51, 0.25);
}
.fade-enter-active {
  transition: opacity 0.5s ease-in-out;
}
.fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
