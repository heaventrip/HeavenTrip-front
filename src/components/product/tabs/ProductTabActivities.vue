<template>
  <div class="">
    <div class="head-block my-4 d-flex justify-content-center justify-content-lg-start">
      <div class="product__nav__section-number"><span>02</span></div>
      <div class="pl-3">
        <p class="sub-heading mb-2">Activités & Spot</p>
        <h4 class="heading mb-0 text-uppercase">Activité principale</h4>
      </div>
      <span class="activity-head img-block d-none d-lg-flex align-items-center ml-auto"><img class="img_icon" fluid :src="require('@/assets/images/head-pin-dark.png')" /><img class="img_icon" fluid :src="require('@/assets/images/yoga-dark.png')" /></span>
    </div>
    <div class="d-flex align-items-center">
      <ul class="nav nav-pills text-uppercase font-weight-bold d-none d-lg-flex accommodation-nav m-0 w-100" id="pills-tab " role="tablist">
        <li class="nav-item fg-1" role="presentation">
          <a class="nav-link active ml-0" id="pills-act1-tab" data-toggle="pill" href="#pills-act1" role="tab" aria-controls="pills-solo" aria-selected="true">BUNGALOW SOLO</a>
        </li>
        <li class="nav-item fg-1" role="presentation">
          <a class="nav-link" id="pills-act2-tab" data-toggle="pill" href="#pills-act2" role="tab" aria-controls="pills-duo" aria-selected="false">BUNGALOW DUO</a>
        </li>
        <li class="nav-item fg-1" role="presentation">
          <a class="nav-link mr-0" id="pills-act3-tab" data-toggle="pill" href="#pills-act3" role="tab" aria-controls="pills-vip" aria-selected="false">BUNGALOW VIP</a>
        </li>
      </ul>
    </div>
    <div class="tab-content">
      <div class="tab-pane fade show active" id="pills-act1" role="tabpanel" aria-labelledby="pills-act1-tab">
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
              <h6 class="head text-uppercase text-white py-2 mb-1" style="width: max-content; margin-left: auto; border-top: 1px dashed #ffffff66; border-bottom: none">Mot du pro…</h6>
              <p class="content pt-3" style="border-top: 1px dashed #ffffff66">Lorem ipsum dolor sit amet, solum dictas vim cu, ne his hendrerit deterruisset, id sed doctus fuisset intellegam. Per case melius assentior ea. Et scaevola insolens eum. Ad vix verear eruditi ncillae, fabulas.</p>
              <h6 class="author mb-0">Edouard du Thin - Moniteur Ski / Snow</h6>
            </div>
            <div class="img-block">
              <img class="img-fill" fluid :src="require('@/assets/images/ui_faces/1.jpg')" />
            </div>
          </div>
        </div>
      </div>
      <div class="tab-pane fade" id="pills-act2" role="tabpanel" aria-labelledby="pills-act2-tab">
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
              <h6 class="head text-uppercase text-white py-2 mb-1" style="width: max-content; margin-left: auto; border-top: 1px dashed #ffffff66; border-bottom: none">Mot du pro…</h6>
              <p class="content pt-3" style="border-top: 1px dashed #ffffff66">Lorem ipsum dolor sit amet, solum dictas vim cu, ne his hendrerit deterruisset, id sed doctus fuisset intellegam. Per case melius assentior ea. Et scaevola insolens eum. Ad vix verear eruditi ncillae, fabulas.</p>
              <h6 class="author mb-0">Edouard du Thin - Moniteur Ski / Snow</h6>
            </div>
            <div class="img-block">
              <img class="img-fill" fluid :src="require('@/assets/images/ui_faces/1.jpg')" />
            </div>
          </div>
        </div>
      </div>
      <div class="tab-pane fade" id="pills-act3" role="tabpanel" aria-labelledby="pills-act3-tab">
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
              <h6 class="head text-uppercase text-white py-2 mb-1" style="width: max-content; margin-left: auto; border-top: 1px dashed #ffffff66; border-bottom: none">Mot du pro…</h6>
              <p class="content pt-3" style="border-top: 1px dashed #ffffff66">Lorem ipsum dolor sit amet, solum dictas vim cu, ne his hendrerit deterruisset, id sed doctus fuisset intellegam. Per case melius assentior ea. Et scaevola insolens eum. Ad vix verear eruditi ncillae, fabulas.</p>
              <h6 class="author mb-0">Edouard du Thin - Moniteur Ski / Snow</h6>
            </div>
            <div class="img-block">
              <img class="img-fill" fluid :src="require('@/assets/images/ui_faces/1.jpg')" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="linear-block">
    <div class="card border-0 rounded-0">
      <div class="card-header p-0 border-0 rounded-0" id="headingTwo">
        <div class="head-block py-3 px-4 px-lg-0 mb-lg-3 d-flex justify-content-between align-items-center" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
          <div class="left-border pl-3 ml-3 ml-lg-0">
            <p class="sub-heading mb-2">Activités & Spot</p>
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
            Vous avez un niveau expert avec une bonne expérience de la pratique du hors-piste, vous pouvez descendre toutes les pentes, dans toutes les conditions ‘ Vous maitrisez l’utilisation des appareils de sécurité ‘ Découvrez ce programme hors-piste d’exception pour skier les plus belles
            pentes des Hautes-Pyrénées : Saint Lary, Piau-Engaly, Peyragudes et Baqueira-Beret, la station du roi d’Espagne, plus grand domaine espagnol. Vous maitrisez l’utilisation des appareils de
            <span class="collapse" id="viewMoreToggle">sécurité ‘ Découvrez ce programme hors-piste d’exception pour skier les plus belles pentes des Hautes-Pyrénées : Saint Lary, Piau-Engaly, Peyragudes et Baqueira-Beret, la station du roi d’Espagne, plus grand domaine espagnol.</span>
          </p>
          <div class="row" style="margin-bottom: 5rem">
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
        <p class="sub-heading mb-2">Activités & Spot</p>
        <h4 class="heading mb-0">Activités incluses</h4>
      </div>
    </div>
    <div class="card-body">
      <div class="row">
        <div class="col-12 col-lg-4">
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
        <div class="col-12 col-lg-4">
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
            <p class="sub-heading mb-2">Activités & Spot</p>
            <h4 class="heading mb-0">Activités en option</h4>
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
                <li class="optional-activity__info-item">Durée : <strong>1 journée</strong></li>
                <li class="optional-activity__info-item">plongée : <strong>2</strong></li>
                <li class="optional-activity__info-item">Niveaux requis : <strong>aucun</strong></li>
                <li class="optional-activity__info-item--price"><strong>60€</strong>/pers.</li>
              </ul>
            </li>
            <li>
              <h5 class="activity-list-head mb-0"><img class="icon" fluid :src="require('@/assets/images/yoga-pink.png')" />SUP-PADDLE</h5>
              <ul class="list-unstyled text-uppercase activity-content-list mb-0">
                <li class="optional-activity__info-item">Durée : <strong>2h</strong></li>
                <li class="optional-activity__info-item">Tendance : <strong>eau calme</strong></li>
                <li class="optional-activity__info-item--price"><strong>15€</strong>/pers.</li>
              </ul>
            </li>
            <li>
              <h5 class="activity-list-head mb-0"><img class="icon" fluid :src="require('@/assets/images/yoga-pink.png')" />SPA TRADITIONNEL</h5>
              <ul class="list-unstyled text-uppercase activity-content-list mb-0">
                <li class="optional-activity__info-item">Durée : <strong>1/2 journée</strong></li>
                <li class="optional-activity__info-item">plongée : <strong>2</strong></li>
                <li class="optional-activity__info-item">Niveaux requis : <strong>aucun</strong></li>
                <li class="optional-activity__info-item--price"><strong>60€</strong>/pers.</li>
              </ul>
            </li>
            <li>
              <h5 class="activity-list-head mb-0"><img class="icon" fluid :src="require('@/assets/images/yoga-pink.png')" />SUP-PADDLE</h5>
              <ul class="list-unstyled text-uppercase activity-content-list mb-0">
                <li class="optional-activity__info-item">Durée : <strong>2h</strong></li>
                <li class="optional-activity__info-item">Tendance : <strong>eau calme</strong></li>
                <li class="optional-activity__info-item--price"><strong>15€</strong>/pers.</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProductTabActivity',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
.optional-activity__info-item--price {
  border-left: 1px solid #292f33;
}
.product__nav__section-number {
  position: relative;
  height: 3rem;
  width: 3rem;
  border-radius: 10px;
  background: #292f33;
  font-size: 1.8rem;
  font-weight: 900;
  text-align: center;
  color: #fff;
}
</style>
