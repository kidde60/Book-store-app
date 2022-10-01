import React from 'react';
import {
  Link,
} from 'react-router-dom';

const NavBar = () => (
  <div className="header">
    <h1>Bookstore CMS</h1>
    <ul className="nav-links">
      <li className="link"><Link to="/">BOOKS</Link></li>

      <li className="link"><Link to="/category">CATEGORY</Link></li>
    </ul>
  </div>

);

export default NavBar;
