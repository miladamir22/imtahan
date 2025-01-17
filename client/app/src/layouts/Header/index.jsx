import React from "react";
import { NavLink } from "react-router";

export const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="tast-box">TASTY</div>
        <ul>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li>
            <NavLink to={"/menu"}>Menu</NavLink>
          </li>

          <li>
            <NavLink to={"/wishlist"}>Wishlist</NavLink>
          </li>
          <li>
            <NavLink to={"/add"}>Add</NavLink>
          </li>

          <li>
            <NavLink to={"/specialits"}>specialities</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>contact</NavLink>
          </li>
          <li>
            <NavLink to={"/blog"}>Blog</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
