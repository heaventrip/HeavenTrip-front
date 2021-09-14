<template>
  <div class="chapter-block d-flex align-items-center justify-content-center">
    <svg xmlns="http://www.w3.org/2000/svg" fill="#292f33" height="130" viewBox="0 0 1192.975 1192.752">
      <path
        d="M922.67,1021.59l-8.031,6.627c-93.359,77.049-211.9,119.483-333.788,119.483-.854,0-1.715,0-2.567-.006-141.628-.692-275.123-56.4-375.892-156.857C4.543,793.6-10.455,486.108,167.5,275.583l6.751-7.985-31.929-32.17-8.044,9.47A561.006,561.006,0,0,0,32.541,421.506,570.515,570.515,0,0,0,.123,624.269C3.191,774.608,63.744,916.086,170.629,1022.64c109.286,108.948,254.068,169.358,407.7,170.1.952,0,1.9.008,2.846.008a570.306,570.306,0,0,0,192.7-33.271,564.467,564.467,0,0,0,171.155-97.745l9.586-7.97Z"
      />
      <path
        d="M1012.651,180.231C898.9,66.44,747.449,2.46,586.2.076a614.174,614.174,0,0,0-415.539,152.7l-3.708,3.253,94.476,95.18,3.271-2.782C457.832,84.241,738.875,95.864,918.427,275.468c90.977,91.017,141.033,211.943,140.947,340.5a480.2,480.2,0,0,1-117.663,314.5l-2.824,3.252,94.448,95.151,3.282-3.674a614.2,614.2,0,0,0,156.358-409.118C1193.1,451.477,1129.057,296.691,1012.651,180.231ZM951.526,933.283A487.864,487.864,0,0,0,1068.65,615.974c.087-131.037-50.933-254.293-143.663-347.065-88.349-88.374-205.065-139.74-328.645-144.638-121.685-4.833-240.318,35.745-334.366,114.322L180.5,156.511A604.625,604.625,0,0,1,586.058,9.351c158.826,2.348,308,65.364,420.031,177.439C1120.744,301.5,1183.821,453.95,1183.7,616.07a605.089,605.089,0,0,1-150.736,399.259Z"
      />
      <svg viewBox="-8 -20 30 30">
        <text font-family="Oswald" font-size="12" font-weight="800">06</text>
      </svg>
    </svg>
    <div class="head-block ml-4">
      <p class="sub-heading mb-2">{{ course.sports ? course.sports[0].name : 'Sport' }}</p>
      <h4 class="heading mb-0">Vos avis</h4>
    </div>
  </div>
  <div class="linear-block mb-0">
    <div class="card border-0 rounded-0">
      <div class="head-block subhead-block d-flex mb-0">
        <div class="">
          <p class="sub-heading mb-2">Vos avis</p>
          <h4 class="heading mb-0">Les témoignages</h4>
        </div>
        <i class="fa fa-chevron-down h4 mb-0 arrow text-grey"></i>
      </div>
    </div>
  </div>
  <div v-if="reviews">
    <div v-for="review in reviews" :key="review" class="linear-block my-2">
      <div class="card-body">
        <div class="review__block d-flex align-items-top">
          <div class="review__block-left d-flex flex-column align-items-center mr-5">
            <img class="review__block-left__avatar" :src="require('@/assets/images/ui_faces/1.jpg')" height="100" />
            <div class="review__block-left__date">{{ new Date(review.createdAt).toLocaleString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }) }}</div>
          </div>
          <div class="review__block-right">
            <div class="review__block-right__top-infos d-flex w-100">
              <div class="review__block-right__user-name mr-4">{{ review.user.firstName }} {{ review.user.lastName }}</div>
              <div class="review__block-right__user-infos mr-4">
                <span class="mr-2">
                  <InlineSvg :src="require('@/assets/svg/map-pin-filled.svg')" height="20" fill="#292f33" class="d-inline-block reviews__user-infos__spot-svg" />
                </span>
                <span class="d-inline-block align-middle">{{ review.user.city }}</span>
              </div>
              <div class="review__block__stars mr-4">
                <i class="fas fa-star mr-1"></i><i class="fas fa-star mr-1"></i><i class="fas fa-star mr-1"></i><i class="fas fa-star mr-1"></i><i class="fas fa-star mr-1"></i>
              </div>
              <!-- <div class="review__block__user-profile-link"><span>Voir profil</span></div> -->
            </div>
            <div class="review__block-right__text-content">{{ review.comment }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProductTabReviews',
  props: ['course'],
  data() {
    return {
      reviews: null
    }
  },
  created() {
    this.$axios.get('/reviews', { courseId: this.$props.course.id }).then((res) => (this.reviews = res.data.reviews))
  }
}
</script>

<style scoped>
.chapter-block {
  margin-bottom: 8rem;
  margin-top: 13rem;
}
.linear-block:last-of-type {
  margin-bottom: 0;
}
.review__block {
  /* margin-top: 2rem; */
  color: #7c7c7c;
}
.review__block-right__text-content {
  font-size: 0.8748rem;
  font-family: Muli, sans-serif;
}
.review__block-right__top-infos {
  font-size: 0.8748rem;
  font-family: Oswald, sans-serif;
  font-weight: 600;
  width: 65%;
  margin-bottom: 0.8rem;
  white-space: nowrap;
}
.review__block__user-profile-link {
  height: min-content;
  padding-left: 1.5rem;
  border-left: 1px solid #7c7c7c;
  font-weight: bold;
  text-transform: uppercase;
}
.review__block-left__avatar {
  margin-bottom: 0.6rem;
  object-fit: cover;
  border-radius: 50%;
  outline: solid rgba(0, 0, 0, 0.1) 2px;
}
.review__block-left__date {
  font-family: Oswald, sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  letter-spacing: 0.03rem;
}
.review__block__stars {
  margin-right: 1.5rem;
  color: #ffc300;
}
.product__nav__section-number {
  position: relative;
  width: 3rem;
  height: 3rem;
  border-radius: 10px;
  background: #292f33;
  font-size: 1.8rem;
  font-weight: 900;
  text-align: center;
  color: #fff;
}
</style>
