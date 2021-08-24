<template>
  <div>
    <ul v-if="$parent.agencyIsActive || $parent.newsIsActive || $parent.name === 'TheNavSticky'" class="list-unstyled mb-0 ml-auto d-none d-lg-flex text-uppercase profile-menu float-right">
      <li v-if="isLoggedIn()">
        <div class="dropdown login-dropdown" :class="{ 'bg-dark': toggleDropdown }">
          <button class="btn btn-block rounded-0 border-0" @click.prevent="toggleDropdown = !toggleDropdown">
            <img v-show="currUser?.avatar_key" class="login-img mr-2" fluid :src="`https://res.cloudinary.com/heaventrip/image/upload/v1624837376/${currUser?.avatar_key}.jpg`" />
            <span :class="{ 'text-dark': toggleDropdown }"
              >{{ currUser?.first_name }}
              <span class="l-name" style="margin-right: 40px"> .{{ currUser?.last_name?.[0] }} </span>
            </span>
            <InlineSvg :src="require('@/assets/svg/connection-dropdown.svg')" :fill="toggleDropdown ? '#292f33' : 'white'" />
          </button>
          <transition name="fade">
            <div class="dropdown-menu text-uppercase p-0" :class="{ 'd-block': toggleDropdown }">
              <div class="account-dropdown-item p-0">
                <router-link :to="{ name: 'Profile' }" class="dropdown-item p-3">Mes infos</router-link>
              </div>
              <div class="account-dropdown-item p-0">
                <button @click.stop="showWishlist = !showWishlist" class="dropdown-item p-3" type="button">
                  Mes envies
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
              <div class="account-dropdown-item p-0">
                <router-link :to="{ name: 'Account' }" class="dropdown-item account-page-link p-3">Mon compte</router-link>
                <!-- <button @click="setActiveTab('infos')" class="dropdown-item account-page-link" type="button">Mon compte</button> -->
                <!-- <Profile v-if="showProfileModal" /> -->
              </div>
              <div class="account-dropdown-item p-0">
                <button @click="logOut" class="dropdown-item logout-page-link p-3" type="button">se déconnecter</button>
              </div>
            </div>
          </transition>
        </div>
      </li>
      <li v-if="!isLoggedIn()" type="button">
        <a @click.prevent="setActiveTab('login')" class="text-reset px-4 py-4 d-inline-block" style="color: #292f33 !important">se connecter</a>
      </li>
      <li v-if="!isLoggedIn()" type="button">
        <a @click.prevent="setActiveTab('signup')" href="#" class="px-4 py-4 profile-link font-weight-bold d-inline-block" style="color: #fff; background-color: #292f33">creér son profil</a>
      </li>
    </ul>
    <ul v-else class="list-unstyled mb-0 ml-auto d-none d-lg-flex text-uppercase profile-menu float-right mr-3">
      <li v-if="isLoggedIn()">
        <div @click.prevent="toggleDropdown = !toggleDropdown" style="cursor: pointer; width: 230px; height: 60px; padding: 0 1.8rem" class="d-flex align-items-center">
          <img v-show="currUser?.avatar_key" height="40" style="border-radius: 50%" :style="toggleDropdown ? 'border: 1px solid #292f33' : 'border: 1px solid white'" fluid :src="`https://res.cloudinary.com/heaventrip/image/upload/v1624837376/${currUser?.avatar_key}.jpg`" />
          <div class="d-flex ml-3" :class="toggleDropdown ? 'flex-column' : 'flex-row'" :style="toggleDropdown ? 'color: #292f33' : ''">
            <div>{{ currUser?.first_name }}</div>
            <div v-if="toggleDropdown" style="font-weight: 700">{{ currUser?.last_name }}</div>
            <div v-else style="font-weight: 700">.{{ currUser?.last_name?.[0] }}</div>
          </div>
          <InlineSvg class="ml-auto" :src="require('@/assets/svg/connection-dropdown.svg')" :fill="toggleDropdown ? '#292f33' : 'white'" :transform="toggleDropdown ? 'rotate(-90)' : ''" />
        </div>
        <transition @before-enter="left = false" @after-leave="left = true" :name="toggleDropdown ? 'connection-slide-down' : 'connection-slide-up'">
          <div :key="toggleDropdown" :class="{ 'bg-white': toggleDropdown, 'd-flex': toggleDropdown, 'd-none': !toggleDropdown }" class="flex-column pb-2" style="position: absolute; padding-top: 60px; width: 250px; top: 10px" :style="toggleDropdown ? 'color: #292f33' : ''">
            <transition name="fade" :duration="1000">
              <div v-show="left">
                <div style="font-family: Muli; font-size: 0.7rem; padding: 1rem 1.8rem">Mes infos</div>
                <div style="width: 70%; border-bottom: 1px solid #ebebeb; margin-left: 1.8rem"></div>
              </div>
            </transition>
            <transition name="fade" :duration="2000">
              <div v-show="left">
                <div style="font-family: Muli; font-size: 0.7rem; padding: 1rem 1.8rem">Mes envies</div>
                <div style="width: 70%; border-bottom: 1px solid #ebebeb; margin-left: 1.8rem"></div>
              </div>
            </transition>
            <transition name="fade" :duration="3000">
              <div v-show="left" style="font-family: Muli; font-size: 0.7rem; padding: 1rem 1.8rem">
                <InlineSvg :src="require('@/assets/svg/disconnect.svg')" height="20" :fill="toggleDropdown ? '#292f33' : 'white'" />
                <span class="ml-2 align-middle">Se déconnecter</span>
              </div>
            </transition>
          </div>
        </transition>
      </li>
      <li v-if="!isLoggedIn()" type="button">
        <a @click.prevent="$router.push('/login')" class="text-reset px-4 py-4 d-inline-block">se connecter</a>
      </li>
      <li v-if="!isLoggedIn()" type="button">
        <a @click.prevent="$router.push('/login')" class="px-4 py-4 profile-link font-weight-bold d-inline-block">creér son profil</a>
      </li>
    </ul>
    <teleport to="#modal">
      <transition name="fade">
        <div v-if="$route.name === 'Account'">
          <Account @closed-page="showAccountPage = false" @login-success="loginSuccess" :new-active-tab="activeTab" />
        </div>
      </transition>
    </teleport>
    <!-- <teleport to="#modal">
      <Profile v-if="isLoggedIn() && showProfilePage" @closed-page="showProfilePage = false" />
    </teleport> -->
  </div>
</template>

<script>
import Account from '@/components/connection/Account.vue'
import { isLoggedIn } from '@/utils/auth'
import { logoutUser } from '@/utils/auth'
import { getUserInfo } from '@/utils/auth'

export default {
  name: 'ConnectionButtons',
  components: {
    Account
  },
  data() {
    return {
      toggleDropdown: false,
      activeTab: 'login',
      showAccountPage: false,
      showProfilePage: false,
      firstName: '',
      lastName: '',
      agencyIsActive: false,
      showWishlist: false,
      form: '',
      wishlists: null,
      currUser: null,
      left: false
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
    showAccountPage(val) {
      if (val) document.body.style.overflowY = 'hidden'
      else {
        document.body.style.overflowY = ''
        // document.querySelector('#modal').innerHTML = ''
      }
    },
    showProfilePage(val) {
      if (val) document.body.style.overflowY = 'hidden'
      else {
        document.body.style.overflowY = ''
        // document.querySelector('#modal').innerHTML = ''
      }
    },
    // showModal(val) {
    //   if (val === true) {
    //     setTimeout(() => {
    //       this.handleModalClose()
    //     }, 100)
    //   }
    // },
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
    setActiveTab(tab) {
      this.activeTab = tab
      this.showAccountPage = true
    },
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
    async loginSuccess() {
      this.currUser = await this.getUserInfo()
      this.showAccountPage = false
      this.$router.push(this.$route.query.redirect || '/')
    },
    isLoggedIn() {
      return isLoggedIn()
    },
    logoutUser() {
      return logoutUser()
    },
    getUserInfo() {
      return getUserInfo()
    },
    // openModal(form) {
    //   this.showModal = true
    //   this.form = form
    // },
    // handleModalClose() {
    //   const that = this
    //   if (document.querySelector('.connection-modal')) {
    //     document.addEventListener('click', function handleClick(e) {
    //       if (!e.target.closest('.connection-modal')) {
    //         that.showModal = false
    //         document.removeEventListener('click', handleClick)
    //       }
    //     })
    //   }
    // },
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
    this.currUser = this.getUserInfo()
    this.fetchWishlists()
  },
  updated() {
    this.getUserInfo()
  }
}
</script>

<style scoped>
.account-dropdown-item:not(:last-of-type) {
  border-bottom: 1px dashed #7c7c7c57;
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
