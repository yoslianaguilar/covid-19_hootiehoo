import React from 'react';
import { SelectionHome } from '../components/selectionHome.jsx';
import liga from "../Img/GAV_Personaje10.png";
import virus from "../Img/GAV_Personaje02.png";
import './Inicio.css';

export const HomePage = () =>{
  return(

     <div className ='inicio'>
           <h3>¡Ganémosle al virus!</h3> 

     <div className = 'img-cont'>
      <img src={virus} className='img-virus' alt="Virus" width='100px'/> 
      <p className='text'>Bienvenido! Aquí encontrarás información relevante sobre el Covid-19, actividades para niños, consejos,
         material descargable, videos y mucho más.</p> 
    <img src={liga} className='img-liga' alt="Liga contra el virus" width='200px'/> 
    </div>

    <div className='btn.content'>
     <SelectionHome />
     </div>

     </div>
  );
  }