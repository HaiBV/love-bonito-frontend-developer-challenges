import { shallowMount } from '@vue/test-utils'
import initSetup from '@/initSetup'
import Locations from '@/components/location/Locations.vue'
import InfiniteLoading from 'vue-infinite-loading'

describe('Locations.vue', () => {
  it('renders Locations', () => {
    const wrapper = shallowMount(Locations, {
      ...initSetup
    })
    expect(wrapper.text()).toMatch('No more Location :)')

    const infiniteLoading = wrapper.findAllComponents(InfiniteLoading)
    expect(infiniteLoading).toHaveLength(1)
  })
})
