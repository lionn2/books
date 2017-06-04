const authors = [{
  id: 1,
  name: 'Author1',
}, {
  id: 2,
  name: 'Author2',
}, {
  id: 1,
  name: 'Author1',
}, {
  id: 4,
  name: 'Author4',
}];

const genres = [
  'Fiction',
  'Comedy',
  'Drama',
  'Horror',
  'Non-fiction',
  'Realistic',
  'Romantic',
  'Satire',
  'Tragedy',
  'Tragicomedy',
  'Fantasy',
  'Mythology',
];

const books = [{
  id: 1,
  name: 'Book1',
  authors: [authors[0]],
  genres: genres.slice(0, 2),
}, {
  id: 2,
  name: 'Book2',
  authors: [authors[1], authors[2]],
  genres: genres.slice(2, 5),
}, {
  id: 3,
  name: 'Book3',
  authors: [authors[3]],
  genres: genres.slice(6),
}];

export function getBooks() {
  return Promise.resolve(books);
}

export function getBookById(id) {
  let book = books.find(book => book.id == id);

  if (book) {
    return Promise.resolve(book);
  } else {
    return Promise.reject({message: 'No book with this id'});
  }
}

export function getAuthors() {
  return Promise.resolve(authors.map(mapAuthor));
}

export function getAuthorById(id) {
  let author = authors.find(author => author.id == id);

  if (author) {
    return Promise.resolve(mapAuthor(author));
  } else {
    return Promise.reject({message: 'No author with this id'});
  }
}

export function getGenreByName(name) {
  let genre = genres.find(genre => genre.name == name);

  if (genre) {
    return Promise.resolve(mapGenre(genre));
  } else {
    return Promise.reject({message: 'No genre with this name'});
  }
}

function mapAuthor(author) {
  let books = books.filter(book => book.authors.indexOf(author) >= 0);
  return {
    ...author,
    books,
  };
}

function mapGenre(genre) {
  let books = books.filter(book => book.genres.indexOf(genre) >= 0);
  return {
    name: genre,
    books,
  };
}