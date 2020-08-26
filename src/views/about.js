import React from 'react';
import '../css/about.css';
import icono1 from "../Img/Icono_Demo_1.png";

export const AboutPage = () =>{
  return(
    <div className='about'>
      <div className='icono2-content'>
         <img src={icono1} className='icono2' alt="icono" width='50px'/> 
      <h3>Quiénes somos</h3>
      </div> 
    <p className='text'>Somos un equipo que busca desarrollar el potencial de las personas y empresas entregando soluciones tecnológicas creativas 
    y motivadoras para Capacitación y Marketing, que faciliten la Comunicación y el Aprendizaje.</p>     
    </div>
  )
}