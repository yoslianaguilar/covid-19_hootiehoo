import React from 'react';
import { AdultNewsInf } from '../components/AdultNews.jsx';
import {AdultsRouters} from '../routers/adultsRouters'

export const AdultNews = () =>{
  return(
    <div>
        <AdultsRouters />
    <AdultNewsInf />    
    </div>
  )
}