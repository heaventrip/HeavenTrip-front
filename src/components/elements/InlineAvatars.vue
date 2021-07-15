<template>
  <div class="d-flex align-items-center" :style="[pMarginBottomStyle, pMarginTopStyle]">
    <div class="inline-avatar-container" v-for="(avatarId, index) in pAvatars" :key="avatarId" :style="[index === 0 ? '' : pSpacing]">
      <img class="inline-avatar-img rounded-circle" :style="[pHeight, pOutline]" :src="`https://res.cloudinary.com/heaventrip/image/upload/v1624841583/${avatarId}.jpg`" />
    </div>
    <div v-if="pHeart" @click="addToWishlist" style="border-radius: 50%; z-index: 1" type="button" :style="[pSpacing, pHeartwidth, pHeartheight, pOutline]">
      <transition name="fade" mode="out-in">
        <!-- TODO hover sur le coeur + scale -->
        <img v-if="wishlisted && userAvatarId" class="rounded-circle" :style="[pHeight, pOutline]" :src="`https://res.cloudinary.com/heaventrip/image/upload/v1624837376/${userAvatarId}.jpg`" />
        <InlineSvg v-else :class="`heart-logo-${heartColor || 'white'}`" :src="require(`@/assets/svg/heart-logo-${heartColor || 'white'}.svg`)" />
      </transition>
    </div>
    <div class="avatar-count" v-if="pCount">+1.5k</div>
  </div>
</template>

<script>
import gsap from 'gsap'

export default {
  name: 'InlineAvatars',
  props: ['course-id', 'height', 'heart', 'spacing', 'avatars', 'outline-color', 'outline-width', 'border-width', 'mt', 'mb', 'heart-color', 'heartwidth', 'heartheight', 'count'],
  data() {
    return {
      pCount: this.count,
      pHeart: this.heart,
      pAvatars: this.avatars,
      wishlisted: false,
      userAvatarId: '',
      customColors: {
        'light-white': '#fcfcfc',
        violetfullscreen: '#705875',
        grey: '#292f33'
      }
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
    pOutline() {
      return `outline: ${this.outlineWidth || '3px'} solid ${this.customColors[this.outlineColor] || this.outlineColor}`
    },
    pHeartwidth() {
      return `width: ${this.heartwidth || '44px'}`
    },
    pHeartheight() {
      return `height: ${this.heartheight || '44px'}`
    }
  },
  methods: {
    scaleAvatar(obj, dir) {
      if (dir === 'up') {
        gsap.to(obj, { scale: 1.4, duration: 0.2, zIndex: 2, outlineWidth: '3px', ease: 'none' })
      } else {
        gsap.to(obj, { scale: 1, duration: 0.2, zIndex: 0, outlineWidth: 'initial', ease: 'none' })
      }
    },
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
  outline: 4px solid #5a3a5f;
}

.small-avatar--violetfullscreen {
  outline: 3px solid #705875;
}
.heart-logo-grey .grey:hover {
  fill: white;
}
.heart-logo-grey .white:hover {
  fill: #292f33;
}
</style>
