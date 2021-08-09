import React from "react";
import "./Header.css";
// import amazon_PNG11.png from  "./images/header/amazon_PNG11.png";
// "http://pngimg.com/uploads/amazon/amazon_PNG11.png"

import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import amazon_PNG11 from "./images/header/amazon_PNG11.png";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img className="header_logo" src={amazon_PNG11} alt="logo" />
      </Link>

      <div className="header_search">
        <input className="header_seacherInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <Link to={!user && "./login"}>
          <div onClick={handleAuthentication} className="header_option">
            <span className="header_optionOne header_nav"> Hello Guest </span>
            <span className="header_optiontwo">
              {user ? "Sign Out" : "Sign In"}{" "}
            </span>
          </div>
        </Link>

        <div className="header_option">
          <span className="header_optionOne header_nav"> Returns </span>
          <span className="header_optiontwo"> & Orders </span>
        </div>

        <div className="header_option">
          <span className="header_optionOne header_nav"> Your </span>
          <span className="header_optiontwo"> Prime </span>
        </div>

        <Link to="/checkout">
          <div className="hearder_optionBasket">
            <ShoppingBasketIcon />
            <span className="header_optiontwo header_basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
