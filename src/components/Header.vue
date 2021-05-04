<template>
  <header class="header bg-dark text-white p-0">
    <div class="container-fluid p-0">
      <div class="header-part">
        <ul
          class="list-unstyled mb-0 ml-auto d-none d-lg-flex text-uppercase profile-menu float-right"
        >
          <li v-if="token">
            <a v-on:click="logout()" class="text-reset px-4 py-3 d-inline-block"
              >se déconnecter</a
            >
          </li>
          <li v-else>
            <a
              href="login.html"
              class="text-reset px-4 py-3 d-inline-block"
              data-toggle="modal"
              data-target="#login"
              >se connecter</a
            >
          </li>
          <li>
            <a
              href="#"
              class="px-4 py-3 profile-link font-weight-bold d-inline-block"
              data-toggle="modal"
              data-target="#profile"
              >creér son profil</a
            >
          </li>
        </ul>
        <div class="clearfix"></div>
        <nav
          class="navbar navbar-expand-lg navbar-dark border-lg-0 main-navbar"
        >
          <a class="navbar-brand pl-sm-5 pl-lg-0" href="/"
            ><img class="logo" fluid :src="require('@/assets/images/logo.png')"
          /></a>
          <a
            href="#"
            class="text-white ml-auto d-inline-block d-lg-none mail-btn"
          >
            <img
              class="mail-icon"
              fluid
              :src="require('@/assets/images/svg/PICTO_CONTACT_MOBILE.svg')"
              data-toggle="modal"
              data-target="#profile"
            />
          </a>
          <a href="#" class="text-white user-circle">
            <i class="fa fa-user-circle mx-auto"></i>
          </a>
          <button
            class="navbar-toggler rounded-0 collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <!-- <span class="navbar-toggler-icon"></span> -->
            <img
              class="menu-icon mx-auto"
              fluid
              :src="require('@/assets/images/menu.png')"
            />
            <i class="fa fa-times cross-sym mx-auto"></i>
          </button>

          <div
            class="collapse navbar-collapse text-white"
            id="navbarSupportedContent"
          >
            <div
              class="logged_in-div d-none align-items-center bg-white d-lg-none"
            >
              <!-- d-flex -->
              <a href="#"
                ><img
                  class="menu-icon mr-4"
                  fluid
                  :src="
                    require('@/assets/images/svg/PICTO_LOG_USER_PROFIL_SUB_MENU_2.svg')
                  "
              /></a>
              <img
                fluid
                :src="require('@/assets/images/avatar.png')"
                class="d-block user_img rounded-circle"
                alt="..."
              />
              <h5 class="logged_in_name mb-0 text-uppercase">
                MARION <span>Klein</span>
              </h5>
              <div class="position-relative ml-auto">
                <img
                  class="picto-icon"
                  fluid
                  :src="require('@/assets/images/svg/PICTO_CHAT.svg')"
                />
                <div class="notify-number">1</div>
              </div>
            </div>
            <ul
              id="header_nav"
              class="navbar-nav mx-md-5 text-uppercase nav nav-pills mobile-navs"
            >
              <li class="nav-item">
                <a
                  class="nav-link"
                  id="pills-activites-tab"
                  data-toggle="pill"
                  href="#pills-activites"
                  role="tab"
                  aria-controls="pills-activites"
                  aria-selected="false"
                  ><span>01</span> activites
                  <i
                    class="fas fa-chevron-right float-right nav-arrow d-block d-lg-none"
                  ></i
                ></a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  id="pills-destination-tab"
                  data-toggle="pill"
                  href="#pills-destination"
                  role="tab"
                  aria-controls="pills-destination"
                  aria-selected="false"
                  ><span>02</span> destination
                  <i
                    class="fas fa-chevron-right float-right nav-arrow d-block d-lg-none"
                  ></i
                ></a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  id="pills-agence-tab"
                  data-toggle="pill"
                  href="#pills-agence"
                  role="tab"
                  aria-controls="pills-agence"
                  aria-selected="false"
                  ><span>03</span> l'agence
                  <i
                    class="fas fa-chevron-right float-right nav-arrow d-block d-lg-none"
                  ></i
                ></a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link active"
                  id="pills-activity-tab"
                  data-toggle="pill"
                  href="#pills-activity"
                  role="tab"
                  aria-controls="pills-activity"
                  aria-selected="true"
                  ><span>04</span> actualités
                  <i
                    class="fas fa-chevron-right float-right nav-arrow d-block d-lg-none"
                  ></i
                ></a>
              </li>
            </ul>

            <button
              class="btn nav-btn btn-lg btn-outline-light text-uppercase d-none d-lg-inline-block"
            >
              creer ton séjour
            </button>
            <div class="d-lg-none nav-btm-div d-none align-items-center">
              <!-- d-flex -->
              <a href="#" class="social-circle d-inline-block mr-3"
                ><img
                  class="img-fluid"
                  fluid
                  :src="require('@/assets/images/insta.png')"
              /></a>
              <a href="#" class="social-circle d-inline-block mr-3"
                ><img
                  class="img-fluid"
                  fluid
                  :src="require('@/assets/images/fb.png')"
              /></a>
              <span class="text-lowercase hashtag">#yourheaventrip</span>
              <a
                href="#"
                class="d-inline-block ml-auto hashtag active font-weight-normal"
                >FR</a
              >
              <span class="mx-1 font-weight-bold">-</span>
              <a href="#" class="d-inline-block hashtag font-weight-normal"
                >EN</a
              >
            </div>
            <div class="tab-content main-wrapper">
              <div
                id="pills-activites"
                role="tabpanel"
                aria-labelledby="pills-activites-tab"
                class="wrapper h-100 p-0 tab-wrapper tab-pane fade black pt-lg-5 home-wrapper"
              >
                <div class="container">
                  <div class="row w-100 m-0">
                    <div id="activites_pills" class="col-12 col-lg-3">
                      <h4 class="nav-head m-0">
                        <a href="#header_nav" class="text-reset pr-3"
                          ><i class="fas fa-chevron-left"></i
                        ></a>
                        . ACTIVITéS
                      </h4>
                      <ul
                        class="nav navbar-nav inner-nav-list flex-column nav-pills wrapper-pills border-0 mobile-navs"
                        id="activites_pills_tab"
                        role="tablist"
                        aria-orientation="vertical"
                      >
                        <li class="nav-item" role="presentation">
                          <a
                            class="nav-link active"
                            id="v-pills-vent-mer-tab"
                            data-toggle="pill"
                            href="#v-pills-vent-mer"
                            role="tab"
                            aria-controls="v-pills-vent-mer"
                            aria-selected="false"
                            >VENT & MER
                            <i
                              class="fa fa-chevron-right chevron-left float-right"
                            ></i
                          ></a>
                        </li>
                        <li class="nav-item" role="presentation">
                          <a
                            class="nav-link"
                            id="v-pills-montagne-tab"
                            data-toggle="pill"
                            href="#v-pills-montagne"
                            role="tab"
                            aria-controls="v-pills-montagne"
                            aria-selected="false"
                            >MONTAGNE
                            <i
                              class="fa fa-chevron-right chevron-left float-right"
                            ></i
                          ></a>
                        </li>
                        <li class="nav-item" role="presentation">
                          <a
                            class="nav-link"
                            id="v-pills-pied-tab"
                            data-toggle="pill"
                            href="#v-pills-pied"
                            role="tab"
                            aria-controls="v-pills-pied"
                            aria-selected="false"
                            >A PIED
                            <i
                              class="fa fa-chevron-right chevron-left float-right"
                            ></i
                          ></a>
                        </li>
                        <li class="nav-item" role="presentation">
                          <a
                            class="nav-link"
                            id="v-pills-multi-acti-tab"
                            data-toggle="pill"
                            href="#v-pills-multi-acti"
                            role="tab"
                            aria-controls="v-pills-multi-acti"
                            aria-selected="false"
                            >MULTI - ACTIVITES
                            <i
                              class="fa fa-chevron-right chevron-left float-right"
                            ></i
                          ></a>
                        </li>
                        <li class="nav-item" role="presentation">
                          <a
                            class="nav-link"
                            id="v-pills-bien-tab"
                            data-toggle="pill"
                            href="#v-pills-bien"
                            role="tab"
                            aria-controls="v-pills-bien"
                            aria-selected="false"
                            >BIEN-ÊTRE
                            <i
                              class="fa fa-chevron-right chevron-left float-right"
                            ></i
                          ></a>
                        </li>
                        <li class="nav-item" role="presentation">
                          <a
                            class="nav-link"
                            id="v-pills-neige-tab"
                            data-toggle="pill"
                            href="#v-pills-neige"
                            role="tab"
                            aria-controls="v-pills-neige"
                            aria-selected="false"
                            >NEIGE
                            <i
                              class="fa fa-chevron-right chevron-left float-right"
                            ></i
                          ></a>
                        </li>
                      </ul>
                    </div>
                    <div class="col-12 col-lg-9">
                      <div
                        class="tab-content wrapper-content"
                        id="activites_pills_tabContent"
                      >
                        <div
                          class="tab-pane fade active show"
                          id="v-pills-vent-mer"
                          role="tabpanel"
                          aria-labelledby="v-pills-vent-mer-tab"
                        >
                          <h4 class="nav-head m-0">
                            <a href="#activites_pills" class="text-reset pr-3"
                              ><i class="fas fa-chevron-left"></i
                            ></a>
                            . VENT & MER
                          </h4>
                          <ul
                            class="list-unstyled wrapper-content-list triple-list"
                          >
                            <li>
                              <span class="img-container"
                                ><img
                                  fluid
                                  :src="require('@/assets/images/Outline.svg')"
                              /></span>
                              Kitesurf
                              <i
                                class="fas fa-arrow-right float-right mt-1 chevron-left"
                              ></i>
                            </li>
                            <li>
                              <span class="img-container"
                                ><img
                                  fluid
                                  :src="require('@/assets/images/Outline.svg')"
                              /></span>
                              Paddle
                              <i
                                class="fas fa-arrow-right float-right mt-1 chevron-left"
                              ></i>
                            </li>
                            <li>
                              <span class="img-container"
                                ><img
                                  fluid
                                  :src="require('@/assets/images/Outline.svg')"
                              /></span>
                              Windsurf
                              <i
                                class="fas fa-arrow-right float-right mt-1 chevron-left"
                              ></i>
                            </li>
                            <li>
                              <span class="img-container"
                                ><img
                                  fluid
                                  :src="require('@/assets/images/Outline.svg')"
                              /></span>
                              Surf
                              <i
                                class="fas fa-arrow-right float-right mt-1 chevron-left"
                              ></i>
                            </li>
                          </ul>
                        </div>
                        <div
                          class="tab-pane fade"
                          id="v-pills-montagne"
                          role="tabpanel"
                          aria-labelledby="v-pills-montagne-tab"
                        >
                          asdfghj
                        </div>
                        <div
                          class="tab-pane fade"
                          id="v-pills-pied"
                          role="tabpanel"
                          aria-labelledby="v-pills-pied-tab"
                        >
                          zxcvbnm
                        </div>
                        <div
                          class="tab-pane fade"
                          id="v-pills-multi-acti"
                          role="tabpanel"
                          aria-labelledby="v-pills-multi-acti-tab"
                        >
                          <h4 class="nav-head m-0">
                            <a href="#activites_pills" class="text-reset pr-3"
                              ><i class="fas fa-chevron-left"></i
                            ></a>
                            . MULTI - ACTIVITES
                          </h4>
                          <p class="wrapper-head-para">
                            (Variable prénom), choisis un sport et découvre nos
                            compositions en séjours multi-activités.
                          </p>
                          <ul
                            class="list-unstyled wrapper-content-list quad-list"
                          >
                            <li>
                              <span class="img-container"
                                ><img
                                  fluid
                                  :src="require('@/assets/images/Outline.svg')"
                              /></span>
                              VTT Descente
                              <i
                                class="fas fa-arrow-right float-right mt-1 chevron-left"
                              ></i>
                            </li>
                            <li>
                              <span class="img-container"
                                ><img
                                  fluid
                                  :src="require('@/assets/images/Outline.svg')"
                              /></span>
                              Via Ferrata
                              <i
                                class="fas fa-arrow-right float-right mt-1 chevron-left"
                              ></i>
                            </li>
                            <li>
                              <span class="img-container"
                                ><img
                                  fluid
                                  :src="require('@/assets/images/Outline.svg')"
                              /></span>
                              Rafting
                              <i
                                class="fas fa-arrow-right float-right mt-1 chevron-left"
                              ></i>
                            </li>
                            <li>
                              <span class="img-container"
                                ><img
                                  fluid
                                  :src="require('@/assets/images/Outline.svg')"
                              /></span>
                              Paddle
                              <i
                                class="fas fa-arrow-right float-right mt-1 chevron-left"
                              ></i>
                            </li>
                            <li>
                              <span class="img-container"
                                ><img
                                  fluid
                                  :src="require('@/assets/images/Outline.svg')"
                              /></span>
                              Randonnée
                              <i
                                class="fas fa-arrow-right float-right mt-1 chevron-left"
                              ></i>
                            </li>
                            <li>
                              <span class="img-container"
                                ><img
                                  fluid
                                  :src="require('@/assets/images/Outline.svg')"
                              /></span>
                              Escalade
                              <i
                                class="fas fa-arrow-right float-right mt-1 chevron-left"
                              ></i>
                            </li>
                            <li>
                              <span class="img-container"
                                ><img
                                  fluid
                                  :src="require('@/assets/images/Outline.svg')"
                              /></span>
                              Parapente
                              <i
                                class="fas fa-arrow-right float-right mt-1 chevron-left"
                              ></i>
                            </li>
                            <li>
                              <span class="img-container"
                                ><img
                                  fluid
                                  :src="require('@/assets/images/Outline.svg')"
                              /></span>
                              Canonying
                              <i
                                class="fas fa-arrow-right float-right mt-1 chevron-left"
                              ></i>
                            </li>
                            <li>
                              <span class="img-container"
                                ><img
                                  fluid
                                  :src="require('@/assets/images/Outline.svg')"
                              /></span>
                              Yoga
                              <i
                                class="fas fa-arrow-right float-right mt-1 chevron-left"
                              ></i>
                            </li>
                            <li>
                              <span class="img-container"
                                ><img
                                  fluid
                                  :src="require('@/assets/images/Outline.svg')"
                              /></span>
                              Wakeboard
                              <i
                                class="fas fa-arrow-right float-right mt-1 chevron-left"
                              ></i>
                            </li>
                            <li>
                              <span class="img-container"
                                ><img
                                  fluid
                                  :src="require('@/assets/images/Outline.svg')"
                              /></span>
                              VTT Rando
                              <i
                                class="fas fa-arrow-right float-right mt-1 chevron-left"
                              ></i>
                            </li>
                          </ul>
                        </div>
                        <div
                          class="tab-pane fade"
                          id="v-pills-bien"
                          role="tabpanel"
                          aria-labelledby="v-pills-bien-tab"
                        >
                          zxcvbnm
                        </div>
                        <div
                          class="tab-pane fade"
                          id="v-pills-neige"
                          role="tabpanel"
                          aria-labelledby="v-pills-neige-tab"
                        >
                          123456789
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="pills-destination"
                role="tabpanel"
                aria-labelledby="pills-destination-tab"
                class="wrapper h-100 p-0 tab-wrapper tab-pane fade black pt-lg-5 home-wrapper"
              >
                <div class="container">
                  <h4 class="nav-head m-0">
                    <a href="#header_nav" class="text-reset pr-3"
                      ><i class="fas fa-chevron-left"></i
                    ></a>
                    . destination
                  </h4>
                  <ul class="list-unstyled wrapper-list d-flex flex-wrap">
                    <li>
                      <h4 class="wrapper-list-head">AFRIQUE & MOYEN ORIENT</h4>
                      <h5 class="wrapper-list-subhead">Egypte</h5>
                      <ul class="list-unstyled wrapper-innerlist pb-4">
                        <li>
                          <a href="#"
                            ><i class="fa fa-chevron-right arrow-left"></i>El
                            Gouna</a
                          >
                        </li>
                      </ul>
                      <h5 class="wrapper-list-subhead">Maroc</h5>
                      <ul class="list-unstyled wrapper-innerlist pb-4">
                        <li>
                          <a href="#"
                            ><i class="fa fa-chevron-right arrow-left"></i
                            >Dakhla</a
                          >
                        </li>
                        <li>
                          <a href="#"
                            ><i class="fa fa-chevron-right arrow-left"></i
                            >Essaouira</a
                          >
                        </li>
                      </ul>
                    </li>
                    <li>
                      <h4 class="wrapper-list-head">AMÉRIQUES</h4>
                      <h5 class="wrapper-list-subhead">Brésil</h5>
                      <ul class="list-unstyled wrapper-innerlist pb-4">
                        <li>
                          <a href="#"
                            ><i class="fa fa-chevron-right arrow-left"></i
                            >Icaraizinho</a
                          >
                        </li>
                      </ul>
                    </li>
                    <li>
                      <h4 class="wrapper-list-head">ASIE & OCÉANIE</h4>
                      <h5 class="wrapper-list-subhead">Sri-Lanka</h5>
                      <ul class="list-unstyled wrapper-innerlist pb-4">
                        <li>
                          <a href="#"
                            ><i class="fa fa-chevron-right arrow-left"></i
                            >Kalpitiya</a
                          >
                        </li>
                      </ul>
                    </li>
                    <li>
                      <h4 class="wrapper-list-head">EUROPE</h4>
                      <h5 class="wrapper-list-subhead">Espagne</h5>
                      <ul class="list-unstyled wrapper-innerlist pb-4">
                        <li>
                          <a href="#"
                            ><i class="fa fa-chevron-right arrow-left"></i
                            >Tarifa</a
                          >
                        </li>
                      </ul>
                      <h5 class="wrapper-list-subhead">Grèce</h5>
                      <ul class="list-unstyled wrapper-innerlist pb-4">
                        <li>
                          <a href="#"
                            ><i class="fa fa-chevron-right arrow-left"></i
                            >Rodhes</a
                          >
                        </li>
                        <li>
                          <a href="#"
                            ><i class="fa fa-chevron-right arrow-left"></i
                            >Naxos</a
                          >
                        </li>
                      </ul>
                    </li>
                    <li>
                      <h4 class="wrapper-list-head">FRANCE</h4>
                      <h5 class="wrapper-list-subhead">
                        Provence-Alpes-Côte d’Azur
                      </h5>
                      <ul class="list-unstyled wrapper-innerlist pb-4">
                        <li>
                          <a href="#"
                            ><i class="fa fa-chevron-right arrow-left"></i>Serre
                            - chevalier</a
                          >
                        </li>
                      </ul>
                      <h5 class="wrapper-list-subhead">Grand-Est</h5>
                      <ul class="list-unstyled wrapper-innerlist pb-4">
                        <li>
                          <a href="#"
                            ><i class="fa fa-chevron-right arrow-left"></i
                            >Vosges</a
                          >
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                id="pills-agence"
                role="tabpanel"
                aria-labelledby="pills-agence-tab"
                class="wrapper h-100 p-0 tab-wrapper tab-pane fade home-wrapper"
              >
                <div id="agence_pills" class="col-12 p-0 tab-header">
                  <h4 class="nav-head my-0">
                    <a href="#header_nav" class="text-reset pr-3"
                      ><i class="fas fa-chevron-left"></i
                    ></a>
                    . L’agence
                  </h4>
                  <ul
                    class="nav nav-pills header-pills mb-0 justify-content-start justify-content-lg-between flex-column flex-lg-row border-0 mobile-navs"
                    id="agence_pills_tab"
                    role="tablist"
                  >
                    <li
                      class="nav-item text-lg-center flex-1"
                      role="presentation"
                    >
                      <a
                        class="nav-link"
                        id="pills-concept-tab"
                        data-toggle="pill"
                        href="#pills-concept"
                        role="tab"
                        aria-controls="pills-concept"
                        aria-selected="false"
                        >LE CONCEPT
                        <i
                          class="fas fa-arrow-right float-right mt-1 chevron-left"
                        ></i
                      ></a>
                    </li>
                    <li
                      class="nav-item text-lg-center flex-1"
                      role="presentation"
                    >
                      <a
                        class="nav-link"
                        id="pills-team-tab"
                        data-toggle="pill"
                        href="#pills-team"
                        role="tab"
                        aria-controls="pills-team"
                        aria-selected="false"
                        >LA TEAM
                        <i
                          class="fas fa-arrow-right float-right mt-1 chevron-left"
                        ></i
                      ></a>
                    </li>
                    <li
                      class="nav-item text-lg-center flex-1"
                      role="presentation"
                    >
                      <a
                        class="nav-link"
                        id="pills-contacter-tab"
                        data-toggle="pill"
                        href="#pills-contacter"
                        role="tab"
                        aria-controls="pills-contacter"
                        aria-selected="false"
                        >NOUS CONTACTER
                        <i
                          class="fas fa-arrow-right float-right mt-1 chevron-left"
                        ></i
                      ></a>
                    </li>
                  </ul>
                </div>
                <div
                  class="col-12 tab-content tab-header-content order-lg-3"
                  id=""
                >
                  <div
                    class="tab-pane fade concept-pane"
                    id="pills-concept"
                    role="tabpanel"
                    aria-labelledby="pills-concept-tab"
                  >
                    <h4 class="nav-head m-0 px-4">
                      <a href="#agence_pills" class="text-reset pr-3"
                        ><i class="fas fa-chevron-left"></i
                      ></a>
                      . LE CONCEPT
                    </h4>
                    <div class="container">
                      <div class="row w-100 m-0">
                        <div class="col-12 col-lg-8">
                          <div class="col-12 col-lg-8 ml-auto px-0 px-lg-3">
                            <div class="fprint-div">
                              <img
                                class="user_icon"
                                fluid
                                :src="require('@/assets/images/fprint.png')"
                              />
                              <div class="ml-2">
                                <p class="concept-small-head">Heaven Trip</p>
                                <h2 class="concept-head">
                                  NOTRE
                                  <span class="font-weight-bold">CONCEPT</span>
                                </h2>
                              </div>
                            </div>
                          </div>
                          <div class="inner-tab-pills">
                            <ul
                              class="nav nav-pills header-pills justify-content-center justify-content-lg-between d-none d-lg-flex"
                              id=""
                              role="tablist"
                            >
                              <li
                                class="nav-item text-center"
                                role="presentation"
                              >
                                <a
                                  class="nav-link active"
                                  id="pills-stay-tab"
                                  data-toggle="pill"
                                  href="#pills-stay"
                                  role="tab"
                                  aria-controls="pills-stay"
                                  aria-selected="false"
                                  ><span class="number font-weight-bold"
                                    >01<span class="dot">.</span> </span
                                  >Séjours</a
                                >
                              </li>
                              <li
                                class="nav-item text-center"
                                role="presentation"
                              >
                                <a
                                  class="nav-link"
                                  id="pills-turnkey-tab"
                                  data-toggle="pill"
                                  href="#pills-turnkey"
                                  role="tab"
                                  aria-controls="pills-turnkey"
                                  aria-selected="false"
                                  ><span class="number font-weight-bold"
                                    >02<span class="dot">.</span> </span
                                  >Clé en main</a
                                >
                              </li>
                              <li
                                class="nav-item text-center"
                                role="presentation"
                              >
                                <a
                                  class="nav-link"
                                  id="pills-made-tab"
                                  data-toggle="pill"
                                  href="#pills-made"
                                  role="tab"
                                  aria-controls="pills-made"
                                  aria-selected="false"
                                  ><span class="number font-weight-bold"
                                    >03<span class="dot">.</span> </span
                                  >Sur-mesure</a
                                >
                              </li>
                              <li
                                class="nav-item text-center"
                                role="presentation"
                              >
                                <a
                                  class="nav-link"
                                  id="pills-share-tab"
                                  data-toggle="pill"
                                  href="#pills-share"
                                  role="tab"
                                  aria-controls="pills-share"
                                  aria-selected="false"
                                  ><span class="number font-weight-bold"
                                    >04<span class="dot">.</span> </span
                                  >Partage</a
                                >
                              </li>
                            </ul>
                            <form class="d-block d-lg-none">
                              <div class="form-group mb-5">
                                <select class="form-control select-place">
                                  <option selected="" disabled="" hidden="">
                                    Séjours
                                  </option>
                                  <option value="#pills-stay">Séjours</option>
                                  <option value="#pills-turnkey">
                                    Clé en main
                                  </option>
                                  <option value="#pills-made">
                                    Sur-mesure
                                  </option>
                                  <option value="#pills-share">Partage</option>
                                </select>
                              </div>
                            </form>
                            <div
                              class="col-12 tab-content inner-tab-content"
                              id=""
                            >
                              <div
                                class="tab-pane fade show active"
                                id="pills-stay"
                                role="tabpanel"
                                aria-labelledby="pills-stay-tab"
                              >
                                <p>
                                  Et si on se concentrait sur nous ?
                                  <span class="font-weight-bold"
                                    >Un “Nous” en petit collectif</span
                                  >
                                  et
                                  <span class="font-weight-bold"
                                    >authentique</span
                                  >
                                  loin du tourisme de masse. Un concept d’<span
                                    class="font-weight-bold"
                                    >évasion mêlant sport, culture et
                                    bien-être</span
                                  >
                                  pensé par des amoureux pour des passionnés
                                  tels que vous. Parce que votre emprunte est
                                  unique, nos séjours sportifs aussi ! Cohésion,
                                  fun, rencontres et progression assurées !
                                </p>
                              </div>
                              <div
                                class="tab-pane fade"
                                id="pills-turnkey"
                                role="tabpanel"
                                aria-labelledby="pills-turnkey-tab"
                              >
                                <p>
                                  Et si on se concentrait sur nous ?
                                  <span class="font-weight-bold"
                                    >Un “Nous” en petit collectif</span
                                  >
                                  et
                                  <span class="font-weight-bold"
                                    >authentique</span
                                  >
                                  loin du tourisme de masse. Un concept d’<span
                                    class="font-weight-bold"
                                    >évasion mêlant sport, culture et
                                    bien-être</span
                                  >
                                  pensé par des amoureux pour des passionnés
                                  tels que vous. Parce que votre emprunte est
                                  unique, nos séjours sportifs aussi ! Cohésion,
                                  fun, rencontres et progression assurées !
                                </p>
                              </div>
                              <div
                                class="tab-pane fade"
                                id="pills-made"
                                role="tabpanel"
                                aria-labelledby="pills-made-tab"
                              >
                                <p>
                                  Et si on se concentrait sur nous ?
                                  <span class="font-weight-bold"
                                    >Un “Nous” en petit collectif</span
                                  >
                                  et
                                  <span class="font-weight-bold"
                                    >authentique</span
                                  >
                                  loin du tourisme de masse. Un concept d’<span
                                    class="font-weight-bold"
                                    >évasion mêlant sport, culture et
                                    bien-être</span
                                  >
                                  pensé par des amoureux pour des passionnés
                                  tels que vous. Parce que votre emprunte est
                                  unique, nos séjours sportifs aussi ! Cohésion,
                                  fun, rencontres et progression assurées !
                                </p>
                              </div>
                              <div
                                class="tab-pane fade"
                                id="pills-share"
                                role="tabpanel"
                                aria-labelledby="pills-share-tab"
                              >
                                <p>
                                  Et si on se concentrait sur nous ?
                                  <span class="font-weight-bold"
                                    >Un “Nous” en petit collectif</span
                                  >
                                  et
                                  <span class="font-weight-bold"
                                    >authentique</span
                                  >
                                  loin du tourisme de masse. Un concept d’<span
                                    class="font-weight-bold"
                                    >évasion mêlant sport, culture et
                                    bien-être</span
                                  >
                                  pensé par des amoureux pour des passionnés
                                  tels que vous. Parce que votre emprunte est
                                  unique, nos séjours sportifs aussi ! Cohésion,
                                  fun, rencontres et progression assurées !
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="col-12 col-lg-4 pr-lg-0 mt-4 d-none d-lg-block"
                        >
                          <img
                            fluid
                            :src="require('@/assets/images/unsplashx.png')"
                            class="img-fluid concept-fill-img"
                            alt="..."
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade team-pane w-100"
                    id="pills-team"
                    role="tabpanel"
                    aria-labelledby="pills-team-tab"
                  >
                    <h4 class="nav-head m-0 px-4">
                      <a href="#agence_pills" class="text-reset pr-3"
                        ><i class="fas fa-chevron-left"></i
                      ></a>
                      . LA TEAM
                    </h4>
                    <div class="container p-0 px-lg-3">
                      <div class="row justify-content-around w-100 d-none">
                        <!-- d-lg-flex -->
                        <div class="col-12 col-lg-2">
                          <div class="position-relative">
                            <img
                              fluid
                              :src="
                                require('@/assets/images/svg/background_team.svg')
                              "
                              class="img-fluid bubble-bg"
                              alt="..."
                            />
                            <img
                              fluid
                              :src="require('@/assets/images/svg/team.png')"
                              class="img-fluid"
                              alt="..."
                            />
                          </div>
                          <div class="d-flex align-items-end team-div">
                            <h2 class="team-head">
                              <span>Axel</span><br />
                              <span>Sonderer</span>
                            </h2>
                            <p class="para">Co-founder & CEO</p>
                          </div>
                          <p class="para">
                            Toujours la tête dans les nuages celui-là, Toujours
                            la tête dans les nuages celui-là…
                          </p>
                        </div>
                        <div class="col-12 col-lg-2">
                          <div class="position-relative">
                            <img
                              fluid
                              :src="
                                require('@/assets/images/svg/background_team.svg')
                              "
                              class="img-fluid bubble-bg"
                              alt="..."
                            />
                            <img
                              fluid
                              :src="require('@/assets/images/svg/team.png')"
                              class="img-fluid"
                              alt="..."
                            />
                          </div>
                          <div class="d-flex align-items-end team-div">
                            <h2 class="team-head">
                              <span>Axel</span><br />
                              <span>Sonderer</span>
                            </h2>
                            <p class="para">Co-founder & CEO</p>
                          </div>
                          <p class="para">
                            Toujours la tête dans les nuages celui-là, Toujours
                            la tête dans les nuages celui-là…
                          </p>
                        </div>
                        <div class="col-12 col-lg-2">
                          <div class="position-relative">
                            <img
                              fluid
                              :src="
                                require('@/assets/images/svg/background_team.svg')
                              "
                              class="img-fluid bubble-bg"
                              alt="..."
                            />
                            <img
                              fluid
                              :src="require('@/assets/images/svg/team.png')"
                              class="img-fluid"
                              alt="..."
                            />
                          </div>
                          <div class="d-flex align-items-end team-div">
                            <h2 class="team-head">
                              <span>Axel</span><br />
                              <span>Sonderer</span>
                            </h2>
                            <p class="para">Co-founder & CEO</p>
                          </div>
                          <p class="para">
                            Toujours la tête dans les nuages celui-là, Toujours
                            la tête dans les nuages celui-là…
                          </p>
                        </div>
                        <div class="col-12 col-lg-2">
                          <div class="position-relative">
                            <img
                              fluid
                              :src="
                                require('@/assets/images/svg/background_team.svg')
                              "
                              class="img-fluid bubble-bg"
                              alt="..."
                            />
                            <img
                              fluid
                              :src="require('@/assets/images/svg/team.png')"
                              class="img-fluid"
                              alt="..."
                            />
                          </div>
                          <div class="d-flex align-items-end team-div">
                            <h2 class="team-head">
                              <span>Axel</span><br />
                              <span>Sonderer</span>
                            </h2>
                            <p class="para">Co-founder & CEO</p>
                          </div>
                          <p class="para">
                            Toujours la tête dans les nuages celui-là, Toujours
                            la tête dans les nuages celui-là…
                          </p>
                        </div>
                      </div>
                      <div class="main w-100">
                        <div class="team-slider text-dark">
                          <div>
                            <div class="position-relative">
                              <img
                                fluid
                                :src="
                                  require('@/assets/images/svg/background_team.svg')
                                "
                                class="img-fluid bubble-bg"
                                alt="..."
                              />
                              <img
                                fluid
                                :src="require('@/assets/images/svg/team.png')"
                                class="img-fluid"
                                alt="..."
                              />
                            </div>
                            <div class="d-flex align-items-end team-div">
                              <h2 class="team-head">
                                <span>Axel</span><br />
                                <span>Sonderer</span>
                              </h2>
                              <p class="para">Co-founder & CEO</p>
                            </div>
                            <p class="para">
                              Toujours la tête dans les nuages celui-là,
                              Toujours la tête dans les nuages celui-là…
                            </p>
                          </div>
                          <div>
                            <div class="position-relative">
                              <img
                                fluid
                                :src="
                                  require('@/assets/images/svg/background_team.svg')
                                "
                                class="img-fluid bubble-bg"
                                alt="..."
                              />
                              <img
                                fluid
                                :src="require('@/assets/images/svg/team.png')"
                                class="img-fluid"
                                alt="..."
                              />
                            </div>
                            <div class="d-flex align-items-end team-div">
                              <h2 class="team-head">
                                <span>Axel</span><br />
                                <span>Sonderer</span>
                              </h2>
                              <p class="para">Co-founder & CEO</p>
                            </div>
                            <p class="para">
                              Toujours la tête dans les nuages celui-là,
                              Toujours la tête dans les nuages celui-là…
                            </p>
                          </div>
                          <div>
                            <div class="position-relative">
                              <img
                                fluid
                                :src="
                                  require('@/assets/images/svg/background_team.svg')
                                "
                                class="img-fluid bubble-bg"
                                alt="..."
                              />
                              <img
                                fluid
                                :src="require('@/assets/images/svg/team.png')"
                                class="img-fluid"
                                alt="..."
                              />
                            </div>
                            <div class="d-flex align-items-end team-div">
                              <h2 class="team-head">
                                <span>Axel</span><br />
                                <span>Sonderer</span>
                              </h2>
                              <p class="para">Co-founder & CEO</p>
                            </div>
                            <p class="para">
                              Toujours la tête dans les nuages celui-là,
                              Toujours la tête dans les nuages celui-là…
                            </p>
                          </div>
                          <div>
                            <div class="position-relative">
                              <img
                                fluid
                                :src="
                                  require('@/assets/images/svg/background_team.svg')
                                "
                                class="img-fluid bubble-bg"
                                alt="..."
                              />
                              <img
                                fluid
                                :src="require('@/assets/images/svg/team.png')"
                                class="img-fluid"
                                alt="..."
                              />
                            </div>
                            <div class="d-flex align-items-end team-div">
                              <h2 class="team-head">
                                <span>Axel</span><br />
                                <span>Sonderer</span>
                              </h2>
                              <p class="para">Co-founder & CEO</p>
                            </div>
                            <p class="para">
                              Toujours la tête dans les nuages celui-là,
                              Toujours la tête dans les nuages celui-là…
                            </p>
                          </div>
                          <div>
                            <div class="position-relative">
                              <img
                                fluid
                                :src="
                                  require('@/assets/images/svg/background_team.svg')
                                "
                                class="img-fluid bubble-bg"
                                alt="..."
                              />
                              <img
                                fluid
                                :src="require('@/assets/images/svg/team.png')"
                                class="img-fluid"
                                alt="..."
                              />
                            </div>
                            <div class="d-flex align-items-end team-div">
                              <h2 class="team-head">
                                <span>Axel</span><br />
                                <span>Sonderer</span>
                              </h2>
                              <p class="para">Co-founder & CEO</p>
                            </div>
                            <p class="para">
                              Toujours la tête dans les nuages celui-là,
                              Toujours la tête dans les nuages celui-là…
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade contact-pane"
                    id="pills-contacter"
                    role="tabpanel"
                    aria-labelledby="pills-contacter-tab"
                  >
                    <h4 class="nav-head m-0 px-4">
                      <a href="#agence_pills" class="text-reset pr-3"
                        ><i class="fas fa-chevron-left"></i
                      ></a>
                      . NOUS CONTACTER
                    </h4>
                    <div class="container">
                      <div class="row w-100 m-0">
                        <div
                          class="col-12 col-lg-9 offset-lg-2 d-flex justify-content-between mb-lg-5"
                        >
                          <div>
                            <h4 class="contacter-head mb-1">
                              Faut pas hésiter !
                            </h4>
                            <p class="contacter-para mb-4 mb-lg-0">
                              Si tu as besoin de conseils, de renseignements, tu
                              peux nous joindre par téléphone ou par le
                              formulaire ci-dessous.
                            </p>
                          </div>
                          <div class="tel-box text-center col-lg-4">
                            <a
                              class="mob-number text-dark"
                              href="tel:0954277519"
                              ><img
                                class="mr-2 align-baseline"
                                fluid
                                :src="require('@/assets/images/tel_dark.png')"
                              />
                              09 54 27 75 19</a
                            >
                            <p class="contacter-para mb-0">
                              Lundi - samedi : 8h30 à 19h00
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="row w-100 m-0">
                        <div class="col-12 col-lg-8 mx-auto">
                          <form class="contact-form">
                            <div class="row">
                              <div class="col-12 col-lg-5">
                                <div class="form-group valid">
                                  <label>Nom & Prénom</label>
                                  <input
                                    class="form-control"
                                    type="text"
                                    name=""
                                    value="Nagar Steve"
                                  />
                                  <i class="fa fa-check check-sym"></i>
                                </div>
                              </div>
                              <div class="col-12 col-lg-6 ml-auto">
                                <div class="form-group valid">
                                  <label>Adresse Email</label>
                                  <input
                                    class="form-control"
                                    type="email"
                                    name=""
                                    value="hello@yourheaventrip.com"
                                  />
                                  <i class="fa fa-check check-sym"></i>
                                </div>
                              </div>
                            </div>
                            <div class="row">
                              <div class="col-12 text-center">
                                <div class="form-group">
                                  <textarea
                                    class="form-control"
                                    rows="5"
                                    placeholder="Tu peux taper ton message ici…"
                                  ></textarea>
                                </div>
                                <button
                                  class="btn btn-dark font-weight-bold contact-form-btn px-5 mb-5"
                                >
                                  ENVOYER
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div class="tab-content">
          <div
            id="pills-activity"
            role="tabpanel"
            aria-labelledby="pills-activity-tab"
            class="wrapper tab-pane fade show active home-wrapper pb-0"
          >
            <div
              class="d-flex align-items-center align-items-lg-end w-100 h-100"
            >
              <div class="content w-100 mb-lg-5 mt-5 mt-lg-0">
                <div
                  class="d-flex align-items-center mb-1 justify-content-md-center justify-content-lg-start"
                >
                  <img
                    class="head-icon d-inline-block d-lg-none"
                    fluid
                    :src="require('@/assets/images/pink.png')"
                  />
                  <img
                    class="head-pin-icon d-none d-lg-inline-block"
                    fluid
                    :src="require('@/assets/images/head-pin.png')"
                  />
                  <img
                    class="d-none d-lg-inline-block mr-4"
                    fluid
                    :src="require('@/assets/images/ARROW.png')"
                  />
                  <div>
                    <h1 class="heading text-uppercase mb-0">
                      <strong>ski</strong> freeride
                    </h1>
                    <h5 class="sub-heading text-uppercase d-block d-lg-none">
                      <i class="fas fa-caret-right mr-1"></i> serre-chevalier
                    </h5>
                  </div>
                </div>
                <p class="para d-none d-lg-block">
                  Avec notre moniteur, vivez les plaisirs du ski hors piste,
                  mais aussi <br />apprendre a mieux connaitre la montagne et
                  ses dangers.
                </p>
                <h5 class="sub-heading text-uppercase d-none d-lg-block mb-3">
                  <strong>inclus :</strong> yoga - rando - vtt neige
                </h5>
                <div
                  class="text-center text-lg-left mt-5 mt-lg-0 pt-md-4 pt-lg-0"
                >
                  <ul
                    class="list-unstyled py-4 py-lg-3 text-uppercase list-info mb-0 align-items-center"
                  >
                    <li>
                      <img
                        class="mr-2 icons"
                        fluid
                        :src="require('@/assets/images/globe.png')"
                      />france
                    </li>
                    <li class="d-none d-md-inline-block">
                      <img
                        class="mr-2 icons"
                        fluid
                        :src="require('@/assets/images/timer.png')"
                      />7 jours
                    </li>
                    <li class="d-none d-md-inline-block">
                      <img
                        class="mr-2 icons"
                        fluid
                        :src="require('@/assets/images/circle.png')"
                      />confirmé
                    </li>
                    <li class="d-none d-md-inline-block">
                      <img
                        class="mr-2 icons"
                        fluid
                        :src="require('@/assets/images/places.png')"
                      />10 places
                    </li>
                    <li><span class="divider"></span></li>
                    <li
                      class="d-none d-lg-inline-flex align-items-center font-weight-500 pl-3 mr-0"
                    >
                      sessions :
                      <button
                        type="button"
                        class="text-uppercase custom-datepicker pl-3 pr-0 border-0 font-weight-500"
                        data-toggle="modal"
                        data-target="#exampleModal"
                      >
                        choisir une date<img
                          class="arrow ml-2"
                          fluid
                          :src="require('@/assets/images/down.png')"
                        />
                      </button>
                    </li>
                    <li class="d-inline-block d-lg-none text-lowercase">
                      <h3 class="euro-count mb-0 euro">
                        <strong>990&euro;</strong> /pers.
                      </h3>
                    </li>
                  </ul>
                  <div
                    class="float-right d-none d-lg-flex floaded-div position-relative mt-3"
                  >
                    <div class="p-3 bg-white text-dark rounded-left">
                      <h3 class="euro-count mb-0 euro">
                        <strong>1 990&euro;</strong> /pers.
                      </h3>
                      <p class="mb-0 small-text">
                        <span class="condensed-text"
                          >Tout inclus (sans transports)</span
                        >
                      </p>
                    </div>
                    <button
                      class="btn details-btn btn-danger text-uppercase rounded-right px-4"
                    >
                      détails
                    </button>
                  </div>
                  <br />
                  <div
                    class="d-inline-flex d-lg-flex align-items-center p-3 py-4 px-lg-0 trippers-div"
                  >
                    <h5
                      class="sub-heading text-uppercase mb-0 d-none d-lg-inline-block"
                    >
                      <strong>12 trippers</strong> intéressés
                    </h5>
                    <ul
                      class="img-list list-unstyled d-none d-md-inline-flex align-items-center mx-4 mb-0"
                    >
                      <li>
                        <a href="#"
                          ><img
                            class="img-fluid user_icon positioned-img rounded-circle"
                            fluid
                            :src="require('@/assets/images/t2.png')"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#"
                          ><img
                            class="img-fluid user_icon positioned-img rounded-circle"
                            fluid
                            :src="require('@/assets/images/t1.png')"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#"
                          ><img
                            class="img-fluid user_icon positioned-img rounded-circle"
                            fluid
                            :src="require('@/assets/images/t2.png')"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#"
                          ><img
                            class="img-fluid user_icon positioned-img rounded-circle"
                            fluid
                            :src="require('@/assets/images/t3.png')"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#"
                          ><img
                            class="img-fluid user_icon positioned-img rounded-circle"
                            fluid
                            :src="require('@/assets/images/t4.png')"
                          />
                        </a>
                      </li>
                      <li class="d-none d-lg-inline-block">
                        <a href="#"
                          ><img
                            class="img-fluid user_icon"
                            fluid
                            :src="require('@/assets/images/th.png')"
                          />
                        </a>
                      </li>
                      <li class="d-inline-block d-lg-none">
                        <span>+1.5k</span>
                      </li>
                    </ul>
                    <span
                      class="divider d-none d-md-inline-block d-lg-none mx-2"
                    ></span>
                    <a
                      class="details-link text-uppercase text-white font-weight-bold d-inline-block d-lg-none pl-3"
                      href="#"
                      >Détails
                      <img
                        class="img-fluid mt-n1"
                        fluid
                        :src="require('@/assets/images/arr-r.png')"
                    /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="search-div navbar-dark bg-white text-dark d-none">
      <div
        class="header-block text-uppercase d-flex justify-content-between align-items-center text-white"
      >
        <h3 class="search-head">MA RECHERCHE</h3>
        <button class="rounded-0 btn search-cancel" type="button">
          <i class="fa fa-times cross-sym mx-auto"></i>
        </button>
      </div>
      <form
        class="d-flex justify-content-between align-items-center search-block"
      >
        <input
          type="text"
          class="form-control border-0"
          name=""
          placeholder="Recherche manuelle"
        />
        <button class="rounded-0 btn" type="button">
          <img class="" fluid :src="require('@/assets/images/search.png')" />
        </button>
      </form>
      <ul class="navbar-nav inner-nav-list first p-0 chevron-list">
        <li class="nav-item selected">
          <a class="nav-link" href="#"
            ><img
              class="mr-3 svg"
              fluid
              :src="require('@/assets/images/svg/Outline.svg')" />
            <i class="fas fa-chevron-right chevron-right"></i> Février
            <i class="fa fa-times cross-sym ml-auto"></i
          ></a>
        </li>
        <li class="nav-item selected">
          <a class="nav-link" href="#"
            ><img
              class="mr-3 svg"
              fluid
              :src="require('@/assets/images/svg/Outline.svg')" />
            <i class="fas fa-chevron-right chevron-right"></i> Kitesurf
            <i class="fa fa-times cross-sym ml-auto"></i
          ></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"
            ><img
              class="mr-3 svg"
              fluid
              :src="require('@/assets/images/svg/Outline_dark.svg')" />
            <i class="fas fa-chevron-right chevron-right"></i> Pays
            <i class="fa fa-chevron-right ml-auto"></i
          ></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"
            ><img
              class="mr-3 svg"
              fluid
              :src="require('@/assets/images/svg/Outline_dark.svg')" />
            <i class="fas fa-chevron-right chevron-right"></i> Niveau
            <i class="fa fa-chevron-right ml-auto"></i
          ></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"
            ><img
              class="mr-3 svg"
              fluid
              :src="require('@/assets/images/svg/Outline_dark.svg')" />
            <i class="fas fa-chevron-right chevron-right"></i> Dernières places
            <i class="fa fa-chevron-right ml-auto"></i
          ></a>
        </li>
      </ul>
      <button
        class="result-btn btn btn-block btn-dark rounded-0 text-uppercase"
      >
        Voir les résultats
      </button>
    </div>
    <div class="search-div navbar-dark bg-white text-dark d-none">
      <div
        class="header-block text-uppercase d-flex justify-content-between align-items-center text-white"
      >
        <h3 class="search-head">
          MA RECHERCHE <span class="sub-head">activité</span>
        </h3>
        <button class="rounded-0 btn search-cancel" type="button">
          <i class="fa fa-times cross-sym mx-auto"></i>
        </button>
      </div>
      <ul class="navbar-nav inner-nav-list first p-0">
        <li class="nav-item">
          <a class="nav-link" href="#"
            ><img
              class="mr-3 svg"
              fluid
              :src="require('@/assets/images/svg/Outline_dark.svg')"
            />
            <i class="fas fa-chevron-right chevron-right"></i> Kitesurf
          </a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" href="#"
            ><img
              class="mr-3 svg"
              fluid
              :src="require('@/assets/images/svg/Outline.svg')"
            />
            <i class="fas fa-chevron-right chevron-right"></i> Kitesurf
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"
            ><img
              class="mr-3 svg"
              fluid
              :src="require('@/assets/images/svg/Outline_dark.svg')"
            />
            <i class="fas fa-chevron-right chevron-right"></i> Kitesurf
          </a>
        </li>
      </ul>
      <div class="content-div p-5">
        <p class="font-weight-bold">
          Slide droite vers la gauche avec un effet escalier (chaque ligne
          arrive en décalée) et une transition progressive sur l’opacité.
        </p>
        <p class="font-weight-bold">
          La validation d’un item fait office de validation Et permet de revenir
          à l’écran précédent.
        </p>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: "Header",
  mounted() {
    var token_val = localStorage.getItem("user-token");
    if (!token_val) {
      this.token = false;
    }
    $(function () {
      $(".selection").select2({
        minimumResultsForSearch: Infinity,
      });
      var backButton =
        '<span class="slick-prev"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAwCAMAAABUpcipAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAOpQTFRFAAAAe3t7enp6d3d3e3t7fHx8e3t7eXl5fHx8fHx8e3t7enp6fHx8cXFxfHx8gICAfHx8e3t7fHx8fHx8ZmZme3t7eXl5eHh4e3t7fHx8fHx8dnZ2e3t7e3t7e3t7gICAfHx8e3t7fHx8fHx8e3t7e3t7fHx8fHx8e3t7e3t7e3t7fHx8e3t7e3t7e3t7eHh4fHx8fHx8e3t7e3t7e3t7e3t7e3t7gICAdHR0fHx8e3t7gICAfHx8e3t7fHx8enp6AAAAgICAe3t7e3t7e3t7e3t7e3t7enp6e3t7e3t7fHx8fHx8fHx8e3t7SJvSHgAAAE50Uk5TAI9gHs//7BNA76Aw0gmcEPVNgMwF+Cggh5DrDd9f8ganV1DQx59vwODwsGd8/u4Rd+UfcJebpAQL/ZMSY/ShQQECW9vigTQybqztyL/VnvtSXwAAAWpJREFUeJyNlddaxCAQhdk1KAkqGktcuxvdFLurrr338v6vY4bEhBTCnDvg/+YwDAOEFOp0CUZjFh2fQHDMppQ6Zo5T0OSUkYN4dNrICeBmELlYEG/WzLnAdcycNJ6bN4NOwi0smjkPjJfMHOkl3PIKAlxNwDUEBzVZ30A6byI46bzVvNSnSrEEOGtSEb5CsgTc1rmpJJRvR7svhXTbT7sgIemButSlVXE5H1STZkFJIY08OR8n4K7emtsRL/a4h+Das1Y4uXdLw3kKJ+/EvmgGmc+VUaSvdVlxa2kUwSYPDhGgAO8jTEhowmPjY0KyLhyYuTSkfYINiXkpyBDIU4x5jH0sRAjkGYJMX+bzkZlMGyC+MJMMCkQvr67rS6Ob0qXhkqS3d/cPJezx6bnyAYkg67qX17f/ufePzy9a/4D6Yd6i3z+JfvNh1omF3KjW1aBevQVEN65S4bAaLmcdP7cMXN5M5WfAQIrjH3uPHRYBYnIgAAAAAElFTkSuQmCC"/></span>';
      var nextButton =
        '<span class="slick-next"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAwCAMAAABUpcipAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAPZQTFRFAAAAfX19enp6gICAe3t7e3t7fHx8fHx8e3t7fHx8e3t7e3t7fHx8cHBwe3t7e3t7e3t7e3t7fHx8fHx8e3t7fHx8e3t7fHx8e3t7gICAfX19e3t7fHx8eXl5e3t7fX19enp6fHx8enp6fHx8fX19e3t7fHx8fHx8e3t7gICAe3t7e3t7fHx8fHx8fHx8eHh4d3d3fHx8fHx8enp6e3t7e3t7e3t7fX19fHx8fHx8fHx8fHx8fX19fHx8enp6fHx8enp6e3t7fHx8fHx8fHx8e3t7fHx8e3t7fHx8e3t7e3t7e3t7e3t7e3t7fHx8fHx8gICAd3d3WaJ1zQAAAFJ0Uk5TAD8wEE+Pv//ff59f7xDP9tHL5UCg87Z7Phg1bK0T7DdL92C5Mx+xTOIMnXyEgLsgD+GvSc2wcCvtUKl3WMBH0EVTcZ7OHXWb0oFVPPBX9ZAEHq06TacAAAFZSURBVHicjdXZVsIwEADQkZSmiAaRqiioUHBfUNzXooIriv7/z5ikHpNA08y8tb2dZE4mCYAeUzlwBPHyPk0i8AtW7k1TM4K8l8KKAU2JmeIYm2XqY2muPK+lrZgylG8XFpeqy/J5pVYv/VGf6HB1jdL6uvlzI2wm4xtlRa325MQ3NlNkemxtSxq55U5LSkRO2JWjEzeEPVk7AsK+kAcYeShkBwGPjjnsYlKeiJQVtwM45fAMAxvYWcqU5xhY45Bh4IUYW1se0rXVdmnUTRi9ssBrfXW4szbUDYchwsEth3cIB/cKxpQVjDDqqv7DzsSuDnXYUxkjyjL6+EHBbPmoD5Eln4wuz5B9syMjW4sMxtYacpaMz9zFtmnpUUb24wDb4S/IkdvIkwpekQnfkNv6neJ29YdwQ3fJn18C2raSihHubP5O7jzE4SgvoJHbiQto6J6fiCj+UQ+/I/0ehXptCecAAAAASUVORK5CYII="/></span>';
      $(".slider1").slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        draggable: true,
        centerPadding: "60px",
        prevArrow: backButton,
        nextArrow: nextButton,
        responsive: [
          {
            breakpoint: 2561,
            settings: {
              initialSlide: 1,
              arrows: true,
              centerMode: true,
              centerPadding: "60px",
              slidesToShow: 3,
              draggable: false,
            },
          },
          {
            breakpoint: 1441,
            settings: {
              initialSlide: 1,
              arrows: true,
              centerMode: true,
              centerPadding: "80px",
              slidesToShow: 2,
              draggable: false,
            },
          },
          {
            breakpoint: 1025,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: "80px",
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 991,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: "90px",
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: false,
              // centerPadding: '40px',
              slidesToShow: 1,
            },
          },
        ],
      });

      $('[data-toggle="tooltip"]').tooltip();
      $(".user-circle").hide();
      $("#navbarSupportedContent").on("shown.bs.collapse", function () {
        $(".navbar").css({
          "border-bottom": "none",
          "background-color": "#292F33",
        });
        $(".user-circle").show();
        $(".header .navbar-dark .navbar-brand .logo").css("max-width", "100px");
        $("body").css("overflow", "hidden");
      });
      $("#navbarSupportedContent").on("hidden.bs.collapse", function () {
        $(".navbar").css({
          "border-bottom": "1px solid hsla(0,0%,98%,.5)",
          "background-color": "transparent",
        });
        $(".user-circle").hide();
        $(".header .navbar-dark .navbar-brand .logo").css("max-width", "130px");
        $("body").css("overflow", "visible");
      });

      $(
        ".select-dropdown .cancel,.grid-list,.hoverable-div,.view-link,.centered-img"
      ).hide();
      $(".map-section .city-head .select-toggle").removeAttr("data-toggle");
      $(".select-dropdown").on("show.bs.dropdown", function () {
        $(".map-content").css("margin-top", "7rem");
        $(".zone-div").hide();
      });
      $(".select-dropdown").on("hide.bs.dropdown", function () {
        $(".map-content").css("margin-top", "0");
      });
      $(".dropdown-menu li a").click(function () {
        var selText = $(this).text();
        $(this)
          .parents(".btn-group")
          .find(".select-toggle")
          .addClass("text-warning")
          .html(selText);
        $(this).parents(".btn-group").find(".cancel").show();
        $(this).parents(".btn-group").find(".chevron").hide();
        $(".grid-list,.view-link,.centered-img").show();
        $(".map-section .img-fill").addClass("blurred-img");
        $(".map-section .city-head .select-toggle").attr(
          "data-toggle",
          "dropdown"
        );
        $(
          ".map-section .city-head,.map-section .flex-div .activity-count"
        ).removeClass("zero-opacity");
      });
      $(".select-dropdown .cancel").click(function () {
        $(this)
          .parents(".btn-group")
          .find(".select-toggle.tous")
          .removeClass("text-warning")
          .html("tous" + '<i class="fa fa-chevron-down ml-2 chevron"></i>');
        $(this)
          .parents(".btn-group")
          .find(".select-toggle.toutes")
          .removeClass("text-warning")
          .html("toutes" + '<i class="fa fa-chevron-down ml-2 chevron"></i>');
        $(this).parents(".btn-group").find(".cancel").hide();
        $(this).parents(".btn-group").find(".chevron").show();
        if ($(this).parents().hasClass("country-head")) {
          $(".zone-div").show();
          $(
            ".grid-list,.view-link,.centered-img,.map-section .city-head .cancel"
          ).hide();
          $(".map-section .img-fill").removeClass("blurred-img");
          $(".map-section .city-head .select-toggle").removeAttr("data-toggle");
          $(
            ".map-section .city-head,.map-section .flex-div .activity-count"
          ).addClass("zero-opacity");
          $(".select-toggle.toutes")
            .removeClass("text-warning")
            .html("toutes" + '<i class="fa fa-chevron-down ml-2 chevron"></i>');
        }
        // if ($(this).parents().hasClass('city-head') ) {
        // }
      });
      $("#mapCarousel").owlCarousel({
        loop: false,
        center: true,
        items: 3,
        margin: 0,
        autoplay: false,
        dots: true,
        nav: true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        responsive: {
          0: {
            items: 2,
          },
          768: {
            items: 2,
          },
          1170: {
            items: 3,
          },
        },
      });
      $(".owl-carousel").find(".owl-nav,.owl-dots").removeClass("disabled");
      $(".owl-carousel").on("changed.owl.carousel", function (event) {
        $(this).find(".owl-nav,.owl-dots").removeClass("disabled");
      });
      $("select.select-place").change(function () {
        var selectedCountry = $(this).children("option:selected").val();
        $('.nav-pills a[href="' + selectedCountry + '"]').tab("show");
      });
    });
    var width = $(window).width();
    if (width >= 1100) {
      $(".customers-testimonials")
        .on("mouseenter", ".shadow-effect", function () {
          $(this).parent().animate({ width: "+=50px" });
          $(this).parent().find(".content").addClass("hover");
          $(this).parent().find(".hoverable-div").slideDown();
          $(this).parent().find(".trip-link").animate({ bottom: "+=45px" });
        })
        .on("mouseleave", ".shadow-effect", function () {
          $(this).parent().animate({ width: "-=50px" });
          $(this).parent().find(".content").removeClass("hover");
          $(this).parent().find(".hoverable-div").slideUp();
          $(this).parent().find(".trip-link").animate({ bottom: "-=45px" });
        });
    }
    if (width >= 792) {
      $("#header_nav.navbar-nav .nav-link").on("click", function (e) {
        e.preventDefault();
        $(".home-wrapper").removeClass("active");
        var wrapper_id = $(this).attr("href").split("=");
        $(".home-wrapper" + wrapper_id + "").addClass("active");
      });
    }
    if (width < 692) {
      $("#header_nav.navbar-nav.mobile-navs .nav-link").on(
        "click",
        function (e) {
          e.preventDefault();
          $("#header_nav").hide();
          $("#activites_pills").show();
          var forward_id = $(this).attr("href").split("=");
          $(".main-wrapper .tab-pane").removeClass("active");
          $(".main-wrapper .tab-pane" + forward_id + "").addClass("active");
        }
      );
      $("#activites_pills_tab.navbar-nav.mobile-navs .nav-link").on(
        "click",
        function (e) {
          e.preventDefault();
          var in_forward_id = $(this).attr("href").split("=");
          $(".main-wrapper .tab-pane" + in_forward_id + "").addClass("active");
          $("#activites_pills").hide();
        }
      );
      $("#agence_pills_tab.nav-pills.mobile-navs .nav-link").on(
        "click",
        function (e) {
          e.preventDefault();
          var ag_forward_id = $(this).attr("href").split("=");
          $(".main-wrapper .tab-pane" + ag_forward_id + "").addClass("active");
          $("#agence_pills").hide();

          if ($(".inner-tab-content.tab-content>.tab-pane").hasClass("show")) {
            $(".inner-tab-content.tab-content>.tab-pane.show").addClass(
              "active"
            );
          }
        }
      );
      $("#pills-activity-tab").on("click", function (e) {
        $(".navbar-toggler").trigger("click");
        $("#header_nav").show();
        e.preventDefault();
      });
      $(".nav-head a").click(function () {
        var back_id = $(this).attr("href").split("=");
        $("" + back_id + "").show();
        $(this).parent().parent().removeClass("active");
        if (back_id == "#header_nav") {
          $(".main-wrapper .tab-pane").removeClass("active");
        }
        return false;
      });
    }
    $("#pills-team-tab").on("click", function (e) {
      $(".team-slider").slick({
        dots: true,
        arrows: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        centerMode: false,
        draggable: true,
        centerPadding: "80px",
        responsive: [
          {
            breakpoint: 2561,
            settings: {
              initialSlide: 1,
              centerMode: false,
              centerPadding: "80px",
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 1441,
            settings: {
              initialSlide: 1,
              centerMode: false,
              centerPadding: "80px",
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 1025,
            settings: {
              centerMode: false,
              centerPadding: "100px",
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 991,
            settings: {
              centerMode: true,
              centerPadding: "100px",
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              dots: true,
              centerMode: true,
              centerPadding: "70px",
              slidesToShow: 1,
            },
          },
        ],
      });
      $(".slick-dots li:nth-child(2)").triggerHandler("click");
      e.preventDefault();
    });
  },
  data() {
    return {
      token: true,
      msg: "Welcome to Your Vue.js App",
    };
  },
  methods: {
    logout: function (event) {
      localStorage.removeItem("user-token");
      window.location.reload();
    },
  },
};
</script>
