const api = {
    endpoints: {
        getBookByIsbn: function(isbn) {
            return {
                openlibrary: `https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&jscmd=data&format=json`   
            }
        }
    }
}

export default api