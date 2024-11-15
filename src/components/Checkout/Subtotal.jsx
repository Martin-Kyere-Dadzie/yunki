import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { useSelector } from 'react-redux'
import { Value } from 'sass'

const Subtotal = () => {
    const quantity = useSelector(state => state.topTrends.totalQuantity)
  return (
    <div className='totalSum__container'>
        <CurrencyFormat
            renderText={() => (
                <>
                    <p>
                        Subtotal({quantity} Items):
                        <strong>0</strong>
                    </p>
                    <small className='subtotal__gift'>
                        <input type='checkbox'/>this Order contains a gift
                    </small>
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