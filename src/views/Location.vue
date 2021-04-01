<template>
  <div class="location">
    <b-container class="header">
      <h1>Locations</h1>
      <p>List of locations on Rick and Morty</p>
    </b-container>
    <Locations />
  </div>
</template>

<script>
// @ is an alias to /src
import Locations from '@/components/location/Locations.vue'

export default {
  name: 'Location',
  metaInfo: {
    title: 'Locations list'
  },
  components: {
    Locations
  }
}
</script>
