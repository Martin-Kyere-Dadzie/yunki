import React, { useEffect, useState } from "react";
import './Home.scss';
//fonts
import '../../Fonts/Roboto-Medium.ttf'
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
import userMultiple from '../../public/icons/user-multiple.svg';
import handsIcon from '../../public/icons/handshake-icon.svg';
import helpIcon from '../../public/icons/help-icon.svg';
import discountIcon from '../../public/icons/discount-icon.svg';
import flameIcon from '../../public/icons/flame-icon.svg';
import PrevIcon from '../../public/icons/carousel-left.svg'
import nextIcon from '../../public/icons/carousel-right.svg'
//icons images
import giftIcon from "../../public/icons/gift-ic0n.svg"
import { trendsData } from "../Trends/TrendsData";
import Trends from "../Trends/Trends";
import LoginPopUp from "../PopUps/LoginPopUp";
import DealOfTheDay from "../DealOfTheDay";
import productType from "../Trends/ProductType";
import WomenShopSlider from "../Slider/WomenShop/WomenShopSlider";
import PetsShopSlider from "../Slider/PetsShop/PetsShopSlider";
import ElectronicsShopSlide from "../Slider/ElectronicsShop/ElectronicsShopSlide"
import GroceriesShop from "../Slider/Groceries/GroceriesShopSlide";
// import Marquee from "react-fast-marquee";

//store images end

const Home = () => {

  const [signInPupUp, setSignInPopUp] = useState(false)

  useEffect(() => {
      setTimeout(() => {
          setSignInPopUp(true)
      }, 6000)
  }, [])
  
  return (
    <div className="home-section">
      <div className='login__popUp'>
        <LoginPopUp trigger={signInPupUp} setTrigger={setSignInPopUp}></LoginPopUp>
      </div>
      <div className="stores-shortcut__links">
        <NavLink to="/pets"  className="store-shortcut pets" id="pet-store">
          <div className="imageText-container">
            <PetsShopSlider/>
          </div>
        </NavLink>
        <NavLink to="/women" className="store-shortcut women" id="women-store">
          <div className="imageText-container">
            <WomenShopSlider />
          </div>
        </NavLink>
        <NavLink to="/electronics" className="store-shortcut electronics" id="electronic-store">
          <div className="imageText-container">
            <ElectronicsShopSlide/>
          </div>
        </NavLink>
        <NavLink to="/food" className="store-shortcut food" id="food-store">
          <div className="imageText-container">
            <GroceriesShop/>
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
      <h1>What Yunki Offers You?</h1>
        <div className="trends-contents-holder">
          <div className="offers-section" id="offer">
            <div className="offer-content">
              <img className="offer-img gift" alt="img" src={giftIcon}></img>
              <h4 className="offer-header">Free Gifts With Purchase</h4>
              <p className="offer-text">Our enterprise customer receives dedicated amount management, special discount offers and better payment systems.</p>
            </div>
            <div className="offer-content">
              <img className="offer-img" alt="img" src={userMultiple}></img>
              <h4 className="offer-header">Customer Loyalty Discount</h4>
              <p className="offer-text">Our enterprise customer receives dedicated amount management, special discount offers and better payment systems. <NavLink to='/' className='offer-link'>Apply for a Customer loyalty Discount</NavLink> today.</p>
            </div>
            <div className="offer-content">
              <img className="offer-img" alt="img" src={helpIcon}></img>
              <h4 className="offer-header">24/7 customer support</h4>
              <p className="offer-text">
                we ensure that assistance is available
                whenever our customers needs it,
                regardless of time zero, by offering
                24/7 support to our diverse customer 
                base to enhance convenience, and ensure 
                that potential problems are addressed 
                promptly.
              </p>
            </div>
            <div className="offer-content">
              <img className="offer-img" alt="img" src={discountIcon}></img>
              <h4 className="offer-header">Quantity Discount Sales</h4>
              <p className="offer-text">Our enterprise customer receives dedicated amount management, special discount offers and better payment systems.</p>
            </div>
            <div className="offer-content">
              <img className="offer-img" alt="img" src={flameIcon}></img>
              <h4 className="offer-header">Flash Sales / One-Day Sales</h4>
              <p className="offer-text">Our enterprise customer receives dedicated amount management, special discount offers and better payment systems.</p>
            </div>
            <div className="offer-content">
              <img className="offer-img" alt="img" src={handsIcon}></img>
              <h4 className="offer-header">Contests & Giveaway Promotions</h4>
              <p className="offer-text">Our enterprise customer receives dedicated amount management, special discount offers and better payment systems.</p>
            </div>
          </div>
        </div>
        <div className="main-trends" id="trends">
          <div className="topTrending__section product__holder">
            <div className="trend__text">
            <div className="empty"></div>
              <h3>Our Most Trending Products</h3>
              <NavLink className="trends__link">Shop Now</NavLink>
            </div>
            <div className="topTrends__products">
              {
                trendsData.map((product, index) => {
                  if (product.ratings >= 4) {
                    return(
                      <Trends key={index} {...product}/>
                    )
                  } else{
                    return(
                      null
                    )
                  }
                })
              }
            </div>
            <div className="carousel__icons">
              <img alt="img" src={PrevIcon} className="prev"></img>
              <img alt="img" src={nextIcon} className="next"></img>
            </div>
          </div>
          <div className="productList__links">
              <ul>
                {
                  productType.map(links => {
                    return <NavLink
                      key={links.name}
                      className='product__links'
                      id="link"
                      to={links.route}
                      href={links.route}>
                      <img src={links.url} alt="img"></img>
                      <h4>{links.name}</h4> 
                    </NavLink>
                  })
                }
              </ul>
          </div>
          <div className="product__holder allProduct__holder" id="trends">
            {
              trendsData.map((product, index) => {
                if (product.ratings < 4) {
                  return(
                    <Trends key={index} {...product}/>
                  )
                } else{
                  return(
                    null
                  )
                }
              })
            }
          </div>
        </div>
      </div>
      <div className="deal__section">
          <DealOfTheDay/>
      </div>
    </div>
  )
};

export default Home;