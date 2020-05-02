<template>
  <v-btn
    @click="buttonClicked"
    fixed
    dark
    fab
    bottom
    right
    x-large
    color="indigo lighten-3"
    class="ma-6"
  >
    <v-icon>mdi-plus</v-icon>
  </v-btn>
</template>

<script>
export default {
  methods: {
    buttonClicked: function() {
      this.$emit("create-new-resource");
    }
  }
};
</script>