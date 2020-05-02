<template>
  <v-container>
    <v-row class="ma-6">
      <add-book-dialog :show="showAddBookDialog" @add-book="addBook($event)" @close-dialog="showAddBookDialog = false" />

      <v-col class="no-grow" v-for="book in books" :key="book.title">
        <book-card
          :author="book.author"
          :title="book.title"
          :cover="book.cover"
        />
      </v-col>
    </v-row>

    <add-new-resource-button @create-new-resource="showAddBookDialog = true" />
  </v-container>
</template>

<script>
import BookCard from "@/components/BookCard";
import AddBookDialog from "@/components/AddBookDialog";
import AddNewResourceButton from "@/components/AddNewResourceButton";


export default {
  name: "BooksRead",
  components: {
    BookCard,
    AddBookDialog,
    AddNewResourceButton
  },
  data: () => ({
    showAddBookDialog: false,
    books: []
  }),
  methods: {
    addBook(event) {
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