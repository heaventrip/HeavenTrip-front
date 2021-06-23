<template>
  <div class="d-flex align-items-center justify-content-center" style="margin-bottom: 5rem">
    <svg xmlns="http://www.w3.org/2000/svg" fill="#292f33" height="130" viewBox="0 0 1192.975 1192.752">
      <path
        d="M922.67,1021.59l-8.031,6.627c-93.359,77.049-211.9,119.483-333.788,119.483-.854,0-1.715,0-2.567-.006-141.628-.692-275.123-56.4-375.892-156.857C4.543,793.6-10.455,486.108,167.5,275.583l6.751-7.985-31.929-32.17-8.044,9.47A561.006,561.006,0,0,0,32.541,421.506,570.515,570.515,0,0,0,.123,624.269C3.191,774.608,63.744,916.086,170.629,1022.64c109.286,108.948,254.068,169.358,407.7,170.1.952,0,1.9.008,2.846.008a570.306,570.306,0,0,0,192.7-33.271,564.467,564.467,0,0,0,171.155-97.745l9.586-7.97Z"
      />
      <path
        d="M1012.651,180.231C898.9,66.44,747.449,2.46,586.2.076a614.174,614.174,0,0,0-415.539,152.7l-3.708,3.253,94.476,95.18,3.271-2.782C457.832,84.241,738.875,95.864,918.427,275.468c90.977,91.017,141.033,211.943,140.947,340.5a480.2,480.2,0,0,1-117.663,314.5l-2.824,3.252,94.448,95.151,3.282-3.674a614.2,614.2,0,0,0,156.358-409.118C1193.1,451.477,1129.057,296.691,1012.651,180.231ZM951.526,933.283A487.864,487.864,0,0,0,1068.65,615.974c.087-131.037-50.933-254.293-143.663-347.065-88.349-88.374-205.065-139.74-328.645-144.638-121.685-4.833-240.318,35.745-334.366,114.322L180.5,156.511A604.625,604.625,0,0,1,586.058,9.351c158.826,2.348,308,65.364,420.031,177.439C1120.744,301.5,1183.821,453.95,1183.7,616.07a605.089,605.089,0,0,1-150.736,399.259Z"
      />
      <svg viewBox="-8 -20 30 30">
        <text font-family="Oswald" font-size="12" font-weight="800">04</text>
      </svg>
    </svg>
    <div class="head-block ml-4">
      <p class="sub-heading mb-2">{{ course.sports[0] ? course.sports[0].name : 'Sport' }}</p>
      <h4 class="heading mb-0">Programme</h4>
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
  props: ['course'],
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
