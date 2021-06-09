<template>
  <div class="linear-block">
    <div class="card border-0 rounded-0">
      <div class="card-header p-0 border-0 rounded-0 mb-4" id="headingThree">
        <div class="head-block px-4 px-lg-0 my-4 d-flex justify-content-start align-items-center collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
          <div class="product__nav__section-number"><span>03</span></div>
          <div class="pl-3">
            <p class="sub-heading mb-2">Vie sur place</p>
            <h4 class="heading mb-0 text-uppercase">Hébergement</h4>
          </div>
          <i class="fa fa-chevron-down h4 mb-0 arrow text-white"></i>
        </div>
      </div>
      <div id="collapseThree" class="collapse show" aria-labelledby="headingThree">
        <div class="card-body mb-5">
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
            <p class="sub-heading mb-2">Vie sur place</p>
            <h4 class="heading mb-0">LES repas</h4>
          </div>
          <i class="fa fa-chevron-down h4 mb-0 arrow text-white"></i>
        </div>
      </div>
      <div id="collapseFour" class="collapse show" aria-labelledby="headingFour">
        <div class="card-body">
          <p class="content mb-5">Un des meilleurs terrain de jeu pour s’initier et se perfectionner en kitesurf. Les débutants s’y sentent en sécurité grâce au plan d’eau de faible profondeur.</p>
          <div class="d-flex no-gutters justify-content-between">
            <div class="col-12 col-lg-5">
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
            <div class="brown-div col-5" style="margin-left: 2rem; padding: 1rem; background-color: #fff; color: #292f33; box-shadow: 0px -1px 10px rgba(41, 47, 51, 0.1)">
              <h6 class="head text-uppercase py-2 mb-1" style="width: max-content; margin-left: auto; border-top: 1px dashed #ffffff66; border-bottom: none">Mot du pro…</h6>
              <p class="content pt-3" style="border-top: 1px dashed #ffffff66">Lorem ipsum dolor sit amet, solum dictas vim cu, ne his hendrerit deterruisset, id sed doctus fuisset intellegam. Per case melius assentior ea. Et scaevola insolens eum. Ad vix verear eruditi ncillae, fabulas.</p>
              <h6 class="author mb-0">Edouard du Thin - Moniteur Ski / Snow</h6>
            </div>
            <div class="img-block col-2">
              <img class="img-fill" fluid :src="require('@/assets/images/ui_faces/1.jpg')" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="linear-block plain-block" style="margin-top: 3rem">
    <div class="card border-0 rounded-0">
      <div class="card-header p-0 border-0 rounded-0" id="headingFive">
        <div class="head-block py-3 px-4 px-lg-0 mb-lg-4 d-flex justify-content-between align-items-center collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
          <div class="left-border pl-3 ml-3 ml-lg-0">
            <p class="sub-heading mb-2">Vie sur place</p>
            <h4 class="heading mb-0">A proximité</h4>
          </div>
          <i class="fa fa-chevron-down h4 mb-0 arrow text-white"></i>
        </div>
      </div>
      <div id="collapseFive" class="collapse show" aria-labelledby="headingFive">
        <div class="card-body">
          <p class="content">
            Un des meilleurs terrain de jeu pour s’initier et se perfectionner en kitesurf. Les débutants s’y sentent en sécurité grâce au plan d’eau de faible profondeur. En cas de mauvaises conditions météorologiques ou autres. En cas de mauvaises conditions météorologiques ou autres. En cas de
            mauvaises conditions météorologiques.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProductTabLiving',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
.product__nav__section-number {
  position: relative;
  width: 3rem;
  height: 3rem;
  border-radius: 10px;
  background: #292f33;
  font-size: 1.8rem;
  font-weight: 900;
  text-align: center;
  color: #fff;
}
</style>
