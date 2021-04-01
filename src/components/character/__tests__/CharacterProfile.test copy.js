import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import initSetup from '@/initSetup'
import CharacterProfile from '@/components/character/CharacterProfile.vue'
import { FacebookLoader } from 'vue-content-loader'

jest.mock('idb')

const $route = {
  path: '/characters/40'
}

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()

describe('CharacterProfile.vue', () => {
  it('renders CharacterProfile', () => {
    const wrapper = shallowMount(CharacterProfile, {
      ...initSetup,
      localVue,
      router,
      mocks: {
        $route
      }
    })
    expect(wrapper.findComponent(FacebookLoader).exists()).toBe(true)
  })
})
