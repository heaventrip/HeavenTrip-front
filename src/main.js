// NOTE old imports were written like this
// import '../assets/css/bootstrap.min.css'
// import '../assets/dist/datepicker.min.css';
// import '../assets/dist/css/default/zebra_datepicker.min.css';
// import '../assets/js/bootstrap.min.js'
// import '../assets/dist/zebra_datepicker.min.js';
// import '../assets/dist/zebra_datepicker.src.js';
// import '../assets/js/product.js';
import './assets/css/sol.css'
import './assets/css/datepicker.min.css'
import './assets/css/zebra_datepicker.min.css'
import './assets/css/style.css'
import './assets/css/multiselect.css'
import 'swiper/swiper-bundle.css'
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'
// import '@dafcoe/vue-collapsible-panel/dist/vue-collapsible-panel.css'
import './assets/css/tooltip.css'

// import "./assets/js/sol.js"; // NOTE used for MULTIPLE SELECTIONS
// import "./assets/js/jquery.creditCardValidator.js";
// import "./assets/js/search.js"; // NOTE used in SEARCH COMPONENTS
// import "./assets/js/checkout.js"; // NOTE used no where for now

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import InlineSvg from 'vue-inline-svg'
import PerfectScrollbar from 'vue3-perfect-scrollbar'
import axios from 'axios'
import tooltip from './directives/tooltip.js'
import VueCollapsiblePanel from '@dafcoe/vue-collapsible-panel'
import { VueWindowSizePlugin } from 'vue-window-size/option-api'
import VueGtag from 'vue-gtag-next'
import VueCountryRegionSelect from 'vue3-country-region-select'
import VueElementLoading from 'vue-element-loading'

const app = createApp(App)
app.component('InlineSvg', InlineSvg)
app.component('PerfectScrollbar', PerfectScrollbar)
app.component('VueElementLoading', VueElementLoading)
app.directive('tooltip', tooltip)
app.use(router)
app.use(VueWindowSizePlugin)
app.use(VueCollapsiblePanel)
app.use(VueCountryRegionSelect)
app.use(
  VueGtag,
  {
    property: { id: 'UA-149270675-1' }
  },
  router
)
app.mount('#app')

// app.config.globalProperties.$axios = axios.create({ baseURL: 'http://localhost:3000/api/v1' })
app.config.globalProperties.$axios = axios.create({ baseURL: 'https://heaventrip-dev.herokuapp.com/api/v1' })
app.config.globalProperties.$contentful = require('contentful')
app.config.globalProperties.$contentfulManagement = require('contentful-management')
