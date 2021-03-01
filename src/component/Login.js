import React, { useState,useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from './Header.js';


const Login=()=>{
  const[email,setEmail]=useState();
  const[password,setPassword]=useState();
  const[error,setError]=useState();
  const history=useHistory("");
  useEffect(()=>{
    if(localStorage.getItem('user-info')){
        history.push('/home');
    }
  });

  function Login(){
    
        const emailObj = document.getElementById('email');
        const passwordObj = document.getElementById('password');
        if(emailObj.value==''){
          emailObj.classList.add('border-danger');
          
        }else{
          emailObj.classList.remove('border-danger');

        }
        if(passwordObj.value==''){
          passwordObj.classList.add('border-danger');
          

        }else{
          passwordObj.classList.remove('border-danger');
        }
    if(emailObj.value== "" || passwordObj.value == ""){
      return ;
    }
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
      
        if(resp.status==200){
          resp.json().then((result)=>{
            
            if(result.token){
              localStorage.setItem("user-info",JSON.stringify(result));
              history.push('/home');
            } 
        })
      }else{
        setError("user not found");
      }
     })
    console.log(error);

    
 }
  return(
    <>
    <Header/>
  
  
      <div className="col-sm-3 offset-sm-3">
        {error!=undefined?
          <div className="alert alert-danger">
            <strong>Danger!</strong> {error}
          </div>
          :''
        }
          <h1>Login Page</h1>
          <input type="text" className="form-control" name="email" id="email" onChange={(e)=>setEmail(e.target.value
          )} placeholder="Email"/><br/>
          <input type="password" id="password" className="form-control" onChange={(e)=>setPassword(e.target.value
          )} placeholder="Password"/><br/>   
          <button name="btn" className="btn btn-primary" onClick={Login}>Submit</button>
      </div>
    </>
  );
  
   
  
  }
    export default Login;