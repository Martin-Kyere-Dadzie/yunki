import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { useDispatch, useSelector } from 'react-redux'
import './Subtotal.scss'
import { trendActions } from '../Redux/trendSlice'
// import { Value } from 'sass'

const Subtotal = () => {

    const dispatch = useDispatch();

    const clearBag = () => {
        dispatch(trendActions.clearBag())
    }
    
    let total = 0;
    const itemList = useSelector(state => state.topTrends.itemList)

    itemList.forEach(item => {
        total += item.totalPrice;
    });
    const quantity = useSelector(state => state.topTrends.totalQuantity)
  return (
        <div className='totalSum__container'>
            <div className='quantity__items'>
                <h6 className='delivery'>number of Items:</h6>
                <h6 className='number'>{quantity}</h6>
            </div>
            <div className='quantity__items'>
                <h6 className='delivery'>Delivery:</h6>
                <h6 className='number'>{0}</h6>
            </div>
            <div className='quantity__items'>
                <h6 className='delivery'>Total</h6>
                <h6 className='number'>{total}</h6>
            </div>
            <button className='checkout__btn'>Confirm Order</button>
        </div>
  )
}

export default Subtotal