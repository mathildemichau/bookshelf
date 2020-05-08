<template>
  <v-app>
    <v-content class="grey lighten-4">
      <the-navigation-bar />
      <search-box-component placeholder="Book title" icon="mdi-book-open-variant"/>
      <read-books />
    </v-content>
  </v-app>
</template>


<script>
import TheNavigationBar from "@/components/TheNavigationBar";
import ReadBooks from "@/views/ReadBooks";
import SearchBoxComponent from "@/components/SearchBoxComponent";

export default {
  name: "App",
  components: {
    TheNavigationBar,
    ReadBooks,
    SearchBoxComponent,
  }
};
</script>
