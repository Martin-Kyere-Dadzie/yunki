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
        <CurrencyFormat
            renderText={() => (
                <>
                    <p>
                        Subtotal({quantity} Items):
                        <strong>{total}</strong>
                    </p>
                    <small className='subtotal__gift'>
                        <input type='checkbox'/>this Order contains a gift
                    </small>
                    <div onClick={clearBag}>clear bag</div>
                </>
            )}
            decimalScale={2}
            value={0}
            displayType={"text"}
            thousandSeparator={true}
        />
    </div>
  )
}

export default Subtotal