import Vue from 'vue'
import initSetup from '@/initSetup'
import App from './App.vue'
import './registerServiceWorker'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@/assets/scss/style.scss'

Vue.config.productionTip = false

new Vue({
  ...initSetup,
  render: h => h(App)
}).$mount('#app')
