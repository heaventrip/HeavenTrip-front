<template>
  <div class="checkout-header sticky-header">
    <div class="checkout-header-div m-flex bg-dark text-white d-flex align-items-center text-uppercase" v-if="activeStep !== 'validation'">
      <a href="#" class="back-to-home-link text-reset text-decoration-none font-weight-500 d-flex align-items-center align-self-stretch bg-danger px-3"><i class="fa fa-home h6 mb-0"></i></a>
      <a href="#" class="descriptif-link text-reset text-decoration-none font-weight-bold d-flex align-items-center align-self-stretch px-4 ml-5" style="border-right: 1px solid white"><i class="fa fa-chevron-left mr-3 h6 mb-0"></i> descriptif</a>
      <div class="mb-0 ml-4 pr-4 border-right font-weight-light">{{ course?.sports[0].sportCategories[0].name }}</div>
      <div class="mb-0 ml-3 font-weight-bold">{{ course?.sports[0].name }}</div>
      <p class="ml-auto mb-0 cap-letter font-weight-light mb-0 text-right">Besoin d'un conseil ou d'un renseignement ?</p>
      <div class="d-flex justify-content-around text-white text-uppercase font-weight-500 mail-box" style="margin-right: 4vw">
        <a href="tel:0369316618" class="text-reset text-decoration-none border-right px-4"><img class="mr-3" fluid :src="require('@/assets/images/tel.png')" /><img class="mr-3 hover-img" fluid :src="require('@/assets/images/tel_h.png')" />03 69 31 66 18</a>
        <a href="#" class="text-reset text-decoration-none pl-4"><img class="mr-3" fluid :src="require('@/assets/images/chat.png')" /><img class="mr-3 hover-img" fluid :src="require('@/assets/images/chat_h.png')" />écrivez-nous</a>
      </div>
    </div>
    <div class="checkout-header-block d-flex shadow-sm block-header position-relative">
      <div class="d-flex align-items-center checkout-header-block-container flex-1 text-white" style="background-color: #5a3a5f">
        <svg xmlns="http://www.w3.org/2000/svg" height="100" viewBox="0 0 100 100">
          <g id="Calque_2" data-name="Calque 2">
            <g id="Calque_1-2" data-name="Calque 1">
              <path fill="#d82558" d="M48.37,0A52.19,52.19,0,0,0,15.62,10.85l7.63,7.61A41.66,41.66,0,0,1,77.14,22.9a41.48,41.48,0,0,1,4.34,53.68l7.61,7.6A52.26,52.26,0,0,0,48.37,0Z" />
              <path xmlns="http://www.w3.org/2000/svg" fill="white" d="M76.11,88.8a46.3,46.3,0,0,1-61.37-3.52,46,46,0,0,1-3.49-61.22l-.87-.88a47.22,47.22,0,0,0,3.49,63A47.52,47.52,0,0,0,77,89.67Z" />
            </g>
          </g>
          <InlineSvg v-if="course?.sports && course?.sports[0].picto !== null" :src="require(`@/assets/svg/${course.sports[0].picto}.svg`)" viewBox="-15 -18 57 57" fill="white" />
        </svg>
        <div style="margin-left: 1.2rem">
          <h2 class="heading text-uppercase mb-2 font-weight-bold" style="">{{ course?.sports[0].name }}</h2>
          <div class="text-uppercase spacing-word"><i class="fas fa-caret-right mr-1"></i> {{ course?.spot?.name }}</div>
        </div>
        <div class="checkout-header-divider h-75" style="margin: 0 4rem 0 5rem">
          <span class="line"></span>
        </div>
        <div class="text-uppercase text-white font-weight-500 calender-dates mr-5">
          <a href="#" class="text-reset text-decoration-none">
            <InlineSvg :src="require('@/assets/svg/date-search.svg')" fill="white" height="20" class="mr-3 d-inline-block" />
            <span class="d-inline-block align-middle" style="font-weight: 100">départ :&nbsp;</span>
            <span class="d-inline-block align-middle">&nbsp;06/10/2020</span>
          </a>
          <a href="#" class="text-reset text-decoration-none">
            <InlineSvg :src="require('@/assets/svg/date-search.svg')" fill="white" height="20" class="mr-3 d-inline-block" />
            <span class="d-inline-block align-middle" style="font-weight: 100">retour :&nbsp;</span>
            <span class="d-inline-block align-middle">&nbsp;06/10/2020</span>
          </a>
        </div>
        <div class="ml-auto" v-if="activeStep !== 'validation'">
          <span class="pad__content__avatars-title text-uppercase mb-0 d-none d-lg-inline-block"> <span style="font-size: 0.8rem; font-weight: 500; letter-spacing: 0.05rem">Trippers inscrits&nbsp;</span><span style="letter-spacing: 0.05rem; font-size: 0.875rem">à cette session</span> </span>
          <div class="d-flex justify-content-between">
            <InlineAvatars
              :avatars="['wb1pauez3a4chagrpyth', 'j7pyvrb9k40igjtuniwb', 'k4jpldbzp2cq6m6pjgip', 'yow5loelun43c3xbdbiw', 'ers53we5kg0ffyv6csoq', 'wb1pauez3a4chagrpyth', 'wb1pauez3a4chagrpyth', 'wb1pauez3a4chagrpyth', 'wb1pauez3a4chagrpyth', 'wb1pauez3a4chagrpyth']"
              :heart="false"
              outline-color="violet"
              height="40px"
              spacing="-10px"
              mt="0.5rem"
              mb="0rem"
            />
          </div>
        </div>
      </div>
      <div class="ml-auto activity-total d-flex align-items-center total-amount-block" style="border-left: 1px solid rgba(255, 255, 255, 0.15); color: white" :style="{ backgroundColor: activeStep === 'validation' ? '#292f33' : 'rgb(90, 58, 95)' }">
        <div class="total-amount text-uppercase mb-0" :style="{ padding: activeStep === 'validation' ? '0 2rem' : '' }">
          <span v-if="activeStep === 'validation'">Total de la<br />réservation :<br /></span>
          <span v-else>Prix total :<br /></span>
          <span class="font-weight-bold" style="font-size: 1.875rem">{{ course?.price.toString()[0] }}&thinsp;{{ course?.price.toString().slice(1) }}&thinsp;&euro;</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InlineAvatars from '@/components/elements/InlineAvatars.vue'
import gsap from 'gsap'

export default {
  name: 'CheckOutHeader',
  components: {
    InlineAvatars
  },
  props: ['course', 'session', 'active-step'],
  data() {
    return {
      avatarKeys: []
    }
  },
  watch: {
    session: {
      immediate: true,
      handler(val) {
        val.participants.forEach((user) => this.avatarKeys.push(user.avatarKey))
      }
    }
  },
  methods: {
    scaleAvatar(obj, dir) {
      if (dir === 'up') {
        gsap.to(obj, { scale: 1.4, duration: 0.2, zIndex: 1, ease: 'none' })
      } else {
        gsap.to(obj, { scale: 1, duration: 0.2, zIndex: 0, ease: 'none' })
      }
    }
  },
  mounted() {
    let that = this

    document.querySelectorAll('.inline-avatar-container').forEach((img) => {
      img.addEventListener('mouseenter', (e) => {
        that.scaleAvatar(e.target, 'up')
      })
    })
    document.querySelectorAll('.inline-avatar-container').forEach((img) => {
      img.addEventListener('mouseleave', (e) => {
        that.scaleAvatar(e.target, 'down')
      })
    })
  }
}
</script>

<style scoped>
.checkout-header-block-container {
  padding: 0 4vw;
}
@media only screen and (min-width: 1200px) and (max-width: 1440px) {
  .checkout-header-block-container {
    min-height: 170px;
  }
}
@media only screen and (min-width: 1440px) {
  .checkout-header-block-container {
    min-height: 170px;
  }
}
.back-to-home-link {
  border-right: 1px solid white;
  transition: all 0.3s ease;
}
.back-to-home-link:hover {
  color: #292f33 !important;
  background-color: white !important;
}
.descriptif-link {
  transition: all 0.3s ease;
}
.descriptif-link:hover {
  background-color: white;
  color: #292f33 !important;
}
</style>
