import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
const Addproduct=()=>{
    const history=useHistory();
    const [name,setName]=useState();
    const [image,setFile]=useState();
    const [price,setPrice]=useState();
    const [description,setDescription]=useState();
     function addProduct(){

        console.log(name,image,price,description);
        const formData=new FormData();
        formData.append("image",image);
        formData.append("name",name);
        formData.append("price",price);
        formData.append("description",description);
        fetch('http://localhost/my-app1/src/api/addproduct',{
            method:'POST',
            body:formData
        }).then((resp)=>{
            resp.json().then((result)=>{
                console.log(result.msg); 
                if(result.msg=="success"){
                   history.push('/product');
                } 
            })
        })
        
        
     }
    return(
        <>
         <div className="col-sm-6 offset-sm-3">
            <h1>Add Product Page</h1>
            <input type="text" className="form-control" name="name" onChange={(e)=>setName(e.target.value)}  placeholder="Name"/><br/>
            <input type="file" className="form-control" name="image" onChange={(e)=>setFile(e.target.files[0])}  placeholder="Im"/><br/>
            <input type="text" className="form-control" onChange={(e)=>setPrice(e.target.value)} placeholder="Price"/><br/> 
            <textarea name="description" className="form-control" onChange={(e)=>setDescription(e.target.value)} placeholder="Description"/><br/>      
            <button name="btn" className="btn btn-primary" onClick={addProduct} >Submit</button>
            </div>
        </>

    );
}
export default Addproduct;