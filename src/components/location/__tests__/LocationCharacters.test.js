import { shallowMount } from '@vue/test-utils'
import initSetup from '@/initSetup'
import LocationCharacters from '@/components/location/LocationCharacters.vue'
import CharactersList from '@/components/character/CharactersList.vue'
jest.mock('idb')
describe('LocationCharacters.vue', () => {
  it('renders LocationCharacters', () => {
    const wrapper = shallowMount(LocationCharacters, {
      ...initSetup
    })
    expect(wrapper.text()).toMatch('')
    expect(wrapper.get('.sidebar'))
    const characterList = wrapper.findComponent(CharactersList)
    expect(characterList.exists()).toBe(false)
  })
})
