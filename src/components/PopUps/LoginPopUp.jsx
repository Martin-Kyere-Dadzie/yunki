import React from 'react'
import './LoginPopUp.scss'
import watermarkImage from '../../public/icons/form image.svg'
import closeBlack from '../../public/icons/close-black-icon.svg'
import { NavLink } from 'react-router-dom'

const LoginPopUp = (props) => {
  return (props.trigger) ? (
    <div className='popup login__popup'>
      <div className='popup-inner login-close'>
        <img alt='close-btn'
          src={closeBlack} 
          className='close-btn' 
          onClick={() => props.setTrigger(false)}>
        </img>
        <div className='watermark__img'>
          <img alt='img' src={watermarkImage}></img>
        </div>
        <div className='login__section'>
          <form className='login__form'>
            <label>Email</label>
            <input type='email' required placeholder='Enter your email'></input>
            <label>Password</label>
            <input type='password' required placeholder='Enter your password'></input>
            <button type='submit' className='login__btn'>Login</button>
            <h5 className='forgot__password'>Forgot your password?</h5>
            <h5 className='account__text'>Don't have an account? <NavLink className='.create__account'><span>Sign up</span></NavLink></h5>
          </form>
        </div>
      </div>
    </div>
  ) : "";
}

export default LoginPopUp;