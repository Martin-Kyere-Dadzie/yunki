import React from 'react'
import '../Checkout/Checkout.scss'
import './WishSubtotal.scss'
import { useDispatch, useSelector } from 'react-redux';
import { wishActions } from '../Redux/wishSlice';

const WishSubtotal = () => {
    const dispatch = useDispatch();

    const clearBag = () => {
        dispatch(wishActions.clearBag())
    }
    
    let total = 0;
    const itemList = useSelector(state => state.wishListed.wishlist)

    itemList.forEach(item => {
        total += item.totalPrice;
    });
    const quantity = useSelector(state => state.wishListed.numOfWish)
  return (
        <div className='wish__total__container'>
            <div className='num__items holder'>
                <h6 className='text item__num'>number of Items:</h6>
                <h6 className='quantity quantity__text'>{quantity}</h6>
            </div>
            <div className='delivery__section holder'>
                <h6 className='text delivery'>Delivery:</h6>
                <h6 className='quantity number'>{0}</h6>
            </div>
            <div className='total__section holder'>
                <h6 className='text total__text'>Total</h6>
                <h6 className='quantity total__sum'>{total}</h6>
            </div>
        </div>
  )
}

export default WishSubtotal