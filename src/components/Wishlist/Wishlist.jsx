import React from 'react';
import './Wishlist.scss';
import { useDispatch, useSelector } from 'react-redux';
import { wishActions } from '../Redux/wishSlice';
import WishToBuy from './WishToBuy'

const Wishlist = () => {

  const dispatch = useDispatch();

  // const clearWishlist = () => {
  //   dispatch(wishActions.clearBag())
  // };

  const wishItem = useSelector(state => state.wishListed.wishlist);

  return (
    <div className='wishlist__container'>
      <div className='trend__summery'>Wish Summery</div>
      <ul className='wishlist__contents'>
        {
          wishItem.map(item => (
            <li key={item.id} className='main-product'>
              <WishToBuy
                className='wished-product'
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
  )
};

export default Wishlist;