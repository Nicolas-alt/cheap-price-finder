import { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [menu, setmenu] = useState(false);

  return (
    <header className="w-screen">
      <nav className="flex bg-white flex-wrap items-center justify-between p-4 max-w-full">
        <div className="lg:order-2 w-auto lg:w-1/5 lg:text-center">
          <Link
            className="text-xl text-indigo-400 font-semibold font-heading"
            to="/ "
          >
            Cheap Finder
          </Link>
        </div>
        <div className="block lg:hidden">
          <button
            className="navbar-burger flex items-center py-2 px-3 text-indigo-500 rounded border border-indigo-500"
            onClick={() => setmenu(!menu)}
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <div
          className={
            menu
              ? 'navbar-menu block lg:order-1 lg:block w-full lg:w-2/5'
              : 'navbar-menu hidden lg:order-1 lg:block w-full lg:w-2/5'
          }
        >
          <Link
            className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-indigo-600"
            to="/"
          >
            Home
          </Link>
          <Link
            className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-indigo-600"
            to="/about"
          >
            About
          </Link>
          <Link
            className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-indigo-600"
            to="/auth/register"
          >
            Sign Up
          </Link>
          <Link
            className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-indigo-600"
            to="/auth/login"
          >
            Sign In
          </Link>
        </div>
        <div className="navbar-menu hidden lg:order-3 lg:block w-full lg:w-2/5 lg:text-right">
          <a
            className="block lg:inline-block mt-4 lg:mt-0 text-blue-900 hover:text-indigo-600"
            href="https://github.com/Nicolas-alt/cheap-price-finder"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-github text-3xl"></i>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
