import React from 'react'
import '../Trends/Trends.scss'
import './ShoppedProduct.scss'
import { trendActions } from '../Redux/trendSlice'
import { useDispatch } from 'react-redux'
import starFill from '../../public/icons/star-fill.svg';
import starHalve from '../../public/icons/star-outline-half.svg';
import starOutline from '../../public/icons/star-outline.svg';
import heartDarkIcon from '../../public/icons/heart-black-icon.svg';
import closeBtn from '../../public/icons/close-btn.svg';
// import Ratings from '../Ratings/Ratings';
// import shoppingBagWhite from '../../public/icons/shopping-bag-icon.svg';

const ShoppedProduct = ({images, name, newPrice, oldPrice, title, colors, ratings, id, discount, newItem}) => {

    const dispatch = useDispatch()
    const incrementTrend = () => {
        dispatch(trendActions.addToTrends({
            id,
            oldPrice,
            newPrice,
            name,
            images,
            title,
            colors,
            ratings,
            discount,
            newItem
        }))
    }

    const decrementTrend = () => {
      dispatch(trendActions(id))
    }

    const deletTrend = () => {
      dispatch(trendActions.deletTrend(id))
    }

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
    <div className='trends__section trends'>
      <div className='product-image'>
            {
                images.map((image) => (
                    <img
                        src={image.image}
                        alt='img'
                        className='main__image'
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
            <div className='icons__section'>
                <div className='heart-icon icon-container'>
                    <img className='icon-img heart-img' src={closeBtn} alt='img'></img>
                </div>
                <div className='shopping-bag icon-container'>
                    <img className='icon-img bag-img' alt='img' src={heartDarkIcon}></img>
                </div>
            </div>
      </div>
      <div className=''>
            <div className='text-section main-text'>
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
    </div>
  )
}

export default ShoppedProduct