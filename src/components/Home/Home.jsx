import React from "react";
import './Home.scss';
// import HomeTopLinks from "../WhyUs/HomeTopLinks";
import { NavLink } from "react-router-dom";
//store images
import PetsImage from "../../public/images/pngaaa.com-3037673.png";
import foodImage from "../../public/images/pngaaa.com-89266.png";
import phonesAndLaptops from "../../public/images/pngaaa.com-3403934.png";
import electronicImage from "../../public/images/pngaaa.com-3403775.png";
import skinCareImage from "../../public/images/pngaaa.com-4674620.png";
import kidsImage from "../../public/images/pngaaa.com-2739313.png";
//store images end

const Home = () => {
  return (
    <div className="home-section">
      <div className="stores-shortcut__links">
        <NavLink to="/pets"  className="store-shortcut pets">
          <div className="imageText-container">
            <img className="petImage" src={PetsImage} alt="pet"></img>
            <h5>pets</h5>
          </div>
        </NavLink>
        <NavLink to="/women" className="store-shortcut women">
          <div className="imageText-container">
            <h5>women</h5>
          </div>
        </NavLink>
        <NavLink to="/electronics" className="store-shortcut electronics">
          <div className="imageText-container">
            <img className="electronicsImage" src={electronicImage} alt="electronics"></img>
            <h5>electronics</h5>
          </div>
        </NavLink>
        <NavLink to="/food" className="store-shortcut food">
          <div className="imageText-container">
            <img className="foodImage" src={foodImage} alt="food"></img>
            <h5>
              food
            </h5>
          </div>
        </NavLink>
        <NavLink to="/men" className="store-shortcut men">
          <div className="imageText-container">
            <h5>men</h5>
          </div>
        </NavLink>  
        <NavLink to="/fashionAndBeauty" className="store-shortcut fashion-and-beauty">
          <div className="imageText-container">
            <img className="skinCareImage" src={skinCareImage} alt="skincare"></img>
            <h5>skin care</h5>
          </div>
        </NavLink>
        <NavLink to="/phonesAndLaptops" className="store-shortcut phones-laptops">
          <img className="phoneImage" src={phonesAndLaptops} alt="phones"></img>
          <div className="imageText-container">
            <h5>phones, laptops and accessories</h5>
          </div>
        </NavLink>
        <NavLink to="/kids" className="store-shortcut kids">
          <div className="imageText-container">
            <img className="kidsImage" src={kidsImage} alt="kidsImage"></img>
            <h5>kids</h5>
          </div>
        </NavLink>
      </div>
    </div>
  )
};

export default Home;