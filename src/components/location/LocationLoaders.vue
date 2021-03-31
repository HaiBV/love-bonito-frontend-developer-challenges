<template>
  <div class="list-locations">
    <div class="single-location" v-for="item in [1, 2, 3]" :key="item">
      <div class="loader">
        <FacebookLoader />
      </div>
    </div>
    <div class="single-location placeholder" />
    <div class="single-location placeholder" />
  </div>
</template>

<script>
import { FacebookLoader } from 'vue-content-loader'

export default {
  components: {
    FacebookLoader
  }
}
</script>
