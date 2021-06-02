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
import 'vue-multi-select/dist/lib/vue-multi-select.css'

// import "./assets/js/sol.js"; // NOTE used for MULTIPLE SELECTIONS
// import "./assets/js/jquery.creditCardValidator.js";
// import "./assets/js/search.js"; // NOTE used in SEARCH COMPONENTS
// import "./assets/js/checkout.js"; // NOTE used no where for now

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import InlineSvg from 'vue-inline-svg'
import axios from 'axios'

const app = createApp(App)
app.component('InlineSvg', InlineSvg)
app.use(router)
app.mount('#app')

app.config.globalProperties.$axios = axios.create({ baseURL: 'https://heaventrip-dev.herokuapp.com/api/v1' })
