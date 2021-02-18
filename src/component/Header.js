
import {Navbar,Nav,Brand, NavDropdown} from 'react-bootstrap';
import {Link,useHistory} from 'react-router-dom';
import React, { useState,useEffect } from 'react';
const Header=()=>{
    const history=useHistory("");
    function Logout(){
            localStorage.clear();
            history.push('/login');
    }
    const user=JSON.parse(localStorage.getItem('user-info'));
    
        useEffect(() => {
            
            return () => {
              // Clean up the subscription
              
              
            };
          });
          
    return(
        <> 
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link ><Link to="/home">Home</Link></Nav.Link>    
                </Nav>
                { localStorage.getItem('user-info')?
                <Nav className="mr-auto">
                    <NavDropdown title="Gust User">
                        <NavDropdown.Item onClick={Logout}>Logout</NavDropdown.Item>
                        
                    </NavDropdown>
                </Nav>
                :
                <Nav className="mr-auto">
                    <Nav.Link ><Link to="/login">Login</Link></Nav.Link>
                    <Nav.Link ><Link to="/register">Register</Link></Nav.Link>
                    </Nav>
                }
            </Navbar.Collapse>
        </Navbar>     
        </>
    );
}
export default Header;