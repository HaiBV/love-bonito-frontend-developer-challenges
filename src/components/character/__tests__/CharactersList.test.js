import { shallowMount } from '@vue/test-utils'
import initSetup from '@/initSetup'
import CharactersList from '@/components/character/CharactersList.vue'
import SingleCharacter from '@/components/character/SingleCharacter.vue'

describe('CharactersList.vue', () => {
  it('renders CharactersList', () => {
    const wrapper = shallowMount(CharactersList, {
      ...initSetup,
      propsData: {
        characters: [
          {
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
            ],
            url: 'https://rickandmortyapi.com/api/character/1',
            created: '2017-11-04T18:48:46.250Z'
          }
        ]
      }
    })
    expect(wrapper.findComponent(SingleCharacter).exists()).toBe(true)
  })
})

describe('CharactersList.vue', () => {
  it('renders loading CharactersList', () => {
    const wrapper = shallowMount(CharactersList, {
      propsData: {
        loading: true
      }
    })
    expect(wrapper.findComponent(SingleCharacter).exists()).toBe(false)
    expect(wrapper.text()).toMatch('Loading characters...')
  })
})
