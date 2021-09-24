import React from "react";
import logo from "../../images/logo.png";
import "./Header.css";
const Header = () => {
  return (
    <div className="Header-container">
      <img className="logo" src={logo} alt="logo" />
      <nav>
        <ul>
          <li>
            <a href="/shop">Shop</a>
          </li>
          <li>
            <a href="/review">Order Review</a>
          </li>
          <li>
            <a href="/inventory">Manage Inventory here</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
