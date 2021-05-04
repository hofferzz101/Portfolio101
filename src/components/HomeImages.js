import React from 'react';
import {Image} from 'react-bootstrap'


const HomeImages=({src})=>{
    return(
       <div>
          <a href="#"><Image height='280' src={src}/></a>
       </div>
    )
    }

export default HomeImages;