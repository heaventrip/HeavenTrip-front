<template>
  <div class="wrapper d-flex align-items-center">
    <div v-for="avatar in pAvatars" :key="avatar" :style="pSpacing">
      <!-- FIXME intégrer border color ET outline -->
      <img class="rounded-circle ${pBorderColor}" :class="{ 'small-avatar--outline': pOutline }" :style="pHeight" :src="require('@/assets/images/t4.png')" />
    </div>
    <div v-if="pHeart">
      <img :style="pHeight" :src="require('@/assets/svg/heart-logo.svg')" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'InlineAvatars',
  props: ['height', 'heart', 'spacing', 'avatars', 'border-color', 'border-width'],
  data() {
    return {
      pOutline: this.outline,
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
    },
    pBorderColor() {
      return `small-avatar--${this.borderColor}`
    }
  }
}
</script>

<style scoped>
.wrapper {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
.small-avatar--outline {
  outline: 5px solid inherit;
}
.small-avatar--grey {
  border: 1px solid #292f33;
}
.small-avatar--white {
  border: 1px solid #fff;
}
</style>
