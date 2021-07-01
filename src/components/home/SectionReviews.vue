<template>
  <div class="reviews-section d-flex justify-content-center align-items-center">
    <InlineSvg class="reviews__quote reviews__quote--right" :src="require('@/assets/svg/right-quote.svg')" opacity="0.1" />
    <div class="reviews__infos d-flex flex-column align-items-end">
      <span>Pour vous</span>
      <div class="text-uppercase" style="font-size: 1.5rem; margin-bottom: 1rem">
        <span>ils&nbsp;</span>
        <span class="text--bold">témoignent</span>
      </div>
      <div class="d-flex align-items-center">
        <div v-for="(avatarId, index) in avatarKeys" :key="avatarId" :style="[index === 0 ? '' : 'margin-left: 15px']">
          <img @mouseover="setReviewActive(avatarId)" class="rounded-circle" height="50" width="50" :src="`https://res.cloudinary.com/heaventrip/image/upload/v1624841583/${avatarId}.jpg`" type="button" />
        </div>
      </div>
    </div>
    <div class="reviews__user d-flex flex-column">
      <InlineSvg class="reviews__quote reviews__quote--left" :src="require('@/assets/svg/left-quote.svg')" height="25" />
      <img :src="`https://res.cloudinary.com/heaventrip/image/upload/h_218/v1624841583/${activeReview?.user.avatarKey}.jpg`" class="reviews__user-avatar rounded-circle" rel="preload" />
      <div class="reviews__user-infos mx-auto">
        <span class="text--bold mr-4">
          <InlineSvg :src="require('@/assets/svg/spot.svg')" class="reviews__user-infos__spot-svg" />
          <span class="ml-2">{{ activeReview?.user.city }}</span>
        </span>
        <span class="text--bold">{{ activeReview?.user.firstName }} {{ activeReview?.user.lastName }}</span>
      </div>
    </div>
    <div class="reviews__comment">
      <h6 class="text-uppercase">
        <span>{{ activeReview?.session?.course.typeOfCourse }} {{ activeReview?.session.course.sports }}</span>
        <span class="review-comment__date" style="font-size: 0.8rem">
          <img class="align-baseline mx-2" src="@/assets/svg/arrow-right.svg" style="max-height: 10px" />
          Session du {{ activeReview?.session.dateStart }}
        </span>
      </h6>
      <p class="mb-0">
        {{ activeReview?.comment }}
      </p>
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
      preloadedAvatars: []
    }
  },
  methods: {
    setReviewActive(avatarId) {
      if (this.activeReview.user.avatarKey === avatarId) return

      this.activeReview = this.reviews.find((review) => review.user.avatarKey === avatarId) || this.reviews[0]
    },
    preloadImage(url) {
      new Image().src = url
    }
  },
  watch: {
    reviews(val) {
      val.forEach((review) => {
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
.reviews__quote {
  position: absolute;
}
.reviews__quote--left {
  transform: translate(-100%, 200%);
}
.reviews__quote--right {
  height: 60%;
  top: 30px; /* compensates top offset of review-section block */
  left: 80%;
}
.reviews__user-infos__spot-svg {
  vertical-align: sub;
}
.reviews__user-avatar {
  border: 15px solid #fff;
  border-radius: 50%;
  object-fit: cover;
}
.reviews__user {
  margin-left: 12rem;
  margin-right: 2rem;
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
  bottom: 30px;
  color: #292f33;
  margin: 0 10vw;
}
</style>
