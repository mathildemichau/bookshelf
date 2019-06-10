<template>
  <div id="app">
    <HelloWorld @booksFound="updateBooksFoundList"/>
    <BooksFoundList :booksFoundList="booksFoundList"/>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import BooksFoundList from "./components/BooksFoundList.vue";

export default {
  name: "app",
  components: {
    HelloWorld,
    BooksFoundList
  },
  data() {
    return { booksFoundList: [ ] };
  },
  methods: {
    updateBooksFoundList(booklist) {
      this.booksFoundList = booklist;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
