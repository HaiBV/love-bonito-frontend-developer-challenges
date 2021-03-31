<template>
  <b-container>
    <LocationSearch v-model="search" />
    <LocationCharacters
      :isPanelOpen="selectedLocationId"
      :closeSidebarPanel="closeSidebarPanel"
      :characters="characters"
      :loading="characterLoading"
    />
    <LocationsList :locations="locations" :selectLocation="selectLocation" />
    <InfiniteLoading @infinite="infiniteHandler" ref="infiniteLoading">
      <div slot="spinner"><LocationLoaders /></div>
      <div slot="no-more">No more Location :)</div>
      <div slot="no-results"></div>
      <div slot="error" slot-scope="{ trigger }">
        Error message, click <a href="javascript:;" @click="trigger">here</a> to
        retry
      </div>
    </InfiniteLoading>
  </b-container>
</template>

<script>
import { getLocation, getCharacter } from 'rickmortyapi'
import InfiniteLoading from 'vue-infinite-loading'
import debounce from 'debounce'
import LocationLoaders from './LocationLoaders'
import LocationSearch from './LocationSearch'
import LocationsList from './LocationsList'
import LocationCharacters from './LocationCharacters'

export default {
  data () {
    return {
      locations: [],
      selectedLocationId: false,
      paginator: {},
      characters: [],
      characterLoading: false,
      error: null,
      search: ''
    }
  },
  watch: {
    search: debounce(function () {
      this.locations = []
      this.paginator = {}
      if (this.$refs.infiniteLoading) {
        this.$refs.infiniteLoading.stateChanger.reset()
      }
    }, 750)
  },
  methods: {
    backToListLocations () {
      this.selectedLocationId = false
    },
    closeSidebarPanel () {
      this.selectedLocationId = false
      this.characters = []
    },
    async selectLocation (id) {
      this.selectedLocationId = id
      this.characters = []
      this.characterLoading = true
      const location = this.locations.find(
        (location) => location.id === this.selectedLocationId
      )

      if (location.residents.length > 0) {
        const characterIds = location.residents.map((resident) =>
          resident.split('/').slice(-1)
        )
        const characters = await getCharacter(characterIds)

        if (Array.isArray(characters)) {
          this.characters = characters.filter(character => character.status !== 'unknown')
        } else {
          this.characters = [characters].filter(character => character.status !== 'unknown')
        }
      }
      this.characterLoading = false
    },
    async infiniteHandler ($state) {
      let page = 1
      if (this.paginator.next) {
        const query = new URLSearchParams(this.paginator.next.split('?')[1])
        page = Number(query.get('page'))
      }
      const response = await getLocation({
        page,
        name: this.search
      })

      if (response.error) {
        $state.complete()
      }

      const { info, results } = response
      this.locations.push(...results)
      this.paginator = info

      if (info.next) {
        $state.loaded()
      } else {
        $state.complete()
      }
    }
  },
  components: {
    InfiniteLoading,
    LocationLoaders,
    LocationCharacters,
    LocationSearch,
    LocationsList
  }
}
</script>
