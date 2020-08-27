import React from 'react';
import '../css/about.css';
import icono1 from "../Img/Icono_Demo_2.png";

export const AboutPage = () =>{
  return(
    <div className='about'>
        <div className ='info-cont'>
      <div className='icono2-cont'>
         <img src={icono1} className='icono2' alt="icono" width='50px'/> 
      <h3>¿Quiénes somos?</h3>
    <p className='text'>Somos un equipo que busca desarrollar el potencial de las personas y empresas entregando soluciones tecnológicas creativas 
    y motivadoras para Capacitación y Marketing, que faciliten la Comunicación y el Aprendizaje.</p>     
    </div>
    </div> 
    </div>
  )
}