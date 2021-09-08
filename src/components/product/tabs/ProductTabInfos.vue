<template>
  <div class="chapter-block d-flex align-items-center justify-content-center">
    <svg xmlns="http://www.w3.org/2000/svg" fill="#292f33" height="130" viewBox="0 0 1192.975 1192.752">
      <path
        d="M922.67,1021.59l-8.031,6.627c-93.359,77.049-211.9,119.483-333.788,119.483-.854,0-1.715,0-2.567-.006-141.628-.692-275.123-56.4-375.892-156.857C4.543,793.6-10.455,486.108,167.5,275.583l6.751-7.985-31.929-32.17-8.044,9.47A561.006,561.006,0,0,0,32.541,421.506,570.515,570.515,0,0,0,.123,624.269C3.191,774.608,63.744,916.086,170.629,1022.64c109.286,108.948,254.068,169.358,407.7,170.1.952,0,1.9.008,2.846.008a570.306,570.306,0,0,0,192.7-33.271,564.467,564.467,0,0,0,171.155-97.745l9.586-7.97Z"
      />
      <path
        d="M1012.651,180.231C898.9,66.44,747.449,2.46,586.2.076a614.174,614.174,0,0,0-415.539,152.7l-3.708,3.253,94.476,95.18,3.271-2.782C457.832,84.241,738.875,95.864,918.427,275.468c90.977,91.017,141.033,211.943,140.947,340.5a480.2,480.2,0,0,1-117.663,314.5l-2.824,3.252,94.448,95.151,3.282-3.674a614.2,614.2,0,0,0,156.358-409.118C1193.1,451.477,1129.057,296.691,1012.651,180.231ZM951.526,933.283A487.864,487.864,0,0,0,1068.65,615.974c.087-131.037-50.933-254.293-143.663-347.065-88.349-88.374-205.065-139.74-328.645-144.638-121.685-4.833-240.318,35.745-334.366,114.322L180.5,156.511A604.625,604.625,0,0,1,586.058,9.351c158.826,2.348,308,65.364,420.031,177.439C1120.744,301.5,1183.821,453.95,1183.7,616.07a605.089,605.089,0,0,1-150.736,399.259Z"
      />
      <svg viewBox="-9 -20 30 30">
        <text font-family="Oswald" font-size="12" font-weight="800">01</text>
      </svg>
    </svg>
    <div class="head-block ml-4">
      <p class="sub-heading mb-2">{{ course?.sports ? course.sports[0].name : 'Sport' }}</p>
      <h4 class="heading mb-0">RECAP DU STAGE</h4>
    </div>
  </div>
  <div class="linear-block plain-block pb-0">
    <div class="head-block subhead-block d-flex">
      <!-- <div class="product__nav__section-number"><span>01</span></div> -->
      <div class="">
        <p class="sub-heading mb-2">Récap du stage</p>
        <h4 class="heading mb-0">POUR FAIRE COURT...</h4>
      </div>
      <span class="activity-head img-block d-none d-lg-flex align-items-center ml-auto">
        <div style="width: 1px; height: 1.5rem; border-left: 1px dashed #292f33"></div>
        <InlineSvg v-if="course?.sports && course?.sports[0].picto !== null" class="img_icon" :src="require(`@/assets/svg/${course?.sports[0].picto}.svg`)" height="60" />
      </span>
    </div>
    <div class="card-body">
      <h6 class="activity-head d-flex d-lg-none align-items-center mb-3">
        Les activités inclues :
        <span class="img-block d-flex ml-auto">
          <InlineSvg v-if="course?.sports && course?.sports[0].picto !== null" class="img_icon" :src="require(`@/assets/svg/${course?.sports[0].picto}.svg`)" height="30" />
        </span>
      </h6>
      <p class="content mt-3" style="margin-bottom: 2.5rem">
        {{ course?.description }}
      </p>
      <div class="row" style="margin-left: -3rem; margin-right: -3rem">
        <div class="col-9 col-lg-12 p-0">
          <div class="like-div">
            <h5 class="content-head">Tu vas adorer :</h5>
            <ul class="list-unstyled text-uppercase content-list">
              <li v-for="willLove in course.willLoves" :key="willLove">
                <a @click.prevent class="text-reset" style="cursor: default" href=""><i class="fas fa-plus mr-2"></i>{{ willLove?.name }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="linear-block product__overview__details-block">
    <div class="head-block subhead-block d-flex">
      <div class="">
        <p class="sub-heading mb-2">Suis-je prêt ?</p>
        <h4 class="heading mb-0">Niveau & intensité</h4>
      </div>
      <h6 @click="levelsModal = true" class="need-level text-uppercase d-none d-lg-flex align-items-center ml-auto mb-0">
        <img class="img_icon mr-2" fluid :src="require('@/assets/images/svg/PICTO_GRILLE_NIVEAUX.svg')" />
        <span>voir la grille <br />des niveaux</span>
        <teleport to="#modal">
          <transition name="fade">
            <div v-if="levelsModal" class="modal__backdrop">
              <div class="row level-modal" style="width: 50vw">
                <div class="col-5 bg-dark">
                  <div class="nav flex-column nav-pills kitesurf-nav" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <a class="nav-link active" id="v-pills-level1-tab" data-toggle="pill" href="#v-pills-level1" role="tab" aria-controls="v-pills-level1" aria-selected="true"
                      >NIVEAU 1 <i class="fas fa-chevron-right nav-arrow float-right mr-n4"></i
                    ></a>
                    <a class="nav-link" id="v-pills-level2-tab" data-toggle="pill" href="#v-pills-level2" role="tab" aria-controls="v-pills-level2" aria-selected="false"
                      >NIVEAU 2 <i class="fas fa-chevron-right nav-arrow float-right mr-n4"></i
                    ></a>
                    <a class="nav-link" id="v-pills-level3-tab" data-toggle="pill" href="#v-pills-level3" role="tab" aria-controls="v-pills-level3" aria-selected="false"
                      >NIVEAU 3 <i class="fas fa-chevron-right nav-arrow float-right mr-n4"></i
                    ></a>
                    <a class="nav-link" id="v-pills-level4-tab" data-toggle="pill" href="#v-pills-level4" role="tab" aria-controls="v-pills-level4" aria-selected="false"
                      >NIVEAU 4 <i class="fas fa-chevron-right nav-arrow float-right mr-n4"></i
                    ></a>
                  </div>
                </div>
                <div class="col-7 bg-white" style="position: relative">
                  <div class="tab-content kitesurf-nav-content" id="v-pills-tabContent">
                    <div class="tab-pane fade show active" id="v-pills-level1" role="tabpanel" aria-labelledby="v-pills-level1-tab">
                      <h4 class="surfhead text-center"><img class="align-text-bottom mr-3" fluid :src="require('@/assets/images/svg/PICTO_KITESURF.svg')" /> KITESURF</h4>
                      <h5 class="surfcontent-head mb-4">TOUS NIVEAUX</h5>
                      <ul class="mb-0 surflist">
                        aaaaa
                      </ul>
                    </div>
                    <div class="tab-pane fade" id="v-pills-level2" role="tabpanel" aria-labelledby="v-pills-level2-tab">qwertyu</div>
                    <div class="tab-pane fade" id="v-pills-level3" role="tabpanel" aria-labelledby="v-pills-level3-tab">asdfghjk</div>
                    <div class="tab-pane fade" id="v-pills-level4" role="tabpanel" aria-labelledby="v-pills-level4-tab">zxcvbnm,</div>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </teleport>
      </h6>
    </div>
    <div class="card-body p-lg-0">
      <div class="row no-gutters mt-4">
        <div class="col-12 col-lg-6">
          <div class="d-flex align-items-center justify-content-start">
            <div style="position: relative">
              <InlineSvg v-if="course?.level?.step" :src="require(`@/assets/svg/intensity-${course?.level?.step}.svg`)" height="150px" />
              <InlineSvg
                v-if="course?.sports && course?.sports[0].picto"
                :src="require(`@/assets/svg/${course?.sports[0].picto}.svg`)"
                height="35%"
                fill="#d82558"
                style="left: 34%; top: 34%; position: absolute"
              />
            </div>
            <span class="ml-4">
              <h6 class="level-text">
                Niveau : <strong class="ml-2">{{ course?.level?.step }}</strong
                >&nbsp;/4
              </h6>
              <h6 class="status-text mb-0">{{ course?.level?.name }} <i class="fas fa-info-circle text-pink ml-2" style="font-size: 1.2rem"></i></h6>
            </span>
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div class="d-flex align-items-center justify-content-start">
            <div style="position: relative">
              <InlineSvg v-if="course?.intensity?.step" :src="require(`@/assets/svg/intensity-${course?.intensity?.step}.svg`)" height="150px" />
              <InlineSvg :src="require(`@/assets/svg/heartbeat.svg`)" height="35%" fill="#d82558" style="left: 32%; top: 35%; position: absolute" />
            </div>
            <span class="ml-4">
              <h6 class="level-text">
                Intensité physique :
                <strong class="ml-2">{{ course?.intensity?.step }}</strong
                >&nbsp;/4
              </h6>
              <h6 class="status-text mb-0">{{ course?.intensity?.name }} <i class="fas fa-info-circle text-pink ml-2" style="font-size: 1.2rem"></i></h6>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="linear-block mb-0">
    <div class="head-block subhead-block d-flex">
      <div class="">
        <p class="sub-heading mb-2">Bon à savoir…</p>
        <h4 class="heading mb-0">Prestations & équipements</h4>
      </div>
    </div>
    <div class="card-body py-0 p-lg-0">
      <div class="row">
        <div class="col-12 col-lg-6">
          <div class="content-head equip mb-3">
            <i class="far fa-check-circle mr-2 h5 align-text-top mb-0"></i>
            <span class="d-inline-block" style="vertical-align: baseline">Est inclus :</span>
          </div>
          <ul class="list-unstyled content-list equip mb-4">
            <li v-for="includedService in course?.includedServices" :key="includedService">
              <a class="text-reset" href="#">{{ includedService.title }}</a>
            </li>
          </ul>
        </div>
        <div class="col-12 col-lg-6" style="height: min-content; border-left: 1px solid #f1f1f1; padding-left: 6rem">
          <div class="content-head equip mb-3">
            <i class="far fa-times-circle mr-2 h5 align-text-top mb-0"></i>
            <span class="d-inline-block" style="vertical-align: baseline">Non inclus :</span>
          </div>
          <ul class="list-unstyled content-list equip mb-0">
            <li v-for="(excludedService, index) in course?.excludedServices" :key="excludedService">
              <a class="text-reset" :class="[index === course?.excludedServices.length - 1 ? 'pb-0' : '']" href="#">{{ excludedService.title }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="linear-block mt-2">
    <div class="content-head equip mb-3">
      <i class="far fa-dot-circle mr-2 mr-2 h5 align-text-top mb-0"></i>
      <span class="d-inline-block" style="vertical-align: baseline">En options :</span>
    </div>
    <ul class="list-unstyled content-list equip mb-0">
      <li class="options-item d-inline" v-for="extraService in course?.extraServices" :key="extraService">
        <a @click.prevent style="cursor: default; border-bottom: none" class="text-reset" href="#">{{ extraService.title }}</a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'ProductTabInfos',
  props: ['course'],
  data() {
    return {
      levelsModal: false,
      intensityNb: 1,
      levelNb: 3
    }
  },
  watch: {
    course(val) {
      console.log(val)
    },
    levelsModal(newVal) {
      if (newVal === true) {
        // document.body.style.overflow = 'hidden'
        document.querySelector('#app').style.filter = 'blur(5px)'
        setTimeout(() => {
          this.handleModalClose()
        }, 100)
      }
      if (newVal === false) {
        document.body.style.overflow = ''
        document.querySelector('#app').style.filter = ''
      }
    }
  },
  methods: {
    handleModalClose() {
      const that = this
      if (document.querySelector('.level-modal')) {
        document.addEventListener('click', function handleClick(e) {
          if (!e.target.closest('.level-modal')) {
            that.levelsModal = false
            document.removeEventListener('click', handleClick)
          }
        })
      }
    }
  },
  mounted() {
    console.log('mounted')
    this.$emit('mounted')
  }
}
</script>

<style scoped>
.options-item:not(:first-of-type) {
  padding-left: 1rem;
}
.options-item:not(:last-of-type) {
  padding-right: 1rem;
  border-right: 1px dashed #f1f1f1;
}
.chapter-block {
  margin-bottom: 8rem;
  margin-top: 13rem;
}
.linear-block:last-of-type {
  margin-bottom: 0;
}
.level-modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}
.review__block {
  margin-top: 2rem;
  color: #7c7c7c;
}
.review__block-right__text-content {
  font-size: 0.875rem;
  font-family: Muli, sans-serif;
}
.review__block-right__top-infos {
  white-space: nowrap;
  font-size: 0.875rem;
  font-family: Oswald, sans-serif;
  font-weight: 600;
  width: 65%;
  margin-bottom: 0.5rem;
}
.review__block__user-profile-link {
  height: min-content;
  padding-left: 1.5rem;
  border-left: 1px solid #7c7c7c;
  font-weight: bold;
  text-transform: uppercase;
}
.review__block-left__avatar {
  margin-bottom: 0.2rem;
  object-fit: cover;
  border-radius: 50%;
}
.review__block-left__date {
  font-family: Oswald, sans-serif;
  font-size: 0.8rem;
  font-weight: 500;
}
.review__block__stars {
  margin-right: 1.5rem;
  color: #ffc300;
}
.product__nav__section-number {
  position: relative;
  height: 3rem;
  width: 3rem;
  border-radius: 6px;
  background: #292f33;
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  color: #fff;
}
</style>
