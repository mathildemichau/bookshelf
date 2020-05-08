import api from "@/services/api";
import axios from "axios"
import LocalDev from "@/conf/local-dev"


const OpenLibraryKeys = {
  ISBN: 'ISBN',
  OLID: 'OLID'
}

const booksServices = {
  getBookByIsbn: async function(isbn) {
    async function getBookByIsbnFromOpenLibrary(isbn) {
      const key = `ISBN:${isbn}`;
      const response = await axios.get(api.endpoints.getBookByIsbn(isbn, OpenLibraryKeys.ISBN).openlibrary);
      const newBook = {}

      newBook.title = response.data[key].title;
      newBook.author = response.data[key].authors[0].name;
      newBook.cover = response.data[key].cover.large;

      return newBook
    }

    const newBook = await getBookByIsbnFromOpenLibrary(isbn)

    return newBook
  },
  getAllReadBooks: function() {
    const allBooks = LocalDev.db
    const readBooks = []

    // map/reduce
    allBooks.forEach(book => {
      const payload = {
        isbn: book.isbn,
        title: book.title,
        author: book.author,
        cover: book.cover
      }

      readBooks.push(payload)
    })
    
    return readBooks
  }
};

export default booksServices;
