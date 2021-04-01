<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: 'Homepage',
    titleTemplate: '%s | Rick and Morty API',
    htmlAttrs: {
      lang: 'en',
      amp: true
    }
  }
}
</script>
