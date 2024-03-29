<template>
  <section class="middle-section">
    <div class="container">
      <div class="row">
        <div class="pad-block rounded text-white p-0">
          <div class="pad__header shadow--bottom rounded-top d-flex justify-content-between align-items-center">
            <h5 class="pad__header__title">Votre coup de coeur</h5>
            <div style="width: min-content">
              <InlineAvatars :avatars="avatarKeys" heart-width="40px" :heart="true" spacing="-5px" border-color="grey" :course-id="highlightedCourse?.id" />
            </div>
          </div>
          <div class="d-flex">
            <div class="d-inline-block" style="z-index: 1; flex-grow: 1; background-color: rgb(255, 255, 255, 0.96)">
              <div class="pad__content shadow--right">
                <div class="text-uppercase pad__content__title font-weight-bold d-flex align-items-center">
                  <span class="pad__content__title__sport">{{ highlightedCourse?.sports[0].name }}</span>
                  <span class="pad__content__title__spot font-weight-normal"><i class="fas fa-caret-right mx-3"></i>{{ highlightedCourse?.spot.name }}</span>
                </div>
                <div class="pad__content__sports d-flex align-items-center justify-content-center tooltip-div mt-4">
                  <InlineSvg v-for="includedCourse in highlightedCourse?.alternatives.filter((el) => el.isIncluded)" :key="includedCourse" class="mr-4" :src="require(`@/assets/svg/${includedCourse?.picto || 'surf'}.svg`)" height="28" />
                  <span class="ml-auto euro"
                    ><strong>{{ highlightedCourse?.price }}&euro;</strong>/pers.
                  </span>
                </div>
                <div class="d-flex align-items-center social-info">
                  <InlineProductInfos :infos="[highlightedCourse?.country.name, `${highlightedCourse?.duration} jours`, highlightedCourse?.level.name, `${highlightedCourse?.max} places`]" :icons="['globe', 'timer', 'intensity-2-white', 'people']" color="#292f33" />
                </div>
              </div>
              <div class="d-flex pad__footer">
                <div class="pad__footer__review-counter shadow--top">
                  <Button style="cursor: default" :text="`${reviewsNb} avis`" icon="star" color="white" weight="bold" size="0.8rem" height="60px" />
                </div>
                <Button @click="$router.push({ path: `/product/${highlightedCourse.id}` })" class="w-100" text="Voir le détail du séjour" :arrow="true" color="pink" weight="bold" size="0.8rem" height="60px" />
              </div>
            </div>
            <!-- TODO changement de content au hover, et hover en gris -->
            <div class="d-inline-block pad__content p-0" style="width: 50px; height: min-content">
              <div class="pad__content__month-block shadow"><span>Mai</span></div>
              <div class="pad__content__month-block shadow"><span>Juil</span></div>
              <div class="pad__content__month-block shadow"><span>Août</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import InlineAvatars from '@/components/elements/InlineAvatars.vue'
import InlineProductInfos from '@/components/elements/InlineProductInfos.vue'
import Button from '@/components/elements/Button.vue'

export default {
  name: 'SectionMiddle',
  components: {
    InlineAvatars,
    Button,
    InlineProductInfos
  },
  data() {
    return {
      avatarKeys: [],
      highlightedCourse: null,
      reviewsNb: 0
    }
  },
  watch: {
    highlightedCourse(val) {
      if (val.sessions) {
        this.reviewsNb = 0
        val.sessions.forEach((sess) => {
          this.reviewsNb += sess.reviews.length
        })
      }

      if (val.wishlistUsers) {
        val.wishlistUsers.forEach((user, index) => {
          if (index > 5) return
          this.avatarKeys.push(user.avatarKey)
        })
      }
    }
  },
  async created() {
    await this.$axios.get('/courses', { params: { highlighted: true } }).then((res) => {
      this.highlightedCourse = res.data.course
    })
  }
}
</script>

<style scoped>
.pad__content__sports {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  margin-bottom: 0.6rem;
}
.pad__header__title {
  font-size: 1rem;
  font-weight: 400;
  position: relative;
}
.pad__header__title::before {
  position: absolute;
  content: '';
  width: 50px;
  height: 1px;
  background-color: #ffffff;
  bottom: -1rem;
  left: 0;
}
.pad__content__title__sport {
  font-size: 1.75rem;
}
.pad__content__title {
  margin-bottom: 2rem;
}
.pad__content__title__spot {
  color: #793f4e !important;
}
.pad__footer__review-counter {
  background-color: #fff;
  color: #292f33;
  width: 40%;
}
.pad-block {
  margin-left: auto;
  min-width: 500px;
  margin-right: 10%;
}
.pad__header {
  padding: 1.2rem 2rem;
  background-color: #292f33;
  margin-bottom: 0.1rem;
  position: relative;
  z-index: 2;
}
.pad__content {
  color: #292f33;
  padding: 2rem 2rem 0rem 2rem;
}
.pad__content__month-block span {
  display: inline;
  vertical-align: middle;
}
.pad__content__month-block {
  text-align: center;
  padding: 0.4rem 0;
  margin-bottom: 1px;
  margin-left: 1px;
  background-color: #fff;
  font-family: 'Muli', sans-serif;
  font-size: 0.75rem;
  font-weight: lighter;
}
.tooltip-div {
  border-top: 1px dashed #292f33;
  border-bottom: 1px dashed #292f33;
}
.bttn {
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  height: 80px;
}
.bttn__text {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  font-weight: 500;
  letter-spacing: 1.5px;
  text-align: center;
}
.bttn__text--bold {
  font-weight: bold;
  letter-spacing: 1.5px;
  font-size: 0.8rem;
}
.bttn--transparent {
  background-color: transparent;
  border: 1px solid #fff;
}
.bttn--pink {
  background-color: #d82558;
  border-color: #d82558;
}
.bttn--pink:hover {
  background-color: #292f33;
  border-color: #292f33;
}
.bttn--pink:active {
  background-color: #d82558;
  border-color: #d82558;
}

.middle-section {
  background: url('../../assets/images/asset-1.png') no-repeat center center / cover;
  height: 60vh;
}
</style>
