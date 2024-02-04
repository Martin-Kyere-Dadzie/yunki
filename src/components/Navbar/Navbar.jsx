import React from "react";
import './Navbar.scss';
import yunkiLogoIcon from '../../public/icons/yunki-white-logo.svg';
import searchIcon from '../../public/icons/search-white-icon.svg';
import userIcon from '../../public/icons/user-icon.svg';
import bagIcon from '../../public/icons/shopping-bag-icon.svg';
import heartIcon from '../../public/icons/heart-icon.svg';
import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navbar-news__section">
            <p className="news-text">
                Shop on Yunki for Exclusive Offers and Discounts-Absolute Limited Offers.
            </p>
        </div>
        <div className="navbar-icons__section">
            <div className="logo__section">
                <NavLink to="/">                 
                    <img 
                        className="main-logo" 
                        src={yunkiLogoIcon} 
                        alt="logo-icon"
                    ></img>
                </NavLink>
            </div>
            <div className="search__section">
                <input 
                    type='search' 
                    className='input' 
                    placeholder="search all your products here..."
                ></input>
                <img 
                    className="search-icon" 
                    src={searchIcon} 
                    alt="search-icon"
                ></img>
            </div>
            <div className="user-icons-navigation__section">
                <div className="userIcon__section nav-icon">            
                    <img 
                        className="user-icon" 
                        src={userIcon} 
                        alt="user-icon"
                    ></img>
                    <h5 className="icon-text"><span>Create</span>Account</h5>
                </div>
                <NavLink className="nav-icon" to="/Checkout">                
                    <div className="shoppingBag__section">            
                        <img 
                            className="bag-icon" 
                            src={bagIcon} 
                            alt="bag-icon"
                        ></img>
                        <h5 className="icon-text"><span>Order</span>Checkout</h5>
                    </div>
                </NavLink>
                <NavLink className="nav-icon">                
                    <div className="heartIcon__section">            
                        <img 
                            className="heart-icon" 
                            src={heartIcon} 
                            alt="search-icon"
                        ></img>
                        <h5 className="icon-text"><span>Like</span>Wishlist</h5>
                    </div>
                </NavLink>
            </div>
        </div>
    </div>
  )
};

export default Navbar;