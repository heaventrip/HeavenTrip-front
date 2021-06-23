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
        <text font-family="Oswald" font-size="12" font-weight="800">05</text>
      </svg>
    </svg>
    <div class="head-block ml-4">
      <p class="sub-heading mb-2">{{ course.sports[0] ? course.sports[0].name : 'Sport' }}</p>
      <h4 class="heading mb-0">Tips & astuces</h4>
    </div>
  </div>
  <div class="linear-block position-relative">
    <div class="card border-0 rounded-0">
      <div class="card-header p-0 border-0 rounded-0" id="headingSeven">
        <div class="head-block d-flex justify-content-start align-items-center collapsed mb-4" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="true" aria-controls="collapseSeven">
          <!-- <div class="product__nav__section-number"><span>05</span></div> -->
          <div class="">
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
          <ul class="list-unstyled place-list f-13 text-uppercase mb-0 d-flex flex-wrap flex-column flex-lg-row" style="border-bottom: 1px dashed #ebebeb">
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
        <h6 class="head text-white font-weight-bold letter-space">
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
      <button @click="countryModal = true" class="btn btn-danger btn-block rounded-0 border-0 pay-btn py-3 text-uppercase mb-5"><img class="d-inline-block mr-3" fluid :src="require('@/assets/images/svg/PICTO_INFOS_SUPP_CARD_HEBERGEMENT.svg')" />VOIR LES INFOs SANITAIRE</button>
      <teleport to="#modal">
        <transition name="fade">
          <div v-if="countryModal" class="modal__backdrop">
            <div class="row country-modal" style="width: 50vw">
              <div class="col-5 bg-dark">
                <div class="nav flex-column nav-pills kitesurf-nav" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                  <h6 class="mb-5 text-uppercase text-white font-weight-normal">
                    <i class="fas fa-notes-medical mr-3 h1 mb-0 align-bottom"></i>
                    <span class="d-inline-block"
                      >INFOs<br />
                      SANITAIRE</span
                    >
                  </h6>
                  <a class="nav-link active" id="v-pills-health1-tab" data-toggle="pill" href="#v-pills-health1" role="tab" aria-controls="v-pills-health1" aria-selected="true">VACCIN <i class="fas fa-chevron-right nav-arrow float-right mr-n4"></i></a>
                  <a class="nav-link" id="v-pills-health2-tab" data-toggle="pill" href="#v-pills-health2" role="tab" aria-controls="v-pills-health2" aria-selected="false">REGLES A SAVOIR <i class="fas fa-chevron-right nav-arrow float-right mr-n4"></i></a>
                  <a class="nav-link" id="v-pills-health3-tab" data-toggle="pill" href="#v-pills-health3" role="tab" aria-controls="v-pills-health3" aria-selected="false">INFOS COVID <i class="fas fa-chevron-right nav-arrow float-right mr-n4"></i></a>
                </div>
              </div>
              <div class="col-7 bg-white" style="position: relative">
                <div class="tab-content kitesurf-nav-content" id="v-pills-tabContent">
                  <div class="tab-pane fade show active" id="v-pills-health1" role="tabpanel" aria-labelledby="v-pills-health1-tab">
                    <h4 class="surfhead text-center"><img class="align-text-bottom mr-3 globe_dark" fluid :src="require('@/assets/images/globe_dark.png')" /> EGYPTE</h4>
                    <h5 class="surfcontent-head mb-1">Vaccin</h5>
                    <ul class="list-unstyled mb-0 surflist health">
                      <li>
                        Aucun vaccins obligatoires.<br />
                        Il n’est pas exigé de vaccination sauf contre la fièvre jaune pour les voyageurs en provenance de pays où elle sévit. Dans ce cas, elle doit être faite au moins 10 jours avant le départ.
                      </li>
                      <li>Hépatite A : fortement recommandée par l’OMS</li>
                      <li>En cas de long séjour, d’expatriation ou de séjour en milieu rural, les vaccins contre la rage et la typhoïde sont recommandés.</li>
                    </ul>
                  </div>
                  <div class="tab-pane fade" id="v-pills-health2" role="tabpanel" aria-labelledby="v-pills-health2-tab">qwertyu</div>
                  <div class="tab-pane fade" id="v-pills-health3" role="tabpanel" aria-labelledby="v-pills-health3-tab">asdfgh</div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </teleport>
    </div>
  </div>
  <div class="linear-block">
    <div class="card border-0 rounded-0">
      <div class="card-header p-0 border-0 rounded-0" id="headingEight">
        <div class="head-block pt-3 px-4 px-lg-0 mb-lg-5 d-flex justify-content-between align-items-center collapsed" data-toggle="collapse" data-target="#collapseEight" aria-expanded="true" aria-controls="collapseEight">
          <div class="ml-3 ml-lg-0">
            <p class="sub-heading mb-2">Tips & astuces</p>
            <h4 class="heading mb-0">Itinéraires</h4>
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
          <ul class="list-unstyled place-list f-13 text-uppercase my-3 mb-0 d-flex flex-wrap" style="border-bottom: 1px dashed #ebebeb">
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
  </div>
  <div class="linear-block">
    <div class="card border-0 rounded-0">
      <div class="card-header p-0 border-0 rounded-0" id="headingNine">
        <div class="head-block px-4 px-lg-0 d-flex justify-content-between align-items-center collapsed mb-5" data-toggle="collapse" data-target="#collapseNine" aria-expanded="true" aria-controls="collapseNine">
          <div class="ml-3 ml-lg-0">
            <p class="sub-heading mb-2">Tips & astuces</p>
            <h4 class="heading mb-0">A prévoir dans ton paquetage</h4>
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
  props: ['course'],
  data() {
    return {
      countryModal: false
    }
  },
  watch: {
    countryModal(newVal) {
      if (newVal === true) {
        // document.body.style.overflow = 'hidden'
        document.querySelector('#app').style.filter = 'blur(5px)'
        setTimeout(() => {
          this.handleModalClose()
        }, 100)
      }
      if (newVal === false) {
        document.body.style.overflow = ''
        document.querySelector('#app').style.filter = ''
      }
    }
  },
  methods: {
    handleModalClose() {
      const that = this
      if (document.querySelector('.country-modal')) {
        document.addEventListener('click', function handleClick(e) {
          if (!e.target.closest('.country-modal')) {
            that.countryModal = false
            document.removeEventListener('click', handleClick)
          }
        })
      }
    }
  }
}
</script>

<style scoped>
.pays-list li {
  padding: 0.8rem 0;
  margin: 0;
}
.pays-list li:not(:last-child) {
  border-bottom: 1px dashed #fff;
}
.country-modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}
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
