import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { StatusReducer } from './categories/categories';
import { BookReducer } from './books/books';

const Reducers = combineReducers({
  book: BookReducer,
  status: StatusReducer,
});

const store = configureStore({
  reducer: Reducers,
});

export default store;
