import React, { useState,useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import{Table} from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import Pagination from 'react-bootstrap/Pagination'
import Form from 'react-bootstrap/Form'
import Header from './Header.js';

const Home =(props)=>{
  const user=JSON.parse(localStorage.getItem('user-info'));
  
  const [data,setData]=useState([]);
  const [data1,setData1]=useState([]);
  const [pageid,setPageId]=useState([]);
  let result
  useEffect( async ()=>{
    console.log("====home");
      let result=await fetch('https://reqres.in/api/users?page=1');
      result=await result.json();
      setData(result.data);
      setData1(result.data);
  },[]);
  function pageData(pageid){
    setPageId(pageid);
    fetch('https://reqres.in/api/users?page='+pageid,{
    }).then((resp)=>{
      resp.json().then((result)=>{
            setData(result.data);
            setData1(result.data);
      })
    })
  }
  function searchData(){
    var e = document.getElementById("uid").value;
    console.log("ssss",e);
    if(e=='All'){
    fetch('https://reqres.in/api/users/?page=1',{
    }).then((resp)=>{
      resp.json().then((result)=>{        
            setData(result.data);
      })
    })
  }else{
    fetch('https://reqres.in/api/users/'+e,{
    }).then((resp)=>{
      resp.json().then((result)=>{        
            setData([result.data]);
      })
    })
  }
    fetch('https://reqres.in/api/users/?page=1',{
    }).then((resp)=>{
      resp.json().then((result)=>{        
            setData1(result.data);
            //console.log()
      })
    })
  }
    return(
      
      <>
      <Header/>
        <div className="container">
          <h3>Home Page</h3>
          <p>A navigation bar is a navigation header that is placed at the top of the page.</p>
      <div >
      
        <select id="uid" >
          <option>Select Name</option>
          <option value="All">All</option>
       { data1.map((item)=>
          <option value={item.id}>{item.first_name+" "+item.last_name}</option>
       )}
        </select>
        <button variant="primary" onClick={() =>searchData()}>Search</button>
      
        </div>    
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Image</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map((item)=>
            <tr>
              <td>{item.id}</td> 
              <td><img src={item.avatar} width="50"/></td>
              <td>{item.first_name+" "+item.last_name}</td>
              <td>{item.email}</td>
            </tr>
          )}
      </tbody>
    </Table>
<Pagination>
  <Pagination.Item onClick={() => pageData(1)}>{1}</Pagination.Item>
  <Pagination.Item onClick={() => pageData(2)}>{2}</Pagination.Item>
</Pagination>
        </div>
      </>
    );
}
  export default Home;