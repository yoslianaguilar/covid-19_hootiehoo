import React from 'react';
import {  AdultTipsInf } from '../components/AdultTips.jsx';
import {AdultsRouters} from '../routers/adultsRouters'
import '../css/adults.css';

export const PsicologicosTips = () =>{
  return(
    <div className='view-container tips'>
       <AdultsRouters /> 
    <AdultTipsInf /> 
    </div>
  )
}