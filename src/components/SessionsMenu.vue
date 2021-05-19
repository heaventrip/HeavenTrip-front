<template>
  <div class="tab-content">
    <div class="tab-pane fade" id="jan" role="tabpanel" aria-labelledby="jan-tab">qwerty</div>
    <div class="tab-pane fade" id="feb" role="tabpanel" aria-labelledby="feb-tab">asdfgh</div>
    <div class="tab-pane fade" id="mar" role="tabpanel" aria-labelledby="mar-tab">zxcvbn</div>
    <div class="tab-pane fade" id="apr" role="tabpanel" aria-labelledby="apr-tab">
      <div class="container">
        <ul class="list-unstyled order-tab-list">
          <li>
            <div class="info-div">
              <h6 class="month-count mb-0">
                25 avril
                <i class="fa fa-chevron-right mx-2 small align-baseline"></i>
                2 mai
              </h6>
              <a href="#" class="register-count mb-0"> <strong>10 places</strong> restantes</a>
              <div class="text-right mr-4">
                <h6 class="text-uppercase mb-0 font-weight-normal tripper-text"><strong>TRIPPER</strong> inscrit</h6>
                <h6 class="text-uppercase text-danger mb-0 tripper-count">2 tripper pour confirmer LE départ</h6>
              </div>
              <div class="registrants">
                <h6 class="premier-text mb-0 font-weight-bold text-uppercase"><img class="mic_icon" fluid :src="require('@/assets/images/mic.png')" />Sois le premier !</h6>
              </div>
              <h6 class="hours-count mb-0">
                <img fluid :src="require('@/assets/images/timer_d.png')" />
                8 jours - 7 nuits
              </h6>
              <h6 class="amount-per mb-0"><strong>1 990€</strong>/pers.</h6>
              <button class="btn choose-btn">CHOISIR</button>
            </div>
          </li>
          <li>
            <div class="info-div">
              <h6 class="month-count mb-0">
                25 avril
                <i class="fa fa-chevron-right mx-2 small align-baseline"></i>
                2 mai
              </h6>
              <a href="#" class="register-count mb-0"> <strong>7 places</strong> restantes</a>
              <div class="text-right mr-4">
                <h6 class="text-uppercase mb-0 font-weight-normal tripper-text"><strong>TRIPPERS</strong> inscrits</h6>
                <h6 class="text-uppercase text-danger mb-0 tripper-count">1 tripper pour confirmer LE départ</h6>
              </div>
              <div class="registrants">
                <ul class="list-unstyled registrants-list mb-0 d-flex">
                  <li>
                    <a href="#"><img class="img-fill" fluid :src="require('@/assets/images/ui_faces/1.jpg')" /></a>
                  </li>
                  <li>
                    <a href="#"><img class="img-fill" fluid :src="require('@/assets/images/ui_faces/2.jpg')" /></a>
                  </li>
                  <li>
                    <a href="#" data-toggle="tooltip" data-placement="top" title="Nicolas | Grand-Est"><img class="img-fill" fluid :src="require('@/assets/images/ui_faces/4.jpg')" /></a>
                  </li>
                </ul>
              </div>
              <h6 class="hours-count mb-0">
                <img fluid :src="require('@/assets/images/timer_d.png')" />
                8 jours - 7 nuits
              </h6>
              <h6 class="amount-per mb-0"><strong>1 990€</strong>/pers.</h6>
              <button class="btn choose-btn">CHOISIR</button>
            </div>
          </li>
          <li>
            <div class="info-div">
              <h6 class="month-count mb-0">
                25 avril
                <i class="fa fa-chevron-right mx-2 small align-baseline"></i>
                2 mai
              </h6>
              <a href="#" class="register-count mb-0"> <strong>4 places</strong> restantes</a>
              <div class="text-right mr-4">
                <h6 class="text-uppercase mb-0 font-weight-normal tripper-text"><strong>TRIPPERS</strong> inscrits</h6>
                <h6 class="text-uppercase text-danger mb-0 tripper-count">Départ confirmé</h6>
              </div>
              <div class="registrants">
                <ul class="list-unstyled registrants-list mb-0 d-flex">
                  <li>
                    <a href="#"><img class="img-fill" fluid :src="require('@/assets/images/ui_faces/1.jpg')" /></a>
                  </li>
                  <li>
                    <a href="#"><img class="img-fill" fluid :src="require('@/assets/images/ui_faces/2.jpg')" /></a>
                  </li>
                  <li>
                    <a href="#"><img class="img-fill" fluid :src="require('@/assets/images/ui_faces/3.jpg')" /></a>
                  </li>
                  <li>
                    <a href="#" data-toggle="tooltip" data-placement="top" title="Nicolas | Grand-Est"><img class="img-fill" fluid :src="require('@/assets/images/ui_faces/4.jpg')" /></a>
                  </li>
                  <li>
                    <a href="#"><img class="img-fill" fluid :src="require('@/assets/images/ui_faces/1.jpg')" /></a>
                  </li>
                  <li>
                    <a href="#"><img class="img-fill" fluid :src="require('@/assets/images/ui_faces/2.jpg')" /></a>
                  </li>
                  <li>
                    <a href="#"><img class="img-fill" fluid :src="require('@/assets/images/ui_faces/3.jpg')" /></a>
                  </li>
                  <li>
                    <a href="#" data-toggle="tooltip" data-placement="top" title="Nicolas | Grand-Est"><img class="img-fill" fluid :src="require('@/assets/images/ui_faces/4.jpg')" /></a>
                  </li>
                  <li>
                    <a href="#"><img class="img-fill" fluid :src="require('@/assets/images/ui_faces/3.jpg')" /></a>
                  </li>
                </ul>
              </div>
              <h6 class="hours-count mb-0">
                <img fluid :src="require('@/assets/images/timer_d.png')" />
                8 jours - 7 nuits
              </h6>
              <h6 class="amount-per mb-0"><strong>1 990€</strong>/pers.</h6>
              <button class="btn choose-btn">CHOISIR</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="tab-pane fade" id="may" role="tabpanel" aria-labelledby="may-tab">asdfgh</div>
    <div class="tab-pane fade" id="jun" role="tabpanel" aria-labelledby="jun-tab">zxcvbn</div>
    <div class="tab-pane fade" id="july" role="tabpanel" aria-labelledby="july-tab">qwerty</div>
    <div class="tab-pane fade" id="aug" role="tabpanel" aria-labelledby="aug-tab">asdfgh</div>
    <div class="tab-pane fade" id="sep" role="tabpanel" aria-labelledby="sep-tab">zxcvbn</div>
    <div class="tab-pane fade" id="oct" role="tabpanel" aria-labelledby="oct-tab">qwerty</div>
    <div class="tab-pane fade" id="nov" role="tabpanel" aria-labelledby="nov-tab">asdfgh</div>
    <div class="tab-pane fade" id="dec" role="tabpanel" aria-labelledby="dec-tab">zxcvbn</div>
  </div>
  <div class="booking-session d-flex align-items-center">
    <h2 class="session-head border-right border-white">CRÉER UNE SESSION</h2>
    <ul class="text-uppercase list-unstyled year-list border-right border-white px-3">
      <li><a href="#" class="text-reset active">2020</a></li>
      <li><a href="#" class="text-reset">2021</a></li>
    </ul>
    <!-- <ul class="text-uppercase list-unstyled mb-0 booking-session-list border-left border-white">
    <li class="">
      <a href="#" class="" id="jan-tab">JANVIER</a>
    </li>
    <li class="">
      <a href="#" class="inactive" id="feb-tab">FéVRIER</a>
    </li>
    <li class="">
      <a href="#" class=" inactive" id="mar-tab">MARS</a>
    </li>
    <li class="">
      <a href="#" class=" active" id="center">AVRIL</a>
    </li>
    <li class="">
      <a href="#" class="" id="may-tab">Mai</a>
    </li>
    <li class="">
      <a href="#" class=" inactive" id="jun-tab">juin</a>
    </li>
    <li class="">
      <a href="#" class="" id="july-tab">juillet</a>
    </li>
    <li class="">
      <a href="#" class="" id="aug-tab">AOÛT</a>
    </li>
    <li class="">
      <a href="#" class=" " id="sep-tab">septembre</a>
    </li>
    <li class="">
      <a href="#" class="" id="oct-tab">octobre</a>
    </li>
    <li class="">
      <a href="#" class="" id="nov-tab">novembre</a>
    </li>
    <li class="">
      <a href="#" class="" id="dec-tab">décembre</a>
    </li>
  </ul> -->
    <ul class="nav nav-pills text-uppercase list-unstyled mb-0 booking-session-list border-left border-white" role="tablist">
      <li class="nav-item" role="presentation">
        <a class="nav-link" id="jan-tab" data-toggle="pill" href="#jan" role="tab" aria-controls="jan" aria-selected="true">JANVIER</a>
      </li>
      <li class="nav-item" role="presentation">
        <a class="nav-link inactive disabled" aria-disabled="true" id="feb-tab" data-toggle="pill" href="#feb" role="tab" aria-controls="feb" aria-selected="false">FéVRIER</a>
      </li>
      <li class="nav-item" role="presentation">
        <a class="nav-link inactive disabled" aria-disabled="true" id="mar-tab" data-toggle="pill" href="#mar" role="tab" aria-controls="mar" aria-selected="false">MARS</a>
      </li>
      <li class="nav-item" role="presentation">
        <a class="nav-link" id="apr-tab" data-toggle="pill" href="#apr" role="tab" aria-controls="apr" aria-selected="false">AVRIL</a>
      </li>
      <li class="nav-item" role="presentation">
        <a class="nav-link" id="may-tab" data-toggle="pill" href="#may" role="tab" aria-controls="may" aria-selected="false">Mai</a>
      </li>
      <li class="nav-item" role="presentation">
        <a class="nav-link inactive disabled" aria-disabled="true" id="jun-tab" data-toggle="pill" href="#jun" role="tab" aria-controls="jun" aria-selected="false">juin</a>
      </li>
      <li class="nav-item" role="presentation">
        <a class="nav-link" id="july-tab" data-toggle="pill" href="#july" role="tab" aria-controls="july" aria-selected="true">juillet</a>
      </li>
      <li class="nav-item" role="presentation">
        <a class="nav-link" id="aug-tab" data-toggle="pill" href="#aug" role="tab" aria-controls="aug" aria-selected="false">AOÛT</a>
      </li>
      <li class="nav-item" role="presentation">
        <a class="nav-link inactive disabled" aria-disabled="true" id="sep-tab" data-toggle="pill" href="#sep" role="tab" aria-controls="sep" aria-selected="false">septembre</a>
      </li>
      <li class="nav-item" role="presentation">
        <a class="nav-link inactive disabled" aria-disabled="true" id="oct-tab" data-toggle="pill" href="#oct" role="tab" aria-controls="oct" aria-selected="true">octobre</a>
      </li>
      <li class="nav-item" role="presentation">
        <a class="nav-link inactive disabled" aria-disabled="true" id="nov-tab" data-toggle="pill" href="#nov" role="tab" aria-controls="nov" aria-selected="false">novembre</a>
      </li>
      <li class="nav-item" role="presentation">
        <a class="nav-link inactive disabled" aria-disabled="true" id="dec-tab" data-toggle="pill" href="#dec" role="tab" aria-controls="dec" aria-selected="false">décembre</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SessionsMenu'
}
</script>

<style scoped>
.container {
  max-width: 100vw;
  padding: 0 8vw;
}
.list-unstyled {
  margin-bottom: 0;
}
</style>
