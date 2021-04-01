<template>
  <b-container>
    <div v-if="loading"><FacebookLoader /></div>
    <div v-else>
      <b-row>
        <b-col md="4">
          <b-img-lazy
            :src="character.image"
            fluid-grow
            alt="Responsive image"
            blank-src="/img/placeholder.jpg"
          ></b-img-lazy>
        </b-col>
        <b-col>
          <b-card>
            <b-card-text>
              <h3>{{ character.name }}</h3>
            </b-card-text>
            <b-card-text>
              <b-table stacked :fields="fields" :items="[character]">
                <template #cell(episode)="data">
                  {{ data.value.length }}
                </template>
              </b-table>
              <router-link to="/">Go Back</router-link>
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
      <b-row>
        <EpisodesList :episodes="episodes" :loading="loading" />
      </b-row>
    </div>
  </b-container>
</template>

<script>
import { getCharacter, getEpisode } from 'rickmortyapi'
import { FacebookLoader } from 'vue-content-loader'
import { dbLocal } from '@/services/IndexedDB'
import EpisodesList from './EpisodesList'

export default {
  name: 'CharacterProfile',
  data () {
    return {
      loading: false,
      character: {},
      episodes: [],
      fields: [
        'name',
        'status',
        'species',
        'type',
        'gender',
        {
          key: 'origin.name',
          label: 'Origin'
        },
        {
          key: 'location.name',
          label: 'Location'
        },
        'episode'
      ]
    }
  },
  async created () {
    await this.fetchCharacter([this.$route.params.id])
  },
  methods: {
    async fetchCharacter (id) {
      this.loading = true
      console.log({ id })
      const keyCacheCharacter = `${id.join(',')}`
      const cachedCharacter = await dbLocal.getCharacters(keyCacheCharacter)
      const character = cachedCharacter || (await getCharacter(id))
      if (!cachedCharacter) {
        await dbLocal.setCharacters(keyCacheCharacter, character)
      }

      if (character.episode.length > 0) {
        const episodeIds = character.episode.map((episode) =>
          episode.split('/').slice(-1)
        )

        const keyCacheEpisodes = `${episodeIds.join(',')}`
        const cachedEpisodes = await dbLocal.getEpisodes(keyCacheEpisodes)
        const episodes = cachedEpisodes || (await getEpisode(episodeIds))
        if (Array.isArray(episodes)) {
          this.episodes = episodes
        } else {
          this.episodes = [episodes]
        }
        if (!cachedEpisodes) {
          await dbLocal.setEpisodes(keyCacheEpisodes, this.episodes)
        }
      }
      this.character = character
      this.loading = false
    }
  },
  components: { FacebookLoader, EpisodesList }
}
</script>
