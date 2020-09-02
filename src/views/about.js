import React from 'react';
import '../css/about.css';
import icono1 from "../Img/Icono_Demo_2.png";

export const AboutPage = () =>{
  return(
    <div className='view-container'>
         <div className='title2'>
        <h3>¿Quiénes somos?</h3>
      </div>
        <div className ='info-container about'>
      <div className='icono2-cont'>
         <img src={icono1} className='icono2' alt="icono" width='50px'/> 
    <div className='text2'>Somos un equipo que busca desarrollar el potencial de las personas y empresas entregando soluciones tecnológicas creativas.
    y motivadoras para Capacitación y Marketing, que faciliten la Comunicación y el Aprendizaje.</div>     
    </div>
    </div> 
    </div>
  )
}