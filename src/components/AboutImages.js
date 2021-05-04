import React from 'react';
import {Card} from 'react-bootstrap'


const AboutImages=({src})=>{
    return(
        <Card style={{ width: '18rem',backgroundColor:'#080808' }}>
        <Card.Img variant="top" src={src} />
        <Card.Body>
          <Card.Title style={{color:'gray'}}>Tariq Siddique</Card.Title>
          <Card.Text>
            React Native Developer
          </Card.Text>
          
        </Card.Body>
      </Card>
    )
}

export default AboutImages;