import React, { useState } from 'react'
import deliveryIcon from "../../public/icons/reshot-icon-pizza-delivery-NE62BC7Z4J.svg";
import pickUpIcon from "../../public/icons/reshot-icon-delivery-DRVHSK8Z9T.svg";
import './CheckoutDetails.scss'
// import {Datepicker} from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.module.css'

const CheckoutDetails = () => {

  const [selectDate, setSelectDate] = useState(null);

  return (
    <form className='delivery__information__container'>
      <div className='delivery__info'>
        <div className='delivery deliver'>
          <input type='checkbox'></input>
          <h5>Delivery</h5>
          <img alt='img' src={deliveryIcon}></img>
        </div>
        <div className='delivery pickup'>
          <input type='checkbox'></input>
          <h5>Pick up</h5>
          <img alt='img' src={pickUpIcon} className='pickUp__img'></img>
        </div>
      </div>
      <div className='location__details'>
        <div className='user__details'>
          <form className='details__form'>
            <label>Full Name</label>
            <input type='text' placeholder='Enter full name' required></input>
            <label>Email</label>
            <input type='email' placeholder='Enter email' required></input>
            <label>Location</label>
            <input type='text' placeholder='Enter location' required></input>
            <label>Address</label>
            <input type='text' placeholder='Enter address' required></input>
          </form>
        </div>
        <div className='user'>
          <form className='location__form'>
            <label>Phone Number</label>
            <input type='number' placeholder='Enter phone number' required></input>
            <label>City</label>
            <input type='text' placeholder='Enter city' required></input>
            <label>Zip Code</label>
            <input type='text' placeholder='Enter zip code' required></input>
          </form>
        </div>
      </div>
      <div className='schedule__delivery'>
        <h5>Schedule Delivery</h5>
        <div className='calender__date'>
          <form>
            <input type='datetime-local'></input>
          </form>
        </div>
      </div>
      <h5 className='payment-header'>Payment Method</h5>
      <div className='payment__method'>
        <div className='online__payment payment'>
          <input type='checkbox'></input>
          <h6>Online Payment</h6>
        </div>
        <div className='delivery__payment payment'>
          <input type='checkbox'></input>
          <h6>Cash on Delivery</h6>
        </div>
        <div className='delivery__payment payment'>
          <input type='checkbox'></input>
          <h6>Pay on Pick up</h6>
        </div>
      </div>
    </form>
  )
}

export default CheckoutDetails