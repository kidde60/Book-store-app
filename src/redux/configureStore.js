import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { BookReducer } from './books/books';
import { StatusReducer } from './categories/categories';

const allReducers = combineReducers({
  book: BookReducer,
  status: StatusReducer,
});

const store = configureStore({ reducer: allReducers });

export default store;
