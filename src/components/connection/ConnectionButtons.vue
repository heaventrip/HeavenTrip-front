<template>
  <div>
    <ul class="bttn-block list-unstyled mb-0 ml-auto d-none d-lg-flex text-uppercase profile-menu float-right mr-3">
      <li v-if="isLoggedIn()">
        <div @click.prevent="toggleDropdownMenu" style="position: relative; z-index: 3; cursor: pointer; width: 230px; height: 60px; padding: 0 1.8rem" class="btttn d-flex align-items-center">
          <img
            class="avatar-block"
            v-show="currUser?.avatarKey"
            height="40"
            style="border-radius: 50%"
            :style="`border: 1px solid ${avatarBorderStyle}`"
            fluid
            :src="`https://res.cloudinary.com/heaventrip/image/upload/avatars/${currUser?.avatarKey}.jpg`"
          />
          <div class="name-block d-flex ml-3" :class="toggleDropdown ? 'flex-column' : 'flex-row'" :style="`color: ${nameStyle}`">
            <div>{{ currUser?.firstName }}</div>
            <div v-if="toggleDropdown" style="font-weight: 700">{{ currUser?.lastName }}</div>
            <div v-else style="font-weight: 700">.{{ currUser?.lastName?.[0] }}</div>
          </div>
          <InlineSvg class="connection-icon ml-auto" :src="require('@/assets/svg/connection-dropdown.svg')" :fill="svgFillStyle" :transform="toggleDropdown ? 'rotate(-90)' : ''" />
        </div>
        <transition @before-enter="showcontent = true" :name="toggleDropdown ? 'connection-slide-down' : 'connection-slide-up'">
          <div :key="toggleDropdown" class="dropdown-block" :class="[toggleDropdown ? 'd-flex' : 'd-none', dropdownClass]">
            <div @click="$router.push({ name: 'Profile' })" :class="[isDarkTheme ? 'menu-item-dark' : 'menu-item']" style="font-family: Muli; font-size: 0.7rem; padding: 1rem 1.8rem">
              <transition name="fade-delayed">
                <div v-show="showcontent">Mes infos</div>
              </transition>
            </div>
            <div style="width: 70%; border-bottom: 1px dashed #f1f1f1; margin-left: 1.8rem"></div>
            <div @click="toggleWishlist" :class="[isDarkTheme === true ? 'menu-item-dark' : 'menu-item']" style="font-family: Muli; font-size: 0.7rem; padding: 1rem 1.8rem">
              <transition name="fade-delayed">
                <div v-show="showcontent">Mes envies</div>
              </transition>
              <transition name="fade-fast">
                <div class="wishlists mt-3" v-if="showWishlist && wishlists?.length">
                  <div class="d-flex align-items-center" v-for="wishlist in wishlists" :key="wishlist">
                    <InlineSvg class="mr-2" :src="require('@/assets/svg/heart-filled.svg')" fill="#d82558" height="12" />
                    <a :href="`/product/${wishlist.id}`" class="py-2 mr-auto" :class="[isDarkTheme === true ? 'wishlist-course-dark' : 'wishlist-course']" :data-course="wishlist.id">{{
                      wishlist.name
                    }}</a>
                    <div @click="unwishlistCourse(wishlist.id)">
                      <i class="wishlist-course__delete-btn fas fa-times mr-2"></i>
                    </div>
                  </div>
                </div>
              </transition>
            </div>
            <div style="width: 70%; border-bottom: 1px dashed #f1f1f1; margin-left: 1.8rem"></div>
            <div
              @click="logOut"
              :class="[isDarkTheme ? 'menu-item-dark menu-item-disconnect-dark' : 'menu-item menu-item-disconnect']"
              style="font-family: Muli; font-size: 0.7rem; padding: 1rem 1.8rem"
            >
              <transition name="fade-delayed">
                <div v-show="showcontent">
                  <InlineSvg class="disconnect-icon" :src="require('@/assets/svg/disconnect.svg')" height="20" :fill="isDarkTheme ? 'white' : '#292f33'" />
                  <span class="ml-2 align-middle">Se déconnecter</span>
                </div>
              </transition>
            </div>
          </div>
        </transition>
      </li>
      <li v-if="!isLoggedIn()" type="button">
        <a @click.prevent="$router.push({ name: 'Account', params: { activeTab: 'login' } })" class="px-4 py-4 d-inline-block" :style="isDarkTheme && !navSticky ? 'color: #292f33' : 'color: white'"
          >se connecter</a
        >
      </li>
      <li v-if="!isLoggedIn()" type="button">
        <a
          @click.prevent="$router.push({ name: 'Account', params: { activeTab: 'signup' } })"
          class="px-4 py-4 profile-link font-weight-bold d-inline-block"
          :style="isDarkTheme ? 'color: #fff; background-color: #292f33' : ''"
          >creér son profil</a
        >
      </li>
    </ul>
    <teleport to="#modal">
      <transition name="fade">
        <div v-if="$route.name === 'Account'">
          <Account @closed-page="showAccountPage = false" @login-success="loginSuccess" :active-tab="activeTab" />
        </div>
      </transition>
    </teleport>
  </div>
</template>

<script>
import Account from '@/components/connection/Account.vue'
import { isLoggedIn } from '@/utils/auth'
import { logoutUser } from '@/utils/auth'

export default {
  name: 'ConnectionButtons',
  components: {
    Account
  },
  props: ['nav-sticky', 'active-tab'],
  data() {
    return {
      showcontent: false,
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
      currUser: null
    }
  },
  computed: {
    isDarkTheme() {
      return this.$props.navSticky || this.$props.activeTab === 'agency' || this.$props.activeTab === 'news'
    },
    dropdownClass() {
      if (this.isDarkTheme) return 'dropdown-block--dark'
      else return 'dropdown-block--light'
    },
    avatarBorderStyle() {
      if (this.isDarkTheme && this.$props.navSticky) return 'white'
      else if (this.isDarkTheme) return this.toggleDropdown ? 'white' : '#292f33'
      else return this.toggleDropdown ? '#292f33' : 'white'
    },
    nameStyle() {
      if (this.isDarkTheme && this.$props.navSticky) return 'white'
      else if (this.isDarkTheme) return this.toggleDropdown ? 'white' : '#292f33'
      else return this.toggleDropdown ? '#292f33' : 'white'
    },
    svgFillStyle() {
      if (this.isDarkTheme && this.$props.navSticky) return 'white'
      else if (this.isDarkTheme) return this.toggleDropdown ? 'white' : '#292f33'
      else return this.toggleDropdown ? '#292f33' : 'white'
    }
  },
  watch: {
    currUser(val) {
      this.$root.currUser = val
    },
    toggleDropdown(val) {
      if (val) document.addEventListener('click', this.handleClickToClose)
      else {
        document.removeEventListener('click', this.handleClickToClose)
        this.showWishlist = false
      }
    },
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
  // updated() {
  //   this.currUser = this.$root.currUser
  // },
  methods: {
    toggleWishlist() {
      if (!this.wishlists.length) return

      this.showWishlist = !this.showWishlist
    },
    handleClickToClose(e) {
      if (e.target.closest('.bttn-block')) return
      this.toggleDropdown = false
    },
    toggleDropdownMenu() {
      this.fetchWishlists()
      this.toggleDropdown = !this.toggleDropdown
      this.showcontent = false
    },
    unwishlistCourse(courseId) {
      this.$axios.delete('/wishlists', { params: { courseId: courseId } }).then(() => {
        this.wishlists = this.wishlists.filter((wl) => wl.id !== courseId)
        this.$emitter.emit('unwishlisted', courseId)
        this.$notify({ group: 'app', type: 'success', text: "Tu ne t'intéresses plus à ce stage" })
        this.fetchWishlists()
      })
    },
    logOut() {
      this.logoutUser()
      this.$forceUpdate()
    },
    loginSuccess() {
      this.showAccountPage = false
      this.$router.push(this.$route.query.redirect || '/')
      this.$notify({ type: 'success', text: 'Connexion réussie !' })
    },
    isLoggedIn() {
      return isLoggedIn()
    },
    logoutUser() {
      return logoutUser()
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
    fetchWishlists() {
      if (!isLoggedIn()) return

      const AUTH_TOKEN_KEY = 'authToken'
      const token = localStorage.getItem(AUTH_TOKEN_KEY)
      this.$axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

      this.$axios.get('/users/current/wishlist-courses').then((res) => {
        this.wishlists = res.data.courses
      })
    }
  },
  created() {
    this.fetchWishlists()

    if (!isLoggedIn()) return

    const AUTH_TOKEN_KEY = 'authToken'
    const token = localStorage.getItem(AUTH_TOKEN_KEY)
    this.$axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

    this.$axios
      .get('/users/current')
      .then((res) => {
        localStorage.setItem('user.avatarId', res.data.user.avatarKey)
        this.currUser = res.data.user
        this.$root.initialLoading = false
      })
      .catch((err) => {
        this.$notify({ type: 'error', text: err.message })
        this.$root.initialLoading = false
      })
  }
}
</script>

<style scoped>
a.wishlist-course,
a.wishlist-course-dark {
  color: inherit;
}
a.wishlist-course:hover,
a.wishlist-course-dark:hover,
.wishlist-course__delete:hover {
  color: #7c7c7c;
}
.dropdown-block {
  position: absolute;
  z-index: 2;
  padding-top: 60px;
  width: 250px;
  top: 0px;
  padding-bottom: 3px;
  flex-direction: column;
}
.dropdown-block--dark {
  background-color: #292f33;
  color: white;
  border-left: 3px solid #292f33;
  border-right: 5px solid #292f33;
}
.dropdown-block--light {
  background-color: white;
  color: #292f33;
  border-left: 3px solid white;
  border-right: 5px solid white;
}
.connection-icon,
.name-block,
.avatar-block {
  transition: all 0.3s ease;
}
.menu-item,
.menu-item-dark {
  transition: background-color 0.3s ease;
  cursor: pointer;
}
.btttn:hover .connection-icon {
  transform: rotate(-90deg);
}
.menu-item-disconnect:hover .disconnect-icon {
  fill: white;
}
.btttn:hover .name-block,
.btttn:hover .avatar-block {
  filter: opacity(0.5);
}
.menu-item:hover {
  background-color: #292f33;
  color: white;
}
.menu-item-disconnect-dark:hover .disconnect-icon {
  fill: #292f33;
}
.menu-item-dark:hover {
  background-color: white;
  color: #292f33;
}
</style>
