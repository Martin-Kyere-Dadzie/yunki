import React from 'react'
import { useSelector } from 'react-redux'
import ShoppedProduct from '../Checkout/ShoppedProduct'
import './Checkout.scss'
import Subtotal from './Subtotal'

const Checkout = () => {

  const trendItem = useSelector(state => state.topTrends.itemList)

  return (
    <div className='product-checkout-section'>
     <div className='product-checkout'>
      <div className='shoppingBasket__header'>
        <h4>Your Shopping Items List</h4>
        <Subtotal/>
      </div>
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
                  newProduct={item.newProduct}
                  quantity={item.quantity}
                  price={item.totalPrice}
                />
              </li>
            ))
          }
      </ul>
     </div>
     <div className='checkout-totalPrice-section'>
     
     </div>
    </div>
  )
}

export default Checkout