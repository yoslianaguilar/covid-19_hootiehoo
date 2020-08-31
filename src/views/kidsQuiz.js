import React from 'react';
import data from '../data/data.json';
import { Quiz } from '../components/Quiz';
import { KidsRouters } from '../routers/kidsRouters';
import '../css/kids.css';

export const kidsQuiz = () =>{
  const onOk = () =>{
    alert("Respuesta Correcta")
  }
  const onError = () =>{
    alert("Respuesta Incorrecta")
  }
  return(
    <div className ='quiz'>
          <KidsRouters />
    <h3>Trivias</h3>
      <Quiz onOk={onOk} onError={onError} questions={data.questions}/>
    </div>
  )
}
