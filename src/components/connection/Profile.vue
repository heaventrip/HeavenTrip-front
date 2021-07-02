<template>
  <div style="position: absolute">
    <button @click="step = 1">1</button>
    <button @click="step = 2">2</button>
    <button @click="step = 3">3</button>
    <button @click="step = 4">4</button>
  </div>
  <div class="text-center mobile-vh">
    <div v-show="step === 1" class="centered-vh">
      <h6 class="profile-head">
        <span class="d-lg-block">Ton espace client te permet d’avoir une page spéciale Tripper "public"</span>
        Tous les autres membres pourront la consulter. Joue le jeu et donne quelques infos sur toi ! Tu peux aussi le faire plus tard via ton espace client, aucun problème.
      </h6>
      <form>
        <div class="form-group">
          <label class="form-label text-uppercase font-weight-bold mt-3 d-block">Quel camp ?</label>
          <div class="btn-group btn-group-toggle" data-toggle="buttons">
            <label @click="saveGender(female)" class="btn border-0 rounded-0 btn-lg px-4"> <input type="radio" /> Femme </label>
            <label @click="saveGender(male)" class="btn border-0 rounded-0 btn-lg px-4 group-btn"> <input type="radio" /> Homme </label>
          </div>
        </div>
      </form>
    </div>
    <div v-show="step === 2" class="centered-vh">
      <h6 class="profile-head mb-5 mt-md-0">Tu verras, sur le site tu pourras voir les photos des intéressés et des participants. Sois pas timide et montre toi !</h6>
      <div class="d-flex justify-content-between align-items-center mb-4">
        <div class="col-4 d-flex flex-column justify-content-center text-right mr-1">
          <p class="upload-text mb-2">Clique sur l’icône<br />pour télécharger ta<br />photo de profil</p>
          <div style="transform: translateX(100%); width: 50%; border-bottom: 1px dashed #b4b4b4"></div>
          <p class="info-text-small mb-0 mt-1 pb-0">Taille maximum 1MB</p>
        </div>
        <my-upload :no-square="true" langType="en" field="img" @crop-success="cropSuccess" @crop-upload-success="cropUploadSuccess" @crop-upload-fail="cropUploadFail" url="http://localhost:3000/api/v1/upload" v-model="show" :width="300" :height="300" img-format="jpg"></my-upload>
        <!-- <div class="ml-2" style="margin-right: auto">
                    <a class="btn" @click="toggleShow">
                      <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 104.501 103.177">
                        <g id="Groupe_16781" data-name="Groupe 16781" transform="translate(0 0)">
                          <path
                            id="Union_21"
                            data-name="Union 21"
                            d="M51.586,103.177a51.582,51.582,0,0,0,8.706-.79A29.742,29.742,0,0,1,71.34,53.346a20.719,20.719,0,0,0,1.036-3.155c1.063-4.306.782-8.087-.639-8.441a.892.892,0,0,0-.421.02c.321-3.48.222-6.774-.766-8.2-3.079-4.4-3.341-8.29-8.008-9.968s.948-7.726.948-7.726-19.936.56-24.186,7.718c-2.5,4.187-3.7,5.568-6.778,9.972-.992,1.433-1.02,4.734-.6,8.211a1,1,0,0,0-.516-.024c-1.425.353-1.71,4.135-.647,8.441,1.008,4.06,2.845,7.091,4.23,7.127.857,4.782,2.262,9.195,4.671,11.631C45.622,74.974,33.718,81,33.718,81S30,82.565,29.583,82.736c-2.619,1.131-6.159,2.71-9.587,4.385A47.588,47.588,0,1,1,99.2,51.588a46.8,46.8,0,0,1-.369,5.714,30.429,30.429,0,0,1,3.548,2.992,51.559,51.559,0,1,0-50.8,42.882Z"
                            transform="translate(0 0)"
                            fill="#292f33"
                          />
                          <g id="Groupe_16237" data-name="Groupe 16237" transform="translate(67.126 67.742)">
                            <g id="noun_Camera_2021664">
                              <path
                                id="Tracé_5549"
                                data-name="Tracé 5549"
                                d="M38.94,21.818H33.589l-1.141-2.939A2.265,2.265,0,0,0,30.3,17.3H21.481a2.212,2.212,0,0,0-2.149,1.623l-1.009,2.851H13.234c-3.948,0-5.834,1.93-5.834,5.834V38.663c0,3.948,1.93,5.834,5.834,5.834H15.3a1.133,1.133,0,0,0,1.141-1.141A1.106,1.106,0,0,0,15.3,42.217H13.234c-2.72,0-3.6-.921-3.6-3.6V27.653c0-2.72.921-3.6,3.6-3.6h5.7a.882.882,0,0,0,.57-.175,1.21,1.21,0,0,0,.658-.658l1.272-3.553c0-.044,0-.044.044-.088H30.3c0,.044,0,.044.044.088l1.4,3.553a1.575,1.575,0,0,0,.307.439,1.246,1.246,0,0,0,.833.395H38.94c2.72,0,3.6.921,3.6,3.6V38.707c0,2.72-.921,3.6-3.6,3.6H36.835a1.133,1.133,0,0,0-1.141,1.141,1.106,1.106,0,0,0,1.141,1.141H38.94c3.948,0,5.834-1.93,5.834-5.834v-11.1C44.775,23.7,42.888,21.818,38.94,21.818Z"
                                transform="translate(-7.4 -17.3)"
                                fill="#292f33"
                              />
                              <path id="Tracé_5550" data-name="Tracé 5550" d="M37.576,57.752a9.976,9.976,0,1,1,9.976-9.976A9.988,9.988,0,0,1,37.576,57.752Zm0-17.636a7.7,7.7,0,1,0,7.7,7.7A7.707,7.707,0,0,0,37.576,40.116Z" transform="translate(-18.604 -28.67)" fill="#292f33" />
                              <path id="Tracé_5551" data-name="Tracé 5551" d="M75.053,40.128H72.514A1.5,1.5,0,0,1,71,38.614h0A1.5,1.5,0,0,1,72.514,37.1h2.538a1.5,1.5,0,0,1,1.514,1.514h0A1.5,1.5,0,0,1,75.053,40.128Z" transform="translate(-42.676 -28.282)" fill="#292f33" />
                              <path
                                id="Tracé_5552"
                                data-name="Tracé 5552"
                                d="M44.736,49a5.014,5.014,0,0,1,3.652,1.514,5.242,5.242,0,0,1,0,7.348A1.1,1.1,0,0,1,46.829,56.3a2.96,2.96,0,1,0-4.186-4.186,1.1,1.1,0,0,1-1.559-1.559A4.889,4.889,0,0,1,44.736,49Z"
                                transform="translate(-25.898 -34.882)"
                                fill="#292f33"
                              />
                            </g>
                          </g>
                        </g></svg
                    ></a>
                    <my-upload
                      :no-square="true"
                      langType="en"
                      field="img"
                      @crop-success="cropSuccess"
                      @crop-upload-success="cropUploadSuccess"
                      @crop-upload-fail="cropUploadFail"
                      v-model="show"
                      :width="300"
                      :height="300"
                      url="https://heaventrip-dev.herokuapp.com/api/v1/upload"
                      img-format="jpg"
                    ></my-upload>
                    <img :src="imgDataUrl" />
                  </div>
                  <div class="col-3 text-center" style="border-left: 1px dashed #b4b4b4">
                    <img :src="require('@/assets/images/avatar_example.png')" />
                    <p class="info-text-small mb-0 mt-1 pb-0">Cadrage conseillé</p>
                  </div> -->
      </div>
    </div>
    <div v-show="step === 3" class="centered-vh">
      <h6 class="profile-head">Ultra rapide, une petite bio, tes passions, un proverbe préféré ?</h6>
      <div class="row">
        <div class="col-12 col-lg-12 mx-auto">
          <h6 class="font-weight-bold text-left">INFOS A PARTAGER</h6>
          <p class="sub-text font-weight-normal text-left">Visible sur ta page public par les autres Trippers, tu peux renseigner ou modifier à tout moment tes infos via ton espace client.</p>
          <form>
            <textarea v-model="description" class="form-control info-textarea" style="border-radius: 0" rows="4" placeholder="Aucune obligation! Fais-toi plaisir !"></textarea>
            <button @click="updateProfile" class="btn btn-danger border-0 rounded-0 modal-btn btn-block text-uppercase">Valider mon inscription</button>
          </form>
        </div>
      </div>
    </div>
    <div v-show="step === 4" class="centered-vh">
      <div class="row justify-content-center align-items-center mt-4">
        <img class="d-inline-block mr-5 my-4" fluid :src="require('@/assets/images/mic_light.png')" />
        <h6 class="text-uppercase text-white font-weight-normal text-left">
          <strong class="letter-space text-warning d-block mb-2">Ton compte a bien été crée</strong>
          Ému de te compter parmi nous !
        </h6>
      </div>
      <button class="btn btn-danger border-0 rounded-0 modal-btn btn-block text-uppercase mt-5">Fermer</button>
    </div>
    <a v-if="step <= 4" @click.prevent="step++" class="d-block text-center profile-btm-text" style="color: #292f33" href="#">Je décide de le faire plus tard</a>
  </div>
</template>

<script>
import MyUpload from 'vue-image-crop-upload'
import '../../assets/css/upload.css' // overwrites default

export default {
  name: 'Profile',
  components: {
    MyUpload
  },
  data() {
    return {
      step: 1,
      gender: '',
      description: '',
      show: true,
      imgDataUrl: ''
    }
  },
  methods: {
    saveGender(gender) {
      this.gender = gender
    },
    toggleShow() {
      this.show = !this.show
    },
    /**
     * crop success
     *
     * [param] imgDataUrl
     * [param] field
     */
    cropSuccess(imgDataUrl, field) {
      console.log('-------- crop success --------')

      /**
       * upload success
       *
       * [param] jsonData  server api return data, already json encode
       * [param] field
       */
    },
    cropUploadSuccess(jsonData, field) {
      console.log('-------- upload success --------')
      localStorage.setItem('user.avatarId', jsonData.upload.public_id)
    },
    /**
     * upload fail
     *
     * [param] status    server api return error status, like 500
     * [param] field
     */
    cropUploadFail(status, field) {
      console.log('-------- upload fail --------')
      console.log(status)
      console.log('field: ' + field)
    }
  },
  updateProfile() {
    this.$axios
      .put('/users', {
        user: {
          email: this.loginEmail,
          password: this.loginPassword
        }
      })
      .then((resp) => {
        alert('Connexion réussie')
        localStorage.setItem('auth-token', resp.data.auth_token)
      })
      .catch((err) => {
        this.errors.push(err.response.data.message)
      })
  },
  mounted() {}
}
</script>

<style scoped>
.info-text-small {
  white-space: nowrap;
}
</style>
