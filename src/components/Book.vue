<template>
  <v-card hover width="250" height="100%" flat>
    <v-container fluid class="ma-0 pa-0">
      <v-img :src="cover" height="120"></v-img>
    </v-container>
    <v-container height="100%" fluid class="ma-0 pa-0">
      <v-card-title min-height="100" class="ma-0 pa-3 text-truncate" height="100">
        <span class="text-truncate d-inline-block">{{title}}</span>
        <br />
        <span class="grey--text body-2 d-inline-block text-truncate">{{author}}</span>
      </v-card-title>
      <v-card-text>
        <div class="text-left">
          <v-rating
            color="teal"
            small
            dense
            background-color="teal lighten-3"
            half-increments
            hover
          ></v-rating>
        </div>
      </v-card-text>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: "Book",
  props: {
    title: String,
    author: String,
    cover: String
  }
};
</script>       

<style scoped>
</style>