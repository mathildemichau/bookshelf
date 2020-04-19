<template>
  <v-container fluid>
    <v-row class="ma-6">
      <v-col class="no-grow">
        <v-card height="100%" width="250" class="border-dashed-light" flat>
          <v-container fill-height fluid>
            <v-row align="center" justify="center">
              <v-btn class="mx-2" fab dark color="teal darken-4">
                <v-icon dark>mdi-plus</v-icon>
              </v-btn>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
      <v-col class="no-grow">
        <v-card hover width="250" flat>
          <v-container fill-height fluid class="ma-0 pa-0">
            <v-img src="https://covers.openlibrary.org/b/id/7891413-L.jpg" height="120"></v-img>
          </v-container>
          <v-card-title height="100" class="ma-0 pa-3">
            <span class="text-truncate">La horde du contrevent</span>
            <span class="grey--text body-2 d-inline-block">Alain Damasio</span>
          </v-card-title>
          <v-card-text>
            <div class="text-left">
              <v-rating
                color="teal"
                small
                dense
                :value="n%5.5"
                background-color="teal lighten-3"
                half-increments
                hover
              ></v-rating>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col v-for="n in 30" :key="n" class="no-grow">
        <book author="Lorem ipsum" title="Fluctuat ner mergitur" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Book from "../components/Book";
export default {
  name: "BooksRead",
  components: {
    Book
  },
  data: () => ({})
};
</script>

<style scoped>
.border-dashed-light {
  border: dashed grey;
}
.no-grow {
  flex-grow: 0;
}
</style>