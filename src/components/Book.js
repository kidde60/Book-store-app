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
        <p style={{ fontWeight: 600, opacity: 0.5 }}>Action</p>
        <h2 style={{ marginTop: '-10px', fontWeight: '800' }}>{title}</h2>
        <p style={{ marginTop: '-15px', color: '#4386bf' }}>{author}</p>
        <div className="functions">
          <p>Comments</p>
          <button type="button" onClick={() => RemoveBtn(id)}>Remove</button>
          <p>Edit</p>
        </div>
      </div>
      <div className="card-2">
        <p className="progress-percent">45%</p>
        <p className="progress-complete">Completed</p>
      </div>
      <div className="card-3">
        <p style={{ opacity: 0.5, fontSize: '13px' }}>CURRENT CHAPTER</p>
        <p className="chapter">CHAPTER 10</p>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};
export default Book;
