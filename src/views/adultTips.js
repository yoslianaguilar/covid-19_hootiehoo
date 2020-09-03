import React from 'react';
import {  AdultTipsInf } from '../components/AdultTips.jsx';
import { AdultsRouters } from '../routers/adultsRouters'
import '../css/adults.css';

export const PsicologicosTips = () =>{
  return(
    <div className='view-container tips'>
       <AdultsRouters /> 
       <div className='title'>
       <h3>Tips psicológicos para adultos:</h3>
       </div>
       <div className='subtitle'></div>
        <h3>COVID-19</h3>
        <AdultTipsInf /> 
        </div>
  )
}