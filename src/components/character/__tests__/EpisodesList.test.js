import { shallowMount } from '@vue/test-utils'
import initSetup from '@/initSetup'
import EpisodesList from '@/components/character/EpisodesList.vue'
jest.mock('idb')
describe('EpisodesList.vue', () => {
  it('renders EpisodesList', () => {
    const wrapper = shallowMount(EpisodesList, {
      ...initSetup,
      propsData: {
        loading: false,
        episodes: [
          {
            id: 22,
            name: 'The Rickshank Rickdemption',
            air_date: 'April 1, 2017',
            episode: 'S03E01',
            characters: [
              'https://rickandmortyapi.com/api/character/1'
            ],
            url: 'https://rickandmortyapi.com/api/episode/22',
            created: '2017-11-10T12:56:35.983Z'
          },
          {
            id: 28,
            name: 'The Ricklantis Mixup',
            air_date: 'September 10, 2017',
            episode: 'S03E07',
            characters: [
              'https://rickandmortyapi.com/api/character/1',
              'https://rickandmortyapi.com/api/character/2',
              'https://rickandmortyapi.com/api/character/4'
            ],
            url: 'https://rickandmortyapi.com/api/episode/28',
            created: '2017-11-10T12:56:36.618Z'
          }
        ]
      }
    })

    // expect(wrapper.find('table').exists()).toBe(true)
    expect(wrapper.findComponent({ name: 'BTable' }).exists()).toBe(true)
    // expect(wrapper.find('tr.row')).toHaveLength(2)
  })
})
