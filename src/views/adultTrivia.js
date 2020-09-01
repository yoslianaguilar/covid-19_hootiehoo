import React from 'react';
import data from '../data/data.json';
import {AdultsRouters} from '../routers/adultsRouters'
import '../css/adults.css';

export const AdultTrivia = () =>{

  return(
    <div className='news'>
        <AdultsRouters />
      <AdultTrivia questions={data.questions}/>
    </div>
  )
}