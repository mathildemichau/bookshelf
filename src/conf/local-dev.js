const mockDb = [
  {
    isbn: "0060956666",
    title: "Democracy in America",
    author: "Alexis de Tocqueville",
    cover: "https://covers.openlibrary.org/b/id/42029-L.jpg",
    reading: {
      dateRead: "",
      rating: "",
      comment: "Cool book",
    },
  },
  {
    isbn: "0498025411",
    title: "Relax & win",
    author: "Bud Winter",
    cover: "https://covers.openlibrary.org/b/id/9368754-L.jpg",
    reading: {
      dateRead: "",
      rating: "",
      comment: "Bad book",
    },
  },
  {
    isbn: "9780613003124",
    title: "Wild, Wild Hair",
    author: "Nikki Grimes",
    cover: "https://covers.openlibrary.org/b/id/1316204-L.jpg",
    reading: {
      dateRead: "",
      rating: "",
      comment: "Bad book",
    },
  },
];

const localDev = {
  db: mockDb,
};

export default localDev;
