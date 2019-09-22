<template>
  <v-app>
    <v-content>
      <Navigation />
      <v-container>
        <v-row>
          <SearchBook @booksFound="updateBooksFoundList" />
        </v-row>
        <v-row>
          <BooksFoundList :booksFoundList="booksFoundList" />
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>


<script>
import SearchBook from "./components/SearchBook";
import BooksFoundList from "./components/BooksFoundList";
import Navigation from "./components/Navigation";

export default {
  name: "App",
  components: {
    SearchBook,
    BooksFoundList,
    Navigation
  },
  data: () => ({
    booksFoundList: []
  }),
  methods: {
    updateBooksFoundList(booklist) {
      this.booksFoundList = booklist;
    }
  }
};
</script>
