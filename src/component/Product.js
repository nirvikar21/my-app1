import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table'
import {Link} from 'react-router-dom';


class Product extends React.Component {
    constructor() {
        super();
        this.state = {
            items: [],
        }
    }
    componentDidMount(){
       
       this.getData();
    }
    getData(){
        let rst= fetch("http://localhost/my-app1/src/api/product")
        .then(res => res.json())
            .then(
        (result) => {
           this.setState({items:result.data}) 
        })
    }
    deleteProduct(id){
        fetch("http://localhost/my-app1/src/api/productdelete/"+id)
        .then(res => res.json())
        .then(
        (result) => {
           console.log(result.msg);
           this.getData();
        })    
     }
    
    render() {
        return (<><br/>
            <div>
                <Link to="/addproduct">
                    <button type="button" class="btn btn-primary">Add Product</button>
                </Link>    
            </div>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {(typeof this.state.items !=='undefined')?this.state.items.map(item => (
                        <tr>
                        <td>{item.id}</td>
                        <td><img src= {"http://localhost/my-app1/src/api/"+item.image} width="100"/></td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td><span onClick={()=> this.deleteProduct(item.id)}>Delete</span> || 
                        <Link to={"/updateproduct/"+item.id} >Edit</Link></td>
                    </tr>              
                    )):''}      
                </tbody>
            </Table>
        </>);
    }
}

export default Product;