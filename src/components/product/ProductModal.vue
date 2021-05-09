<template>
  <div>
    <div class="backdrop"></div>

    <!-- kitesurf modal -->
    <button type="button" class="btn btn-primary text-uppercase d-none" data-toggle="modal" data-target="#kitesurf">KITESURF modal</button>
    <!-- SANITAIRE trigger modal -->
    <button type="button" class="btn btn-primary text-uppercase d-none" data-toggle="modal" data-target="#health">INFOs SANITAIRE modal</button>

    <!-- kitesurf Modal -->
    <div class="modal fade" id="kitesurf" tabindex="-1" aria-labelledby="kitesurfLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-lg kitesurf-modal">
        <div class="modal-content border-0 rounded-0">
          <div class="modal-body p-0 border-0">
            <div class="row">
              <div class="col-5 bg-dark">
                <div class="nav flex-column nav-pills kitesurf-nav" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                  <a class="nav-link active" id="v-pills-level1-tab" data-toggle="pill" href="#v-pills-level1" role="tab" aria-controls="v-pills-level1" aria-selected="true">NIVEAU 1 <i class="fas fa-chevron-right nav-arrow float-right mr-n4"></i></a>
                  <a class="nav-link" id="v-pills-level2-tab" data-toggle="pill" href="#v-pills-level2" role="tab" aria-controls="v-pills-level2" aria-selected="false">NIVEAU 2 <i class="fas fa-chevron-right nav-arrow float-right mr-n4"></i></a>
                  <a class="nav-link" id="v-pills-level3-tab" data-toggle="pill" href="#v-pills-level3" role="tab" aria-controls="v-pills-level3" aria-selected="false">NIVEAU 3 <i class="fas fa-chevron-right nav-arrow float-right mr-n4"></i></a>
                  <a class="nav-link" id="v-pills-level4-tab" data-toggle="pill" href="#v-pills-level4" role="tab" aria-controls="v-pills-level4" aria-selected="false">NIVEAU 4 <i class="fas fa-chevron-right nav-arrow float-right mr-n4"></i></a>
                </div>
              </div>
              <div class="col-7">
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
          </div>
        </div>
      </div>
    </div>
    <!-- SANITAIRE Modal -->
    <div class="modal fade" id="health" tabindex="-1" aria-labelledby="healthLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-lg kitesurf-modal">
        <div class="modal-content border-0 rounded-0">
          <div class="modal-body p-0 border-0">
            <div class="row">
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
              <div class="col-7">
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
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProductModal',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
