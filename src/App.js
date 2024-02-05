import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Checkout from './components/Checkout/Checkout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Wishlist from './components/Wishlist/Wishlist';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Services from './components/Services/Services';
import WholeSales from './components/Wholesales/Wholesales';

function App() {
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
          <Route path='/wholesales' element={<WholeSales/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
