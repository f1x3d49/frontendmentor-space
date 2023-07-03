import React, { useState } from "react";

// Import Assets
import logo from "../assets/shared/logo.svg";
import { ReactComponent as Hamburger } from "../assets/shared/icon-hamburger.svg";

// Import Router Link
import { NavLink } from "react-router-dom";

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
      <ul className="hidden h-[96px] tb:w-[450px] dt:w-[830px] tb:flex tb:order-last items-center justify-center tb:gap-10 tb:py-[40px] bg-[rgba(255,255,255,0.04)] backdrop text-primary3 font-barlowcondensed text-[14px] uppercase tracking-[2.362px]">
        <li>
          <NavLink to="/" className="flex gap-3 relative bar">
            <h1 className="tb:hidden dt:inline-block">00</h1>
            <p>Home</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/destination" className="flex gap-3 relative bar">
            <h1 className="tb:hidden dt:inline-block">01</h1>
            <p>Destination</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/crew" className="flex gap-3 relative bar">
            <h1 className="tb:hidden dt:inline-block">02</h1>
            <p>Crew</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/technology" className="flex gap-3 relative bar">
            <h1 className="tb:hidden dt:inline-block">03</h1>
            <p>Technology</p>
          </NavLink>
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
