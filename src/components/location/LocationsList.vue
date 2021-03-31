<template>
  <div class="list-locations">
    <div
      v-for="location in locations"
      :key="location.id"
      class="single-location"
    >
      <SingleLocation :location="location" :selectLocation="selectLocation" />
    </div>
    <div class="single-location placeholder" />
    <div class="single-location placeholder" />
  </div>
</template>

<script>
import SingleLocation from './SingleLocation'
export default {
  props: ['locations', 'selectLocation'],
  components: {
    SingleLocation
  }
}
</script>
