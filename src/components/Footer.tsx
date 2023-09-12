import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/sneakers.svg";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-white py-8 px-4 mt-8">
      <div className="container mx-auto flex flex-col gap-4 justify-between lg:flex-row">
        <div className="flex flex-col gap-4">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="logo" />
          </Link>

          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptatum.
          </p>
          <div className="flex gap-4">
            <Link
              to="/"
              className="text-gray-500 transition-all duration-500 hover:text-primary"
            >
              <FaFacebook className="text-2xl" />
            </Link>
            <Link
              to="/"
              className="text-gray-500 transition-all duration-500 hover:text-primary"
            >
              <FaInstagram className="text-2xl" />
            </Link>
            <Link
              to="/"
              className="text-gray-500 transition-all duration-500 hover:text-primary"
            >
              <FaTwitter className="text-2xl" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold">Information</h3>
          <Link
            to="/"
            className="text-gray-500 transition-all duration-500 hover:text-primary"
          >
            About us
          </Link>
          <Link
            to="/"
            className="text-gray-500 transition-all duration-500 hover:text-primary"
          >
            Contact us
          </Link>
          <Link
            to="/"
            className="text-gray-500 transition-all duration-500 hover:text-primary"
          >
            Terms & Conditions
          </Link>
          <Link
            to="/"
            className="text-gray-500 transition-all duration-500 hover:text-primary"
          >
            Privacy Policy
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold">Customer Service</h3>
          <Link
            to="/"
            className="text-gray-500 transition-all duration-500 hover:text-primary"
          >
            Payment Methods
          </Link>
          <Link
            to="/"
            className="text-gray-500 transition-all duration-500 hover:text-primary"
          >
            Money-back guarantee!
          </Link>
          <Link
            to="/"
            className="text-gray-500 transition-all duration-500 hover:text-primary"
          >
            Returns
          </Link>
          <Link
            to="/"
            className="text-gray-500 transition-all duration-500 hover:text-primary"
          >
            Shipping
          </Link>
        </div>
      </div>
      <div className="mt-8 flex flex-col justify-between border-t border-gray-200 pt-8 lg:flex-row">
        <p className="text-gray-500">© 2021 Sneakers. All Rights Reserved.</p>
        <div className="flex gap-4">
          <Link
            to="/"
            className="text-gray-500 transition-all duration-500 hover:text-primary"
          >
            Terms & Conditions
          </Link>
          <Link
            to="/"
            className="text-gray-500 transition-all duration-500 hover:text-primary"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
