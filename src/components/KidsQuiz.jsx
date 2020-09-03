import React, {useEffect, useState }from 'react';
import data from '../data/datatrivianiños.json';
import next from '../Img/BotonDerecha_P6_Presion.png';


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
      <div className='question'>
        <p>{currentQuestion.description}</p>
          <div className='answers'>
              {currentQuestion.answers?.map((answer, aindex)=>{
                return (


                  <button className='trivia-btn' 
                    onClick={()=> handleOnClickAnswer(answer.isCorrect)}
                    key={`answer-${aindex}`}>


                      <div className='imgMasc'>
                    {<img alt="" width='70px 'src ={answer.img} />}
                    </div>
                    {answer.description} 
                  </button>
                )
              })}
            </div>

    <div className='result'> <h4>{result}</h4></div>
    <h5>Tu Puntuación es: {score}</h5>
    <div className="buttonNext"
          onClick={onNext}>
       <div className='next'>
       {<img alt="Next" width='70px' src = {next} />}
       </div>
     </div>
      </div>
    </div>

    
  )
}     