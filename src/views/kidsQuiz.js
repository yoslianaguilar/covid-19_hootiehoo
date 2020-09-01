import React from 'react';
import data from '../data/datatrivianiños.json';
import { KidsQuiz } from '../components/KidsQuiz';
import { KidsRouters } from '../routers/kidsRouters';


export const kidsQuiz = () =>{
  
  return(
    <div className ='quiz'>
          <KidsRouters />
    <h3>Trivias</h3>
      <KidsQuiz questions={data.questions}/>
    </div>
  )
}
