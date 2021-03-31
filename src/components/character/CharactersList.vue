<template>
  <div>
    <template v-if="loading">Loading characters...</template>
    <template v-else-if="characters.length === 0">No characters found!</template>
    <template v-else>
      <div class="list-characters">
        <div
          v-for="character in characters"
          :key="character.id"
          class="single-character"
        >
          <SingleCharacter :character="character" />
        </div>
        <div class="single-character placeholder" />
        <div class="single-character placeholder" />
      </div>
    </template>
  </div>
</template>

<script>
import SingleCharacter from './SingleCharacter'
export default {
  props: ['characters', 'loading'],
  components: {
    SingleCharacter
  }
}
</script>
