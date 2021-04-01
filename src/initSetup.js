import Vue from 'vue'
import router from './router'
import store from './store'

import VueMeta from 'vue-meta'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueMeta)

export default {
  store,
  router
}
