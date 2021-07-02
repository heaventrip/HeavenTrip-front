<template>
  <div class="d-flex align-items-center justify-content-center" style="margin-bottom: 5rem">
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
  <div class="linear-block pb-0">
    <div class="head-block mb-4 d-flex justify-content-center justify-content-lg-start">
      <!-- <div class="product__nav__section-number"><span>02</span></div> -->
      <div class="">
        <p class="sub-heading mb-2">Activités & Spot</p>
        <h4 class="heading mb-0 text-uppercase">Activité principale</h4>
      </div>
      <span class="activity-head img-block d-none d-lg-flex align-items-center ml-auto">
        <InlineSvg class="img_icon" v-if="course.sports" :src="require(`@/assets/svg/${course.sports[0].picto}.svg`)" height="30" />
      </span>
    </div>
    <div class="d-flex align-items-center" style="margin-left: -2rem; margin-right: -2rem">
      <ul v-if="course.multisport" class="nav nav-pills text-uppercase font-weight-bold d-none d-lg-flex accommodation-nav m-0 w-100" id="pills-tab " role="tablist">
        <li v-for="(sport, index) in course.sports" :key="sport" class="nav-item fg-1" role="presentation">
          <a class="nav-link active m-0" :id="`pills-act${index}-tab`" data-toggle="pill" :href="`#pills-act${index}`" role="tab" aria-controls="pills-solo" aria-selected="true">{{ sport.name }}</a>
        </li>
      </ul>
    </div>
    <div class="tab-content" style="margin-left: -2rem; margin-right: -2rem">
      <div v-for="(sport, index) in course.sports" :key="sport" class="tab-pane fade show active" :id="`pills-act${index}`" role="tabpanel" :aria-labelledby="`pills-act${index}-tab`">
        <div class="card-body">
          <div class="pri-activity-block">
            <div class="box bg-dark m-0">
              <h5 class="head text-uppercase mb-0 d-inline-block">
                <InlineSvg class="head-pin-icon d-inline-block" v-if="course.sports" :src="require(`@/assets/svg/${sport.picto}.svg`)" height="30" /><i class="fas fa-caret-right mx-3 pr-1 h4 mb-0"></i>
                {{ sport.name }}
              </h5>
              <ul class="list-unstyled list mt-3 mb-0">
                <li v-for="sportInfo in sport.sportInfos" :key="sportInfo">
                  <a href="#" @click.prevent class="text-decoration-none">
                    {{ sportInfo.title }}
                    <strong class="text-white ml-2">{{ sportInfo.description }}</strong>
                  </a>
                </li>
              </ul>
              <!-- <a href="#" class="corner-link">+</a> -->
            </div>
            <div class="brown-div">
              <h6 class="head text-uppercase text-white py-2 mb-1" style="width: max-content; margin-left: auto; border-top: 1px dashed #ffffff66; border-bottom: none">Mot du pro…</h6>
              <p class="content pt-3" style="border-top: 1px dashed #ffffff66">
                {{ course?.staffs?.find((staff) => staff.role === 'Guide').description }}
              </p>
              <h6 class="author mb-0">{{ course?.staffs?.find((staff) => staff.role === 'Guide').firstName }} {{ course?.staffs?.find((staff) => staff.role === 'Guide').firstName }}</h6>
            </div>
            <div class="img-block">
              <img class="img-fill" fluid :src="require('@/assets/images/ui_faces/1.jpg')" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="linear-block">
    <div class="card border-0 rounded-0">
      <div class="card-header p-0 border-0 rounded-0" id="headingTwo">
        <div class="head-block px-4 px-lg-0 mb-lg-3 d-flex justify-content-between align-items-center" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
          <div class="ml-3 ml-lg-0">
            <p class="sub-heading mb-2">Activités & Spot</p>
            <h4 class="heading mb-0">Le spot</h4>
          </div>
          <i class="fa fa-chevron-down h4 mb-0 arrow text-white d-block d-lg-none"></i>
          <h6 @click="openMap" type="button" class="map-head d-none d-lg-flex align-items-center justify-content-end mr-4 m-lg-0 text-danger">
            VOIR SUR <br />LA MAP<span class="img-block">
              <InlineSvg class="img_icon" :src="require('@/assets/svg/map-pin.svg')" />
            </span>
          </h6>
        </div>
      </div>
      <div id="collapseTwo" class="collapse show" aria-labelledby="headingTwo">
        <div class="card-body">
          <h6 @click="openMap" type="button" class="map-head d-flex d-lg-none align-items-center justify-content-end mb-3 mr-4">
            VOIR SUR <br />LA MAP<span class="img-block"><InlineSvg class="img_icon" :src="require('@/assets/svg/map-pin.svg')" /></span>
          </h6>
          <p class="content">
            {{ course.spot?.description }}
          </p>
          <div class="row">
            <div class="col-9 col-lg-12 mx-auto">
              <div class="like-div white">
                <h5 class="content-head">LES + DU SPOT</h5>
                <ul class="list-unstyled text-uppercase content-list">
                  <li v-for="spotAdvantage in course.sportAdvantages" :key="spotAdvantage">
                    <a class="text-reset" href="#"><i class="fas fa-plus mr-2"></i>{{ spotAdvantage.name }}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="linear-block" style="background-color: #fcfcfc; box-shadow: none">
    <div class="head-block d-flex justify-content-center justify-content-lg-start mb-3">
      <div class="ml-3 ml-lg-0">
        <p class="sub-heading mb-2">Activités & Spot</p>
        <h4 class="heading mb-0">Activités incluses</h4>
      </div>
    </div>
    <div class="card-body">
      <div class="row">
        <div v-for="includedCourse in includedCourses" :key="includedCourse" class="col-12 col-lg-4">
          <div class="box bg-white">
            <h5 class="head text-uppercase mb-0 d-inline-block text-danger">
              <InlineSvg v-if="includedCourse.picto" class="head-pin-icon d-inline-block" :src="require(`@/assets/svg/${includedCourse.picto}.svg`)" /><i class="fas fa-caret-right mx-3 pr-1 h4 mb-0"></i>
              {{ includedCourse.title }}
            </h5>
            <ul class="list-unstyled list mt-3 mb-0">
              <li v-for="info in includedCourse.alternativeInfos" :key="info">
                <a href="#" class="text-decoration-none">
                  {{ info.title }}
                  <strong class="text-dark ml-2">{{ info.description }}</strong>
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
      <div class="card-header p-0 border-0 rounded-0" id="headingOne">
        <div class="head-block px-4 px-lg-0 mb-lg-4 d-flex justify-content-between align-items-center collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          <div class="ml-3 ml-lg-0">
            <p class="sub-heading mb-2">Activités & Spot</p>
            <h4 class="heading mb-0">Activités en option</h4>
          </div>
          <i class="fa fa-chevron-down h4 mb-0 arrow text-white"></i>
        </div>
      </div>

      <div id="collapseOne" class="collapse show" aria-labelledby="headingOne">
        <div class="card-body">
          <p class="content">En cas de mauvaises conditions météorologiques ou autres facteurs empêchants la pratique de votre activité principale, nous proposons des activités de remplacement inclus dans le prix.</p>
          <ul class="activity-list list-unstyled mb-0">
            <li v-for="alternative in altCourses" :key="alternative">
              <h5 class="activity-list-head mb-0">
                <InlineSvg v-if="alternative.picto" class="icon" :src="require(`@/assets/svg/${alternative.picto}.svg`)" />
                {{ alternative.title }}
              </h5>
              <ul class="list-unstyled text-uppercase activity-content-list mb-0">
                <li class="optional-activity__info-item">
                  Durée : <strong>{{ alternative.duration }} journée{{ alternative.duration > 1 ? 's' : '' }}</strong>
                </li>
                <li class="optional-activity__info-item">plongée : <strong>2</strong></li>
                <li class="optional-activity__info-item--price">
                  <strong>{{ alternative.price }}€</strong>/pers.
                </li>
              </ul>
            </li>
          </ul>
        </div>
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
      includedCourses: null,
      altCourses: null
    }
  },
  watch: {
    course(val) {
      this.includedCourses = val.alternatives.filter((el) => el.isIncluded)
      this.altCourses = val.alternatives.filter((el) => el.isOption)
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
.optional-activity__info-item--price {
  border-left: 1px solid #292f33;
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
