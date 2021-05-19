<template>
  <div class="stay-dropdown d-block d-lg-none">
    <select class="form-control select-place">
      <option selected="" value="#pills-info">INFOS SéJOUR</option>
      <option value="#pills-activityspot">ACTIVITéS & spot</option>
      <option value="#pills-place">VIE SUR PLACE</option>
      <option value="#pills-programe">PROGRAMME</option>
      <option value="#pills-tips">TIPS & ASTUCES</option>
      <option value="#pills-opinion">VOS AVIS</option>
    </select>
  </div>
  <ul class="bg-white nav nav-pills nav-justified mb-3 text-uppercase font-weight-bold narrow-header-pills d-none d-lg-flex" id="pills-tab " role="tablist">
    <li class="nav-item" role="presentation">
      <a class="nav-link" id="pills-info-tab" data-toggle="pill" href="#pills-info" role="tab" aria-controls="pills-info" aria-selected="false">INFOS SéJOUR</a>
    </li>
    <li class="nav-item" role="presentation">
      <a class="nav-link active" id="pills-activityspot-tab" data-toggle="pill" href="#pills-activityspot" role="tab" aria-controls="pills-activityspot" aria-selected="true">Activités & spot</a>
    </li>
    <li class="nav-item" role="presentation">
      <a class="nav-link" id="pills-place-tab" data-toggle="pill" href="#pills-place" role="tab" aria-controls="pills-place" aria-selected="false">VIE SUR PLACE</a>
    </li>
    <li class="nav-item" role="presentation">
      <a class="nav-link" id="pills-programe-tab" data-toggle="pill" href="#pills-programe" role="tab" aria-controls="pills-programe" aria-selected="false">PROGRAMME</a>
    </li>
    <li class="nav-item" role="presentation">
      <a class="nav-link" id="pills-tips-tab" data-toggle="pill" href="#pills-tips" role="tab" aria-controls="pills-tips" aria-selected="false">TIPS & ASTUCES</a>
    </li>
    <li class="nav-item" role="presentation">
      <a class="nav-link" id="pills-opinion-tab" data-toggle="pill" href="#pills-opinion" role="tab" aria-controls="pills-opinion" aria-selected="false">VOS AVIS</a>
    </li>
  </ul>
  <div class="tab-content main-tab" id="pills-tabContent">
    <div class="tab-pane fade" id="pills-info" role="tabpanel" aria-labelledby="pills-info-tab">qwertyu</div>
    <div class="tab-pane fade show active" id="pills-activityspot" role="tabpanel" aria-labelledby="pills-activityspot-tab">
      <div class="container">
        <div class="row zero-margin">
          <div class="col col-12 col-lg-8">
            <div class="linear-block plain-block mt-lg-4">
              <div class="head-block py-3 d-flex justify-content-center justify-content-lg-start align-items-center">
                <div class="left-border pl-3">
                  <p class="sub-heading mb-2">En bref</p>
                  <h4 class="heading mb-0">TON SÉJOUR</h4>
                </div>
                <span class="activity-head img-block d-none d-lg-flex align-items-center ml-auto"><img class="img_icon" fluid :src="require('@/assets/images/head-pin-dark.png')" /><img class="img_icon" fluid :src="require('@/assets/images/yoga-dark.png')" /></span>
              </div>
              <div class="card-body">
                <h6 class="activity-head d-flex d-lg-none align-items-center mb-3">
                  Les activités inclues :
                  <span class="img-block d-flex ml-auto"
                    ><img class="img_icon" fluid :src="require('@/assets/images/head-pin-dark.png')" /><img class="img_icon" fluid :src="require('@/assets/images/yoga-dark.png')" /><img class="img_icon" fluid :src="require('@/assets/images/head-pin-dark.png')" /><img
                      class="img_icon"
                      fluid
                      :src="require('@/assets/images/yoga-dark.png')"
                  /></span>
                </h6>
                <p class="content mt-3 mb-4">
                  Vous avez un niveau expert avec une bonne expérience de la pratique du hors-piste, vous pouvez descendre toutes les pentes, dans toutes les conditions ‘ Vous maitrisez l’utilisation des appareils de sécurité ‘ Découvrez ce programme hors-piste d’exception pour skier les plus belles
                  pentes des Hautes-Pyrénées : Saint Lary, Piau-Engaly, Peyragudes et Baqueira-Beret, la station du roi d’Espagne, plus grand domaine espagnol. Vous maitrisez l’utilisation des appareils de
                  <span class="collapse" id="viewMore">sécurité ‘ Découvrez ce programme hors-piste d’exception pour skier les plus belles pentes des Hautes-Pyrénées : Saint Lary, Piau-Engaly, Peyragudes et Baqueira-Beret, la station du roi d’Espagne, plus grand domaine espagnol.</span>
                </p>
                <a class="view-more-btn full_width" data-toggle="collapse" href="#viewMore" role="button" aria-expanded="false" aria-controls="viewMore">Voir plus <i class="fas fa-chevron-down ml-2"></i></a>
                <div class="row">
                  <div class="col-9 col-lg-12 mx-auto">
                    <div class="like-div">
                      <h5 class="content-head">Vous allez adorez :</h5>
                      <ul class="list-unstyled text-uppercase content-list">
                        <li>
                          <a class="text-reset" href="#"><i class="fas fa-plus mr-2"></i>CHALET AUX PIEDS DES PISTES</a>
                        </li>
                        <li>
                          <a class="text-reset" href="#"><i class="fas fa-plus mr-2"></i>Cuisinier privé</a>
                        </li>
                        <li>
                          <a class="text-reset" href="#"><i class="fas fa-plus mr-2"></i>DESTINATIONS FESTIVES</a>
                        </li>
                        <li>
                          <a class="text-reset" href="#"><i class="fas fa-plus mr-2"></i>Bain finlandais</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="linear-block">
              <div class="head-block py-3 d-flex justify-content-center justify-content-lg-start">
                <div class="left-border pl-3">
                  <p class="sub-heading mb-2">Suis-je prêt ?</p>
                  <h4 class="heading mb-0">Niveaux & intensité</h4>
                </div>
                <h6 class="need-level text-uppercase d-none d-lg-flex align-items-center ml-auto mb-0">
                  <img class="img_icon mr-2" fluid :src="require('@/assets/images/svg/PICTO_GRILLE_NIVEAUX.svg')" />
                  grille Des <br />niveaux
                </h6>
              </div>
              <div class="card-body p-lg-0">
                <div class="row">
                  <div class="col-12 col-lg-6">
                    <div class="grid-pin align-items-center my-lg-5 mt-0 mb-5">
                      <div class="pin-circle">
                        <img class="img_icon" fluid :src="require('@/assets/images/head-pin-pink.png')" />
                      </div>
                      <span class="ml-3">
                        <h6 class="level-text">NIVEAUX : <strong class="ml-2">3</strong>/4</h6>
                        <h6 class="status-text mb-0">CONFIRMé</h6>
                      </span>
                    </div>
                    <div class="d-flex">
                      <h6 class="need-head text-uppercase">En <strong>Ski Freeride</strong> il faut :</h6>
                      <h6 class="need-level text-uppercase d-flex d-lg-none align-items-center ml-auto">
                        <img class="img_icon mr-2" fluid :src="require('@/assets/images/svg/PICTO_GRILLE_NIVEAUX.svg')" />
                        grille Des <br />niveaux
                      </h6>
                    </div>
                    <ul class="list-unstyled need-list pl-4">
                      <li><i class="fa fa-check text-danger mr-3"></i> Vous pratiquez et maitrisez la discipline comme un Jedi</li>
                      <li><i class="fa fa-check text-danger mr-3"></i> Vous pratiquez et maitrisez la discipline</li>
                      <li><i class="fa fa-check text-danger mr-3"></i> Vous pratiquez et maitrisez la discipline</li>
                    </ul>
                  </div>
                  <div class="col-12 col-lg-6">
                    <div class="grid-pin align-items-center my-lg-5 mt-0 mb-5">
                      <div class="pin-circle">
                        <img class="img_icon" fluid :src="require('@/assets/images/head-pin-pink.png')" />
                      </div>
                      <span class="ml-3">
                        <h6 class="level-text">
                          INTENSITé physique :
                          <strong class="ml-2">4</strong>/4
                        </h6>
                        <h6 class="status-text mb-0">Sans les mains</h6>
                      </span>
                    </div>
                    <div class="d-flex">
                      <h6 class="need-head text-uppercase"><strong>Condition</strong> physique :</h6>
                    </div>
                    <p class="content">Vous tenez un effort physique avec intervalles sur de longues périodes avec un minimum de récupération. Vous tenez un effort physique avec intervalles.</p>
                  </div>
                </div>
              </div>
              <div class="head-block py-3 d-flex justify-content-center justify-content-lg-start mb-0 mb-lg-3 mt-lg-5">
                <div class="left-border pl-3">
                  <p class="sub-heading mb-2">Bon a savoir…</p>
                  <h4 class="heading mb-0">Prestations & équipements</h4>
                </div>
              </div>
              <div class="card-body py-0 p-lg-0">
                <div class="row">
                  <div class="col-12 col-lg-6">
                    <h5 class="content-head equip"><i class="far fa-check-circle mr-2 h4 align-text-top mb-0"></i>EST INCLUS :</h5>
                    <ul class="list-unstyled content-list equip">
                      <li>
                        <a class="text-reset" href="#">Hébergement 6 nuits / 7 jours </a>
                      </li>
                      <li>
                        <a class="text-reset" href="#">Demi-pension (matin & soir) </a>
                      </li>
                      <li>
                        <a class="text-reset" href="#">20H de cours de Freeride </a>
                      </li>
                      <li>
                        <a class="text-reset" href="#">Location du matériel (équipement complet) </a>
                      </li>
                      <li>
                        <a class="text-reset" href="#">Transferts Hébergement / Piste de ski </a>
                      </li>
                      <li>
                        <a class="text-reset" href="#">Bain Finlandais </a>
                      </li>
                      <li>
                        <a class="text-reset" href="#">Accès piscine de la station</a>
                      </li>
                    </ul>
                  </div>
                  <div class="col-12 col-lg-6">
                    <h5 class="content-head equip"><i class="far fa-times-circle mr-2 h4 align-text-top mb-0"></i>Non INCLUS :</h5>
                    <ul class="list-unstyled content-list equip">
                      <li>
                        <a class="text-reset" href="#">Forfait des remontée mécaniques</a>
                      </li>
                      <li>
                        <a class="text-reset" href="#">Les boissons (alcool / soda)</a>
                      </li>
                      <li><a class="text-reset" href="#">Le visa</a></li>
                    </ul>
                    <h5 class="content-head equip"><i class="far fa-dot-circle mr-2 h4 align-text-top mb-0"></i>En options :</h5>
                    <ul class="list-unstyled content-list equip">
                      <li>
                        <a class="text-reset" href="#">Pack assurance</a>
                      </li>
                      <li><a class="text-reset" href="#">Transports</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="block-separator"></div>
            <div class="">
              <div class="head-block linear-block plain-block py-3 d-flex justify-content-center justify-content-lg-start align-items-center">
                <div class="left-border pl-3">
                  <p class="sub-heading mb-2">Je veux en savoir + !</p>
                  <h4 class="heading mb-0">ACTIVITé PRINCIPALE</h4>
                </div>
              </div>
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
                    <h6 class="head text-uppercase text-white py-2">Mot du pro…</h6>
                    <p class="content">Lorem ipsum dolor sit amet, solum dictas vim cu, ne his hendrerit deterruisset, id sed doctus fuisset intellegam. Per case melius assentior ea. Et scaevola insolens eum. Ad vix verear eruditi ncillae, fabulas.</p>
                    <h6 class="author mb-0">Edouard du Thin - Moniteur Ski / Snow</h6>
                  </div>
                  <div class="img-block">
                    <img class="img-fill" fluid :src="require('@/assets/images/ui_faces/1.jpg')" />
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion" id="">
              <div class="linear-block">
                <div class="card border-0 rounded-0">
                  <div class="card-header p-0 border-0 rounded-0" id="headingTwo">
                    <div class="head-block py-3 px-4 px-lg-0 mb-lg-3 d-flex justify-content-between align-items-center" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                      <div class="left-border pl-3 ml-3 ml-lg-0">
                        <p class="sub-heading mb-2">Wouah</p>
                        <h4 class="heading mb-0">Le spot</h4>
                      </div>
                      <i class="fa fa-chevron-down h4 mb-0 arrow text-white d-block d-lg-none"></i>
                      <h6 class="map-head d-none d-lg-flex align-items-center justify-content-end mr-4 m-lg-0 text-danger">
                        VOIR SUR <br />LA MAP<span class="img-block"><img class="img_icon" fluid :src="require('@/assets/images/map_icon.png')" /></span>
                      </h6>
                    </div>
                  </div>
                  <div id="collapseTwo" class="collapse show" aria-labelledby="headingTwo">
                    <div class="card-body">
                      <h6 class="map-head d-flex d-lg-none align-items-center justify-content-end mb-3 mr-4">
                        VOIR SUR <br />LA MAP<span class="img-block"><img class="img_icon" fluid :src="require('@/assets/images/map_icon.png')" /></span>
                      </h6>
                      <p class="content">
                        Vous avez un niveau expert avec une bonne expérience de la pratique du hors-piste, vous pouvez descendre toutes les pentes, dans toutes les conditions ‘ Vous maitrisez l’utilisation des appareils de sécurité ‘ Découvrez ce programme hors-piste d’exception pour skier les plus
                        belles pentes des Hautes-Pyrénées : Saint Lary, Piau-Engaly, Peyragudes et Baqueira-Beret, la station du roi d’Espagne, plus grand domaine espagnol. Vous maitrisez l’utilisation des appareils de
                        <span class="collapse" id="viewMoreToggle">sécurité ‘ Découvrez ce programme hors-piste d’exception pour skier les plus belles pentes des Hautes-Pyrénées : Saint Lary, Piau-Engaly, Peyragudes et Baqueira-Beret, la station du roi d’Espagne, plus grand domaine espagnol.</span>
                      </p>
                      <a class="view-more-btn full_width" data-toggle="collapse" href="#viewMoreToggle" role="button" aria-expanded="false" aria-controls="viewMoreToggle">Voir plus <i class="fas fa-chevron-down ml-2"></i></a>
                      <div class="row">
                        <div class="col-9 col-lg-12 mx-auto">
                          <div class="like-div white">
                            <h5 class="content-head">LES + DU SPOT</h5>
                            <ul class="list-unstyled text-uppercase content-list">
                              <li>
                                <a class="text-reset" href="#"><i class="fas fa-plus mr-2"></i>Restauration sur place</a>
                              </li>
                              <li>
                                <a class="text-reset" href="#"><i class="fas fa-plus mr-2"></i>Vous avez pieds</a>
                              </li>
                              <li>
                                <a class="text-reset" href="#"><i class="fas fa-plus mr-2"></i>Plan d’eau flat</a>
                              </li>
                              <li>
                                <a class="text-reset" href="#"><i class="fas fa-plus mr-2"></i>Spot à vagues</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="linear-block">
                <div class="head-block py-3 d-flex justify-content-center justify-content-lg-start">
                  <div class="left-border pl-3 ml-3 ml-lg-0">
                    <p class="sub-heading mb-2">Oh Yeah !</p>
                    <h4 class="heading mb-0">aCTIVItés incluses</h4>
                  </div>
                </div>
                <div class="card-body">
                  <div class="row">
                    <div class="col-12 col-lg-6">
                      <div class="box bg-white">
                        <h5 class="head text-uppercase mb-0 d-inline-block text-danger">
                          <img class="head-pin-icon d-inline-block" fluid :src="require('@/assets/images/yoga-pink.png')" /><i class="fas fa-caret-right mx-3 pr-1 h4 mb-0"></i>
                          YOGA
                        </h5>
                        <ul class="list-unstyled list mt-3 mb-0">
                          <li>
                            <a href="#" class="text-decoration-none">
                              HEURES DE PRATIQUE :
                              <strong class="text-dark ml-2"> 20H</strong></a
                            >
                          </li>
                          <li>
                            <a href="#" class="text-decoration-none">
                              Séances :
                              <strong class="text-dark ml-2"> 3</strong></a
                            >
                          </li>
                          <li>
                            <a href="#" class="text-decoration-none">
                              Type :
                              <strong class="text-dark ml-2">
                                Ashtanga
                                <i class="fas fa-info-circle text-dark ml-2 h5 align-middle mb-0"></i></strong
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-12 col-lg-6">
                      <div class="box bg-white">
                        <h5 class="head text-uppercase mb-0 d-inline-block text-danger">
                          <img class="head-pin-icon d-inline-block" fluid :src="require('@/assets/images/yoga-pink.png')" /><i class="fas fa-caret-right mx-3 pr-1 h4 mb-0"></i>
                          YOGA
                        </h5>
                        <ul class="list-unstyled list mt-3 mb-0">
                          <li>
                            <a href="#" class="text-decoration-none">
                              HEURES DE PRATIQUE :
                              <strong class="text-dark ml-2"> 20H</strong></a
                            >
                          </li>
                          <li>
                            <a href="#" class="text-decoration-none">
                              Séances :
                              <strong class="text-dark ml-2"> 3</strong></a
                            >
                          </li>
                          <li>
                            <a href="#" class="text-decoration-none">
                              Type :
                              <strong class="text-dark ml-2">
                                Ashtanga
                                <i class="fas fa-info-circle text-dark ml-2 h5 align-middle mb-0"></i></strong
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card border-0 rounded-0">
                  <div class="card-header p-0 border-0 rounded-0" id="headingOne">
                    <div class="head-block py-3 px-4 px-lg-0 mt-lg-5 mb-lg-4 d-flex justify-content-between align-items-center collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      <div class="left-border pl-3 ml-3 ml-lg-0">
                        <p class="sub-heading mb-2">Personnalise !</p>
                        <h4 class="heading mb-0">aCTIVItés en option</h4>
                      </div>
                      <i class="fa fa-chevron-down h4 mb-0 arrow text-white"></i>
                    </div>
                  </div>

                  <div id="collapseOne" class="collapse show" aria-labelledby="headingOne">
                    <div class="card-body">
                      <p class="content">En cas de mauvaises conditions météorologiques ou autres facteurs empêchants la pratique de votre activité principale, nous proposons des activités de remplacement inclus dans le prix.</p>
                      <ul class="activity-list list-unstyled">
                        <li>
                          <h5 class="activity-list-head mb-0"><img class="icon" fluid :src="require('@/assets/images/yoga-pink.png')" />Plongée sous-marine</h5>
                          <ul class="list-unstyled text-uppercase activity-content-list mb-0">
                            <li>Durée : <strong>1 journée</strong></li>
                            <li>plongée : <strong>2</strong></li>
                            <li>Niveaux requis : <strong>aucun</strong></li>
                            <li><strong>60€</strong>/pers.</li>
                          </ul>
                        </li>
                        <li>
                          <h5 class="activity-list-head mb-0"><img class="icon" fluid :src="require('@/assets/images/yoga-pink.png')" />SUP-PADDLE</h5>
                          <ul class="list-unstyled text-uppercase activity-content-list mb-0">
                            <li>Durée : <strong>2h</strong></li>
                            <li>Tendance : <strong>eau calme</strong></li>
                            <li><strong>15€</strong>/pers.</li>
                          </ul>
                        </li>
                        <li>
                          <h5 class="activity-list-head mb-0"><img class="icon" fluid :src="require('@/assets/images/yoga-pink.png')" />SPA TRADITIONNEL</h5>
                          <ul class="list-unstyled text-uppercase activity-content-list mb-0">
                            <li>Durée : <strong>1/2 journée</strong></li>
                            <li>plongée : <strong>2</strong></li>
                            <li>Niveaux requis : <strong>aucun</strong></li>
                            <li><strong>60€</strong>/pers.</li>
                          </ul>
                        </li>
                        <li>
                          <h5 class="activity-list-head mb-0"><img class="icon" fluid :src="require('@/assets/images/yoga-pink.png')" />SUP-PADDLE</h5>
                          <ul class="list-unstyled text-uppercase activity-content-list mb-0">
                            <li>Durée : <strong>2h</strong></li>
                            <li>Tendance : <strong>eau calme</strong></li>
                            <li><strong>15€</strong>/pers.</li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="block-separator"></div>
              <div class="linear-block">
                <div class="card border-0 rounded-0">
                  <div class="card-header p-0 border-0 rounded-0" id="headingThree">
                    <div class="head-block py-3 px-4 px-lg-0 mb-lg-5 d-flex justify-content-between align-items-center collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                      <div class="left-border pl-3 ml-3 ml-lg-0">
                        <p class="sub-heading mb-2">Sur place…</p>
                        <h4 class="heading mb-0">Hébergement</h4>
                      </div>
                      <i class="fa fa-chevron-down h4 mb-0 arrow text-white"></i>
                    </div>
                  </div>
                  <div id="collapseThree" class="collapse show" aria-labelledby="headingThree">
                    <div class="card-body">
                      <div class="d-flex align-items-center mb-4">
                        <h5 class="head text-uppercase mb-0 font-weight-bold text-danger mb-0"><img class="d-inline-block" fluid :src="require('@/assets/images/svg/PICTO_HEBERGEMENT.svg')" /><i class="fas fa-caret-right mr-2 ml-3 pr-1 h4 mb-0"></i><strong class="d-lg-none">Hébergement</strong></h5>
                        <ul class="nav nav-pills mb-0 text-uppercase font-weight-bold d-none d-lg-flex accommodation-nav" id="pills-tab " role="tablist">
                          <li class="nav-item" role="presentation">
                            <a class="nav-link active ml-0" id="pills-solo-tab" data-toggle="pill" href="#pills-solo" role="tab" aria-controls="pills-solo" aria-selected="true">BUNGALOW SOLO</a>
                          </li>
                          <li class="nav-item" role="presentation">
                            <a class="nav-link" id="pills-duo-tab" data-toggle="pill" href="#pills-duo" role="tab" aria-controls="pills-duo" aria-selected="false">BUNGALOW DUO</a>
                          </li>
                          <li class="nav-item" role="presentation">
                            <a class="nav-link mr-0" id="pills-vip-tab" data-toggle="pill" href="#pills-vip" role="tab" aria-controls="pills-vip" aria-selected="false">BUNGALOW VIP</a>
                          </li>
                        </ul>
                      </div>
                      <div class="stay-dropdown d-block d-lg-none">
                        <select class="form-control select-place">
                          <option value="#pills-solo">BUNGALOW SOLO</option>
                          <option value="#pills-duo">BUNGALOW DUO</option>
                          <option value="#pills-vip">BUNGALOW VIP</option>
                        </select>
                      </div>
                      <div class="tab-content">
                        <div class="tab-pane fade show active" id="pills-solo" role="tabpanel" aria-labelledby="pills-solo-tab">
                          <p class="content">
                            Un des meilleurs terrain de jeu pour s’initier et se perfectionner en kitesurf. Les débutants s’y sentent en sécurité grâce au plan d’eau de faible profondeur. En cas de mauvaises
                            <span class="collapse show" id="viewMoreOptions">conditions météorologiques. Les débutants s’y sentent en sécurité grâce au plan d’eau de faible profondeur.</span>
                          </p>
                        </div>
                        <div class="tab-pane fade" id="pills-duo" role="tabpanel" aria-labelledby="pills-duo-tab">qwertyu</div>
                        <div class="tab-pane fade" id="pills-vip" role="tabpanel" aria-labelledby="pills-vip-tab">qwertyu</div>
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
                      <div class="image-flexbox px-3 mb-3">
                        <div class="row galary-grid">
                          <div class="col-12 col-lg img-container py-3 mb-0">
                            <img class="img-fill" fluid :src="require('@/assets/images/unsplashx.png')" />
                          </div>
                          <div class="col-12 col-lg img-container py-3 mb-0">
                            <img class="img-fill" fluid :src="require('@/assets/images/unsplashx.png')" />
                          </div>
                          <div class="col-12 col-lg-5 img-container py-3 mb-0">
                            <img class="img-fill" fluid :src="require('@/assets/images/unsplashx.png')" />
                          </div>
                          <div class="col-12 col-lg img-container py-3 mb-0">
                            <img class="img-fill" fluid :src="require('@/assets/images/unsplashx.png')" />
                            <div class="overlay-count">+21</div>
                          </div>
                        </div>
                      </div>
                      <p class="small-info">Pour assurer les départs, les hébergements sur les visuels sont susceptibles d’être différents selon les disponibilités et le nombre de participants.</p>
                      <a class="view-more-btn full_width d-lg-none" data-toggle="collapse" href="#viewMoreOptions" role="button" aria-expanded="true" aria-controls="viewMoreOptions">VOIR LES OPTIONS <i class="fas fa-chevron-down ml-2"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="linear-block">
                <div class="card border-0 rounded-0">
                  <div class="card-header p-0 border-0 rounded-0" id="headingFour">
                    <div class="head-block py-3 px-4 mb-lg-2 px-lg-0 d-flex justify-content-between align-items-center collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                      <div class="left-border pl-3 ml-3 ml-lg-0">
                        <p class="sub-heading mb-2">Chef !</p>
                        <h4 class="heading mb-0">LES repas</h4>
                      </div>
                      <i class="fa fa-chevron-down h4 mb-0 arrow text-white"></i>
                    </div>
                  </div>
                  <div id="collapseFour" class="collapse show" aria-labelledby="headingFour">
                    <div class="card-body">
                      <p class="content mb-5">Un des meilleurs terrain de jeu pour s’initier et se perfectionner en kitesurf. Les débutants s’y sentent en sécurité grâce au plan d’eau de faible profondeur.</p>
                      <div class="row">
                        <div class="col-12 col-lg-6">
                          <h5 class="head text-uppercase font-weight-bold text-danger mb-4">
                            <img class="d-inline-block" fluid :src="require('@/assets/images/svg/PICTO_CUISINE.svg')" /><i class="fas fa-caret-right mr-2 ml-3 pr-1 h4 mb-0"></i>
                            Cuisine
                          </h5>
                          <ul class="list-unstyled place-list text-uppercase my-3 mb-0 d-flex flex-wrap flex-column flex-lg-row">
                            <li>
                              <a href="#" class="text-decoration-none">
                                Style :
                                <strong class="text-dark ml-2"> CUISINIER PRIvé</strong></a
                              >
                            </li>
                            <li>
                              <a href="#" class="text-decoration-none border-0 pr-0 mr-0">
                                Repas :
                                <strong class="text-dark ml-2"> matin - soir</strong></a
                              >
                            </li>
                            <li>
                              <a href="#" class="text-decoration-none">
                                Service :
                                <strong class="text-dark ml-2"> domicile</strong></a
                              >
                            </li>
                            <li>
                              <a href="#" class="text-decoration-none">
                                Cuisine :
                                <strong class="text-dark ml-2"> internationale</strong></a
                              >
                            </li>
                          </ul>
                        </div>
                        <div class="col-12 col-lg-6 border-left gray-border">
                          <div class="avatar bg-white pl-lg-5">
                            <h5 class="avatar-head mb-0">
                              <img class="avatar-icon d-inline-block" fluid :src="require('@/assets/images/ui_faces/1.jpg')" /><span class="d-inline-block">
                                <strong class="d-block">Edouard du Thin</strong>
                                Cuisinier
                              </span>
                            </h5>
                            <p class="content mt-3">Un des meilleurs terrain de jeu pour s’initier et se perfectionner en kitesurf. Les débutants s’y sentent en sécurité grâce au plan d’eau de faible profondeur. En cas de mauvaises</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="linear-block plain-block">
                <div class="card border-0 rounded-0">
                  <div class="card-header p-0 border-0 rounded-0" id="headingFive">
                    <div class="head-block py-3 px-4 px-lg-0 mb-lg-4 d-flex justify-content-between align-items-center collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                      <div class="left-border pl-3 ml-3 ml-lg-0">
                        <p class="sub-heading mb-2">Sortons !</p>
                        <h4 class="heading mb-0">A proximité</h4>
                      </div>
                      <i class="fa fa-chevron-down h4 mb-0 arrow text-white"></i>
                    </div>
                  </div>
                  <div id="collapseFive" class="collapse show" aria-labelledby="headingFive">
                    <div class="card-body">
                      <p class="content">
                        Un des meilleurs terrain de jeu pour s’initier et se perfectionner en kitesurf. Les débutants s’y sentent en sécurité grâce au plan d’eau de faible profondeur. En cas de mauvaises conditions météorologiques ou autres. En cas de mauvaises conditions météorologiques ou autres.
                        En cas de mauvaises conditions météorologiques.
                      </p>
                      <div>
                        <div class="outer-circle my-5">
                          <div class="items left_top">
                            <img class="d-inline-block" fluid :src="require('@/assets/images/svg/noun_Shopping.svg')" />
                          </div>
                          <div class="items right_bottom">
                            <img class="d-inline-block" fluid :src="require('@/assets/images/svg/noun_Shopping.svg')" />
                          </div>
                          <div class="inner-circle">
                            <div class="items right_top">
                              <img class="d-inline-block" fluid :src="require('@/assets/images/svg/noun_Shopping.svg')" />
                            </div>
                            <div class="items left_bottom">
                              <img class="d-inline-block" fluid :src="require('@/assets/images/svg/noun_Shopping.svg')" />
                            </div>
                            <div class="center-circle"><img class="d-inline-block home" fluid :src="require('@/assets/images/svg/PICTO_HEBERGEMENT_light.svg')" /><img class="d-inline-block mt-n4 map" fluid :src="require('@/assets/images/svg/PICTO_DISTANCE_HEBERGEMENT.svg')" /></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="block-separator"></div>
              <div class="linear-block plain-block">
                <div class="card border-0 rounded-0">
                  <div class="card-header p-0 border-0 rounded-0 bg-white" id="headingSix">
                    <div class="head-block py-3 px-4 px-lg-0 mb-lg-4 d-flex justify-content-between align-items-center collapsed" data-toggle="collapse" data-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
                      <div class="left-border pl-3 ml-3 ml-lg-0">
                        <p class="sub-heading mb-2">Programme</p>
                        <h4 class="heading mb-0">Déroulé du séjour</h4>
                      </div>
                      <i class="fa fa-chevron-down h4 mb-0 arrow text-white"></i>
                    </div>
                  </div>
                  <div id="collapseSix" class="collapse show" aria-labelledby="headingSix">
                    <div class="card-body">
                      <h5 class="tour-head text-uppercase d-flex flex-column flex-lg-row align-items-start align-items-lg-center">
                        <span class="font-weight-bold text-danger">Jour 1</span>
                        <ul class="list-unstyled tour-list text-uppercase ml-auto d-flex flex-column flex-lg-row mb-0">
                          <li><img class="d-inline-block mr-2" fluid :src="require('@/assets/images/svg/PICTO_PLANE_ARRIVAL.svg')" />VOL pour <strong>HURGHADA</strong></li>
                          <li>
                            <img class="d-inline-block mr-2" fluid :src="require('@/assets/images/svg/Picto_transfert_navette.svg')" />Transferts VERS EL GOUNA :
                            <strong>18H 19H 20H</strong>
                          </li>
                        </ul>
                      </h5>
                      <div class="row mb-60">
                        <div class="col-4 d-none d-lg-inline-block">
                          <img class="img-fluid rounded-day-img" fluid :src="require('@/assets/images/beach.jpg')" />
                        </div>
                        <div class="col-12 col-lg-8">
                          <p class="content">
                            A votre sortie de l’aéroport de Hurghada vous serez directement pris en charge par une navette pour le transfert à votre Hébergement. Une réunion d’information est prévue le dimanche matin (cet horaire peut évoluer suivant l’arrivée du vol Heaven Trip). Une réunion
                            d’information est prévue le dimanche.
                          </p>
                          <a class="view-more-btn active_hidden" data-toggle="collapse" href="#viewMoreday1" role="button" aria-expanded="false" aria-controls="viewMoreday1">Afficher d’avantage… <i class="fas fa-chevron-down ml-2"></i></a>
                        </div>
                        <div id="viewMoreday1" class="col-12 collapse">
                          <p class="content">
                            <span class="font-weight-800 d-block">Vous voyagez avec Heaven Trip</span>
                            Possibilité de vol dans la nuit du samedi au dimanche. A noter que le choix de vol Paris / Hurghada est très limité, et contraignant : l’arrivée tardive dans la nuit de samedi à dimanche certaines semaines peut être à 4. Possibilité de vol dans la nuit du samedi au
                            dimanche. A noter que le choix de vol Paris / Hurghada est très.
                          </p>

                          <a class="view-more-btn" data-toggle="collapse" href="#viewMoreday1" role="button" aria-expanded="false" aria-controls="viewMoreday1">Réduire<i class="fas fa-chevron-up ml-2"></i></a>
                        </div>
                      </div>

                      <h5 class="tour-head text-uppercase font-weight-bold text-danger mt-3">Jour 2</h5>
                      <div class="row">
                        <div class="col-4 d-none d-lg-inline-block">
                          <img class="img-fluid rounded-day-img" fluid :src="require('@/assets/images/beach.jpg')" />
                        </div>
                        <div class="col-12 col-lg-8">
                          <p class="content">
                            A votre sortie de l’aéroport de Hurghada vous serez directement pris en charge par une navette pour le transfert à votre Hébergement. Une réunion d’information est prévue le dimanche matin (cet horaire peut évoluer suivant l’arrivée du vol Heaven Trip). Une réunion
                            d’information est prévue le dimanche.
                          </p>
                          <a class="view-more-btn active_hidden" data-toggle="collapse" href="#viewMoreday2" role="button" aria-expanded="false" aria-controls="viewMoreday2">Afficher d’avantage… <i class="fas fa-chevron-down ml-2"></i></a>
                        </div>
                        <div id="viewMoreday2" class="col-12 collapse">
                          <p class="content">
                            <span class="font-weight-800 d-block">Vous voyagez avec Heaven Trip</span>
                            Possibilité de vol dans la nuit du samedi au dimanche. A noter que le choix de vol Paris / Hurghada est très limité, et contraignant : l’arrivée tardive dans la nuit de samedi à dimanche certaines semaines peut être à 4. Possibilité de vol dans la nuit du samedi au
                            dimanche. A noter que le choix de vol Paris / Hurghada est très.
                          </p>
                          <a class="view-more-btn" data-toggle="collapse" href="#viewMoreday2" role="button" aria-expanded="false" aria-controls="viewMoreday2">Réduire<i class="fas fa-chevron-up ml-2"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="block-separator"></div>
              <div class="linear-block position-relative">
                <div class="card border-0 rounded-0">
                  <div class="card-header p-0 border-0 rounded-0" id="headingSeven">
                    <div class="head-block py-3 px-4 px-lg-0 mb-lg-4 d-flex justify-content-between align-items-center collapsed" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="true" aria-controls="collapseSeven">
                      <div class="left-border pl-3 ml-3 ml-lg-0">
                        <p class="sub-heading mb-2">A savoir</p>
                        <h4 class="heading mb-0">Infos PAYS</h4>
                      </div>
                      <i class="fa fa-chevron-down h4 mb-0 arrow text-white"></i>
                    </div>
                  </div>
                  <div id="collapseSeven" class="collapse show" aria-labelledby="headingSeven">
                    <div class="card-body">
                      <div class="row">
                        <div class="col-12 col-lg-7">
                          <h5 class="pays-head border-0 p-0 text-uppercase font-weight-bold">L’EGYPTE</h5>
                          <p class="content">
                            Vous avez un niveau expert avec une bonne expérience de la pratique du hors-piste, vous pouvez descendre toutes les pentes, dans toutes les conditions ‘ Vous maitrisez l’utilisation des appareils de sécurité ‘ Découvrez ce programme hors-piste d’exception pour skier les
                            plus belles pentes des Hautes-Pyrénées
                          </p>
                        </div>
                      </div>
                      <ul class="list-unstyled place-list f-13 text-uppercase mb-0 d-flex flex-wrap flex-column flex-lg-row">
                        <li>
                          <a href="#" class="text-decoration-none">Aéroport : <strong class="text-dark"> Hurghada</strong></a>
                        </li>
                        <li>
                          <a href="#" class="text-decoration-none"><strong class="text-dark"> Décalage horaires : </strong>+ 0 <i class="fas fa-info-circle text-dark h6 mb-0"></i></a>
                        </li>
                        <li>
                          <a href="#" class="text-decoration-none"><strong class="text-dark"> Décalage horaires : </strong>+ 0 <i class="fas fa-info-circle text-dark h6 mb-0"></i></a>
                        </li>
                        <li>
                          <a href="#" class="text-decoration-none"><strong class="text-dark"> Temps moyen de vol : </strong>3H50 </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="top-positioned-div">
                  <div class="bg-dark pays-block rounded-top text-uppercase">
                    <h6 class="head text-warning font-weight-bold letter-space">
                      <img class="d-inline-block mr-2" fluid :src="require('@/assets/images/svg/PICTO_INFOS_SUPP_CARD_HEBERGEMENT.svg')" />
                      Quelques indicateurs
                    </h6>
                    <ul class="list-unstyled pays-list mb-0">
                      <li><strong class="letter-space">Taxi :</strong> Prix moyen <span class="text-warning ml-1"> 60 EGP</span></li>
                      <li>
                        <strong class="letter-space">Restaurants :</strong>
                        Prix moyen
                        <span class="text-warning ml-1"> 60 EGP</span>
                      </li>
                      <li><strong class="letter-space">Taxi :</strong> Prix moyen <span class="text-warning ml-1"> 60 EGP</span></li>
                    </ul>
                  </div>
                  <button class="btn btn-danger btn-block rounded-0 border-0 pay-btn py-3 text-uppercase mb-5"><img class="d-inline-block mr-3" fluid :src="require('@/assets/images/svg/PICTO_INFOS_SUPP_CARD_HEBERGEMENT.svg')" />VOIR LES INFOs SANITAIRE</button>
                </div>
              </div>
              <div class="linear-block">
                <div class="card border-0 rounded-0">
                  <div class="card-header p-0 border-0 rounded-0" id="headingEight">
                    <div class="head-block py-3 px-4 px-lg-0 mb-lg-5 d-flex justify-content-between align-items-center collapsed" data-toggle="collapse" data-target="#collapseEight" aria-expanded="true" aria-controls="collapseEight">
                      <div class="left-border pl-3 ml-3 ml-lg-0">
                        <p class="sub-heading mb-2">Cadeau !</p>
                        <h4 class="heading mb-0">TIPS & astuces</h4>
                      </div>
                      <i class="fa fa-chevron-down h4 mb-0 arrow text-white"></i>
                    </div>
                  </div>
                  <div id="collapseEight" class="collapse show" aria-labelledby="headingEight">
                    <div class="card-body">
                      <h5 class="pays-head border-0 p-0 text-uppercase font-weight-bold">S’Y RENDRE !</h5>
                      <p class="content">
                        En venant du nord de la France, prenez l’autoroute jusqu’à Grenoble, puis RN 91 “Col du Lautaret”. En venant de l’Italie prenez l’autoroute jusqu’à Oulx (35km de Briançon) puis emprunter le Col de Montgenèvre RN 94. En venant du sud de la France, prenez l’autoroute jusqu’au
                        Tallard, Embrun, Briançon RN 94.
                      </p>
                      <ul class="list-unstyled place-list f-13 text-uppercase my-3 mb-0 d-flex flex-wrap">
                        <li>
                          <a href="#" class="text-decoration-none">
                            AÉROPORTS :
                            <strong class="text-dark ml-2"> LYON - GRENOBLE</strong></a
                          >
                        </li>
                        <li>
                          <a href="#" class="text-decoration-none">
                            GARE :
                            <strong class="text-dark ml-2"> proximité du spot</strong></a
                          >
                        </li>
                        <li>
                          <a href="#" class="text-decoration-none">
                            LIAISONS AUTOCAR :
                            <strong class="text-dark ml-2"> Www.autocars-resalp.com</strong></a
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="card border-0 rounded-0">
                  <div class="card-header p-0 border-0 rounded-0" id="headingNine">
                    <div class="head-block py-3 px-4 px-lg-0 my-lg-5 d-flex justify-content-between align-items-center collapsed" data-toggle="collapse" data-target="#collapseNine" aria-expanded="true" aria-controls="collapseNine">
                      <div class="left-border pl-3 ml-3 ml-lg-0">
                        <p class="sub-heading mb-2">Dans ton paquetage…</p>
                        <h4 class="heading mb-0">A prévoir pour ton séjour</h4>
                      </div>
                      <i class="fa fa-chevron-down h4 mb-0 arrow text-white"></i>
                    </div>
                  </div>
                  <div id="collapseNine" class="collapse show" aria-labelledby="headingNine">
                    <div class="card-body">
                      <div class="row">
                        <div class="col-12 col-lg-5">
                          <div class="shadow-box">
                            <h6 class="head">Indispensable :</h6>
                            <ul class="points list-unstyled mb-0">
                              <li>Chausson de nautisme</li>
                              <li>Sac à dos (environ 20L)</li>
                              <li>Crème solaire visage et corps</li>
                              <li>Lunettes de soleil (avec attaches)</li>
                              <li>Un Lycra manche courte ou longue</li>
                              <li>Maillot de bain</li>
                            </ul>
                          </div>
                        </div>
                        <div class="col-12 col-lg-5">
                          <div class="shadow-box">
                            <h6 class="head">Pour votre confort :</h6>
                            <ul class="points list-unstyled mb-0">
                              <li>Une petite pharmacie,contre</li>
                              <li>Un pull et coupe-vent</li>
                              <li>Chaussures de sports</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="block-separator"></div>
              <div class="">
                <div class="card border-0 rounded-0">
                  <div class="card-header p-0 border-0 rounded-0" id="headingTen">
                    <div class="head-block linear-block plain-block py-3 px-4 px-lg-0 my-0 d-flex justify-content-between justify-content-lg-start align-items-center collapsed" data-toggle="collapse" data-target="#collapseTen" aria-expanded="true" aria-controls="collapseTen">
                      <div class="left-border pl-3 ml-3 ml-lg-0">
                        <p class="sub-heading mb-2">Trippers…</p>
                        <h4 class="heading mb-0">VOS avis…</h4>
                      </div>
                      <i class="fa fa-chevron-down h4 mb-0 arrow text-white text-arrow"></i>
                    </div>
                  </div>
                  <div id="collapseTen" class="collapse show" aria-labelledby="headingTen">
                    <div class="card-body">
                      <div class="linear-block mb-0">
                        <div class="avatar">
                          <div class="row">
                            <div class="col-12 col-lg-10 ml-auto">
                              <h5 class="star-head mb-2 pb-2 d-flex d-lg-block flex-1">
                                <img class="user-icon d-inline-block mx-auto" fluid :src="require('@/assets/images/ui_faces/1.jpg')" />
                                <div class="d-flex align-items-lg-center flex-column flex-lg-row ml-2 ml-lg-0">
                                  <i class="fas fa-quote-left mr-4 chat-quote"></i>
                                  <strong>Remi Flemming</strong>
                                  <span class="d-block d-lg-inline-block"><span class="mx-3 d-none d-lg-inline-block">|</span> <i class="fas fa-map-marker-alt mr-2"></i>Nice <span class="mx-3">|</span> 2 séjours</span>
                                  <div class="text-warning text-right small star-container"><i class="fas fa-star mr-1"></i><i class="fas fa-star mr-1"></i><i class="fas fa-star mr-1"></i><i class="fas fa-star mr-1"></i><i class="far fa-star mr-1"></i></div>
                                  <a class="ml-auto user-profile-link text-reset d-none d-lg-inline-block" href="#">VOIR PROFIL <img class="align-baseline ml-2" fluid :src="require('@/assets/images/ARROW_EXIT.png')" /></a>
                                </div>
                              </h5>
                              <p class="content mb-0">C'est en vivant des émotions puissantes ensemble, que chacun de nous se sent vraiment vivant. Toussa toussa toussa c’est trop cooooool Et hop encore une ligne pour la marmotte ! Toussa toussa toussa Toussa toussa toussa c’est Charlie qui.</p>
                              <div class="text-right date">25 avril 2020</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-12 col-lg-10 mx-auto">
                          <div class="linear-block plain-block my-5">
                            <img class="align-text-bottom ml-n4" fluid :src="require('@/assets/images/svg/noun_Reply.svg')" />
                            <div class="row">
                              <div class="col-12 col-lg-9 ml-auto">
                                <h5 class="star-head mb-2 pb-2 d-flex d-lg-block flex-1 mt-4">
                                  <img class="user-icon d-inline-block" fluid :src="require('@/assets/images/ui_faces/1.jpg')" />
                                  <div class="d-flex align-items-lg-center flex-column flex-lg-row ml-2 ml-lg-0">
                                    <strong>Réponse de Marion :</strong>
                                    <div class="text-right date-text ml-auto">25 avril 2020</div>
                                  </div>
                                </h5>
                                <p class="content mb-0">C'est en vivant des émotions puissantes ensemble, que chacun de nous se sent vraiment vivant. Toussa toussa toussa c’est</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="linear-block mb-0">
                        <div class="avatar">
                          <div class="row">
                            <div class="col-12 col-lg-10 ml-auto">
                              <h5 class="star-head mb-2 pb-2 d-flex d-lg-block flex-1">
                                <img class="user-icon d-inline-block mx-auto" fluid :src="require('@/assets/images/ui_faces/1.jpg')" />
                                <div class="d-flex align-items-lg-center flex-column flex-lg-row ml-2 ml-lg-0">
                                  <i class="fas fa-quote-left mr-4 chat-quote"></i>
                                  <strong>Remi Flemming</strong>
                                  <span class="d-block d-lg-inline-block"><span class="mx-3 d-none d-lg-inline-block">|</span> <i class="fas fa-map-marker-alt mr-2"></i>Nice <span class="mx-3">|</span> 2 séjours</span>
                                  <div class="text-warning text-right small star-container"><i class="fas fa-star mr-1"></i><i class="fas fa-star mr-1"></i><i class="fas fa-star mr-1"></i><i class="fas fa-star mr-1"></i><i class="far fa-star mr-1"></i></div>
                                  <a class="ml-auto user-profile-link text-reset d-none d-lg-inline-block" href="#">VOIR PROFIL <img class="align-baseline ml-2" fluid :src="require('@/assets/images/ARROW_EXIT.png')" /></a>
                                </div>
                              </h5>
                              <p class="content mb-0">C'est en vivant des émotions puissantes ensemble, que chacun de nous se sent vraiment vivant. Toussa toussa toussa c’est trop cooooool Et hop encore une ligne pour la marmotte ! Toussa toussa toussa Toussa toussa toussa c’est Charlie qui.</p>
                              <div class="text-right date">25 avril 2020</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="collapse" id="viewMoreBlog">
                        <div class="linear-block mb-0">
                          <div class="avatar">
                            <div class="row">
                              <div class="col-12 col-lg-10 ml-auto">
                                <h5 class="star-head mb-2 pb-2 d-flex d-lg-block flex-1">
                                  <img class="user-icon d-inline-block mx-auto" fluid :src="require('@/assets/images/ui_faces/1.jpg')" />
                                  <div class="d-flex align-items-lg-center flex-column flex-lg-row ml-2 ml-lg-0">
                                    <i class="fas fa-quote-left mr-4 chat-quote"></i>
                                    <strong>Remi Flemming</strong>
                                    <span class="d-block d-lg-inline-block"><span class="mx-3 d-none d-lg-inline-block">|</span> <i class="fas fa-map-marker-alt mr-2"></i>Nice <span class="mx-3">|</span> 2 séjours</span>
                                    <div class="text-warning text-right small star-container"><i class="fas fa-star mr-1"></i><i class="fas fa-star mr-1"></i><i class="fas fa-star mr-1"></i><i class="fas fa-star mr-1"></i><i class="far fa-star mr-1"></i></div>
                                    <a class="ml-auto user-profile-link text-reset d-none d-lg-inline-block" href="#">VOIR PROFIL <img class="align-baseline ml-2" fluid :src="require('@/assets/images/ARROW_EXIT.png')" /></a>
                                  </div>
                                </h5>
                                <p class="content mb-0">C'est en vivant des émotions puissantes ensemble, que chacun de nous se sent vraiment vivant. Toussa toussa toussa c’est trop cooooool Et hop encore une ligne pour la marmotte ! Toussa toussa toussa Toussa toussa toussa c’est Charlie qui.</p>
                                <div class="text-right date">25 avril 2020</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <a class="view-more-btn full_width mt-4" data-toggle="collapse" href="#viewMoreBlog" role="button" aria-expanded="false" aria-controls="viewMoreBlog">AFFICHER ENCORE PLUS D’AVIS (24) <i class="fas fa-chevron-down ml-2"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-4">
            <div class="">
              <h6 class="galary-head font-weight-bold mb-0 d-flex">
                GALERIE PHOTOS
                <span class="galary-count ml-auto font-weight-normal">24 médias</span>
              </h6>
              <div class="form-row galary-grid mt-3 mb-5">
                <div class="col-8 img-container">
                  <img class="img-fill" fluid :src="require('@/assets/images/unsplashx.png')" />
                </div>
                <div class="col-4 img-container">
                  <img class="img-fill" fluid :src="require('@/assets/images/unsplashx.png')" />
                </div>
                <div class="col-4 img-container">
                  <img class="img-fill" fluid :src="require('@/assets/images/unsplashx.png')" />
                </div>
                <div class="col-8 img-container">
                  <img class="img-fill" fluid :src="require('@/assets/images/unsplashx.png')" />
                </div>
              </div>
              <h6 class="galary-head font-weight-bold mb-4 d-flex">
                DISCUSSIONS
                <span class="count-circle ml-auto font-weight-normal"><i class="fas fa-ellipsis-h"></i></span>
              </h6>
              <ul class="list-unstyled mb-0 discuss-list mt-3">
                <li>
                  <div class="form-row mt-3 mb-5">
                    <div class="col-2">
                      <div class="profile-container">
                        <img class="img-fill" fluid :src="require('@/assets/images/ui_faces/4.jpg')" />
                      </div>
                    </div>
                    <div class="col-10">
                      <h6 class="discuss-head">Helena Brauer <span>Jeudi à 12:37</span></h6>
                      <p class="content-desc">During a project build, it is necessary to evaluate the product design and development against project requirements and outcomes</p>
                      <a href="#" class="reply-text text-reset">LUI REPONDRE</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="form-row mt-3 mb-5">
                    <div class="col-2">
                      <div class="profile-container">
                        <img class="img-fill" fluid :src="require('@/assets/images/ui_faces/1.jpg')" />
                      </div>
                    </div>
                    <div class="col-10">
                      <h6 class="discuss-head">Helena Brauer <span>Jeudi à 12:37</span></h6>
                      <p class="content-desc">During a project build, it is necessary to evaluate the product design and development against project requirements and outcomes</p>
                      <a href="#" class="reply-text text-reset">LUI REPONDRE</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="form-row mt-3 mb-5">
                    <div class="col-2">
                      <div class="profile-container">
                        <img class="img-fill" fluid :src="require('@/assets/images/ui_faces/2.jpg')" />
                      </div>
                    </div>
                    <div class="col-10">
                      <h6 class="discuss-head">Helena Brauer <span>Jeudi à 12:37</span></h6>
                      <p class="content-desc">During a project build, it is necessary to evaluate the product design and development against project requirements and outcomes</p>
                      <a href="#" class="reply-text text-reset">LUI REPONDRE</a>
                    </div>
                  </div>
                </li>
              </ul>
              <div class="reply-block position-relative pr-4 mb-5">
                <div class="profile-container float-right">
                  <img class="img-fill" fluid :src="require('@/assets/images/ui_faces/2.jpg')" />
                </div>
                <textarea class="reply-container form-control pr-5" rows="1">Répondre…</textarea>
              </div>
            </div>
          </div>
          <!-- <div class="col-12">
              <button class="date-selection-btn btn btn-dark btn-block py-4 text-uppercase rounded-0"><img class="img_icon mr-3" fluid :src="require('@/assets/images/cal_light.png')">Sélectionne une cession</button>
            </div> -->
        </div>
      </div>
    </div>
    <div class="tab-pane fade" id="pills-place" role="tabpanel" aria-labelledby="pills-place-tab">zxcvbnm</div>
    <div class="tab-pane fade" id="pills-programe" role="tabpanel" aria-labelledby="pills-programe-tab">qwertyu</div>
    <div class="tab-pane fade" id="pills-tips" role="tabpanel" aria-labelledby="pills-tips-tab">asdfgh</div>
    <div class="tab-pane fade" id="pills-opinion" role="tabpanel" aria-labelledby="pills-opinion-tab">zxcvbnm,</div>
  </div>
</template>
<script>
export default {
  name: 'ProductContent',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
