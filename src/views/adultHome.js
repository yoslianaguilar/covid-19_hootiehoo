import React from 'react';
import {AdultRouters} from '../routers/adultRouters'
import '../css/adults.css';


export const AdultHome = () =>{
  return(
    <div className='adults'>
  
     <div ClassName='title'>
     <h3>Estimados padres y educadores:</h3>
     <br></br>
     <nav ClassName='info'>
     <p>En este lugar encontrarán información importante que ayudará a explicar y sobrellevar el covid-19 y cuarentena.
       Pensado especialmente para educar y también participar junto con los niños de una manera fácil, cómoda y segura.</p>
       </nav>
    <AdultRouters />
    </div>
    </div>
  )
}