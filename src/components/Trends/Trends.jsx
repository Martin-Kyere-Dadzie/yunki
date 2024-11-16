import React, { useState } from 'react';
import starFill from '../../public/icons/star-fill.svg';
import starHalve from '../../public/icons/star-outline-half.svg';
import starOutline from '../../public/icons/star-outline.svg';
import './Trends.scss';
import { useDispatch } from 'react-redux';
import ProductPopUp from '../PopUps/ProductPopUp';
//icons image
import heartDarkIcon from '../../public/icons/heart-black-icon.svg';
import shoppingBagDarkIcon from '../../public/icons/shopping-bag-black-icon.svg';
import shoppingBagWhite from '../../public/icons/shopping-bag-icon.svg';
import quickViewIcon from '../../public/icons/quick-view-icon.svg'
import { trendActions } from '../Redux/trendSlice';
// import Ratings from '../Ratings/Ratings';
// import { UseDispatch, useSelector } from 'react-redux';

const Trends = ({images, name, newPrice, oldPrice, price, title, colors, ratings, id, discount, newProduct, quantity}) => {

    const [productPupUp, setProductPupUp] = useState(false);

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

    const dispatch = useDispatch();
    const addToTrends = () => {
        dispatch(trendActions.addToTrends({
            images,
            name,
            title,
            colors,
            newPrice,
            oldPrice,
            price,
            id,
            ratings,
            discount,
            newProduct,
            quantity
        }))
    }

return (
    <div className='trends__section'>
        <div className='product-image'>
            {
                images.map((image) => (
                    <img
                        src={image.image}
                        alt='img'
                        className='main__image'
                        onMouseOver={e => (e.currentTarget.src= image.image1)}
                        onMouseLeave={e => (e.currentTarget.src= image.image)}
                    ></img>
                ))
            }
            <div className='new-discount'>
                {
                    Array(newProduct).fill().map((_, i) => (
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
                    <img className='icon-img heart-img' src={heartDarkIcon} alt='img'></img>
                </div>
                <div className='shopping-bag icon-container' onClick={addToTrends}>
                    <img className='icon-img bag-img' alt='img' src={shoppingBagDarkIcon}></img>
                </div>
            </div>
        </div>
        <div className='product-details' id='details'>
            <div className='text-section'>
                <p className='product-name'>{name}</p>
                <p className='product-title'>{title}</p>
            </div>
            <div className='rating-section'>
                {productRates}
            </div>
            <div className='product-price'>
                <h5 className='new-price'>{price}</h5>
                <h5 className='old-price'>{oldPrice}</h5>
            </div>
        </div>
        <button 
            onClick={() => setProductPupUp(true)} 
            className='bag-btn'
        >
         <img 
            alt='img' 
            className='bag-icon' 
            src={quickViewIcon}
            onMouseOver={e => (e.currentTarget.src= shoppingBagWhite)}
            onMouseLeave={e => (e.currentTarget.src= shoppingBagDarkIcon)}>
         </img>
         <p>quick view</p>
        </button>
        <div className='popup-holder'>
            <ProductPopUp trigger={productPupUp} setTrigger={setProductPupUp} id='product-popup'></ProductPopUp>
        </div>
    </div>
  )
}

export default Trends;