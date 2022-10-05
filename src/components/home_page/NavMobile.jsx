import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt1, HiOutlineX } from "react-icons/hi";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./NavMobile.css";
import { Badge } from '@mui/material';
import { useSelector } from 'react-redux';
const NavMobile = () => {
  const [sideBar, setSideBar] = useState(false);

  const showSideBar = () => {
    setSideBar(!sideBar);
  };
  const orders = useSelector((state)=>state.cartReducer.cardData)
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
          <Link to="/home">Home</Link>
          <Link>About</Link>
          <Link to="/menuitems">Menu</Link>
          <Link>Contact</Link>
          <Badge badgeContent="0" color="success" className='badge_mob'>
          </Badge>
           <Link to="/card"> <ShoppingCartIcon fontSize="15px" className="left_icon_mob" /></Link>
           <div className="set_btn_log"><button className="left_btn">Log out</button></div>
        </ul>
      </div>
    </div>
  );
};
export default NavMobile;