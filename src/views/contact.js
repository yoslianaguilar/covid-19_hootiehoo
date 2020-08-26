import React from 'react';
import '../css/contact.css';
import icono1 from "../Img/Icono_Demo_1.png";

export const ContactPage = () =>{
  return(
    <div className ='contact'>
      <div>
      <h3>¡Gamificate ahora!</h3> 
      <p class='contact-text1'>
Nos movemos por una tecnología con sentido, que conecte y desarrolle a las personas y empresas en alcanzar su máximo potencial a nivel global.</p>
      </div>
      <div className ='info-cont'>

      <div className ='information'>
      <img src={icono1} className='icono1' alt="icono" width='50px'/> 
  <h4 className='text1'>Contáctanos</h4>
  <br></br> 
  
   <p className='contact-text'><span class="material-icons">room</span>Santiago, chile</p>
   <p className='contact-text'><span class="material-icons">mail_outline</span>contacto@hootiehoo.cl</p>
   <p className='contact-text'><span class="material-icons">mail_outline</span>ventas@hootiehoo.cl</p>
  </div>
    </div>
    </div>
   
  )
}