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
        <text font-family="Oswald" font-size="12" font-weight="800">02</text>
      </svg>
    </svg>
    <div class="head-block ml-4">
      <p class="sub-heading mb-2">{{ course.sports ? course.sports[0].name : 'Sport' }}</p>
      <h4 class="heading mb-0">Activités & spot</h4>
    </div>
  </div>
  <div class="d-flex" style="margin: 6rem 0rem">
    <div class="linear-block p-0 m-0 w-100">
      <div class="card-body d-flex" style="box-shadow: 0 0 2px #ebebeb; height: 340px">
        <div class="guide-word__image">
          <img class="img-fill" fluid :src="require('@/assets/images/ui_faces/1.jpg')" />
        </div>
        <div class="guide-word__text">
          <h6 class="head text-uppercase text-white py-3 mb-1" style="width: max-content; border-top: 1px dashed #ffffff66; border-bottom: none">Mot du pro…</h6>
          <div class="mb-4" style="height: 1px; width: 40%; border-top: 1px dashed #ffffff66"></div>
          <transition name="fade" mode="out-in">
            <div v-if="tab === 1">
              <div class="guide-word__subtitle">Atmosphère culinaire</div>
              <p class="content pt-3 text-white" style="line-height: 24px">Lorem ipsum dolor sit amet, solum dictas vim cu, ne his hendrerit deterruisset, id sed doctus fuisset intellegam. Per case melius assentior ea. Et scaevola insolens eum. Ad vix verear eruditi ncillae, fabulas.</p>
              <h6 class="author text-white mt-4 mb-0">Edouard du Thin - Moniteur Ski / Snow</h6>
            </div>
            <div v-else>
              <div class="guide-word__subtitle">Un peu sur moi!</div>
              <p class="content pt-3 text-white" style="line-height: 24px">testeste testtesteste testeste testeste testesteste testeste testeste testesteste testeste testeste testesteste testeste testeste testesteste testeste testeste teseste testeste testeste testeste testeste testeste testeste</p>
              <h6 class="author text-white mt-4 mb-0">Edouard du Thin - Moniteur Ski / Snow</h6>
            </div>
          </transition>
        </div>
      </div>
    </div>
    <div class="d-flex flex-column" style="margin-left: 1px">
      <div @mouseover="tab = 1" type="button" :class="[tab === 1 ? 'bg-dark' : 'bg-white']" style="position: relative; width: 60px; height: 60px; box-shadow: 1px -1px 2px #ebebeb">
        <InlineSvg height="30px" style="margin: 15px" :src="require('@/assets/svg/bowl2.svg')" :fill="[tab === 1 ? '#fff' : '#5d3462']" />
      </div>
      <div @mouseover="tab = 2" type="button" :class="[tab === 2 ? 'bg-dark' : 'bg-white']" style="position: relative; width: 60px; height: 60px; box-shadow: 1px 1px 2px #ebebeb">
        <InlineSvg height="30px" style="margin: 15px" :src="require('@/assets/svg/kitchenhat.svg')" :fill="[tab === 2 ? '#fff' : '#5d3462']" />
      </div>
    </div>
  </div>
  <div class="linear-block">
    <div class="card border-0 rounded-0">
      <div class="head-block subhead-block d-flex">
        <div class="">
          <p class="sub-heading mb-2">Activités & Spot</p>
          <h4 class="heading mb-0">Activité principale</h4>
        </div>
      </div>
      <div class="card-body">
        <div v-if="course.multisport" class="w-100 pb-3">
          <div v-for="sport in course.sports" :key="sport" class="head text-uppercase py-2 d-inline-block mr-5" style="font-weight: 500; cursor: pointer" :class="{ 'sport-tab--active': activeSportTab === sport }" @mouseover="activeSportTab = sport">
            {{ sport.name }}
          </div>
        </div>
        <div v-else class="head text-uppercase pb-2" style="width: 100%; font-weight: 500">{{ course.sports[0].name }}</div>
        <transition name="fade">
          <p :key="activeSportTab" class="content" style="font-family: Muli; line-height: 1.2; font-weight: 400; font-size: 0.875rem">{{ activeSportTab?.description || course.sports[0].description }}</p>
        </transition>
        <div class="row">
          <div class="col-9 col-lg-12 mx-auto">
            <div class="like-div white">
              <ul class="list-unstyled text-uppercase content-list m-0 w-100 justify-content-between">
                <li class="fg-1" v-for="sportInfo in activeSportTab.sportInfos || course.sports[0].sportInfos" :key="sportInfo">
                  <a class="p-0 m-0" @click.prevent style="cursor: default; font-size: 0.875rem; color: #7c7c7c" href="#">
                    {{ sportInfo.title }} :
                    <strong class="text-dark ml-2">{{ sportInfo.description }}</strong>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="linear-block py-0" style="background-color: #fcfcfc; box-shadow: none">
    <div class="head-block subhead-block d-flex">
      <div class="">
        <p class="sub-heading mb-2">Activités & Spot</p>
        <h4 class="heading mb-0">Activités incluses</h4>
      </div>
    </div>
    <div class="card-body">
      <div class="d-flex w-100">
        <div v-for="includedCourse in includedCourses.splice(0, 3)" :key="includedCourse" class="included-activity-card" style="min-width: 240px">
          <div class="box bg-white my-0" style="padding: 2rem">
            <div class="head text-uppercase mb-0 d-inline-block text-danger" style="font-size: 1rem; font-weight: 900">
              <InlineSvg v-if="includedCourse.picto" fill="#d82558" height="35" class="head-pin-icon d-inline-block m-0" :src="require(`@/assets/svg/${includedCourse.picto}.svg`)" />
              <InlineSvg fill="#d82558" height="10" class="mx-3 d-inline-block" :src="require(`@/assets/svg/triangle-right.svg`)" />
              <span class="d-inline-block align-middle">{{ includedCourse.title }}</span>
            </div>
            <ul class="list-unstyled list mt-3 mb-0">
              <li v-for="(info, index) in includedCourse.alternativeInfos" :key="info">
                <a href="#" @click.prevent style="cursor: default" class="text-decoration-none" :class="[index === includedCourse.alternativeInfos.length - 1 ? 'pb-0' : '']">
                  {{ info.title }} :
                  <strong class="text--grey ml-2">{{ info.description }}</strong>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="d-flex w-100" v-if="includedCourses.splice(3, 3).length">
        <div v-for="includedCourse in includedCourses.splice(3, 3)" :key="includedCourse" class="included-activity-card" style="min-width: 230px">
          <div class="box bg-white my-0" style="padding: 2rem">
            <div class="head text-uppercase mb-0 d-inline-block text-danger" style="font-size: 1rem; font-weight: 900">
              <InlineSvg v-if="includedCourse.picto" fill="#d82558" height="35" class="head-pin-icon d-inline-block m-0" :src="require(`@/assets/svg/${includedCourse.picto}.svg`)" />
              <InlineSvg fill="#d82558" height="10" class="mx-3 d-inline-block" :src="require(`@/assets/svg/triangle-right.svg`)" />
              <span class="d-inline-block align-middle">{{ includedCourse.title }}</span>
            </div>
            <ul class="list-unstyled list mt-3 mb-0">
              <li style="border-top: 1px dashed #dbdbdbb3" v-for="(info, index) in includedCourse.alternativeInfos" :key="info">
                <a href="#" @click.prevent style="cursor: default" class="text-decoration-none" :class="[index === includedCourse.alternativeInfos.length - 1 ? 'pb-0' : '']">
                  {{ info.title }} :
                  <strong class="text--grey ml-2">{{ info.description }}</strong>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="linear-block">
    <div class="card border-0 rounded-0">
      <div class="head-block subhead-block d-flex">
        <div class="">
          <p class="sub-heading mb-2">Activités & Spot</p>
          <h4 class="heading mb-0">Le spot</h4>
        </div>
        <i class="fa fa-chevron-down h4 mb-0 arrow text-white d-block d-lg-none"></i>
        <h6 @click="openMap" type="button" class="map-head d-flex align-items-center justify-content-end text-danger ml-auto">
          <span class="img-block">
            <InlineSvg class="img_icon" height="40" :src="require('@/assets/svg/mapsearch.svg')" />
          </span>
          <!-- TODO add hover -->
          <span style="margin-left: 0.5rem; color: #292f33; text-align: left"> VOIR SUR <br />LA MAP </span>
        </h6>
      </div>
      <div class="card-body">
        <p class="content">
          {{ course.spot?.description }}
        </p>
        <div class="row">
          <div class="col-9 col-lg-12 mx-auto">
            <div class="like-div white">
              <ul class="list-unstyled text-uppercase content-list m-0 w-100 justify-content-between">
                <h5 class="content-head text-nowrap pr-3 fg-3" style="font-weight: 900">LES + DU SPOT :</h5>
                <li class="text-right fg-1" v-for="spotAdvantage in course?.spot?.spotAdvantages" :key="spotAdvantage">
                  <a class="text-reset p-0" @click.prevent style="cursor: default" href="#"><i class="fas fa-plus mr-2"></i>{{ spotAdvantage.name }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="linear-block">
    <div class="card border-0 rounded-0">
      <div class="head-block subhead-block d-flex">
        <div class="">
          <p class="sub-heading mb-2">Activités & Spot</p>
          <h4 class="heading mb-0">Activités en option</h4>
        </div>
        <i class="fa fa-chevron-down h4 mb-0 arrow text-white"></i>
      </div>
      <div class="card-body">
        <p class="content">En cas de mauvaises conditions météorologiques ou autres facteurs empêchants la pratique de votre activité principale, nous proposons des activités de remplacement inclus dans le prix.</p>
        <ul class="activity-list list-unstyled mb-0">
          <li v-for="(alternative, index) in altCourses" :key="alternative" :class="[index === altCourses.length - 1 ? 'pb-0' : '']">
            <h5 class="activity-list-head mb-0">
              <InlineSvg v-if="alternative.picto" fill="#d82558" height="35" class="d-inline-block mr-4" :src="require(`@/assets/svg/${alternative.picto}.svg`)" />
              <span class="d-inline-block align-middle">{{ alternative.title }}</span>
            </h5>
            <ul class="list-unstyled text-uppercase activity-content-list justify-content-end mb-0">
              <li class="optional-activity__info-item">
                Durée :&nbsp;&nbsp;<strong>{{ alternative.duration }}journée{{ alternative.duration > 1 ? 's' : '' }}</strong>
              </li>
              <li class="optional-activity__info-item">plongée :&nbsp;&nbsp;<strong>2</strong></li>
              <li class="optional-activity__info-item--price">
                <strong>{{ alternative.price }}€</strong>&nbsp;/pers.
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProductTabActivity',
  props: ['course'],
  data() {
    return {
      tab: 1,
      includedCourses: null,
      altCourses: null,
      activeSportTab: ''
    }
  },
  watch: {
    course: {
      immediate: true,
      handler(val) {
        this.includedCourses = val.alternatives.filter((el) => el.isIncluded)
        this.altCourses = val.alternatives.filter((el) => el.isOption)

        // set first one active when loaded
        if (val.multisport) this.activeSportTab = val.sports[0]
      }
    }
  },
  methods: {
    openMap() {
      let escapedSpot = this.$props.course.spot.name.replace(/\s/g, '+')
      let url = 'https://www.google.com/maps?q=' + escapedSpot
      window.open(url)
    }
  }
}
</script>

<style scoped>
.included-activity-card {
  min-width: 230px;
  margin-right: 3px;
}
@media only screen and (min-width: 1441px) {
  .included-activity-card {
    margin-right: 1.5rem;
  }
}
.sport-tab--active {
  border-bottom: 1px solid #292f33;
}
.chapter-block {
  margin-bottom: 8rem;
  margin-top: 13rem;
}
.linear-block:last-of-type {
  margin-bottom: 0;
}
.guide-word__subtitle {
  font-size: 0.875rem;
  font-weight: 400;
  color: #fff;
}
.guide-word__image {
  display: inline-block;
  width: 35%;
}
.guide-word__text {
  display: inline-block;
  background-color: #5d3462;
  text-align: left;
  padding: 2.5rem 3rem;
  width: 72%;
  font-weight: 100;
}
.activity-word__text {
  display: inline-block;
  text-align: left;
  width: 72%;
  padding: 1.5rem;
}
.activity-word__list {
  display: inline-block;
  background-color: #292f33;
  margin: 0;
  border: none;
}
.optional-activity__info-item--price {
  border-left: 1px solid #292f33;
  color: #292f33;
}
.product__nav__section-number {
  position: relative;
  height: 3rem;
  width: 3rem;
  border-radius: 10px;
  background: #292f33;
  font-size: 1.8rem;
  font-weight: 900;
  text-align: center;
  color: #fff;
}
</style>
