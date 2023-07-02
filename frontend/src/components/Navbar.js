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
    <nav className="absolute top-0 w-full flex shrink-0 justify-between items-center">
      <img
        src={logo}
        alt="Space Logo"
        className="mb:w-10 mb:h-10 mb:ml-[24px] mb:mt-[24px] tb:w-12 tb:h-12"
      />
      {/* Tablet and Desktop Navigation */}
      <ul className="hidden h-[96px] tb:w-[450px] tb:flex tb:order-last items-center justify-center tb:gap-10 tb:py-[40px] bg-[rgba(255,255,255,0.04)] backdrop text-primary3 font-barlowcondensed text-[14px] uppercase tracking-[2.362px]">
        <li>
          <Link to="/" className="flex gap-3 bar">
            <h1 className="tb:hidden">00</h1>
            <p>Home</p>
          </Link>
        </li>
        <li>
          <Link to="/destination" className="flex gap-3">
            <h1 className="tb:hidden">01</h1>
            <p>Destination</p>
          </Link>
        </li>
        <li>
          <Link to="/crew" className="flex gap-3">
            <h1 className="tb:hidden">02</h1>
            <p>Crew</p>
          </Link>
        </li>
        <li>
          <Link to="/technology" className="flex gap-3">
            <h1 className="tb:hidden">03</h1>
            <p>Technology</p>
          </Link>
        </li>
      </ul>
      {/* Mobile Menu */}
      <button onClick={() => setOpen(true)}>
        <Hamburger className="w-[24px] h-[21px] block tb:hidden mt-[24px] mr-[24px]" />
      </button>
      <SliderComponent open={open} setOpen={setOpen} />
    </nav>
  );
};

export default Navbar;
