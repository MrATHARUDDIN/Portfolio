import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <h1 className="text-xl font-bold">Md Athar Uddin</h1>
      </div>
      <div className="navbar-center flex">
        <ul className="menu menu-horizontal px-1 font-bold text-center text-base">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/Projects">Projects</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
