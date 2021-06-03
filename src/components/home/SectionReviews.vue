<template>
  <div class="reviews-section d-flex justify-content-center align-items-center">
    <InlineSvg class="reviews__quote reviews__quote--right" :src="require('@/assets/svg/right-quote.svg')" opacity="0.1" />
    <div class="reviews__infos d-flex flex-column align-items-end">
      <span>Pour vous</span>
      <div class="text-uppercase" style="font-size: 1.5rem">
        <span>ils&nbsp;</span>
        <span class="text--bold">témoignent</span>
      </div>
      <InlineAvatars height="40px" :heart="false" spacing="15px" :avatars="[1, 2, 3]" />
    </div>
    <div class="reviews__user d-flex flex-column">
      <InlineSvg class="reviews__quote reviews__quote--left" :src="require('@/assets/svg/left-quote.svg')" height="25" />
      <img :src="require('@/assets/images/avatar.png')" class="reviews__user-avatar rounded-circle" />
      <div class="reviews__user-infos mx-auto">
        <span class="text--bold mr-4">
          <InlineSvg :src="require('@/assets/svg/spot.svg')" class="reviews__user-infos__spot-svg" />
          <span class="ml-2">{{ review.user?.city }}</span>
        </span>
        <span class="text--bold">{{ review.user?.firstName }} {{ review.user?.lastName }}</span>
      </div>
    </div>
    <div class="reviews__comment">
      <h6 class="text-uppercase">
        <span>{{ review.session?.course.typeOfCourse }} {{ review.session?.course.sport }}</span>
        <span class="review-comment__date" style="font-size: 0.8rem">
          <img class="align-baseline mx-2" src="@/assets/svg/arrow-right.svg" style="max-height: 10px" />
          Session du {{ review.session?.dateStart }}
        </span>
      </h6>
      <p class="mb-0">
        {{ review.comment }}
      </p>
    </div>
  </div>
</template>

<script>
import InlineAvatars from '@/components/elements/InlineAvatars.vue'
export default {
  name: 'SectionReviews',
  components: {
    InlineAvatars
  },
  data() {
    return {
      review: {}
    }
  },
  created() {
    this.$axios.get('/reviews').then((res) => (this.review = res.data.reviews[0])) // we want only one
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
}
.reviews__user {
  margin-left: 8rem;
  margin-right: 2rem;
}
.reviews__comment {
  width: 40%;
}
.review-comment__date {
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: normal;
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
