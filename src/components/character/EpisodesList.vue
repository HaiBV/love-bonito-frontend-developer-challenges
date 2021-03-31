<template>
  <b-col>
    <div class="flex flex-col">
      <h2>Episodes</h2>
      <b-table
        striped
        hover
        :fields="fields"
        :items="episodes"
        :busy="loading"
        show-empty
      >
        <template #table-busy>
          <div class="text-center text-danger my-2">
            <b-spinner class="align-middle"></b-spinner>
            <strong>Loading Episodes...</strong>
          </div>
        </template>
        <template #empty>
          <h4>No Episode Found!</h4>
        </template>
        <template #cell(characters)="data">
          {{ data.value.length }}
        </template>
      </b-table>
    </div>
  </b-col>
</template>

<script>
export default {
  name: 'EpisodesList',
  props: ['episodes', 'loading'],
  data () {
    return {
      fields: ['episode', 'name', 'characters', 'air_date']
    }
  }
}
</script>
