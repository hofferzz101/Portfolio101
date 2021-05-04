import React from "react";
import Navbar from './Navbar';
import {Container,Col,Row,Image} from 'react-bootstrap';
import {Link,NavLink} from 'react-router-dom';
import HomeImages from './HomeImages';

const imageGallery=[{src:"https://i.pinimg.com/originals/e8/07/57/e807579edb93300913645941f251c97d.jpg"},
                   {src:"https://media.istockphoto.com/illustrations/watercolor-green-background-with-tropical-plants-illustration-id544482876"},
                   {src:"https://media.istockphoto.com/illustrations/watercolor-green-background-with-tropical-plants-illustration-id544482876"},
                   {src:"https://i.pinimg.com/originals/e8/07/57/e807579edb93300913645941f251c97d.jpg"}
                    ];

const Home=()=>{
    return(
    <div>
   <div style={{backgroundColor:"#181818",height:650}}>
    <Navbar />
    <div>
        <Container>
            <Row>
                <Col>
                <div style={{flexDirection:'column',marginTop:120}}>
                     <p style={{color:'gray',marginBottom:50}}>Welcome</p>
                     <h1 style={{color:'white',fontFamily:'monospace'}}>This is the house of T.SidD</h1>
                     <h1 style={{color:'white',fontFamily:'monospace'}}>Award Winning Software Team..</h1>
                </div>
                </Col>
            </Row>
        </Container>
    </div>
    </div>
    
    <div style={{backgroundColor:"#080808",paddingBottom:100}}>
        <Container>
            <Row>
                <Col style={{marginTop:250,marginBottom:120}}>
                  <h2 style={{color:'white',fontFamily:'monospace'}}>We are proud of our work</h2>
                  <h2 style={{color:'white',fontFamily:'monospace'}}>because we always give our best.</h2>
                </Col>
            </Row>
            <Row>
                <Col lg={5} style={{justifyContent:'space-evenly',display:'flex',marginBottom:60}}>
                <Link>All</Link>
                <Link>Design</Link>
                <Link>Branding</Link>
                <Link>Strategy</Link>
                </Col>
            </Row>
            <Row>
                {
                  imageGallery.map((item)=>
                  <Col sm={12} md={6} lg={6} style={{marginBottom:80,display:'flex',justifyContent:'space-evenly'}}>
                  <HomeImages src={item.src}/>
                  </Col>
                  )
                 }
                </Row>
            
        </Container>
    </div>
    <div style={{backgroundColor:'#181818',paddingBottom:50}}>
        <Container>
        <Row style={{paddingBottom:100}}>
                <Col sm={12} md={6} lg={8}>
                <h2 style={{marginTop:150,color:'whitesmoke',fontFamily:'monospace'}}>Let's work together.</h2>
                </Col>
                <Col sm={12} md={6} lg={4}>
                <h5 style={{marginTop:150,color:'whitesmoke',fontFamily:'initial'}}><a href="#">Start a Project</a></h5>
                </Col>
            </Row>
            <Row>
                <Col lg={4} md={4} sm={12} style={{paddingBottom:30}}>
                <p style={{color:'lightgray'}}>Copyright <span>&#169;</span> 2021 T.SidD Creative.</p>
                <p style={{color:'lightgray'}}>But with love by HofFerzZ</p>
                <a href="#">Facebook</a><a href="#" style={{marginLeft:15}}>Instagram</a><a href="#" style={{marginLeft:15}}>Twitter</a>
                </Col>
                <Col lg={4} md={4} sm={12} style={{paddingBottom:30}}>
                <p style={{color:"gray"}}>Email</p>
                <p style={{color:'white'}}>We are also hiring</p>
                <p style={{color:'white'}}>office@T.SidD.domain</p>
                <p style={{color:'white'}}>careers@T.SidD.domain</p>
                </Col>
                <Col lg={4} md={4} sm={12} style={{paddingBottom:30}}>
                <p style={{color:"gray"}}>Visit Us</p>
                <p style={{color:'white'}}>74 5th Street</p>
                <p style={{color:'white'}}>74300 Karachi</p>
                <p style={{color:'white'}}>Schedule 6pm : 9pm</p>
                </Col>
            </Row>
        </Container>
    </div>

    </div>
    )
}

export default Home;