import api from "@/services/api";
import axios from "axios"


const booksServices = {
  getBookByIsbn: async function(isbn) {
    const key = `ISBN:${isbn}`;
    const newBook = {}
    const response = await axios.get(api.endpoints.getBookByIsbn(isbn).openlibrary);
    
    newBook.title = response.data[key].title;
    newBook.author = response.data[key].authors[0].name;
    newBook.cover = response.data[key].cover.large;

    return newBook
  },
};

export default booksServices;
