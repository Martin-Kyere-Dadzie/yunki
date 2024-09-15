import React from 'react';
import './App.css';
// pages links
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Checkout from './components/Checkout/Checkout';
import Wishlist from './components/Wishlist/Wishlist';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Services from './components/Services/Services';
import WholeSales from './components/Wholesales/Wholesales';
import PetsShop from './components/PetsShop/PetsShop';
import WomenShop from './components/WomenShop/WomenShop';
import FoodShop from './components/FoodShop/FoodShop';
import FashionAndBeauty from './components/FashionAndBeauty/FashionAndBeauty';
import MenShop from './components/MenShop/MenShop';
import Electronics from './components/Electronics/Electronics';
//pages links ends

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Footer from './components/Footer/Footer';

function App() {

  const trendItems = useSelector(state => state.topTrends.itemList)
    console.log(trendItems);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/checkout' element={<Checkout/>}></Route>
          <Route path='/wishlist' element={<Wishlist/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/blog' element={<Blog/>}></Route>
          <Route path='/services' element={<Services/>}></Route>
          <Route path='/pets' element={<PetsShop/>}></Route>
          <Route path='/women' element={<WomenShop/>}></Route>
          <Route path='/food' element={<FoodShop/>}></Route>
          <Route path='/fashionAndBeauty' element={<FashionAndBeauty/>}></Route>
          <Route path='/men' element={<MenShop/>}></Route>
          <Route path='/electronics' element={<Electronics/>}></Route>
          <Route path='/wholesales' element={<WholeSales/>}></Route>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
