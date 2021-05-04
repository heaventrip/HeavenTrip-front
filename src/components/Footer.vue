<template>
  <div>
    <footer class="bg-dark text-white footer pt-5 pb-4">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-10 col-lg-5 mx-auto text-center">
            <p class="head para pt-3 pt-md-5 pt-lg-4">
              <span class="mobile-block">Besain d'un conseil</span> au demande
              specifique ?<br />disponible
              <span class="font-weight-bold">7j / 7</span> de
              <span class="font-weight-bold">8h30 à 20h00</span>
            </p>
            <div
              class="border rounded p-2 d-flex justify-content-around text-white text-uppercase font-weight-bold mail-box"
            >
              <a href="tel:0369316618" class="text-reset py-2"
                ><img
                  class="mr-3"
                  fluid
                  :src="require('@/assets/images/tel.png')"
                /><img
                  class="mr-3 hover-img"
                  fluid
                  :src="require('@/assets/images/tel_h.png')"
                />03 69 31 66 18</a
              >
              <div class="divider"></div>
              <a href="#" class="text-reset py-2 positioned-tripcol"
                ><img
                  class="mr-3"
                  fluid
                  :src="require('@/assets/images/chat.png')"
                /><img
                  class="mr-3 hover-img"
                  fluid
                  :src="require('@/assets/images/chat_h.png')"
                />écrivez-nous</a
              >
            </div>
          </div>
        </div>
        <hr />
        <div class="row">
          <div
            class="col-12 col-sm-6 col-lg-3 pl-lg-0 order-sm-2 order-lg-4 mb-5 mb-lg-0"
          >
            <h3 class="text-uppercase d-flex align-items-center heading">
              <img
                class="mr-2"
                fluid
                :src="require('@/assets/images/f-mail.png')"
              />
              abonne-toi a la newsletter
            </h3>
            <p class="para mb-3">
              Ne manque surtout pas toute l'actualite sur nos offres !
            </p>
            <form class="d-flex">
              <input
                class="form-control mail_input rounded-left"
                type="text"
                name=""
                placeholder="Mon adresse email..."
              />
              <button
                class="btn btn-warning font-weight-bold rounded-right text-uppercase mail_btn"
              >
                s'abonner
              </button>
            </form>
          </div>
          <div class="col-12 col-sm-6 col-lg-3 pr-md-5 order-sm-1 mb-5 mb-lg-0">
            <h3
              class="text-uppercase border-bottom d-flex align-items-center pb-3 heading mb-4"
            >
              social media
              <img
                class="mr-2 ml-auto"
                fluid
                :src="require('@/assets/images/share.png')"
              />
            </h3>
            <div class="d-flex align-items-center social-icons">
              <a href="#" class="rounded-circle d-inline-block mr-2 text-dark"
                ><img
                  class="mr-2"
                  fluid
                  :src="require('@/assets/images/insta.png')" /><img
                  class="mr-2 hover-img"
                  fluid
                  :src="require('@/assets/images/insta_h.png')"
              /></a>
              <a href="#" class="rounded-circle d-inline-block mr-2 text-dark"
                ><img
                  class="mr-2"
                  fluid
                  :src="require('@/assets/images/fb.png')" /><img
                  class="mr-2 hover-img"
                  fluid
                  :src="require('@/assets/images/fb_h.png')"
              /></a>
              <a href="#" class="rounded-circle d-inline-block mr-2 text-dark"
                ><img
                  class="mr-2"
                  fluid
                  :src="require('@/assets/images/youtube.png')" /><img
                  class="mr-2 hover-img"
                  fluid
                  :src="require('@/assets/images/youtube_h.png')"
              /></a>
              <span class="ml-auto">#yourheaventrip</span>
            </div>
          </div>
          <div
            class="col-12 col-sm-6 col-lg-3 pr-md-5 order-sm-3 mb-5 mb-sm-0 mt-4 mt-md-5 mt-lg-0"
          >
            <h3
              class="text-uppercase border-bottom d-flex align-items-center pb-3 heading mb-4"
            >
              partenaires
              <img
                class="mr-2 ml-auto"
                fluid
                :src="require('@/assets/images/star_white.png')"
              />
            </h3>
            <div id="" class="carousel slide partner" data-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    class="d-block mx-auto"
                    fluid
                    :src="require('@/assets/images/decath.png')"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block mx-auto"
                    fluid
                    :src="require('@/assets/images/logo.png')"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block mx-auto"
                    fluid
                    :src="require('@/assets/images/decath.png')"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block mx-auto"
                    fluid
                    :src="require('@/assets/images/logo.png')"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            class="col-12 col-sm-6 col-lg-3 pr-lg-5 order-sm-4 order-lg-2 mb-0 mt-4 mt-md-5 mt-lg-0"
          >
            <h3
              class="text-uppercase border-bottom d-flex align-items-center pb-3 heading mb-4"
            >
              creer ton stage
              <img
                class="mr-2 ml-auto"
                fluid
                :src="require('@/assets/images/stage.png')"
              />
            </h3>
            <p class="para mb-0">
              Devenez auteur en personnalisant votre stage sportif et partagez
              le !
            </p>
          </div>
        </div>
        <hr />
        <div class="row list-row">
          <div
            class="col-12 col-md-8 mr-md-auto col-xl-4 px-lg-0 ml-lg-3 ml-xl-3 order-5 order-md-1 text-center text-md-left my-4"
          >
            <img
              class="logo mb-3"
              fluid
              :src="require('@/assets/images/logo.png')"
            />
            <p class="para">
              Heaven Trip organise en petit groupe des voyages sportifs pour
              tous et à travers le globe. Un nouveau concept d'evasion melant
              sport. culture et bien-etre.
            </p>
          </div>
          <div
            class="col-12 col-md-9 col-xl-4 pl-xl-5 order-md-3 order-xl-2 my-4"
          >
            <div class="row">
              <div class="col-4 pr-0">
                <h5 class="text-uppercase list-head">Top destinations</h5>
                <ul class="list-unstyled">
                  <li><a href="#">Marac</a></li>
                  <li><a href="#">Espagne</a></li>
                  <li><a href="#">Egypte</a></li>
                  <li><a href="#">France</a></li>
                </ul>
              </div>
              <div class="col-4">
                <h5 class="text-uppercase list-head">Top activites</h5>
                <ul class="list-unstyled">
                  <li><a href="#">Kitesurf</a></li>
                  <li><a href="#">Escalade</a></li>
                  <li><a href="#">Surf</a></li>
                  <li><a href="#">Yoga</a></li>
                </ul>
              </div>
              <div class="col-4">
                <h5 class="text-uppercase list-head">thematiques</h5>
                <ul class="list-unstyled">
                  <li><a href="#">Vent & Mer</a></li>
                  <li><a href="#">Montagne</a></li>
                  <li><a href="#">Neige</a></li>
                  <li><a href="#">A pieds</a></li>
                  <li><a href="#">Multi-activites</a></li>
                  <li><a href="#">A Eien-etre</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div
            class="ml-xl-n3 col-6 col-md-3 col-xl-3 p-xl-0 order-3 order-md-2 my-4 order-xl-3"
          >
            <div class="row h-100">
              <div
                class="col-xl-3 d-none d-xl-inline-block text-center h-100 pr-0"
              >
                <span class="divider-line"></span>
              </div>
              <div class="col-12 col-xl-8 ml-auto pr-0">
                <h5 class="text-uppercase list-head">A propos</h5>
                <ul class="list-unstyled">
                  <li><a href="#">L'agence</a></li>
                  <li><a href="#">Tourisme responsable</a></li>
                  <li><a href="#">FAQ</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div
            class="col-6 col-md-3 col-xl-1 p-xl-0 order-2 order-md-4 my-4 order-xl-4 positioned-tripcol"
          >
            <h5 class="text-uppercase list-head">Rejoins-nous</h5>
            <ul class="list-unstyled">
              <li><a href="#">Team Heaven Trip</a></li>
              <li><a href="#">Moniteur / Guide</a></li>
              <li><a href="#">Margue et sponsors</a></li>
            </ul>
          </div>
          <div class="col-12 order-4 d-block d-md-none">
            <hr class="my-4" />
          </div>
        </div>
        <div class="row">
          <div
            class="col-12 text-center mt-xl-3 d-xl-flex justify-content-xl-center align-items-xl-center position-relative"
          >
            <ul
              class="list-unstyled mb-0 d-flex justify-content-center bottom-link-list order-xl-2"
            >
              <li>
                <a href="#"
                  ><span class="d-none d-md-inline-block"
                    >Conditions generales de vente</span
                  ><span class="d-inline-block d-md-none">Nos CGV</span>
                </a>
              </li>
              <li>
                <a href="#"
                  ><span class="d-none d-md-inline-block"
                    >Conditions generales d'utilisations</span
                  ><span class="d-inline-block d-md-none">Nos CGU</span>
                </a>
              </li>
              <li><a href="#">Mentions légales</a></li>
            </ul>
            <hr class="d-block d-xl-none my-3" />
            <p
              class="mb-0 text-left text-sm-center copy-right order-xl-1 mr-xl-3"
            >
              &copy; Tous droits reserves - Heaven Trip 2019 - 2020
            </p>
            <div class="btn-group dropright order-xl-3">
              <button
                type="button"
                class="btn dropdown-toggle text-uppercase py-0 border-0 font-weight-bold drpbtn-right text-white"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                fr
              </button>
              <div class="dropdown-menu text-uppercase">
                <a class="dropdown-item" href="#">fr</a>
                <a class="dropdown-item" href="#">en</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  name: "Footer",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
};
</script>
