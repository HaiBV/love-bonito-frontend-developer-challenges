import { openDB } from 'idb'

const indexDB = openDB('RickAndMontyAPI', 1, {
  upgrade (db) {
    db.createObjectStore('locations')
    db.createObjectStore('characters')
    db.createObjectStore('episodes')
  }
})

export const dbLocal = {
  async getLocations (key) {
    return (await indexDB).get('locations', key)
  },
  async setLocations (key, val) {
    return (await indexDB).put('locations', val, key)
  },
  async getCharacters (key) {
    return (await indexDB).get('characters', key)
  },
  async setCharacters (key, val) {
    return (await indexDB).put('characters', val, key)
  },
  async getEpisodes (key) {
    return (await indexDB).get('episodes', key)
  },
  async setEpisodes (key, val) {
    return (await indexDB).put('episodes', val, key)
  }
}
