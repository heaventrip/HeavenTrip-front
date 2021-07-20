<template>
  <!-- NOTE this is the new PARENT element for connection screens -->
  <div v-if="showProfile" class="wrap">
    <InlineSvg @click="showProfile = false" :src="require('@/assets/images/svg/PICTO_CLOSE_PLEIN.svg')" height="60" style="position: absolute; top: 30px; left: 30px; z-index: 100" />
    <div class="image-container" style="width: 52%; position: relative">
      <InlineSvg :src="require('@/assets/svg/logo-white.svg')" style="position: absolute" height="40" />
      <div></div>
      <div></div>
    </div>
    <div class="d-flex flex-column align-items-center text-white" style="background-color: #292f33; width: 48%">
      <div class="form-container w-50 mt-auto">
        <div class="d-flex connection-nav-container mb-5">
          <div @click="activeTab = 'login'" type="button" class="connection-nav-button" :class="{ 'connection-nav-button--active': activeTab === 'login' }">Connexion</div>
          <div @click="activeTab = 'signup'" type="button" class="connection-nav-button" :class="{ 'connection-nav-button--active': activeTab === 'signup' }">Inscription</div>
        </div>
        <transition name="fade-fast" mode="out-in">
          <form :key="activeTab">
            <FormLogin v-if="activeTab === 'signup'" />
            <Password v-else />
          </form>
        </transition>
      </div>
      <div class="d-flex flex-column justify-content-center align-items-center mt-auto" style="height: 18vh; width: 100%; background-color: white">
        <div class="mb-4" style="color: #292f33">Tripper, je suis déjà !</div>
        <Button text="J'ai déjà un compte" px="1.5rem" size=".8rem" height="50px" width="60%" weight="bold" text-color="#fff" background-color="#292f33" />
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/elements/Button.vue'
import FormLogin from './FormLogin.vue'
import Password from './Password.vue'

export default {
  name: 'Profile',
  components: {
    Button,
    Password,
    FormLogin
  },
  data() {
    return {
      activeTab: 'signup',
      showProfile: true
    }
  }
}
</script>

<style scoped>
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
.wrap {
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
.image-container::after {
  content: '';
  position: absolute;
  background-color: hsla(292, 24%, 30%, 0.95);
  left: 0;
  /* opacity: 0.6; */
  width: 100%;
  height: 100vh; /* corresponds height of image */
}
</style>
