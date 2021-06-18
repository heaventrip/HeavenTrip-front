<template>
  <ul v-if="$parent.agencyIsActive" class="list-unstyled mb-0 ml-auto d-none d-lg-flex text-uppercase profile-menu float-right">
    <li v-if="isLoggedIn()">
      <div class="dropdown login-dropdown">
        <button style="color: #292f33" class="btn btn-block rounded-0 border-0 pt-3" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <img class="login-img mr-2" fluid :src="require('@/assets/images/ui_faces/1.jpg')" />
          MARION <span class="l-name"> .K</span>
          <img class="menu-icon" fluid :src="require('@/assets/images/menu.png')" />
        </button>
        <div class="dropdown-menu text-uppercase" style="" aria-labelledby="dropdownMenu2">
          <div class="account-dropdown-item">
            <button class="dropdown-item" type="button">
              Mes envies
              <span class="font-weight-bold text-danger ml-1">(2)</span>
            </button>
          </div>
          <div class="account-dropdown-item">
            <button class="dropdown-item" type="button">
              Mes séjours
              <div class="position-relative ml-auto">
                <img class="picto-icon" fluid :src="require('@/assets/images/svg/PICTO_CHAT.svg')" />
                <div class="notify-number">1</div>
              </div>
            </button>
          </div>
          <div class="account-dropdown-item">
            <button class="dropdown-item trip-page-link" type="button">Ma page Tripper</button>
          </div>
          <div class="account-dropdown-item">
            <button class="dropdown-item account-page-link" type="button">Mon compte</button>
          </div>
          <div class="account-dropdown-item">
            <button @click="logoutUser" class="dropdown-item logout-page-link" type="button">se déconnecter</button>
          </div>
        </div>
      </div>
    </li>
    <li v-if="!isLoggedIn()" type="button">
      <a @click="openModal('login')" class="text-reset px-4 py-4 d-inline-block" style="color: #292f33 !important">se connecter</a>
    </li>
    <li v-if="!isLoggedIn()" type="button">
      <a @click="openModal('signup')" href="#" class="px-4 py-4 profile-link font-weight-bold d-inline-block" style="color: #fff; background-color: #292f33">creér son profil</a>
    </li>
  </ul>
  <ul v-else class="list-unstyled mb-0 ml-auto d-none d-lg-flex text-uppercase profile-menu float-right">
    <li v-if="isLoggedIn()">
      <div class="dropdown login-dropdown">
        <button class="btn btn-block rounded-0 border-0 pt-3" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <img class="login-img mr-2" fluid :src="require('@/assets/images/ui_faces/1.jpg')" />
          MARION <span class="l-name"> .K</span>
          <img class="menu-icon" fluid :src="require('@/assets/images/menu.png')" />
        </button>
        <div class="dropdown-menu text-uppercase py-3" style="" aria-labelledby="dropdownMenu2">
          <div class="account-dropdown-item">
            <button class="dropdown-item" type="button">
              Mes ENVIES
              <span class="font-weight-bold text-danger ml-1">(2)</span>
            </button>
          </div>
          <div class="account-dropdown-item">
            <button class="dropdown-item" type="button">
              Mes séjours
              <div class="position-relative ml-auto">
                <img class="picto-icon" fluid :src="require('@/assets/images/svg/PICTO_CHAT.svg')" />
                <div class="notify-number">1</div>
              </div>
            </button>
          </div>
          <div class="account-dropdown-item">
            <button class="dropdown-item trip-page-link" type="button">Ma page Tripper</button>
          </div>
          <div class="account-dropdown-item">
            <button class="dropdown-item account-page-link" type="button">Mon compte</button>
          </div>
          <div class="account-dropdown-item">
            <button @click="logOut" class="dropdown-item logout-page-link" type="button">se déconnecter</button>
          </div>
        </div>
      </div>
    </li>
    <li v-if="!isLoggedIn()" type="button">
      <a @click="openModal('login')" class="text-reset px-4 py-4 d-inline-block">se connecter</a>
    </li>
    <li v-if="!isLoggedIn()" type="button">
      <a @click="openModal('signup')" class="px-4 py-4 profile-link font-weight-bold d-inline-block">creér son profil</a>
    </li>
  </ul>
  <!-- modal -->
  <teleport to="#modal">
    <transition name="fade">
      <ConnectionModal @login-success="loginSuccess" v-if="showModal" :whichForm="form" />
    </transition>
  </teleport>
</template>

<script>
import ConnectionModal from '@/components/connection/ConnectionModal.vue'
import { isLoggedIn } from '@/utils/auth'
import { logoutUser } from '@/utils/auth'

export default {
  name: 'ConnectionButtons',
  components: {
    ConnectionModal
  },
  data() {
    return {
      agencyIsActive: false,
      showModal: false,
      form: ''
    }
  },
  watch: {
    showModal(val) {
      if (val === true) {
        setTimeout(() => {
          this.handleModalClose()
        }, 100)
      }
    }
  },
  methods: {
    logOut() {
      this.logoutUser()
      this.$forceUpdate()
    },
    loginSuccess() {
      this.$forceUpdate()
      this.showModal = false
    },
    isLoggedIn() {
      return isLoggedIn()
    },
    logoutUser() {
      return logoutUser()
    },
    openModal(form) {
      this.showModal = true
      this.form = form
    },
    handleModalClose() {
      const that = this
      if (document.querySelector('.connection-modal')) {
        document.addEventListener('click', function handleClick(e) {
          if (!e.target.closest('.connection-modal')) {
            that.showModal = false
            document.removeEventListener('click', handleClick)
          }
        })
      }
    }
  }
}
</script>

<style scoped>
.login-dropdown .dropdown-menu {
  padding-right: 3rem !important;
}
.account-dropdown-item:not(:last-of-type) {
  border-bottom: 1px dashed #7c7c7c;
}
.account-dropdown-item:hover {
  background-color: #292f33;
  color: #fff !important;
}
.account-dropdown-item:active {
  background-color: #d82558;
  color: #fff !important;
}
.dropdown-item:hover {
  color: #fff;
}
</style>
