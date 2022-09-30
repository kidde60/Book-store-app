import React from 'react';
import {
  Route, Routes,
  Link,
} from 'react-router-dom';
import BookList from './components/BookList';
import Category from './components/Category';

const App = () => (
  <div className="wrapper">
    <div className="header">
      <h1>Bookstore CMS</h1>
      <ul className="nav-links">
        <li className="link"><Link to="/">BOOKS</Link></li>
        <li className="link"><Link to="/category">CATEGORY</Link></li>
      </ul>
    </div>
    <Routes>
      <Route path="/" exact element={<BookList />} />
      <Route path="/category" exact element={<Category />} />
    </Routes>
  </div>
);

export default App;
