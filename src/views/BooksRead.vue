<template>
  <v-container>
    <v-row class="ma-6">
      <add-new-book-dialog :show="show" @add-new-book="addBook($event)" @close-dialog="show = false" />

      <v-col class="no-grow" v-for="book in books" :key="book.title">
        <book-card
          :author="book.author"
          :title="book.title"
          :cover="book.cover"
        />
      </v-col>
    </v-row>

    <add-new-resource-button @create-new-resource="displayNewBookDialog" />
  </v-container>
</template>

<script>
import BookCard from "../components/BookCard";
import AddNewBookDialog from "../components/AddNewBookDialog";
import AddNewResourceButton from "../components/AddNewResourceButton";

export default {
  name: "BooksRead",
  components: {
    BookCard,
    AddNewBookDialog,
    AddNewResourceButton
  },
  data: () => ({
    show: false,
    books: []
  }),
  methods: {
    addBook(event) {
      this.books.push(event);
    },
    displayNewBookDialog: function() {
      this.show = true;
    }
  }
};
</script>

<style scoped>
.no-grow {
  flex-grow: 0;
}
</style>