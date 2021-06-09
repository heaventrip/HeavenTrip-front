<template>
  <section class="result-section">
    <div class="search-filter-div bg-white">
      <a class="px-5 bg-danger d-flex align-items-center justify-content-around text-white home-ref" href="index.html">
        <InlineSvg :src="require('@/assets/svg/home.svg')" height="24" fill="#fff" />
      </a>
      <div class="result-div d-flex align-items-center p-3 px-5 pl-lg-5 w-100">
        <h4 class="pr-5 mr-5 mb-0 border-right border-dark count text-right font-weight-normal d-none d-md-block">
          <strong class="h6 d-block font-weight-bold mb-1">MA RECHERCHE</strong>
          12 séjours
        </h4>
        <div class="d-md-flex align-items-center d-lg-none flex-1">
          <img class="mr-3 ml-4 head-img d-none d-md-block" fluid :src="require('@/assets/images/head-pin.png')" />
          <h1 class="text-uppercase mb-0 d-none d-md-block">Ski</h1>
          <h4 class="ml-auto mb-0 selected-filter-count text-right font-weight-normal text-uppercase"><span class="d-block mb-2">2 FILTRES</span> sélectionnés</h4>
        </div>
        <ul class="list-unstyled mb-0 text-uppercase d-none d-lg-flex align-items-center filter-list font-weight-normal">
          <li class="d-none"><img class="mr-2 ml-3 icons" fluid :src="require('@/assets/images/surf_dark.png')" />SURF</li>
          <li class="mr-3"><img class="mr-2 ml-3 icons" fluid :src="require('@/assets/images/globe_dark.png')" />FRANCE</li>
          <li class="mr-3"><img class="mr-2 ml-3 icons" fluid :src="require('@/assets/images/cal.png')" />Décembre</li>
        </ul>
      </div>
      <a class="px-3 bg-dark d-flex d-lg-none align-items-center justify-content-around text-white menu-ref border-left" href="index.html"><img fluid :src="require('@/assets/images/mob-menu.png')" /></a>
      <div class="filter-div d-none d-md-flex">
        <!-- <Multiselect @open="changeBackground('grey')" @close="changeBackground('unset')" v-model="priceSelection.value" v-bind="priceSelection" style="width: 100%" /> -->
        <!-- <div class="btn bg-white text-dark rounded-0 text-uppercase"> <i class="fas fa-sort ml-4 symbol"></i></div>
        <div class="btn bg-white text-dark rounded-0 text-uppercase">Date de depart<i class="fas fa-sort ml-4 symbol"></i></div>
        <div class="btn bg-white text-dark rounded-0 text-uppercase">Durée<i class="fas fa-sort ml-4 symbol"></i></div> -->
        <div class="sort-by-button" style="position: relative; flex-grow: 1">
          <div style="position: absolute; top: 50%; transform: translateY(-50%); text-align: center; width: 100%">
            <span>Prix <InlineSvg :src="require('@/assets/svg/arrow-up.svg')" height="1rem" class="ml-3 align-middle" /></span>
          </div>
        </div>
        <div class="sort-by-button" style="position: relative; flex-grow: 1">
          <div style="position: absolute; top: 50%; transform: translateY(-50%); text-align: center; width: 100%">
            <span>Durée <InlineSvg :src="require('@/assets/svg/arrow-up.svg')" height="1rem" class="ml-3 align-middle" /></span>
          </div>
        </div>
        <div class="sort-by-button" style="position: relative; flex-grow: 1">
          <div style="position: absolute; top: 50%; transform: translateY(-50%); text-align: center; width: 100%">
            <span>Pays <InlineSvg :src="require('@/assets/svg/arrow-up.svg')" height="1rem" class="ml-3 align-middle" /></span>
          </div>
        </div>
      </div>
    </div>
    <div class="result-block">
      <div class="container p-0">
        <div class="row">
          <div class="col-12 col-lg-3 pr-lg-0 d-none d-lg-block">
            <div class="search-container d-flex align-items-center" style="background-color: #fff">
              <label for="search-input" class="mb-0"><img class="mx-3" fluid :src="require('@/assets/images/search.png')" /></label>
              <input id="search-input" class="form-control border-0 rounded-0" type="text" name="" placeholder="Tape ici ta recherche manuelle …" />
            </div>
            <!-- <div class="py-4 px-5 theme-div">
              <div class="theme-dropdown position-relative">
                <select class="form-control select-theme border-0 rounded-0 text-capitalize">
                  <option selected="" value="" disabled="" hidden="">Thématiques</option>
                  <option value="">qwerty</option>
                  <option value="">asdfgh</option>
                  <option value="">sdfghj</option>
                </select>
              </div>
            </div> -->
            <div class="py-4 px-5 filter-body bg-white font-weight-normal">
              <div class="text-uppercase mb-4 mt-3 letter">Tu peux encore affiner :</div>
              <div class="filter-container">
                <div class="position-relative multi-select-filter">
                  <div style="position: absolute; top: 50%; transform: translateY(-50%); padding-left: 1.5rem; padding-right: 1rem; width: 100%">
                    <InlineSvg class="search-bar__filter__svg" :src="require('@/assets/svg/activity-search.svg')" height="22" />
                    <span class="search-bar__filter__name">Activités<i class="fas fa-sort float-right symbol"></i></span>
                  </div>
                  <Multiselect @open="setBgGrey('activity-filter')" @close="setBgWhite('activity-filter')" v-model="activitySelection.value" v-bind="activitySelection" style="width: 100%">
                    <template v-slot:clear><div></div></template>
                  </Multiselect>
                </div>
                <div class="tags-container"></div>
              </div>
              <div class="filter-container">
                <div class="position-relative multi-select-filter">
                  <div style="position: absolute; top: 50%; transform: translateY(-50%); padding-left: 1.5rem; padding-right: 1rem; width: 100%">
                    <InlineSvg class="search-bar__filter__svg" :src="require('@/assets/svg/country-search.svg')" height="22" />
                    <span class="search-bar__filter__name">Pays<i class="fas fa-sort float-right symbol"></i></span>
                  </div>
                  <Multiselect @open="setBgGrey('month-filter')" @close="setBgWhite('month-filter')" v-model="monthSelection.value" v-bind="monthSelection" style="width: 100%">
                    <template v-slot:clear><div></div></template>
                  </Multiselect>
                </div>
                <div class="tags-container"></div>
              </div>
              <div class="filter-container">
                <div class="position-relative multi-select-filter">
                  <div style="position: absolute; top: 50%; transform: translateY(-50%); padding-left: 1.5rem; padding-right: 1rem; width: 100%">
                    <InlineSvg class="search-bar__filter__svg" :src="require('@/assets/svg/map-pin.svg')" height="22" />
                    <span class="search-bar__filter__name">Spot<i class="fas fa-sort float-right symbol"></i></span>
                  </div>
                  <Multiselect @open="setBgGrey('month-filter')" @close="setBgWhite('month-filter')" v-model="monthSelection.value" v-bind="monthSelection" style="width: 100%">
                    <template v-slot:clear><div></div></template>
                  </Multiselect>
                </div>
                <div class="tags-container"></div>
              </div>
              <div class="filter-container">
                <div class="position-relative multi-select-filter">
                  <div style="position: absolute; top: 50%; transform: translateY(-50%); padding-left: 1.5rem; padding-right: 1rem; width: 100%">
                    <InlineSvg class="search-bar__filter__svg" :src="require('@/assets/svg/date-search.svg')" height="22" />
                    <span class="search-bar__filter__name">Mois de départ<i class="fas fa-sort float-right symbol"></i></span>
                  </div>
                  <Multiselect @open="setBgGrey('month-filter')" @close="setBgWhite('month-filter')" v-model="monthSelection.value" v-bind="monthSelection" style="width: 100%">
                    <template v-slot:clear><div></div></template>
                  </Multiselect>
                </div>
                <div class="tags-container"></div>
              </div>
              <div class="filter-container">
                <div class="position-relative multi-select-filter">
                  <div style="position: absolute; top: 50%; transform: translateY(-50%); padding-left: 1.5rem; padding-right: 1rem; width: 100%">
                    <InlineSvg class="search-bar__filter__svg" :src="require('@/assets/svg/date-search.svg')" height="22" />
                    <span class="search-bar__filter__name">Niveau<i class="fas fa-sort float-right symbol"></i></span>
                  </div>
                  <Multiselect @open="setBgGrey('month-filter')" @close="setBgWhite('month-filter')" v-model="monthSelection.value" v-bind="monthSelection" style="width: 100%">
                    <template v-slot:clear><div></div></template>
                  </Multiselect>
                </div>
                <div class="tags-container"></div>
              </div>
              <br />
              <div class="custom-radio-container d-flex justify-content-between">
                <div class="custom-control custom-radio">
                  <input type="radio" id="filterdepart" name="room" class="custom-control-input" />
                  <label class="custom-control-label" for="filterdepart">Départ confirmé</label>
                </div>
                <div class="custom-control custom-radio">
                  <input type="radio" id="filterplace" name="room" class="custom-control-input" />
                  <label class="custom-control-label" for="filterplace">Dernières places</label>
                </div>
              </div>
            </div>
            <button class="btn btn-block clear-btn border-0 rounded-0">Effacer les 4 critères de sélection</button>
          </div>
          <div class="d-flex flex-column col-12 col-lg-8 ml-auto">
            <div class="d-flex position-relative mb-5">
              <div class="col-4 col-md-4 p-0">
                <div class="position-relative w-100 h-100">
                  <a href="/checkout"><img class="img-fluid img-fill" fluid :src="require('@/assets/images/asset-1.png')" /> <img class="img-fluid position-pink d-none d-md-block" fluid :src="require('@/assets/images/pink.png')" /></a>
                  <div class="py-2 px-lg-4 px-2 depart-div d-none">
                    <a href="#" class="depart-text text-white d-flex align-items-center h-100 font-weight-normal"
                      ><i class="fas fa-plane-departure mr-2"></i>24 au 2 décembre
                      <span class="ml-auto place-count text-uppercase"><strong>2 places</strong> restantes</span>
                    </a>
                  </div>
                </div>
              </div>
              <div class="d-flex fg-1">
                <div class="d-flex flex-column justify-content-between shadow--right" style="z-index: 1; flex-grow: 1; background-color: rgb(255, 255, 255, 0.96)">
                  <div class="pad__content">
                    <div class="text-uppercase pad__content__title font-weight-bold d-flex align-items-center">
                      <span class="pad__content__title__sport">yoggi & surf</span>
                      <span class="pad__content__title__spot font-weight-normal"><i class="fas fa-caret-right mx-3"></i>îles canaries</span>
                    </div>
                    <div class="pad__content__sports d-flex align-items-center tooltip-div">
                      <span class="pad__content__activities__title">Activités :</span>
                      <InlineSvg class="" :src="require('@/assets/svg/surf.svg')" height="22" />
                      <InlineSvg class="" :src="require('@/assets/svg/yoga.svg')" height="22" />
                      <InlineSvg class="" :src="require('@/assets/svg/mat.svg')" height="22" />
                    </div>
                    <div class="pad__content__tags">
                      <div class="pad__content__tags__tag">Cuisinier privé</div>
                      <div class="pad__content__tags__tag">Cuisinier privé</div>
                      <div class="pad__content__tags__tag">Cuisinier privé</div>
                    </div>
                    <div class="">
                      <span class="pad__content__avatars-title text-uppercase mb-0 d-none d-lg-inline-block"> <span>Trippers inscrits&nbsp;</span><span>aux sessions :</span> </span>
                      <div class="d-flex justify-content-between">
                        <InlineAvatars :avatars="[1, 2, 3, 4, 5, 6, 7, 8]" outline-color="white" :heart="false" spacing="-10px" mt="0.5rem" mb="0rem" />
                        <div class="pad__content__price text-right">
                          <div class="pad__content__price__info" style="font-weight: 300">par pers.</div>
                          <div class="pad__content__price__euro">1 390&euro;</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex pad__footer">
                    <div class="inline-product-infos-container">
                      <InlineProductInfos :infos="['France', '7 jours', 'Tous niveaux', '10 places']" icon="globe" color="#292f33" pb="0.8rem" pt="0.8rem" width="100%" font-weight="400" letter-spacing="0.07rem" />
                    </div>
                  </div>
                </div>
                <!-- TODO changement de content au hover, et hover en gris -->
                <div class="d-inline-block pad__content p-0" style="width: 50px; height: min-content">
                  <div class="pad__content__month-block shadow"><span>Janv.</span></div>
                  <div class="pad__content__month-block shadow"><span>Fév.</span></div>
                  <div class="pad__content__month-block shadow"><span>Mars</span></div>
                  <div class="pad__content__month-block shadow"><span>Avr.</span></div>
                  <div class="pad__content__month-block shadow"><span>Mai</span></div>
                  <div class="pad__content__month-block shadow"><span>Juin</span></div>
                  <div class="pad__content__month-block shadow"><span>Juil.</span></div>
                  <div class="pad__content__month-block shadow"><span>Août</span></div>
                  <div class="pad__content__month-block shadow"><span>Sept.</span></div>
                  <div class="pad__content__month-block shadow"><span>Oct.</span></div>
                  <div class="pad__content__month-block shadow"><span>Nov.</span></div>
                  <div class="pad__content__month-block shadow"><span>Déc.</span></div>
                </div>
              </div>
            </div>
            <div class="d-flex position-relative mb-5">
              <div class="col-4 col-md-4 p-0">
                <div class="position-relative w-100 h-100">
                  <a href="/checkout"><img class="img-fluid img-fill" fluid :src="require('@/assets/images/asset-1.png')" /> <img class="img-fluid position-pink d-none d-md-block" fluid :src="require('@/assets/images/pink.png')" /></a>
                  <div class="py-2 px-lg-4 px-2 depart-div d-none">
                    <a href="#" class="depart-text text-white d-flex align-items-center h-100 font-weight-normal"
                      ><i class="fas fa-plane-departure mr-2"></i>24 au 2 décembre
                      <span class="ml-auto place-count text-uppercase"><strong>2 places</strong> restantes</span>
                    </a>
                  </div>
                </div>
              </div>
              <div class="d-flex fg-1">
                <div class="d-flex flex-column justify-content-between shadow--right" style="z-index: 1; flex-grow: 1; background-color: rgb(255, 255, 255, 0.96)">
                  <div class="pad__content">
                    <div class="text-uppercase pad__content__title font-weight-bold d-flex align-items-center">
                      <span class="pad__content__title__sport">yoggi & surf</span>
                      <span class="pad__content__title__spot font-weight-normal"><i class="fas fa-caret-right mx-3"></i>îles canaries</span>
                    </div>
                    <div class="pad__content__sports d-flex align-items-center tooltip-div mt-4">
                      <span class="pad__content__activities__title">Activités :</span>
                      <InlineSvg class="" :src="require('@/assets/svg/surf.svg')" height="22" />
                      <InlineSvg class="" :src="require('@/assets/svg/yoga.svg')" height="22" />
                      <InlineSvg class="" :src="require('@/assets/svg/mat.svg')" height="22" />
                    </div>
                    <div class="pad__content__tags">
                      <div class="pad__content__tags__tag">Cuisinier privé</div>
                      <div class="pad__content__tags__tag">Cuisinier privé</div>
                      <div class="pad__content__tags__tag">Cuisinier privé</div>
                    </div>
                    <div class="">
                      <span class="pad__content__avatars-title text-uppercase mb-0 d-none d-lg-inline-block"> <span>Trippers intéressés :&nbsp;</span></span>
                      <div class="d-flex justify-content-between">
                        <InlineAvatars :avatars="[1, 2, 3, 4, 5, 6, 7, 8]" outline-color="white" :heart="false" spacing="-10px" mt="0rem" mb="0rem" />
                        <div class="pad__content__price text-right">
                          <div class="pad__content__price__info" style="font-weight: 300">à partir de :</div>
                          <div class="pad__content__price__euro">1 390&euro;</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex pad__footer">
                    <div class="inline-product-infos-container">
                      <InlineProductInfos :infos="['France', '7 jours', 'Tous niveaux']" icon="globe" color="#292f33" pb="0.6rem" pt="0.6rem" width="100%" />
                    </div>
                    <Button text="Sur devis" color="grey" px="1.5rem" size=".8rem" width="max-content" weight="bold" height="inherit" icon="globe" />
                  </div>
                </div>
                <!-- TODO changement de content au hover, et hover en gris -->
                <div class="d-inline-block pad__content p-0" style="width: 50px; height: min-content; visibility: hidden">
                  <div class="pad__content__month-block shadow"><span>Janv.</span></div>
                  <div class="pad__content__month-block shadow"><span>Fév.</span></div>
                  <div class="pad__content__month-block shadow"><span>Mars</span></div>
                  <div class="pad__content__month-block shadow"><span>Avr.</span></div>
                  <div class="pad__content__month-block shadow"><span>Mai</span></div>
                  <div class="pad__content__month-block shadow"><span>Juin</span></div>
                  <div class="pad__content__month-block shadow"><span>Juil.</span></div>
                  <div class="pad__content__month-block shadow"><span>Août</span></div>
                  <div class="pad__content__month-block shadow"><span>Sept.</span></div>
                  <div class="pad__content__month-block shadow"><span>Oct.</span></div>
                  <div class="pad__content__month-block shadow"><span>Nov.</span></div>
                  <div class="pad__content__month-block shadow"><span>Déc.</span></div>
                </div>
              </div>
            </div>
            <div class="d-flex position-relative mb-5">
              <div class="col-4 col-md-4 p-0" style="position: relative">
                <div class="position-relative w-100 h-100">
                  <a href="/checkout"><img class="img-fluid img-fill" fluid :src="require('@/assets/images/asset-1.png')" /> <img class="img-fluid position-pink d-none d-md-block" fluid :src="require('@/assets/images/pink.png')" /></a>
                  <div class="py-2 px-lg-4 px-2 depart-div d-none">
                    <a href="#" class="depart-text text-white d-flex align-items-center h-100 font-weight-normal"
                      ><i class="fas fa-plane-departure mr-2"></i>24 au 2 décembre
                      <span class="ml-auto place-count text-uppercase"><strong>2 places</strong> restantes</span>
                    </a>
                  </div>
                </div>
                <div class="d-flex justify-content-around align-items-center" style="position: absolute; bottom: 0; width: 100%; background-color: white; padding: 0.8rem 2rem; font-size: 0.75rem; text-transform: uppercase; height: 50px">
                  <div><span style="font-weight: bold">1 place &nbsp;</span>restante</div>
                  <div class="divider"></div>
                  <div>Session du 24 décembre</div>
                </div>
              </div>
              <div class="d-flex fg-1">
                <div class="d-flex flex-column justify-content-between shadow--right" style="z-index: 1; flex-grow: 1; background-color: rgb(255, 255, 255, 0.96)">
                  <div class="pad__content">
                    <div class="text-uppercase pad__content__title font-weight-bold d-flex align-items-center">
                      <span class="pad__content__title__sport">yoggi & surf</span>
                      <span class="pad__content__title__spot font-weight-normal"><i class="fas fa-caret-right mx-3"></i>îles canaries</span>
                    </div>
                    <div class="pad__content__sports d-flex align-items-center tooltip-div">
                      <span class="pad__content__activities__title">Activités :</span>
                      <InlineSvg class="" :src="require('@/assets/svg/surf.svg')" height="22" />
                      <InlineSvg class="" :src="require('@/assets/svg/yoga.svg')" height="22" />
                      <InlineSvg class="" :src="require('@/assets/svg/mat.svg')" height="22" />
                    </div>
                    <div class="pad__content__tags">
                      <div class="pad__content__tags__tag">Cuisinier privé</div>
                      <div class="pad__content__tags__tag">Cuisinier privé</div>
                      <div class="pad__content__tags__tag">Cuisinier privé</div>
                    </div>
                    <div class="">
                      <span class="pad__content__avatars-title text-uppercase mb-0 d-none d-lg-inline-block"> <span>Trippers intéressés :&nbsp;</span></span>
                      <div class="d-flex justify-content-between">
                        <InlineAvatars :avatars="[1, 2, 3, 4, 5, 6, 7, 8]" outline-color="white" :heart="false" spacing="-10px" mt="0rem" mb="0rem" />
                        <div class="pad__content__price text-right">
                          <div class="pad__content__price__info" style="font-weight: 300">à partir de :</div>
                          <div class="pad__content__price__euro">1 390&euro;</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex pad__footer">
                    <div class="inline-product-infos-container">
                      <InlineProductInfos :infos="['France', '7 jours', 'Tous niveaux']" icon="globe" color="#292f33" pb="0.6rem" pt="0.6rem" width="100%" />
                    </div>
                    <Button text="Sur devis" color="grey" px="1.5rem" size=".8rem" width="max-content" weight="bold" height="inherit" icon="globe" />
                  </div>
                </div>
                <!-- TODO changement de content au hover, et hover en gris -->
                <div class="d-inline-block pad__content p-0" style="width: 50px; height: min-content; visibility: hidden">
                  <div class="pad__content__month-block shadow"><span>Janv.</span></div>
                  <div class="pad__content__month-block shadow"><span>Fév.</span></div>
                  <div class="pad__content__month-block shadow"><span>Mars</span></div>
                  <div class="pad__content__month-block shadow"><span>Avr.</span></div>
                  <div class="pad__content__month-block shadow"><span>Mai</span></div>
                  <div class="pad__content__month-block shadow"><span>Juin</span></div>
                  <div class="pad__content__month-block shadow"><span>Juil.</span></div>
                  <div class="pad__content__month-block shadow"><span>Août</span></div>
                  <div class="pad__content__month-block shadow"><span>Sept.</span></div>
                  <div class="pad__content__month-block shadow"><span>Oct.</span></div>
                  <div class="pad__content__month-block shadow"><span>Nov.</span></div>
                  <div class="pad__content__month-block shadow"><span>Déc.</span></div>
                </div>
              </div>
            </div>
            <div class="position-relative d-flex justify-content-center">
              <Button text="J'en veux plus" px="1.5rem" size=".8rem" width="100%" weight="bold" text-color="#292f33" background-color="#292f331a" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Button from '@/components/elements/Button.vue'
import InlineAvatars from '@/components/elements/InlineAvatars.vue'
import InlineProductInfos from '@/components/elements/InlineProductInfos.vue'
import Multiselect from '@vueform/multiselect'

export default {
  name: 'SearchResultSection',
  components: {
    Button,
    InlineAvatars,
    InlineProductInfos,
    Multiselect
  },
  data() {
    return {
      activitySelection: {
        hideSelected: false,
        noOptionsText: 'La liste est vide',
        mode: 'tags',
        value: [],
        openDirection: 'top',
        caret: false,
        options: [
          { value: 'vtt', label: 'VTT' },
          { value: 'kitesurf', label: 'Kitesurf' },
          { value: 'escalade', label: 'Escalade' }
        ],
        createTag: true
      },
      countrySelection: {
        hideSelected: false,
        noOptionsText: 'La liste est vide',
        value: 0,
        openDirection: 'top',
        caret: false,
        options: ['France', 'Espagne', 'Italie']
      },
      spotSelection: {
        hideSelected: false,
        noOptionsText: 'La liste est vide',
        value: 0,
        openDirection: 'top',
        caret: false,
        options: ['France', 'Espagne', 'Italie']
      },
      monthSelection: {
        hideSelected: false,
        noOptionsText: 'La liste est vide',
        mode: 'tags',
        value: [],
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
      levelSelection: {
        hideSelected: false,
        noOptionsText: 'La liste est vide',
        value: 0,
        openDirection: 'top',
        caret: false,
        options: ['France', 'Espagne', 'Italie']
      }
    }
  },
  methods: {
    // changeBackground(e, color) {
    //   e.target.style.backgroundColor = color
    //   e.target.style.color = color === 'grey' ? '#fff' : 'unset'
    // }
  },
  mounted() {
    document.querySelectorAll('.multiselect-tags').forEach((tagContainer) => {
      tagContainer.closest('.filter-container').querySelector('.tags-container').append(tagContainer)
    })
  }
}
</script>

<style scoped>
.filter-div {
  width: 40%;
  margin-left: auto;
}
.sort-by-button {
  border-left: 2px solid #f1f1f1;
}
.sort-by-button:last-of-type {
  border-right: 2px solid #f1f1f1;
}
.search-filter-div {
  display: flex;
  padding-right: calc((100vw - 1444px) / 2);
}
.search-container {
  border: 8px solid rgba(247, 247, 247, 0.58);
  background-color: #fff;
  margin-bottom: 1rem;
}
.search-bar__filter__svg {
  padding-right: 1rem;
}
.search-bar__filter__name {
  margin-left: 1rem;
  vertical-align: middle;
}

.tags-container {
  height: 2.5rem;
}
.multi-select-filter {
  box-shadow: 1px 2px 2px rgba(41, 47, 51, 0.05);
}
.divider {
  display: inline-block;
  width: 1px;
  height: 1rem;
  border-right: 1px dashed #292f3359;
}
.pad__content__tags__tag {
  border-radius: 20px;
  background-color: #fafafa;
  border: 1px solid #ebebeb;
  color: #793f4e;
  text-transform: uppercase;
  padding: 0.5rem 1rem;
  font-family: Oswald, sans-serif;
  font-size: 0.75rem;
  width: max-content;
  display: inline-block;
  margin-right: 0.6rem;
}
.pad__content__activities__title {
  text-transform: uppercase;
  font-family: Oswald, sans-serif;
  font-size: 0.75rem;
  line-height: 1.6;
  letter-spacing: 0.4px;
  margin-right: 1.5rem;
  font-weight: bold;
}
.inline-product-infos-container {
  margin: 0 2rem;
  flex-grow: 1;
}
.pad__footer {
  background-color: #fafafa;
  display: flex;
  margin-top: 1rem;
  height: 50px;
}
.pad__content__price {
  border-left: 1px dashed #292f33;
  padding-left: 1.4rem;
}
.pad__content__price__info {
  font-size: 0.8rem;
  line-height: 1;
}
.pad__content__price__euro {
  font-size: 1.625rem;
  font-weight: 600;
  line-height: 1.4;
}
.pad__content__sports {
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin-top: 0.6rem;
  margin-bottom: 0.6rem;
  width: max-content;
}
.pad__content__sports svg:not(:last-of-type) {
  margin-right: 1.5rem;
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
}
.pad__header {
  padding: 1.2rem 2rem;
  background-color: #292f33;
  margin-bottom: 0.1rem;
  position: relative;
  z-index: 2;
}
.pad__content {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  color: #292f33;
  padding: 1.5rem 2rem 0rem 2rem;
}
.pad__content__month-block span {
  display: inline;
  vertical-align: middle;
}
.pad__content__month-block {
  text-align: center;
  padding: 0.3rem 0;
  margin-bottom: 1px;
  margin-left: 1px;
  background-color: #fff;
  font-family: 'Muli', sans-serif;
  font-size: 0.75rem;
  font-weight: lighter;
  flex-grow: 1;
}
.tooltip-div {
  border-top: 1px dashed #292f33;
  border-bottom: 1px dashed #292f33;
}
.pad__content__avatars-title {
  font-size: 0.75rem;
  line-height: 1.6;
  letter-spacing: 0.4px;
  margin-right: 1.5rem;
}
.pad__content__avatars-title span:first-child {
  font-weight: bold;
}
</style>
