<template>
  <v-dialog v-model="overlay" persistent max-width="600px">
    <!-- Card with button to add a book -->
    <template v-slot:activator="{ on }">
      <v-card width="250" class="border-dashed-light" flat @click="overlay = true" height="230">
        <v-container fill-height fluid>
          <v-row align="center" justify="center">
            <v-btn class="mx-2" fab dark color="teal darken-4">
              <v-icon dark>mdi-plus</v-icon>
            </v-btn>
          </v-row>
        </v-container>
      </v-card>
    </template>
    <!-- Form to fill to add a new book -->
    <v-card>
      <v-card-title>
        <span class="headline">Add a new book</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field label="ISBN*" required v-model.trim="isbn"></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="overlay = false">Close</v-btn>
        <v-btn color="blue darken-1" text @click="saveBook">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
const axios = require("axios");

export default {
  data: () => ({
    overlay: false,
    isbn: null,
    event: null
  }),

  methods: {
    saveBook: async function() {
      const response = await axios.get(
        `https://openlibrary.org/api/books?bibkeys=ISBN:${this.isbn}&jscmd=data&format=json`
      );
      let newBook = {};
      newBook.title = response.data[`ISBN:${this.isbn}`].title;
      newBook.author = response.data[`ISBN:${this.isbn}`].authors[0].name;
      newBook.cover = response.data[`ISBN:${this.isbn}`].cover.large;
      console.log(newBook);
      this.$emit("addBook", newBook);
      this.overlay = false

    }
  }
};
</script>

<style scoped>
.white-background {
  background-color: white;
}
.border-dashed-light {
  border: dashed grey;
}
</style>