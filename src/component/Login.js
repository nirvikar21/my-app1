import React, { useState,useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from './Header.js';


const Login=()=>{
  const[email,setEmail]=useState();
  const[password,setPassword]=useState();
  const history=useHistory("");
  useEffect(()=>{
    if(localStorage.getItem('user-info')){
        history.push('/home');
    }
  });

  function Login(){
    console.log(email,password);
  var formBody = [];
  formBody=["email="+email, "password="+password];
  formBody = formBody.join("&");
    fetch('https://reqres.in/api/login',{
        method:'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: formBody
        
    }).then((resp)=>{
        resp.json().then((result)=>{
            console.log("--=",result.token); 
            if(result.token){
              localStorage.setItem("user-info",JSON.stringify(result));
               history.push('/home');
            } 
        })
    })
    
    
 }
  return(
    <>
    <Header/>
  
  
      <div className="col-sm-6 offset-sm-3">
          <h1>Login Page</h1>
          <input type="text" className="form-control" name="email" onChange={(e)=>setEmail(e.target.value
          )} placeholder="Email"/><br/>
          <input type="password" className="form-control" onChange={(e)=>setPassword(e.target.value
          )} placeholder="Password"/><br/>   
          <button name="btn" className="btn btn-primary" onClick={Login}>Submit</button>
      </div>
    </>
  );
  
   
  
  }
    export default Login;