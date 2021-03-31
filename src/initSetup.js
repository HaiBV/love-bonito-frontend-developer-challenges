import Vue from 'vue'
import router from './router'
import store from './store'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

export default {
  store,
  router
}
