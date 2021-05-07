import { NavLink } from 'react-router-dom';

type Props = {
  menu: boolean;
};

const Aside = ({ menu }: Props) => {
  return (
    <div
      className={
        menu
          ? 'h-screen block shadow-lg relative w-80'
          : 'h-screen hidden lg:block shadow-lg relative w-80'
      }
    >
      <div className="bg-white h-full dark:bg-gray-700">
        <div className="flex items-center justify-start pt-6 ml-8">
          <p className="font-bold text-indigo-400 text-xl">Cheap-finder</p>
        </div>
        <nav className="mt-6">
          <div>
            <NavLink
              activeClassName="border-l-4 border-purple-500"
              className="w-full text-gray-400 flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start hover:bg-indigo-400 hover:text-gray-50"
              to="/user/home"
            >
              <span className="text-left">
                <i className="text-2xl bx bxs-home"></i>
              </span>
              <span className="mx-2 text-sm font-normal">Home</span>
            </NavLink>
            <NavLink
              activeClassName="border-l-4 border-purple-500"
              className="w-full text-gray-400 flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start hover:bg-indigo-400 hover:text-gray-50  border-l-4 border-transparent"
              to="/user/profile"
            >
              <span className="text-left">
                <i className="text-2xl bx bxs-user-circle"></i>
              </span>
              <span className="mx-2 text-sm font-normal">Profile</span>
            </NavLink>
            <NavLink
              activeClassName="border-l-4 border-purple-500"
              className="w-full text-gray-400 flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start hover:bg-indigo-400 hover:text-gray-50  border-l-4 border-transparent"
              to="/user/chart"
            >
              <span className="text-left">
                <i className="text-2xl bx bx-line-chart"></i>
              </span>
              <span className="mx-4 text-sm font-normal">Chart</span>
            </NavLink>
            <NavLink
              activeClassName="border-l-4 border-purple-500"
              className="w-full text-gray-400 flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start hover:bg-indigo-400 hover:text-gray-50 border-l-4 border-transparent"
              to="/user/search"
            >
              <span className="text-left">
                <i className="text-2xl bx bx-search"></i>
              </span>
              <span className="mx-4 text-sm font-normal">Search product</span>
            </NavLink>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Aside;
