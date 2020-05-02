<template>
  <v-dialog :value="show" persistent max-width="600px">
    <!-- Form to fill to add a new book -->
    <v-card>
      <v-card-title class="headline">Add a new book</v-card-title>
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
        <v-btn color="blue darken-1" text @click="closeDialog">Close</v-btn>
        <v-btn color="blue darken-1" text @click="saveBook">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import axios from 'axios'
import api from '@/services/api'


export default {
  props: {
    show: Boolean
  },
  data: () => ({
    isbn: null,
    event: null,
  }),
  methods: {
    saveBook: async function() {
      const response = await axios.get(api.getBookByIsbn(this.isbn));
      const key = `ISBN:${this.isbn}`
      const newBook = {};

      newBook.title = response.data[key].title;
      newBook.author = response.data[key].authors[0].name;
      newBook.cover = response.data[key].cover.large;

      this.$emit("add-book", newBook);
      this.closeDialog()
    },
    closeDialog: function() {
      this.$emit('close-dialog');
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