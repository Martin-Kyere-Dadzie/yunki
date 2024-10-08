import React from "react";
import './Home.scss';
// import HomeTopLinks from "../WhyUs/HomeTopLinks";
import { NavLink } from "react-router-dom";
//store images
import PetsImage from "../../public/images/adorable-white-little-puppy.jpg";
import foodImage from "../../public/images/pngaaa.com-89266.png";
import phonesAndLaptops from "../../public/images/pngaaa.com-3403934.png";
import electronicImage from "../../public/images/pngaaa.com-3403775.png";
import skinCareImage from "../../public/images/pngaaa.com-4674620.png";
import kidsImage from "../../public/images/children-girlfriends-smiling-happiness-friendship-togetherness-studio-portrait_53876-38427.jpg";
import womenImage from "../../public/images/portrait-smiley-woman-posing-studio.jpg";
import menImage from "../../public/images/medium-shot-boy-posing-with-monochrome-outfit.jpg";
//icons images
import giftIcon from "../../public/icons/gift-ic0n.svg"
import { trendsData } from "../Trends/TrendsData";
import Trends from "../Trends/Trends";
import Marquee from "react-fast-marquee";

//store images end

const Home = () => {
  return (
    <div className="home-section">
      <div className="stores-shortcut__links">
        <NavLink to="/pets"  className="store-shortcut pets" id="pet-store">
          <div className="imageText-container">
            <img className="petImage" src={PetsImage} alt="pet"></img>
            <h5>pets days save big</h5>
            <p></p>
          </div>
        </NavLink>
        <NavLink to="/women" className="store-shortcut women" id="women-store">
          <div className="imageText-container">
            <img className="womenImage" src={womenImage} alt="womenImage"></img>
            <h5>save on women fashion & more</h5>
            <p></p>
          </div>
        </NavLink>
        <NavLink to="/electronics" className="store-shortcut electronics" id="electronic-store">
          <div className="imageText-container">
            <img className="electronicsImage" src={electronicImage} alt="electronics"></img>
            <h5>electronics</h5>
          </div>
        </NavLink>
        <NavLink to="/food" className="store-shortcut food" id="food-store">
          <div className="imageText-container">
            <img className="foodImage" src={foodImage} alt="food"></img>
            <h5>
              buy on discount groceries & essentials
            </h5>
          </div>
        </NavLink>
        <NavLink to="/men" className="store-shortcut men" id="men-store">
          <div className="imageText-container">
            <img className="menImage" src={menImage} alt="men"></img>
            <h5>low prices on men fashion and more</h5>
          </div>
        </NavLink>  
        <NavLink to="/fashionAndBeauty" className="store-shortcut fashion-and-beauty" id="fashion-store">
          <div className="imageText-container">
            <img className="skinCareImage" src={skinCareImage} alt="skincare"></img>
            <h5>skin care</h5>
          </div>
        </NavLink>
        <NavLink to="/phonesAndLaptops" className="store-shortcut phones-laptops" id="phones-laptops">
          <img className="phoneImage" src={phonesAndLaptops} alt="phones"></img>
          <div className="imageText-container">
            <h5>phones, laptops and accessories</h5>
          </div>
        </NavLink>
        <NavLink to="/kids" className="store-shortcut kids">
          <div className="imageText-container">
            <img className="kidsImage" src={kidsImage} alt="kidsImage" id="kids-store"></img>
            <h5>kids</h5>
          </div>
        </NavLink>
      </div>
      <div className="trends-container">
        <div className="trends-contents-holder">
          <div className="offers-section">
            <div className="offer-content">
              <img className="offer-img" alt="img" src={giftIcon}></img>
              <h4 className="offer-header">safe payment</h4>
              <p className="offer-text">100% secure payment</p>
            </div>
            <div className="offer-content">
              <img className="offer-img" alt="img"></img>
              <h4 className="offer-header">help center</h4>
              <p className="offer-text">dedicated 24/7 support</p>
            </div>
            <div className="offer-content">
              <img className="offer-img" alt="img"></img>
              <h4 className="offer-header">online discount</h4>
              <p className="offer-text">add multi-buy discounts</p>
            </div>
          </div>
        </div>
        <div className="main-trends" id="trends">
          {
            trendsData.map((product, index) => {
              return(
                <Trends key={index} {...product}/>
              )
            })
          }
        </div>
      </div>
    </div>
  )
};

export default Home;