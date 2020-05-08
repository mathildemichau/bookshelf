const api = {
    endpoints: {
        getBookByIsbn: function(isbn, key) {
            return {
                openlibrary: `https://openlibrary.org/api/books?bibkeys=${key}:${isbn}&jscmd=data&format=json`   
            }
        }
    }
}

export default api