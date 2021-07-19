<template>
  <div class="d-flex align-items-center" :style="[pMarginBottomStyle, pMarginTopStyle]">
    <div class="inline-avatar-container" v-for="(avatarId, index) in avatars" :key="avatarId" :style="[index === 0 ? '' : pSpacing]">
      <img class="inline-avatar-img rounded-circle" :class="{ 'inline-avatar-img--transparent': hoveredHeart }" :style="[pHeight, pOutline]" :src="`https://res.cloudinary.com/heaventrip/image/upload/v1624841583/${avatarId}.jpg`" />
    </div>
    <div v-if="heart" @click="addToWishlist" style="border-radius: 50%; z-index: 1" type="button" :style="pSpacing">
      <transition name="fade" mode="out-in">
        <img v-if="wishlisted && userAvatarId" class="rounded-circle" :style="[pHeight, pOutline]" :src="`https://res.cloudinary.com/heaventrip/image/upload/v1624837376/${userAvatarId}.jpg`" />
        <div v-else style="position: relative" :style="[pHeartWidth, pHeartHeight]" @mouseenter="hoveredHeart = true" @mouseleave="hoveredHeart = false">
          <transition name="fade">
            <InlineSvg v-if="hoveredHeart" :class="`heart-logo heart-logo-grey`" :src="require(`@/assets/svg/heart-logo-grey.svg`)" />
            <InlineSvg v-else :style="pOutline" :class="`heart-logo heart-logo-white`" :src="require(`@/assets/svg/heart-logo-white.svg`)" />
          </transition>
        </div>
      </transition>
    </div>
    <div class="avatar-count" v-if="count">+1.5k</div>
  </div>
</template>

<script>
import gsap from 'gsap'

export default {
  name: 'InlineAvatars',
  // eslint-disable-next-line prettier/prettier
  props: [
    'course-id',
    'height',
    'heart',
    'spacing',
    'avatars',
    'outline-color',
    'outline-width',
    'border-width',
    'mt',
    'mb',
    'heart-color',
    'heart-width',
    'heart-height',
    'count'
  ],
  data() {
    return {
      hoveredHeart: false,
      wishlisted: false,
      userAvatarId: '',
      customColors: {
        'light-white': '#fcfcfc',
        violetfullscreen: '#65446d',
        grey: '#292f33',
        violet: '#5a3a5f'
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
    pHeartWidth() {
      return `width: ${this.heartWidth || '42px'}`
    },
    pHeartHeight() {
      return `height: ${this.heartHeight || '42px'}`
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
.heart-logo {
  border-radius: 50%;
  position: absolute;
}
.heart-logo-grey .grey:hover {
  fill: white;
}
.heart-logo-grey .white:hover {
  fill: #292f33;
}
.inline-avatar-img {
  transition: all 0.3s ease;
}
.inline-avatar-img--transparent {
  opacity: 0.5;
}
</style>
