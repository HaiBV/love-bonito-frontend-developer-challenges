import { shallowMount } from '@vue/test-utils'
import initSetup from '@/initSetup'
import SingleLocation from '@/components/location/SingleLocation.vue'

describe('SingleLocation.vue', () => {
  it('renders SingleLocation', () => {
    const wrapper = shallowMount(SingleLocation, {
      ...initSetup,
      propsData: {
        location: {
          id: 1,
          name: 'Earth',
          type: 'Planet',
          dimension: 'Dimension C-137',
          residents: [
            'https://rickandmortyapi.com/api/character/1',
            'https://rickandmortyapi.com/api/character/2'
          ],
          url: 'https://rickandmortyapi.com/api/location/1',
          created: '2017-11-10T12:42:04.162Z'
        }
      }
    })
    expect(wrapper.find('.location-info').exists()).toBe(true)
    expect(wrapper.find('.location-info h4').text()).toMatch('Earth')
  })
})
