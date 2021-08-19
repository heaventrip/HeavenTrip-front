<template>
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg date-model">
      <div class="modal-content">
        <div class="modal-header align-items-center border-0">
          <h5 class="modal-title ml-4" id="exampleModalLabel">
            <img class="mr-2" fluid :src="require('@/assets/images/cal_light.png')" />
            SESSIONS HEAVEN TRIP
          </h5>
          <div class="d-flex">
            <ul class="list-unstyled year-list d-flex mb-0 mr-4">
              <li>
                <a href="#" class="active">2020</a>
              </li>
              <li>
                <a href="#">2021</a>
              </li>
            </ul>
            <h5 class="date-info-cont text-uppercase text-center font-weight-bold">DATES <br />PERSONNALISéES</h5>
          </div>
        </div>
        <div class="modal-body p-0">
          <ul class="nav nav-pills text-uppercase scroll-pill-tab mb-0" role="tablist">
            <li class="nav-item" role="presentation">
              <a class="nav-link" id="pills-jan-tab" data-toggle="pill" href="#pills-jan" role="tab" aria-controls="pills-jan" aria-selected="true">JANVIER</a>
            </li>
            <li class="nav-item" role="presentation">
              <a class="nav-link inactive" id="pills-feb-tab" data-toggle="pill" href="#pills-feb" role="tab" aria-controls="pills-feb" aria-selected="false">FéVRIER</a>
            </li>
            <li class="nav-item" role="presentation">
              <a class="nav-link inactive" id="pills-mar-tab" data-toggle="pill" href="#pills-mar" role="tab" aria-controls="pills-mar" aria-selected="false">MARS</a>
            </li>
            <li class="nav-item" role="presentation">
              <a class="nav-link active" id="pills-apr-tab" data-toggle="pill" href="#pills-apr" role="tab" aria-controls="pills-apr" aria-selected="true">AVRIL</a>
            </li>
            <li class="nav-item" role="presentation">
              <a class="nav-link" id="pills-may-tab" data-toggle="pill" href="#pills-may" role="tab" aria-controls="pills-may" aria-selected="false">Mai</a>
            </li>
            <li class="nav-item" role="presentation">
              <a class="nav-link inactive" id="pills-jun-tab" data-toggle="pill" href="#pills-jun" role="tab" aria-controls="pills-jun" aria-selected="false">juin</a>
            </li>
            <li class="nav-item" role="presentation">
              <a class="nav-link" id="pills-july-tab" data-toggle="pill" href="#pills-july" role="tab" aria-controls="pills-july" aria-selected="true">juillet</a>
            </li>
            <li class="nav-item" role="presentation">
              <a class="nav-link" id="pills-aug-tab" data-toggle="pill" href="#pills-aug" role="tab" aria-controls="pills-aug" aria-selected="false">AOÛT</a>
            </li>
            <li class="nav-item" role="presentation">
              <a class="nav-link inactive" id="pills-sep-tab" data-toggle="pill" href="#pills-sep" role="tab" aria-controls="pills-sep" aria-selected="false">septembre</a>
            </li>
            <li class="nav-item" role="presentation">
              <a class="nav-link inactive" id="pills-oct-tab" data-toggle="pill" href="#pills-oct" role="tab" aria-controls="pills-oct" aria-selected="true">octobre</a>
            </li>
            <li class="nav-item" role="presentation">
              <a class="nav-link inactive" id="pills-nov-tab" data-toggle="pill" href="#pills-nov" role="tab" aria-controls="pills-nov" aria-selected="false">novembre</a>
            </li>
            <li class="nav-item" role="presentation">
              <a class="nav-link inactive" id="pills-dec-tab" data-toggle="pill" href="#pills-dec" role="tab" aria-controls="pills-dec" aria-selected="false">décembre</a>
            </li>
          </ul>
          <div class="tab-content scroll-pill-tab-content">
            <div class="tab-pane fade" id="pills-jan" role="tabpanel" aria-labelledby="pills-jan-tab">qwerty</div>
            <div class="tab-pane fade" id="pills-feb" role="tabpanel" aria-labelledby="pills-feb-tab">asdfgh</div>
            <div class="tab-pane fade" id="pills-mar" role="tabpanel" aria-labelledby="pills-mar-tab">zxcvbn</div>
            <div class="tab-pane fade show active" id="pills-apr" role="tabpanel" aria-labelledby="pills-apr-tab">
              <ul class="list-unstyled order-tab-list">
                <li>
                  <div class="info-div d-flex justify-content-between align-items-center">
                    <h6 class="month-count mb-0">25 avril <i class="fa fa-chevron-right mx-2 small"></i> 2 mai</h6>
                    <a href="#" class="register-count mb-0">
                      <span class="d-none">Voir les 4 inscrits</span>
                      <span class="">Masquer les 4 inscrits</span></a
                    >
                    <h6 class="hours-count mb-0">
                      <img fluid :src="require('@/assets/images/timer_d.png')" />
                      8 j - 7 nuits
                      <span class="separator mx-2 font-weight-normal">|</span>
                      <span class="amount-per"><strong>1 990€</strong>/pers.</span>
                    </h6>
                    <button class="btn btn-light choose-btn">CHOISIR</button>
                  </div>
                  <div class="registrants">
                    <ul class="list-unstyled registrants-list mb-0 d-flex mt-3">
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
                        <a href="#"><img class="img-fill" fluid :src="require('@/assets/images/ui_faces/4.jpg')" /></a>
                      </li>
                      <li>
                        <a class="d-none" href="#" data-toggle="tooltip" data-placement="right" title="Ajoute cette date dans tes envies et discute avec les autres"><i class="fa fa-heart like-icon text-white h4 mb-0"></i></a>
                        <a class="" href="#" data-toggle="tooltip" data-placement="right" title="Tu peux me retirer de ta liste des envies :("><i class="fa fa-times like-icon text-white h4 mb-0"></i></a>
                      </li>
                    </ul>
                  </div>
                  <div class="registrants-content d-none justify-content-between align-items-center px-3 mt-3">
                    <p><strong>Stage ajoute ! </strong>Retrouve le facilement dans ton espace client pour reserver, discuter avec les autres ou le retirer de tes envies.</p>
                    <img class="rounded-circle mx-4 registrants-content-img" fluid :src="require('@/assets/images/ui_faces/4.jpg')" />
                    <i class="far fa-times-circle like-icon text-dark h4 mb-0 mx-3"></i>
                  </div>
                </li>
                <li class="completed">
                  <div class="info-div d-flex justify-content-between align-items-center">
                    <h6 class="month-count mb-0">25 avril <i class="fa fa-chevron-right mx-2 small"></i> 2 mai</h6>
                    <a href="#" class="register-count mb-0"> Voir les 4 inscrits</a>
                    <h6 class="hours-count mb-0">
                      <img fluid :src="require('@/assets/images/timer_d.png')" />
                      8 j - 7 nuits
                      <span class="separator mx-2 font-weight-normal">|</span>
                      <span class="amount-per"><strong>1 990€</strong>/pers.</span>
                    </h6>
                    <button class="btn btn-light choose-btn">COMPLET</button>
                  </div>
                  <div class="registrants d-none">
                    <ul class="list-unstyled registrants-list mb-0 d-flex mt-3">
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
                        <a href="#"><img class="img-fill" fluid :src="require('@/assets/images/ui_faces/4.jpg')" /></a>
                      </li>
                      <li>
                        <a class="" href="#" data-toggle="tooltip" data-placement="right" title="Ajoute cette date dans tes envies et discute avec les autres"><i class="fa fa-heart like-icon text-white h4 mb-0"></i></a>
                        <a class="d-none" href="#" data-toggle="tooltip" data-placement="right" title="Tu peux me retirer de ta liste des envies :("><i class="fa fa-times like-icon text-white h4 mb-0"></i></a>
                      </li>
                    </ul>
                  </div>
                  <div class="registrants-content d-none justify-content-between align-items-center px-3 mt-3 d-none">
                    <p><strong>Stage ajoute ! </strong>Retrouve le facilement dans ton espace client pour reserver, discuter avec les autres ou le retirer de tes envies.</p>
                    <img class="rounded-circle mx-4 registrants-content-img" fluid :src="require('@/assets/images/ui_faces/4.jpg')" />
                    <i class="far fa-times-circle like-icon text-dark h4 mb-0 mx-3"></i>
                  </div>
                </li>
              </ul>
            </div>
            <div class="tab-pane fade" id="pills-may" role="tabpanel" aria-labelledby="pills-may-tab">asdfgh</div>
            <div class="tab-pane fade" id="pills-jun" role="tabpanel" aria-labelledby="pills-jun-tab">zxcvbn</div>
            <div class="tab-pane fade" id="pills-july" role="tabpanel" aria-labelledby="pills-july-tab">qwerty</div>
            <div class="tab-pane fade" id="pills-aug" role="tabpanel" aria-labelledby="pills-aug-tab">asdfgh</div>
            <div class="tab-pane fade" id="pills-sep" role="tabpanel" aria-labelledby="pills-sep-tab">zxcvbn</div>
            <div class="tab-pane fade" id="pills-oct" role="tabpanel" aria-labelledby="pills-oct-tab">qwerty</div>
            <div class="tab-pane fade" id="pills-nov" role="tabpanel" aria-labelledby="pills-nov-tab">asdfgh</div>
            <div class="tab-pane fade" id="pills-dec" role="tabpanel" aria-labelledby="pills-dec-tab">zxcvbn</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SelectADate',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
