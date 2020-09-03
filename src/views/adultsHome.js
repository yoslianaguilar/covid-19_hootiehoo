import React from 'react';
import {AdultsRouters} from '../routers/adultsRouters'
import victory from "../Img/victoria.png";
import '../css/adults.css';

export const AdultsHome = () =>{
  return(
    <div className='view-container, adults'>
  <AdultsRouters />
     <div className='title'>
     <h3>Estimados padres y educadores:</h3>
     </div>

     <br></br>
 
     <div ClassName='info'>
     <h4>En este lugar encontrarán información importante que ayudará a explicar y sobrellevar el covid-19 y cuarentena.
       Pensado especialmente para educar y también participar junto con los niños de una manera fácil, cómoda y segura.</h4>
       </div>
       <div ClassName='img-welcome'>
       <img src={victory} className='victory' alt="Victoria" width='250px'/> 
       </div>

    </div>
 
  )
}