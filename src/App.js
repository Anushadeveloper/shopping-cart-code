import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Cart from './Cart/Cart'
import Product from './CartItems/CartItems'
 import { CartProvider } from './ContextCart/ContextCart'
import Orders from './OrderItems/OrderItems'

 import './App.css'
function App () {
  return (
        <CartProvider>
          <Router>
          <Routes>
            <Route path='/' element={<Product />} />
            <Route path='/Cart' element={<Cart />} />
            <Route path='/orders' element={<Orders />} />
          </Routes>
          </Router>
        </CartProvider>
  );
}
export default App






