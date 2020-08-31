import React from 'react';
import { AdultNewsInf } from '../components/AdultNews.jsx';
import {AdultsRouters} from '../routers/adultsRouters'
import '../css/adults.css';

export const AdultNews = () =>{
  return(
    <div className='news'>
        <AdultsRouters />
    <AdultNewsInf />    
    </div>
  )
}