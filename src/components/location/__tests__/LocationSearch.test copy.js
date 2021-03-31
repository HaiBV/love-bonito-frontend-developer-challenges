import { shallowMount } from '@vue/test-utils'
import initSetup from '@/initSetup'
import LocationSearch from '@/components/location/LocationSearch.vue'

describe('LocationSearch.vue', () => {
  it('renders LocationSearch', () => {
    const wrapper = shallowMount(LocationSearch, {
      ...initSetup
    })
    expect(wrapper.find('.search-location').exists()).toBe(true)
    expect(wrapper.find('input#search-location').exists()).toBe(true)
  })
})
