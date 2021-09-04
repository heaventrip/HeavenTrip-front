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
      <div class="head-block subhead-block d-flex">
        <!-- <div class="product__nav__section-number"><span>03</span></div> -->
        <div class="">
          <p class="sub-heading mb-2">Vie sur place</p>
          <h4 class="heading mb-0 text-uppercase">Hébergement</h4>
        </div>
      </div>
      <div class="card-body">
        <div
          v-for="room in course.rooms"
          :key="room"
          class="head text-uppercase py-2 d-inline-block mr-5"
          style="font-weight: 500; cursor: pointer"
          :class="{ 'room-tab--active': activeRoomTab === room }"
          @mouseover="activeRoomTab = room"
        >
          {{ room?.title }}
        </div>
        <transition name="fade-fast" mode="out-in">
          <div :key="activeRoomTab">
            <p class="content mt-3">{{ activeRoomTab?.title }}</p>
            <ul class="list-unstyled place-list text-uppercase mt-4 mb-0 d-flex flex-wrap flex-column flex-lg-row">
              <li style="border-bottom: none; padding-bottom: 0">
                <a href="" @click.prevent style="cursor: default" class="text-decoration-none">
                  Nom :
                  <strong class="text-dark ml-2">{{ activeRoomTab?.title }}</strong></a
                >
              </li>
              <li style="border-bottom: none; padding-bottom: 0">
                <a href="" @click.prevent style="cursor: default" class="text-decoration-none">
                  Prix :
                  <strong class="text-dark ml-2">{{ activeRoomTab?.price }}</strong></a
                >
              </li>
              <li style="border-bottom: none; padding-bottom: 0">
                <a href="" @click.prevent style="cursor: default" class="text-decoration-none">
                  Capacité :
                  <strong class="text-dark ml-2">{{ activeRoomTab?.quantity }} personnes</strong></a
                >
              </li>
            </ul>
          </div>
        </transition>
        <div v-if="false" class="d-flex align-items-center mb-4">
          <!-- <h5 class="head text-uppercase mb-0 font-weight-bold text-danger mb-0"><img class="d-inline-block" fluid :src="require('@/assets/images/svg/PICTO_HEBERGEMENT.svg')" /><i class="fas fa-caret-right mr-2 ml-3 pr-1 h4 mb-0"></i><strong class="d-lg-none">Hébergement</strong></h5> -->
          <ul class="nav nav-pills mb-0 text-uppercase font-weight-bold d-none d-lg-flex accommodation-nav ml-0" id="pills-tab" role="tablist">
            <li v-for="(room, index) in course.rooms" :key="room" class="nav-item" role="presentation">
              <a
                class="nav-link m-0"
                :class="[index === 0 ? 'active' : '']"
                id="pills-solo-tab"
                data-toggle="pill"
                :href="`#pills-room-${index}`"
                role="tab"
                aria-controls="pills-solo"
                aria-selected="true"
                >{{ room.title }}</a
              >
            </li>
          </ul>
        </div>
        <div v-if="false" class="tab-content">
          <div class="tab-pane fade" v-for="(room, index) in course.rooms" :key="room" :class="[index === 0 ? 'show active' : '']" id="pills-solo" role="tabpanel" aria-labelledby="pills-solo-tab">
            <p class="content">{{ room.description }}</p>
          </div>
        </div>
        <ul v-if="false" class="list-unstyled place-list text-uppercase my-3 mb-0 d-flex flex-wrap flex-column flex-lg-row">
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
  <swiper :slidesPerView="3" :spaceBetween="1" :loop="true" :pagination="{ type: 'fraction', renderFraction: renderSwiperFraction }">
    <swiper-slide
      ><img class="swiper-slide__img" src="https://images.ctfassets.net/8dtxc3nuj0tn/2Qjdhje2ymB9oOOvdO5NXD/e273c0ab52007962f987ac5a69fe2767/kitesurf-elgouna-hebergement2.jpg" @click="showImg(0)"
    /></swiper-slide>
    <swiper-slide
      ><img class="swiper-slide__img" src="https://images.ctfassets.net/8dtxc3nuj0tn/4AISlea84OedWAbKNV4xru/afdddc130bb86a116db22a389326b339/kitesurf-elgouna-hebergement.jpg" @click="showImg(1)"
    /></swiper-slide>
    <swiper-slide
      ><img class="swiper-slide__img" src="https://images.ctfassets.net/8dtxc3nuj0tn/7KLjC3NaiA4RjXxEoifCQZ/2de2549c4677ac776dfd21d9a8a0d49f/kitesurf-elgouna-cook2.jpg" @click="showImg(2)"
    /></swiper-slide>
    <swiper-slide
      ><img class="swiper-slide__img" src="https://images.ctfassets.net/8dtxc3nuj0tn/7jcPbN1eXNsFxWfEkwKlUP/5f6367376f5b06a26473e5822ea4ba87/kitesurf-elgouna-groupe2.jpg" @click="showImg(3)"
    /></swiper-slide>
  </swiper>
  <vue-easy-lightbox style="z-index: 2" loop scrollDisabled escDisabled moveDisabled :visible="visible" :imgs="imgs" :index="index" @hide="visible = false"></vue-easy-lightbox>
  <p class="small-info">Pour assurer les départs, les hébergements sur les visuels sont susceptibles d’être différents selon les disponibilités et le nombre de participants.</p>
  <div class="linear-block mb-0 p-0" style="background-color: rgb(252, 252, 252); box-shadow: none">
    <div class="card border-0 rounded-0">
      <div class="head-block subhead-block d-flex">
        <div class="">
          <p class="sub-heading mb-2">Vie sur place</p>
          <h4 class="heading mb-0">LES repas</h4>
        </div>
        <i class="fa fa-chevron-down h4 mb-0 arrow text-white"></i>
      </div>
    </div>
  </div>
  <div class="d-flex" style="margin-top: 0.5rem; margin-bottom: 6rem">
    <div class="linear-block p-0 m-0 w-100">
      <div class="card-body d-flex" style="box-shadow: 0 0 2px #ebebeb; height: 370px">
        <div class="guide-word__image">
          <img class="img-fill" fluid :src="require('@/assets/images/ui_faces/1.jpg')" />
        </div>
        <div class="guide-word__text">
          <h6 class="head text-uppercase text-white py-3 mb-1" style="width: max-content; border-top: 1px dashed #ffffff66; border-bottom: none">Mot du pro…</h6>
          <div class="mb-4" style="height: 1px; width: 40%; border-top: 1px dashed #ffffff66"></div>
          <transition name="fade" mode="out-in">
            <div v-if="tab === 1">
              <div class="guide-word__subtitle">Atmosphère culinaire</div>
              <p class="content pt-3 text-white" style="line-height: 24px">
                {{ course?.staffs.find((el) => el.role === 'Cook')?.description }}
              </p>
              <h6 class="author text-white mt-4 mb-0">
                {{ course?.staffs.find((el) => el.role === 'Cook')?.firstName }} {{ course?.staffs.find((el) => el.role === 'Cook')?.lastName }} -
                {{ course?.staffs.find((el) => el.role === 'Cook')?.title }}
              </h6>
            </div>
            <div v-else>
              <div class="guide-word__subtitle">Un peu sur moi!</div>
              <p class="content pt-3 text-white" style="line-height: 24px">
                testeste testtesteste testeste testeste testesteste testeste testeste testesteste testeste testeste testesteste testeste testeste testesteste testeste testeste teseste testeste
                testeste testeste testeste testeste testeste
              </p>
              <h6 class="author text-white mt-4 mb-0">Edouard du Thin - Moniteur Ski / Snow</h6>
            </div>
          </transition>
        </div>
      </div>
    </div>
    <!-- NOTE functional tabs but disabled for now -->
    <div v-if="false" class="d-flex flex-column" style="margin-left: 1px">
      <div @mouseover="tab = 1" type="button" :class="[tab === 1 ? 'bg-dark' : 'bg-white']" style="position: relative; width: 60px; height: 60px; box-shadow: 1px -1px 2px #ebebeb">
        <InlineSvg height="30px" style="margin: 15px" :src="require('@/assets/svg/bowl2.svg')" :fill="[tab === 1 ? '#fff' : '#292f33']" />
      </div>
      <div @mouseover="tab = 2" type="button" :class="[tab === 2 ? 'bg-dark' : 'bg-white']" style="position: relative; width: 60px; height: 60px; box-shadow: 1px 1px 2px #ebebeb">
        <InlineSvg height="30px" style="margin: 15px" :src="require('@/assets/svg/kitchenhat.svg')" :fill="[tab === 2 ? '#fff' : '#292f33']" />
      </div>
    </div>
  </div>
  <div class="linear-block plain-block" style="margin-top: 3rem">
    <div class="card border-0 rounded-0">
      <div class="head-block subhead-block d-flex">
        <div class="">
          <p class="sub-heading mb-2">Vie sur place</p>
          <h4 class="heading mb-0">A proximité</h4>
        </div>
        <i class="fa fa-chevron-down h4 mb-0 arrow text-white"></i>
      </div>
      <div class="card-body">
        <p class="content">
          Un des meilleurs terrain de jeu pour s’initier et se perfectionner en kitesurf. Les débutants s’y sentent en sécurité grâce au plan d’eau de faible profondeur. En cas de mauvaises conditions
          météorologiques ou autres. En cas de mauvaises conditions météorologiques ou autres. En cas de mauvaises conditions météorologiques.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import VueEasyLightbox from 'vue-easy-lightbox'
import SwiperCore, { Thumbs, Navigation, Pagination, EffectFade, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
SwiperCore.use([Thumbs, Navigation, Pagination, EffectFade, Autoplay])

export default {
  name: 'ProductTabLiving',
  components: {
    Swiper,
    SwiperSlide,
    VueEasyLightbox
  },
  props: ['course'],
  data() {
    return {
      index: 0,
      visible: false,
      imgs: [
        'https://images.ctfassets.net/8dtxc3nuj0tn/2Qjdhje2ymB9oOOvdO5NXD/e273c0ab52007962f987ac5a69fe2767/kitesurf-elgouna-hebergement2.jpg',
        'https://images.ctfassets.net/8dtxc3nuj0tn/4AISlea84OedWAbKNV4xru/afdddc130bb86a116db22a389326b339/kitesurf-elgouna-hebergement.jpg',
        'https://images.ctfassets.net/8dtxc3nuj0tn/7KLjC3NaiA4RjXxEoifCQZ/2de2549c4677ac776dfd21d9a8a0d49f/kitesurf-elgouna-cook2.jpg',
        'https://images.ctfassets.net/8dtxc3nuj0tn/7jcPbN1eXNsFxWfEkwKlUP/5f6367376f5b06a26473e5822ea4ba87/kitesurf-elgouna-groupe2.jpg'
      ],
      activeRoomTab: '',
      tab: 1,
      currentPaginationStyle: `
        font-family: Oswald, sans-serif;
        font-weight: 800;
        font-size: 2rem;
        color: #fff;`,
      totalPaginationStyle: `
        font-family: Oswald, sans-serif;
        color: rgba(250, 250, 250, 0.7);
        font-size: 1rem;`
    }
  },
  watch: {
    course: {
      immediate: true,
      handler(val) {
        // set first one active when loaded
        this.activeRoomTab = val.rooms[0]
      }
    }
  },
  methods: {
    renderSwiperFraction(currentClass, totalClass) {
      return `<span style="${this.currentPaginationStyle}" class="${currentClass}"></span>
      <span style="${this.currentPaginationStyle}">.</span>
      <sup><span style="${this.totalPaginationStyle}" class="${totalClass}"></span></sup>`
    },
    showImg(index) {
      this.index = index
      this.visible = true
    }
  }
}
</script>

<style scoped>
.room-tab--active {
  border-bottom: 1px solid #292f33;
}
.swiper-pagination {
  text-align: unset;
  left: 10px;
}
.swiper-slide__img {
  position: relative;
  display: block;
  height: 200px;
  width: 100%;
  object-fit: cover;
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
  width: 28%;
}
.guide-word__text {
  display: inline-block;
  background-color: #292f33;
  text-align: left;
  padding: 2.5rem 3rem;
  width: 72%;
  font-weight: 100;
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
