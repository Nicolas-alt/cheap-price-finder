import { Link } from 'react-router-dom';
import './Nav.scss'

const Nav = () => {
  return (
    <header>
      <nav className="nav-container">
        <ul className="ul-container">
          <li className="li-item">
            <Link className="a-link" to="/">
              Home
            </Link>
          </li>
          <li className="li-item">
            <Link className="a-link" to="/about">
              About
            </Link>
          </li>
          <li className="li-item">
            <Link className="a-link" to="/auth/register">
              Sign Up
            </Link>
          </li>
          <li className="li-item">
            <Link className="a-link" to="/auth/login">
              Sign In
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
