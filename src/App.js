import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Categories from './components/Categories';

function App() {
  return (
    <header>
      <nav>
        <h1 className="app-title">Bookstore CMS</h1>
        <ul className="menu-list">
          <li>
            <Link to="/">Books</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </header>
  );
}

export default App;
