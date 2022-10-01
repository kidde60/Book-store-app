import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { checkStatusRed } from './Categories/categories';
import { handleBookRed } from './books/books';

const allReducers = combineReducers({
  book: handleBookRed,
  status: checkStatusRed,
});

const store = createStore(
  allReducers,
  applyMiddleware(thunk),
);

export default store;
