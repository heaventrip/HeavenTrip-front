import { createRouter, createWebHistory } from 'vue-router'
// import Vue from 'vue'
// import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/views/Home.vue'
import ProductHome from '@/components/product/ProductHome.vue'
import CheckOutHome from '@/components/checkout/CheckOutHome.vue'
import SearchHome from '@/components/search/SearchHome.vue'
import Account from '@/components/connection/Account.vue'
import AccountInfos from '@/components/connection/AccountInfos.vue'
// import ConnectionModal from '@/components/connection/ConnectionModal.vue'
import Legal from '@/components/legal/Legal.vue'
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
    path: '/product/:id',
    name: 'ProductHome',
    component: ProductHome,
    props: true,
    meta: {
      allowAnonymous: false
    }
  },
  {
    path: '/checkout/:productId',
    name: 'CheckOutHome',
    props: true,
    component: CheckOutHome,
    meta: {
      allowAnonymous: false
    }
  },
  {
    path: '/search',
    name: 'SearchHome',
    component: SearchHome,
    meta: {
      allowAnonymous: true
    }
  },
  {
    path: '/login',
    name: 'Account',
    component: Account,
    meta: {
      allowAnonymous: true
    }
  },
  {
    path: '/account-infos',
    name: 'AccountInfos',
    component: AccountInfos,
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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      if (to.name === 'SearchHome') return { behavior: 'smooth', top: window.innerHeight }
      if (to.name === 'Home') return { behavior: 'smooth', top: 0 }
    }
  }
})

router.beforeEach((to, from, next) => {
  if (!to.meta.allowAnonymous && !isLoggedIn()) {
    next({
      path: '/',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
})

export default router
