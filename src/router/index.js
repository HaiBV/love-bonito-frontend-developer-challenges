import Vue from 'vue'
import VueRouter from 'vue-router'
import Location from '../views/Location.vue'
import Character from '../views/Character.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Location',
    component: Location
  },
  {
    path: '/characters/:id',
    name: 'Character',
    component: Character
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
