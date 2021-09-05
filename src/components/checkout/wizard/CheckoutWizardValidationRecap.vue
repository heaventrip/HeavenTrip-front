<template>
  <div class="number-of-tripper-div">
    <img class="course-image" :src="require('@/assets/images/beach.jpg')" />
    <div class="accordion" id="tripperaccordion">
      <div class="card accordion-card border-0">
        <div
          class="card-header border-0 mb-0 text-uppercase font-weight-bold d-flex align-items-center collapsed"
          id="tripBooker"
          type="button"
          data-toggle="collapse"
          data-target="#tripperBooker"
          aria-expanded="false"
          aria-controls="tripperBooker"
        >
          <div class="participant-img-container position-relative">
            <img class="participant-img mr-3" fluid :src="require('@/assets/images/ui_faces/1.jpg')" /><span class="participant-check"></span>
          </div>
          <strong class="participant-name h6 mb-0 font-weight-bold">{{ booker.infos.firstName }}</strong>
          <div class="ml-auto text-right check-amount-head">
            <span class="close-detail">Fermer Détails<i class="fas fa-chevron-up ml-2"></i></span>
            <span class="view-detail">Voir Détails<i class="fas fa-chevron-down ml-2"></i></span>
            <strong class="check-amount text-dark d-block">{{ course?.price >= 1000 ? `${course?.price.toString()[0]} ${course?.price.toString().slice(-3)}` : course?.price }}&hairsp;&euro;</strong>
          </div>
        </div>
        <div id="tripperBooker" class="collapse" aria-labelledby="tripBooker" data-parent="#tripperaccordion">
          <div class="card-body">
            <ul class="list-unstyled mb-0 tripper-list">
              <li>
                <div class="trippers-list-div d-flex align-items-center">
                  <span>
                    <h6 class="text-uppercase mb-0 tripper-list-head font-weight-bold">Chambre Privée</h6>
                    <p class="tripper-list-para mb-0">à partager avec {{ booker.booking.roomMate }}</p>
                  </span>
                  <h6 class="tripper-amount ml-auto mb-0"><strong>+ 60€</strong>/pers.</h6>
                </div>
              </li>
              <li>
                <div class="trippers-list-div d-flex align-items-center">
                  <span>
                    <h6 class="text-uppercase mb-0 tripper-list-head font-weight-bold">Matériel</h6>
                    <p class="tripper-list-para mb-0">{{ booker.booking.equipmentRental ? 'Avec' : 'Sans' }} location</p>
                  </span>
                  <h6 class="tripper-amount ml-auto mb-0">
                    <!-- TODO dynamic price -->
                    <strong>{{ booker.booking.equipmentRental ? '+10€' : 'Gratuit' }}</strong>
                  </h6>
                </div>
              </li>
              <li>
                <div v-for="extraActivity in booker.booking.extraActivities" :key="extraActivity" class="trippers-list-div d-flex align-items-center">
                  <span>
                    <h6 class="text-uppercase mb-0 tripper-list-head font-weight-bold">{{ extraActivity?.name }}</h6>
                  </span>
                  <h6 class="tripper-amount ml-auto mb-0"><strong>+ 60€</strong>/pers.</h6>
                </div>
              </li>
              <li>
                <div class="trippers-list-div d-flex align-items-center">
                  <span>
                    <h6 class="text-uppercase mb-0 tripper-list-head font-weight-bold">Assurance {{ booker.booking.insurance }}</h6>
                  </span>
                  <h6 class="tripper-amount ml-auto mb-0"><strong>+ 60€</strong>/pers.</h6>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="card accordion-card border-0" v-for="(extraParticipant, index) in extraParticipants" :key="extraParticipant">
        <div
          class="card-header border-0 mb-0 text-uppercase font-weight-bold d-flex align-items-center collapsed"
          :id="`trip${index}`"
          type="button"
          data-toggle="collapse"
          :data-target="`#tripper${index}`"
          aria-expanded="false"
          aria-controls="tripperTwo"
        >
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
        <div :id="`tripper${index}`" class="collapse" :aria-labelledby="`trip${index}`" data-parent="#tripperaccordion">
          <div class="card-body">
            <ul class="list-unstyled mb-0 tripper-list">
              <li>
                <div class="trippers-list-div d-flex align-items-center">
                  <span>
                    <h6 class="text-uppercase mb-0 tripper-list-head font-weight-bold">Chambre PRIvé</h6>
                    <p class="tripper-list-para mb-0">à partager avec {{ extraParticipant.booking.roomMate }}</p>
                  </span>
                  <h6 class="tripper-amount ml-auto mb-0"><strong>+ 60€</strong>/pers.</h6>
                </div>
              </li>
              <li>
                <div class="trippers-list-div d-flex align-items-center">
                  <span>
                    <h6 class="text-uppercase mb-0 tripper-list-head font-weight-bold">Matériel</h6>
                    <p class="tripper-list-para mb-0">{{ extraParticipant.booking.equipmentRental ? 'Avec' : 'Sans' }} location</p>
                  </span>
                  <h6 class="tripper-amount ml-auto mb-0">
                    <strong>{{ extraParticipant.booking.equipmentRental ? '+10€' : 'Gratuit' }}</strong>
                  </h6>
                </div>
              </li>
              <li>
                <div v-for="extraActivity in extraParticipant.booking.extraActivities" :key="extraActivity" class="trippers-list-div d-flex align-items-center">
                  <span>
                    <h6 class="text-uppercase mb-0 tripper-list-head font-weight-bold">{{ extraActivity?.name }}</h6>
                  </span>
                  <h6 class="tripper-amount ml-auto mb-0"><strong>+ 60€</strong>/pers.</h6>
                </div>
              </li>
              <li>
                <div class="trippers-list-div d-flex align-items-center">
                  <span>
                    <h6 class="text-uppercase mb-0 tripper-list-head font-weight-bold">Assurance {{ extraParticipant.booking.insurance }}</h6>
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
  name: 'CheckoutWizardValidationRecap',
  props: ['course', 'booker', 'extra-participants']
}
</script>

<style scoped>
.accordion:not(:last-of-type) {
  border-bottom: 1px solid #ebebea75;
}
.course-image {
  object-fit: cover;
  height: 20vh;
  width: 100%;
}
.accordion-card {
  padding: 1rem 1.5rem;
}
.tripper-list li {
  padding: 10px 0;
}
</style>
