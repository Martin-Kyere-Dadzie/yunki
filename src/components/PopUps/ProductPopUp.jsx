import React from 'react'
import closeBlack from '../../public/icons/close-black-icon.svg'
import './ProductPopUp.css';
import { trendsData } from '../Trends/TrendsData'
import { useDispatch, useSelector } from 'react-redux';
import { trendActions } from '../Redux/trendSlice';
import ShoppedProduct from '../Checkout/ShoppedProduct';
import ProductPopUpDisplay from './ProductPopUpDisplay';

function ProductPopUp(props, {images, name, newPrice, oldPrice, price, title, colors, ratings, id, discount, newProduct, quantity}) {
  
  const trendItem = useSelector(state => state.topTrends.itemList)

    return (props.trigger) ? (
        <div className="popup">
          <div className="popup-inner">
              <img alt='close-btn'
               src={closeBlack} 
               className='close-btn' 
               onClick={() => props.setTrigger(false)}
               onMouseOver={e => (e.currentTarget.src = closeBlack)}
               onMouseLeave={e => (e.currentTarget.src = closeBlack)}>
               </img>
               <div className='imageDisplay__section content__holder'>
                  {
                    trendItem.map(item => (
                      <li key={item.id}>
                        <ProductPopUpDisplay
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
                  <div className='imageSelected__container'></div>
               </div>
               <div className='imageContents__section content__holder'>
               
               </div>
            { props.children }
          </div>
        </div>
      ) : "";
}

export default ProductPopUp