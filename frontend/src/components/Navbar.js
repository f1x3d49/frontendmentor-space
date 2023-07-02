import React, { useState } from "react";

// Import Assets
import logo from "../assets/shared/logo.svg";
import { ReactComponent as Hamburger } from "../assets/shared/icon-hamburger.svg";

// Import Router Link
import { Link } from "react-router-dom";

// Import Slide Over
import SliderComponent from "./SliderComponent";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="absolute top-0 w-full flex shrink-0 justify-between items-center mb:px-[24px] mb:pt-[24px]">
      <img
        src={logo}
        alt="Space Logo"
        className="mb:w-10 mb:h-10 tb:w-12 tb:h-12"
      />
      {/* Tablet and Desktop Navigation */}
      <ul className="hidden tb:flex items-center justify-center text-white">
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
      {/* Mobile Menu */}
      <button onClick={() => setOpen(true)}>
        <Hamburger className="w-[24px] h-[21px]" />
      </button>
      <SliderComponent open={open} setOpen={setOpen} />
    </nav>
  );
};

export default Navbar;
