import React from "react";
import { Link } from "react-router-dom";
import "./NavigationBar.css";
import logo from "../../../Asset/M-removebg-preview.png";

const NavigationBar = () => {
  const menuItems = (
    <>
      <li className="menu-btn btn-design">
        <Link to="/">Home</Link>
      </li>
      <li className="menu-btn btn-design">
        <Link to="portfolio">Portfolio</Link>
      </li>
      <li className="menu-btn btn-design">
        <Link to="about">About</Link>
      </li>
      <li className="menu-btn btn-design">
        <Link to="contact">Contact</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-primary text-primary-content sticky top-0 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu mockup-code  menu-compact dropdown-content mt-3 p-2 shadow bg-primary text-primary-content rounded-box w-52  "
          >
            {menuItems}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">
          <img height={50} width={50} src={logo} alt="" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-xs custom-btn btn-style">Hire Me</a>
      </div>
    </div>
  );
};

export default NavigationBar;
