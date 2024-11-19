import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ShoppedProduct from '../Checkout/ShoppedProduct'
import './Checkout.scss'
import Subtotal from './Subtotal'
import { trendActions } from '../Redux/trendSlice'
import CheckoutDetails from './CheckoutDetails'

const Checkout = () => {

  const dispatch = useDispatch();

  const clearBag = () => {
    dispatch(trendActions.clearBag())
  }
  
  const trendItem = useSelector(state => state.topTrends.itemList)

  return (
    <div className='product-checkout-section'>
     <div className='product-checkout' id='productTo__buy'>
      <div className='shoppingBasket__header'>
        <h5>Order Summery</h5>
        <Subtotal/>
      </div>
        <ul className='products-contents'>
          {
            trendItem.map(item => (
              <li key={item.id} className='main-product'>
                <ShoppedProduct
                  className = 'product-to-checkout'
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
     <div className='delivery__information'>
          <h5>Delivery Information</h5>
          <CheckoutDetails/>
     </div>
    </div>
  )
}

export default Checkout