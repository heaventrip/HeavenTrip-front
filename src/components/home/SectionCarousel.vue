<template>
  <section class="carousel-section">
    <div class="container">
      <div class="search row">
        <div class="col-12 col-sm-10 col-lg-9 mx-auto rounded p-0" style="position: relative; bottom: 35px; border-radius: 0.1px; box-shadow: 0 0 0px 6px rgba(0, 0, 0, 0.15); background-color: rgba(0, 0, 0, 0.15)">
          <div class="bg-white d-flex centered-div">
            <div class="d-flex align-items-center p-3 flex-1 search-input-container">
              <img class="mx-3 img-20 d-none d-lg-inline-block" fluid :src="require('@/assets/images/search.png')" />
              <input class="form-control p-0 search-input ml-2 ml-sm-3 ml-lg-0 mr-xl-4" type="text" name="" placeholder="Ma recherche manuelle" />
            </div>
            <ul class="list-unstyled mb-0 search-list d-none d-lg-inline-flex ml-auto flex-2">
              <li>
                <div class="position-relative multi-select-filter">
                  <div style="position: absolute; top: 50%; transform: translateY(-50%); text-align: center; width: 100%">
                    <InlineSvg :src="require('@/assets/svg/country-search.svg')" height="20" />
                    <span class="ml-2">Pays</span>
                  </div>
                  <Multiselect @open="changeBackground('grey')" @close="changeBackground('unset')" v-model="countrySelection.value" v-bind="countrySelection" style="width: 100%" />
                </div>
              </li>
              <li>
                <div class="position-relative multi-select-filter">
                  <div style="position: absolute; top: 50%; transform: translateY(-50%); text-align: center; width: 100%">
                    <InlineSvg :src="require('@/assets/svg/date-search.svg')" height="20" />
                    <span class="ml-2">Mois de départ</span>
                  </div>
                  <Multiselect @open="changeBackground('grey')" @close="changeBackground('unset')" v-model="monthSelection.value" v-bind="monthSelection" style="width: 100%" />
                </div>
              </li>
              <li>
                <div class="position-relative multi-select-filter">
                  <div style="position: absolute; top: 50%; transform: translateY(-50%); text-align: center; width: 100%">
                    <InlineSvg :src="require('@/assets/svg/activity-search.svg')" height="20" />
                    <span class="ml-2">Activités</span>
                  </div>
                  <Multiselect @open="changeBackground('grey')" @close="changeBackground('unset')" v-model="activitySelection.value" v-bind="activitySelection" style="width: 100%" />
                </div>
              </li>
            </ul>
            <button class="btn btn-light bg-white text-uppercase search-btn filter-btn px-3 px-sm-4 rounded-right ml-auto border-left d-inline-block d-lg-none">
              <img class="mx-2" fluid :src="require('@/assets/images/mob-1.png')" />
            </button>
            <button class="btn btn-dark text-uppercase search-btn px-3 px-sm-4 rounded-right border-0">
              <span class="d-none d-lg-inline-block"><a href="/search" class="text-link">rechercher</a></span
              ><img class="mx-2 d-inline-block d-lg-none" fluid :src="require('@/assets/images/search-white.png')" />
            </button>
          </div>
          <div class="tags-container d-flex justify-content-center"></div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-sm-11 col-lg-9 mx-auto my-lg-4">
          <div class="grid-box my-5">
            <div class="text-center text-md-right">
              <h5 class="red-head text-danger mt-1 font-weight-500">Découvre</h5>
              <h2 class="text-uppercase heading mb-0">nos <strong>activités</strong></h2>
            </div>
            <div class="d-none d-md-inline-block">
              <span class="separator"></span>
            </div>
            <p class="mb-0 d-none d-md-inline-block">
              <span class="font-weight-bold d-none d-lg-inline-block">(Prénom),</span>
              sélectionné une vignette pour connaitre les dates de departs et les places restantes. Tu pourras y v! sélectionné une vignette pour connaitre les dates de departs et les places restantes. Tu pourras y voir les autres Trippers interesses ou inscrits et chater avec eux !
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="row">
            <div class="col-12 mx-auto text-center d-block d-md-none">
              <form>
                <div class="form-group">
                  <select class="form-control select-place">
                    <option selected="" disabled="" hidden="">Nos inspirations</option>
                    <option value="#pills-home">Nos inspirations</option>
                    <option value="#pills-profile">Dernières places</option>
                    <option value="#pills-contact">Multi-activités</option>
                  </select>
                </div>
              </form>
            </div>
            <div class="col-12 col-sm-10 col-lg-4 order-lg-2 d-none d-md-block ml-auto">
              <ul class="nav nav-pills mb-0 justify-content-center" id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                  <a class="nav-link" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Nos inspirations</a>
                </li>
                <li class="nav-item" role="presentation">
                  <a class="nav-link active" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Dernières places</a>
                </li>
                <li class="nav-item" role="presentation">
                  <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Multi-activités</a>
                </li>
              </ul>
            </div>
            <div class="offset-lg-2 col-lg-6 align-self-center order-lg-1 d-none d-lg-block">
              <div class="text-uppercase font-weight-bold activites-link d-block text-right text-decoration-none">
                <span class="bg-white position-relative pl-4"><a class="text-dark" href="">toutes les activites</a> <img class="ml-1 align-baseline" fluid :src="require('@/assets/images/ARROW_EXIT.png')" /></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex align-items-center mt-4">
        <div class="slider-buttons col-2 text-center">
          <div @click="slideLeft" style="transform: translateY(-60%)">
            <svg xmlns="http://www.w3.org/2000/svg" width="60" viewBox="0 0 40 40" fill="#292f33">
              <g id="Calque_2" data-name="Calque 2">
                <g id="Calque_1-2" data-name="Calque 1">
                  <path id="PICTO_ARROW_RIGHT_1" data-name="PICTO ARROW RIGHT 1" d="M23.56,14.74,17,21.27l6.6,6.53-2,2-8.64-8.53,8.64-8.54Z" />
                  <path d="M5.52,9.38l.08-.09-.51-.52L5,8.87A18.48,18.48,0,0,0,31.13,35l.1-.08-.52-.52-.09.08A17.75,17.75,0,0,1,5.52,9.38Z" />
                  <path d="M24.27.53A20.22,20.22,0,0,0,8.93,3.08a20.77,20.77,0,0,0-3.44,2.7l-.36.35.35.35,2.41,2.4.34.34.34-.33A16.13,16.13,0,0,1,11.25,6.8,16,16,0,0,1,30.93,9a16.6,16.6,0,0,1,2.27,2.86,15.94,15.94,0,0,1-2.09,19.53l-.33.34.34.34,2.4,2.41.35.35.35-.36a20.32,20.32,0,0,0-9.95-34Z" />
                </g>
              </g>
            </svg>
          </div>
          <div @click="slideRight" style="transform: translateY(-40%)">
            <svg xmlns="http://www.w3.org/2000/svg" width="60" viewBox="0 0 40 40" fill="#292f33">
              <g id="Calque_2" data-name="Calque 2">
                <g id="Calque_1-2" data-name="Calque 1">
                  <path id="PICTO_ARROW_RIGHT_1" data-name="PICTO ARROW RIGHT 1" d="M16.44,25.26,23,18.73l-6.6-6.53,2-2,8.64,8.53-8.64,8.54Z" />
                  <path d="M34.48,30.62l-.08.09.51.52.09-.1A18.48,18.48,0,0,0,8.87,5l-.1.08.52.52.09-.08a17.75,17.75,0,0,1,25.1,25.09Z" />
                  <path
                    d="M15.73,39.47a20.22,20.22,0,0,0,15.34-2.55,20.77,20.77,0,0,0,3.44-2.7l.36-.35-.35-.35-2.41-2.4-.34-.34-.34.33a16.13,16.13,0,0,1-2.68,2.09A16,16,0,0,1,9.07,31,16.6,16.6,0,0,1,6.8,28.11,15.94,15.94,0,0,1,8.89,8.58l.33-.34L8.88,7.9,6.48,5.49l-.35-.35-.35.36a20.32,20.32,0,0,0,10,34Z"
                  />
                </g>
              </g>
            </svg>
          </div>
        </div>
        <div class="col-12 tab-content order-lg-3" id="pills-tabContent">
          <div class="tab-pane fade" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">asdfghj</div>
          <div class="tab-pane fade show active" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" style="">
            <div class="cards-slider d-flex overflow-hidden" style="position: relative; width: 100%; height: 40vh; margin-bottom: 3rem">
              <SectionCarouselCard />
              <SectionCarouselCard />
              <SectionCarouselCard />
              <SectionCarouselCard />
            </div>
            <section class="testimonials d-none">
              <div class="col-12 col-lg-11 ml-auto p-0">
                <div class="main">
                  <!-- NOTE toggled d-none -->
                  <div class="text-dark d-none">
                    <div class="" v-for="course in courses" :key="course" style="max-width: 600px">
                      <div class="shadow-effect overflow-hidden position-relative">
                        <Tag style="position: absolute; top: 5%; left: 5%; z-index: 1" color="white" text="2 départs" />
                        <Tag style="position: absolute; top: 5%; left: 20%; z-index: 1" color="grey" text="nouveau" />
                        <a href="/product"><img class="img-responsive img-fill" fluid :src="require('@/assets/images/s1.png')" alt="" /></a>
                        <div class="card__footer item-details">
                          <div class="content">
                            <div class="text-uppercase">
                              <div class="d-flex align-items-center">
                                <img class="slider-icon d-none d-lg-inline-block" fluid :src="require('@/assets/images/pink.png')" />
                                <img class="slider-icon d-none d-md-inline-block d-lg-none" fluid :src="require('@/assets/images/pink2.png')" />
                                <img class="slider-icon d-inline-block d-md-none" fluid :src="require('@/assets/images/surf-1.png')" />
                                <div class="card__footer__infos text-left">
                                  <div class="card__footer__infos__heading d-flex align-items-center">
                                    <span class="card__footer__infos__heading-sport text--20 text--grey text--bold" style="text-shadow: 0px 0px 6px rgba(41, 47, 51, 0.15)">{{ course?.sports[0]?.name }}</span>
                                    <InlineSvg class="card__footer__infos__heading-arrow" :src="require('@/assets/svg/triangle-right.svg')" height="10" fill="#793f4e" />
                                    <span class="card__footer__infos__heading-spot d-inline-block align-middle">{{ course.spot?.name }}</span>
                                  </div>
                                  <div class="card__footer__infos__sub-heading mb-0 d-none d-md-inline-block">
                                    <span>inclus :&nbsp;</span>
                                    <span>yoga - rando - vtt neige</span>
                                  </div>
                                </div>
                              </div>
                              <!-- <h5 class="sub-heading mb-0 p-3 d-block d-md-none">
                                <span>inclus :</span>
                                <span>yoga - rando - vtt neige</span>
                              </h5> -->
                            </div>
                            <div class="card__footer__price text-right d-none d-lg-inline-block align-self-center">
                              <h6 class="euro-per mb-0" style="font-weight: 300">par pers.</h6>
                              <h1 class="euro mb-0 euro">{{ course.price }}&euro;</h1>
                            </div>
                            <ul class="img-list list-unstyled d-none d-md-inline-flex d-lg-none align-items-center justify-content-center mx-4 mb-0">
                              <li>
                                <a href="#"><img class="img-fluid user_icon rounded-circle" fluid :src="require('@/assets/images/t1.png')" /> </a>
                              </li>
                              <li>
                                <a href="#"><img class="img-fluid user_icon rounded-circle" fluid :src="require('@/assets/images/t2.png')" /> </a>
                              </li>
                              <li>
                                <a href="#"><img class="img-fluid user_icon rounded-circle" fluid :src="require('@/assets/images/t3.png')" /> </a>
                              </li>
                              <li>
                                <a href="#"><img class="img-fluid user_icon rounded-circle" fluid :src="require('@/assets/images/t4.png')" /> </a>
                              </li>
                              <li><small>+1.5k</small></li>
                            </ul>
                          </div>
                          <div class="hoverable-div">
                            <ul class="list-unstyled text-uppercase list-info mb-0 d-flex justify-content-around align-items-center border-0">
                              <li><img class="icons" fluid :src="require('@/assets/images/globe_d.png')" />{{ course.country?.name }}</li>
                              <li><img class="icons" fluid :src="require('@/assets/images/timer_d.png')" />{{ course.duration }} jours</li>
                              <li><img class="icons" fluid :src="require('@/assets/images/circle_d.png')" />Niveau {{ course.level?.name }}</li>
                              <li><img class="icons" fluid :src="require('@/assets/images/places_d.png')" />{{ course.max }} places</li>
                            </ul>
                            <ul class="img-list list-unstyled d-inline-flex align-items-center ml-auto mb-0">
                              <li>
                                <a href="#"><img class="img-fluid user_icon rounded-circle" fluid :src="require('@/assets/images/t1.png')" /> </a>
                              </li>
                              <li>
                                <a href="#"><img class="img-fluid user_icon rounded-circle" fluid :src="require('@/assets/images/t2.png')" /> </a>
                              </li>
                              <li>
                                <a href="#"><img class="img-fluid user_icon rounded-circle" fluid :src="require('@/assets/images/t3.png')" /> </a>
                              </li>
                              <li>
                                <a href="#"><img class="img-fluid user_icon rounded-circle" fluid :src="require('@/assets/images/t4.png')" /> </a>
                              </li>
                              <li><small>+1.5k</small></li>
                            </ul>
                          </div>
                          <div class="d-flex d-lg-none justify-content-between mt-1 mt-md-3">
                            <ul class="list-unstyled py-3 text-uppercase list-info mb-0 d-none d-md-inline-flex d-lg-none ml-md-3">
                              <li><img class="icons mr-2" fluid :src="require('@/assets/images/globe_d.png')" />espagne</li>
                              <li><img class="icons mr-2" fluid :src="require('@/assets/images/timer_d.png')" />8 jours</li>
                              <li><img class="icons mr-2" fluid :src="require('@/assets/images/circle_d.png')" />tous niveaux</li>
                              <li><img class="icons mr-2" fluid :src="require('@/assets/images/places_d.png')" />10 places</li>
                            </ul>

                            <ul class="img-list list-unstyled d-inline-flex d-md-none align-items-center mx-3 mb-0">
                              <li class="mr-4 grid-col"><img class="icons" fluid :src="require('@/assets/images/timer_d.png')" /><span>8 jours</span></li>
                              <li>
                                <a href="#"><img class="img-fluid user_icon rounded-circle" fluid :src="require('@/assets/images/t2.png')" /> </a>
                              </li>
                              <li>
                                <a href="#"><img class="img-fluid user_icon rounded-circle" fluid :src="require('@/assets/images/t3.png')" /> </a>
                              </li>
                              <li>
                                <a href="#"><img class="img-fluid user_icon rounded-circle" fluid :src="require('@/assets/images/t4.png')" /> </a>
                              </li>
                              <li><small>+1.5k</small></li>
                            </ul>
                            <a href="#" class="btn bg-dark text-white small font-weight-bold rounded-pill d-inline-flex align-items-center d-lg-none border-radius-style euro">1 990&euro;</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- NOTE this one is when clicked -->
                    <div class="">
                      <div class="shadow-effect overflow-hidden position-relative">
                        <Tag style="position: absolute; top: 5%; left: 5%; z-index: 1" color="white" text="2 départs" />
                        <Tag style="position: absolute; top: 5%; left: 20%; z-index: 1" color="grey" text="nouveau" />
                        <a href="/product"><img class="img-responsive img-fill img--hover" fluid :src="require('@/assets/images/s1.png')" alt="" /></a>
                        <div class="card__footer item-details">
                          <div class="content">
                            <div class="text-uppercase">
                              <div class="d-flex align-items-center">
                                <img class="slider-icon d-none d-lg-inline-block" fluid :src="require('@/assets/images/pink.png')" />
                                <img class="slider-icon d-none d-md-inline-block d-lg-none" fluid :src="require('@/assets/images/pink2.png')" />
                                <img class="slider-icon d-inline-block d-md-none" fluid :src="require('@/assets/images/surf-1.png')" />
                                <div class="card__footer__infos">
                                  <div class="card__footer__infos__heading d-flex align-items-center">
                                    <span class="card__footer__infos__heading-sport text--20 text--grey text--bold" style="text-shadow: 0px 0px 6px rgba(41, 47, 51, 0.15)">ski freeride</span>
                                    <InlineSvg class="card__footer__infos__heading-arrow" :src="require('@/assets/svg/triangle-right.svg')" height="10" fill="#793f4e" />
                                    <span class="card__footer__infos__heading-spot d-inline-block align-middle">serre-chevalier</span>
                                  </div>
                                  <div class="card__footer__infos__sub-heading mb-0 d-none d-md-inline-block">
                                    <span>inclus :&nbsp;</span>
                                    <span>yoga - rando - vtt neige</span>
                                  </div>
                                </div>
                              </div>
                              <!-- <h5 class="sub-heading mb-0 p-3 d-block d-md-none">
                                <span>inclus :</span>
                                <span>yoga - rando - vtt neige</span>
                              </h5> -->
                            </div>
                            <InlineAvatars class="ml-auto" :avatars="[1, 2, 3, 4]" :heart="false" spacing="-10px" border-color="white" :outline="true" />
                            <span class="text--12" style="margin-left: 2px">+1.5k</span>
                            <!-- <div class="card__footer__price text-right d-none d-lg-inline-block align-self-center">
                              <h6 class="euro-per mb-0">par pers.</h6>
                              <h1 class="euro mb-0 euro">1 390&euro;</h1>
                            </div> -->
                            <!-- <ul class="img-list list-unstyled d-none d-md-inline-flex d-lg-none align-items-center justify-content-center mx-4 mb-0">
                              <li>
                                <a href="#"><img class="img-fluid user_icon rounded-circle" fluid :src="require('@/assets/images/t1.png')" /> </a>
                              </li>
                              <li>
                                <a href="#"><img class="img-fluid user_icon rounded-circle" fluid :src="require('@/assets/images/t2.png')" /> </a>
                              </li>
                              <li>
                                <a href="#"><img class="img-fluid user_icon rounded-circle" fluid :src="require('@/assets/images/t3.png')" /> </a>
                              </li>
                              <li>
                                <a href="#"><img class="img-fluid user_icon rounded-circle" fluid :src="require('@/assets/images/t4.png')" /> </a>
                              </li>
                              <li><small>+1.5k</small></li>
                            </ul> -->
                          </div>
                          <div class="hoverable-div ml-3 d-flex align-items-end">
                            <!-- TODO aligner avec picto au dessus -->
                            <InlineProductInfos :infos="['test1', 'test2', 'test3', 'test4']" :divider="false" :border-top="false" :border-bottom="false" color="grey" icon="globe" py="0" />
                            <div class="card__footer__price--hover text-right d-none d-lg-inline-block align-self-center">
                              <h6 class="euro-per mb-0" style="font-weight: 300; font-size: 0.8rem">par pers.</h6>
                              <h1 class="euro mb-0 euro" style="font-weight: bold; font-size: 1.8rem; white-space: nowrap">1 390€</h1>
                            </div>
                          </div>
                          <div class="d-flex d-lg-none justify-content-between mt-1 mt-md-3">
                            <ul class="list-unstyled py-3 text-uppercase list-info mb-0 d-none d-md-inline-flex d-lg-none ml-md-3">
                              <li><img class="icons mr-2" fluid :src="require('@/assets/images/globe_d.png')" />espagne</li>
                              <li><img class="icons mr-2" fluid :src="require('@/assets/images/timer_d.png')" />8 jours</li>
                              <li><img class="icons mr-2" fluid :src="require('@/assets/images/circle_d.png')" />tous niveaux</li>
                              <li><img class="icons mr-2" fluid :src="require('@/assets/images/places_d.png')" />10 places</li>
                            </ul>

                            <!-- <ul class="img-list list-unstyled d-inline-flex d-md-none align-items-center mx-3 mb-0">
                              <li class="mr-4 grid-col"><img class="icons" fluid :src="require('@/assets/images/timer_d.png')" /><span>8 jours</span></li>
                              <li>
                                <a href="#"><img class="img-fluid user_icon rounded-circle" fluid :src="require('@/assets/images/t2.png')" /> </a>
                              </li>
                              <li>
                                <a href="#"><img class="img-fluid user_icon rounded-circle" fluid :src="require('@/assets/images/t3.png')" /> </a>
                              </li>
                              <li>
                                <a href="#"><img class="img-fluid user_icon rounded-circle" fluid :src="require('@/assets/images/t4.png')" /> </a>
                              </li>
                              <li><small>+1.5k</small></li>
                            </ul> -->
                            <!-- <a href="#" class="btn bg-dark text-white small font-weight-bold rounded-pill d-inline-flex align-items-center d-lg-none border-radius-style euro">1 990&euro;</a> -->
                          </div>
                        </div>
                        <a href="#" class="btn new-link border-0">
                          <InlineSvg :src="require('@/assets/svg/heart-outline.svg')" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">123456</div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-9 ml-auto align-self-center order-lg-1 d-none d-md-block d-lg-none">
          <a href="#" class="text-uppercase font-weight-bold text-dark activites-link d-block text-right"
            ><span class="bg-white position-relative pl-4">toutes les activites <img class="ml-1 align-baseline" fluid :src="require('@/assets/images/ARROW_EXIT.png')" /></span
          ></a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import '@/assets/css/carousel.css'
// import { Carousel, Slide, Navigation } from 'vue3-carousel'
import Multiselect from '@vueform/multiselect'
import Tag from '@/components/elements/Tag.vue'
import InlineAvatars from '@/components/elements/InlineAvatars.vue'
import InlineProductInfos from '@/components/elements/InlineProductInfos.vue'
import SectionCarouselCard from '@/components/home/SectionCarouselCard.vue'
import { gsap } from 'gsap'
import { CustomEase } from 'gsap/CustomEase'
gsap.registerPlugin(CustomEase)

export default {
  name: 'SectionCarousel',
  components: {
    InlineProductInfos,
    SectionCarouselCard,
    InlineAvatars,
    Tag,
    Multiselect
    // Carousel,
    // Slide,
    // Navigation
  },
  data() {
    return {
      hovered: false,
      courses: [],
      currentViewportWidth: '',
      cardsArr: [],
      monthSelection: {
        mode: 'tags',
        value: ['Janvier'],
        openDirection: 'top',
        caret: false,
        options: [
          { value: 'jan', label: 'Janvier' },
          { value: 'feb', label: 'Février' },
          { value: 'mar', label: 'Mars' },
          { value: 'apr', label: 'Avril' },
          { value: 'may', label: 'Mai' },
          { value: 'jun', label: 'Juin' },
          { value: 'jul', label: 'Juillet' },
          { value: 'aug', label: 'Août' },
          { value: 'sep', label: 'Septembre' },
          { value: 'oct', label: 'Octobre' },
          { value: 'nov', label: 'Novembre' },
          { value: 'dec', label: 'Décembre' }
        ],
        createTag: true
      },
      activitySelection: {
        mode: 'tags',
        value: ['VTT'],
        openDirection: 'top',
        caret: false,
        options: [
          { value: 'vtt', label: 'VTT' },
          { value: 'ski', label: 'Ski' },
          { value: 'surf', label: 'Surf' },
          { value: 'kitesurf', label: 'Kitesurf' },
          { value: 'escalade', label: 'Escalade' }
        ],
        createTag: true
      },
      countrySelection: {
        value: 0,
        openDirection: 'top',
        caret: false,
        options: ['France', 'Espagne', 'Italie']
      }
    }
  },
  created() {
    this.$axios.get('/courses').then((res) => (this.courses = res.data.courses))
  },
  methods: {
    // TODO mettre un composant Vuejs à la place
    // 530px min-width
    slideLeft() {
      let windowWrap = gsap.utils.wrap(0, 600 * 4) // card width * nb of cards
      let tl = gsap.timeline()
      this.cardsArr.forEach((card, index) => {
        tl.to(
          card,
          {
            x: '-=600',
            ease: CustomEase.create('custom', 'M0,0,C0.31,0.024,0.393,0.414,0.436,0.548,0.558,0.934,0.818,1.001,1,1'),
            duration: 1.0,
            modifiers: {
              x: (x) => windowWrap(parseFloat(x)) + 'px'
            }
          },
          '<0.10'
        )
      })
      gsap.to(this.cardsArr[0], {
        opacity: 0,
        duration: 1,
        easing: 'power4.in',
        onComplete: () => {
          gsap.to(this.cardsArr[0], { opacity: 1, duration: 0.5, easing: 'power4.out' })
          this.cardsArr.push(this.cardsArr.shift()) // making first element the last element
        }
      })
    },
    slideRight() {
      let tl = gsap.timeline()
      gsap.utils
        .toArray('.card-block')
        .reverse()
        .forEach((card) => {
          tl.to(
            card,
            {
              x: '+=600',
              ease: CustomEase.create('custom', 'M0,0,C0.31,0.024,0.393,0.414,0.436,0.548,0.558,0.934,0.818,1.001,1,1'),
              duration: 1.0
            },
            '<0.08'
          )
        })
    },
    changeBackground(e, color) {
      // console.log(this.$event)
      e.target.style.backgroundColor = color
      e.target.style.color = color === 'grey' ? '#fff' : 'unset'
      // window.scrollTo(0, 0)
    }
  },
  mounted() {
    this.currentViewportWidth = window.innerWidth
    // gsap.utils.toArray('.card-block').forEach((card, index) => {
    //   gsap.set(card, { x: 550 * index })
    // })
    gsap.set('.card-block', {
      x: (i) => i * 600 + this.currentViewportWidth * 0.15 // left offset of 10vw
    })
    this.cardsArr = gsap.utils.toArray('.card-block')
    document.querySelectorAll('.multiselect-tags').forEach((tagContainer) => {
      document.querySelector('.tags-container').append(tagContainer)
    })

    document.querySelectorAll('.multi-select-filter').forEach((el) => {
      el.addEventListener('mouseenter', (e) => {
        e.target.style.backgroundColor = '#292f33'
        e.target.style.borderColor = '#292f33'
        e.target.style.color = '#fff'
      })
      el.addEventListener('mouseleave', (e) => {
        e.target.style.backgroundColor = 'unset'
        e.target.style.borderColor = 'unset'
        e.target.style.color = 'unset'
      })
    })
  }
}
</script>

<style scoped>
.centered-div {
  box-shadow: none;
}
.slider-buttons {
  position: absolute;
  z-index: 2;
}
.cards-slider {
  width: max-content;
  padding-top: 1rem;
}
/* .customers-testimonials .item-details .content.hover::after {
  content: none !important;
}
.customers-testimonials .new-link {
  background-color: unset;
  font-size: unset;
  border-bottom-left-radius: unset;
} */
</style>
