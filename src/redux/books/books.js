// DECRARATION
const ADD_BOOK = 'BOOK-STORE-APP/src/redux/books/ADD_BOOK';
const REMOVE_BOOK = 'BOOK-STORE-APP/src/redux/books/REMOVE_BOOK';

// REDUCER
const actionReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return state.push(action.book);

    case REMOVE_BOOK:
      return [
        state.filter((book) => book !== action.id),
      ];
    default: return state;
  }
};

// ACTION CREATORS
const addAction = (book) => ({
  type: ADD_BOOK,
  book,
});
const removeAction = (id) => ({
  type: REMOVE_BOOK,
  id,
});

export default { actionReducer, addAction, removeAction };
