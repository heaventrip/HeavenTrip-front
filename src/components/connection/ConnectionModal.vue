<template>
  <div class="d-block modal modal__backdrop" id="login">
    <div class="modal-dialog modal-dialog-centered modal-xl login-modal">
      <div class="connection-modal modal-content border-0 rounded-0">
        <div class="modal-body p-0 border-0">
          <div id="login-wrapper" class="d-flex flex-column flex-lg-row">
            <div class="left-part">
              <div class="modal-content-head">
                <h6 v-if="pForm === 'login'" class="modal-heading mb-0"><span>CONNEXION</span></h6>
                <h6 v-if="pForm === 'signup'" class="modal-heading mb-0"><span>INSCRIPTION</span></h6>
                <h6 v-if="pForm === 'password'" class="modal-heading mb-0"><span>REINITIALISER LE MOT DE PASSE</span></h6>
                <h6 v-if="pForm === 'profile'" class="modal-heading mb-0"><span>COMPLETE TON PROFIL</span></h6>
                <div class="border-left border-white text-white cancel-block d-lg-none" data-dismiss="modal" aria-label="Close">
                  <i class="fa fa-times h5 mb-0"></i>
                </div>
              </div>
              <div class="modal-content-body bg-white" style="height: 600px">
                <FormLogin v-if="pForm === 'login'" @login-success="$emit('login-success')" @clicked-signup="pForm = 'signup'" @clicked-password-forgotten="pForm = 'password'" />
                <FormSignup v-if="pForm === 'signup'" @clicked-existing-account="pForm = 'login'" @submitted-form="pForm = 'login'" />
                <Password v-if="pForm === 'password'" @password-updated="pForm = 'login'" @clicked-password-retrieved="pForm = 'login'" />
                <Profile v-if="pForm === 'profile'" />
              </div>
            </div>
            <div v-if="form === 'password'" class="right-part dark-content-body d-flex flex-column justify-content-center">
              <img class="logo d-none d-lg-block mx-auto" fluid :src="require('@/assets/images/LOGO_FULL_WHITE.png')" />
              <img class="logo d-block mx-auto d-lg-none" fluid :src="require('@/assets/images/LOGO_N.png')" />
              <div class="separator-line"></div>
              <div>
                <h6 class="profile-text">De l’évasion sportive pour tous !</h6>
                <ul class="list-unstyled modal-profile-list mb-0 d-flex justify-content-center ml-4">
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
                    <a href="#"><img class="img-fill" fluid :src="require('@/assets/images/ui_faces/2.jpg')" /></a>
                  </li>
                </ul>
              </div>
            </div>
            <div v-else class="right-part dark-content-body d-none d-lg-block">
              <div class="top-block">
                <img class="logo mx-auto mb-3" fluid :src="require('@/assets/images/LOGO_FULL_WHITE.png')" />
                <ul class="list-unstyled mb-0 text-left registor-list mt-3">
                  <li class="row">
                    <div class="col-2 text-center m-auto">
                      <img class="img-fluid" fluid :src="require('@/assets/images/fprint_white.png')" />
                    </div>
                    <div class="col-10">
                      <p class="mb-0 registor-points">Une agence en ligne oui, mais bien humaine je te rassure. Nous avons à cœur d'accompagner et conseiller nos Trippers. Fun, rencontres et convivialité assurés !</p>
                    </div>
                  </li>
                  <li class="row">
                    <div class="col-2 text-center m-auto">
                      <img class="img-fluid" fluid :src="require('@/assets/images/lab_white.png')" />
                    </div>
                    <div class="col-10">
                      <p class="mb-0 registor-points">Nous accordons beaucoup de temps et d'énergie dans la création de nos séjours qui se veulent authentiques et personnalisables. Gagnez en liberté !</p>
                    </div>
                  </li>
                  <li class="row">
                    <div class="col-2 text-center m-auto">
                      <img class="img-fluid" fluid :src="require('@/assets/images/mic_light.png')" />
                    </div>
                    <div class="col-10">
                      <p class="mb-0 registor-points">Ce sont les individus avec qui on partage une expérience unique qui vont la rendre inoubliable. Rejoins toi aussi la communauté Heaven Trip !</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="bottom-block">
                <div class="separator-line"></div>
                <h6 class="profile-text">De l'évasion sportive pour tous !</h6>
                <ul class="list-unstyled modal-profile-list mb-0 d-flex justify-content-center align-items-center ml-4">
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
                    <a href="#"><img class="img-fill" fluid :src="require('@/assets/images/ui_faces/2.jpg')" /></a>
                  </li>
                  <li><span style="font-size: 12px">+1.5k</span></li>
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
import FormSignup from '@/components/connection/FormSignup.vue'
import FormLogin from '@/components/connection/FormLogin.vue'
import Password from '@/components/connection/Password.vue'
import Profile from '@/components/connection/Profile.vue'

export default {
  name: 'ConnectionModal',
  emits: ['login-success'],
  components: {
    FormSignup,
    FormLogin,
    Password,
    Profile
  },
  props: ['whichForm'],
  data() {
    return {
      pForm: this.whichForm || 'signup'
    }
  }
}
</script>
