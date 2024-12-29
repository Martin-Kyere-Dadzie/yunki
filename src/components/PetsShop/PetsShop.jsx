import React from 'react';
import './PetsShop.scss';
import petsBannerImage from '../../public/images/pngaaa.com-3037481.png'

const PetsShop = () => {
  return (
    <div className='pets__banner__section'>
      <div className='big__banner'>
        <div className='slider__holder'>
          <div className='pets__banner__img banner__item'>
            <img alt='img' src={petsBannerImage}></img>
          </div>
          <div className='pets__banner__text banner__item'>
            <h2>Proident in cupidatat incididunt elit aute consectetur cupidatat ea veniam irure .</h2>
            <button className='banner__btn'>shop now</button>
          </div>
        </div>
        <div className='link__holder'>
          <div className='link one'>
            <img alt='img' src={catImag}></img>
            <h2>Satisfy Your Cat with Quality Cat Foods</h2>
          </div>
          <div className='link two'>
            <img alt='img' src={dogImage}></img>
            <h2>Save Big, Make Pet Giggle And Wiggle!</h2>
          </div>
          <div className='link three'>
            <img alt='img' src={birdImage}></img>
            <h2>Enjoy Discounts On Nutritious Bird Foods</h2>
          </div>
        </div>
      </div>
      </div>
  )
}

export default PetsShop