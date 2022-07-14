import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from './components/Navbar';
import Signin from './components/pages/auth/signin';
import Signup from './components/pages/auth/signup';
import Products from './components/pages/products';
import ProductDetail from './components/pages/productDetail';
import Profile from './components/pages/profile';
import ProtectedRoute from './components/ProtectedRoute';
import React, { Fragment } from 'react';
import Basket from './components/pages/basket';
import Admin from './components/pages/admin';
import Home from './components/pages/admin/home';
import Error404 from './components/pages/error404';
import Order from './components/pages/admin/order';
import Product from './components/pages/admin/product';
import UpdateProduct from './components/pages/admin/updateProduct';
import AddProduct from './components/pages/admin/addProduct';


function App() {
  
  return (
 
      <Router>
       <Fragment>
        <Navbar/>
        <div className="App">
        <Routes>
        <Route exact path='/' element={<Products/>}/>
        <Route exact path='/' element={<ProtectedRoute/>}>
            <Route path='profile/:user_email' element={<Profile/>}/>
            <Route path='basket' element={<Basket/>}></Route>
        </Route>

        <Route path="admin" element={
          <ProtectedRoute admin={true} > <Admin/> </ProtectedRoute>
        } >
          <Route path='' element={<Home/>}/>
          <Route path='orders' element={<Order/>}/>
          <Route path='products' element={<Product/>}/>
          <Route path='products/:product_id' element={<UpdateProduct/>}/>
          <Route path='products/added' element={<AddProduct/>}/>
        </Route>

        <Route path="/product/:product_id" element={<ProductDetail/>}/>
        <Route path="signin" element={<Signin/>}/>
        <Route path="signup" element={<Signup/>}/>
        <Route path='*' element={<Error404/>} />
        </Routes>
        </div>
      </Fragment>  
  </Router>
  );
}
 


export default App;


