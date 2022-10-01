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
        <span className="span">Inspiration</span>
        <h2 className="title">{title}</h2>
        <p className="author">{author}</p>
        <div className="functions">
          <p id="comments">Comments</p>
          <button className="deleteBtn" type="button" onClick={() => RemoveBtn(id)}>Remove</button>
          <p>Edit</p>
        </div>
      </div>
      <div className="card-2">
        <h2 className="percent">45%</h2>
        <p className="completed">Completed</p>
      </div>
      <div className="hr" />
      <div className="card-3">
        <p className="current">CURRENT CHAPTER</p>
        <p className="chapter">CHAPTER 12</p>
        <button className="btn" type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};
export default Book;
