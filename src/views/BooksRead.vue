<template>
  <v-container>
    <v-alert text type="info" v-if="books.length == 0">
      <h3 class="headline">No book to display</h3>
      <v-divider class="my-4 info" style="opacity: 0.22"></v-divider>
      <div>
        Start by adding a book to your bookshelf by clicking on the "+" button in the bottom-right corner.
      </div>
    </v-alert>
    <v-row class="ma-6">
      <v-col class="no-grow" v-for="book in books" :key="book.title">
        <book-card
          :author="book.author"
          :title="book.title"
          :cover="book.cover"
        />
      </v-col>
    </v-row>

    <add-book-dialog
      :show="showAddBookDialog"
      @add-book="addBook($event)"
      @close="showAddBookDialog = false"
    />
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