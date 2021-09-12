<template>
  <div class="activitie-card d-flex align-items-center align-items-lg-end w-100 mt-auto">
    <div class="content d-flex align-items-center justify-content-between w-100 mt-5 mt-lg-0" v-if="featuredCourse">
      <div>
        <div style="width: 115%">
          <div class="top-block d-flex align-items-center" style="width: 90%">
            <svg xmlns="http://www.w3.org/2000/svg" height="170" viewBox="0 0 100 100">
              <g id="Calque_2" data-name="Calque 2">
                <g id="Calque_1-2" data-name="Calque 1">
                  <path fill="#d82558" d="M48.37,0A52.19,52.19,0,0,0,15.62,10.85l7.63,7.61A41.66,41.66,0,0,1,77.14,22.9a41.48,41.48,0,0,1,4.34,53.68l7.61,7.6A52.26,52.26,0,0,0,48.37,0Z" />
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    d="M76.11,88.8a46.3,46.3,0,0,1-61.37-3.52,46,46,0,0,1-3.49-61.22l-.87-.88a47.22,47.22,0,0,0,3.49,63A47.52,47.52,0,0,0,77,89.67Z"
                  />
                </g>
              </g>
              <InlineSvg
                v-if="featuredCourse.sports && featuredCourse.sports[0].picto !== null"
                :src="require(`@/assets/svg/${featuredCourse.sports[0].picto}.svg`)"
                height="80"
                viewBox="-12 -20 50 50"
                fill="white"
              />
            </svg>
            <!-- <InlineSvg :src="require('@/assets/svg/circle-ski-light.svg')" class="top-block__svg d-inline-block" style="max-width: 9rem" /> -->
            <!-- <img class="head-icon d-inline-block" fluid :src="require('@/assets/svg/picto-ski.svg')" /> -->
            <!-- <img class="head-pin-icon d-none d-lg-inline-block" fluid :src="require('@/assets/images/head-pin.png')" /> -->
            <div class="title-activities">
              <h1 class="headsport heading text-uppercase mb-3">{{ featuredCourse.name }}</h1>
              <h5 class="header-infos__sub-title d-block"><i class="fas fa-caret-right mr-1"></i> {{ featuredCourse.spot?.name }}</h5>
            </div>
          </div>
          <div class="d-flex">
            <Tag text="4 départs" color="white" class="tag__content tag--fullscreen" height="30px" />
            <InlineProductInfos
              :infos="[featuredCourse.country?.name, `${featuredCourse.duration} jours`, featuredCourse.level?.name, `${featuredCourse.max} places`]"
              :icons="['globe', 'timer', 'intensity-2-white', 'people']"
              :src="require(`@/assets/svg/${featuredCourse.sports[0].picto}.svg`)"
              pr="0rem"
              :border-top="false"
              color="white"
              icon="globe"
              pt="0rem"
            />
          </div>
        </div>
        <div class="d-inline-flex d-lg-flex align-items-center justify-content-between pb-3 trippers-div">
          <span class="bottom-left-text text-uppercase mb-0 d-none d-lg-inline-block">
            <span>Je fais déjà partie</span>
            <br />
            des <span>{{ featuredCourse.wishlistUsers?.length }} intéressé{{ featuredCourse.wishlistUsers?.length > 1 ? 's' : '' }}</span>
          </span>
          <!-- <span class="bottom-left-text text-uppercase mb-0 d-none d-lg-inline-block">
            <span>Ca te titille? Rejoint</span>
            <br />
            les <span>{{ featuredCourse.wishlistUsers?.length }} intéressé{{ featuredCourse.wishlistUsers?.length > 1 ? 's' : '' }}</span>
          </span> -->
          <InlineAvatars v-if="featuredCourse" :course-id="featuredCourse.id" :avatars="avatarKeys" outline-color="violetfullscreen" :heart="true" spacing="-10px" />
          <span class="divider d-none d-md-inline-block d-lg-none mx-2"></span>
          <a class="details-link text-uppercase text-white font-weight-bold d-inline-block d-lg-none pl-3" href="#"
            >Détails <img class="img-fluid mt-n1" fluid :src="require('@/assets/images/arr-r.png')"
          /></a>
        </div>
      </div>
      <div class="row no-gutters">
        <div class="col-4">
          <Button @click="$router.push({ name: 'Product', params: { id: featuredCourse.id, showDateBtn: true } })" text="voir les <br /> dates" color="transparent" size=".8rem" style="opacity: 0" />
          <!-- NOTE old version toggling session menu -->
          <!-- <Button @click="emitToggledSessions" text="voir les <br /> dates" color="transparent" size=".8rem" /> -->
        </div>
        <div class="col-8 bg block--white">
          <div class="block__content">
            <div class="px-0">
              <span class="euro"
                >{{ featuredCourse?.price >= 1000 ? `${featuredCourse?.price.toString()[0]} ${featuredCourse?.price.toString().slice(-3)}` : featuredCourse?.price }}&hairsp;&euro;</span
              >
              <span class="euro-pers">/pers.</span>
              <br />
              <span class="text--smaller">Prix du stage hors options</span>
            </div>
          </div>
        </div>
        <div class="col-6 ml-auto">
          <router-link :to="{ name: 'Product', params: { id: featuredCourse.id } }">
            <div class="bttn bttn--pink">
              <div class="bttn__text">Détails<i class="fa fa-chevron-right ml-3"></i></div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/elements/Button.vue'
import InlineProductInfos from '@/components/elements/InlineProductInfos.vue'
import InlineAvatars from '@/components/elements/InlineAvatars.vue'
import Tag from '@/components/elements/Tag.vue'

export default {
  name: 'HeaderText',
  emits: ['toggled-sessions', 'set-course'],
  components: {
    Button,
    InlineProductInfos,
    InlineAvatars,
    Tag
  },
  data() {
    return {
      toggledSessions: false,
      featuredCourse: null,
      avatarKeys: []
    }
  },
  watch: {
    featuredCourse: {
      immediate: true,
      handler(val) {
        if (!val) return

        this.$emit('set-course', val)

        if (!val.wishlistUsers) return

        let currUserAvatar = localStorage.getItem('user.avatarId')

        val.wishlistUsers.forEach((user, index) => {
          // show max 5 avatars
          if (index > 4) return

          if (user.avatarKey !== currUserAvatar) this.avatarKeys.push(user.avatarKey)
        })
      }
    }
  },
  methods: {
    emitToggledSessions() {
      this.toggledSessions = true
      this.$emit('toggled-sessions')
    }
  },
  created() {
    this.$axios.get('/courses', { params: { featured: true } }).then((res) => {
      this.featuredCourse = res.data.course
      this.$root.initialLoading = false
    })
  }
}
</script>

<style scoped>
@media (max-width: 1441px) {
  .no-gutters {
    width: 250px;
    font-size: 0.8rem;
  }
}
.title-activities {
  width: 86%;
  margin-left: 2rem;
  position: relative;
  top: 1px;
  padding: 1.4rem 0;
  border-bottom: 1px solid rgba(250, 250, 250, 0.3);
}
.text--smaller {
  font-size: 0.9rem;
}
.product-infos__tag {
  margin-right: 2rem;
}
.header-infos__sub-title {
  font-size: 1.4rem;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: uppercase;
}
.headsport {
  font-weight: 700 !important;
  letter-spacing: 3.2px !important;
}
.top-block__svg {
  max-width: 9rem;
}
/* @media only screen and (min-width: 1441px) {
  .header-infos__sub-title {
    font-size: 1.9rem;
  }
  .headsport {
    font-size: 4.5rem !important;
  }
  .top-block__svg {
    max-width: 11rem;
  }
} */
/* BLOCK */
.block--white {
  background-color: #fff;
  color: #292f33;
}
.block__content {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  width: fit-content;
  margin: auto;
  line-height: 1.3;
}
/* BTTN */
.bttn {
  text-align: center;
  text-transform: uppercase;
  color: #fff;
  cursor: pointer;
  height: 80px;
  transition: background 0.3s ease;
}
.bttn__text {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  font-weight: 500;
  letter-spacing: 1.5px;
}
.bttn__text--bold {
  font-weight: bold;
  letter-spacing: 1.5px;
  font-size: 0.8rem;
}
.bttn__text--white {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
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
.dates-link {
  background-color: transparent;
  border: 1px solid #fff;
}
.list-info li span {
  display: inline-block;
  vertical-align: middle;
}
.divider {
  /* height: 1.3rem; */
  /* background-color: rgba(250, 250, 250, 0.35); */
  margin: 0 1rem;
}
.head-icon {
  max-width: 90px;
  margin-right: 10px;
}
.top-block {
  margin-bottom: 0.9rem;
}
.list-info {
  border-top: 1px solid rgba(250, 250, 250, 0.35);
  border-bottom: 1px solid rgba(250, 250, 250, 0.35);
}
.trippers-div {
  margin-top: 0.4rem;
  border-top: 1px solid rgba(250, 250, 250, 0.35);
  padding-top: 1.2rem;
  width: max-content;
}
.icons {
  margin-right: 0.6rem;
}
.sub-heading {
  font-size: 0.8rem;
}
.bottom-left-text {
  font-size: 0.75rem;
  line-height: 1.6;
  letter-spacing: 0.4px;
  margin-right: 1.5rem;
}
.bottom-left-text span:last-child {
  font-weight: bold;
}
.activitie-card {
  padding: 0 130px;
}
@media (max-width: 1441px) {
  .activitie-card {
    padding: 0 70px;
  }
  .product-infos__tag {
    margin-right: 1.9rem;
  }
  .top-block {
    width: 90%;
    margin-bottom: 0rem;
  }
  .top-block > svg:first-child {
    width: 21%;
  }
  .bottom-left-text {
    font-size: 0.7rem;
  }
  .headsport {
    font-size: 2.1rem !important;
    letter-spacing: 0.03rem !important;
  }
  .title-activities {
    margin-left: 1.5rem;
  }
  .header-infos__sub-title {
    font-size: 0.7rem;
    font-weight: 400;
    letter-spacing: 0.03rem;
  }
  .block--white,
  .bttn--transparent {
    height: 65px !important;
  }
  .bttn--pink {
    height: 55px;
  }
}
</style>
