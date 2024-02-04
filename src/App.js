import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Checkout from './components/Checkout/Checkout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/checkout' element={<Checkout/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
