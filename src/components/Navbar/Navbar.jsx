import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const { onLogout } = props;

  return (
    <nav className="bg-darknavy h-20 flex items-center">
      <div className="w-4/5 h-full flex items-center justify-between mx-auto">
        <a href="#" className="">
          <span className="font-sans text-white font-extrabold self-center text-2xl">
            Movies
            <span className="font-serif text-teal text-4xl">4</span>
            you
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="white"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className="hidden h-full w-full md:flex md:w-auto md:items-center"
          id="navbar-default"
        >
          <ul className="h-full items-center flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li className="h-full hover:bg-green flex items-center px-4">
              <Link to="/" className="block text-white text-lg">
                Now Playing
              </Link>
            </li>
            <li className="h-full hover:bg-green flex items-center px-4">
              <Link to="/popular" className="block text-white text-lg">
                Popular
              </Link>
            </li>
            <li className="h-full hover:bg-green flex items-center px-4">
              <Link to="/top-rated" className="block text-white text-lg">
                Top Rated
              </Link>
            </li>
            <li className="h-full hover:bg-green flex items-center px-4">
              <Link to="/upcoming" className="block text-white text-lg">
                Upcoming
              </Link>
            </li>
            <button
              className="bg-green py-2 px-5 text-white rounded-md text-lg"
              onClick={() => onLogout()}
            >
              Logout
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
