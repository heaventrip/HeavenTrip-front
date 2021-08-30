<template>
  <div>
    <ul class="list-unstyled mb-0 ml-auto d-none d-lg-flex text-uppercase profile-menu float-right mr-3">
      <li v-if="isLoggedIn()">
        <div @click.prevent="test" style="position: relative; z-index: 3; cursor: pointer; width: 230px; height: 60px; padding: 0 1.8rem" class="btttn d-flex align-items-center">
          <img
            class="avatar-block"
            v-show="currUser?.avatar_key"
            height="40"
            style="border-radius: 50%"
            :style="(toggleDropdown ? 'border: 1px solid #292f33' : 'border: 1px solid white', isLightTheme ? 'border: 1px solid white' : 'border: 1px solid #292f33')"
            fluid
            :src="`https://res.cloudinary.com/heaventrip/image/upload/v1624837376/${currUser?.avatar_key}.jpg`"
          />
          <div class="name-block d-flex ml-3" :class="toggleDropdown ? 'flex-column' : 'flex-row'" :style="toggleDropdown && !isLightTheme ? 'color: #292f33' : 'color: white'">
            <div>{{ currUser?.first_name }}</div>
            <div v-if="toggleDropdown" style="font-weight: 700">{{ currUser?.last_name }}</div>
            <div v-else style="font-weight: 700">.{{ currUser?.last_name?.[0] }}</div>
          </div>
          <InlineSvg
            class="connection-icon ml-auto"
            :src="require('@/assets/svg/connection-dropdown.svg')"
            :fill="toggleDropdown && !isLightTheme ? '#292f33' : 'white'"
            :transform="toggleDropdown ? 'rotate(-90)' : ''"
          />
        </div>
        <transition @before-enter="showcontent = true" :name="toggleDropdown ? 'connection-slide-down' : 'connection-slide-up'">
          <div
            :key="toggleDropdown"
            :class="{ 'bg-white': toggleDropdown, 'd-flex': toggleDropdown, 'd-none': !toggleDropdown, 'bg-dark': isLightTheme }"
            class="flex-column"
            style="position: absolute; z-index: 2; padding-top: 60px; width: 250px; top: 0px; padding-bottom: 3px"
            :style="[
              toggleDropdown ? 'color: #292f33' : '',
              isLightTheme ? 'color: white; border-left: 3px solid #292f33; border-right: 5px solid #292f33;' : 'border-left: 3px solid white; border-right: 5px solid white;'
            ]"
          >
            <div @click="$router.push({ name: 'Profile' })" :class="[isLightTheme ? 'menu-item-light' : 'menu-item']" style="font-family: Muli; font-size: 0.7rem; padding: 1rem 1.8rem">
              <transition name="fade-delayed">
                <div v-show="showcontent">Mes infos</div>
              </transition>
            </div>
            <div style="width: 70%; border-bottom: 1px dashed #ebebeb; margin-left: 1.8rem"></div>
            <div :class="[isLightTheme === true ? 'menu-item-light' : 'menu-item']" style="font-family: Muli; font-size: 0.7rem; padding: 1rem 1.8rem">
              <transition name="fade-delayed">
                <div v-show="showcontent">Mes envies</div>
              </transition>
              <transition name="fade-fast">
                <div class="wishlists" v-show="showWishlist" :key="showWishlist">
                  <div class="wishlist-course py-2 px-4" :data-course="wishlist.id" v-for="wishlist in wishlists" :key="wishlist">
                    <span type="button" @click.stop="unwishlistCourse(wishlist.id)" class="mr-2">X</span>
                    {{ wishlist.name }}
                  </div>
                </div>
              </transition>
            </div>
            <div style="width: 70%; border-bottom: 1px dashed #ebebeb; margin-left: 1.8rem"></div>
            <div
              @click="logOut"
              :class="[isLightTheme ? 'menu-item-light menu-item-disconnect-light' : 'menu-item menu-item-disconnect']"
              style="font-family: Muli; font-size: 0.7rem; padding: 1rem 1.8rem"
            >
              <transition name="fade-delayed">
                <div v-show="showcontent">
                  <InlineSvg class="disconnect-icon" :src="require('@/assets/svg/disconnect.svg')" height="20" :fill="isLightTheme ? 'white' : '#292f33'" />
                  <span class="ml-2 align-middle">Se déconnecter</span>
                </div>
              </transition>
            </div>
          </div>
        </transition>
      </li>
      <li v-if="!isLoggedIn()" type="button">
        <a @click.prevent="$router.push('/login')" class="px-4 py-4 d-inline-block" :style="$parent.activeTab === 'agency' || $parent.activeTab === 'news' ? 'color: #292f33' : 'color: white'"
          >se connecter</a
        >
      </li>
      <li v-if="!isLoggedIn()" type="button">
        <a @click.prevent="$router.push('/login')" class="px-4 py-4 profile-link font-weight-bold d-inline-block" :style="isLightTheme ? 'color: #fff; background-color: #292f33' : ''"
          >creér son profil</a
        >
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
    isLightTheme() {
      return this.$parent.$parent.navSticky || this.$parent.activeTab === 'agency' || this.$parent.activeTab === 'news'
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
    test() {
      this.toggleDropdown = !this.toggleDropdown
      this.showcontent = false
    },
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
.connection-icon,
.name-block,
.avatar-block {
  transition: all 0.3s ease;
}
.menu-item,
.menu-item-light {
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
.menu-item-disconnect-light:hover .disconnect-icon {
  fill: #292f33;
}
.menu-item-light:hover {
  background-color: white;
  color: #292f33;
}
</style>
