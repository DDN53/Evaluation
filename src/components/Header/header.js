import React from "react";
import "./header.css";
import { logo } from "../../images/index";
import { IoMenuOutline } from "react-icons/io5";

export default function Header() {
  return (
    <div
      className="
  header"
    >
      <div className="logo">
        <img src={logo} className="logo" alt="Logo"></img>
      </div>
      <ul className=" menu">
        <li>HOME</li>
        <li>OUR SCREENS</li>
        <li>SCHEDULE</li>
        <li>MOVIE LIBRARY</li>
        <li>LOCATION & CONTACT</li>
        <div className="menu-icon">
          <IoMenuOutline className="icon" />
        </div>
      </ul>
    </div>
  );
}
