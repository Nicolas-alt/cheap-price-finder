import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <header>
      <nav className="nav__dashboard">
        <button>
          <i className="bx bx-bell"></i>
        </button>
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
          alt="Profile"
          onClick={() => setMenu(!menu)}
        />
        <i
          className={
            menu
              ? 'i__dashBoardMenu-active bx bxs-chevron-down'
              : 'i__dashBoardMenu bx bxs-chevron-down'
          }
          onClick={()=>setMenu(!menu)}
        ></i>
        <ul className={menu ? 'ul-active' : null}>
          <li>
            <Link to="/">Profile</Link>
          </li>
          <li>
            <Link to="/">Settings</Link>
          </li>
          <li>
            <Link to="/">LogOut</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
