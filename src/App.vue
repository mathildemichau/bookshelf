<template>
  <v-app>
    <v-content class="grey lighten-4">
      <the-navigation-bar />
      <books-read />
    </v-content>
  </v-app>
</template>


<script>
import TheNavigationBar from "./components/TheNavigationBar";
import BooksRead from "./views/BooksRead";

export default {
  name: "App",
  components: {
    TheNavigationBar,
    BooksRead
  }
};
</script>
