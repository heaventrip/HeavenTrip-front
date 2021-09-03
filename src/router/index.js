import { createRouter, createWebHistory } from 'vue-router'
import { START_LOCATION } from 'vue-router'
import Home from '@/views/Home.vue'
import Profile from '@/views/Profile.vue'
import Product from '@/views/Product.vue'
import Search from '@/views/Search.vue'
import Checkout from '@/views/Checkout.vue'
import NotFound from '@/views/NotFound.vue'
import Legal from '@/views/Legal.vue'
import Account from '@/components/connection/Account.vue'
import { isLoggedIn } from '@/utils/auth'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      allowAnonymous: true
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {
      allowAnonymous: true
    }
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: Product,
    props: true,
    meta: {
      allowAnonymous: false
    }
  },
  {
    path: '/checkout/:productId',
    name: 'Checkout',
    props: true,
    component: Checkout,
    meta: {
      allowAnonymous: false
    }
  },
  {
    path: '/search',
    name: 'Search',
    component: Search,
    meta: {
      allowAnonymous: true
    }
  },
  {
    path: '/login/:activeTab',
    name: 'Account',
    component: Account,
    meta: {
      allowAnonymous: true
    }
  },
  {
    path: '/legal',
    name: 'Legal',
    component: Legal,
    meta: {
      allowAnonymous: true
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
    meta: {
      allowAnonymous: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      if (to.name === 'Search') return { behavior: 'smooth', top: window.innerHeight }
      if (to.name === 'Home') return { behavior: 'smooth', top: 0 }
    }
  }
})

router.beforeEach((to, from, next) => {
  if (!to.meta.allowAnonymous && !isLoggedIn()) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
})

export default router
