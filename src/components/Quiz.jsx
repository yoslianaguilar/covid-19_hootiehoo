import React from 'react';

export const Quiz = (props) => {
  const handleOnClickAnswer = (isCorrect) =>{
    const onOk = props.onOk
    const onError = props.onError
    if (isCorrect ===true) {
      onOk && onOk(); // si onOK es cierto ejecuta la funcion onOk()
    } else{
      onError && onError() // si onError es cierto ejecuta la funcion onError()
    }
  }
  const questions = props.questions || [];
  return (
    <div className='quizContainer'>
      {questions.map((question,qindex)=>{
        return (
          <div key={`question-${qindex}`}  className='question'>
            <p>{question.description}</p>
            <div className='answers'>
              {question.answers.map((answer, aindex)=>{
                return (
                  <button 
                    onClick={()=> handleOnClickAnswer(answer.isCorrect)}
                    key={`answer-${aindex}`}>
                    {answer.description}
                  </button>
                )
              })}
            </div>
          </div>            
        )
        })}
      </div>
  )
}     