// adding actions type names
const ADD_BOOK = 'BOOK-STORE-APP/books/ADD_BOOK';
const REMOVE_BOOK = 'BOOK-STORE-APP/books/REMOVE_BOOK';

// set initialState = []
const InitialState = [
  {
    id: 0,
    title: 'Book 1',
    author: 'Author 1',
  },
  {
    id: 1,
    title: 'Book 2',
    author: 'Author 2',
  },
  {
    id: 2,
    title: 'Book 3',
    author: 'Author 3',
  },
];

// add reducers
const BookReducer = (state = InitialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state, action.book,
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.bookId);
    default: return state;
  }
};

// action creator for adding a book
const AddBook = (book) => ({
  type: ADD_BOOK,
  book,
});

// action creator for adding a book
const RemoveBook = (bookId) => ({
  type: REMOVE_BOOK,
  bookId,
});

export { BookReducer, RemoveBook, AddBook };
