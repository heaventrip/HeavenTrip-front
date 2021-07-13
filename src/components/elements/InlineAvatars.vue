<template>
  <div class="d-flex align-items-center" :style="[pMarginBottomStyle, pMarginTopStyle]">
    <div class="inline-avatar-container" v-for="(avatarId, index) in pAvatars" :key="avatarId" :style="[index === 0 ? '' : pSpacing]">
      <!-- FIXME intégrer border color ET outline -->
      <img class="inline-avatar-img rounded-circle" :class="pOutlineColor" :style="pHeight" :src="`https://res.cloudinary.com/heaventrip/image/upload/v1624841583/${avatarId}.jpg`" />
    </div>
    <div v-if="pHeart" @click="addToWishlist" style="border-radius: 50%" type="button" :class="pOutlineColor" :style="[pSpacing, pHeartwidth, pHeartheight]">
      <transition name="fade" mode="out-in">
        <img v-if="wishlisted && userAvatarId" class="rounded-circle" :class="pOutlineColor" :style="pHeight" :src="`https://res.cloudinary.com/heaventrip/image/upload/v1624837376/${userAvatarId}.jpg`" />
        <InlineSvg v-else :src="require(`@/assets/svg/heart-logo-${heartColor || 'white'}.svg`)" />
      </transition>
    </div>
    <div class="avatar-count" v-if="pCount">+1.5k</div>
  </div>
</template>

<script>
export default {
  name: 'InlineAvatars',
  props: ['course-id', 'height', 'heart', 'spacing', 'avatars', 'outline-color', 'border-width', 'mt', 'mb', 'heart-color', 'heartwidth', 'heartheight', 'count'],
  data() {
    return {
      pCount: this.count,
      pHeart: this.heart,
      pAvatars: this.avatars,
      wishlisted: false,
      userAvatarId: ''
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
      return `height: ${this.height || '40px'}; width: ${this.height || '40px'}`
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
  },
  methods: {
    addToWishlist() {
      if (!this.wishlisted)
        this.$axios
          .post('/wishlists', { wishlist: { courseId: this.$props.courseId } })
          .then(() => (this.wishlisted = true))
          .catch((err) => console.log(err))
      else this.$axios.delete('/wishlists', { wishlist: { courseId: this.$props.courseId } }).then(() => (this.wishlisted = false))
    }
  },
  mounted() {
    this.userAvatarId = localStorage.getItem('user.avatarId')

    // check if course is already wishlisted
    this.$axios
      .get('/wishlists', { wishlist: { courseId: this.$props.courseId } })
      .then(() => (this.wishlisted = true))
      .catch(() => (this.wishlisted = false))
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
  outline: 3px solid #564559;
}

.small-avatar--violetfullscreen {
  outline: 3px solid #705875;
}
</style>
