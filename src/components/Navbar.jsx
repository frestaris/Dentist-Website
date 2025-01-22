import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubMenuAboutUsOpen, setIsSubMenuAboutUsOpen] = useState(false);
  const [isSubMenuOurTeamOpen, setIsSubMenuOurTeamOpen] = useState(false);

  const activeClassName = "text-primary font-semibold";

  const closeMenu = () => {
    setIsOpen(false);
    setIsSubMenuAboutUsOpen(false);
    setIsSubMenuOurTeamOpen(false);
  };

  return (
    <div>
      <div className="container mx-auto flex items-center justify-between py-4 md:py-10 px-10">
        {/* Left Navigation Links */}
        <ul className="hidden md:flex space-x-6 text-gray-600 font-medium">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? activeClassName
                  : "hover:text-primary transition duration-200"
              }
            >
              home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/book-online"
              className={({ isActive }) =>
                isActive
                  ? activeClassName
                  : "hover:text-primary transition duration-200"
              }
            >
              book online
            </NavLink>
          </li>
          <div className="relative group">
            <div className="hover:text-primary transition duration-200 cursor-pointer">
              our team
            </div>
            {/* Dropdown Content */}
            <div className="absolute left-0 hidden group-hover:block bg-gray-100 shadow-lg p-4 w-40">
              <ul>
                <li>
                  <NavLink
                    to="/overview"
                    className="block p-1 text-gray-700 hover:text-primary  text-sm"
                  >
                    overview
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dentist/john-doe"
                    className="block p-1 text-gray-700 hover:text-primary  text-sm"
                  >
                    dr. john doe
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dentist/jane-smith"
                    className="block p-1 text-gray-700 hover:text-primary  text-sm"
                  >
                    dr. jane smith
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dentist/alice-johnson"
                    className="block p-1 text-gray-700 hover:text-primary  text-sm"
                  >
                    dr. alice johnson
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </ul>

        {/* Logo */}
        <div className="text-lg font-bold text-gray-800 mx-auto">
          Dental <span className="text-primary">Center</span>
        </div>

        {/* Right Navigation Links */}
        <ul className="hidden md:flex space-x-6 text-gray-600 font-medium">
          <li>
            <NavLink
              to="/contact-us"
              className={({ isActive }) =>
                isActive
                  ? activeClassName
                  : "hover:text-primary transition duration-200"
              }
            >
              contact us
            </NavLink>
          </li>
          <div className="relative group">
            <div className="hover:text-primary transition duration-200 cursor-pointer">
              about us
            </div>
            {/* Dropdown Content */}
            <div className="absolute right-0 hidden group-hover:block bg-gray-100 shadow-lg p-4 w-36">
              <ul>
                <li>
                  <NavLink
                    to="/office"
                    className="block p-1 text-gray-700 hover:text-primary  text-sm"
                  >
                    office tour
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/reviews"
                    className="block p-1 text-gray-700 hover:text-primary  text-sm"
                  >
                    reviews
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/safety"
                    className="block p-1 text-gray-700 hover:text-primary  text-sm"
                  >
                    safety
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/faq"
                    className="block p-1 text-gray-700 hover:text-primary  text-sm"
                  >
                    faq
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </ul>

        {/* Hamburger */}
        <button
          className="text-gray-800 hover:text-primary md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Sliding Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        {!isSubMenuAboutUsOpen && !isSubMenuOurTeamOpen ? (
          <div>
            {/* Main Menu */}
            <button
              className="absolute top-4 right-4 text-gray-800 focus:outline-none"
              onClick={closeMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <ul className="flex flex-col space-y-4 mt-16 px-6 text-gray-600 font-medium">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? activeClassName
                      : "hover:text-primary transition duration-200"
                  }
                  onClick={closeMenu}
                >
                  home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/book-online"
                  className={({ isActive }) =>
                    isActive
                      ? activeClassName
                      : "hover:text-primary transition duration-200"
                  }
                  onClick={closeMenu}
                >
                  book online
                </NavLink>
              </li>
              <li>
                <button
                  className="text-left w-full text-gray-600 hover:text-primary transition duration-200"
                  onClick={() => setIsSubMenuOurTeamOpen(true)}
                >
                  our team
                </button>
              </li>
              <li>
                <NavLink
                  to="/contact-us"
                  className={({ isActive }) =>
                    isActive
                      ? activeClassName
                      : "hover:text-primary transition duration-200"
                  }
                  onClick={closeMenu}
                >
                  contact us
                </NavLink>
              </li>
              <li>
                <button
                  className="text-left w-full text-gray-600 hover:text-primary transition duration-200"
                  onClick={() => setIsSubMenuAboutUsOpen(true)}
                >
                  about us
                </button>
              </li>
            </ul>
          </div>
        ) : isSubMenuAboutUsOpen ? (
          <div>
            {/* Sub Menu About Us */}
            <button
              className="absolute top-4 left-4 text-gray-800 focus:outline-none"
              onClick={() => setIsSubMenuAboutUsOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <ul className="flex flex-col space-y-4 mt-16 px-6 text-gray-600 font-medium">
              <li>
                <NavLink
                  to="/office"
                  className="hover:text-primary transition duration-200"
                  onClick={closeMenu}
                >
                  office tour
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/reviews"
                  className="hover:text-primary transition duration-200"
                  onClick={closeMenu}
                >
                  reviews
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/safety"
                  className="hover:text-primary transition duration-200"
                  onClick={closeMenu}
                >
                  safety
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/faq"
                  className="hover:text-primary transition duration-200"
                  onClick={closeMenu}
                >
                  faq
                </NavLink>
              </li>
            </ul>
          </div>
        ) : (
          <div>
            {/* Sub Menu Our Team */}
            <button
              className="absolute top-4 left-4 text-gray-800 focus:outline-none"
              onClick={() => setIsSubMenuOurTeamOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <ul className="flex flex-col space-y-4 mt-16 px-6 text-gray-600 font-medium">
              <li>
                <NavLink
                  to="/overview"
                  className="hover:text-primary transition duration-200"
                  onClick={closeMenu}
                >
                  overview
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dentist/john-doe"
                  className="hover:text-primary transition duration-200"
                  onClick={closeMenu}
                >
                  dr. john doe
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dentist/jane-smith"
                  className="hover:text-primary transition duration-200"
                  onClick={closeMenu}
                >
                  dr. jane smith
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dentist/alice-johnson"
                  className="hover:text-primary transition duration-200"
                  onClick={closeMenu}
                >
                  dr. alice johnson
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
