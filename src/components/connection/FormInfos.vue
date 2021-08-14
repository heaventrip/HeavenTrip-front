<template>
  <div class="text-center mobile-vh">
    <div v-if="activeInfoTabs[activeStep] === 'gender'" class="centered-vh">
      <div class="descr-text">Ton espace client te permet d’avoir une page spéciale Tripper "public". Tous les autres membres pourront la consulter. Joue le jeu et donne quelques infos sur toi ! Tu peux aussi le faire plus tard via ton espace client, aucun problème.</div>
      <div class="mt-5" style="width: 100%; height: 1px; border-top: 1px dashed #b4b4b4; margin-bottom: 10vh"></div>
      <div class="div-group">
        <label class="form-label text-uppercase font-weight-bold d-block" style="margin-bottom: 1.5rem">Faut choisir !</label>
        <div class="btn-group btn-group-toggle" data-toggle="buttons">
          <label @click="setGender('female')" :class="[gender === 'female' ? 'profile-gender-btn-selected' : '']" class="btn profile-gender-btn rounded-0 btn-lg px-4"> <input type="radio" name="gender" /> Femme </label>
          <label @click="setGender('male')" :class="[gender === 'male' ? 'profile-gender-btn-selected' : '']" class="btn profile-gender-btn rounded-0 btn-lg px-4 group-btn"> <input type="radio" name="gender" /> Homme </label>
        </div>
      </div>
    </div>
    <div v-else-if="activeInfoTabs[activeStep] === 'avatar'" class="centered-vh">
      <div class="descr-text">
        Tu verras, sur le site tu pourras voir à plusieurs endroits les photos des intéressés et des participants aux stages et accéder a leur profils. Un bon moyen de connaitre les Trippers avec qui tu vas partir ! C’est cool de jouer le jeu et de faire vivre cette communauté :)
      </div>
      <div class="mt-5" style="width: 100%; height: 1px; border-top: 1px dashed #b4b4b4; margin-bottom: 10vh"></div>
      <div class="d-flex justify-content-between align-items-center mb-4">
        <div class="d-flex flex-column justify-content-center text-right mr-1">
          <p class="upload-text mb-2">Clique sur l’icône<br />pour télécharger ta<br />photo de profil</p>
          <div style="transform: translateX(100%); width: 50%; border-bottom: 1px dashed #b4b4b4"></div>
          <p class="info-text-small mb-0 mt-1 pb-0">Taille maximum 1MB</p>
        </div>
        <div class="upload-container">
          <my-upload
            :no-square="true"
            :langExt="uploadLang"
            field="img"
            @src-file-Set="fileSet"
            @crop-success="cropSuccess"
            @crop-upload-success="cropUploadSuccess"
            @crop-upload-fail="cropUploadFail"
            url="https://heaventrip-dev.herokuapp.com/api/v1/upload"
            v-model="show"
            :width="300"
            :height="300"
            img-format="jpg"
          ></my-upload>
        </div>
        <div class="principal-img">
          <img v-if="imgDataUrl" :src="imgDataUrl" />
          <svg class="svg-avatar" v-if="!imgDataUrl" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 152.333 152.34">
            <path
              id="Tracé_5342"
              data-name="Tracé 5342"
              d="M76.167,152.34a76.162,76.162,0,0,0,12.855-1.166,43.914,43.914,0,0,1,16.311-72.408,30.593,30.593,0,0,0,1.529-4.658c1.57-6.357,1.154-11.941-.943-12.463a1.317,1.317,0,0,0-.621.029c.475-5.139.328-10-1.131-12.111-4.547-6.5-4.933-12.24-11.823-14.718-6.873-2.484,1.4-11.408,1.4-11.408s-29.435.826-35.71,11.4c-3.685,6.181-5.466,8.22-10.007,14.724-1.465,2.115-1.506,6.99-.879,12.123a1.473,1.473,0,0,0-.762-.035c-2.1.521-2.525,6.105-.955,12.463,1.488,5.994,4.2,10.47,6.246,10.523,1.266,7.06,3.34,13.576,6.9,17.173,8.788,8.894-8.788,17.789-8.788,17.789s-5.49,2.314-6.105,2.566c-3.867,1.67-9.093,4-14.155,6.474A70.264,70.264,0,1,1,146.474,76.17a69.1,69.1,0,0,1-.545,8.437,44.928,44.928,0,0,1,5.238,4.418,76.127,76.127,0,1,0-75,63.315Z"
              fill="#fff"
            />
          </svg>
          <svg class="svg-plus" v-if="!imgDataUrl" xmlns="http://www.w3.org/2000/svg" width="33.773" height="33.773" viewBox="0 0 33.773 33.773">
            <path
              id="Tracé_5887"
              data-name="Tracé 5887"
              d="M66.681,50.294h-14.2v-14.2a1.092,1.092,0,0,0-2.185,0v14.2h-14.2a1.092,1.092,0,0,0,0,2.185h14.2v14.2a1.092,1.092,0,1,0,2.185,0v-14.2h14.2a1.092,1.092,0,1,0,0-2.185Z"
              transform="translate(-34.5 -34.5)"
              fill="#fff"
              stroke="#fff"
              stroke-width="1"
            />
          </svg>
        </div>
        <div class="advises-avatar">
          <img src="@/assets/images/ui_faces/4.jpg" />
          <p class="upload-text">Cadrage conseillé</p>
        </div>
      </div>
      <label v-if="showAvatarValidationButton" @click="validateTheAvatar()" class="btn avatar-validation-btn rounded-0 btn-lg px-4"> Valider ma photo de profil </label>
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
    <div v-else-if="activeInfoTabs[activeStep] === 'bio'" class="centered-vh">
      <div class="descr-text">Ultra rapide, une petite bio, tes passions, un proverbe préféré ? Ces informations seront visibles sur ta page public par tous les autres membres. Tu peux a tout moment les compléter via ton espace Trippers.</div>
      <div class="separator mt-5" style="width: 100%; height: 1px; border-top: 1px dashed #b4b4b4"></div>
      <form>
        <textarea v-model="description" class="form-control info-textarea" style="border-radius: 0" rows="4" placeholder="Tu peux taper ton texte ici..."></textarea>
        <Button text="Valider mon inscription" px="1.5rem" size=".8rem" height="50px" width="100%" weight="bold" color="white" @click="activeTab = 'login'" />
      </form>
    </div>
    <div v-else-if="activeInfoTabs[activeStep] === 'success'" class="centered-vh">
      <div class="d-flex flex-column justify-content-center align-items-center mt-4">
        <InlineSvg :src="require('@/assets/svg/circle-mic.svg')" />
        <h6 class="text-uppercase text-white font-weight-normal text-center">
          <div class="mt-5 letter-space text-white d-block mb-2">Ému de te compter parmi nous !</div>
          <div class="text--pink letter-space" style="font-size: 1.5rem; font-weight: 600">Compte en cours de création...</div>
        </h6>
      </div>
      <!-- <button @click.prevent="$parent.$parent.showModal = false" class="btn btn-danger border-0 rounded-0 modal-btn btn-block text-uppercase mt-5">Fermer</button> -->
    </div>
  </div>
</template>

<script>
import MyUpload from 'vue-image-crop-upload'
import Button from '@/components/elements/Button.vue'
import '../../assets/css/upload.css' // overwrites default

export default {
  name: 'FormInfos',
  props: ['active-info-tab'],
  components: {
    MyUpload,
    Button
  },
  data() {
    return {
      uploadLang: {
        hint: '',
        loading: 'Téléchargement en cours...',
        noSupported: "Ce navigateur n'est pas compatible",
        success: 'Téléchargé avec succès !',
        fail: 'Le téléchargement a échoué...',
        preview: 'Aperçu',
        btn: {
          off: 'Annuler',
          close: 'Fermer',
          back: 'Retour',
          save: 'Valider'
        },
        error: {
          onlyImg: 'Uniquement des images',
          outOfSize: "L'image est trop volumineuse",
          lowestPx: "L'image est trop petite"
        }
      },

      //authorize : access authorized, the user can access the step
      //valid : the step is validated, the user can go to the next step
      stepper: {
        gender: {
          authorize: true,
          valid: false
        },
        avatar: {
          authorize: false,
          valid: false
        },
        bio: {
          authorize: false,
          valid: false
        }
      },
      gender: '',
      description: '',
      show: true,
      showAvatarValidationButton: false,
      imgDataUrl: '',
      activeInfoTabs: ['gender', 'avatar', 'bio', 'success'],
      activeStep: 0
    }
  },
  watch: {
    activeInfoTab(val) {
      this.activeStep = this.activeInfoTabs.indexOf(val)

      if (val === 'avatar') {
        this.$nextTick(() => {
          document.querySelector('.vicp-step1 .vicp-operate').style.display = 'none'
          let buttons = document.querySelector('.vicp-step2 .vicp-operate')
        })
      }
    },
    activeStep(val) {
      if (val === 3) this.$emit('reached-success')
      this.$emit('changed-tab', this.activeInfoTabs[this.activeStep])
    },
    gender() {
      this.stepper.avatar.authorize = true
      this.activeStep++
    }
  },
  methods: {
    toggleShow() {
      this.show = !this.show
    },
    setGender(val) {
      this.gender = val
      this.stepper.gender.valid = true
    },
    validateTheAvatar() {
      this.stepper.avatar.valid = true
      this.stepper.bio.authorize = true
      this.activeStep++
    },
    fileSet() {
      this.$nextTick(() => {
        let buttons = document.querySelector('.vicp-step2 .vicp-operate')
        console.log('************', buttons)
        buttons.firstChild.innerText = 'Retour'
        buttons.lastChild.innerText = 'Valider'
      })
    },
    /**
     * crop success
     *
     * [param] imgDataUrl
     * [param] field
     */
    cropSuccess(imgDataUrl, field) {
      console.log('-------- crop success --------')
      this.showAvatarValidationButton = false
      /**
       * upload success
       *
       * [param] jsonData  server api return data, already json encode
       * [param] field
       */
    },
    cropUploadSuccess(jsonData, field) {
      console.log('-------- upload success --------')
      this.showAvatarValidationButton = true
      localStorage.setItem('user.avatarId', jsonData.upload.public_id)
      this.imgDataUrl = `https://res.cloudinary.com/heaventrip/image/upload/v1624837376/${localStorage['user.avatarId']}.jpg`
      this.$parent.$forceUpdate()
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
    }
  }
}
</script>

<style scoped>
.bttn--white:hover {
  background-color: #d82558;
}
.svg-plus,
.svg-avatar {
  position: absolute;
  right: 0px;
}
.svg-plus {
  margin-top: 115px;
  margin-right: 20px;
  width: 37px;
  height: 37px;
}
.btn-avatar-validation {
  width: 230px;
  position: absolute;
  margin-top: 391px;
}
.principal-img {
  height: 170px;
  width: 170px;
  border-radius: 100%;
  position: relative;
  margin-right: 80px;
}
.principal-img img {
  width: inherit;
  height: inherit;
  border-radius: 100%;
}
.advises-avatar {
  padding-left: 40px;
  border-left: 1px solid #54595c;
}
.advises-avatar p {
  margin: 0px;
  margin-top: 3px;
}
.advises-avatar img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
.separator {
  margin-bottom: 90px;
}
.info-textarea {
  height: 130px;
  padding-left: 25px;
  padding-top: 18px;
  margin-bottom: 50px;
  background: #292f33;
  color: #ebebeb;
  border: 1px solid #ffffff33;
}
.descr-text {
  font-family: Muli, sans-serif;
  font-size: 0.85rem;
  text-align: left;
  line-height: 1.6;
}
.info-text-small {
  white-space: nowrap;
}
.avatar-validation-btn {
  transition: all 0.3s ease;
  color: #292f33;
  margin: initial;
  margin-left: 314px;
  margin-top: 58px;
  width: 285px;
  background-color: white;
}
.avatar-validation-btn:hover,
.avatar-validation-btn.active {
  border: 1px solid white;
  background-color: #292f33;
  color: white;
}
.profile-gender-btn {
  border: 1px solid white;
  transition: all 0.3s ease;
  color: white;
}
.profile-gender-btn-selected {
  background-color: white;
  color: #292f33;
}
.profile-gender-btn:hover,
.profile-gender-btn.active {
  background-color: white;
  color: #292f33;
}
.bttn--pink:hover {
  border: 1px solid white;
}
</style>
