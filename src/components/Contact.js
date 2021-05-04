import React from "react";
import Navbar from './Navbar';
import {Container,Col,Row,Image,Form,Button} from 'react-bootstrap';
import {Link,NavLink} from 'react-router-dom';


const Contact=()=>{
    return(
        <div>
        <Navbar />

        <div>
        <div style={{backgroundColor:"#181818",height:570}}>
        <Container>
            <Row>
                <Col>
                <div style={{flexDirection:'column',marginTop:120}}>
                     <p style={{color:'gray',marginBottom:50}}>Say Hello</p>
                     <h1 style={{color:'white',fontFamily:'monospace'}}>We'd love to work together</h1>
                     <h1 style={{color:'white',fontFamily:'monospace'}}>Don't hesitate,drop us a line</h1>
                </div>
                </Col>
            </Row>
        </Container>
    </div>
      <div style={{backgroundColor:"#080808",paddingBottom:100}}>
          <Container>
              <Row>
                  <Col lg={6} md={6} sm={12} style={{marginTop:250}}>
                    <h1 style={{fontFamily:'monospace',color:'whitesmoke'}}>Say hello!</h1>
                    <div style={{flexDirection:'row',display:'flex',marginTop:50}}>
                    <div style={{marginTop:40}}>
                    <p style={{color:'gray'}}>Get in touch</p>
                    <p style={{color:'lightgray'}}>003-124441</p>
                    <p style={{color:'lightgray'}}>office@T.SidD.domain</p>
                    </div>
                    <div style={{marginLeft:50,marginTop:40}}>
                    <p style={{color:'gray'}}>Visit Us</p>
                    <p style={{color:'lightgray'}}>003-124441</p>
                    <p style={{color:'lightgray'}}>office@T.SidD.domain</p>
                    </div>
                    </div>
                    <div style={{marginTop:60}}>
                    <p style={{color:'lightgray'}}>Copyright <span>&#169;</span> 2021 T.SidD Creative.</p>
                    <p style={{color:'lightgray'}}>But with love by HofFerzZ</p>
                    <a href="#">Facebook</a><a href="#" style={{marginLeft:15}}>Instagram</a><a href="#" style={{marginLeft:15}}>Twitter</a>
                    </div>
                  </Col>
                  <Col lg={6} md={6} sm={12} style={{marginTop:250}}>
                  <Form>
                   <Form.Group>
                    <Form.Control type="name" placeholder="Name*:"  style={{backgroundColor:'#080808',marginBottom:35}}/>
                     </Form.Group>
                     <Form.Group>
                    <Form.Control type="email" placeholder="Enter email*:" style={{backgroundColor:'#080808',marginBottom:35}}/>
                     </Form.Group>
                     <Form.Group>
                    <Form.Control type="subject" placeholder="Subject*:" style={{backgroundColor:'#080808',marginBottom:35}}/>
                     </Form.Group>
                     <Form.Group>
                    <Form.Control as="textarea" rows='4' placeholder="Write message*:" style={{backgroundColor:'#080808',marginBottom:35}}/>
                     </Form.Group>
                     <Button variant="primary" type="submit">
                      Submit
                    </Button>
                     </Form>

                  </Col>
              </Row>
          </Container>
      </div>
        </div>

        </div>
    )

}

export default Contact;