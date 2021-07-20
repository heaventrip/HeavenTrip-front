<template>
  <ul v-if="$parent.agencyIsActive" class="list-unstyled mb-0 ml-auto d-none d-lg-flex text-uppercase profile-menu float-right">
    <li v-if="isLoggedIn()">
      <div class="dropdown login-dropdown">
        <button style="color: #292f33" class="btn btn-block rounded-0 border-0" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <img v-show="avatarId" class="login-img mr-2" fluid :src="`https://res.cloudinary.com/heaventrip/image/upload/v1624837376/${avatarId}.jpg`" />
          {{ firstName }} <span class="l-name"> .{{ lastName[0] }}</span>
          <img class="menu-icon" fluid :src="require('@/assets/images/menu.png')" />
        </button>
        <div class="dropdown-menu text-uppercase" style="" aria-labelledby="dropdownMenu2">
          <div class="account-dropdown-item">
            <button class="dropdown-item" type="button">
              Mes envies
              <span class="font-weight-bold text-danger ml-1">(2)</span>
            </button>
          </div>
          <!-- <div class="account-dropdown-item">
            <button class="dropdown-item" type="button">
              Mes séjours
              <div class="position-relative ml-auto">
                <img class="picto-icon" fluid :src="require('@/assets/images/svg/PICTO_CHAT.svg')" />
                <div class="notify-number">1</div>
              </div>
            </button>
          </div> -->
          <!-- <div class="account-dropdown-item">
            <button class="dropdown-item trip-page-link" type="button">Ma page Tripper</button>
          </div> -->
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
        <button class="btn btn-block rounded-0 border-0" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <img v-show="avatarId" class="login-img mr-2" fluid :src="`https://res.cloudinary.com/heaventrip/image/upload/v1624837376/${avatarId}.jpg`" />
          {{ firstName }} <span class="l-name"> .{{ lastName[0] }}</span>
          <img class="menu-icon" fluid :src="require('@/assets/images/menu.png')" />
        </button>
        <transition name="fade">
          <div class="dropdown-menu text-uppercase py-1" style="" aria-labelledby="dropdownMenu2">
            <div class="account-dropdown-item">
              <button @click.stop="showWishlist = !showWishlist" class="dropdown-item" type="button">
                Mes ENVIES
                <span class="font-weight-bold text-danger ml-1">(2)</span>
              </button>
            </div>
            <transition name="fade-fast">
              <div class="wishlists" v-show="showWishlist" :key="showWishlist">
                <div class="wishlist-course py-2 px-4" :data-course="wishlist.id" v-for="wishlist in wishlists" :key="wishlist">
                  <span type="button" @click.stop="unwishlistCourse(wishlist.id)" class="mr-2">X</span>
                  {{ wishlist.name }}
                </div>
              </div>
            </transition>
            <!-- <div class="account-dropdown-item">
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
          </div> -->
            <div class="account-dropdown-item">
              <button @click="openProfile = true" class="dropdown-item account-page-link" type="button">Mon compte</button>
              <teleport to="#modal">
                <Profile v-if="openProfile" />
              </teleport>
              <!-- <Profile v-if="showProfileModal" /> -->
            </div>
            <div class="account-dropdown-item">
              <button @click="logOut" class="dropdown-item logout-page-link" type="button">se déconnecter</button>
            </div>
          </div>
        </transition>
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
import Profile from '@/components/connection/Profile.vue'
import { isLoggedIn } from '@/utils/auth'
import { logoutUser } from '@/utils/auth'

export default {
  name: 'ConnectionButtons',
  components: {
    ConnectionModal,
    Profile
  },
  data() {
    return {
      openProfile: false,
      firstName: '',
      lastName: '',
      agencyIsActive: false,
      showModal: false,
      showProfileModal: false,
      showWishlist: false,
      form: '',
      wishlists: null
    }
  },
  watch: {
    // showWishlist(val) {
    //   if (val) {
    //     if (document.querySelector('.wishlists')) {
    //       document.querySelector('.wishlists').style.display = ''
    //       return
    //     }

    //     let wishlistEl = document.createElement('div')
    //     wishlistEl.innerHTML = `
    //       <div class="wishlists" :key="showWishlist">
    //         <div class="py-4 px-5">1</div>
    //         <div class="py-4 px-5">1</div>
    //         <div class="py-4 px-5">1</div>
    //         <div class="py-4 px-5">1</div>
    //         <div class="py-4 px-5">1</div>
    //       </div>
    //     `
    //     document.querySelector('.account-dropdown-item').insertAdjacentElement('afterend', wishlistEl)
    //   } else {
    //     if (!document.querySelector('.wishlists')) return

    //     document.querySelector('.wishlists').style.display = 'none'
    //   }
    // },

    showModal(val) {
      if (val === true) {
        setTimeout(() => {
          this.handleModalClose()
        }, 100)
      }
    },
    firstName(newVal) {
      this.firstName = newVal
    },
    lastName(newVal) {
      this.lastName = newVal
    },
    avatarId(newVal) {
      this.avatarId = newVal
    }
  },
  methods: {
    unwishlistCourse(courseId) {
      console.log(courseId)
      this.$axios.delete('/wishlists', { courseId: courseId }).then(() => {
        document.querySelector(`[data-course='${courseId}']`).remove()
        alert('deleted')
        // this.fetchWishlists()
      })
    },
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
    },
    getLocalInfos() {
      this.firstName = localStorage.getItem('user.firstName') || ''
      this.lastName = localStorage.getItem('user.lastName') || ''
      this.avatarId = localStorage.getItem('user.avatarId')
    },
    fetchWishlists() {
      this.$axios.get('/users/1/wishlist-courses').then((res) => {
        this.wishlists = res.data.courses
      })
    }
  },
  created() {
    this.fetchWishlists()
  },
  mounted() {
    this.getLocalInfos()
  },
  updated() {
    this.getLocalInfos()
  }
}
</script>

<style scoped>
.login-dropdown .dropdown-menu {
  padding-right: 1.2rem !important;
}
.account-dropdown-item {
  padding: 0 0 0 12px;
}
.account-dropdown-item:not(:last-of-type):not(:first-of-type) {
  border-bottom: 1px dashed #7c7c7c57;
  border-top: 1px dashed #7c7c7c57;
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
