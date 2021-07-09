<template>
  <!-- STICKY NAVBAR HERE -->
  <div class="header--product">
    <div class="header-product__infos header-filter--product" style="width: 60%">
      <img src="@/assets/images/combined.png" class="header-product__bg" />
      <ProductHeaderInfos ref="productHeaderInfos" :course="course" @clicked-tab="emitClickedTab" />
    </div>
    <div class="header-product__pics" style="box-shadow: -1px 0px 6px rgba(41, 47, 51, 0.8); width: 40%">
      <div style="height: 34%"><img :src="require('@/assets/images/sea.jpg')" @click="showImg(0)" style="border-bottom: 1px solid #292f33" /></div>
      <div class="d-flex" style="height: 66%">
        <div class="d-flex flex-column" style="width: 55%">
          <img class="header-product__pic" :src="require('@/assets/images/beach.jpg')" @click="showImg(1)" style="border-bottom: 1px solid #292f33" />
          <img :src="require('@/assets/images/beach1.jpg')" @click="showImg(2)" />
        </div>
        <div style="width: 45%">
          <img :src="require('@/assets/images/beach.jpg')" @click="showImg(3)" style="border-left: 1px solid #292f33" />
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
      imgs: ['https://via.placeholder.com/450.png/', 'https://via.placeholder.com/300.png/', 'https://via.placeholder.com/150.png/', 'https://via.placeholder.com/450.png/'],
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
  background-color: #5a3a5fb3;
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
