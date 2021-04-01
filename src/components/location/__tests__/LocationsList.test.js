import { shallowMount } from '@vue/test-utils'
import initSetup from '@/initSetup'
import LocationsList from '@/components/location/LocationsList.vue'
import SingleLocation from '@/components/location/SingleLocation.vue'
jest.mock('idb')
describe('LocationsList.vue', () => {
  it('renders LocationsList', () => {
    const wrapper = shallowMount(LocationsList, {
      ...initSetup,
      propsData: {
        locations: [
          {
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
        ]
      }
    })
    expect(wrapper.find('.list-locations').exists()).toBe(true)
    expect(wrapper.findComponent(SingleLocation).exists()).toBe(true)
  })
})
