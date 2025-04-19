import {useEffect, useState} from 'react';
import { SkincareShopSliderData } from './SkinCareShopSliderData';
// import './WomenShopSlider.scss';

const SkinCareSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideLength = SkincareShopSliderData.length;

    const autoScroll = true;
    let slideInterval;
    let intervalTime = 15000;

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
            SkincareShopSliderData.map((slide, index) => {
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

export default SkinCareSlider;