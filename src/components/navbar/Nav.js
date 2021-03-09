import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss'

const Nav = () => {
  return (
    <header>
      <nav className="nav-container">
        <ul className="ul-container">
          <li className="li-item">
            <Link to="/">Home</Link>
          </li>
          <li className="li-item">
            <Link to="/">Home</Link>
          </li>
          <li className="li-container">
            <Link to="/">Home</Link>
          </li>
          <li className="li-container">
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
