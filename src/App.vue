<template>
  <v-app>
    <v-content>
      <SearchBook @booksFound="updateBooksFoundList" />
      <BooksFoundList :booksFoundList="booksFoundList" />
    </v-content>
  </v-app>
</template>

<script>
import SearchBook from "./components/SearchBook";
import BooksFoundList from "./components/BooksFoundList";

export default {
  name: "App",
  components: {
    SearchBook,
    BooksFoundList
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
