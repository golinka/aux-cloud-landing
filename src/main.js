import Vue from 'vue'
import VueFullPage from 'vue-fullpage.js'
import 'fullpage.js/vendors/scrolloverflow'
import 'bootstrap/scss/bootstrap.scss'
import './assets/scss/app.scss'

import App from './App.vue'

Vue.use(VueFullPage)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
