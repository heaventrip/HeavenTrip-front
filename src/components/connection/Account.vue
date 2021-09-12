<template>
  <!-- NOTE this is the new PARENT element for connection screens -->
  <div class="wrapper">
    <InlineSvg
      @click.stop="handlePageClose"
      v-if="activeTab !== 'infos'"
      type="button"
      :src="require('@/assets/images/svg/PICTO_CLOSE_PLEIN.svg')"
      height="60"
      style="position: absolute; top: 30px; left: 48px; z-index: 100"
    />
    <div class="purple-container align-items-center" :class="{ 'purple-container-infos': activeTab === 'infos' }" style="position: relative">
      <div class="purple-container__content mx-auto d-flex flex-column h-100" :class="{ 'purple-container__content-tab-info-active': activeTab === 'infos' }">
        <InlineSvg id="svg-logo-white" :src="require('@/assets/svg/logo-white.svg')" class="mt-auto" height="40" :class="{ 'd-none': $windowHeight < 600 }" />
        <div class="purple-container__block mt-auto d-flex flex-column">
          <div class="purple-container__groupe d-flex align-items-center mb-3 mb-xl-5" style="color: white">
            <!-- <div class="purple-container__paragraph-nb mr-4">01</div> -->
            <div class="purple-container__paragraph">
              La team d’Heaven Trip conçois de toute pièce les stages sportifs ce qui nous permet de te proposer des expériences hors normes a travers des programmes soutenus et personnalisables.
            </div>
          </div>
          <div class="purple-container__groupe d-flex mb-3 mb-xl-5" style="color: white">
            <!-- <div class="purple-container__paragraph-nb mr-4">02</div> -->
            <div class="purple-container__paragraph">
              En solo, en couple, entre potes ? Ici tu intègres un petit groupe avec lequel tu vas partager la totalité de ton stage sportif. Pas d’hôtel ni de buffet à volonté, panique pas ! On te
              laisse découvrir les coulisses…
            </div>
          </div>
          <div class="d-flex" style="color: white">
            <!-- <div class="purple-container__paragraph-nb mr-4">03</div> -->
            <div class="purple-container__paragraph">
              Vous ! Les Trippers, êtes au centre du concept, c’est pourquoi on vous donne les pleins pouvoirs sur ce site. Profil public, messagerie instantanée… Devenez la communauté N°1 de
              l’évasion sportive !
            </div>
          </div>
        </div>
        <div class="purple-container__footer text-center">
          <div style="color: white; font-weight: 400">De l’évasion sportive pour tous !</div>
          <InlineAvatars :avatars="avatarKeys" />
        </div>
      </div>
      <div class="purple-container__svgs d-flex flex-column justify-content-around px-2" :class="{ 'purple-container__svgs-infos': activeTab === 'infos' }">
        <InlineSvg :src="require('@/assets/svg/surf.svg')" :height="$windowWidth < 1200 ? 40 : 60" fill="#292f33" />
        <InlineSvg :src="require('@/assets/svg/kitesurf.svg')" :height="$windowWidth < 1200 ? 40 : 60" fill="#292f33" />
        <InlineSvg :src="require('@/assets/svg/paddle.svg')" :height="$windowWidth < 1200 ? 40 : 60" fill="#292f33" />
        <InlineSvg :src="require('@/assets/svg/climbing.svg')" :height="$windowWidth < 1200 ? 40 : 60" fill="#292f33" />
        <InlineSvg :src="require('@/assets/svg/ski-mask.svg')" :height="$windowWidth < 1200 ? 40 : 60" fill="#292f33" />
        <InlineSvg :src="require('@/assets/svg/freeride.svg')" :height="$windowWidth < 1200 ? 40 : 60" fill="#292f33" />
      </div>
    </div>
    <div
      class="grey-container d-flex flex-column align-items-center text-white"
      style="background-color: #292f33"
      :class="[{ 'grey-container-infos': activeTab === 'infos' }, { 'grey-container-width': activeTab === 'login' || activeTab === 'signup' }]"
    >
      <InlineSvg
        style="position: absolute; top: 3.8rem; left: 3.2rem"
        v-if="activeTab === 'infos' && !hiddenArrow"
        @click="previousScreen"
        type="button"
        :src="require('@/assets/svg/arrow-right.svg')"
        height="20"
        fill="white"
        transform="rotate(180)"
      />
      <div class="d-flex align-items-center" style="position: absolute; top: 1.6rem; right: 2.4rem">
        <div class="title-connection" v-if="activeTab === 'infos'" style="text-transform: uppercase; text-align: right; margin-right: 1rem; font-weight: 500; font-size: 0.8rem">
          Complète ton <br />profil
        </div>
        <div class="title-connection" v-else style="text-transform: uppercase; text-align: right; margin-right: 1rem; font-weight: 500; font-size: 0.8rem">Se connecter</div>
        <InlineSvg class="title-connection" :src="require('@/assets/svg/logo-small.svg')" height="60" />
      </div>
      <div class="form-container" :class="[{ 'form-container-login': activeTab === 'login' }, { 'form-container-signup': activeTab === 'signup' }, { 'form-container-infos': activeTab === 'infos' }]">
        <div
          class="d-flex connection-nav-container connection-nav-container-info"
          :class="[{ 'form-container-infos-avatar': activeInfoTab === 'avatar' }]"
          style="margin-bottom: 110px"
          v-if="activeTab === 'infos'"
        >
          <div
            v-if="!isSuccess"
            @click="activeInfoTabByName('gender')"
            type="button"
            :style="{ color: genderIsValid ? '#d82558' : '#ffffff' }"
            class="connection-nav-button"
            :class="[
              { 'connection-nav-button-infos': activeTab === 'infos' },
              { 'connection-nav-button--active': activeInfoTab === 'gender' && !genderIsValid },
              { 'connection-nav-button--valid--active': activeInfoTab === 'gender' && genderIsValid }
            ]"
          >
            Camp
          </div>
          <div
            v-if="!isSuccess"
            @click="activeInfoTabByName('avatar')"
            type="button"
            :style="{ color: avatarIsValid ? '#d82558' : genderIsValid ? '#ffffff' : '' }"
            class="connection-nav-button"
            :class="[
              { 'connection-nav-button-infos': activeTab === 'infos' },
              { 'connection-nav-button--active': activeInfoTab === 'avatar' && !avatarIsValid },
              { 'connection-nav-button--valid--active': activeInfoTab === 'avatar' && avatarIsValid }
            ]"
          >
            Photo de profil
          </div>
          <div
            v-if="!isSuccess"
            @click="activeInfoTabByName('bio')"
            type="button"
            :style="{ color: avatarIsValid ? '#ffffff' : '' }"
            class="connection-nav-button"
            :class="[{ 'connection-nav-button-infos': activeTab === 'infos' }, { 'connection-nav-button--active': activeInfoTab === 'bio' }]"
          >
            Quelques mots
          </div>
          <!--<div @click="activeInfoTabByName('success')" type="button" class="connection-nav-button" :class="{ 'connection-nav-button--active': activeInfoTab === 'success' }">success</div>-->

          <div v-if="activeInfoTab != 'success' && activeInfoTab != 'bio'" id="btn-skip-step" @click="skipStep()">
            <p>
              Je décide de le faire plus tard <InlineSvg :src="require('@/assets/svg/arrow-next-right.svg')" width="17px" height="17px" fill="#292f33" style="margin-left: 5px; padding-bottom: 2px" />
            </p>
          </div>
        </div>
        <div v-else-if="isNewPassword">
          <div id="title-password" class="connection-nav-button">Nouveau mot de passe</div>
        </div>
        <div v-else-if="activeTab === 'password'">
          <div id="title-password" class="connection-nav-button">Mot de passe oublié</div>
        </div>
        <div v-else>
          <div class="d-flex connection-nav-container">
            <div
              @click="
                () => {
                  activeTab = 'login'
                  tlConnectionTab.reverse()
                }
              "
              type="button"
              class="connection-nav-button-annimate connection-nav-button button-sign"
              :class="{ 'connection-nav-button--active': activeTab === 'login' }"
            >
              Connexion
            </div>
            <div
              @click="
                () => {
                  activeTab = 'signup'
                  tlConnectionTab.restart()
                }
              "
              type="button"
              class="connection-nav-button-annimate connection-nav-button button-sign"
              :class="{ 'connection-nav-button--active': activeTab === 'signup' }"
            >
              Inscription
            </div>
            <!--<div @click="activeTab = 'login'" type="button" class="connection-nav-button button-sign" :class="{ 'connection-nav-button--active': activeTab === 'infos' }">Infos</div>-->
          </div>
          <div class="border-selection" :style="{ display: activeTab != 'login' && activeTab != 'signup' ? 'none' : '' }"></div>
        </div>
        <form class="form-container-form">
          <transition name="fade-fast" mode="out-in">
            <!-- <FormLogin v-show="activeTab === 'login'" @login-success="$emit('login-success')" @clicked-signup="$router.push({name: 'Account', params: {activeTab: 'signup'}})" @clicked-password-forgotten="activeTab = 'password'" /> -->
            <!-- <FormSignup v-if="activeTab === 'signup'" @completed="bringInfoForm" @clicked-existing-account="$router.push({name: 'Account', params: {activeTab: 'login'}})"/> -->
            <keep-alive>
              <component
                :is="formComponents[activeTab]"
                :ref="formComponents[activeTab]"
                @login-success="$emit('login-success')"
                @clicked-signup="activeTab = 'signup'"
                @clicked-password-forgotten="activeTab = 'password'"
                @completed="bringInfoForm"
                @clicked-existing-account="activeTab = 'login'"
              ></component>
            </keep-alive>
          </transition>
          <!-- <router-view v-if="$route.name === 'FormLogin' || $route.name === 'FormSignup'" v-slot="{ Component }">
          </router-view> -->
          <FormInfos
            v-if="activeTab === 'infos'"
            ref="formInfos"
            @submitted-form="isSuccess = true"
            @avatar-is-valided="avatarIsValid = true"
            @gender-is-valided="genderIsValid = true"
            @changed-tab="setNewInfoTab"
            @last-step="hiddenArrow = true"
            :active-info-tab="activeInfoTab"
            :user="user"
          />
          <Password
            v-if="activeTab === 'password' && !$route.query.recover_password_token"
            @password-updated="
              () => {
                activeTab = 'login'
                tlConnectionTab.reverse()
                isNewPassword = false
              }
            "
            @clicked-password-retrieved="
              () => {
                activeTab = 'login'
                tlConnectionTab.reverse()
                isNewPassword = false
              }
            "
            @change-news-password="isNewPassword = true"
          />
          <PasswordStep3 v-if="$route.query.recover_password_token" />
        </form>
      </div>

      <div v-if="activeTab === 'login'" class="bottom-block d-flex flex-column justify-content-center align-items-center mt-auto" style="width: 100%; background-color: #d82558">
        <div class="bottom-block-text" style="color: #fff; font-weight: 400">C'est la première fois ?</div>
        <Button
          class="btn-change-connection"
          text="Je n'ai pas encore de compte"
          px="1.5rem"
          size=".8rem"
          height="50px"
          width="60%"
          weight="bold"
          color="grey"
          @click="
            () => {
              activeTab = 'signup'
              createTsConnectionTab()
            }
          "
        />
      </div>
      <div v-else-if="activeTab === 'signup'" class="bottom-block d-flex flex-column justify-content-center align-items-center mt-auto" style="width: 100%; background-color: white">
        <div class="bottom-block-text" style="color: #292f33">Tripper, je suis déjà !</div>
        <Button
          class="btn-change-connection"
          id="bttn-have-account"
          text="J'ai déjà un compte"
          px="1.5rem"
          height="50px"
          width="60%"
          weight="bold"
          color="grey"
          @click="
            () => {
              activeTab = 'login'
              createTsConnectionTab()
            }
          "
        />
      </div>
      <InlineSvg v-if="activeTab === 'success'" style="position: absolute; bottom: 2rem; right: 2rem" fill="white" height="60" :src="require('@/assets/svg/logo-small-no-circle.svg')" />
    </div>
  </div>
  <notifications class="custom-notifications" group="modal" position="top center" width="35%" :max="3" />
</template>

<script>
import Button from '@/components/elements/Button.vue'
import InlineAvatars from '@/components/elements/InlineAvatars.vue'
import FormLogin from './FormLogin.vue'
import FormSignup from './FormSignup.vue'
import FormInfos from './FormInfos.vue'
import Password from './Password.vue'
import PasswordStep3 from './PasswordStep3.vue'
import gsap from 'gsap'

export default {
  name: 'Account',
  components: {
    Button,
    FormLogin,
    FormSignup,
    FormInfos,
    Password,
    PasswordStep3,
    InlineAvatars
  },
  props: ['active-tab'],
  data() {
    return {
      activeTab: '',
      activeInfoTab: 'gender',
      formComponents: {
        login: 'FormLogin',
        signup: 'FormSignup'
      },
      isNewPassword: false,
      fromRoute: '',
      genderIsValid: false,
      avatarIsValid: false,
      isSuccess: false,
      email: '',
      tl: null,
      tlConnectionTab: null,
      user: null,
      avatarKeys: [],
      hiddenArrow: false
    }
  },
  watch: {
    // activeTab(val) {
    //   if (val === 'login' || val === 'signup') this.createTsConnectionTab()
    // },
    // '$route.params.activeTab': {
    //   immediate: true,
    //   handler(val) {
    //     this.activeTab = val
    //   }
    // },
    // newActiveTab: {
    //   immediate: true,
    //   handler(val) {
    //     this.activeTab = val
    //   }
    // },
    activeTab(val) {
      history.pushState(null, null, val)
    },
    $route: {
      immediate: true,
      handler(to, from) {
        this.fromRoute = from
        this.activeTab = this.$route.params.activeTab
      }
    }
  },
  methods: {
    bringInfoForm(userObj) {
      this.user = userObj
      this.showInfoScreen()
    },
    skipStep() {
      this.$refs.formInfos.skipStep(this.activeInfoTab)
    },
    activeInfoTabByName(tabName) {
      if (this.$refs.formInfos.stepper[tabName].authorize) {
        this.activeInfoTab = tabName
      }
    },
    createTsConnectionTab() {
      let borderSelection = document.querySelector('.border-selection')
      let connectionNavButtons = document.querySelectorAll('.connection-nav-button-annimate')

      let connectionTabButtonLoginWidth = connectionNavButtons[0].getBoundingClientRect().width
      let connectionTabButtonSignupWidth = connectionNavButtons[1].getBoundingClientRect().width
      borderSelection.style.width = connectionTabButtonLoginWidth

      /*       const mediaQuery = window.matchMedia('(max-width: 768px)')
      
      function handleTabletChange(e) {
        console.log('sdvsdv')
        if (e.matches) {
          console.log('Media Query Matched!')
        }
      }
      mediaQuery.addListener(handleTabletChange)
      mediaQuery.addEventListener(handleTabletChange)

      handleTabletChange(mediaQuery) */

      let tlConnectionTab = gsap.timeline().pause()

      var style = window.getComputedStyle ? getComputedStyle(connectionNavButtons[0], null) : connectionNavButtons[0].currentStyle
      var connectionTabButtonLoginMarginRight = parseInt(style.marginRight) || 0
      let movementLength = connectionTabButtonLoginWidth + connectionTabButtonLoginMarginRight

      tlConnectionTab.to(borderSelection, { width: connectionTabButtonSignupWidth, x: movementLength, ease: 'power1.out', duration: 0.06 })

      this.tlConnectionTab = tlConnectionTab
    },
    showInfoScreen() {
      let purpleContainer = document.querySelector('.purple-container')
      let greyContainer = document.querySelector('.grey-container')
      let purpleContentBlock = document.querySelector('.purple-container__content')
      let purpleSvgsBlock = document.querySelector('.purple-container__svgs')
      let bottomBlock = document.querySelector('.bottom-block')
      let tl = gsap.timeline().pause()

      // slide left
      tl.to(greyContainer, { width: '88%', ease: 'power4.out', duration: 0.8 }, '<')
        .to(purpleContainer, { width: '12%', ease: 'power4.out', duration: 0.8 }, '<')
        .to(purpleContainer, { backgroundColor: '#d82558', duration: 0.8 }, '<')
        .to(purpleSvgsBlock, { width: '100%', marginRight: '0px', duration: 0.8 }, '<')
        .fromTo(purpleContentBlock, { width: '60%' }, { width: '0', ease: 'power4.out', duration: 0.8 }, '<')
        .fromTo(purpleContentBlock, { autoAlpha: '1' }, { autoAlpha: '0', duration: 0.2 }, '<')
        .to(bottomBlock, { y: '+=100%' }, '<')

      this.tl = tl
      this.tl.play()
      this.activeTab = 'infos'
    },
    setNewInfoTab(val) {
      this.activeInfoTab = val
    },
    previousScreen() {
      if (this.activeInfoTab === 'gender') {
        this.tl.reverse()
        this.activeTab = 'signup'
      } else {
        this.$refs.formInfos.activeStep--
      }
    },
    handlePageClose() {
      if (this.fromRoute) this.$router.back()
      else this.$router.push({ name: 'Home' })
    }
  },
  created() {
    // TODO in back endpoint for all wishlist users
    // this.$axios.get('/wishlists')
  },
  mounted() {
    this.$axios
      .get(`https://${process.env.VUE_APP_CLOUDINARY_KEY}:${process.env.VUE_APP_CLOUDINARY_SECRET}@api.cloudinary.com/v1_1/heaventrip/resources/search?max_results=10&expression=resource_type:image`)
      .then((res) => {
        this.avatarKeys = res.resources.map((resource) => resource.public_id)
      })
    this.createTsConnectionTab()
  }
}
</script>

<style scoped>
#title-password {
  color: white;
}
#svg-logo-white {
  /* margin-top: 21vh !important; */
  margin-top: calc(23vh - 40px) !important;
  max-height: 40px;
  min-height: 35px;
  height: 3vw;
}
#btn-skip-step {
  z-index: 10;
  position: absolute;
  bottom: 1rem;
  right: 3rem;
  cursor: pointer;
}
#btn-skip-step p {
  letter-spacing: 0.03rem;
  font-family: inherit;
  font-weight: 400;
}
.bottom-block {
  height: 15vh;
}
.bottom-block-text {
  margin-bottom: 1.5rem;
}
.purple-container__content {
  width: 55%;
}
.purple-container__svgs {
  height: 100%;
  padding-left: 3rem !important;
  padding-right: 3rem !important;
}
.purple-container__svgs svg {
  height: 4vw;
  max-height: 52px;
}
.purple-container__svgs-infos {
  /* min-width: 12.2vw;
  padding-top: 0.6rem;
  padding-bottom: 0.2rem;
  padding-left: 3.4rem !important;
  padding-right: 2.2rem !important; */
  padding-left: 3.4rem !important;
  padding-right: 2.2rem !important;
  padding-bottom: 1.2rem;
  padding-top: 1.6rem;
}
.purple-container__svgs-infos svg {
  height: 3.4vw !important;
}
.bttn--grey:hover {
  color: #292f33;
  background-color: white;
}
/* .purple-container__paragraph-nb {
  font-size: 3rem;
  font-family: Oswald, sans-serif;
  font-weight: bold;
  color: rgba(250, 250, 250, 0.1);
} */
.purple-container__paragraph {
  font-family: Muli, sans-serif;
  font-weight: light;
  color: #ffffff8f;
  font-size: 0.85rem;
}
.purple-container__groupe {
  margin-bottom: 2rem !important;
}
.title-connection {
  color: white;
  fill: white;
}
#bttn-have-account:hover {
  background-color: #d82558;
  color: white;
}
.connection-nav-button {
  padding-bottom: 0.5rem;
  font-weight: 700;
  letter-spacing: 1px;
  font-size: 1rem;
  margin-right: 2rem;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}
.connection-nav-button--active {
  color: rgba(255, 255, 255);
  border-bottom: 0px solid white;
}
.connection-nav-button-infos {
  border-bottom: 1px solid transparent;
}
.connection-nav-button-infos.connection-nav-button--valid--active {
  border-bottom: 1px solid #d82558;
  transition: border-bottom 0.3s;
  text-decoration: none;
}
.connection-nav-button-infos.connection-nav-button--active {
  color: rgba(255, 255, 255);
  border-bottom: 1px solid white;
  transition: border-bottom 0.3s;
  text-decoration: none;
}
.button-sign:hover {
  color: white;
}
.border-selection {
  background-color: white;
  margin-top: 8px;
  width: 84px;
  height: 1px;
}
.center-btn,
.center-btn:active {
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 0.03rem;
  font-size: 0.8125rem;
  background-color: rgba(58, 63, 66, 0.5);
  transition: background-color 0.5s ease;
}
.center-btn:hover {
  background-color: white;
  color: #292f33;
}
.center-btn-text {
  position: relative;
  top: 1.8rem;
}
.keyword {
  color: #fff;
  letter-spacing: 0.16px;
  text-transform: uppercase;
  font-family: Muli, sans-serif;
  font-weight: 900;
  background-color: #292f33;
  margin: 0.1rem 0.2rem;
  padding: 0 0.2rem;
}
.keyword--big {
  background-color: rgba(255, 255, 255, 0.5);
  border: 1px dashed #292f33;
  color: #292f33;
  flex-grow: 1;
  font-size: 1.4rem;
  padding-right: 1.4rem;
  padding-left: 1.4rem;
}
.keyword--first-line {
  flex-grow: 1;
  text-align: center;
}
.wrapper {
  display: flex;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  position: fixed;
  z-index: 100;
  /* overflow: auto; */
}
.big-image {
  object-fit: cover;
  /* object-position: 10px 10px; */
  height: 100%;
  width: 100%;
}
.purple-container {
  display: flex;
  width: 52%;
}
.purple-container-infos {
  max-width: 24rem;
}
.purple-container__block {
  padding-bottom: 8vh;
  max-width: 32rem;
  margin: auto;
  margin-top: 5rem !important;
  margin-bottom: 43px;
  border-bottom: 1px dashed rgba(250, 250, 250, 0.2);
  line-height: 1.4rem;
}
.grey-container {
  box-shadow: -10px -2px 32px -14px rgb(41 47 51);
  position: relative;
  width: 48%;
}
.purple-container::after {
  content: '';
  position: absolute;
  /* background-color: hsla(292, 24%, 30%, 0.95); */
  background-color: hsl(292, 24%, 30%);
  opacity: 0.98;
  left: 0;
  /* opacity: 0.6; */
  width: 100%;
  height: 100vh; /* corresponds height of image */
  z-index: -1;
}
.grey-container-infos {
  width: 100% !important;
}
.form-container {
  margin-top: 21vh;
  width: 50%;
}
.form-container-login,
.form-container-signup {
  max-width: 40rem;
  min-width: 22rem;
}
.form-container-infos {
  width: 600px;
}
.form-container-form {
  margin-top: 50px;
}
.purple-container_groupe {
  margin-bottom: 1rem;
}
@media only screen and (max-width: 1460px) {
  .grey-container-width {
    /* width: 64% !important; */
    min-width: 34rem;
  }
  .purple-container__content {
    margin-left: auto !important;
  }
  /*   .purple-container__paragraph-nb {
    display: none;
  } */
  .purple-container__svgs {
    margin-right: -7px;
  }
  .purple-container__block {
    margin-top: 4rem !important;
  }
  .purple-container__footer {
    margin-top: 0rem !important;
  }
}
@media only screen and (max-width: 1250px) {
  .form-container-login,
  .form-container-signup {
    width: 30vw;
  }
}
@media only screen and (max-width: 1150px) {
  .form-container-login,
  .form-container-signup {
    width: 343px;
  }
}
@media only screen and (max-height: 950px) {
  .connection-nav-container-info {
    margin-bottom: 6vh !important;
  }
  .form-container-form {
    margin-top: 35px;
  }
  .connection-nav-button {
    font-size: 0.8rem;
  }
  .purple-container__block {
    margin-bottom: 3rem;
    padding-bottom: 10vh;
  }
  .purple-container__groupe {
    margin-bottom: 3vh !important;
  }
  .purple-container__footer {
    font-size: 0.85rem;
    margin-top: 0rem !important;
  }
}
@media only screen and (max-height: 800px) {
  .form-container {
    margin-top: 21vh;
  }
  .form-container-login,
  .form-container-signup {
    margin-top: 17vh;
  }
  .bottom-block-text {
    margin-bottom: 0.9rem;
  }
  .purple-container__block {
    margin-top: 4rem !important;
    padding-bottom: 10vh;
  }
  .purple-container__groupe {
    margin-bottom: 2vh !important;
  }
  .purple-container__footer {
    font-size: 0.85rem;
    margin-top: 0rem !important;
  }
}
@media only screen and (max-width: 1120px) and (max-height: 800px) {
  .purple-container__block {
    margin-top: 2.4rem !important;
    margin-bottom: 2.2rem !important;
    padding-bottom: 7vh !important;
  }
  .purple-container__content {
    width: 60%;
    margin-right: 2rem !important;
  }
  .purple-container__content-tab-info-active {
    margin-right: 0rem !important;
  }
  .purple-container__svgs {
    margin-right: -24px;
  }
  .purple-container__svgs svg {
    height: 3.6vw !important;
  }
  .purple-container__paragraph {
    font-size: 0.8rem;
  }
}
</style>
