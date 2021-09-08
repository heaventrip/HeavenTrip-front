<template>
  <div class="text-center mobile-vh">
    <transition name="fade-fast" mode="out-in">
      <div v-if="activeInfoTabs[activeStep] === 'gender'" class="centered-vh">
        <div class="descr-text">
          Ton espace client te permet d’avoir une page spéciale Tripper "public". Tous les autres membres pourront la consulter. Joue le jeu et donne quelques infos sur toi ! Tu peux aussi le faire
          plus tard via ton espace client, aucun problème.
        </div>
        <div class="sperator-genre mt-5" style="width: 100%; height: 1px; border-top: 1px dashed #b4b4b4; margin-bottom: 10vh"></div>
        <div class="div-group">
          <label class="form-label text-uppercase font-weight-bold d-block" style="margin-bottom: 1.5rem">Faut choisir !</label>
          <div class="btn-group btn-group-toggle" data-toggle="buttons">
            <label :class="[gender === 'female' ? 'profile-gender-btn-selected' : '']" class="btn profile-gender-btn rounded-0 btn-lg px-4" @click="gender = 'female'">
              <input type="radio" name="gender" /> Femme
            </label>
            <label :class="[gender === 'male' ? 'profile-gender-btn-selected' : '']" class="btn profile-gender-btn rounded-0 btn-lg px-4 group-btn" @click="gender = 'male'">
              <input type="radio" name="gender" /> Homme
            </label>
          </div>
        </div>
      </div>
      <div v-else-if="activeInfoTabs[activeStep] === 'avatar'" class="centered-vh">
        <div class="descr-text">
          Tu verras, sur le site tu pourras voir à plusieurs endroits les photos des intéressés et des participants aux stages et accéder a leur profils. Un bon moyen de connaitre les Trippers avec
          qui tu vas partir ! C’est cool de jouer le jeu et de faire vivre cette communauté :)
        </div>
        <div class="sperator-avatar mt-5" style="width: 100%; height: 1px; border-top: 1px dashed #b4b4b4; margin-bottom: 10vh"></div>
        <div class="d-flex justify-content-between align-items-center mb-4">
          <div class="d-flex flex-column justify-content-center text-right mr-1">
            <p class="upload-text-left upload-text mb-3" style="font-size: 0.8rem">Clique sur l’icône<br />pour télécharger ta<br />photo de profil</p>
            <div style="transform: translateX(100%); width: 50%; border-bottom: 1px dashed #b4b4b4"></div>
            <p class="info-text-small mb-0 mt-1 pb-0">Taille maximum 4MB</p>
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
        <div v-if="!showAvatarValidationButton && !error && showLoaderUploadImg" class="lds-dual-ring"></div>
        <label v-else-if="showAvatarValidationButton && !error && !showLoaderUploadImg" @click="validateTheAvatar" class="btn avatar-validation-btn rounded-0 btn-lg px-4">
          Valider ma photo de profil
        </label>
        <label v-else-if="!showAvatarValidationButton && error && !showLoaderUploadImg" class="label-error rounded-0 px-4" style="position: absolute; margin-top: 70px; color: tomato">{{
          error
        }}</label>
      </div>
      <div v-else-if="activeInfoTabs[activeStep] === 'bio'" class="centered-vh">
        <div class="descr-text">
          Ultra rapide, une petite bio, tes passions, un proverbe préféré ? Ces informations seront visibles sur ta page public par tous les autres membres. Tu peux a tout moment les compléter via ton
          espace Trippers.
        </div>
        <div class="separator mt-5" style="width: 100%; height: 1px; border-top: 1px dashed #b4b4b4"></div>
        <form>
          <textarea v-model="description" class="form-control info-textarea" style="border-radius: 0" rows="4" placeholder="(Facultatif) Tu peux taper ton texte ici..."></textarea>
          <Button text="Valider mon inscription" px="1.5rem" size=".8rem" height="50px" width="100%" weight="bold" color="white" @click="submitRegisterForm" />
        </form>
      </div>
      <div v-else-if="activeInfoTabs[activeStep] === 'success'" class="centered-vh success-block">
        <div class="descr-text">
          Un e-mail de confirmation vous a été envoyé a l'adresse {{ user.email ? user.email : '' }}, merci de <strong> cliquer sur le lien de validation </strong> pour finaliser votre inscription sur
          Heaven Trip. A tout de suite !
        </div>
        <div class="separator-success mt-5" style="width: 100%; height: 1px; border-top: 1px dashed #b4b4b4"></div>
        <form class="group-btn">
          <Button class="btn-resend-email" text="RENVOYER LE MAIL" px="1.5rem" size=".8rem" height="50px" width="100%" weight="bold" color="white" @click="resendEmailConfirmation" />
          <Button
            class="btn-login"
            text="SE CONNECTER"
            px="1.5rem"
            size=".8rem"
            height="50px"
            width="100%"
            weight="bold"
            color="white"
            @click="$router.push({ name: 'Account', params: { activeTab: 'login' } })"
          />
        </form>
      </div>
    </transition>
  </div>
</template>

<script>
import MyUpload from 'vue-image-crop-upload'
import Button from '@/components/elements/Button.vue'
import '../../assets/css/upload.css' // overwrites default

export default {
  name: 'FormInfos',
  props: ['active-info-tab', 'user'],
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
        },
        success: {
          authorize: false,
          valid: false
        }
      },
      gender: '',
      description: '',
      show: true,
      error: '',
      showAvatarValidationButton: false,
      showLoaderUploadImg: false,
      imgDataUrl: '',
      currentErreur: '',
      activeInfoTabs: ['gender', 'avatar', 'bio', 'success'],
      activeStep: 0,
      avatarKey: ''
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
      this.$emit('changed-tab', this.activeInfoTabs[this.activeStep])
      if (this.activeStep === 3) {
        this.$emit('last-step')
      }
    },
    gender(val) {
      if (!val) return

      this.stepper.gender.valid = true
      this.stepper.avatar.authorize = true
      this.$emit('gender-is-valided')
      this.activeStep++
    }
  },
  computed: {
    finalUser() {
      let user = this.$props.user
      console.log(this.avatarKey)
      return Object.assign(user, { gender: this.gender, description: this.description, avatarKey: this.avatarKey })
    }
  },
  methods: {
    skipStep(nameStep) {
      this.stepper[nameStep].valid = true
      let index = this.activeInfoTabs.findIndex((elem) => elem === nameStep) + 1
      if (index != 0) {
        this.stepper[this.activeInfoTabs[index]].authorize = true
        this.activeStep++
      }
    },
    toggleShow() {
      this.show = !this.show
    },
    validateTheAvatar() {
      this.stepper.avatar.valid = true
      this.stepper.bio.authorize = true
      this.$emit('avatar-is-valided')
      this.activeStep++
    },
    submitRegisterForm() {
      this.$axios
        .post('/registration', {
          user: this.finalUser
        })
        .then((res) => {
          this.$notify({ type: 'info', text: 'Un mail de confirmation vient de vous être envoyé' })
          this.$emit('submitted-form')
          this.stepper.bio.valid = true
          this.stepper.success.authorize = true
          this.activeStep++
        })
        .catch((err) => {
          console.log('err', err)
          this.$notify({ group: 'modal', type: 'error', text: "L'email est déjà pris" })
        })
    },
    resendEmailConfirmation() {
      //todo: resend email confirmation
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
      this.showLoaderUploadImg = true
      this.error = ''
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
      this.showLoaderUploadImg = false
      this.avatarKey = jsonData.upload.public_id
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

      this.showAvatarValidationButton = false
      this.showLoaderUploadImg = false
      this.error = "Une erreur s'est produite, ton image n'a pas été validée"
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
.group-btn {
  display: flex;
  justify-content: center;
  margin: 0px 10% 0px 10%;
}
.group-btn .btn-resend-email {
  width: inherit !important;
  background-color: #ffffff00;
  color: #ffffff;
  border: 1px solid #ffffff;
}
.group-btn .btn-resend-email:hover {
  background-color: #ffffff;
  color: #292f33;
}
.group-btn .btn-login {
  width: inherit !important;
  margin-left: 3%;
  border: 1px solid #ffffff00;
}
.group-btn .btn-login:hover {
  background-color: #ffffff00;
  color: #ffffff;
  border: 1px solid #ffffff;
}
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
  margin-right: 10px;
  /* margin-right: 80px; */
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
.separator-success {
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
  letter-spacing: 0.03rem;
}
.info-text-small {
  white-space: nowrap;
}
.success-block {
  padding-top: 90px;
}
.avatar-validation-btn {
  height: 48px;
  font-size: 0.9rem;
  letter-spacing: 0.03px;
  padding-top: 12px;
  text-transform: uppercase;
  font-weight: 400;
  transition: all 0.3s ease;
  color: #292f33;
  margin: initial;
  margin-left: 196px;
  margin-top: 58px;
  width: 285px;
  background-color: white;
}
.avatar-validation-btn:hover,
.avatar-validation-btn.active {
  border: 1px solid #d82558;
  background-color: #d82558;
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
/*Loader image*/
.lds-dual-ring {
  position: absolute;
  margin-left: 30px;
  margin-top: 49px;
  display: inline-block;
  width: 80px;
  height: 80px;
}
.lds-dual-ring:after {
  content: ' ';
  display: block;
  width: 50px;
  height: 50px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #fff;
  border-color: #fff transparent #fff transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@media only screen and (max-height: 950px) {
  .descr-text {
    font-size: 0.75rem;
    line-height: 1.7;
  }
  .form-label {
    font-size: 0.9rem;
  }
  .profile-gender-btn {
    font-size: 1rem;
  }
  .upload-text-left {
    font-size: 0.75rem !important;
  }
  .avatar-validation-btn {
    padding-top: 14px;
    font-size: 0.75rem;
    width: 200px;
    margin-top: 51px;
    margin-left: 98px;
  }
  .separator {
    margin-bottom: 5vh;
  }
  .sperator-genre {
    margin-bottom: 9vh !important;
  }
  .sperator-avatar {
    margin-bottom: 5vh !important;
  }
  .separator-success {
    margin-top: 9vh !important;
    margin-bottom: 9vh !important;
  }
  .lds-dual-ring {
    margin-top: 43px;
  }
  .label-error {
    margin-top: 64px !important;
    font-size: 0.9rem !important;
  }
  .info-textarea {
    height: 120px;
    margin-bottom: 52px;
  }
}
</style>
