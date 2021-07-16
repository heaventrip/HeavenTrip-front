<template>
  <div class="reviews-section d-flex justify-content-between align-items-center">
    <InlineSvg class="reviews__quote reviews__quote--right" :src="require('@/assets/svg/right-quote.svg')" opacity="0.1" />
    <div class="reviews__infos d-flex flex-column align-items-end ml-5 mr-auto">
      <span>Pour vous</span>
      <div class="text-uppercase" style="font-size: 1.5rem; margin-bottom: 1rem">
        <span>ils&nbsp;</span>
        <span class="text--bold">témoignent</span>
      </div>
      <div class="d-flex align-items-center">
        <div v-for="(avatarId, index) in avatarKeys" :key="avatarId" :style="[index === 0 ? '' : 'margin-left: 15px']">
          <img @mouseover="setReviewActive(avatarId)" class="sm-avatar rounded-circle" height="50" width="50" :src="`https://res.cloudinary.com/heaventrip/image/upload/v1624841583/${avatarId}.jpg`" type="button" :class="[activeAvatar === avatarId ? 'avatar-opacity' : '']" />
        </div>
      </div>
    </div>
    <div class="reviews__user d-flex flex-column ml-auto mr-4">
      <InlineSvg class="reviews__quote reviews__quote--left" :src="require('@/assets/svg/left-quote.svg')" height="25" />
      <img height="220" width="220" :src="`https://res.cloudinary.com/heaventrip/image/upload/h_218/v1624841583/${activeReview?.user.avatarKey}.jpg`" class="reviews__user-avatar rounded-circle" rel="preload" />
    </div>
    <div class="reviews__comment fs-1 pl-3 mr-auto">
      <h6 class="text-uppercase mb-3">
        <span class="d-inline-block" style="font-weight: 800">{{ activeReview?.session?.course.typeOfCourse }} {{ activeReview?.session.course.sports }}</span>
        <span class="review-comment__date d-inline-block text-nowrap" style="font-size: 0.8rem; vertical-align: baseline">
          <img class="align-baseline ml-3 mr-2" src="@/assets/svg/arrow-right.svg" style="max-height: 12px" />
          Session du {{ new Date(activeReview?.session.dateStart).toLocaleString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }) }}
        </span>
      </h6>
      <p class="mb-0">
        {{ activeReview?.comment }}
      </p>
      <div class="reviews__user-infos mt-3">
        <span class="text--bold">{{ activeReview?.user.firstName }} {{ activeReview?.user.lastName }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SectionReviews',
  data() {
    return {
      reviews: [],
      avatarKeys: [],
      activeReview: null,
      preloadedAvatars: [],
      activeAvatar: ''
    }
  },
  methods: {
    setReviewActive(avatarId) {
      this.activeAvatar = avatarId

      if (this.activeReview.user.avatarKey === avatarId) return
      this.activeReview = this.reviews.find((review) => review.user.avatarKey === avatarId) || this.reviews[0]
    },
    preloadImage(url) {
      new Image().src = url
    }
  },
  watch: {
    reviews(val) {
      val.forEach((review, index) => {
        if (index > 3) return

        this.avatarKeys.push(review.user.avatarKey)
        this.preloadImage(`https://res.cloudinary.com/heaventrip/image/upload/h_218/v1624841583/${review.user.avatarKey}.jpg`)
      })
      this.activeReview = val[0]
    }
  },
  async created() {
    this.$axios.get('/reviews').then((res) => (this.reviews = res.data.reviews))
  }
}
</script>

<style scoped>
.sm-avatar {
  opacity: 0.4;
  transition: opacity 0.5s ease;
}
.avatar-opacity {
  opacity: 1;
  transition: opacity 0.5s ease;
}
.reviews__quote {
  position: absolute;
}
.reviews__quote--left {
  transform: translate(-150%, 200%);
}
.reviews__quote--right {
  opacity: 0.03;
  height: 80%;
  top: 0px;
  right: -12vw; /* compensates block margin */
}
.reviews__user-infos__spot-svg {
  vertical-align: sub;
}
.reviews__user-avatar {
  border: 15px solid #ebebebb3;
  border-radius: 50%;
  object-fit: cover;
}
.reviews__user {
  margin-left: 12rem;
}
.reviews__comment {
  width: 40%;
}
.review-comment__date {
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: 800l;
}
.divider {
  display: inline-block;
  width: 1px;
  height: 1rem;
  margin-left: 1rem;
  margin-right: 1rem;
  background-color: #fff;
}
.user_img {
  border: 10px solid #292f33;
  position: relative;
  bottom: 80px;
}
.reviews-section {
  position: relative;
  color: #292f33;
  margin: 0 10vw;
  padding: 8rem 0;
}
</style>
