import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav className="bg-gray-800 text-white font-mono p-4">
        <ul className="flex justify-center ">
          <li className="mr-10 hover:text-emerald-400">
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li className="mr-10 hover:text-emerald-400">
            <NavLink to={"/Counter"}>Counter</NavLink>
          </li>
          <li className="mr-10 hover:text-emerald-400">
            <NavLink to={"/Registration"}>Registration Form</NavLink>
          </li>
          <li className="mr-10 hover:text-emerald-400">
            <NavLink to={"/About"}>About</NavLink>
          </li>
          <li className="mr-10 hover:text-emerald-400">
            <NavLink to={"/Contact"}>Contact Us</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
