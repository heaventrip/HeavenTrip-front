<template>
  <!-- NOTE this is the new PARENT element for connection screens -->
  <div class="wrapper">
    <InlineSvg @click.stop="handlePageClose" v-if="activeTab !== 'infos'" type="button" :src="require('@/assets/images/svg/PICTO_CLOSE_PLEIN.svg')" height="60" style="position: absolute; top: 30px; left: 30px; z-index: 100" />
    <div class="purple-container align-items-center" style="position: relative">
      <div class="purple-container__content mx-auto d-flex flex-column h-100">
        <InlineSvg :src="require('@/assets/svg/logo-white.svg')" class="mt-auto" height="40" style="" />
        <div class="mt-auto d-flex flex-column" style="padding-bottom: 8vh; border-bottom: 1px dashed rgba(250, 250, 250, 0.2)">
          <div class="d-flex align-items-center mb-5" style="color: white">
            <div class="purple-container__paragraph-nb mr-4">01</div>
            <div class="purple-container__paragraph">La team d’Heaven Trip conçois de toute pièce les stages sportifs ce qui nous permet de te proposer des expériences hors normes a travers des programmes soutenus et personnalisables.</div>
          </div>
          <div class="d-flex mb-5" style="color: white">
            <div class="purple-container__paragraph-nb mr-4">02</div>
            <div class="purple-container__paragraph">En solo, en couple, entre potes ? Ici tu intègres un petit groupe avec lequel tu vas partager la totalité de ton stage sportif. Pas d’hôtel ni de buffet à volonté, panique pas ! On te laisse découvrir les coulisses…</div>
          </div>
          <div class="d-flex" style="color: white">
            <div class="purple-container__paragraph-nb mr-4">03</div>
            <div class="purple-container__paragraph">Vous ! Les Trippers, êtes au centre du concept, c’est pourquoi on vous donne les pleins pouvoirs sur ce site. Profil public, messagerie instantanée… Devenez la communauté N°1 de l’évasion sportive !</div>
          </div>
        </div>
        <div class="my-auto text-center mt-5">
          <div style="color: white; font-weight: 400">De l’évasion sportive pour tous !</div>
          <InlineAvatars :avatars="[]" />
        </div>
      </div>
      <div class="purple-container__svgs d-flex flex-column h-100 justify-content-around px-5">
        <InlineSvg :src="require('@/assets/svg/surf.svg')" height="60" fill="#292f33" />
        <InlineSvg :src="require('@/assets/svg/kitesurf.svg')" height="60" fill="#292f33" />
        <InlineSvg :src="require('@/assets/svg/paddle.svg')" height="60" fill="#292f33" />
        <InlineSvg :src="require('@/assets/svg/climbing.svg')" height="60" fill="#292f33" />
        <InlineSvg :src="require('@/assets/svg/ski-mask.svg')" height="60" fill="#292f33" />
        <InlineSvg :src="require('@/assets/svg/freeride.svg')" height="60" fill="#292f33" />
      </div>
    </div>
    <div class="grey-container d-flex flex-column align-items-center text-white" style="background-color: #292f33">
      <div style="position: absolute; width: 100%; display: flex; padding: 2rem">
        <InlineSvg v-if="activeTab === 'infos'" @click="activeTab = 'login'" type="button" :src="require('@/assets/svg/arrow-right.svg')" height="20" fill="white" transform="rotate(180)" />
        <div class="ml-auto d-flex align-items-center">
          <div v-if="activeTab === 'infos'" style="text-transform: uppercase; text-align: right; color: #7c7c7c; margin-right: 1rem; font-weight: 500; font-size: 0.8rem">Complète ton <br />profil</div>
          <div v-else style="text-transform: uppercase; text-align: right; color: #7c7c7c; margin-right: 1rem; font-weight: 500; font-size: 0.8rem">Se connecter</div>
          <InlineSvg @click.stop="previousScreen" :src="require('@/assets/svg/logo-small.svg')" height="60" fill="#7c7c7c" />
        </div>
      </div>
      <div class="form-container w-50" style="margin-top: 25vh">
        <div class="d-flex connection-nav-container mb-5" v-if="activeTab === 'infos'">
          <div @click="activeInfoTab = 'gender'" type="button" class="connection-nav-button" :class="{ 'connection-nav-button--active': activeInfoTab === 'gender ' }">Camp</div>
          <div @click="activeInfoTab = 'avatar'" type="button" class="connection-nav-button" :class="{ 'connection-nav-button--active': activeInfoTab === 'avatar' }">Photo de profil</div>
          <div @click="activeInfoTab = 'bio'" type="button" class="connection-nav-button" :class="{ 'connection-nav-button--active': activeInfoTab === 'bio' }">Quelques mots</div>
          <div @click="activeInfoTab = 'success'" type="button" class="connection-nav-button" :class="{ 'connection-nav-button--active': activeInfoTab === 'success' }">success</div>
        </div>
        <div class="d-flex connection-nav-container mb-5" v-else>
          <div @click="activeTab = 'login'" type="button" class="connection-nav-button" :class="{ 'connection-nav-button--active': activeTab === 'login' }">Connexion</div>
          <div @click="activeTab = 'signup'" type="button" class="connection-nav-button" :class="{ 'connection-nav-button--active': activeTab === 'signup' }">Inscription</div>
          <div @click="activeTab = 'infos'" type="button" class="connection-nav-button" :class="{ 'connection-nav-button--active': activeTab === 'infos' }">Infos</div>
        </div>
        <transition name="fade-fast" mode="out-in">
          <form :key="activeTab">
            <FormLogin v-if="activeTab === 'login'" @login-success="$emit('login-success')" @clicked-signup="activeTab = 'signup'" @clicked-password-forgotten="activeTab = 'password'" />
            <FormSignup v-else-if="activeTab === 'signup'" @clicked-existing-account="activeTab = 'login'" @submitted-form="showInfoScreen" />
            <FormInfos v-else-if="activeTab === 'infos'" @changed-tab="setNewInfoTab" :active-info-tab="activeInfoTab" />
            <Password v-else-if="activeTab === 'password'" @password-updated="activeTab = 'login'" @clicked-password-retrieved="activeTab = 'login'" />
          </form>
        </transition>
      </div>
      <div v-if="activeTab === 'login'" class="bottom-block d-flex flex-column justify-content-center align-items-center mt-auto" style="height: 18vh; width: 100%; background-color: #d82558">
        <div class="mb-4" style="color: #fff; font-weight: 400">C'est la première fois ?</div>
        <Button text="Je n'ai pas encore de compte" px="1.5rem" size=".8rem" height="50px" width="60%" weight="bold" color="grey" @click="activeTab = 'signup'" />
      </div>
      <div v-else-if="activeTab === 'signup'" class="bottom-block d-flex flex-column justify-content-center align-items-center mt-auto" style="height: 18vh; width: 100%; background-color: white">
        <div class="mb-4" style="color: #292f33">Tripper, je suis déjà !</div>
        <Button text="J'ai déjà un compte" px="1.5rem" size=".8rem" height="50px" width="60%" weight="bold" color="grey" @click="activeTab = 'login'" />
      </div>
      <InlineSvg v-if="activeTab === 'success'" style="position: absolute; bottom: 2rem; right: 2rem" fill="white" height="60" :src="require('@/assets/svg/logo-small-no-circle.svg')" />
    </div>
  </div>
</template>

<script>
import Button from '@/components/elements/Button.vue'
import InlineAvatars from '@/components/elements/InlineAvatars.vue'
import FormLogin from './FormLogin.vue'
import FormSignup from './FormSignup.vue'
import FormInfos from './FormInfos.vue'
import Password from './Password.vue'
import gsap from 'gsap'

export default {
  name: 'Account',
  components: {
    Button,
    FormLogin,
    FormSignup,
    FormInfos,
    Password,
    InlineAvatars
  },
  props: ['new-active-tab'],
  data() {
    return {
      activeTab: '',
      activeInfoTab: 'gender'
    }
  },
  watch: {
    newActiveTab: {
      immediate: true,
      handler(val) {
        this.activeTab = val
      }
    }
  },
  methods: {
    showInfoScreen() {
      let purpleContainer = document.querySelector('.purple-container')
      let greyContainer = document.querySelector('.grey-container')
      let purpleContentBlock = document.querySelector('.purple-container__content')
      let purpleSvgsBlock = document.querySelector('.purple-container__svgs')
      let bottomBlock = document.querySelector('.bottom-block')
      let tl = gsap.timeline()

      // slide left
      tl.to(greyContainer, { width: '88%', ease: 'power4.out', duration: 0.8 }, '<')
      tl.to(purpleContainer, { width: '12%', ease: 'power4.out', duration: 0.8 }, '<')
      tl.to(purpleContainer, { backgroundColor: '#d82558', duration: 0.8 }, '<')
      tl.to(purpleContentBlock, { width: '0', duration: 0.8 }, '<')
      tl.to(purpleSvgsBlock, { width: '100%', duration: 0.8 }, '<')
      tl.to(purpleContentBlock, { autoAlpha: '0', ease: 'power4.out', duration: 0.2 }, '<')

      // then hide bottom
      tl.to(
        bottomBlock,
        {
          y: '+=100%'
        },
        '2'
      )

      this.activeTab = 'infos'
    },
    setNewInfoTab(val) {
      this.activeInfoTab = val
    },
    handlePageClose() {
      this.$emit('closed-page')
    }
  },
  created() {
    // TODO in back endpoint for all wishlist users
    // this.$axios.get('/wishlists')
  }
}
</script>

<style scoped>
.purple-container__content {
  width: 50%;
}
.bttn--grey:hover {
  color: #292f33;
  background-color: white;
}
.purple-container__paragraph-nb {
  font-size: 3rem;
  font-family: Oswald, sans-serif;
  font-weight: bold;
  color: rgba(250, 250, 250, 0.1);
}
.purple-container__paragraph {
  font-family: Muli, sans-serif;
  font-weight: light;
  font-size: 0.85rem;
}

.connection-nav-button {
  padding-bottom: 0.5rem;
  font-weight: 700;
  font-size: 1rem;
  margin-right: 2rem;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}
.connection-nav-button--active {
  color: rgba(255, 255, 255);
  border-bottom: 1px solid white;
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
.grey-container {
  position: relative;
  width: 48%;
}
.purple-container::after {
  content: '';
  position: absolute;
  background-color: hsla(292, 24%, 30%, 0.95);
  left: 0;
  /* opacity: 0.6; */
  width: 100%;
  height: 100vh; /* corresponds height of image */
  z-index: -1;
}
</style>
