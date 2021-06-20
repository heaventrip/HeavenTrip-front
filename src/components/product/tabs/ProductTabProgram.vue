<template>
  <div class="linear-block py-0 mb-0">
    <h5 class="tour-head text-uppercase d-flex flex-column flex-lg-row align-items-start align-items-lg-center border-0">
      <span class="font-weight-bold text-danger">Jour 1</span>
      <ul class="list-unstyled tour-list text-uppercase ml-auto d-flex flex-column flex-lg-row mb-0">
        <li><img class="d-inline-block mr-2" fluid :src="require('@/assets/images/svg/PICTO_PLANE_ARRIVAL.svg')" />VOL pour <strong>HURGHADA</strong></li>
        <li>
          <img class="d-inline-block mr-2" fluid :src="require('@/assets/images/svg/Picto_transfert_navette.svg')" />Transferts VERS EL GOUNA :
          <strong>18H 19H 20H</strong>
        </li>
      </ul>
    </h5>
  </div>
  <div class="">
    <div class="card border-0 rounded-0">
      <div id="collapseSix" class="collapse show" aria-labelledby="headingSix">
        <div class="card-body">
          <div class="row">
            <div class="col-4 d-none d-lg-inline-block">
              <img class="img-fluid rounded-day-img" fluid :src="require('@/assets/images/beach.jpg')" />
            </div>
            <div class="col-12 col-lg-8">
              <p class="content">
                A votre sortie de l’aéroport de Hurghada vous serez directement pris en charge par une navette pour le transfert à votre Hébergement. Une réunion d’information est prévue le dimanche matin (cet horaire peut évoluer suivant l’arrivée du vol Heaven Trip). Une réunion d’information est
                prévue le dimanche.
              </p>
              <a class="view-more-btn active_hidden" data-toggle="collapse" href="#viewMoreday1" role="button" aria-expanded="false" aria-controls="viewMoreday1">Afficher d’avantage… <i class="fas fa-chevron-down ml-2"></i></a>
            </div>
            <div id="viewMoreday1" class="col-12 collapse">
              <p class="content">
                <span class="font-weight-800 d-block">Vous voyagez avec Heaven Trip</span>
                Possibilité de vol dans la nuit du samedi au dimanche. A noter que le choix de vol Paris / Hurghada est très limité, et contraignant : l’arrivée tardive dans la nuit de samedi à dimanche certaines semaines peut être à 4. Possibilité de vol dans la nuit du samedi au dimanche. A noter
                que le choix de vol Paris / Hurghada est très.
              </p>

              <a class="view-more-btn" data-toggle="collapse" href="#viewMoreday1" role="button" aria-expanded="false" aria-controls="viewMoreday1">Réduire<i class="fas fa-chevron-up ml-2"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="linear-block py-0 mb-0">
    <h5 class="tour-head text-uppercase d-flex flex-column flex-lg-row align-items-start align-items-lg-center border-0">
      <span class="font-weight-bold text-danger">Jour 1</span>
      <ul class="list-unstyled tour-list text-uppercase ml-auto d-flex flex-column flex-lg-row mb-0">
        <li><img class="d-inline-block mr-2" fluid :src="require('@/assets/images/svg/PICTO_PLANE_ARRIVAL.svg')" />VOL pour <strong>HURGHADA</strong></li>
        <li>
          <img class="d-inline-block mr-2" fluid :src="require('@/assets/images/svg/Picto_transfert_navette.svg')" />Transferts VERS EL GOUNA :
          <strong>18H 19H 20H</strong>
        </li>
      </ul>
    </h5>
  </div>
  <div class="">
    <div class="card border-0 rounded-0">
      <div id="collapseSix" class="collapse show" aria-labelledby="headingSix">
        <div class="card-body">
          <div class="row">
            <div class="col-4 d-none d-lg-inline-block">
              <img class="img-fluid rounded-day-img" fluid :src="require('@/assets/images/beach.jpg')" />
            </div>
            <div class="col-12 col-lg-8">
              <p class="content">
                A votre sortie de l’aéroport de Hurghada vous serez directement pris en charge par une navette pour le transfert à votre Hébergement. Une réunion d’information est prévue le dimanche matin (cet horaire peut évoluer suivant l’arrivée du vol Heaven Trip). Une réunion d’information est
                prévue le dimanche.
              </p>
              <a class="view-more-btn active_hidden" data-toggle="collapse" href="#viewMoreday1" role="button" aria-expanded="false" aria-controls="viewMoreday1">Afficher d’avantage… <i class="fas fa-chevron-down ml-2"></i></a>
            </div>
            <div id="viewMoreday1" class="col-12 collapse">
              <p class="content">
                <span class="font-weight-800 d-block">Vous voyagez avec Heaven Trip</span>
                Possibilité de vol dans la nuit du samedi au dimanche. A noter que le choix de vol Paris / Hurghada est très limité, et contraignant : l’arrivée tardive dans la nuit de samedi à dimanche certaines semaines peut être à 4. Possibilité de vol dans la nuit du samedi au dimanche. A noter
                que le choix de vol Paris / Hurghada est très.
              </p>

              <a class="view-more-btn" data-toggle="collapse" href="#viewMoreday1" role="button" aria-expanded="false" aria-controls="viewMoreday1">Réduire<i class="fas fa-chevron-up ml-2"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProductTabProgram',
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
