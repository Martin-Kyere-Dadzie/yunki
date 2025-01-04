import React, { useState } from 'react'
import { PetShopSliderData } from './PetShopSliderData';
import '../PetsShop/PetsShop.scss';
import './ImageSlider.scss'
import angleLeft from '../../public/icons/carousel-left.svg';
import angleRight from '../../public/icons/carousel-right.svg';

const ImageSlider = ({slides}) => {

const [currentSlide, setCurrentSlide] = useState(0);

const prev = () => {
    const isFirstSlide = currentSlide === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentSlide - 1;
    setCurrentSlide(newIndex)
}

const next = () => {
    const isLastSlide = currentSlide === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentSlide + 1
    setCurrentSlide(newIndex)
}

const manualSlide = slideIndex => {
    setCurrentSlide(slideIndex)
}

const sliderHolder = {
    width: '100%',
    height: '100%',
    // backgroundColor: 'red'
}

const mainSlider = {
    position: 'relative',
    width: '80%',
    height: '100%',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundImage:`url(${PetShopSliderData[currentSlide].image})`
}

  return (
    <div style={sliderHolder}>
        <div className='slider__holder' style={mainSlider}></div>
        <div className='carousel__angle__holder'>
            <div className='carousel__container'>
              <img alt='img' src={angleLeft} onClick={prev}></img>
              <img alt='img' src={angleRight} onClick={next}></img>
            </div>
        </div>
        <div className='radioBtn__holder'>
            {
                slides.map((slide, slideIndex) => (
                    <div className='manualSlide__selector'>
                        <input type='radio' key={slideIndex}  onClick={() => manualSlide(slideIndex)}></input>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default ImageSlider