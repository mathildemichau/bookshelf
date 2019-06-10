<template>
  <div>
    <ul v-if="booksFoundList">
      <li v-for="bookItem in booksFoundList" v-bind:key="bookItem.id">
        <span>{{ bookItem.volumeInfo.title }}</span>
        <span v-if="bookItem.volumeInfo.authors"> - {{bookItem.volumeInfo.authors[0]}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["booksFoundList"],
  name: "BooksFoundList",
  watch: {
    booksFoundList: function(val) {
      console.log(val);
    }
  }
};
</script>

