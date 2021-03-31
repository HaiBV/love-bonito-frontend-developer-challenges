import { shallowMount } from '@vue/test-utils'
import initSetup from '@/initSetup'
import SingleCharacter from '@/components/character/SingleCharacter.vue'

describe('EpisodesList.vue', () => {
  it('renders EpisodesList', () => {
    const wrapper = shallowMount(SingleCharacter, {
      ...initSetup,
      propsData: {
        character: {
          id: 1,
          name: 'Rick Sanchez',
          status: 'Alive',
          species: 'Human',
          type: '',
          gender: 'Male',
          origin: {
            name: 'Earth',
            url: 'https://rickandmortyapi.com/api/location/1'
          },
          location: {
            name: 'Earth',
            url: 'https://rickandmortyapi.com/api/location/20'
          },
          image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
          episode: [
            'https://rickandmortyapi.com/api/episode/1',
            'https://rickandmortyapi.com/api/episode/2'
            // ...
          ],
          url: 'https://rickandmortyapi.com/api/character/1',
          created: '2017-11-04T18:48:46.250Z'
        }
      }
    })

    expect(wrapper.find('p').exists()).toBe(false)
  })
})
