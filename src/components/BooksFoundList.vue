<template>
  <div>
    <ul v-if="booksFoundList">
      <li v-for="bookItem in booksFoundList" v-bind:key="bookItem.id">
        <span>{{ bookItem.volumeInfo.title }}</span>
        <span v-if="bookItem.volumeInfo.authors">- {{bookItem.volumeInfo.authors[0]}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["booksFoundList"],
  name: "BooksFoundList"
};
</script>
<style scoped>
li:hover {
  background: rgb(243, 229, 166, 0.4);
  color: black;
}
li {
  padding: 0 5px;
}
</style>

