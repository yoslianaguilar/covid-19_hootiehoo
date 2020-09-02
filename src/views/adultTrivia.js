import React from 'react';
import data from '../data/data.json';
import {AdultsRouters} from '../routers/adultsRouters'
import { AdultTrivia } from '../components/AdultTrivia.jsx';
import '../css/adults.css';

export const AdultsQuiz = () =>{

  return(
    <div className='aQuiz'>
        <AdultsRouters />
      <AdultTrivia questions={data.questions}/>
      <h3>Trivia</h3>
    </div>
  )
}
