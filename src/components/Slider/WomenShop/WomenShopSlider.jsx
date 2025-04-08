import {useState} from 'react';
import { womenSliderData } from './WomenSliderData';
import './WomenShopSlider.scss';

const WomenShopSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
  return (
    <div className='slider'>
        {
            womenSliderData.map((slide, index) => {
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

export default WomenShopSlider