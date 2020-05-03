const api = {
    getBookByIsbn: function(isbn) {
        return `https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&jscmd=data&format=json`
    }
}

export default api