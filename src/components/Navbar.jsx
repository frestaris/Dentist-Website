import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const activeClassName = "text-primary font-semibold";

  const closeMenu = () => {
    setIsOpen(false);
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
              to="/services"
              className={({ isActive }) =>
                isActive
                  ? activeClassName
                  : "hover:text-primary transition duration-200"
              }
            >
              services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/our-team"
              className={({ isActive }) =>
                isActive
                  ? activeClassName
                  : "hover:text-primary transition duration-200"
              }
            >
              our team
            </NavLink>
          </li>
        </ul>

        {/* Logo */}
        <div className="text-lg font-bold text-gray-800 mx-auto">
          Medical <span className="text-primary">Center</span>
        </div>

        {/* Right Navigation Links  */}
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
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? activeClassName
                  : "hover:text-primary transition duration-200"
              }
            >
              about us
            </NavLink>
          </li>
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
        <button
          className="absolute top-4 right-4 text-gray-800 focus:outline-none"
          onClick={() => setIsOpen(false)}
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
              to="/services"
              className={({ isActive }) =>
                isActive
                  ? activeClassName
                  : "hover:text-primary transition duration-200"
              }
              onClick={closeMenu}
            >
              services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/our-team"
              className={({ isActive }) =>
                isActive
                  ? activeClassName
                  : "hover:text-primary transition duration-200"
              }
              onClick={closeMenu}
            >
              our team
            </NavLink>
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
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? activeClassName
                  : "hover:text-primary transition duration-200"
              }
              onClick={closeMenu}
            >
              about us
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
