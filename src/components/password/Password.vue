<template>
  <div class="left-part">
    <div class="modal-content-head">
      <h6 class="modal-heading mb-0 d-none">
        <span>REINITIALISE TON MOT DE PASSE</span>
      </h6>
      <h6 class="modal-heading mb-0">
        <span>MOT DE PASSSE PERDU</span>
      </h6>
      <div class="border-left border-white text-white cancel-block d-lg-none" data-dismiss="modal" aria-label="Close">
        <i class="fa fa-times h5 mb-0"></i>
      </div>
    </div>
    <div class="modal-content-body bg-white py-5">
      <div v-if="step == 1">
        <PasswordStep1 @filled="step = 2" />
      </div>
      <div v-else-if="step == 2" class="text-center">
        <PasswordStep2 @filled="step = 3" />
      </div>
      <div v-else-if="step == 3">
        <PasswordStep3 @filled="step = 4" />
      </div>
      <div v-else class="text-center">
        <PasswordStep4 @complete="$emit('passwordUpdated')" />
      </div>
    </div>
  </div>
  <div class="right-part dark-content-body d-flex flex-column justify-content-center">
    <img class="cancel-icon d-none d-lg-block" fluid :src="require('@/assets/images/svg/PICTO_CLOSE_PLEIN.svg')" type="button" data-dismiss="modal" aria-label="Close" />
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
</template>

<script>
import PasswordStep1 from './PasswordStep1.vue'
import PasswordStep2 from './PasswordStep2.vue'
import PasswordStep3 from './PasswordStep3.vue'
import PasswordStep4 from './PasswordStep4.vue'

export default {
  name: 'Password',
  components: {
    PasswordStep1,
    PasswordStep2,
    PasswordStep3,
    PasswordStep4
  },
  emits: ['passwordUpdated'],
  data() {
    return {
      step: 1
    }
  }
}
</script>

<style scoped>
.separator-line {
  width: 60%;
  margin-right: auto;
  margin-left: auto;
}
</style>
