import React, { useState } from "react";
import './Navbar.scss';
import yunkiLogoIcon from '../../public/icons/yunki-black-logo.svg';
import searchIcon from '../../public/icons/search-white-icon.svg';
import userIcon from '../../public/icons/user-black.svg';
import bagIcon from '../../public/icons/shopping-bag-black-icon.svg';
import locationIcon from '../../public/icons/location-icon.svg';
import telephoneIcon from '../../public/icons/telephone-icon.svg';
import heartIcon from '../../public/icons/heart-black-icon.svg';
import closeBtn from '../../public/icons/close-btn.svg';
import menuIcon from '../../public/icons/humbegar-icon.svg';
import { NavLink } from "react-router-dom";
import navLinks from "./NavLinks";
import { activeLinkStyle } from "../ActiveConfig/ActiveConfig";


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const closeMenu = () => setIsOpen(false);
    const openMenu = () => setIsOpen(!isOpen);

  return (
    <div className="navbar">
        <div className="navbar-news__section">
            <p className="news-text">
                Shop on Yunki for Exclusive Offers and Discounts-Absolute Limited Offers.
            </p>
        </div>
        {isOpen ? <img src={closeBtn} className="close-btn" alt="img" onClick={closeMenu}></img> : <img src={menuIcon} className="menu-icon" alt="img" onClick={openMenu}></img>}
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
                    placeholder="search your products"
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
                        id="main-icon"
                        src={userIcon} 
                        alt="user-icon"
                    ></img>
                    <h5 className="icon-text"><span>Create</span>Account</h5>
                </div>
                <NavLink className="nav-icon" to="/Checkout">                
                    <div className="shoppingBag__section">            
                        <img 
                            className="bag-icon" 
                            id="main-icon"
                            src={bagIcon} 
                            alt="bag-icon"
                        ></img>
                        <h5 className="icon-text"><span>Order</span>Checkout</h5>
                    </div>
                    <div className="checkout__indicator">1</div>
                </NavLink>
                <NavLink className="nav-icon" to="/wishlist">                
                    <div className="heartIcon__section">            
                        <img 
                            className="heart-icon" 
                            id="main-icon"
                            src={heartIcon} 
                            alt="search-icon"
                        ></img>
                        <h5 className="icon-text"><span>Like</span>Wishlist</h5>
                    </div>
                </NavLink>
            </div>
        </div>
        <div className="nav-links__section">
            <div className="location-section" id="location">
                <img 
                    className="location-image" 
                    src={locationIcon} 
                    alt="location icon"
                ></img>
                <p className="lotion-text">Tema community20 L19 Lions Loop st GH.</p>
            </div>  
            <ul id="main-nav-links">
                {
                    navLinks.map(link => {
                            return <NavLink 
                            style={activeLinkStyle} 
                            key={link.name} 
                            className='main-link' 
                            to={link.route} 
                            href={link.route}>
                            {link.name}
                            </NavLink>
                    })
                }
            </ul>
            {isOpen ? (
                <div className="mobile-menu__dropdown" isOpen={isOpen} setIsOpen={setIsOpen}>
                    <div className="link-container">
                        {
                            navLinks.map(link => {
                                return <NavLink 
                                    key={link.name} 
                                    className="mobile-menu-link" 
                                    to={link.route}
                                    href={link.route}>
                                    {link.name}
                                </NavLink>
                            })
                        }
                    </div>
                </div>
            ) : null}
            <div className="telephone-section">
                <p>+233 535 321 753</p>
                <img className="telephone-icon" src={telephoneIcon} alt="telephone icon"></img>
            </div>
        </div>
    </div>
  )
};

export default Navbar;