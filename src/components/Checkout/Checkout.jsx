import React from 'react'
import { useSelector } from 'react-redux'
import ShoppedProduct from '../Checkout/ShoppedProduct'

const Checkout = () => {

  const trendItem = useSelector(state => state.topTrends.itemList)

  return (
    <div>
    <ul>
      {
        trendItem.map(item => (
          <li key={item.id}>
            <ShoppedProduct
              id={item.id}
              images={item.images}
              name={item.name}
              oldPrice={item.oldPrice}
              newPrice={item.newPrice}
              title={item.title}
              colors={item.colors}
              ratings={item.ratings}
              discount={item.discount}
              newItem={item.newItem}
            />
          </li>
        ))
      }
  </ul>
    </div>
  )
}

export default Checkout