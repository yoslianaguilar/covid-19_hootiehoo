import React from 'react';
import { SelectionHome } from '../components/selectionHome.jsx';
import liga from "../Img/GAV_Personaje10.png";
import virus from "../Img/GAV_Personaje02.png";
import '../css/home.css';

export const HomePage = () =>{
  return(

     <div className ='view-container2 home'>

        
   <div className='title'>
   <h3>¡Ganémosle al virus!</h3> 
   </div>
         
     <div className = 'img-cont'>
     <img src={liga} className='img-liga' alt="Liga" width='200px'/> 
      <p className='text1, welcome'>Bienvenido! Aquí encontrarás información relevante sobre el Covid-19, actividades para niños, consejos,
         material descargable, videos y mucho más.</p> 
 
    <img src={virus} className='img-virus' alt="Virus" width='100px'/> 
   
</div>
    
     <SelectionHome />
    

     </div>
  );
  }