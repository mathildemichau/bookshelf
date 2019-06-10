<template>
  <div class="hello">
    <form>
      <label for="title">Rechercher un livre</label>
      <input id="title" type="text" v-model="title" v-on:keyup="searchBook"><br>
    </form>
  </div>
</template>

<script>
const axios = require('axios');

export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      title: ""
    };
  },
  methods: {
      async searchBook() {
      const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${this.title}`)
      this.$emit("booksFound", response.data.items)


    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
