<template>
  <div class="avatars-wrapper d-flex align-items-center">
    <div v-for="avatar in pAvatars" :key="avatar" :style="pSpacing">
      <!-- FIXME intégrer border color ET outline -->
      <img class="rounded-circle" :class="pOutlineColor" :style="pHeight" :src="require('@/assets/images/t4.png')" />
    </div>
    <div v-if="pHeart" :style="pSpacing">
      <InlineSvg :src="require('@/assets/svg/heart-logo-light.svg')" width="40" height="40" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'InlineAvatars',
  props: ['height', 'heart', 'spacing', 'avatars', 'outline-color', 'border-width'],
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
    },
    pOutlineColor() {
      return `small-avatar--${this.outlineColor}`
    }
  }
}
</script>

<style scoped>
.avatars-wrapper {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
.small-avatar--grey {
  outline: 4px solid #292f33;
}
.small-avatar--white {
  outline: 4px solid #fff;
}

.small-avatar--violet {
  outline: 4px solid #564559;
}
</style>
