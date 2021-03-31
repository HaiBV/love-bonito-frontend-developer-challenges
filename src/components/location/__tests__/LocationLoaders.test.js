import { shallowMount } from '@vue/test-utils'
import initSetup from '@/initSetup'
import LocationLoaders from '@/components/location/LocationLoaders.vue'
import { FacebookLoader } from 'vue-content-loader'

describe('LocationLoaders.vue', () => {
  it('renders LocationLoaders', () => {
    const wrapper = shallowMount(LocationLoaders, {
      ...initSetup
    })
    expect(wrapper.text()).toMatch('')
    expect(wrapper.get('.placeholder'))
    const facebookLoaders = wrapper.findAllComponents(FacebookLoader)
    expect(facebookLoaders).toHaveLength(3)
  })
})
