import React from 'react'
import { trendActions } from '../Redux/trendSlice'
import { useDispatch } from 'react-redux'

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

  return (
    <div>
      {
        images.map(image => (
          <img 
            alt='img' 
            className='product-img' 
            src={image.image}>
          </img>
        ))
      }
      <h4>{newPrice}</h4>
    </div>
  )
}

export default ShoppedProduct