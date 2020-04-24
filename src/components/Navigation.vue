<template>
  <div>
    <v-app-bar app color="indigo lighten-3"  flat dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>B O O K S H E L F</v-toolbar-title>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  props: {
    source: String
  },

  data: () => ({
    drawer: null
  })
};
</script>

<style  scoped>

</style>