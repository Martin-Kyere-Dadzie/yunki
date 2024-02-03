import React from "react";
import './Navbar.scss';
import yunkiLogoIcon from '../../public/icons/yunki-white-logo.svg';
import searchIcon from '../../public/icons/search-gray-icon.svg';
import userIcon from '../../public/icons/user-icon.svg';
import bagIcon from '../../public/icons/shopping-bag-icon.svg';
import heartIcon from '../../public/icons/heart-icon.svg';


const Navbar = () => {
  return (
    <div className="navbar">
        <div className="logo__section">
            <img className="main-logo" src={yunkiLogoIcon} alt="logo-icon"></img>
        </div>
        <div className="search__section">
            <img className="search-icon" src={searchIcon} alt="search-icon"></img>
        </div>
        <div className="user-icons-navigation__section">
            <div className="userIcon__section">            
                <img className="user-icon" src={userIcon} alt="user-icon"></img>
            </div>
            <div className="shoppingBag__section">            
                <img className="bag-icon" src={bagIcon} alt="bag-icon"></img>
            </div>
            <div className="heartIcon__section">            
                <img className="heart-icon" src={heartIcon} alt="search-icon"></img>
            </div>
        </div>
    </div>
  )
};

export default Navbar;