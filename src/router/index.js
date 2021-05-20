import { createRouter, createWebHistory } from 'vue-router'
// import Vue from 'vue'
// import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/views/Home.vue'
import ProductHome from '@/components/product/ProductHome.vue'
import CheckOutHome from '@/components/checkout/CheckOutHome.vue'
import SearchHome from '@/components/search/SearchHome.vue'
import LoginHeader from '@/components/connection/LoginHeader.vue'
import Terms from '@/components/legal/Terms.vue'
import Legal from '@/components/legal/Legal.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/product',
    name: 'ProductHome',
    component: ProductHome
  },
  {
    path: '/checkout',
    name: 'CheckOutHome',
    component: CheckOutHome
  },
  {
    path: '/search',
    name: 'SearchHome',
    component: SearchHome
  },
  {
    path: '/login',
    name: 'LoginHeader',
    component: LoginHeader
  },
  {
    path: '/terms',
    name: 'Terms',
    component: Terms
  },
  {
    path: '/legal',
    name: 'Legal',
    component: Legal
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
