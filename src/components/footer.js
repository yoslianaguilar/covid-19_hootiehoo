import React from 'react';
import '../css/footer.css';
import favicon from "../Img/Favicon.png";

export const Footer = () =>{
    return(
       <div className ='footer'>
            <div className ='footer1'>
            <p className='footer-text'>Hootie Hoo © 2020</p>
            <div className ='footer2'>
            <img src={favicon} className='favicon-footer' alt="favicon" width='35x'/> 
            </div>
            </div>
      </div>
    )
  }