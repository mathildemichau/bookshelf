<template>
  <div class="hello">
    <form>
      <label for="title">Rechercher un livre</label>
      <input id="title" type="text" v-model="title" v-on:keyup="searchBooks" />
      <br />
    </form>
  </div>
</template>

<script>
const axios = require("axios");

export default {
  name: "HelloWorld",
  data() {
    return {
      title: ""
    };
  },
  methods: {
    async searchBooks() {
      // search for books matching the title with the API
      // emit the books found
      let booksFound = null;
      if (this.title.length > 0) {
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=${this.title}`
        );
        if (response.status == 200) booksFound = response.data.items;
      }
      this.$emit("booksFound", booksFound);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
