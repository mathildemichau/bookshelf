<template>
  <v-app >
    <v-content class="grey lighten-4">
      <Navigation />
        <BooksRead />
    </v-content>
  </v-app>
</template>


<script>
import Navigation from "./components/Navigation";
import BooksRead from "./views/BooksRead";

export default {
  name: "App",
  components: {
    Navigation,
    BooksRead
  }
};
</script>
