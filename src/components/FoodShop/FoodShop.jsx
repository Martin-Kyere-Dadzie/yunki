import React from 'react';
import bannerImage from '../../public/images/istockphoto-1220319507-2048x2048.jpg';
import foodShopTopLinks from './FoodShopTopLinks';
import { NavLink } from 'react-router-dom';
import './FoodShop.scss'
import { trendsData } from '../Trends/TrendsData';
import Trends from '../Trends/Trends';

const FoodShop = () => {
  return (
    <div className='foodShop__container'>
      <div className='banner__section'>
        <img alt='img' src={bannerImage}></img>
        <h1>Tasty & Healthy Organic Foods</h1>
      </div>
      <div className='foodShop__topLinks'>
        <div className='text__container'>
          <h1>We Have Done</h1>
        </div>
        <ul>
          {
            foodShopTopLinks.map(links => {
              return <NavLink
                key={links.name}
                className='top__links'
                id="link"
                to={links.route}
                href={links.route}>
                <img src={links.url} alt="img" className='topLink-image'></img>
                <h4>{links.name}</h4> 
              </NavLink>
            })
          }
        </ul>
      </div>
      <div className='allFoodsProducts__display'>
          {
            trendsData.map((product, index) => {
              if (product.productType === 'grocery') {
                return(
                  <Trends key={index} {...product}/>
                )
              } else {
                return(
                  null
                )
              }
            })
          }
      </div>
    </div>
  )
};

export default FoodShop;