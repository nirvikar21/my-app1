import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './component/Home';
import Login from './component/Login';


const App=()=>{ 
  return (
      <>
      <BrowserRouter>
        <Route path="/home" exact component="Home"><Home/></Route> 
        <Route path="/login" exact><Login/></Route>
        <Route path="/" exact component="Home"><Home/></Route> 
      </BrowserRouter>
       
      </>
  );
}
export default App;
