import React from 'react';
import { KidsRouters } from '../routers/kidsRouters';
import puma from '../Img/GAV_Personaje03.png';
import guante from '../Img/GAV_Personaje06.png';
import jabon from '../Img/GAV_Personaje04.png';
import mascarilla from '../Img/GAV_Personaje05.png';
import corona from '../Img/GAV_Personaje07.png';
import liga from "../Img/GAV_Personaje10.png";
import niño from "../Img/GAV_Personaje33.png";
import niña from "../Img/GAV_Personaje34.png";
import '../css/kids.css';

export const KidsHome = () =>{
  return(
    
    <div className='kids'>
  
       <KidsRouters />

   
  
   <div className='images-cont'>
<nav className='title'>
 <h3>Niños</h3>
   </nav>
   <div className='squad-images'>
    <img src={puma} className='img-puma' alt="Puma Espuma" width='130px'/> 
    <p>¡Hola amigo/a, soy Puma Espuma, bienvenido!</p>
    <p>¡Te presento a Guantrini, To-Mask y Jabier Jabón!</p>
    <img src={guante} className='img-guante' alt="Guante" width='70px'/> 
    <img src={jabon} className='img-jabon' alt="Jabón" width='70px'/> 
    <img src={mascarilla} className='img-mascarilla' alt="Mascarilla" width='70px'/> 
  
    <p>¡Juntos somos el Escuadrón Prevención y con tu ayuda derrotaremos al malvado virus Corona!</p>
    <img src={corona} className='img-corona' alt="corona" width='80px'/> 
    </div>

    <div>
    <p>Toma todas las precauciones y ¡Vamos!</p>
    <img src={niño} className='img-niña' alt="Niña" width='50px'/> 
    <img src={niña} className='img-niño' alt="Niño" width='45px'/> 
    <img src={liga} className='img-liga' alt="Liga" width='150px'/> 
    <p>Elige entre las opciones de arriba y... ¡que comience la acción!</p>
    </div>
    </div>
    </div>
    
  )
}