<template>
  <div>
    <footer class="bg-dark text-white footer pb-4">
      <div class="container">
        <div class="row text-center text-uppercase pt-md-5 pt-lg-0">
          <div class="col-12 col-md-10 mx-auto">
            <div class="row">
              <div class="col-12 col-sm-6 col-lg-3">
                <InlineSvg :src="require('@/assets/svg/fingerprint.svg')" />
                <h6 class="sub-heading mt-4 font-weight-bold">conseils & suivi</h6>
                <div class="sub-sub-heading">avant et pendant ton sejour</div>
              </div>
              <div class="col-12 col-sm-6 col-lg-3">
                <InlineSvg :src="require('@/assets/svg/flask.svg')" />
                <h6 class="sub-heading mt-4 font-weight-bold">creer et personnalise</h6>
                <div class="sub-sub-heading">ton propre stage</div>
              </div>
              <div class="col-12 col-sm-6 col-lg-3">
                <InlineSvg :src="require('@/assets/svg/kitchen-hat.svg')" />
                <h6 class="sub-heading mt-4 font-weight-bold">organisation</h6>
                <div class="sub-sub-heading">made in heaven trip</div>
              </div>
              <div class="col-12 col-sm-6 col-lg-3">
                <InlineSvg :src="require('@/assets/svg/mic.svg')" />
                <h6 class="sub-heading mt-4 font-weight-bold">discute avant le depart</h6>
                <div class="sub-sub-heading">avec les autres participants</div>
              </div>
            </div>
          </div>
        </div>
        <hr style="margin: 5rem 0" />
        <div class="row align-items-start">
          <div class="col-12 col-sm-6 col-lg-3">
            <h3 class="text-uppercase border-bottom d-flex align-items-center pb-3 heading mb-4">
              social media
              <img class="mr-2 ml-auto" fluid :src="require('@/assets/images/share.png')" />
            </h3>
            <div class="d-flex align-items-center social-icons">
              <a href="#" class="rounded-circle d-inline-block mr-2 text-dark"><img class="mr-2" fluid :src="require('@/assets/images/insta.png')" /><img class="mr-2 hover-img" fluid :src="require('@/assets/images/insta_h.png')" /></a>
              <a href="#" class="rounded-circle d-inline-block mr-2 text-dark"><img class="mr-2" fluid :src="require('@/assets/images/fb.png')" /><img class="mr-2 hover-img" fluid :src="require('@/assets/images/fb_h.png')" /></a>
              <a href="#" class="rounded-circle d-inline-block mr-2 text-dark"><img class="mr-2" fluid :src="require('@/assets/images/youtube.png')" /><img class="mr-2 hover-img" fluid :src="require('@/assets/images/youtube_h.png')" /></a>
              <span class="ml-auto">#yourheaventrip</span>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-lg-3">
            <h3 class="text-uppercase border-bottom d-flex align-items-center pb-3 heading mb-4">
              creer ton stage
              <img class="mr-2 ml-auto" fluid :src="require('@/assets/images/stage.png')" />
            </h3>
            <p class="para mb-0">Devenez auteur en personnalisant votre stage sportif et partagez le !</p>
          </div>

          <div class="col-12 col-sm-6 col-lg-3">
            <h3 class="text-uppercase border-bottom d-flex align-items-center pb-3 heading mb-4">
              partenaires
              <img class="mr-2 ml-auto" fluid :src="require('@/assets/images/star_white.png')" />
            </h3>
            <div id="" class="carousel slide partner" data-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img class="d-block mx-auto" fluid :src="require('@/assets/images/decath.png')" />
                </div>
                <div class="carousel-item">
                  <InlineSvg :src="require('@/assets/svg/logo-dark.svg')" width="180" fill="white" />
                </div>
                <div class="carousel-item">
                  <img class="d-block mx-auto" fluid :src="require('@/assets/images/decath.png')" />
                </div>
                <div class="carousel-item">
                  <img class="d-block mx-auto" fluid :src="require('@/assets/images/logo.png')" />
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-lg-3">
            <h3 class="text-uppercase d-flex align-items-center heading">
              <img class="mr-2" fluid :src="require('@/assets/images/f-mail.png')" />
              abonne-toi a la newsletter
            </h3>
            <p class="para mb-3">Ne manque surtout pas toute l'actualite sur nos offres !</p>
            <form class="d-flex">
              <input class="form-control mail_input" type="text" name="" placeholder="Mon adresse email..." style="border-top-left-radius: 2px; border-bottom-left-radius: 2px" />
              <button class="btn bg-pink font-weight-bold text-white text-uppercase mail_btn px-4" style="border-top-right-radius: 2px; border-bottom-right-radius: 2px">s'abonner</button>
            </form>
          </div>
        </div>
        <hr />
        <div class="row list-row">
          <div class="col-12 col-md-8 mr-md-auto col-xl-4 pl-0 pr-5 ml-lg-3 ml-xl-3 order-5 order-md-1 text-center text-md-left my-4">
            <div class="d-flex align-items-center">
              <InlineSvg :src="require('@/assets/svg/logo-small.svg')" height="140" class="fs-0 mr-5" fill="white" />
              <p class="para mb-0">Heaven Trip organise en petit groupe des voyages sportifs pour tous et à travers le globe. Un nouveau concept d'evasion melant sport. culture et bien-etre.</p>
            </div>
          </div>

          <div class="col-12 col-md-9 col-xl-4 pl-xl-5 order-md-3 order-xl-2 my-4">
            <div class="row">
              <div class="col-4 pr-0">
                <h5 class="text-uppercase list-head">Top destinations</h5>
                <ul class="list-unstyled" style="line-height: 1">
                  <li>
                    <router-link :to="{ name: 'SearchHome', query: { country: countries[0]?.id } }">{{ countries[0]?.name }}</router-link>
                  </li>
                  <li>
                    <router-link :to="{ name: 'SearchHome', query: { country: countries[1]?.id } }">{{ countries[1]?.name }}</router-link>
                  </li>
                  <li>
                    <router-link :to="{ name: 'SearchHome', query: { country: countries[2]?.id } }">{{ countries[2]?.name }}</router-link>
                  </li>
                  <li>
                    <router-link :to="{ name: 'SearchHome', query: { country: countries[3]?.id } }">{{ countries[3]?.name }}</router-link>
                  </li>
                </ul>
              </div>
              <div class="col-4">
                <h5 class="text-uppercase list-head">Top activites</h5>
                <ul class="list-unstyled" style="line-height: 1">
                  <li>
                    <router-link :to="{ name: 'SearchHome', query: { activity: sports[0]?.id } }">{{ sports[0]?.name }}</router-link>
                  </li>
                  <li>
                    <router-link :to="{ name: 'SearchHome', query: { activity: sports[1]?.id } }">{{ sports[1]?.name }}</router-link>
                  </li>
                  <li>
                    <router-link :to="{ name: 'SearchHome', query: { activity: sports[2]?.id } }">{{ sports[2]?.name }}</router-link>
                  </li>
                  <li>
                    <router-link :to="{ name: 'SearchHome', query: { activity: sports[3]?.id } }">{{ sports[3]?.name }}</router-link>
                  </li>
                </ul>
              </div>
              <div class="col-4">
                <h5 class="text-uppercase list-head">thematiques</h5>
                <ul class="list-unstyled" style="line-height: 1">
                  <li v-for="theme in themes" :key="theme">
                    <router-link :to="{ name: 'SearchHome', query: { theme: theme.id } }">{{ theme.name }}</router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="ml-xl-n3 col-6 col-md-3 col-xl-3 p-xl-0 order-3 order-md-2 my-4 order-xl-3">
            <div class="row h-100">
              <div class="col-xl-3 d-none d-xl-inline-block text-center h-100 pr-0">
                <span class="divider-line"></span>
              </div>
              <div class="col-12 col-xl-8 ml-auto pr-0">
                <h5 class="text-uppercase list-head">A propos</h5>
                <ul class="list-unstyled" style="line-height: 1">
                  <li><a href="javascript:void(0);">L'agence</a></li>
                  <li><a href="javascript:void(0);">Tourisme responsable</a></li>
                  <li><a href="javascript:void(0);">FAQ</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-6 col-md-3 col-xl-1 p-xl-0 order-2 order-md-4 my-4 order-xl-4 positioned-tripcol">
            <h5 class="text-uppercase list-head">Rejoins-nous</h5>
            <ul class="list-unstyled" style="line-height: 1">
              <li><a href="javascript:void(0);">Team Heaven Trip</a></li>
              <li><a href="javascript:void(0);">Moniteur / Guide</a></li>
              <li><a href="javascript:void(0);">Marque et sponsors</a></li>
            </ul>
          </div>
          <div class="col-12 order-4 d-block d-md-none">
            <hr class="my-4" />
          </div>
        </div>
        <div class="row">
          <div class="w-100 text-center mt-xl-3 d-xl-flex justify-content-xl-between align-items-xl-center">
            <p class="mb-0 text-left text-sm-center copy-right mr-xl-3">&copy; Tous droits reserves - Heaven Trip 2019 - 2020</p>
            <ul class="list-unstyled mb-0 d-flex justify-content-center bottom-link-list">
              <li>
                <a href="javascript:void(0);"><span class="d-none d-md-inline-block">Conditions generales de vente</span><span class="d-inline-block d-md-none">Nos CGV</span> </a>
              </li>
              <li>
                <a href="javascript:void(0);"><span class="d-none d-md-inline-block">Conditions generales d'utilisations</span><span class="d-inline-block d-md-none">Nos CGU</span> </a>
              </li>
              <li><a href="javascript:void(0);">Mentions légales</a></li>
            </ul>
            <hr class="d-block d-xl-none my-3" />
            <div class="d-flex justify-content-between align-items-center text-uppercase font-weight-bold mail-box" style="flex-grow: 0.2">
              <a href="tel:0369316618" class="text-reset py-2" style="font-size: 0.85rem">
                <InlineSvg :src="require('@/assets/svg/phone.svg')" class="mr-3" fill="white" height="20" />
                03 69 31 66 18
              </a>
              <div class="divider" style="height: 1rem"></div>
              <a href="#" class="text-reset py-2" style="font-size: 0.85rem">
                <InlineSvg :src="require('@/assets/svg/chat.svg')" class="mr-3" fill="white" height="20" />
                écrivez-nous
              </a>
            </div>
            <!-- <div class="btn-group">
              <button type="button" class="btn dropdown-toggle text-uppercase py-0 border-0 font-weight-bold drpbtn-right text-white" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">fr</button>
              <div class="dropdown-menu text-uppercase">
                <a class="dropdown-item" href="#">fr</a>
                <a class="dropdown-item" href="#">en</a>
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  name: 'Footer',
  data() {
    return {
      countries: {},
      themes: {},
      sports: {}
    }
  },
  async created() {
    this.$axios.get('/countries').then((res) => (this.countries = res.data.countries))
    this.$axios.get('/sports').then((res) => (this.sports = res.data.sports))
    this.$axios.get('/sport-categories').then((res) => (this.themes = res.data.sportCategories))
  }
}
</script>

<style scoped>
.carousel-slide {
  margin-bottom: 0 !important;
}
.user_icon {
  background-color: white;
}
.sub-sub-heading {
  font-size: 0.75rem;
  font-weight: 300;
  text-transform: uppercase;
  font-family: Muli, sans-serif;
}
.footer {
  padding-top: 4rem;
}
</style>
