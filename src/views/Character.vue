<template>
  <div class="character">
    <b-container class="header">
      <h1>Character Profile</h1>
    </b-container>
    <CharacterProfile />
  </div>
</template>

<script>
import CharacterProfile from '@/components/character/CharacterProfile.vue'

export default {
  name: 'Character',
  components: {
    CharacterProfile
  }
}
</script>
