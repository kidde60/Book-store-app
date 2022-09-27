import React from 'react';
/* eslint-disable */
const Book = ({ title, author }) => (
  <div className="booksList">
    <div className="book">
      <h3 className="name">{title}</h3>
      <h3 className="author">{author}</h3>
    </div>
    <button type="button">Remove</button>
  </div>
);
export default Book;
