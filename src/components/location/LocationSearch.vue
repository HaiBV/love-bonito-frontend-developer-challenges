<template>
  <div class="search-location">
    <label for="search-location">Search Location</label>
    <input
      id="search-location"
      placeholder="Search"
      v-bind:value="value"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: ['value']
}
</script>
