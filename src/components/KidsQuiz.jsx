import React, {useEffect, useState }from 'react';
import data from '../data/datatrivianiños.json';


export const KidsQuiz = (props) => {

const [currentQuestion, setCurrentQuestion] = useState({});
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState ("");

  useEffect(() => {
    setCurrentQuestion(data.questions[0]);
  }, []);

  const loadQuestion = (s) => {
    const question = data.questions[s];
    setCurrentQuestion(question);
  };

  const onNext = () => {
    const totalQuestions = data.questions.length
    if ((step + 1) === totalQuestions) {
      return;
    }
    if(result === ""){
      return;
    }
    setResult("");
    const nextStep = step + 1
    loadQuestion(nextStep);
    setStep(nextStep);
  }; 


  const handleOnClickAnswer = (isCorrect) =>{
    const onOk = () => {
      setScore(score + 1)
      setResult("Respuesta Correcta")
      
    }
    const onError = () => {
      setScore(score - 1)
      setResult("Respuesta Incorrecta")
    }
    if (isCorrect === true) {
      onOk && onOk(); // si onOK es cierto ejecuta la funcion onOk()
    } else {
      onError && onError() // si onError es cierto ejecuta la funcion onError()
    }
  };  

  //const questions = props.questions || [];
  return (
    <div className='quizContainer'>
      <p>Tu Puntuación es: {score}</p>
      <div className='question'>
        <p>{currentQuestion.description}</p>
          <div className='answers'>
              {currentQuestion.answers?.map((answer, aindex)=>{
                return (
                  <button 
                    onClick={()=> handleOnClickAnswer(answer.isCorrect)}
                    key={`answer-${aindex}`}>
                      <div className='imgMasc'>
                    {<img alt="" width='20px 'src ={answer.img} />}
                    </div>
                    {answer.description} 
                  </button>
                )
              })}
            </div>
            <h4>{result}</h4>
        <button className="buttonNext"
          onClick={onNext}>Siguiente
        </button>
       
      </div>
    </div>
    

    
  )
}     