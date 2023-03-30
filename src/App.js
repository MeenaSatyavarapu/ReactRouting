import React from 'react';
import {Link , Route, Routes, Outlet} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Products from './components/Products';
import About from './components/About';
import Navbar from './components/Navbar';
import OrderSummary from './components/OrderSummary';
function App() {
  return (
    <>
      <Navbar/>
      <main>
        <Routes>
          <Route exact path = "/" element={<Home /> } />
          <Route path = "/Products" element={<Products/> } />
          <Route path = "/About" element={<About/> } />
          <Route path = "/order-summary" element={<OrderSummary/> } />
        </Routes>
      </main>
      </>
  );
}

export default App;
