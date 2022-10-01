import React from 'react';
import { useDispatch } from 'react-redux';
import { RemoveBook } from '../redux/books/books';

const Book = (obj) => {
  const { id, title, author } = obj;
  const dispatch = useDispatch();
  const RemoveBtn = () => {
    dispatch(RemoveBook(id));
  };
  return (
    <div className="card">
      <div className="card-1">
        <span>Action</span>
        <h2>{title}</h2>
        <p>{author}</p>
        <div className="functions">
          <p>Comments</p>
          <button className="btn" type="button" onClick={() => RemoveBtn(id)}>Remove</button>
          <p>Edit</p>
        </div>
      </div>
      <div className="card-2">
        <p className="percent">45%</p>
        <p className="completed">Completed</p>
      </div>
      <div className="hr" />
      <div className="card-3">
        <p>CURRENT CHAPTER</p>
        <p className="chapter">CHAPTER 12</p>
        <button className="btn" type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};
export default Book;
