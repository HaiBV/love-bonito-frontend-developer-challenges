<template>
  <router-link :to="`/characters/${character.id}`">
    <b-card no-body style="max-width: 20rem">
      <b-img-lazy :src="character.image" :alt="character.name" blank-src="/img/placeholder.jpg" ></b-img-lazy>
      <b-card-body>
        <b-card-title>{{ character.name }}</b-card-title>
        <b-card-sub-title class="mb-2">{{
          character.species
        }}</b-card-sub-title>
        <b-card-text>
          {{ character.status }}
        </b-card-text>
        <b-card-text>
          {{ character.episode.length }}
          {{ character.episode.length > 1 ? "episodes" : "episode" }}
        </b-card-text>
      </b-card-body>
    </b-card>
  </router-link>
</template>

<script>
export default {
  props: ['character']
}
</script>
