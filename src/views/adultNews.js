import React from 'react';
import { AdultNewsInf } from '../components/AdultNews.jsx';
import {AdultsRouters} from '../routers/adultsRouters'
import '../css/adults.css';

export const AdultNews = () =>{
  return(
    <div className='view-container'>
        <AdultsRouters />
        <div className='title'>
          <h3>Noticias Covid-19</h3> 
          </div>
    <AdultNewsInf />    
    </div>
  )
}