import React, { useState } from 'react';
import './PetsShop.scss';
import petsBannerImage from '../../public/images/hamster-basket-isolated-white-table_2829-19759.png';
import catImage from '../../public/images/bengal-cat-studio_87557-3561.png';
import dogImage from '../../public/images/young-jack-russel-terrier-toys_87557-7792.png';
import birdImage from '../../public/images/ara-ararauna-studio_87557-2719.png';
import { PetShopSliderData } from './PetShopSliderData';
import ImageSlider from './ImageSlider';
import { trendsData } from '../Trends/TrendsData';
import AllPetsProducts from './AllPetsProducts';
import Trends from '../Trends/Trends';

const PetsShop = ({slides}) => {

  return (
    <div className='pets__banner__section'>
      <div className='big__banner'>
        <div className='slider__holder'>
          <div className='pets__banner__img banner__item'>
            {
              // PetShopSliderData.map((images) => {
              //   return(
              //     <img alt='img' src={images.image}></img>
              //   )
              // })
            }
            <ImageSlider slides = {PetShopSliderData}/>
          </div>
          <div className='pets__banner__text banner__item'>
            {
              PetShopSliderData.map((texts) => {
                return(
                      <h2 className='carousel__title'>{texts.title}</h2>
                    )
                  })
              }
          </div>
        </div>
        <div className='link__holder'>
          <div className='link one'>
            <h2>Save Big, Make Pet Giggle And Wiggle!</h2>
            <button className='banner__btn'>shop now</button>
            <img alt='img' src={dogImage}></img>
          </div>
          <div className='link two'>
            <h2>Satisfy Your Cat with Quality Cat Foods</h2>
            <button className='banner__btn'>shop now</button>
            <img alt='img' src={catImage}></img>
          </div>
          <div className='link three'>
            <h2>Enjoy Discounts On Nutritious Bird Foods</h2>
            <button className='banner__btn'>shop now</button>
            <img alt='img' src={birdImage}></img>
          </div>
        </div>
      </div>
      <div className='petsCare__contents'>
        <div className='petsCare__holder'>
          <div className='care__contents'></div>
          <div className='care__contents'></div>
          <div className='care__contents'></div>
        </div>
      </div>
      <div className='allPetsProducts__display'>
        {
          trendsData.map((product, index) => {
            if (product.productType === 'pets') {
              return(
                <Trends key={index} {...product}/>
              )
            } 
          })
        }
      </div>
      </div>
  )
}

export default PetsShop