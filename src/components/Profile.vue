<template>
  <div
    class="modal fade"
    id="profile"
    tabindex="-1"
    aria-labelledby="profileLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered login-modal profile-modal">
      <div class="modal-content border-0 rounded-0">
        <div class="modal-body p-0 border-0">
          <div class="modal-content-head">
            <img
              class="cancel-icon d-none d-lg-block"
              fluid
              :src="require('@/assets/images/svg/PICTO_CLOSE_PLEIN.svg')"
              type="button"
              data-dismiss="modal"
              aria-label="Close"
            />
            <h6 class="modal-heading mb-0"><span>COMPLETE TON PROFIL</span></h6>
            <div
              class="border-left border-white text-white cancel-block d-lg-none"
              data-dismiss="modal"
              aria-label="Close"
            >
              <i class="fa fa-times h5 mb-0"></i>
            </div>
          </div>
          <div class="modal-content-body bg-white d-none">
            <div class="text-center mobile-vh">
              <div class="centered-vh d-none">
                <h6 class="profile-head">
                  <span class="d-lg-block"
                    >Ton espace client te permet d’avoir une page spéciale
                    Tripper "public"</span
                  >
                  Tous les autres membres pourront la consulter. Joue le jeu et
                  donne quelques infos sur toi ! Tu peux aussi le faire plus
                  tard via ton espace client, aucun problème.
                </h6>
                <form>
                  <div class="form-group">
                    <label
                      class="form-label text-uppercase font-weight-bold mt-3 d-block"
                      >Quel camps ?</label
                    >
                    <div
                      class="btn-group btn-group-toggle"
                      data-toggle="buttons"
                    >
                      <label
                        class="btn text-white border-0 rounded-0 btn-lg px-4"
                      >
                        <input type="radio" name="options" id="option1" /> Femme
                      </label>
                      <label
                        class="btn text-white border-0 rounded-0 btn-lg px-4 group-btn"
                      >
                        <input type="radio" name="options" id="option2" /> Homme
                      </label>
                    </div>
                  </div>
                </form>
              </div>
              <div class="d-none">
                <h6 class="profile-head mt-5 mt-md-0">
                  Tu verras, sur le site tu pourras voir les photos des
                  intéressés et des participants. Sois pas timide et montre toi
                  !
                </h6>
                <div class="upload-div">
                  <i class="align-text-top fa fa-arrow-circle-up"></i>
                </div>
                <p class="upload-text mb-1">
                  Clique sur l’icône pour télécharger ta photo de profil
                </p>
                <p class="info-text-small">Taille maximum 1MB</p>
              </div>
              <div class="centered-vh">
                <h6 class="profile-head">
                  Ultra rapide, une petite bio, tes passions, un proverbe
                  préféré ?
                </h6>
                <div class="row">
                  <div class="col-12 col-lg-11 mx-auto">
                    <h6 class="font-weight-bold text-left">INFOS A PARTAGER</h6>
                    <p class="sub-text font-weight-normal text-left">
                      Tu peux modifier à tout moment via ton espace client.
                    </p>
                    <form>
                      <textarea class="form-control info-textarea" rows="4">
Fais-toi plaisir !</textarea
                      >
                      <button
                        class="btn btn-danger border-0 rounded-0 modal-btn btn-block text-uppercase"
                      >
                        Valider mes infos
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <a class="d-block text-center profile-btm-text" href="#"
                >Je décide de le faire plus tard</a
              >
            </div>
          </div>
          <div class="modal-content-body bg-dark">
            <div class="text-center mobile-vh">
              <div class="centered-vh">
                <img
                  class="d-block mx-auto my-4"
                  fluid
                  :src="require('@/assets/images/mic_light.png')"
                />
                <h6
                  class="text-uppercase text-white font-weight-normal text-center pb-3 pt-2"
                >
                  <strong class="letter-space text-warning d-block mb-2"
                    >Ton compte a bien été créer</strong
                  >
                  Ému de te compter parmi nous !
                </h6>
                <button
                  class="btn btn-danger border-0 rounded-0 modal-btn btn-block text-uppercase mt-5"
                >
                  Retourner à l’accueil
                </button>
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
  name: "Profile",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
};
</script>
