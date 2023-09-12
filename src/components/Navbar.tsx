import React from "react";
import { Link, useLocation } from "react-router-dom";
import Cart from "./cart/Cart";
import logo from "../images/sneakers.svg";
import menu from "../images/icon-menu.svg";

function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  React.useEffect(() => {
    setNavbarOpen(false);
  }, [useLocation()]);


  return (
    // responsive navbar
    <nav className="sticky top-0 z-50 flex w-full flex-wrap items-center justify-between bg-white py-6 lg:gap-4">
      {/* mobile menu button */}
      <div className="flex items-center gap-2">
        <div className="lg:hidden">
          <button
            className="flex items-center px-3 py-2 text-gray-300 hover:border-white hover:text-white"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <img src={menu} alt="menu" />
          </button>
        </div>
        <div className="flex items-center">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
      </div>
      {/* desktop menu */}
      <div
        className={
          "block w-full flex-grow lg:flex lg:w-auto lg:items-center " +
          (navbarOpen ? "block" : "hidden")
        }
      >
        <div className="text-md mt-4 flex flex-col justify-center gap-4 font-semibold lg:mt-0 lg:flex-row lg:flex-grow lg:justify-start">
          <Link
            to="/collection"
            className=" block text-gray-300 transition-all duration-500 hover:text-primary lg:mt-0 lg:inline-block"
          >
            Collection
          </Link>
          <Link
            to="/men"
            className=" block text-gray-300 transition-all duration-500 hover:text-primary lg:mt-0 lg:inline-block"
          >
            Men
          </Link>
          <Link
            to="/women"
            className="  block text-gray-300 duration-500 hover:text-primary lg:mt-0 lg:inline-block"
          >
            Women
          </Link>
        </div>
      </div>
      <div className="absolute right-2 top-4 flex items-center gap-4">
        <Cart />
        <Link to="/login" className=" lg:inline-block">
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
