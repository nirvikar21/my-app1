import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './component/Home';
import Login from './component/Login';
import RefForward from './component/RefForward';
import About from './component/About';
import Loadable from 'react-loadable';
import Loadable2 from './component/Loadable2'
import User from './component/User';


const App=()=>{ 
  return (
      <>
        <BrowserRouter>
          <Route path="/home" component={Home} exact></Route> 
          <Route path="/login" exact><Login/></Route>
          <Route path="/About" exact component="About"><About/></Route>
          <Route path="/user" exact component={User}></Route>  
          <Route path="/RefForward" exact component="RefForward"><RefForward/></Route> 
          <Route path="/Loadable" exact component="Loadable"><Loadable/></Route> 
          <Route path="/" exact component={Home}></Route>
        </BrowserRouter>
      </>
  );
}
export default App;
