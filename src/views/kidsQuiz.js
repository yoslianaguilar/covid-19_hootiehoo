import React from 'react';
import data from '../data/datatrivianiños.json';
import { KidsQuiz } from '../components/KidsQuiz';
import { KidsRouters } from '../routers/kidsRouters';


export const kidsQuiz = () =>{
  
  return(
    <div className ='view-container quiz'>
  
          <KidsRouters />
          <div className='title'>
    <h3>Trivias</h3>
    </div>
      <KidsQuiz questions={data.questions}/>
    </div>
  )
}
