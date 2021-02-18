import React, { useState,useEffect} from 'react';
import { useHistory } from 'react-router-dom';
const Register=()=>{
    //const state=useState();
    const history=useHistory();
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[mobile,setMobile]=useState("");
    useEffect(()=>{
        if(localStorage.getItem('user-info')){
            history.push('/home');
        }
    })
    async function signUp(){
        let item={name,email,password,mobile}
        let result=await fetch('http://localhost/my-app1/src/api/register',{
            method:'POST',
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(item)
        });
        result= await result.json();
        console.log(result);
        localStorage.setItem("user-info",JSON.stringify(result));
        history.push('/home');
    }
    return(
        <>
         <div className="col-sm-6 offset-sm-3">
            <h1>Register Page</h1>
            <input type="text" className="form-control" name="name" onChange={(e)=>setName(e.target.value
                )} placeholder="Name"/><br/>
            <input type="text" className="form-control" name="email" onChange={(e)=>setEmail(e.target.value
                )} placeholder="Email"/><br/>
            <input type="password" className="form-control" onChange={(e)=>setPassword(e.target.value
                )} placeholder="Password"/><br/> 
            <input type="text" className="form-control" onChange={(e)=>setMobile(e.target.value
                )} placeholder="Mobile"/><br/>      
            <button name="btn" className="btn btn-primary" onClick={signUp}>Submit</button>
            </div>
        </>

    );

}
export default Register;