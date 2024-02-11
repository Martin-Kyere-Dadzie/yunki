import React from "react";
import './Home.scss';
// import HomeTopLinks from "../WhyUs/HomeTopLinks";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-section">
      <div className="stores-shortcut__links">
        <NavLink to="/pets"  className="store-shortcut pets"><div></div></NavLink>
        <NavLink to="/women" className="store-shortcut women"><div></div></NavLink>
        <NavLink to="/food" className="store-shortcut food"><div></div></NavLink>
        <NavLink to="/fashionAndBeauty" className="store-shortcut fashion-and-beauty"><div></div></NavLink>
        <NavLink to="/men" className="store-shortcut men"><div></div></NavLink>
        <NavLink to="/electronics" className="store-shortcut Electrics"><div></div></NavLink>
      </div>
    </div>
  )
};

export default Home;