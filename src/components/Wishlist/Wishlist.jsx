import React from 'react';
import './Wishlist.scss';
import { useDispatch, useSelector } from 'react-redux';
import { trendActions } from '../Redux/trendSlice';
import WishListed from './WishListed'

const Wishlist = () => {

  const dispatch = useDispatch();

  const clearWishlist = () => {
    dispatch(trendActions.clearBag())
  };

  const trendItem = useSelector(state => state.topTrends.itemList);

  return (
    <div className='wishlist__container'>
      <div className='trend__summery'></div>
      <ul className='wishlist__contents'>
        {
          trendItem.map(item => (
            <li key={item.id} className='main-product'>
              
            </li>
          ))
        }
      </ul>
    </div>
  )
};

export default Wishlist;