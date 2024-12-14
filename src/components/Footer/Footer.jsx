import React, { useEffect, useState } from 'react'
import '../Footer/Footer.scss'
import facebookIcon from '../../public/icons/icons8-facebook.svg';
import instagramIcon from '../../public/icons/icons8-instagram.svg';
import twitterIcon from '../../public/icons/icons8-twitter.svg';
import toTopIcon from '../../public/icons/carousel-up-icon.svg';
import whatsappIcon from '../../public/icons/icons8-whatsapp.svg';
import footerLogo from '../../public/icons/yunki-black-logo.svg';
import FooterLinks from './FooterLinks';
import { NavLink } from 'react-router-dom';
import LoginPopUp from '../PopUps/LoginPopUp';
// import { activeLinkStyle } from '../ActiveConfig/ActiveConfig';

const Footer = () => {
    const top = () => {
        window.scrollTo(0, 0)
    };

  return (
      <div className='footer-section'>
        <div className='top__btn' onClick={top}>
            <div className='top-content-holder'>
                <h5>Back to Top</h5>
                <img alt='img' src={toTopIcon}></img>
            </div>
        </div>
        <div className='social-media-section'>
            <div className='line left-line'></div>
            <div className='social-media-icons'>
                <img src={facebookIcon} alt='img'></img>
                <img src={instagramIcon} alt='img'></img>
                <img src={twitterIcon} alt='img'></img>
                <img src={whatsappIcon} alt='img'></img>
            </div>
            <div className='line right-line'></div>
        </div>
        <div className='copyright-section'>
            <div className='footer-logo-section'>
                <img alt='img' src={footerLogo}></img>
            </div>
            <div className='copyright-text'>
                <p>copyright &copy; 2024 Yunki, Inc.</p>
            </div>
        </div>
        <div className='footer-link-section'>
            <ul className='links-holder' id='link'>
                {
                    FooterLinks.map(links => {
                        return <NavLink className="main-nav-link" id='nav-link'>
                            {links.name}
                        </NavLink>
                    })
                }
            </ul>
        </div>
    </div>
  )
}

export default Footer