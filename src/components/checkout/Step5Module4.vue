<template>
  <div class="number-of-tripper-div">
    <h6 class="tripper-head text-uppercase mb-0">NOMBRE DE TRIPPERS : {{ $parent.$parent.partipantsNb }}</h6>
    <div class="accordion" id="tripperaccordion">
      <div class="card border-0">
        <div class="card-header border-0 mb-0 text-uppercase font-weight-bold d-flex align-items-center collapsed" id="tripOne" type="button" data-toggle="collapse" data-target="#tripperOne" aria-expanded="false" aria-controls="tripperOne">
          <div class="participant-img-container position-relative"><img class="participant-img mr-3" fluid :src="require('@/assets/images/ui_faces/1.jpg')" /><span class="participant-check"></span></div>
          <strong class="participant-name h6 mb-0 font-weight-bold">{{ booker.infos.firstName }}</strong>
          <div class="ml-auto text-right check-amount-head">
            <span class="close-detail">Fermer Détails<i class="fas fa-chevron-up ml-2"></i></span>
            <span class="view-detail">Voir Détails<i class="fas fa-chevron-down ml-2"></i></span>
            <strong class="check-amount text-dark d-block">2 220 &euro;</strong>
          </div>
        </div>
        <div id="tripperOne" class="collapse" aria-labelledby="tripOne" data-parent="#tripperaccordion">
          <div class="card-body">
            <ul class="list-unstyled mb-0 tripper-list">
              <li>
                <div class="trippers-list-div d-flex align-items-center">
                  <span>
                    <h6 class="text-uppercase mb-0 tripper-list-head font-weight-bold">Chambre PRIvé</h6>
                    <p class="tripper-list-para mb-0">à partager avec Axel</p>
                  </span>
                  <h6 class="tripper-amount ml-auto mb-0"><strong>+ 60€</strong>/pers.</h6>
                </div>
              </li>
              <li>
                <div class="trippers-list-div d-flex align-items-center">
                  <span>
                    <h6 class="text-uppercase mb-0 tripper-list-head font-weight-bold">Matériel</h6>
                    <p class="tripper-list-para mb-0">Avec location</p>
                  </span>
                  <h6 class="tripper-amount ml-auto mb-0">
                    <strong>Inclus</strong>
                  </h6>
                </div>
              </li>
              <li>
                <div class="trippers-list-div d-flex align-items-center">
                  <span>
                    <h6 class="text-uppercase mb-0 tripper-list-head font-weight-bold">Plongée sous-marine</h6>
                  </span>
                  <h6 class="tripper-amount ml-auto mb-0"><strong>+ 60€</strong>/pers.</h6>
                </div>
                <div class="trippers-list-div d-flex align-items-center">
                  <span>
                    <h6 class="text-uppercase mb-0 tripper-list-head font-weight-bold">SUP-PADDLE</h6>
                  </span>
                  <h6 class="tripper-amount ml-auto mb-0"><strong>+ 60€</strong>/pers.</h6>
                </div>
              </li>
              <li>
                <div class="trippers-list-div d-flex align-items-center">
                  <span>
                    <h6 class="text-uppercase mb-0 tripper-list-head font-weight-bold">Assurance multirisque</h6>
                  </span>
                  <h6 class="tripper-amount ml-auto mb-0"><strong>+ 60€</strong>/pers.</h6>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="card border-0" v-for="extraParticipant in extraParticipants" :key="extraParticipant">
        <div class="card-header border-0 mb-0 text-uppercase font-weight-bold d-flex align-items-center collapsed" id="triptwo" type="button" data-toggle="collapse" data-target="#tripperTwo" aria-expanded="false" aria-controls="tripperTwo">
          <div class="participant-img-container position-relative">
            <img class="participant-img mr-3" fluid :src="require('@/assets/images/ui_faces/1.jpg')" />
          </div>
          <strong class="participant-name h6 mb-0 font-weight-bold">{{ extraParticipant.infos.firstName }}</strong>
          <div class="ml-auto text-right check-amount-head">
            <span class="close-detail">Fermer Détails<i class="fas fa-chevron-up ml-2"></i></span>
            <span class="view-detail">Voir Détails<i class="fas fa-chevron-down ml-2"></i></span>
            <strong class="check-amount text-dark d-block">2 220 &euro;</strong>
          </div>
        </div>
        <div id="tripperTwo" class="collapse" aria-labelledby="triptwo" data-parent="#tripperaccordion">
          <div class="card-body">
            <ul class="list-unstyled mb-0 tripper-list">
              <li>
                <div class="trippers-list-div d-flex align-items-center">
                  <span>
                    <h6 class="text-uppercase mb-0 tripper-list-head font-weight-bold">Chambre PRIvé</h6>
                    <p class="tripper-list-para mb-0">à partager avec Axel</p>
                  </span>
                  <h6 class="tripper-amount ml-auto mb-0"><strong>+ 60€</strong>/pers.</h6>
                </div>
              </li>
              <li>
                <div class="trippers-list-div d-flex align-items-center">
                  <span>
                    <h6 class="text-uppercase mb-0 tripper-list-head font-weight-bold">Matériel</h6>
                    <p class="tripper-list-para mb-0">Avec location</p>
                  </span>
                  <h6 class="tripper-amount ml-auto mb-0">
                    <strong>Inclus</strong>
                  </h6>
                </div>
              </li>
              <li>
                <div class="trippers-list-div d-flex align-items-center">
                  <span>
                    <h6 class="text-uppercase mb-0 tripper-list-head font-weight-bold">Plongée sous-marine</h6>
                  </span>
                  <h6 class="tripper-amount ml-auto mb-0"><strong>+ 60€</strong>/pers.</h6>
                </div>
                <div class="trippers-list-div d-flex align-items-center">
                  <span>
                    <h6 class="text-uppercase mb-0 tripper-list-head font-weight-bold">SUP-PADDLE</h6>
                  </span>
                  <h6 class="tripper-amount ml-auto mb-0"><strong>+ 60€</strong>/pers.</h6>
                </div>
              </li>
              <li>
                <div class="trippers-list-div d-flex align-items-center">
                  <span>
                    <h6 class="text-uppercase mb-0 tripper-list-head font-weight-bold">Assurance multirisque</h6>
                  </span>
                  <h6 class="tripper-amount ml-auto mb-0"><strong>+ 60€</strong>/pers.</h6>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Step5Module4',
  props: ['booker', 'extraParticipants']
}
</script>

<style></style>
