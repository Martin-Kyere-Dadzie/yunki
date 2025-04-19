import React from 'react'
import { useState, useEffect } from 'react'
import {MenShopSliderData} from  './MensShopSliderData';


const MensShopSlider = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const slideLength = MenShopSliderData.length;

    const autoScroll = true;
    let slideInterval;
    let intervalTime = 21000;

    const nexSlide = () => {
        setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    }

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1)
    }

    function auto(){
        slideInterval = setInterval(nexSlide, intervalTime)
    }

    useEffect(() => {
        setCurrentSlide(0)
    }, []);

    useEffect(() => {
        if (autoScroll) {
            auto()
        }
        return() => clearInterval(slideInterval);
    }, [currentSlide]);

  return (
    <div className='slider'>
            {
                MenShopSliderData.map((slide, index) => {
                    return(
                        <div className={index === currentSlide ? "slide current" : "slide"} key={index}>
                            {
                                index === currentSlide && (
                                    <>
                                        <img alt='img' src={slide.image}></img>
                                        <p>{slide.title}</p>
                                    </>
                                )
                            }
                        </div>
                    )
                })
            }
        </div>
  )
}

export default MensShopSlider;