import React from "react";
import Logo from "../robinhood.svg";

function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={Logo} alt="Robinhood Logo" />
      </div>

      <div className="header__search">
        <div className="header__search-container">
          <input placeholder="Search" type="text"></input>
        </div>
      </div>

      <div className="header__menu">
        <a href="#">Free Stocks</a>
        <a href="#">Portfolio</a>
        <a href="#">Cash</a>
        <a href="#">Messages</a>
        <a href="#">Account</a>
      </div>
    </div>
  );
}

export default Header;
