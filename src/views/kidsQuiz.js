import React from 'react';
import data from '../data/datatrivianiños.json';
import { KidsQuiz } from '../components/KidsQuiz';
import { KidsRouters } from '../routers/kidsRouters';

export const kidsQuiz = () =>{
  return(
    <div className ='view-container quiz'>
          <KidsRouters />
          <div className='title'>
<h3>Trivia</h3>
</div>
<div className='subtitle'>
</div>
    <h4>Responde las preguntas</h4>
      <KidsQuiz questions={data.questions}/>
    </div>
  )
}
