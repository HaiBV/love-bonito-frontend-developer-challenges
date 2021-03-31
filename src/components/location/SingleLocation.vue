<template>
  <b-card tag="article">
    <b-card-text>
      <div class="d-flex align-items-center">
        <b-avatar size="lg" variant="light" :text="location.name[0]" />
        <div class="location-info">
          <h4>{{ location.name }}</h4>
          <p>{{ location.type }}</p>
          <p>
            {{ charactersCount }}
          </p>
        </div>
      </div>
    </b-card-text>
    <b-button @click="selectLocation(location.id)"
      ><img src="/img/visibility.png" alt=""
    /></b-button>
  </b-card>
</template>

<script>
export default {
  props: ['location', 'selectLocation'],
  computed: {
    charactersCount () {
      const count = this.location.residents.length
      return count > 1 ? `${count} characters` : `${count} character`
    }
  }
}
</script>
