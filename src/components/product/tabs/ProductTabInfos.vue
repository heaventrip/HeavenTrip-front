<template>
  <div class="linear-block plain-block mt-lg-4">
    <div class="head-block mb-4 d-flex justify-content-center justify-content-lg-start">
      <div class="product__nav__section-number"><span>01</span></div>
      <div class="pl-3">
        <p class="sub-heading mb-2">Infos séjour</p>
        <h4 class="heading mb-0">EN BREF...</h4>
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
        Vous avez un niveau expert avec une bonne expérience de la pratique du hors-piste, vous pouvez descendre toutes les pentes, dans toutes les conditions ‘ Vous maitrisez l’utilisation des appareils de sécurité ‘ Découvrez ce programme hors-piste d’exception pour skier les plus belles pentes
        des Hautes-Pyrénées : Saint Lary, Piau-Engaly, Peyragudes et Baqueira-Beret, la station du roi d’Espagne, plus grand domaine espagnol. Vous maitrisez l’utilisation des appareils de
        <span class="collapse" id="viewMore">sécurité ‘ Découvrez ce programme hors-piste d’exception pour skier les plus belles pentes des Hautes-Pyrénées : Saint Lary, Piau-Engaly, Peyragudes et Baqueira-Beret, la station du roi d’Espagne, plus grand domaine espagnol.</span>
      </p>
      <div class="row" style="margin-bottom: 4rem">
        <div class="col-9 col-lg-12 mx-auto">
          <div class="like-div">
            <h5 class="content-head">Tu vas adorer :</h5>
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
  <div class="linear-block product__overview__details-block">
    <div class="head-block d-flex justify-content-center justify-content-lg-start">
      <div class="left-border pl-3">
        <p class="sub-heading mb-2">Suis-je prêt ?</p>
        <h4 class="heading mb-0">Niveaux & intensité</h4>
      </div>
      <h6 @click="levelsModal = true" class="need-level text-uppercase d-none d-lg-flex align-items-center ml-auto mb-0">
        <img class="img_icon mr-2" fluid :src="require('@/assets/images/svg/PICTO_GRILLE_NIVEAUX.svg')" />
        <span>voir la grille <br />des niveaux</span>
        <teleport to="#modal">
          <div v-if="levelsModal" class="row level-modal" style="width: 50vw">
            <div class="col-5 bg-dark">
              <div class="nav flex-column nav-pills kitesurf-nav" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <a class="nav-link active" id="v-pills-level1-tab" data-toggle="pill" href="#v-pills-level1" role="tab" aria-controls="v-pills-level1" aria-selected="true">NIVEAU 1 <i class="fas fa-chevron-right nav-arrow float-right mr-n4"></i></a>
                <a class="nav-link" id="v-pills-level2-tab" data-toggle="pill" href="#v-pills-level2" role="tab" aria-controls="v-pills-level2" aria-selected="false">NIVEAU 2 <i class="fas fa-chevron-right nav-arrow float-right mr-n4"></i></a>
                <a class="nav-link" id="v-pills-level3-tab" data-toggle="pill" href="#v-pills-level3" role="tab" aria-controls="v-pills-level3" aria-selected="false">NIVEAU 3 <i class="fas fa-chevron-right nav-arrow float-right mr-n4"></i></a>
                <a class="nav-link" id="v-pills-level4-tab" data-toggle="pill" href="#v-pills-level4" role="tab" aria-controls="v-pills-level4" aria-selected="false">NIVEAU 4 <i class="fas fa-chevron-right nav-arrow float-right mr-n4"></i></a>
              </div>
            </div>
            <div class="col-7 bg-white">
              <div class="tab-content kitesurf-nav-content" id="v-pills-tabContent">
                <div class="tab-pane fade show active" id="v-pills-level1" role="tabpanel" aria-labelledby="v-pills-level1-tab">
                  <h4 class="surfhead text-center"><img class="align-text-bottom mr-3" fluid :src="require('@/assets/images/svg/PICTO_KITESURF.svg')" /> KITESURF</h4>
                  <h5 class="surfcontent-head mb-4">TOUS NIVEAUX</h5>
                  <ul class="mb-0 surflist">
                    <li>Marche de 4 à 5 heures par jour sur chemin, piste, sentier ou parcours vallonné. Dénivelé maximum de 500 m par jour.</li>
                    <li>Je marche régulièrement sans trop de dénivelé</li>
                    <li>Je pratique une activité sportive de temps en temps</li>
                  </ul>
                </div>
                <div class="tab-pane fade" id="v-pills-level2" role="tabpanel" aria-labelledby="v-pills-level2-tab">qwertyu</div>
                <div class="tab-pane fade" id="v-pills-level3" role="tabpanel" aria-labelledby="v-pills-level3-tab">asdfghjk</div>
                <div class="tab-pane fade" id="v-pills-level4" role="tabpanel" aria-labelledby="v-pills-level4-tab">zxcvbnm,</div>
              </div>
            </div>
          </div>
        </teleport>
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
              <h6 class="status-text mb-0">CONFIRMé ⓘ</h6>
            </span>
          </div>
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
        </div>
      </div>
    </div>
    <div class="head-block mb-4 d-flex justify-content-center justify-content-lg-start mb-0 mb-lg-3 mt-lg-5">
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
</template>
<script>
export default {
  name: 'ProductTabInfos',
  data() {
    return {
      levelsModal: false
    }
  }
}
</script>

<style scoped>
.level-modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}
.review__block {
  margin-top: 2rem;
  color: #7c7c7c;
}
.review__block-right__text-content {
  font-size: 0.875rem;
  font-family: Muli, sans-serif;
}
.review__block-right__top-infos {
  font-size: 0.875rem;
  font-family: Oswald, sans-serif;
  font-weight: 600;
  width: 65%;
  margin-bottom: 0.5rem;
}
.review__block__user-profile-link {
  height: min-content;
  padding-left: 1.5rem;
  border-left: 1px solid #7c7c7c;
  font-weight: bold;
  text-transform: uppercase;
}
.review__block-left__avatar {
  margin-bottom: 0.2rem;
  object-fit: cover;
  border-radius: 50%;
}
.review__block-left__date {
  font-family: Oswald, sans-serif;
  font-size: 0.8rem;
  font-weight: 500;
}
.review__block__stars {
  margin-right: 1.5rem;
  color: #ffc300;
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
.product__overview__details-block {
  padding: 30px 60px;
  border: 1px solid #ebebeb;
  background: none;
  border-radius: 0px;
}
</style>
