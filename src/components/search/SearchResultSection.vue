<template>
  <div>
    <section class="result-section">
      <div class="search-filter-div bg-white">
        <a class="px-3 bg-danger d-flex align-items-center justify-content-around text-white home-ref" href="index.html"><i class="fa fa-chevron-left"></i> <span class="d-none d-lg-inline-block">ACCUEIL</span></a>
        <div class="result-div d-flex align-items-center p-3 px-5 px-lg-3">
          <h4 class="pr-4 mr-2 mb-0 border-right border-dark count text-right font-weight-normal d-none d-md-block">
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
            <li><img class="mr-2 ml-3 icons" fluid :src="require('@/assets/images/globe_dark.png')" />FRANCE</li>
            <li><img class="mr-2 ml-3 icons" fluid :src="require('@/assets/images/cal.png')" />Décembre</li>
          </ul>
        </div>
        <a class="px-3 bg-dark d-flex d-lg-none align-items-center justify-content-around text-white menu-ref border-left" href="index.html"><img fluid :src="require('@/assets/images/mob-menu.png')" /></a>
        <div class="filter-div d-none d-md-flex">
          <button class="btn bg-white text-dark rounded-0 text-uppercase">Prix <i class="fas fa-long-arrow-alt-up ml-4 symbol"></i></button>
          <button class="btn bg-white text-dark rounded-0 text-uppercase">Date de depart<i class="fas fa-sort ml-4 symbol"></i></button>
          <button class="btn bg-white text-dark rounded-0 text-uppercase">Durée<i class="fas fa-sort ml-4 symbol"></i></button>
          <div class="search-container d-flex align-items-center flex-1">
            <label for="search-input" class="mb-0"><img class="mx-3" fluid :src="require('@/assets/images/search.png')" /></label>
            <input id="search-input" class="form-control border-0 rounded-0" type="text" name="" placeholder="Tape ici ta recherche manuelle …" />
          </div>
        </div>
      </div>
      <div class="result-block">
        <div class="container">
          <div class="row">
            <div class="col-12 col-lg-3 pr-lg-0 d-none d-lg-block">
              <div class="bg-dark text-white d-flex justify-content-between font-weight-normal py-4 px-5 text-uppercase filter-head mb-1">
                MES FILTRES :
                <span class="font-weight-bold">4 selections</span>
              </div>
              <div class="py-4 px-5 theme-div">
                <div class="theme-dropdown position-relative">
                  <select class="form-control select-theme border-0 rounded-0 text-capitalize">
                    <option selected="" value="" disabled="" hidden="">Thématiques</option>
                    <option value="">qwerty</option>
                    <option value="">asdfgh</option>
                    <option value="">sdfghj</option>
                  </select>
                </div>
              </div>
              <div class="py-4 px-5 filter-body bg-white font-weight-normal">
                <div class="text-uppercase mb-4 mt-3 letter">TU PEUX ENCORE affiner :</div>
                <div class="position-relative multi-select-filter">
                  <select id="my-activitysearch" name="character" multiple="multiple" class="multi-select-option activity-dropdown">
                    <option value="Peter">Surf</option>
                    <option value="Lois">Lois Griffin</option>
                    <option value="Chris">Chris Griffin</option>
                    <option value="Meg">Meg Griffin</option>
                    <option value="Stewie">Stewie Griffin</option>
                    <option value="Cleveland">Cleveland Brown</option>
                    <option value="Joe">Joe Swanson</option>
                    <option value="Quagmire">Glenn Quagmire</option>
                    <option value="Evil Monkey">Evil Monkey</option>
                    <option value="Herbert">John Herbert</option>
                  </select>
                </div>
                <div class="position-relative multi-select-filter">
                  <select id="my-place" name="character" multiple="multiple" class="multi-select-option place-dropdown">
                    <option value="Peter">France</option>
                    <option value="Lois">Lois Griffin</option>
                    <option value="Chris">Chris Griffin</option>
                    <option value="Meg">Meg Griffin</option>
                    <option value="Stewie">Stewie Griffin</option>
                    <option value="Cleveland">Cleveland Brown</option>
                    <option value="Joe">Joe Swanson</option>
                    <option value="Quagmire">Glenn Quagmire</option>
                    <option value="Evil Monkey">Evil Monkey</option>
                    <option value="Herbert">John Herbert</option>
                  </select>
                </div>
                <div class="position-relative multi-select-filter">
                  <select id="my-spot" name="character" multiple="multiple" class="multi-select-option spot-dropdown">
                    <option value="Peter">Peter Griffin</option>
                    <option value="Lois">Lois Griffin</option>
                    <option value="Chris">Chris Griffin</option>
                    <option value="Meg">Meg Griffin</option>
                    <option value="Stewie">Stewie Griffin</option>
                    <option value="Cleveland">Cleveland Brown</option>
                    <option value="Joe">Joe Swanson</option>
                    <option value="Quagmire">Glenn Quagmire</option>
                    <option value="Evil Monkey">Evil Monkey</option>
                    <option value="Herbert">John Herbert</option>
                  </select>
                </div>
                <div class="position-relative multi-select-filter">
                  <select id="my-depart" name="character" multiple="multiple" class="multi-select-option depart-dropdown">
                    <option value="Peter">Décembre</option>
                    <option value="Lois">Lois Griffin</option>
                    <option value="Chris">Chris Griffin</option>
                    <option value="Meg">Meg Griffin</option>
                    <option value="Stewie">Stewie Griffin</option>
                    <option value="Cleveland">Cleveland Brown</option>
                    <option value="Joe">Joe Swanson</option>
                    <option value="Quagmire">Glenn Quagmire</option>
                    <option value="Evil Monkey">Evil Monkey</option>
                    <option value="Herbert">John Herbert</option>
                  </select>
                </div>
                <div class="position-relative multi-select-filter">
                  <select id="my-level" name="character" multiple="multiple" class="multi-select-option level-dropdown">
                    <option value="Peter">Peter Griffin</option>
                    <option value="Lois">Lois Griffin</option>
                    <option value="Chris">Chris Griffin</option>
                    <option value="Meg">Meg Griffin</option>
                    <option value="Stewie">Stewie Griffin</option>
                    <option value="Cleveland">Cleveland Brown</option>
                    <option value="Joe">Joe Swanson</option>
                    <option value="Quagmire">Glenn Quagmire</option>
                    <option value="Evil Monkey">Evil Monkey</option>
                    <option value="Herbert">John Herbert</option>
                  </select>
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
            <div class="col-12 col-lg-8 ml-auto">
              <ul class="search-result-list list-unstyled">
                <li class="row position-relative">
                  <div class="col-12 col-md-4 p-0">
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
                  <div class="col-12 col-md-8 p-0">
                    <div class="p-4 pt-lg-5 px-lg-5">
                      <div class="d-flex justify-content-between align-items-center">
                        <h1 class="text-uppercase heading font-weight-bold mb-2 d-flex align-items-start align-items-md-center flex-column flex-md-row">
                          yogi &amp; surf
                          <span class="mt-2 mt-md-0 font-weight-normal"><i class="fas fa-caret-right mr-3 mx-md-3"></i>îles canaries</span>
                        </h1>
                        <h2 class="pl-3 mb-0 border-left border-dark text-right font-weight-normal per-count d-md-none">
                          par pers. :
                          <strong class="font-weight-bold d-block mt-2">750 €</strong>
                        </h2>
                      </div>
                      <p class="f-13">Votre emprunte est unique, nos séjours sportifs aussi !<br /><span class="font-weight-900 d-none d-md-inline-block">INCLUS : </span><span class="cap-letter d-none d-md-inline-block">RAFTING - RANDO - VTT DESCENTE - CANONYING</span></p>
                      <ul class="list-unstyled d-flex flex-wrap fun-list mt-4 my-md-4">
                        <li>
                          <span class="badge badge-light">CHALET AUX PIEDS DES PISTES</span>
                        </li>
                        <li>
                          <span class="badge badge-light">Cuisinier privé</span>
                        </li>
                        <li class="d-none d-lg-inline-block">
                          <span class="badge badge-light">Cuisinier privé</span>
                        </li>
                      </ul>
                      <div class="trippers-div d-none d-md-block">
                        <h5 class="sub-heading text-uppercase mb-1 font-weight-normal">
                          <strong class="font-weight-bold">TRIPPERS</strong>
                          inscrits à la session
                        </h5>
                        <div class="d-flex justify-content-between align-items-center">
                          <ul class="img-list list-unstyled d-flex align-items-center mx-3 mb-0">
                            <li>
                              <a href="#"><img class="img-fill" fluid :src="require('@/assets/images/ui_faces/1.jpg')" /></a>
                            </li>
                            <li>
                              <a href="#"><img class="img-fill" fluid :src="require('@/assets/images/ui_faces/2.jpg')" /></a>
                            </li>
                            <li>
                              <a href="#"><img class="img-fill" fluid :src="require('@/assets/images/ui_faces/3.jpg')" /></a>
                            </li>
                            <li>
                              <a href="#"><img class="img-fill" fluid :src="require('@/assets/images/ui_faces/4.jpg')" /></a>
                            </li>
                            <li>
                              <a href="#"><img class="img-fill" fluid :src="require('@/assets/images/ui_faces/2.jpg')" /></a>
                            </li>
                            <li>
                              <a href="#"><img class="img-fill" fluid :src="require('@/assets/images/ui_faces/3.jpg')" /></a>
                            </li>
                          </ul>
                          <h2 class="pl-3 mb-0 border-left border-dark text-right font-weight-normal per-count">
                            par pers. :
                            <strong class="font-weight-bold d-block mt-2">750 €</strong>
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div class="py-2 px-lg-5 px-4 bottom-search-div">
                      <ul class="list-unstyled text-uppercase list-info d-flex justify-content-between align-items-center">
                        <li><img class="mr-2 icons" fluid :src="require('@/assets/images/globe_dark.png')" />france</li>
                        <li><img class="mr-2 icons" fluid :src="require('@/assets/images/circle_d.png')" />confirmé</li>
                        <li><img class="mr-2 icons" fluid :src="require('@/assets/images/timer_d.png')" />8 jours</li>
                        <li class="d-none d-md-inline-block"><img class="mr-2 icons" fluid :src="require('@/assets/images/places_d.png')" />10 places</li>
                      </ul>
                    </div>
                    <button class="btn btn-block btn-dark border-0 rounded-0 d-md-none py-3 text-uppercase discover-btn">Découvre ce séjour</button>
                  </div>
                  <div class="vertical-month d-none d-lg-inline-block">
                    <ul class="list-unstyled months-list">
                      <li><a href="#">Janv.</a></li>
                      <li><a href="#">Fev.</a></li>
                      <li><a href="#">Mars</a></li>
                      <li><a href="#">Avr.</a></li>
                      <li>
                        <a class="active" href="#" data-toggle="tooltip" data-placement="right" title="2 dates disponibles">Mai</a>
                      </li>
                      <li><a href="#">Juin</a></li>
                      <li>
                        <a class="active" href="#" data-toggle="tooltip" data-placement="right" title="2 dates disponibles">Juil.</a>
                      </li>
                      <li>
                        <a class="active" href="#" data-toggle="tooltip" data-placement="right" title="2 dates disponibles">Août</a>
                      </li>
                      <li><a href="#">Sept.</a></li>
                      <li><a href="#">Oct.</a></li>
                      <li><a href="#">Nov.</a></li>
                      <li><a class="completed" href="#">Déc.</a></li>
                    </ul>
                  </div>
                </li>
                <li class="row position-relative">
                  <div class="col-12 col-md-4 p-0">
                    <div class="position-relative w-100 h-100">
                      <a href="/checkout"><img class="img-fluid img-fill" fluid :src="require('@/assets/images/asset-1.png')" /> <img class="img-fluid position-pink d-none d-md-block" fluid :src="require('@/assets/images/pink.png')" /></a>
                      <div class="py-2 px-lg-4 px-2 depart-div">
                        <a href="#" class="depart-text text-white d-flex align-items-center h-100 font-weight-normal"
                          ><i class="fas fa-plane-departure mr-2"></i>24 au 2 décembre
                          <span class="ml-auto place-count text-uppercase"><strong>2 places</strong> restantes</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-md-8 p-0">
                    <div class="p-4 pt-lg-5 px-lg-5">
                      <div class="d-flex justify-content-between align-items-center">
                        <h1 class="text-uppercase heading font-weight-bold mb-2 d-flex align-items-start align-items-md-center flex-column flex-md-row">
                          yogi &amp; surf
                          <span class="mt-2 mt-md-0 font-weight-normal"><i class="fas fa-caret-right mr-3 mx-md-3"></i>îles canaries</span>
                        </h1>
                        <h2 class="pl-3 mb-0 border-left border-dark text-right font-weight-normal per-count d-md-none">
                          par pers. :
                          <strong class="font-weight-bold d-block mt-2">750 €</strong>
                        </h2>
                      </div>
                      <p class="f-13">Votre emprunte est unique, nos séjours sportifs aussi !<br /><span class="font-weight-900 d-none d-md-inline-block">INCLUS : </span><span class="cap-letter d-none d-md-inline-block">RAFTING - RANDO - VTT DESCENTE - CANONYING</span></p>
                      <ul class="list-unstyled d-flex flex-wrap fun-list mt-4 my-md-4">
                        <li>
                          <span class="badge badge-light">CHALET AUX PIEDS DES PISTES</span>
                        </li>
                        <li>
                          <span class="badge badge-light">Cuisinier privé</span>
                        </li>
                        <li class="d-none d-lg-inline-block">
                          <span class="badge badge-light">Cuisinier privé</span>
                        </li>
                      </ul>
                      <div class="trippers-div d-none d-md-block">
                        <h5 class="sub-heading text-uppercase mb-1 font-weight-normal">
                          <strong class="font-weight-bold">TRIPPERS</strong>
                          inscrits à la session
                        </h5>
                        <div class="d-flex justify-content-between align-items-center">
                          <ul class="img-list list-unstyled d-flex align-items-center mx-3 mb-0">
                            <li>
                              <a href="#"><img class="img-fill" fluid :src="require('@/assets/images/ui_faces/1.jpg')" /></a>
                            </li>
                            <li>
                              <a href="#"><img class="img-fill" fluid :src="require('@/assets/images/ui_faces/2.jpg')" /></a>
                            </li>
                            <li>
                              <a href="#"><img class="img-fill" fluid :src="require('@/assets/images/ui_faces/3.jpg')" /></a>
                            </li>
                            <li>
                              <a href="#"><img class="img-fill" fluid :src="require('@/assets/images/ui_faces/4.jpg')" /></a>
                            </li>
                            <li>
                              <a href="#"><img class="img-fill" fluid :src="require('@/assets/images/ui_faces/2.jpg')" /></a>
                            </li>
                            <li>
                              <a href="#"><img class="img-fill" fluid :src="require('@/assets/images/ui_faces/3.jpg')" /></a>
                            </li>
                          </ul>
                          <h2 class="pl-3 mb-0 border-left border-dark text-right font-weight-normal per-count">
                            par pers. :
                            <strong class="font-weight-bold d-block mt-2">750 €</strong>
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div class="py-2 px-lg-5 px-4 bottom-search-div">
                      <ul class="list-unstyled text-uppercase list-info d-flex justify-content-between align-items-center">
                        <li><img class="mr-2 icons" fluid :src="require('@/assets/images/globe_dark.png')" />france</li>
                        <li><img class="mr-2 icons" fluid :src="require('@/assets/images/circle_d.png')" />confirmé</li>
                        <li><img class="mr-2 icons" fluid :src="require('@/assets/images/timer_d.png')" />8 jours</li>
                        <li class="d-none d-md-inline-block"><img class="mr-2 icons" fluid :src="require('@/assets/images/places_d.png')" />10 places</li>
                      </ul>
                    </div>
                    <button class="btn btn-block btn-dark border-0 rounded-0 d-md-none py-3 text-uppercase discover-btn">Découvre ce séjour</button>
                  </div>
                  <div class="vertical-month d-none d-lg-none">
                    <ul class="list-unstyled months-list">
                      <li><a href="#">Janv.</a></li>
                      <li><a href="#">Fev.</a></li>
                      <li><a href="#">Mars</a></li>
                      <li><a href="#">Avr.</a></li>
                      <li>
                        <a class="active" href="#" data-toggle="tooltip" data-placement="right" title="2 dates disponibles">Mai</a>
                      </li>
                      <li><a href="#">Juin</a></li>
                      <li>
                        <a class="active" href="#" data-toggle="tooltip" data-placement="right" title="2 dates disponibles">Juil.</a>
                      </li>
                      <li>
                        <a class="active" href="#" data-toggle="tooltip" data-placement="right" title="2 dates disponibles">Août</a>
                      </li>
                      <li><a href="#">Sept.</a></li>
                      <li><a href="#">Oct.</a></li>
                      <li><a href="#">Nov.</a></li>
                      <li><a class="completed" href="#">Déc.</a></li>
                    </ul>
                  </div>
                </li>
                <li class="row position-relative">
                  <div class="col-12 col-md-4 p-0">
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
                  <div class="col-12 col-md-8 p-0">
                    <div class="p-4 pt-lg-5 px-lg-5">
                      <div class="d-flex justify-content-between align-items-center">
                        <h1 class="text-uppercase heading font-weight-bold mb-2 d-flex align-items-start align-items-md-center flex-column flex-md-row">
                          MULTI-ACTIVITés
                          <span class="mt-2 mt-md-0 font-weight-normal"><i class="fas fa-caret-right mr-3 mx-md-3"></i>SERRE-CHEVALIER</span>
                        </h1>
                        <h2 class="pl-3 mb-0 border-left border-dark text-right font-weight-normal per-count d-md-none">
                          par pers. :
                          <strong class="font-weight-bold d-block mt-2">750 €</strong>
                        </h2>
                      </div>
                      <p class="f-13 d-none">Votre emprunte est unique, nos séjours sportifs aussi !<br /><span class="font-weight-900 d-none d-md-inline-block">INCLUS : </span><span class="cap-letter d-none d-md-inline-block">RAFTING - RANDO - VTT DESCENTE - CANONYING</span></p>
                      <ul class="list-unstyled text-uppercase multi-action-list d-flex align-items-center">
                        <li><img class="mr-2 icons" fluid :src="require('@/assets/images/head-pin-dark.png')" />Ski freeride</li>
                        <li><img class="mr-2 icons" fluid :src="require('@/assets/images/timer_d.png')" />Pilates</li>
                        <li><img class="mr-2 icons" fluid :src="require('@/assets/images/yoga-dark.png')" />Yoga</li>
                      </ul>
                      <ul class="list-unstyled d-flex flex-wrap fun-list mt-4 my-md-4">
                        <li>
                          <span class="badge badge-light">CHALET AUX PIEDS DES PISTES</span>
                        </li>
                        <li>
                          <span class="badge badge-light">Cuisinier privé</span>
                        </li>
                        <li class="d-none d-lg-inline-block">
                          <span class="badge badge-light">Cuisinier privé</span>
                        </li>
                      </ul>
                      <div class="trippers-div d-none d-md-block">
                        <h5 class="sub-heading text-uppercase mb-1 font-weight-normal">
                          <strong class="font-weight-bold">TRIPPERS</strong>
                          inscrits à la session
                        </h5>
                        <div class="d-flex justify-content-between align-items-center">
                          <ul class="img-list list-unstyled d-flex align-items-center mx-3 mb-0">
                            <li>
                              <a href="#"><img class="img-fill" fluid :src="require('@/assets/images/ui_faces/1.jpg')" /></a>
                            </li>
                            <li>
                              <a href="#"><img class="img-fill" fluid :src="require('@/assets/images/ui_faces/2.jpg')" /></a>
                            </li>
                            <li>
                              <a href="#"><img class="img-fill" fluid :src="require('@/assets/images/ui_faces/3.jpg')" /></a>
                            </li>
                            <li>
                              <a href="#"><img class="img-fill" fluid :src="require('@/assets/images/ui_faces/4.jpg')" /></a>
                            </li>
                            <li>
                              <a href="#"><img class="img-fill" fluid :src="require('@/assets/images/ui_faces/2.jpg')" /></a>
                            </li>
                            <li>
                              <a href="#"><img class="img-fill" fluid :src="require('@/assets/images/ui_faces/3.jpg')" /></a>
                            </li>
                          </ul>
                          <h2 class="pl-3 mb-0 border-left border-dark text-right font-weight-normal per-count">
                            par pers. :
                            <strong class="font-weight-bold d-block mt-2">750 €</strong>
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div class="py-2 px-lg-5 px-4 bottom-search-div">
                      <ul class="list-unstyled text-uppercase list-info d-flex justify-content-between align-items-center">
                        <li><img class="mr-2 icons" fluid :src="require('@/assets/images/globe_dark.png')" />france</li>
                        <li><img class="mr-2 icons" fluid :src="require('@/assets/images/circle_d.png')" />confirmé</li>
                        <li><img class="mr-2 icons" fluid :src="require('@/assets/images/timer_d.png')" />8 jours</li>
                        <li class="d-none d-md-inline-block"><img class="mr-2 icons" fluid :src="require('@/assets/images/places_d.png')" />10 places</li>
                      </ul>
                    </div>
                    <button class="btn btn-block btn-dark border-0 rounded-0 d-md-none py-3 text-uppercase discover-btn">Découvre ce séjour</button>
                  </div>
                  <div class="vertical-month d-none d-lg-inline-block">
                    <ul class="list-unstyled months-list">
                      <li><a href="#">Janv.</a></li>
                      <li><a href="#">Fev.</a></li>
                      <li><a href="#">Mars</a></li>
                      <li><a href="#">Avr.</a></li>
                      <li>
                        <a class="active" href="#" data-toggle="tooltip" data-placement="right" title="2 dates disponibles">Mai</a>
                      </li>
                      <li><a href="#">Juin</a></li>
                      <li>
                        <a class="active" href="#" data-toggle="tooltip" data-placement="right" title="2 dates disponibles">Juil.</a>
                      </li>
                      <li>
                        <a class="active" href="#" data-toggle="tooltip" data-placement="right" title="2 dates disponibles">Août</a>
                      </li>
                      <li><a href="#">Sept.</a></li>
                      <li><a href="#">Oct.</a></li>
                      <li><a href="#">Nov.</a></li>
                      <li><a class="completed" href="#">Déc.</a></li>
                    </ul>
                  </div>
                </li>
              </ul>
              <div class="more-div position-relative">
                <button class="btn btn-danger more-btn d-block mx-auto text-center text-uppercase">J’en veux plus</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bottom-section py-5">
      <div class="container">
        <div class="row mb-5 text-center text-uppercase">
          <div class="col-12">
            <p class="mb-0 text-capitalize sub-head">Tripper</p>
            <h2 class="heading"><strong>rappel</strong> toi</h2>
          </div>
        </div>
        <div class="row text-center text-uppercase pt-md-5 pt-lg-0">
          <div class="col-12 col-md-10 mx-auto">
            <div class="row">
              <div class="col-12 col-sm-6 col-lg-3">
                <img class="user_icon" fluid :src="require('@/assets/images/fprint.png')" />
                <h6 class="sub-heading my-1 font-weight-bold">conseils & suivi</h6>
                <p class="para-points">avant et pendant ton sejour</p>
              </div>
              <div class="col-12 col-sm-6 col-lg-3">
                <img class="user_icon" fluid :src="require('@/assets/images/lab.png')" />
                <h6 class="sub-heading my-1 font-weight-bold">creer et personnalise</h6>
                <p class="para-points">ton propre stage</p>
              </div>
              <div class="col-12 col-sm-6 col-lg-3">
                <img class="user_icon" fluid :src="require('@/assets/images/chef-hat.png')" />
                <h6 class="sub-heading my-1 font-weight-bold">organisation</h6>
                <p class="para-points">made in heaven trip</p>
              </div>
              <div class="col-12 col-sm-6 col-lg-3">
                <img class="user_icon" fluid :src="require('@/assets/images/mic.png')" />
                <h6 class="sub-heading my-1 font-weight-bold">discute avant le depart</h6>
                <p class="para-points">avec les autres participants</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'SearchResultSection',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      url: '#'
    }
  }
}
</script>
