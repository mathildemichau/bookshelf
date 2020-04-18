<template>
  <v-container fluid>
    <v-row class="ma-6">
      <v-col class="no-grow">
        <v-card height="100%" width="250" flat class="border-dashed-light" hover>
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
        <v-card hover width="250">
          <v-container fill-height fluid class="ma-0 pa-0">
            <v-img src="https://covers.openlibrary.org/b/id/7891413-L.jpg" height="120"></v-img>
          </v-container>
          <div>
            <v-card-title height="100" class="ma-0 pa-3">
              <span class="text-truncate">La horde du contrevent</span>
              <span class="grey--text body-2 d-inline-block">Alain Damasio</span>
            </v-card-title>
          </div>
        </v-card>
      </v-col>

      <v-col v-for="n in 30" :key="n" class="no-grow">
        <v-card hover width="250" height="100%" max-height="200">
          <v-container fluid class="ma-0 pa-0">
            <v-img :src="`https://picsum.photos/10${n}/310?random`" height="120"></v-img>
          </v-container>
          <v-container height="100%" fluid class="ma-0 pa-0">
            <v-card-title min-height="100" class="ma-0 pa-3 text-truncate" height="100">
              <span class="text-truncate">Lorem Ipsum dolor sit amet</span>
              <span class="grey--text body-2 d-inline-block text-truncate">Consectetur Edit</span>
            </v-card-title>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.border-dashed-light {
  border: dashed grey;
}
.no-grow {
  flex-grow: 0;
}
</style>