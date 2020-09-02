import React from 'react';
import {AdultsRouters} from '../routers/adultsRouters'
import '../css/adults.css';

export const AdultsHome = () =>{
  return(
    <div className='view-container adults'>
  <AdultsRouters />
     <div ClassName='title'>
     <h3>Estimados padres y educadores:</h3>
     <br></br>
     <div ClassName='info'>
     <p>En este lugar encontrarán información importante que ayudará a explicar y sobrellevar el covid-19 y cuarentena.
       Pensado especialmente para educar y también participar junto con los niños de una manera fácil, cómoda y segura.</p>
       </div>
    </div>
    </div>
  )
}