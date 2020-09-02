import React from 'react';
import data from '../data/data.json';
import {AdultsRouters} from '../routers/adultsRouters'
import { AdultTrivia } from '../components/AdultTrivia.jsx';
import '../css/adults.css';

export const AdultsQuiz = () =>{

  return(
    <div className='view-container aQuiz'>
        <AdultsRouters />
        <h3>Trivia</h3>
      <AdultTrivia questions={data.questions}/>
    </div>
  )
}
