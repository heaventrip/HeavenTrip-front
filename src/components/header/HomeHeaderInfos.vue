<template>
  <div class="d-flex align-items-center align-items-lg-end w-100 mt-auto" style="padding: 0 130px">
    <div class="content d-flex flex-column align-items-center justify-content-between w-100 mt-5 mt-lg-0" style="height: 50vh">
      <div class="top-block d-flex align-items-center justify-content-center" style="width: 100%">
        <!-- FIXME Reduire pour les écrans standarts -->
        <InlineSvg :src="require('@/assets/svg/circle-ski-light.svg')" class="d-inline-block" style="max-width: 9rem" />
        <!-- <img class="head-icon d-inline-block" fluid :src="require('@/assets/svg/picto-ski.svg')" /> -->
        <!-- <img class="head-pin-icon d-none d-lg-inline-block" fluid :src="require('@/assets/images/head-pin.png')" /> -->
        <div style="margin-left: 2.5rem; position: relative; top: 4px; padding: 2rem 0">
          <!-- <h1 class="heading text-uppercase mb-2">{{ featuredCourse.sports?.[0].name }}</h1> -->
          <h1 class="headsport heading text-uppercase mb-2"><span style="font-weight: bold">Kite</span><span>surf</span></h1>
          <h5 class="header-infos__sub-title d-block"><i class="fas fa-caret-right mr-1"></i> {{ featuredCourse.spot?.name }}</h5>
        </div>
      </div>
      <div class="d-inline-flex d-lg-flex align-items-center justify-content-center pb-3 trippers-div">
        <InlineAvatars :avatars="[1, 2, 3, 4]" outline-color="violet" :heart="true" spacing="-10px" />
        <span class="divider d-none d-md-inline-block d-lg-none mx-2"></span>
        <a class="details-link text-uppercase text-white font-weight-bold d-inline-block d-lg-none pl-3" href="#">Détails <img class="img-fluid mt-n1" fluid :src="require('@/assets/images/arr-r.png')" /></a>
      </div>
      <div class="">
        <Tag text="4 départs" color="grey" />
      </div>
      <div><InlineProductInfos :infos="[featuredCourse.country?.name, `${featuredCourse.duration} jours`, featuredCourse.level?.name, `${featuredCourse.max} places`]" :border-top="false" color="white" icon="globe" pt="0rem" /></div>
    </div>
    <div class="row no-gutters" style="right: 0; top: 60vh; position: absolute">
      <div class="col-4">
        <Button @click="emitToggledSessions" text="voir les <br /> dates" color="transparent" size=".8rem" />
      </div>
      <div class="price-block col-8 bg block--white">
        <div class="block__content">
          <div class="price-block-content px-2">
            <span class="euro">{{ featuredCourse.price }}€</span>
            <span class="euro-pers">/pers.</span>
            <br />
            <span class="text--smaller">Tout inclus (sans transports)</span>
          </div>
        </div>
      </div>
      <div class="col-6 ml-auto">
        <div class="bttn bttn--pink">
          <div class="bttn__text">Détails<i class="fa fa-chevron-right ml-3"></i></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tag from '@/components/elements/Tag.vue'
import Button from '@/components/elements/Button.vue'
import InlineProductInfos from '@/components/elements/InlineProductInfos.vue'
import InlineAvatars from '@/components/elements/InlineAvatars.vue'
import { gsap } from 'gsap'

export default {
  name: 'HeaderText',
  emits: ['toggled-sessions'],
  components: {
    Tag,
    Button,
    InlineProductInfos,
    InlineAvatars
  },
  data() {
    return {
      toggledSessions: false,
      featuredCourse: {}
    }
  },
  methods: {
    emitToggledSessions() {
      this.toggledSessions = true
      this.$emit('toggled-sessions')
    }
  },
  // watch: {
  //   featuredCourse(newVal) {
  //     if (featuredCourse.price) {

  //     }
  //   }
  // },
  created() {
    this.$axios.get('/courses', { params: { featured: true } }).then((res) => (this.featuredCourse = res.data.course))
  },
  mounted() {
    let priceBlock = document.querySelector('.price-block')
    let price = priceBlock.querySelector('.euro')

    function changeText(text) {
      gsap.to(price, {
        ease: 'power2.inOut',
        duration: '0.8',
        autoAlpha: 0,
        delay: '3',
        onComplete: () => {
          price.innerHTML = text
          gsap.to(price, {
            ease: 'power2.inOut',
            duration: '0.8',
            autoAlpha: 1,
            delay: '3',
            onComplete: () => changeText('ok')
          })
        }
      })
    }
  }
}
</script>

<style scoped>
.header-infos__sub-title {
  font-size: 1.4rem;
  font-weight: 400;
  letter-spacing: 1px;
}

.headsport {
  font-weight: 400;
  font-size: 3.5rem !important;
  letter-spacing: 3px !important;
}

/* TEXT */
.text--smaller {
  font-size: 0.85rem;
}
/* BLOCK */
.block--white {
  background-color: #fff;
  color: #292f33;
}
.block__content {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  width: fit-content;
  margin: auto;
  line-height: 1.3;
}
/* BTTN */
.bttn {
  text-align: center;
  text-transform: uppercase;
  color: #fff;
  cursor: pointer;
  height: 80px;
}
.bttn__text {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  font-weight: 500;
  letter-spacing: 1.5px;
}
.bttn__text--bold {
  font-weight: bold;
  letter-spacing: 1.5px;
  font-size: 0.8rem;
}
.bttn__text--white {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
.bttn--transparent {
  background-color: transparent;
  border: 1px solid #fff;
}
.bttn--pink {
  background-color: #d82558;
  border-color: #d82558;
}
.bttn--pink:hover {
  background-color: #292f33;
  border-color: #292f33;
}
.bttn--pink:active {
  background-color: #d82558;
  border-color: #d82558;
}

.euro {
  font-size: 1.375rem;
  font-weight: bold;
  padding-right: 0.2rem;
}
.dates-link {
  background-color: transparent;
  border: 1px solid #fff;
}
.list-info li span {
  display: inline-block;
  vertical-align: middle;
}
/* FIXME check rules in style.css that take precedence  */
.divider {
  /* height: 1.3rem; */
  /* background-color: rgba(250, 250, 250, 0.35); */
  margin: 0 1rem;
}
.head-icon {
  max-width: 90px;
  margin-right: 10px;
}
.top-block {
  /* margin-bottom: 1.8rem; */
}
.list-info {
  border-top: 1px solid rgba(250, 250, 250, 0.35);
  border-bottom: 1px solid rgba(250, 250, 250, 0.35);
}
.trippers-div {
  padding-top: 1.6rem;
  width: max-content;
}
.icons {
  margin-right: 0.6rem;
}
.sub-heading {
  font-size: 0.8rem;
}
.bottom-left-text {
  font-size: 0.75rem;
  line-height: 1.6;
  letter-spacing: 0.4px;
  margin-right: 1.5rem;
}
.bottom-left-text span:last-child {
  font-weight: bold;
}
</style>
