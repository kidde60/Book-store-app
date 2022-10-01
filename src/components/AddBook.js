import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { AddBook } from '../redux/books/books';

const clearInput = () => {
  const title = document.querySelector('.title');
  const author = document.querySelector('.author');
  title.value = '';
  author.value = '';
};
const AddBooks = () => {
  const dispatch = useDispatch();
  const id = uuidv4();
  const DisplayBook = (e) => {
    e.preventDefault();
    const title = document.querySelector('.title').value;
    const author = document.querySelector('.author').value;
    if (title !== '' && author !== '') {
      dispatch(AddBook(id, title, author));
      clearInput();
    }
  };

  return (
    <>
      <form className="form">
        <h1>ADD NEW BOOK</h1>
        <div>
          <input
            id="temp-id"
            type="text"
            name="title"
            required
            placeholder="Book title"
            className="title"
          />
          <input
            type="text"
            name="author"
            required
            placeholder="Author"
            className="author"
          />
          <button
            className="btn"
            type="button"
            onClick={DisplayBook}
          >
            Add Book
          </button>
        </div>
      </form>
    </>
  );
};
export default AddBooks;
