import React from 'react';
import { Link } from "react-router-dom";


export const SelectionHome = () =>{
  return(
    <div className ='inicio'>
      <h3>¡Ganémosle al virus!</h3> 
    <p className='text'>Bienvenido! Aquí encontrarás información relevante sobre el Covid-19, actividades para niños, consejos,
    material descargable, videos y mucho más.</p>  

    <div className='buttons-cont'>
      
        <Link to='/adultHome'><button>Adulto</button></Link>
        <Link to='/kidsHome'><button>Niño</button></Link>
       
      </div>
    </div>
  )
}