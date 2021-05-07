import { useState } from 'react';
import { Link } from 'react-router-dom';
type Props = {
  menu: boolean;
  setmenu: (state: boolean) => void;
};

const Navbar = ({ setmenu, menu }: Props) => {
  const [menuNav, setmenuNav] = useState(false);
  return (
    <header className="w-full h-16 z-40 mx-1 relative flex items-center justify-between bg-white rounded-md">
      <div className="block lg:hidden ml-6">
        <button
          className="flex p-2 items-center rounded-full bg-white shadow text-gray-500 text-md"
          onClick={() => setmenu(!menu)}
        >
          <svg
            width="20"
            height="20"
            className="text-gray-400"
            fill="currentColor"
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
          </svg>
        </button>
      </div>
      <div className="relative z-20 flex flex-col justify-center h-full px-3 md:w-full">
        <div className="relative p-1 flex items-center w-full space-x-4 justify-end">
          <button className="flex p-2 items-center rounded-full bg-white shadow text-gray-400 hover:text-gray-700 text-md">
            <svg
              width="20"
              height="20"
              className="text-gray-400"
              fill="currentColor"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M912 1696q0-16-16-16-59 0-101.5-42.5t-42.5-101.5q0-16-16-16t-16 16q0 73 51.5 124.5t124.5 51.5q16 0 16-16zm816-288q0 52-38 90t-90 38h-448q0 106-75 181t-181 75-181-75-75-181h-448q-52 0-90-38t-38-90q50-42 91-88t85-119.5 74.5-158.5 50-206 19.5-260q0-152 117-282.5t307-158.5q-8-19-8-39 0-40 28-68t68-28 68 28 28 68q0 20-8 39 190 28 307 158.5t117 282.5q0 139 19.5 260t50 206 74.5 158.5 85 119.5 91 88z"></path>
            </svg>
          </button>
          <span className="w-1 h-8 rounded-lg bg-gray-200"></span>
          <Link to="/user/profile" className="block relative">
            <img
              alt="profil"
              src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"
              className="mx-auto object-cover rounded-full h-10 w-10 "
            />
          </Link>
          <button
            className="flex items-center text-gray-500 dark:text-white text-md"
            onClick={() => setmenuNav(!menuNav)}
          >
            Charlie R
            <svg
              width="20"
              height="20"
              className="ml-2 text-gray-400"
              fill="currentColor"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z"></path>
            </svg>
          </button>
        </div>
      </div>
      <div
        className={
          menuNav
            ? 'origin-top-right absolute top-16 right-4 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5'
            : 'hidden'
        }
      >
        <div
          className="py-1 "
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <Link
            to="/user/profile"
            className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
            role="menuitem"
          >
            <span className="flex flex-col">
              <span>Settings</span>
            </span>
          </Link>
          <Link
            to="/home"
            className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
            role="menuitem"
          >
            <span className="flex flex-col">
              <span>LogOut</span>
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
