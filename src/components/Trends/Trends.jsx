import React from 'react';
import starFill from '../../public/icons/star-fill.svg';
import starHalve from '../../public/icons/star-outline-half.svg';
import starOutline from '../../public/icons/star-outline.svg';
import './Trends.scss';
import { useDispatch, useSelector } from 'react-redux';
// import { trendActions } from '../Redux/trendSlice';
import { trendActions } from '../Redux/trendSlice';
// import { UseDispatch, useSelector } from 'react-redux';

const Trends = ({images, name, newPrice, oldPrice, title, colors, ratings, id, discount, newItem}) => {

    const dispatch = useDispatch();
    const addToTrends = () => {
        dispatch(trendActions.addToTrends({
            images,
            name,
            title,
            colors,
            newPrice,
            oldPrice,
            id,
            ratings,
            discount,
            newItem,
        }))
    }

    // product ratings

    const productRates = Array.from({length: 5}, (elem, index) => {
        let number = index + 0.5;

        return(
            <span key={index}>
                {
                    ratings >= index + 1 ? (<img alt='img' src={starFill} className='star-fill'></img>):
                    ratings >= number ? (<img alt='img' src={starHalve} className='star-halve'></img>):
                    (<img alt='img' src={starOutline} className='start-outline'></img>)
                }
            </span>
        )
    })

  return (
    <div className='trends__section'>
        <div className='product-image'>
            {
                images.map((image) => (
                    <img
                        src={image.image}
                        alt='img'
                        className='product__image'
                    ></img>
                ))
            }
            <div className='new-discount'>
                {
                    Array(newItem).fill().map((_, i) => (
                        <h6 className='new-text'>new</h6>
                    ))
                }
                {
                    Array(discount).fill().map((_, i) => (
                        <h6 className='discount-text'>{discount}</h6>
                    ))
                }
            </div>
        </div>
        <div className='product-details'>
            <div className='text-section'>
                <p className='product-name'>{name}</p>
                <p className='product-title'>{title}</p>
            </div>
            <div className='rating-section'>
                {productRates}
            </div>
            <div className='product-price'>
                <h5 className='new-price'>{newPrice}</h5>
                <h5 className='old-price'>{oldPrice}</h5>
            </div>
        </div>
        <div className='button-section'>
            <button onClick={addToTrends} className='bag-btn'>add to bag</button>
        </div>
    </div>
  )
}

export default Trends;