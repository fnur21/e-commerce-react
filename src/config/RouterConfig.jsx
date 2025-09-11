import React from 'react'
import { Routes,Route } from 'react-router-dom';
import Home from '../pages/Home';
import ProductDetails from '../components/ProductDetails';
import Auth from "../login/Auth"; // Login/Register sayfan

function RouterConfig() {
  return (
    <Routes>

<Route path='/' element={<Home/>} />
   <Route path="/auth" element={<Auth />} />
<Route path='/product-details/:id' element={<ProductDetails/>} />

 </Routes>
  )
}

export default RouterConfig