<template>
  <div class="linear-block position-relative">
    <div class="card border-0 rounded-0">
      <div class="card-header p-0 border-0 rounded-0" id="headingSeven">
        <div class="head-block my-4 d-flex justify-content-start align-items-center collapsed" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="true" aria-controls="collapseSeven">
          <div class="product__nav__section-number"><span>05</span></div>
          <div class="pl-3">
            <p class="sub-heading mb-2">Tips et astuces</p>
            <h4 class="heading mb-0 text-uppercase">Infos pays</h4>
          </div>
        </div>
      </div>
      <div id="collapseSeven" class="collapse show" aria-labelledby="headingSeven">
        <div class="card-body">
          <div class="row">
            <div class="col-12 col-lg-7">
              <h5 class="pays-head border-0 p-0 text-uppercase font-weight-bold">L’EGYPTE</h5>
              <p class="content">
                Vous avez un niveau expert avec une bonne expérience de la pratique du hors-piste, vous pouvez descendre toutes les pentes, dans toutes les conditions ‘ Vous maitrisez l’utilisation des appareils de sécurité ‘ Découvrez ce programme hors-piste d’exception pour skier les plus belles
                pentes des Hautes-Pyrénées
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
            En venant du nord de la France, prenez l’autoroute jusqu’à Grenoble, puis RN 91 “Col du Lautaret”. En venant de l’Italie prenez l’autoroute jusqu’à Oulx (35km de Briançon) puis emprunter le Col de Montgenèvre RN 94. En venant du sud de la France, prenez l’autoroute jusqu’au Tallard,
            Embrun, Briançon RN 94.
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
</template>
<script>
export default {
  name: 'ProductTabTips',
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
