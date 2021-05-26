<template>
  <div class="wrapper d-flex align-items-center">
    <div v-for="avatar in pAvatars" :key="avatar" :style="pSpacing">
      <img class="small-avatar rounded-circle" :style="pHeight" :src="require('@/assets/images/t4.png')" />
    </div>
    <div v-if="pHeart">
      <img :style="pHeight" :src="require('@/assets/svg/heart-logo.svg')" />
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
      return `margin-left: ${this.spacing || '-0.5rem'};`
    },
    pHeight() {
      return `height: ${this.height || '40px'};`
    }
  }
}
</script>

<style scoped>
.wrapper {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
.small-avatar {
  outline: 5px solid #292f33;
  border: 1px solid #292f33;
}
</style>
