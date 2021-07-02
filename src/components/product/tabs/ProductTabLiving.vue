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
        <text font-family="Oswald" font-size="12" font-weight="800">03</text>
      </svg>
    </svg>
    <div class="head-block ml-4">
      <p class="sub-heading mb-2">{{ course.sports ? course.sports[0].name : 'Sport' }}</p>
      <h4 class="heading mb-0">Vie sur place</h4>
    </div>
  </div>
  <div class="linear-block mb-0">
    <div class="card border-0 rounded-0">
      <div class="card-header p-0 border-0 rounded-0 mb-4" id="headingThree">
        <div class="head-block px-4 px-lg-0 mb-4 d-flex justify-content-start align-items-center collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
          <!-- <div class="product__nav__section-number"><span>03</span></div> -->
          <div class="">
            <p class="sub-heading mb-2">Vie sur place</p>
            <h4 class="heading mb-0 text-uppercase">Hébergement</h4>
          </div>
          <i class="fa fa-chevron-down h4 mb-0 arrow text-white"></i>
        </div>
      </div>
      <div id="collapseThree" class="collapse show" aria-labelledby="headingThree">
        <div class="card-body">
          <div class="d-flex align-items-center mb-4">
            <!-- <h5 class="head text-uppercase mb-0 font-weight-bold text-danger mb-0"><img class="d-inline-block" fluid :src="require('@/assets/images/svg/PICTO_HEBERGEMENT.svg')" /><i class="fas fa-caret-right mr-2 ml-3 pr-1 h4 mb-0"></i><strong class="d-lg-none">Hébergement</strong></h5> -->
            <ul class="nav nav-pills mb-0 text-uppercase font-weight-bold d-none d-lg-flex accommodation-nav ml-0" id="pills-tab " role="tablist">
              <li v-for="(room, index) in course.rooms" :key="room" class="nav-item" role="presentation">
                <a class="nav-link m-0" :class="[index === 0 ? 'active' : '']" id="pills-solo-tab" data-toggle="pill" :href="`#pills-room-${index}`" role="tab" aria-controls="pills-solo" aria-selected="true">{{ room.title }}</a>
              </li>
            </ul>
          </div>
          <!-- <div class="stay-dropdown d-block d-lg-none">
            <select class="form-control select-place">
              <option value="#pills-solo">BUNGALOW SOLO</option>
              <option value="#pills-duo">BUNGALOW DUO</option>
              <option value="#pills-vip">BUNGALOW VIP</option>
            </select>
          </div> -->
          <div class="tab-content">
            <div class="tab-pane fade" v-for="(room, index) in course.rooms" :key="room" :class="[index === 0 ? 'show active' : '']" id="pills-solo" role="tabpanel" aria-labelledby="pills-solo-tab">
              <p class="content">{{ course.description }}</p>
            </div>
          </div>
          <ul class="list-unstyled place-list text-uppercase my-3 mb-0 d-flex flex-wrap flex-column flex-lg-row">
            <li>
              <a href="#" class="text-decoration-none">
                Type :
                <strong class="text-dark ml-2">
                  BUNGALOW SOLO
                  <i class="fas fa-info-circle text-dark h6 mb-0"></i></strong
              ></a>
            </li>
            <li>
              <a href="#" class="text-decoration-none">
                Lieu :
                <strong class="text-dark ml-2"> EL Gouna</strong></a
              >
            </li>
            <li>
              <a href="#" class="text-decoration-none">
                Situation :
                <strong class="text-dark ml-2"> proximité du spot</strong></a
              >
            </li>
            <li>
              <a href="#" class="text-decoration-none">
                Capacités :
                <strong class="text-dark ml-2"> 10 personnes</strong></a
              >
            </li>
            <li>
              <a href="#" class="text-decoration-none">
                chambres :
                <strong class="text-dark ml-2">
                  a partager & privée
                  <i class="fas fa-info-circle text-dark h6 mb-0"></i></strong
              ></a>
            </li>
          </ul>
          <!-- <a class="view-more-btn full_width d-lg-none" data-toggle="collapse" href="#viewMoreOptions" role="button" aria-expanded="true" aria-controls="viewMoreOptions">VOIR LES OPTIONS <i class="fas fa-chevron-down ml-2"></i></a> -->
        </div>
      </div>
    </div>
  </div>
  <div class="linear-block mt-2">
    <swiper :spaceBetween="10" :autoplay="{ delay: 5000 }" :loop="true" :effect="'fade'" :pagination="{ type: 'fraction', renderFraction: renderSwiperFraction }" :navigation="true">
      <swiper-slide><img class="swiper-slide__img" :src="require('@/assets/images/beach.jpg')" width="100%" /></swiper-slide>
      <swiper-slide><img class="swiper-slide__img" :src="require('@/assets/images/beach1.jpg')" width="100%" /></swiper-slide>
      <swiper-slide><img class="swiper-slide__img" :src="require('@/assets/images/beach.jpg')" width="100%" /></swiper-slide>
      <swiper-slide><img class="swiper-slide__img" :src="require('@/assets/images/beach1.jpg')" width="100%" /></swiper-slide>
    </swiper>
    <p class="small-info">Pour assurer les départs, les hébergements sur les visuels sont susceptibles d’être différents selon les disponibilités et le nombre de participants.</p>
  </div>
  <div class="linear-block mb-0">
    <div class="card border-0 rounded-0">
      <div class="card-header p-0 border-0 rounded-0 mb-3" id="headingFour">
        <div class="head-block px-4 mb-lg-2 px-lg-0 d-flex justify-content-between align-items-center collapsed mb-4" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
          <div class="ml-3 ml-lg-0">
            <p class="sub-heading mb-2">Vie sur place</p>
            <h4 class="heading mb-0">LES repas</h4>
          </div>
          <i class="fa fa-chevron-down h4 mb-0 arrow text-white"></i>
        </div>
      </div>
      <div id="collapseFour" class="collapse show" aria-labelledby="headingFour">
        <div class="card-body">
          <p class="content mb-0">{{ course.spot.description }}</p>
        </div>
      </div>
    </div>
  </div>
  <div class="linear-block p-0 mt-2">
    <div class="card-body">
      <div class="pri-activity-block">
        <div class="box bg-dark m-0">
          <h5 class="head text-uppercase mb-0 d-inline-block">
            <img class="head-pin-icon d-inline-block" fluid :src="require('@/assets/images/head-pin.png')" /><i class="fas fa-caret-right mx-3 pr-1 h4 mb-0"></i>
            ski freeride
          </h5>
          <ul class="list-unstyled list mt-3 mb-0">
            <li>
              <a href="#" class="text-decoration-none">
                COURS DE PERFECTIONNEMENT :
                <strong class="text-white ml-2"> 20H</strong></a
              >
            </li>
            <li>
              <a href="#" class="text-decoration-none">
                Sessions :
                <strong class="text-white ml-2"> 4</strong></a
              >
            </li>
            <li>
              <a href="#" class="text-decoration-none">
                Tendance :
                <strong class="text-white ml-2"> 60% hors piste</strong></a
              >
            </li>
            <li>
              <a href="#" class="text-decoration-none">
                Tendance :
                <strong class="text-white ml-2"> 60% hors piste</strong></a
              >
            </li>
          </ul>
          <!-- <a href="#" class="corner-link">+</a> -->
        </div>
        <div class="brown-div">
          <h6 class="head text-uppercase text-white py-2 mb-1" style="width: max-content; margin-left: auto; border-top: 1px dashed #ffffff66; border-bottom: none">Mot du pro…</h6>
          <p class="content pt-3" style="border-top: 1px dashed #ffffff66">Lorem ipsum dolor sit amet, solum dictas vim cu, ne his hendrerit deterruisset, id sed doctus fuisset intellegam. Per case melius assentior ea. Et scaevola insolens eum. Ad vix verear eruditi ncillae, fabulas.</p>
          <h6 class="author mb-0">Edouard du Thin - Moniteur Ski / Snow</h6>
        </div>
        <div class="img-block">
          <img class="img-fill" fluid :src="require('@/assets/images/ui_faces/1.jpg')" />
        </div>
      </div>
    </div>
  </div>
  <div class="linear-block plain-block" style="margin-top: 3rem">
    <div class="card border-0 rounded-0">
      <div class="card-header p-0 border-0 rounded-0" id="headingFive">
        <div class="head-block py-3 px-4 px-lg-0 mb-lg-4 d-flex justify-content-between align-items-center collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
          <div class="ml-3 ml-lg-0">
            <p class="sub-heading mb-2">Vie sur place</p>
            <h4 class="heading mb-0">A proximité</h4>
          </div>
          <i class="fa fa-chevron-down h4 mb-0 arrow text-white"></i>
        </div>
      </div>
      <div id="collapseFive" class="collapse show" aria-labelledby="headingFive">
        <div class="card-body">
          <p class="content">
            Un des meilleurs terrain de jeu pour s’initier et se perfectionner en kitesurf. Les débutants s’y sentent en sécurité grâce au plan d’eau de faible profondeur. En cas de mauvaises conditions météorologiques ou autres. En cas de mauvaises conditions météorologiques ou autres. En cas de
            mauvaises conditions météorologiques.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SwiperCore, { Thumbs, Navigation, Pagination, EffectFade, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'

export default {
  name: 'ProductTabLiving',
  components: {
    Swiper,
    SwiperSlide
  },
  props: ['course'],
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
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
