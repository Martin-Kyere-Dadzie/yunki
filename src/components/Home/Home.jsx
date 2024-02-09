import React from "react";
import './Home.scss';
import HomeTopLinks from "./HomeTopLinks";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-section">
      <div className="stores-shortcut__links">
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
                  <img src={topLinks.image} alt='link'></img>
                </NavLink>
              })
            }
          </ul>
        </div>
        <div className="big-shortcut__links"></div>
      </div>
    </div>
  )
};

export default Home;