<template>
  <div class="wrapper d-flex align-items-center">
    <div v-for="avatar in pAvatars" :key="avatar" :style="pSpacing">
      <img class="rounded-circle" :style="pHeight" :src="require('@/assets/images/t4.png')" />
    </div>
    <div v-if="pHeart">
      <a href="#"><img :style="pHeight" :src="require('@/assets/svg/heart-logo.svg')" /> </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InlineAvatars',
  props: ['height', 'heart', 'spacing', 'avatars'],
  data() {
    return {
      pHeart: this.heart,
      pAvatars: this.avatars
    }
  },
  computed: {
    pSpacing() {
      return `margin-left: ${this.spacing};`
    },
    pHeight() {
      return `height: ${this.height};`
    }
  }
}
</script>

<style scoped>
.wrapper {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
</style>
