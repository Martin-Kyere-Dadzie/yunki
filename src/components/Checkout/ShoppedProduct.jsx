import React from 'react'
import '../Trends/Trends.scss'
import { trendActions } from '../Redux/trendSlice'
import { useDispatch } from 'react-redux'
// import starFill from '../../public/icons/star-fill.svg';
// import starHalve from '../../public/icons/star-outline-half.svg';
// import starOutline from '../../public/icons/star-outline.svg';
import heartDarkIcon from '../../public/icons/heart-black-icon.svg';
import shoppingBagDarkIcon from '../../public/icons/shopping-bag-black-icon.svg';
// import Ratings from '../Ratings/Ratings';
// import shoppingBagWhite from '../../public/icons/shopping-bag-icon.svg';

function ShoppedProduct({images, name, newPrice, oldPrice, title, colors, ratings, id, discount, newItem}) {
  

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

  //   const productRates = Array.from({length: 5}, (elem, index) => {
  //     let number = index + 0.5;

  //     return(
  //         <span key={index}>
  //             {
  //                 ratings >= index + 1 ? (<img alt='img' src={starFill} className='star-fill'></img>):
  //                 ratings >= number ? (<img alt='img' src={starHalve} className='star-halve'></img>):
  //                 (<img alt='img' src={starOutline} className='start-outline'></img>)
  //             }
  //         </span>
  //     )
  // })

  return (
    <div className='trends__sections'>
      <div className='product-image'>
        <div>
            {
                images.map((image) => (
                    <img
                        src={image.image}
                        alt='img'
                        className='main__image'
                    ></img>
                ))
            }
        </div>
      </div>
        <h3>{name}</h3>
    </div>
  )
}

export default ShoppedProduct