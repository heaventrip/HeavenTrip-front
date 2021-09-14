<template>
  <div class="d-flex align-items-center" style="height: 42px" :style="marginStyle">
    <div class="inline-avatar-container" v-for="(avatarId, index) in avatars" :key="avatarId" :style="[index === 0 ? '' : spacingStyle]">
      <img
        class="inline-avatar-img rounded-circle"
        :class="{ 'inline-avatar-img--transparent': hoveredHeart }"
        :style="imgStyle"
        :src="`https://res.cloudinary.com/heaventrip/image/upload/avatars/${avatarId}`"
      />
    </div>
    <div v-show="heart" @click="addToWishlist" style="border-radius: 50%; z-index: 1" type="button" :style="[spacingStyle, wishlistLoading ? 'cursor: default' : '']">
      <span id="loading" v-show="wishlistLoading"></span>
      <div v-if="wishlisted">
        <img v-if="userAvatarId" class="rounded-circle" :style="imgStyle" :src="`https://res.cloudinary.com/heaventrip/image/upload/avatars/${userAvatarId}`" />
      </div>
      <div v-else-if="wishlisted !== null" style="position: relative" :style="heartStyle" @mouseenter="hoveredHeart = true" @mouseleave="hoveredHeart = false">
        <transition name="fade" v-if="reverseColor">
          <InlineSvg v-if="hoveredHeart" :class="`heart-logo heart-logo-white`" :src="require(`@/assets/svg/heart-logo-white.svg`)" />
          <InlineSvg v-else :style="outlineStyle" :class="`heart-logo heart-logo-grey`" :src="require(`@/assets/svg/heart-logo-grey.svg`)" />
        </transition>
        <transition name="fade" v-else>
          <InlineSvg v-if="hoveredHeart" :class="`heart-logo heart-logo-grey`" :src="require(`@/assets/svg/heart-logo-grey.svg`)" />
          <InlineSvg v-else :style="outlineStyle" :class="`heart-logo heart-logo-white`" :src="require(`@/assets/svg/heart-logo-white.svg`)" />
        </transition>
      </div>
    </div>
    <div class="avatar-count" v-if="count">+1.5k</div>
  </div>
</template>

<script>
import gsap from 'gsap'

export default {
  name: 'InlineAvatars',
  // eslint-disable-next-line prettier/prettier
  props: ['course-id', 'height', 'heart', 'spacing', 'avatars', 'reverse-color', 'outline-color', 'outline-width', 'border-width', 'mt', 'mb', 'heart-color', 'heart-width', 'heart-height', 'count'],
  data() {
    return {
      hoveredHeart: false,
      wishlisted: null,
      userAvatarId: '',
      customColors: {
        'light-white': '#fcfcfc',
        violetfullscreen: '#65446d',
        grey: '#292f33',
        violet: '#5a3a5f'
      },
      wishlistLoading: false
    }
  },
  computed: {
    spacingStyle() {
      return `margin-left: ${this.spacing || '-0.5rem'};`
    },
    marginStyle() {
      return `margin-top: ${this.mt || '0.5rem'}; margin-bottom: ${this.mb || '0.5rem'}`
    },
    imgStyle() {
      return `
        height: ${this.height || '40px'};
        width: ${this.height || '40px'};
        outline: ${this.outlineWidth || '3px'} solid ${this.customColors[this.outlineColor] || this.outlineColor}
      `
    },
    outlineStyle() {
      return `outline: ${this.outlineWidth || '3px'} solid ${this.customColors[this.outlineColor] || this.outlineColor}`
    },
    heartStyle() {
      return `width: ${this.heartWidth || '40px'}; height: ${this.heartHeight || '40px'}`
    }
  },
  methods: {
    unwishlist() {
      this.wishlisted = false
    },
    scaleAvatar(obj, dir) {
      if (dir === 'up') {
        gsap.to(obj, { scale: 1.4, duration: 0.2, zIndex: 2, outlineWidth: '3px', ease: 'none' })
      } else {
        gsap.to(obj, { scale: 1, duration: 0.2, zIndex: 0, outlineWidth: 'initial', ease: 'none' })
      }
    },
    addToWishlist() {
      if (this.wishlistLoading || this.wishlisted) return

      this.wishlistLoading = true

      const AUTH_TOKEN_KEY = 'authToken'
      const token = localStorage.getItem(AUTH_TOKEN_KEY)
      this.$axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

      this.$axios
        .post('/wishlists', { wishlist: { courseId: this.$props.courseId } })
        .then(() => {
          this.wishlisted = true
          this.wishlistLoading = false
          this.$emit('added-to-wishlist')
          this.$notify({ group: 'app', type: 'success', text: 'Ce stage a été ajouté à vos envies !' })
        })
        .catch((err) => {
          this.wishlistLoading = false
        })
    }
  },
  created() {
    this.userAvatarId = localStorage.getItem('user.avatarId')
    // check if course is already wishlisted

    const AUTH_TOKEN_KEY = 'authToken'
    const token = localStorage.getItem(AUTH_TOKEN_KEY)
    this.$axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

    this.$axios
      .get('/wishlists', { params: { courseId: this.$props.courseId } })
      .then(() => {
        this.wishlisted = true
        this.wishlistLoading = false
      })
      .catch(() => {
        this.wishlisted = false
        this.wishlistLoading = false
      })
  },
  mounted() {
    this.$emitter.on('unwishlisted', (courseId) => {
      if (this.$props.courseId === courseId) this.wishlisted = false
    })

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
  transition: all 0.2s ease;
}
.inline-avatar-img--transparent {
  opacity: 0.5;
}
/* SPINNER */
#loading {
  display: inline-block;
  position: absolute;
  width: 40px;
  height: 40px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: #fff;
  animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
