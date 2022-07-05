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
         </Route>
        <Route path="/product/:product_id" element={<ProductDetail/>}/>
        <Route path="signin" element={<Signin/>}/>
        <Route path="signup" element={<Signup/>}/>
        
        </Routes>
        </div>
      </Fragment>  
  </Router>
  );
}
 


export default App;


