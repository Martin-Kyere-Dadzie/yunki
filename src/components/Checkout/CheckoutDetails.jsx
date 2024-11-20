import React from 'react'
import './CheckoutDetails.scss'

const CheckoutDetails = () => {
  return (
    <form className='delivery__information__container'>
      <div className='delivery__information'>
        <div className='delivery deliver'>
          <input type='radio'></input>
          <h5>Delivery</h5>
        </div>
        <div className='delivery pickup'>
          <input type='radio'></input>
          <h5>Pick up</h5>
        </div>
      </div>
      <div className='location__details'>
        <div className='user__details'>
          <form className='details__form'>
            <label>Full Name</label>
            <input type='input' placeholder='Enter full name' required></input>
            <label>Email</label>
            <input type='input' placeholder='Enter email' required></input>
            <label>Location</label>
            <input type='input' placeholder='Enter location' required></input>
            <label>Address</label>
            <input type='input' placeholder='Enter address' required></input>
          </form>
        </div>
        <div className='user'>
          <form className='location__form'>
          <label>Phone Number</label>
          <input type='input' placeholder='Enter phone number' required></input>
          <label>City</label>
          <input type='input' placeholder='Enter city' required></input>
          <label>Zip Code</label>
          <input type='input' placeholder='Enter zip code' required></input>
          </form>
        </div>
      </div>
    </form>
  )
}

export default CheckoutDetails