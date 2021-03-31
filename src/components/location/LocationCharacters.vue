<template>
  <div class="sidebar">
    <div
      class="sidebar-backdrop"
      @click="closeSidebarPanel"
      v-if="isPanelOpen"
    ></div>
    <transition name="slide">
      <div v-if="isPanelOpen" class="sidebar-panel">
        <CharactersList :characters="characters" :loading="loading" />
      </div>
    </transition>
  </div>
</template>

<script>
import CharactersList from '@/components/character/CharactersList.vue'

export default {
  props: ['isPanelOpen', 'closeSidebarPanel', 'characters', 'loading'],
  components: {
    CharactersList
  }
}
</script>
