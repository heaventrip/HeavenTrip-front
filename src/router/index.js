import { createRouter, createWebHistory } from 'vue-router'
// import Vue from 'vue'
// import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import HomePage from '@/components/HomePage'
import ProductHome from '@/components/product/ProductHome'
import CheckOutHome from '@/components/checkout/CheckOutHome'
import SearchHome from '@/components/search/SearchHome'
import LoginPage from '@/components/login/LoginPage'
import Terms from '@/components/terms/Terms'
import Legal from '@/components/legal/Legal'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
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
    name: 'LoginPage',
    component: LoginPage
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
