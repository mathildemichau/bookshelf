<template>
  <v-container>
    <v-text-field v-model="searchedValue" :prepend-inner-icon="icon" :placeholder="placeholder"></v-text-field>
    <v-btn text color="primary" @click="emitSearch"><v-icon left dark>mdi-magnify</v-icon>Search</v-btn>
  </v-container>
</template>

<script>
import Events from '@/services/events'

export default {
  props: {
    placeholder: String,
    icon: String,
  },
  data: () => ({
    searchedValue: null
  }),
  methods: {
    emitSearch: function() {
      const transformedText = this.searchedValue.split(' ').join('+')
      this.$emit(Events.searchBoxComponent.searchButtonClicked, {searchedValue: transformedText})
    }
  }
}
</script>