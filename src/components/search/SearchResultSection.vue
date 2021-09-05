<template>
  <section class="result-section">
    <div class="search-filter-div bg-white" style="position: sticky; top: 0; z-index: 10">
      <router-link class="px-5 bg-danger d-flex align-items-center justify-content-around text-white home-ref" to="/">
        <InlineSvg :src="require('@/assets/svg/home.svg')" height="24" fill="#fff" />
      </router-link>
      <div class="result-div d-flex align-items-center p-3 px-5 pl-lg-5 w-100">
        <h4 class="pr-5 mr-5 mb-0 border-right border-dark count text-right font-weight-normal d-none d-md-block">
          <strong class="h6 d-block font-weight-bold mb-1">MA RECHERCHE</strong>
          {{ normalResults.length }} séjour{{ normalResults.length > 1 ? 's' : '' }}
        </h4>
        <div class="d-md-flex align-items-center d-lg-none flex-1">
          <img class="mr-3 ml-4 head-img d-none d-md-block" fluid :src="require('@/assets/images/head-pin.png')" />
          <h1 class="text-uppercase mb-0 d-none d-md-block">Ski</h1>
          <h4 class="ml-auto mb-0 selected-filter-count text-right font-weight-normal text-uppercase"><span class="d-block mb-2">2 FILTRES</span> sélectionnés</h4>
        </div>
        <ul class="list-unstyled mb-0 text-uppercase d-none d-lg-flex align-items-center filter-list font-weight-normal">
          <li class="d-none">
            <InlineSvg class="mr-4" :src="require('@/assets/svg/date-search.svg')" height="22" />
            SURF
          </li>
          <li class="mr-4" v-show="countrySelection.value.length">
            <InlineSvg class="mr-2" :src="require('@/assets/svg/globe.svg')" height="22" />
            {{
              countrySelection.options
                .filter((el) => countrySelection.value.includes(el.value))
                .map((el) => el.label)
                .join(' + ')
            }}
          </li>
          <li class="mr-4" v-show="monthSelection.value.length">
            <InlineSvg class="mr-2" :src="require('@/assets/svg/date-search.svg')" height="22" />
            {{
              monthSelection.options
                .filter((el) => monthSelection.value.includes(el.value))
                .map((el) => el.label)
                .join(' + ')
            }}
          </li>
        </ul>
      </div>
      <a class="px-3 bg-dark d-flex d-lg-none align-items-center justify-content-around text-white menu-ref border-left" href="index.html"
        ><img fluid :src="require('@/assets/images/mob-menu.png')"
      /></a>
      <div class="filter-div d-none d-md-flex">
        <!-- <Multiselect @open="changeBackground('grey')" @close="changeBackground('unset')" v-model="priceSelection.value" v-bind="priceSelection" style="width: 100%" /> -->
        <!-- <div class="btn bg-white text-dark rounded-0 text-uppercase"> <i class="fas fa-sort ml-4 symbol"></i></div>
        <div class="btn bg-white text-dark rounded-0 text-uppercase">Date de depart<i class="fas fa-sort ml-4 symbol"></i></div>
        <div class="btn bg-white text-dark rounded-0 text-uppercase">Durée<i class="fas fa-sort ml-4 symbol"></i></div> -->
        <div @click="sortByPrice" type="button" class="sort-by-button" style="position: relative; flex-grow: 1">
          <div class="d-flex align-items-center">
            <span class="align-middle">Prix</span
            ><InlineSvg :src="require('@/assets/svg/arrow-up.svg')" :transform="[sortedBy === 'ascPrice' ? 'rotate(0)' : 'rotate(180)']" height="1rem" class="ml-3" />
          </div>
        </div>
        <div @click="sortByDate" type="button" class="sort-by-button" style="position: relative; flex-grow: 1">
          <div class="d-flex align-items-center">
            <span class="align-middle">Date de départ</span
            ><InlineSvg :src="require('@/assets/svg/arrow-up.svg')" :transform="[sortedBy === 'ascDate' ? 'rotate(0)' : 'rotate(180)']" height="1rem" class="ml-3" />
          </div>
        </div>
        <div @click="sortByDuration" type="button" class="sort-by-button" style="position: relative; flex-grow: 1">
          <div class="">
            <span class="align-middle">Durée</span
            ><InlineSvg :src="require('@/assets/svg/arrow-up.svg')" :transform="[sortedBy === 'ascDuration' ? 'rotate(0)' : 'rotate(180)']" height="1rem" class="ml-3" />
          </div>
        </div>
      </div>
    </div>
    <div class="result-block">
      <div class="container p-0">
        <div class="row">
          <div class="pr-lg-0 d-none d-lg-block mx-auto" style="flex-grow: 0.4">
            <div class="search-container d-flex align-items-center" style="background-color: #fff">
              <label for="search-input" class="mb-0"><img class="mx-3" fluid :src="require('@/assets/images/search.png')" /></label>
              <input v-model="freeSearch" id="search-input" class="form-control border-0 rounded-0" type="text" name="" placeholder="Tape ici ta recherche manuelle …" />
            </div>
            <div class="bg-white filter-body">
              <div class="filter-container theme-filter">
                <div class="position-relative multi-select-filter" style="box-shadow: none; border-bottom: 1px solid rgba(41, 47, 51, 0.06); height: 4rem">
                  <div
                    class="d-flex align-items-center justify-content-around"
                    style="position: absolute; top: 50%; transform: translateY(-50%); padding-left: 1.5rem; padding-right: 1rem; width: 100%"
                  >
                    <span class="search-bar__filter__name">{{ themeSelection.options.find((el) => el.value === themeSelection.value)?.label || 'Thématique sportive' }}</span>
                    <i class="fas fa-sort symbol"></i>
                  </div>
                  <Multiselect
                    @select="updateSearch"
                    @deselect="updateSearch"
                    class="theme-multiselect"
                    ref="themeMultiselect"
                    @open="setMultiSelect('theme')"
                    v-model="themeSelection.value"
                    v-bind="themeSelection"
                    style="width: 100%"
                  >
                    <template v-slot:clear><div></div></template>
                  </Multiselect>
                </div>
              </div>
              <div class="d-flex flex-column font-weight-normal px-5 my-4">
                <div class="text-uppercase mb-4 mt-3 letter" style="font-weight: 500">Je filtre si je veux :</div>
                <div class="filter-container activity-filter">
                  <div class="position-relative multi-select-filter">
                    <div class="d-flex align-items-center" style="position: absolute; top: 50%; transform: translateY(-50%); padding-left: 1.5rem; padding-right: 1rem; width: 100%">
                      <InlineSvg class="search-bar__filter__svg" :src="require('@/assets/svg/activity-search.svg')" height="22" />
                      <span class="search-bar__filter__name">Activités</span>
                      <i class="fas fa-sort ml-auto symbol"></i>
                    </div>
                    <Multiselect
                      @select="updateSearch"
                      @deselect="updateSearch"
                      class="activity-multiselect"
                      ref="activityMultiselect"
                      @open="setMultiSelect('activity')"
                      v-model="activitySelection.value"
                      v-bind="activitySelection"
                      style="width: 100%"
                    >
                      <template v-slot:clear><div></div></template>
                    </Multiselect>
                  </div>
                  <div class="tags-container"></div>
                </div>
                <div class="filter-container country-filter">
                  <div class="position-relative multi-select-filter">
                    <div class="d-flex align-items-center" style="position: absolute; top: 50%; transform: translateY(-50%); padding-left: 1.5rem; padding-right: 1rem; width: 100%">
                      <InlineSvg class="search-bar__filter__svg" :src="require('@/assets/svg/globe.svg')" height="22" />
                      <span class="search-bar__filter__name">Pays</span>
                      <i class="ml-auto fas fa-sort symbol"></i>
                    </div>
                    <Multiselect
                      @select="updateSearch"
                      @deselect="updateSearch"
                      class="country-multiselect"
                      ref="countryMultiselect"
                      @open="setMultiSelect('country')"
                      v-model="countrySelection.value"
                      v-bind="countrySelection"
                      style="width: 100%"
                    >
                      <template v-slot:clear><div></div></template>
                    </Multiselect>
                  </div>
                  <div class="tags-container"></div>
                </div>
                <div v-if="activitySelection.value.length + countrySelection.value.length > 0 || $route.query.spot" class="filter-container spot-filter">
                  <div class="position-relative multi-select-filter">
                    <div class="d-flex align-items-center" style="position: absolute; top: 50%; transform: translateY(-50%); padding-left: 1.5rem; padding-right: 1rem; width: 100%">
                      <InlineSvg class="search-bar__filter__svg" :src="require('@/assets/svg/map-pin.svg')" height="22" />
                      <span class="search-bar__filter__name">Spot</span>
                      <i class="fas fa-sort ml-auto symbol"></i>
                    </div>
                    <Multiselect
                      @select="updateSearch"
                      @deselect="updateSearch"
                      class="spot-multiselect"
                      ref="spotMultiselect"
                      @open="setMultiSelect('spot')"
                      v-model="spotSelection.value"
                      v-bind="spotSelection"
                      style="width: 100%"
                    >
                      <template v-slot:clear><div></div></template>
                    </Multiselect>
                  </div>
                  <div class="tags-container"></div>
                </div>
                <div class="filter-container month-filter">
                  <div class="position-relative multi-select-filter">
                    <div class="d-flex align-items-center" style="position: absolute; top: 50%; transform: translateY(-50%); padding-left: 1.5rem; padding-right: 1rem; width: 100%">
                      <InlineSvg class="search-bar__filter__svg" :src="require('@/assets/svg/date-search.svg')" height="22" />
                      <span class="search-bar__filter__name">Mois de départ</span>
                      <i class="fas fa-sort ml-auto symbol"></i>
                    </div>
                    <Multiselect
                      @select="updateSearch"
                      @deselect="updateSearch"
                      class="month-multiselect"
                      ref="monthMultiselect"
                      @open="setMultiSelect('month')"
                      v-model="monthSelection.value"
                      v-bind="monthSelection"
                      style="width: 100%"
                    >
                      <template v-slot:clear><div></div></template>
                    </Multiselect>
                  </div>
                  <div class="tags-container"></div>
                </div>
                <div class="filter-container level-filter">
                  <div class="position-relative multi-select-filter">
                    <div class="d-flex align-items-center" style="position: absolute; top: 50%; transform: translateY(-50%); padding-left: 1.5rem; padding-right: 1rem; width: 100%">
                      <InlineSvg class="search-bar__filter__svg" :src="require('@/assets/svg/intensity-2-dark.svg')" height="22" />
                      <span class="search-bar__filter__name">Niveau</span>
                      <i class="fas fa-sort ml-auto symbol"></i>
                    </div>
                    <Multiselect
                      @select="updateSearch"
                      @deselect="updateSearch"
                      class="level-multiselect"
                      ref="levelMultiselect"
                      @open="setMultiSelect('level')"
                      v-model="levelSelection.value"
                      v-bind="levelSelection"
                      style="width: 100%"
                    >
                      <template v-slot:clear><div></div></template>
                    </Multiselect>
                  </div>
                  <div class="tags-container"></div>
                </div>
                <div class="custom-radio-container d-flex justify-content-between">
                  <div class="custom-control custom-radio">
                    <input v-model="dateConfirmed" type="checkbox" id="filterdepart" name="room" class="custom-control-input" />
                    <label class="custom-control-label" for="filterdepart">Départ confirmé</label>
                  </div>
                  <div class="custom-control custom-radio">
                    <input v-model="lastPlaces" type="checkbox" id="filterplace" name="room" class="custom-control-input" />
                    <label class="custom-control-label" for="filterplace">Dernières places</label>
                  </div>
                </div>
              </div>
            </div>
            <!-- <button class="btn btn-block clear-btn border-0 rounded-0">Effacer les 4 critères de sélection</button> -->
            <button @click="clearFilters" class="btn btn-block clear-btn border-0 rounded-0">Supprimer tous les filtres</button>
          </div>
          <div class="d-flex flex-column col-12 col-lg-8 ml-auto">
            <vue-element-loading :active="loading" spinner="spinner" color="#d82558" background-color="transparent" />
            <!-- NOTE NORMAL -->
            <div v-show="!loading" class="d-flex position-relative mb-5" v-for="normalResult in normalResults" :key="normalResult">
              <div class="col-4 col-md-4 p-0">
                <div class="position-relative w-100 h-100">
                  <a href="/checkout"
                    ><img class="img-fluid img-fill" fluid :src="normalResult?.cover" /> <img class="img-fluid position-pink d-none d-md-block" fluid :src="require('@/assets/images/pink.png')"
                  /></a>
                </div>
              </div>
              <div class="d-flex fg-1">
                <div class="d-flex flex-column justify-content-between shadow--right" style="z-index: 1; flex-grow: 1; background-color: rgb(255, 255, 255, 0.96)">
                  <div class="pad__content">
                    <div class="text-uppercase pad__content__title font-weight-bold d-flex align-items-center">
                      <span class="pad__content__title__sport">{{ normalResult?.sports[0].name }}</span>
                      <span class="pad__content__title__spot font-weight-normal"><i class="fas fa-caret-right mx-3"></i>{{ normalResult.spot.name }}</span>
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
                        <InlineAvatars :avatars="avatarKeys" outline-color="white" :heart="false" spacing="-10px" mt="0.5rem" mb="0rem" />
                        <div class="pad__content__price text-right">
                          <div class="pad__content__price__info" style="font-weight: 300">par pers. :</div>
                          <div class="pad__content__price__euro">
                            <span class="euro"
                              >{{ normalResult?.price >= 1000 ? `${normalResult?.price.toString()[0]} ${normalResult?.price.toString().slice(-3)}` : normalResult?.price }}&hairsp;&euro;</span
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex pad__footer">
                    <div class="inline-product-infos-container">
                      <InlineProductInfos
                        :infos="[normalResult.country.name, `${normalResult.duration} jours`, normalResult.level.name, `${normalResult.max} places`]"
                        :icons="['globe', 'timer', 'intensity-2-dark', 'people']"
                        color="#292f33"
                        pb="0.8rem"
                        pt="0.8rem"
                        width="100%"
                        font-weight="400"
                        letter-spacing="0.07rem"
                      />
                    </div>
                  </div>
                </div>
                <!-- TODO changement de content au hover, et hover en gris -->
                <div class="d-inline-block pad__content p-0" style="width: 50px; height: min-content">
                  <div class="pad__content__month-block shadow" :class="{ 'pad__content__month-block--with-sessions': sessionsArr.includes('01') }"><span>Janv.</span></div>
                  <div class="pad__content__month-block shadow" :class="{ 'pad__content__month-block--with-sessions': sessionsArr.includes('02') }"><span>Fév.</span></div>
                  <div class="pad__content__month-block shadow" :class="{ 'pad__content__month-block--with-sessions': sessionsArr.includes('03') }"><span>Mars</span></div>
                  <div class="pad__content__month-block shadow" :class="{ 'pad__content__month-block--with-sessions': sessionsArr.includes('04') }"><span>Avr.</span></div>
                  <div class="pad__content__month-block shadow" :class="{ 'pad__content__month-block--with-sessions': sessionsArr.includes('05') }"><span>Mai</span></div>
                  <div class="pad__content__month-block shadow" :class="{ 'pad__content__month-block--with-sessions': sessionsArr.includes('06') }"><span>Juin</span></div>
                  <div class="pad__content__month-block shadow" :class="{ 'pad__content__month-block--with-sessions': sessionsArr.includes('07') }"><span>Juil.</span></div>
                  <div class="pad__content__month-block shadow" :class="{ 'pad__content__month-block--with-sessions': sessionsArr.includes('08') }"><span>Août</span></div>
                  <div class="pad__content__month-block shadow" :class="{ 'pad__content__month-block--with-sessions': sessionsArr.includes('09') }"><span>Sept.</span></div>
                  <div class="pad__content__month-block shadow" :class="{ 'pad__content__month-block--with-sessions': sessionsArr.includes('10') }"><span>Oct.</span></div>
                  <div class="pad__content__month-block shadow" :class="{ 'pad__content__month-block--with-sessions': sessionsArr.includes('11') }"><span>Nov.</span></div>
                  <div class="pad__content__month-block shadow" :class="{ 'pad__content__month-block--with-sessions': sessionsArr.includes('12') }"><span>Déc.</span></div>
                </div>
              </div>
            </div>
            <!-- NOTE LAST SESSION -->
            <div class="d-flex position-relative mb-5" v-for="lastSessionResult in lastSessionResults" :key="lastSessionResult">
              <div class="col-4 col-md-4 p-0" style="box-shadow: -1px 0px 6px rgba(41, 47, 51, 0.04)">
                <div class="position-relative w-100 h-100">
                  <a href="/checkout"
                    ><img class="img-fluid img-fill" fluid :src="require('@/assets/images/asset-1.png')" />
                    <img class="img-fluid position-pink d-none d-md-block" fluid :src="require('@/assets/images/pink.png')"
                  /></a>
                </div>
                <div
                  class="d-flex justify-content-around align-items-center"
                  style="position: absolute; bottom: 0; width: 100%; background-color: white; padding: 0.8rem 2rem; font-size: 0.75rem; text-transform: uppercase; height: 50px"
                >
                  <div><span style="font-weight: bold">1 place &nbsp;</span>restante</div>
                  <div class="divider"></div>
                  <div>Session du 24 décembre</div>
                </div>
              </div>
              <div class="d-flex fg-1">
                <div class="d-flex flex-column justify-content-between shadow--right" style="z-index: 1; flex-grow: 1; background-color: rgb(255, 255, 255, 0.96)">
                  <div class="pad__content">
                    <div class="text-uppercase pad__content__title font-weight-bold d-flex align-items-center">
                      <span class="pad__content__title__sport">{{ lastSessionResult.sports[0]?.name }}</span>
                      <span class="pad__content__title__spot font-weight-normal"><i class="fas fa-caret-right mx-3"></i>{{ lastSessionResult.spot.name }}</span>
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
                      <span class="pad__content__avatars-title text-uppercase mb-0 d-none d-lg-inline-block"> <span>Trippers inscrits&nbsp;</span><span>à cette session :</span> </span>
                      <div class="d-flex justify-content-between">
                        <InlineAvatars :avatars="[1, 2, 3, 4, 5, 6, 7, 8]" outline-color="white" :heart="false" spacing="-10px" mt="0.5rem" mb="0rem" />
                        <div class="pad__content__price text-right">
                          <div class="pad__content__price__info" style="font-weight: 300">par pers.</div>
                          <div class="pad__content__price__euro">{{ lastSessionResult.price }}&euro;</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex pad__footer">
                    <div class="inline-product-infos-container">
                      <InlineProductInfos
                        :infos="[lastSessionResult.country.name, `${lastSessionResult.duration} jours`, lastSessionResult.level, `${lastSessionResult.max} places`]"
                        :icons="['globe', 'timer', 'intensity-2-white', 'people']"
                        color="#292f33"
                        pb="0.8rem"
                        pt="0.8rem"
                        width="100%"
                        font-weight="400"
                        letter-spacing="0.07rem"
                      />
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
            <!-- NOTE TRIP REQUEST -->
            <div class="d-flex position-relative mb-5" v-for="requestedTripResult in requestedTripResults" :key="requestedTripResult">
              <div class="col-4 col-md-4 p-0">
                <div class="position-relative w-100 h-100">
                  <a href="/checkout"
                    ><img class="img-fluid img-fill" fluid :src="require('@/assets/images/asset-1.png')" />
                    <img class="img-fluid position-pink d-none d-md-block" fluid :src="require('@/assets/images/pink.png')"
                  /></a>
                </div>
              </div>
              <div class="d-flex fg-1">
                <div class="d-flex flex-column justify-content-between shadow--right" style="z-index: 1; flex-grow: 1; background-color: rgb(255, 255, 255, 0.96)">
                  <div class="pad__content">
                    <div class="text-uppercase pad__content__title font-weight-bold d-flex align-items-center">
                      <span class="pad__content__title__sport">{{ requestedTripResult.sports[0]?.name }}</span>
                      <span class="pad__content__title__spot font-weight-normal"><i class="fas fa-caret-right mx-3"></i>{{ requestedTripResult.spot.name }}</span>
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
                      <span class="pad__content__avatars-title text-uppercase mb-0 d-none d-lg-inline-block"> <span>Trippers intéressés :</span> </span>
                      <div class="d-flex justify-content-between">
                        <InlineAvatars :avatars="[1, 2, 3, 4, 5, 6, 7, 8]" outline-color="white" :heart="false" spacing="-10px" mt="0.5rem" mb="0rem" />
                        <div class="pad__content__price text-right">
                          <div class="pad__content__price__info" style="font-weight: 300">par pers.</div>
                          <div class="pad__content__price__euro">{{ requestedTripResult.price }}&euro;</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex pad__footer">
                    <div class="inline-product-infos-container">
                      <InlineProductInfos
                        :infos="[requestedTripResult.country.name, `${requestedTripResult.duration} jours`, requestedTripResult.level.name]"
                        :icons="['globe', 'timer', 'intensity-2-white']"
                        color="#292f33"
                        pb="0.8rem"
                        pt="0.8rem"
                        width="100%"
                        font-weight="400"
                        letter-spacing="0.07rem"
                      />
                    </div>
                    <Button
                      style="cursor: default"
                      text-color="#292f33"
                      text="Sur devis"
                      background-color="#ebebeb"
                      px="1.5rem"
                      size=".8rem"
                      width="max-content"
                      weight="bold"
                      height="inherit"
                      icon="globe"
                    />
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
            <!-- NOTE disabled for now because pagination not set up in ransack -->
            <div v-if="false" class="position-relative d-flex justify-content-center">
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
import { gsap } from 'gsap'

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
      loading: false,
      avatarKeys: [],
      queryParams: '',
      dateConfirmed: '',
      lastPlaces: '',
      sortedBy: '',
      sessionsArr: [],
      normalResults: [],
      lastSessionResults: [],
      requestedTripResults: [],
      freeSearch: '',
      themeSelection: {
        hideSelected: false,
        noOptionsText: 'La liste est vide',
        value: '',
        openDirection: 'down',
        caret: false,
        options: [],
        createTag: false
      },
      activitySelection: {
        hideSelected: false,
        noOptionsText: 'La liste est vide',
        mode: 'tags',
        value: [],
        openDirection: 'top',
        caret: false,
        options: [],
        createTag: true
      },
      countrySelection: {
        hideSelected: false,
        noOptionsText: 'La liste est vide',
        mode: 'tags',
        value: [],
        openDirection: 'top',
        caret: false,
        options: [],
        createTag: true
      },
      spotSelection: {
        hideSelected: false,
        noOptionsText: 'La liste est vide',
        mode: 'tags',
        value: [],
        openDirection: 'top',
        caret: false,
        options: [],
        createTag: true
      },
      monthSelection: {
        hideSelected: false,
        noOptionsText: 'La liste est vide',
        mode: 'tags',
        value: [],
        openDirection: 'top',
        caret: false,
        options: [
          { value: '1', label: 'Janvier' },
          { value: '2', label: 'Février' },
          { value: '3', label: 'Mars' },
          { value: '4', label: 'Avril' },
          { value: '5', label: 'Mai' },
          { value: '6', label: 'Juin' },
          { value: '7', label: 'Juillet' },
          { value: '8', label: 'Août' },
          { value: '9', label: 'Septembre' },
          { value: '10', label: 'Octobre' },
          { value: '11', label: 'Novembre' },
          { value: '12', label: 'Décembre' }
        ],
        createTag: true
      },
      levelSelection: {
        hideSelected: false,
        noOptionsText: 'La liste est vide',
        mode: 'tags',
        value: [],
        openDirection: 'top',
        caret: false,
        options: [],
        createTag: true
      },
      filtered: {
        countryArr: [],
        activityArr: [],
        levelArr: [],
        spotArr: [],
        themeArr: []
      },
      slideUpSearchBar: null
    }
  },
  computed: {
    selectionIsEmpty() {
      return this.levelSelection.value.length + this.countrySelection.value.length + this.spotSelection.value.length + this.monthSelection.value.length + this.activitySelection.value.length === 0
    }
  },
  watch: {
    selectionIsEmpty(val) {
      if (val) this.resetFilters()
    },
    $route() {
      if (this.$route.query) {
        // this.submitSearchForm()
      }
    },
    normalResults(val) {
      if (val.length) {
        let arr = []
        val.forEach((result) => {
          if (!result.sessions) return

          result.sessions.forEach((session) => {
            console.log('SESSION:', session)
            // push month of departure
            arr.push(session.dateStart.split('-')[1])
            this.sessionsArr = [...new Set(arr)]
            // retrieve participants
            // val.wishlistUsers.forEach((user) => this.avatarKeys.push(user.avatarKey))
          })
        })
      }
    },
    'countrySelection.value': {
      deep: true,
      handler(val) {
        if (val.length) this.submitSearchForm()

        if (window.scrollY > 25) return

        if (val.length) this.slideUpSearchBar.play()
        else if (!this.countrySelection.value.length) this.slideUpSearchBar.reverse()
      }
    }
  },
  methods: {
    resetFilters() {
      this.activitySelection.options.map((el) => (el.disabled = false))
      this.countrySelection.options.map((el) => (el.disabled = false))
      this.spotSelection.options.map((el) => (el.disabled = false))
      this.levelSelection.options.map((el) => (el.disabled = false))
      this.fetching = false
    },
    clearFilters() {
      this.$refs.countryMultiselect.clear()
      this.$refs.spotMultiselect.clear()
      this.$refs.levelMultiselect.clear()
      this.$refs.activityMultiselect.clear()
      this.resetFilters()
      this.fetching = false
    },
    sortByPrice() {
      if (this.sortedBy === 'descPrice') {
        this.normalResults.sort((a, b) => a.price - b.price) // ascending order
        this.sortedBy = 'ascPrice'
      } else {
        this.normalResults.sort((a, b) => a.price + b.price) // descending order
        this.sortedBy = 'descPrice'
      }
    },
    sortByDuration() {
      if (this.sortedBy === 'descDuration') {
        this.normalResults.sort((a, b) => a.duration - b.duration) // ascending order
        this.sortedBy = 'ascDuration'
      } else {
        this.normalResults.sort((a, b) => a.duration + b.duration) // descending order
        this.sortedBy = 'descDuration'
      }
    },
    sortByDate() {
      if (this.sortedBy === 'descDate') {
        this.normalResults.sort((a, b) => a.country.name.localeCompare(b.country.name)) // ascending order
        this.sortedBy = 'ascDate'
      } else {
        this.normalResults.sort((a, b) => b.country.name.localeCompare(a.country.name)) // descending order
        this.sortedBy = 'descDate'
      }
    },
    updateSearch() {
      this.submitSearchForm()
    },
    submitSearchForm() {
      this.filtered.themesArr = []
      this.filtered.activityArr = []
      this.filtered.levelArr = []
      this.filtered.countryArr = []
      this.filtered.spotArr = []
      this.resetFilters()

      this.loading = true

      this.$axios
        .post('/courses/search', {
          free_search: this.freeSearch,
          q: {
            sports_sport_categories_id_in: this.themeSelection.value,
            sports_id_in: this.activitySelection.value,
            level_id_in: this.levelSelection.value,
            spot_country_id_in: this.countrySelection.value,
            spot_id_in: this.spotSelection.value,
            sessions_month_of_departure_in: this.monthSelection.value
          },
          sessions_last_places_eq: this.lastPlaces,
          sessions_confirmed_eq: this.dateConfirmed
        })
        .then((res) => {
          // console.log(res.data.courses[0].sports.map((el) => console.log(el)))
          res.data.courses.forEach((course) => {
            this.filtered.activityArr.push(course.sports.map((sport) => sport.id))
            this.filtered.countryArr.push(course.country.id)
            this.filtered.spotArr.push(course.spot.id)
            this.filtered.levelArr.push(course.level.id)
          })

          this.activitySelection.options.map((el) => Object.assign(el, { disabled: true }))
          this.filtered.activityArr.flat().forEach((id) => {
            this.activitySelection.options.find((option) => option.value === id).disabled = false
          })

          this.countrySelection.options.map((el) => Object.assign(el, { disabled: true }))
          this.filtered.countryArr.flat().forEach((id) => {
            this.countrySelection.options.find((option) => option.value === id).disabled = false
          })

          this.spotSelection.options.map((el) => Object.assign(el, { disabled: true }))
          this.filtered.spotArr.flat().forEach((id) => {
            this.spotSelection.options.find((option) => option.value === id).disabled = false
          })

          this.levelSelection.options.map((el) => Object.assign(el, { disabled: true }))
          this.filtered.levelArr.flat().forEach((id) => {
            this.levelSelection.options.find((option) => option.value === id).disabled = false
          })

          this.normalResults = res.data.courses
          this.loading = false
        })
        .catch((err) => (this.loading = false))
    },
    setMultiSelect(which) {
      let filterDropdown = document.querySelector(`.${which}-multiselect .multiselect-options`)
      this.$nextTick(function () {
        filterDropdown.scrollTo({ top: filterDropdown.scrollHeight * -1 })
      })
    }
  },
  created() {
    let queryParams = this.$route.query

    this.$axios.get('/sport-categories').then((res) => {
      res.data.sportCategories.forEach((theme) => {
        this.themeSelection.options.push({ value: theme.id, label: theme.name })
      })

      if (queryParams.theme) {
        if (Array.isArray(queryParams.theme)) queryParams.theme.forEach((id) => this.$refs.themeMultiselect.select(id))
        else this.$refs.themeMultiselect.select(queryParams.theme)
      }
    })
    this.$axios.get('/sports').then((res) => {
      res.data.sports.forEach((sport) => {
        this.activitySelection.options.push({ value: sport.id, label: sport.name })
      })

      if (queryParams.activity) {
        if (Array.isArray(queryParams.activity)) queryParams.activity.forEach((id) => this.$refs.activityMultiselect.select(id))
        else this.$refs.activityMultiselect.select(queryParams.activity)
      }
    })
    this.$axios.get('/countries').then((res) => {
      res.data.countries.forEach((country) => {
        this.countrySelection.options.push({ value: country.id, label: country.name })
      })

      if (queryParams.country) {
        if (Array.isArray(queryParams.country)) queryParams.country.forEach((id) => this.$refs.countryMultiselect.select(id))
        else this.$refs.countryMultiselect.select(queryParams.country)
      }
    })
    this.$axios.get('/spots').then((res) => {
      res.data.spots.forEach((spot) => {
        this.spotSelection.options.push({ value: spot.id, label: spot.name })
      })

      if (queryParams.spot) {
        if (Array.isArray(queryParams.spot)) queryParams.spot.forEach((id) => this.$refs.spotMultiselect.select(id))
        else this.$refs.spotMultiselect.select(queryParams.spot)
      }
    })
    this.$axios.get('/levels').then((res) => {
      res.data.levels.forEach((level) => {
        this.levelSelection.options.push({ value: level.id, label: level.name })
      })

      if (queryParams.level) {
        if (Array.isArray(queryParams.level)) queryParams.level.forEach((id) => this.$refs.levelMultiselect.select(id))
        else this.$refs.levelMultiselect.select(queryParams.level)
      }
    })

    if (queryParams) this.submitSearchForm()
  },
  mounted() {
    this.slideUpSearchBar = gsap.timeline({ paused: true }).to('.search-bar', { y: '-=25', ease: 'power4.inOut' })
    document.querySelectorAll('.multiselect-tags').forEach((tagContainer) => {
      tagContainer.closest('.filter-container').querySelector('.tags-container')?.append(tagContainer)
    })
    this.$root.initialLoading = false
  }
}
</script>

<style scoped>
.filter-div {
  width: 40%;
  margin-left: auto;
}
.sort-by-button {
  transition: background 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 2px solid #f1f1f1;
}
.sort-by-button:last-of-type {
  border-right: 2px solid #f1f1f1;
}
.sort-by-button:hover {
  background-color: #ebebeb;
}
.search-filter-div {
  display: flex;
  padding-right: calc((100vw - 1444px) / 2);
}
.search-container {
  outline: 8px solid rgba(247, 247, 247, 0.58);
  background-color: #fff;
  margin-bottom: 1rem;
}
.search-bar__filter__svg {
  padding-right: 1rem;
}
.search-bar__filter__name {
  margin-left: 1rem;
  vertical-align: middle;
  font-weight: 400;
}

.tags-container {
  height: 2.5rem;
}
.tags-container .multiselect-tags .multiselect-tag {
  transform: none;
}
.multi-select-filter {
  box-shadow: 0px 0px 1px rgba(41, 47, 51, 0.2);
  transition: all 0.3s ease !important;
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
.pad__content__month-block--with-sessions {
  color: #fff;
  background-color: #292f33;
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
