import { createRouter, createWebHistory } from 'vue-router'
// import Vue from 'vue'
// import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/views/Home.vue'
import ProductHome from '@/components/product/ProductHome.vue'
import CheckOutHome from '@/components/checkout/CheckOutHome.vue'
import SearchHome from '@/components/search/SearchHome.vue'
import LoginHeader from '@/components/connection/LoginHeader.vue'
import ConnectionModal from '@/components/connection/ConnectionModal.vue'
import Terms from '@/components/legal/Terms.vue'
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
    path: '/checkout',
    name: 'CheckOutHome',
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
    name: 'LoginHeader',
    component: LoginHeader
  }
  // {
  //   path: '/terms',
  //   name: 'Terms',
  //   component: Terms
  // },
  // {
  //   path: '/legal',
  //   name: 'Legal',
  //   component: Legal
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
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
