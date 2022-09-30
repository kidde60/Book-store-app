import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { AddBook } from '../redux/books/books';

const AddBooks = () => {
  const dispatch = useDispatch();
  const DisplayBook = () => {
    const title = document.querySelector('.title').value;
    const author = document.querySelector('.author').value;
    if (title !== '' && author !== '') {
      dispatch(AddBook({ id: uuidv4(), title, author }));
    }
  };

  return (
    <>
      <form className="form">
        <h1 className="heading">Add New Book</h1>
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
            onClick={() => {
              DisplayBook();
            }}
          >
            Add Book
          </button>
        </div>
      </form>
    </>
  );
};
export default AddBooks;
