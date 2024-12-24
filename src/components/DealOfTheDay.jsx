import React from 'react'
import './DealOfTheDay.scss'
import dealImage from '../public/images/pngaaa.com-2606831.png'

const DealOfTheDay = () => {
  return (
    <div className='dealOfTheDay__container'>
        <div className='deal__img'>
            <img className='deal__item' alt='img' src={dealImage}></img>
        </div>
        <div className='deal__text'>
            <h5 className='deal__header'>Deal Of The Day!</h5>
            <h4 className='product__name'>Electronic and gas cooking stove for your kitchen</h4>
            <p className='product__title'></p>
            <div className='time__section'>
                <div className='time__header'>HURRY UP! OFFER ENDS IN</div>
                <div className='time__countdown'>
                    <div className='time__holder'>
                        <div className='time'><h4>0</h4></div>
                        <div className='indicator'>Days</div>
                    </div>
                    <div className='time__holder'>
                        <div className='time'><h4>0</h4></div>
                        <div className='indicator'>Hours</div>
                    </div>
                    <div className='time__holder'>
                        <div className='time'><h4>00</h4></div>
                        <div className='indicator'>Minutes</div>
                    </div>
                    <div className='time__holder'>
                        <div className='time'><h4>00</h4></div>
                        <div className='indicator'>Seconds</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DealOfTheDay