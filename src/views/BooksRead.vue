<template>
  <v-container>
    <v-row class="ma-6">
      <add-new-book-dialog :overlay="overlay" @addBook="addBook($event)" />

      <v-col class="no-grow" v-for="book in books" :key="book.title">
        <book-card
          :author="book.author"
          :title="book.title"
          :cover="book.cover"
        />
      </v-col>
    </v-row>

    <add-new-book-button @new-book="test" />
  </v-container>
</template>

<script>
import BookCard from "../components/BookCard";
import AddNewBookDialog from "../components/AddNewBookDialog";
import AddNewBookButton from "../components/AddNewBookButton";

export default {
  name: "BooksRead",
  components: {
    BookCard,
    AddNewBookDialog,
    AddNewBookButton
  },
  data: () => ({
    overlay: false,
    books: []
  }),
  methods: {
    addBook(event) {
      this.books.push(event);
      this.overlay = false
    },
    test() {
      this.overlay = true;
      this.$forceUpdate()
    }
  }
};
</script>

<style scoped>
.no-grow {
  flex-grow: 0;
}
</style>