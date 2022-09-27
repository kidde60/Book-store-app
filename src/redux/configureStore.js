import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import actionReducer from './books/books';
import statusReducer from './categories/categories';

const Reducers = combineReducers({
  book: actionReducer,
  status: statusReducer,
});

const store = configureStore({ reducer: Reducers });

export default store;
