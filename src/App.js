import React from 'react';

import {BrowserRouter,Route} from 'react-router-dom';
import Home from './component/Home';
import Aboutus from './component/Aboutus';
import Contact from './component/Contact';
import Login from './component/Login';
import Register from './component/Register';
import Profile from './component/Profile';
import Addproduct from './component/Addproduct';
import Product from './component/Product';

const App=()=>{ 
  return (
      <>
      <BrowserRouter>
        <Route path="/" component="Home"><Home/></Route>
        <Route path="/home" component="Home"><Home/></Route>
        <Route path="/about"><Aboutus/></Route>
        <Route path="/contact"><Contact/></Route>
        <Route path="/login"><Login/></Route>
        <Route path="/register"><Register/></Route>
        <Route path="/profile"><Profile/></Route>
        <Route path="/addproduct"><Addproduct/></Route>
        <Route path="/product"><Product/></Route>
      </BrowserRouter>
       
      </>
  );
}
export default App;
