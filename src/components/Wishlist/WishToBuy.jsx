import React, { useState } from 'react'
import './WishToBuy.scss'
import { wishActions } from '../Redux/wishSlice'
import { useDispatch } from 'react-redux'
import bagIcon from '../../public/icons/shopping-bag-black-icon.svg';
import comments from '../../public/icons/comments.svg';
import ProductPopUp from '../PopUps/ProductPopUp';
import quickViewIcon from '../../public/icons/quick-view-icon.svg';
import starFill from '../../public/icons/star-fill.svg';
import starHalve from '../../public/icons/star-outline-half.svg';
import starOutline from '../../public/icons/star-outline.svg'
import closeCircleRed from '../../public/icons/close-circle-red.svg';
import { trendActions } from '../Redux/trendSlice';


const WishedProduct = ({images, name, newPrice, oldPrice, title, colors, ratings, id, discount, newProduct, price, quantity}) => {

  const [productPupUp, setProductPupUp] = useState(false);

  const dispatch = useDispatch()

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
  
    // const incrementBagItem = () => {
    //     dispatch(wishActions.addToWish({
    //         id,
    //         oldPrice,
    //         newPrice,
    //         price,
    //         name,
    //         images,
    //         title,
    //         colors,
    //         ratings,
    //         discount,
    //         newProduct,
    //         quantity
    //     }))
    // }

    const deleteFromWish = () => {
      dispatch(wishActions.deleteFromWish(id))
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
                  <button className='shopping-bag icon-container' onClick={addToTrends}>
                      <img className='icon-img bag-img' alt='img' src={bagIcon}></img>
                  </button>
                  <button className='comments icon-container'>
                      <img className='icon-img bag-img' alt='img' src={comments}></img>
                  </button>
                  <button 
                      onClick={ () => setProductPupUp(true)}
                      className='view icon-container'
                      >
                      <img 
                          alt='img' 
                          className='icon-img view-icon' 
                          src={quickViewIcon}>
                      </img>
                  </button>
              </div>
        </div>
        <div className='product-details checkout__details' id='details'>
              <div className='text-section main-text'>
                  <p className='product-name'>{name}</p>
                  <p className='product-title'>{title}</p>
              </div>
              <div className='rating-section checkout__ratings'>
                  {productRates}
              </div>
              <div className='product-price checkout__price'>
                  <h5 className='new-price'>{price}</h5>
                  <h5 className='old-price'>{oldPrice}</h5>
                  </div>
                  </div>
          <button className='removeFromBag-btn' onClick={deleteFromWish}>
              <h6 className='delete-text'>Remove</h6>
              <img
                  alt='img' src={closeCircleRed}>
              </img>
          </button>
          <div className='popup-holder'>
              <ProductPopUp trigger={productPupUp} setTrigger={setProductPupUp} id='product-popup'></ProductPopUp>
          </div>
      </div>
    )
}

export default WishedProduct