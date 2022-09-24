import React, { useState } from "react";

import { HiMenuAlt1, HiOutlineX } from "react-icons/hi";

import "./NavMobile.css";

const NavMobile = () => {
  const [sideBar, setSideBar] = useState(false);

  const showSideBar = () => {
    setSideBar(!sideBar);
  };

  return (
    <div className="navmobile">
      <div className="menu_bar" onClick={showSideBar}>
        <HiMenuAlt1 size={35} />
      </div>
      <div className={sideBar ? "nav_menu active" : "nav_menu"}>
        <ul className="nav_menu_items">
          <li className="navbar_toggle">
            <HiOutlineX size={35} onClick={showSideBar} />
          </li>
          <a href="">Home</a>
          <a href="">Home</a>
          <a href="">Home</a>
          <a href="">Home</a>
        </ul>
      </div>
    </div>
  );
};
export default NavMobile;