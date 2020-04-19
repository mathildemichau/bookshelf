<template>
  <v-container fluid>
    <v-row class="ma-6">
      <v-col class="no-grow">
        <add-book @addBook="addBook($event)" />
      </v-col>

      <v-col class="no-grow" v-for="book in books" :key="book.title">
        <book :author="book.author" :title="book.title" :cover="book.cover" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Book from "../components/Book";
import AddBook from "../components/AddNewBook";

export default {
  name: "BooksRead",
  components: {
    Book,
    AddBook
  },
  data: () => ({
    overlay: false,
    books: []
  }),
  methods: {
    addBook(event) {
      console.log(event);
      this.books.push(event);
    }
  }
};
</script>

<style scoped>
.no-grow {
  flex-grow: 0;
}
</style>