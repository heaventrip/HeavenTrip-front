<template>
  <div class="reviews-section d-flex justify-content-center align-items-center">
    <div class="reviews__infos d-flex flex-column align-items-end">
      <span>Pour vous</span>
      <div class="text-uppercase" style="font-size: 1.5rem">
        <span>ils&nbsp;</span>
        <span class="text--bold">témoignent</span>
      </div>
      <InlineAvatars height="40px" :heart="false" spacing="10px" :avatars="[1, 2, 3]" />
    </div>
    <div class="reviews__user d-flex flex-column">
      <img :src="require('@/assets/images/avatar.png')" class="reviews__user-avatar rounded-circle" />
      <div class="reviews__user-infos mx-auto">
        <span class="text--bold mr-4">
          <InlineSvg :src="require('@/assets/svg/map-pin.svg')" class="align-sub" />
          <span class="ml-2">Nice</span>
        </span>
        <span class="text--bold">Remi Flemming</span>
      </div>
    </div>
    <div class="reviews__comment">
      <h6 class="text-uppercase">
        <span class="mr-2">
          <img class="align-baseline mr-2" src="@/assets/svg/arrow-right.svg" style="max-height: 15px" />
          Séjour KITESURF
        </span>
        <span class="review-comment__date" style="font-size: 0.8rem">session du 01/02/03</span>
      </h6>
      <p class="mb-0">
        C'est en vivant des emotions puissantes ensemble, que chacun de nous se sent vraiment vivant. Toussa toussa toussa c'est trop coooool! Et hop encore une ligne pour la manmotte ! Toussa toussa toussa Toussa toussa toussa c'est Charlie qui dit ! Enfin j'ai peut-etre pas totalement termine...
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
  }
}
</script>

<style scoped>
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
