<template>
  <div>
    <header
      class="header bg-dark text-white p-0 product-header d-none xl-header"
    >
      <div class="container-fluid p-0 position-relative">
        <div class="header-part">
          <ul
            class="list-unstyled mb-0 ml-auto d-none d-lg-flex text-uppercase profile-menu float-right"
          >
            <li>
              <a href="/login" class="text-reset pr-4">se connecter</a>
            </li>
            <li>
              <a href="#" class="text-reset pl-3 profile-link font-weight-bold"
                >creér son profil</a
              >
            </li>
          </ul>
          <div class="clearfix"></div>
          <nav
            class="navbar navbar-expand-lg activity-p-header-nav navbar-dark p-0 border-lg-0"
          >
            <a class="navbar-brand pl-sm-5 pl-lg-0" href="/"
              ><img
                class="logo"
                fluid
                :src="require('@/assets/images/logo.png')"
            /></a>
            <a
              href="#"
              class="text-white ml-auto d-inline-block d-lg-none mail-btn"
            >
              <img
                class="mail-icon"
                fluid
                :src="require('@/assets/images/svg/PICTO_CONTACT_MOBILE.svg')"
              />
            </a>
            <!-- <a href="#" class="text-white user-circle">
              <i class="fa fa-user-circle mx-auto"></i>
            </a> -->
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
              class="collapse navbar-collapse nav-heaven-collapsable text-white"
              id="navbarSupportedContent"
            >
              <ul class="navbar-nav mx-md-5 text-uppercase">
                <li class="nav-item">
                  <a class="nav-link" href="#"
                    ><span>01</span> activites
                    <i
                      class="fas fa-chevron-right float-right nav-arrow d-block d-lg-none"
                    ></i
                  ></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#"
                    ><span>02</span> destination
                    <i
                      class="fas fa-chevron-right float-right nav-arrow d-block d-lg-none"
                    ></i
                  ></a>
                </li>
                <li class="nav-item active">
                  <a class="nav-link" href="/product"
                    ><span>03</span> l'agence
                    <i
                      class="fas fa-chevron-right float-right nav-arrow d-block d-lg-none"
                    ></i
                    ><span class="sr-only">(current)</span></a
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#"
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
            </div>
          </nav>
        </div>
        <div
          class="wrapper d-flex d-update align-items-end align-items-md-center align-items-xl-end product-wrapper"
        >
          <div class="content w-100 mb-lg-5">
            <div
              class="d-flex align-items-center justify-content-md-center top-div"
            >
              <img
                class="head-icon d-inline-block"
                fluid
                :src="require('@/assets/images/pink.png')"
              />
              <div>
                <h1 class="heading text-uppercase mb-0">
                  <strong>ski</strong> freeride
                </h1>
                <h5 class="sub-heading text-uppercase d-block mt-2">
                  <i class="fas fa-caret-right mr-1"></i> serre-chevalier
                </h5>
              </div>
            </div>
            <div class="text-center mt-5 mt-lg-0 pt-md-4 pt-lg-0">
              <div
                class="d-flex d-md-inline-flex align-items-center justify-content-center positioned-border-bottom px-5 px-md-0"
              >
                <ul
                  class="list-unstyled py-4 py-lg-4 text-uppercase list-info mb-0 align-items-center"
                >
                  <li class="country">
                    <img
                      class="mr-2 icons"
                      fluid
                      :src="require('@/assets/images/globe.png')"
                    />france
                  </li>
                  <li class="time">
                    <img
                      class="mr-2 icons"
                      fluid
                      :src="require('@/assets/images/timer.png')"
                    />8 j - 7 nuits
                  </li>
                  <li class="status">
                    <img
                      class="mr-2 icons"
                      fluid
                      :src="require('@/assets/images/circle.png')"
                    />confirmé
                  </li>
                  <li class="place">
                    <img
                      class="mr-2 icons"
                      fluid
                      :src="require('@/assets/images/places.png')"
                    />10 places
                  </li>
                </ul>
                <span class="divider d-none d-lg-inline-flex"></span>
                <div
                  class="d-lg-inline-flex align-items-center font-weight-normal mr-0 text-uppercase text-warning session-date"
                >
                  <!-- <span>Prix basé sur 8 j - 7 nuits</span> -->
                  Session sélectionnée :
                  <button
                    type="button"
                    class="custom-datepicker px-0 pl-1 border-0 font-weight-bold"
                    data-toggle="modal"
                    data-target="#exampleModal"
                  >
                    28/10/2020
                  </button>
                </div>
              </div>
              <br />
              <div class="d-inline-flex align-items-center p-3 py-4 px-lg-0">
                <h5
                  class="interested-members text-uppercase mb-0 d-none d-lg-inline-block text-right"
                >
                  <strong class="d-block">1400 trippers</strong> intéressés
                </h5>
                <ul
                  class="img-list list-unstyled d-inline-flex align-items-center mx-3 mb-0"
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
                        class="img-fluid user_icon positioned-img rounded-circle mt-n1"
                        fluid
                        :src="require('@/assets/images/th.png')"
                      />
                    </a>
                  </li>
                  <li class="d-inline-block d-lg-none">
                    <span class="interested-members-count ml-2">+1.5k</span>
                  </li>
                </ul>
                <span class="divider d-none d-md-inline-block mx-2"></span>
                <a
                  class="galary-link text-uppercase text-white font-weight-bold d-none d-md-inline-block pl-3"
                  href="#"
                  ><img
                    class="img-fluid mr-3"
                    fluid
                    :src="require('@/assets/images/svg/noun_Image.svg')"
                  />GALERIE PHOTOS
                </a>
              </div>
            </div>
          </div>
          <div class="text-center booking-link d-none d-md-block">
            <a href="#" class="text-reset text-uppercase"
              ><i class="fas fa-arrow-alt-circle-down mr-1"></i>Détails &
              booking</a
            >
          </div>
        </div>
      </div>
    </header>
  </div>
</template>
<script>
export default {
  name: "ProductHeader",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
};
</script>
