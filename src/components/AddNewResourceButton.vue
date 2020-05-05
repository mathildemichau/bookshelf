<template>
  <v-btn
    @click="buttonClicked"
    fixed
    dark
    fab
    bottom
    right
    color="indigo lighten-3"
    class="ma-6"
  >
    <v-icon>mdi-plus</v-icon>
  </v-btn>
</template>

<script>
import Events from '@/services/events'


export default {
  methods: {
    buttonClicked: function() {
      this.$emit(Events.addNewResourceButton.buttonClicked);
    }
  }
};
</script>