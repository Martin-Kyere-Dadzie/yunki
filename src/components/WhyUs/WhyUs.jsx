import React from 'react';
import './WhyUs.scss';
import HomeTopLinks from './HomeTopLinks';
import { NavLink } from 'react-router-dom';

const WhyUs = () => {
  return (
    <div className="small-shortcut__links">
    <ul className="topLinks-container">          
      {
        HomeTopLinks && HomeTopLinks.map(topLinks => {
          return <NavLink 
            key={topLinks.id} 
            to={topLinks.route} 
            href={topLinks.route} 
            className='topLinks'
          >
            <h5>{topLinks.name}</h5>
            <img src={topLinks.imgUrl} alt='link'></img>
          </NavLink>
        })
      }
    </ul>
  </div>
  )
}

export default WhyUs