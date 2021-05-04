<template>
  <div>
    <footer class="bg-dark text-white footer pt-5 pb-4">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-10 col-lg-5 mx-auto text-center">
            <p class="head para pt-3 pt-md-5 pt-lg-4">
              Besain d'un conseil au demande specifique ?<br />disponible
              <span class="font-weight-bold">7j / 7</span> de
              <span class="font-weight-bold">8h30 à 20h00</span>
            </p>
            <div
              class="border rounded p-2 d-flex justify-content-around text-white text-uppercase font-weight-bold mail-box"
            >
              <a href="tel:0369316618" class="text-reset py-2"
                ><img
                  class="mr-3 align-baseline"
                  fluid
                  :src="require('@/assets/images/tel.png')"
                /><img
                  class="mr-3 align-baseline hover-img"
                  fluid
                  :src="require('@/assets/images/tel_h.png')"
                />03 69 31 66 18</a
              >
              <div class="divider"></div>
              <a href="#" class="text-reset py-2"
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
            class="col-12 col-sm-6 col-lg-3 pl-lg-0 order-sm-2 order-lg-4 mb-5 mar-btm mb-lg-0"
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
          <div
            class="col-12 col-sm-6 col-lg-3 pr-md-5 order-sm-1 mb-5 mar-btm mb-lg-0"
          >
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
          <div class="col-12 col-sm-6 col-lg-3 pr-md-5 order-sm-3 mb-5 mb-sm-0">
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
            class="col-12 col-sm-6 col-lg-3 pr-lg-5 order-sm-4 order-lg-2 mb-0"
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
            class="col-12 col-md-6 col-lg-3 pr-md-4 pr-lg-3 order-4 order-md-1 text-center text-md-left"
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
            class="col-12 col-md-5 col-lg-3 mb-md-5 d-none d-sm-block order-md-2"
          >
            <div class="row">
              <div class="col-6">
                <h5 class="text-uppercase list-head">Top destinations</h5>
                <ul class="list-unstyled">
                  <li><a href="#">Marac</a></li>
                  <li><a href="#">Espagne</a></li>
                  <li><a href="#">Egypte</a></li>
                  <li><a href="#">France</a></li>
                </ul>
              </div>
              <div class="col-6">
                <h5 class="text-uppercase list-head">Top activites</h5>
                <ul class="list-unstyled">
                  <li><a href="#">Kitesurf</a></li>
                  <li><a href="#">Escalade</a></li>
                  <li><a href="#">Surf</a></li>
                  <li><a href="#">Yoga</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-5 col-lg-3 pl-lg-0 order-md-3">
            <div class="row">
              <div class="col-6 col-lg-4 pl-lg-0">
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
              <div class="col-lg-2 d-none d-lg-inline-block text-center">
                <span class="divider-line"></span>
              </div>
              <div class="col-6">
                <h5 class="text-uppercase list-head">A propos</h5>
                <ul class="list-unstyled">
                  <li><a href="#">L'agence</a></li>
                  <li><a href="#">Tourisme responsable</a></li>
                  <li><a href="#">FAQ</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-7 col-lg-3 order-md-4">
            <div class="row">
              <div class="col-6 pl-md-5 pl-lg-0">
                <h5 class="text-uppercase list-head">service</h5>
                <ul class="list-unstyled">
                  <li><a href="#">Creer ton stage</a></li>
                  <li><a href="#">Demande personnalisee</a></li>
                  <li><a href="#">Comite d'entreprise</a></li>
                  <li><a href="#">Parrainage</a></li>
                  <li><a href="#">Assurances</a></li>
                </ul>
              </div>
              <div class="col-6">
                <h5 class="text-uppercase list-head">Rejoins-nous</h5>
                <ul class="list-unstyled">
                  <li><a href="#">Team Heaven Trip</a></li>
                  <li><a href="#">Moniteur / Guide</a></li>
                  <li><a href="#">Margue et sponsors</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-12 order-md-5">
            <hr class="d-block d-sm-none" />
          </div>
        </div>
        <div class="row">
          <div class="col-12 text-center mt-4">
            <ul
              class="list-unstyled mb-0 d-none d-sm-flex justify-content-center bottom-link-list"
            >
              <li class="d-none d-lg-block">
                <a href="#"
                  >&copy; Tous droits reserves - Heaven Trip 2019 - 2020</a
                >
              </li>
              <li><a href="#">Conditions generales de vente</a></li>
              <li><a href="#">Conditions generales d'utilisations</a></li>
              <li><a href="#">Mentions legales</a></li>
              <li><a href="#">Politique de confidentialite</a></li>
            </ul>
            <hr class="d-none d-sm-block d-lg-none my-3" />
            <p class="mb-0 text-left text-sm-center d-lg-none copy-right">
              &copy; Tous droits reserves - Heaven Trip 2019 - 2020
            </p>
            <div
              class="btn-group dropright float-right mt-n4 d-sm-inline-flex d-none"
            >
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
  name: "SearchFooter",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
};
</script>
