import React from 'react';
import data from '../data/datatrivianiños.json';
import { Trivia } from '../components/KidsTrivia';

export const ChildrenTrivia = () =>{
  const onOk = () =>{
    alert("Respuesta Correcta")
  }
  const onError = () =>{
    alert("Respuesta Incorrecta")
    
  }
  return(
    <div>
    Pagina de Trivias para los Niños   
      <Trivia onOk={onOk} onError={onError} questions={data.questions}/>

    </div>
  )
}