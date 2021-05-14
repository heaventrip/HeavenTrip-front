<template>
  <div id="password-wrapper" class="d-flex flex-column flex-lg-row">
    <div class="left-part">
      <div class="modal-content-head">
        <h6 class="modal-heading mb-0 d-none">
          <span>REINITIALISE TON MOT DE PASSE</span>
        </h6>
        <h6 class="modal-heading mb-0">
          <span>NOUVEAU MOT DE PASSE</span>
        </h6>
        <div class="border-left border-white text-white cancel-block d-lg-none" data-dismiss="modal" aria-label="Close">
          <i class="fa fa-times h5 mb-0"></i>
        </div>
      </div>
      <div class="modal-content-body bg-white py-5">
        <div class="d-none">
          <p class="content-head">Assure toi de renseigner un mail valide :</p>
          <form>
            <input class="form-control modal-input mb-2" type="text" name="" value="axel.sonderer@gmail.com" placeholder="Email" />
            <a class="password-link d-block text-right mb-4" href="#">J’ai retrouvé mon mot de passe</a>
            <button class="btn btn-dark btn-block text-uppercase border-0 rounded-0 modal-btn">Valider</button>
          </form>
        </div>
        <div class="text-center d-none">
          <img class="user_icon d-block mx-auto" fluid :src="require('@/assets/images/mic.png')" />
          <h6 class="info-text text-uppercase mt-3">
            <strong class="text-danger d-block">Un email a été envoyé.</strong>
            Il Contient le lien Pour réinitialiser ton mot de passe
          </h6>
          <button class="btn btn-dark btn-block text-uppercase border-0 rounded-0 modal-btn sent">DEMANDE ENVOYée</button>
        </div>
        <div class="py-2">
          <p class="content-head">Merci de saisir ton nouveau mot de passe :</p>
          <form>
            <input class="form-control modal-input" type="password" autocomplete="off" name="" value="" placeholder="Nouveau mot de passe" />
            <input class="form-control modal-input" type="password" autocomplete="off" name="" placeholder="Confirmation de ton mot de passe" />
            <button class="btn btn-dark btn-block text-uppercase border-0 rounded-0 modal-btn">Valider</button>
          </form>
        </div>
        <div class="text-center d-none">
          <img class="user_icon d-block mx-auto" fluid :src="require('@/assets/images/mic.png')" />
          <h6 class="info-text text-uppercase mt-3">
            <strong class="text-danger d-block">Ton nouveau mot de passe a été enregistré.</strong>
            Tu peux maintenant te reconnecter.
          </h6>
          <button class="btn btn-dark btn-block text-uppercase border-0 rounded-0 modal-btn">SE CONNECTER</button>
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
  </div>
</template>

<script>
export default {
  name: 'Password',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
