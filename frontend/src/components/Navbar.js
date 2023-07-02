import React from "react";
import logo from "../assets/shared/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="absolute top-0 w-full bg-red-500 flex justify-between">
      <img
        src={logo}
        alt="Space Logo"
        className="mb:w-10 mb:h-10 tb:w-12 tb:h-12"
      />
      <ul className="flex items-center justify-center">
        <li>
          <Link to="/" className="flex gap-1">
            <h1>00</h1>
            <p>Home</p>
          </Link>
        </li>
        <li>
          <Link to="/destination" className="flex gap-1">
            <h1>01</h1>
            <p>Destination</p>
          </Link>
        </li>
        <li>
          <Link to="/crew" className="flex gap-1">
            <h1>02</h1>
            <p>Crew</p>
          </Link>
        </li>
        <li>
          <Link to="/technology" className="flex gap-1">
            <h1>03</h1>
            <p>Technology</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
