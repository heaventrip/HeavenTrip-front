<template>
  <div class="d-flex align-items-center" :style="[pMarginBottomStyle, pMarginTopStyle]">
    <div v-for="(avatar, index) in pAvatars" :key="avatar" :style="[index === 0 ? '' : pSpacing]">
      <!-- FIXME intégrer border color ET outline -->
      <img class="rounded-circle" :class="pOutlineColor" :style="pHeight" :src="require('@/assets/images/t4.png')" />
    </div>
    <div v-if="pHeart" style="border-radius: 50%" :class="pOutlineColor" :style="[pSpacing, pHeartwidth, pHeartheight]">
      <InlineSvg :src="require(`@/assets/svg/heart-logo-${heartColor}.svg`)" />
    </div>
    <div class="avatar-count" v-if="pCount">+1.5k</div>
  </div>
</template>

<script>
export default {
  name: 'InlineAvatars',
  props: ['height', 'heart', 'spacing', 'avatars', 'outline-color', 'border-width', 'mt', 'mb', 'heart-color', 'heartwidth', 'heartheight', 'count'],
  data() {
    return {
      pCount: this.count,
      pHeart: this.heart,
      pAvatars: this.avatars
    }
  },
  computed: {
    pSpacing() {
      return `margin-left: ${this.spacing || '-0.5rem'};`
    },
    pMarginTopStyle() {
      return `margin-top: ${this.mt || '0.5rem'};`
    },
    pMarginBottomStyle() {
      return `margin-bottom: ${this.mb || '0.5rem'};`
    },
    pHeight() {
      return `height: ${this.height || '40px'};`
    },
    pOutlineColor() {
      return `small-avatar--${this.outlineColor}`
    },
    pHeartwidth() {
      return `width: ${this.heartwidth}`
    },
    pHeartheight() {
      return `height: ${this.heartheight}`
    }
  }
}
</script>

<style scoped>
.avatar-count {
  margin-left: 2px;
  font-size: 0.75rem;
  font-weight: 400;
}
.small-avatar--grey {
  outline: 6px solid #292f33;
}
.small-avatar--white {
  outline: 6px solid #fff;
}
.small-avatar--light-white {
  outline: 6px solid #fcfcfc;
}

.small-avatar--violet {
  outline: 4px solid #564559;
}

.small-avatar--violetfullscreen {
  outline: 4px solid #705875;
}
</style>
