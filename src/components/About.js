import React from "react";
import Navbar from './Navbar';
import {Container,Col,Row,Image,Form,Button} from 'react-bootstrap';
import {Link,NavLink} from 'react-router-dom';
import AboutImages from './AboutImages';
import SkillsBars from './SkillsBars';

const myimg=[{src:"https://qph.fs.quoracdn.net/main-qimg-11ef692748351829b4629683eff21100.webp"},
{src:"https://qph.fs.quoracdn.net/main-qimg-11ef692748351829b4629683eff21100.webp"},
{src:"https://qph.fs.quoracdn.net/main-qimg-11ef692748351829b4629683eff21100.webp"},
{src:"https://qph.fs.quoracdn.net/main-qimg-11ef692748351829b4629683eff21100.webp"},
{src:"https://qph.fs.quoracdn.net/main-qimg-11ef692748351829b4629683eff21100.webp"}
];



const About=()=>{
    return(
        <div>
        <Navbar />
        <div>
        <div style={{backgroundColor:"#181818",height:570}}>
        <Container>
            <Row>
                <Col>
                <div style={{flexDirection:'column',marginTop:120}}>
                     <p style={{color:'gray',marginBottom:50}}>Who We Are</p>
                     <h1 style={{color:'white',fontFamily:'monospace'}}>We pride ourselves by creating</h1>
                     <h1 style={{color:'white',fontFamily:'monospace'}}>amazing design experiences</h1>
                </div>
                </Col>
            </Row>
         </Container>
         </div>
        <div style={{backgroundColor:"#080808"}}>
           <Container style={{marginBottom:150}}>
              <Row>
                  <Col sm={12} md={6} lg={6}>
                    <div style={{marginTop:200}}><h2 style={{color:'white',fontFamily:'monospace'}}>We are a bunch of design</h2>
                    <h2 style={{color:'white',fontFamily:'monospace'}}>passionate folks.</h2>
                    <a href="#"><p style={{marginTop:40}}>View Projects</p></a></div>
                  </Col>
                  <Col sm={12} md={6} lg={6}>
                     <h4 style={{color:'lightgray',fontFamily:'monospace',marginTop:200}}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</h4>
                     <div style={{flexDirection:'row',display:'flex'}}>
                         <div style={{marginTop:70}}>
                             <p style={{color:'lightgray'}}>7 Years of Experience</p>
                             <p style={{color:'lightgray'}}>22 Completed Projects</p>
                             <p style={{color:'lightgray'}}>41 Happy Customers</p>
                         </div>
                         <div style={{marginLeft:40,marginTop:70}}>
                             <p style={{color:'lightgray'}}>Award Winning agency</p>
                             <p style={{color:'lightgray'}}>Aesthetics Oriented Team</p>
                             <p style={{color:'lightgray'}}>Marketing Strategy Experts</p>
                         </div>
                     </div>
                  </Col>
              </Row>
           </Container>
           <Container style={{paddingBottom:150}}>
               <Row>
                   {myimg.map((item)=>
                     <Col lg={4} md={6} sm={12} style={{marginBottom:80,display:'flex',justifyContent:'space-evenly'}}>
                     <AboutImages src={item.src}/>
                   </Col>
                   )}
                   
               </Row>
           </Container>

           <Container style={{paddingBottom:150}}>
              <Row>
                  <Col>
                   <SkillsBars/>
                  </Col>
              </Row>

           </Container>

           <Container>
               <Row style={{paddingBottom:300}}>
                   <Col lg={6} md={6} sm={12}>
                     <h1 style={{fontFamily:'monospace',color:'gray'}}>We can take your business</h1>
                     <h1 style={{fontFamily:'monospace',color:'gray',marginBottom:50}}>to a whole new level.</h1>
                     <h6 style={{marginBottom:50,color:'lightgray'}}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</h6>
                     <a href="#">Become Our Partner</a>
                   </Col>
                   <Col lg={6} md={6} sm={12}>
                     <div style={{display:'flex',justifyContent:'space-evenly',marginBottom:70}}>
                     <div>
                         <p style={{marginBottom:25,color:'gray'}}>UI/UX Design</p>
                         <p style={{color:'lightgray'}}>Web Design</p>
                         <p style={{color:'lightgray'}}>Interaction Design</p>
                         <p style={{color:'lightgray'}}>Visual Solutions</p>
                     </div>
                     <div>
                         <p style={{marginBottom:25,color:'gray'}}>Development</p>
                         <p style={{color:'lightgray'}}>Websites</p>
                         <p style={{color:'lightgray'}}>Android Apps</p>
                         <p style={{color:'lightgray'}}>IOS Development</p>
                     </div>
                     </div>

                     <div style={{display:'flex',justifyContent:'space-evenly'}}>
                     <div>
                         <p style={{marginBottom:25,color:'gray'}}>Marketing</p>
                         <p style={{color:'lightgray'}}>Commercials</p>
                         <p style={{color:'lightgray'}}>Market Research</p>
                         <p style={{color:'lightgray'}}>Personal Strategy</p>
                     </div>
                     <div>
                         <p style={{marginBottom:25,color:'gray'}}>Support</p>
                         <p style={{color:'lightgray'}}>Brainstorming</p>
                         <p style={{color:'lightgray'}}>Solution Search</p>
                         <p style={{color:'lightgray'}}>Problem Resolving</p>
                     </div>
                     </div>
                   </Col>
               </Row>
           </Container>
        </div>
        <div style={{backgroundColor:'#181818',paddingBottom:150}}>
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

        </div>
    )

    
}

export default About;