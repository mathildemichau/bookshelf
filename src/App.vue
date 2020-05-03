<template>
  <v-app>
    <v-content class="grey lighten-4">
      <the-navigation-bar />
      <read-books />
    </v-content>
  </v-app>
</template>


<script>
import TheNavigationBar from "@/components/TheNavigationBar";
import ReadBooks from "@/views/ReadBooks";

export default {
  name: "App",
  components: {
    TheNavigationBar,
    ReadBooks
  }
};
</script>
