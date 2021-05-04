import React from "react";
import {Container,Col,Row} from 'react-bootstrap';
import {Link,NavLink} from 'react-router-dom';
import './Navbar.css'

const Navbar=()=>{
    return(
     <div>
        <Container fluid style={{backgroundColor:"#181818"}}>
        <Row style={{height:120}} className="align-items-center">
        <Col xs={3}><h1 style={{fontFamily:'monospace',textAlign:'center',color:'white'}}>T.SidD</h1></Col>
        <Col xs={5}></Col>
        <Col xs={4}>
            <div style={{justifyContent:'space-evenly',display:'flex'}}>
             <NavLink activeClassName="active_class" to='/'><h5 style={{fontFamily:'serif'}}>Home</h5></NavLink>
             <NavLink activeClassName="active_class" to='/about'><h5 style={{fontFamily:'serif'}}>About</h5></NavLink>
             <NavLink activeClassName="active_class" to='/contact'><h5 style={{fontFamily:'serif'}}>Contact</h5></NavLink>
            </div></Col>
        </Row>
        </Container>
     </div>
    )  
}

export default Navbar;