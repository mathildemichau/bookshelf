<template>
  <v-dialog :value="show" persistent max-width="600px">
    <!-- Form to fill to add a new book -->
    <v-card class="pa-3">
      <v-card-title class="headline">Add a new book</v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field solo label="ISBN" required v-model.trim="isbn" prepend-inner-icon="mdi-barcode"></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn :disabled="fetchingData" color="red darken-1" text @click="close">Close</v-btn>
        <v-btn :loading="fetchingData" color="blue darken-1" text @click="saveBook">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import books from '@/services/books'
import events from '@/services/events'


export default {
  props: {
    show: Boolean
  },
  data: () => ({
    isbn: null,
    fetchingData: false,
  }),
  methods: {
    saveBook: async function() {
      this.fetchingData = true

      const newBook = await books.getBookByIsbn(this.isbn);

      this.fetchingData = false
      this.$emit(events.addBookDialog.addBook, newBook);
      this.close()
    },
    close: function() {
      this.$emit(events.addBookDialog.close);
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