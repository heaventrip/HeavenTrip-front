<template>
  <!-- STICKY NAVBAR HERE -->
  <div class="header--product">
    <div class="header-product__infos header-filter--product" style="width: 60%">
      <img :src="course?.cover" class="header-product__bg" />
      <ProductHeaderInfos ref="productHeaderInfos" :course="course" @clicked-tab="emitClickedTab" />
    </div>
    <div class="header-product__pics" style="box-shadow: -1px 0px 12px rgba(41, 47, 51, 0.8); width: 40%">
      <div style="height: 34%"><img src="https://images.ctfassets.net/8dtxc3nuj0tn/4RJSKIk5v7saV1cji10crg/214b7be246e8c63cba0355ebaac5e989/kitesurf-elgouna-spot.jpg" @click="showImg(0)" style="border-bottom: 2px solid #292f33" /></div>
      <div class="d-flex" style="height: 66%">
        <div class="d-flex flex-column" style="width: 55%">
          <img class="header-product__pic" src="https://images.ctfassets.net/8dtxc3nuj0tn/4SuuqMdgxsyjQQpdjEmun7/4db974d816a5a6df577f74f63e29b7b5/kitesurf-elgouna-lecon2.jpg" @click="showImg(1)" style="border-bottom: 2px solid #292f33" />
          <img src="https://images.ctfassets.net/8dtxc3nuj0tn/4AISlea84OedWAbKNV4xru/afdddc130bb86a116db22a389326b339/kitesurf-elgouna-hebergement.jpg" @click="showImg(2)" />
        </div>
        <div style="width: 45%">
          <img src="https://images.ctfassets.net/8dtxc3nuj0tn/1S1Nt2KpYQGGvBiS3864QR/6d8a53010fc7459aaf35c68d4510b1d6/kitesurf-elgouna-cook.jpg" @click="showImg(3)" style="border-left: 2px solid #292f33" />
        </div>
      </div>
      <vue-easy-lightbox loop scrollDisabled escDisabled moveDisabled :visible="visible" :imgs="imgs" :index="index" @hide="handleHide"></vue-easy-lightbox>
    </div>
  </div>
</template>

<script>
import VueEasyLightbox from 'vue-easy-lightbox'
import ProductHeaderInfos from '@/components/header/ProductHeaderInfos.vue'

export default {
  name: 'Header',
  components: {
    VueEasyLightbox,
    ProductHeaderInfos
  },
  props: ['course'],
  data() {
    return {
      imgs: [
        'https://images.ctfassets.net/8dtxc3nuj0tn/4RJSKIk5v7saV1cji10crg/214b7be246e8c63cba0355ebaac5e989/kitesurf-elgouna-spot.jpg',
        'https://images.ctfassets.net/8dtxc3nuj0tn/4SuuqMdgxsyjQQpdjEmun7/4db974d816a5a6df577f74f63e29b7b5/kitesurf-elgouna-lecon2.jpg',
        'https://images.ctfassets.net/8dtxc3nuj0tn/4AISlea84OedWAbKNV4xru/afdddc130bb86a116db22a389326b339/kitesurf-elgouna-hebergement.jpg',
        'https://images.ctfassets.net/8dtxc3nuj0tn/1S1Nt2KpYQGGvBiS3864QR/6d8a53010fc7459aaf35c68d4510b1d6/kitesurf-elgouna-cook.jpg'
      ],
      visible: false,
      index: 0 // default: 0
    }
  },
  methods: {
    emitClickedTab(tab) {
      this.$emit('clicked-tab', tab)
    },
    showImg(index) {
      this.index = index
      this.visible = true
    },
    handleHide() {
      this.visible = false
    }
  }
}
</script>

<style scoped>
.header-product__infos:after {
  content: '';
  position: absolute;
  background-color: #5a3a5fde;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
}
img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.header-product__pics {
  display: flex;
  flex-direction: column;
  margin-top: 70px; /* top nav height */
  margin-bottom: 10vh; /* bottom tabs height */
}
.header-product__pics img {
  cursor: pointer;
}
.header--product {
  display: flex;
  height: 100vh;
  width: 100vw;
  /* padding-bottom: 3vh; */
}
.header-product__bg {
  position: absolute;
  width: 60%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}
/* .header-filter--product::after {
  content: '';
  position: absolute;
  background-color: #5a3a5fb3;
  opacity: 0.6;
  width: 60%;
  height: 100%;
  z-index: 10;
} */
.header-filter--product--grey::after {
  content: '';
  position: absolute;
  background-color: #292f33;
  opacity: 0.9;
  width: 100%;
  height: 100vh; /* corresponds height of image */
  z-index: -1;
}
.header-filter--product--light::after {
  content: '';
  position: absolute;
  background-color: #fff;
  opacity: 0.8;
  width: 100%;
  height: 100vh; /* corresponds height of image */
  z-index: -1;
}
</style>
