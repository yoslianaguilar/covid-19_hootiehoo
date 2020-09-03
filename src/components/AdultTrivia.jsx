import React, {useEffect, useState }from 'react';
import data from '../data/data.json';
import next from '../Img/BotonDerecha_P6_Presion.png';
import covid from '../Img/covid.PNG';

export const AdultTrivia = (props) => {

const [currentQuestion, setCurrentQuestion] = useState({});
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState("");
  const [disabled, setDisabled] = useState(false); 

  useEffect(() => {
    setCurrentQuestion(data.questions[0]);
  }, []);

  const loadQuestion = (s) => {
    const question = data.questions[s];
    setCurrentQuestion(question);
  };

  const onNext = () => {
    setDisabled(false)
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
    setDisabled(true)
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


const speech = (message) => {
  
  let msg = new SpeechSynthesisUtterance();
  msg.text = message;
  speechSynthesis.speak(msg);
};

  // const questions = props.questions || [];
  return (
    <div className='quizContainer'>
     
      <div className='question'>
      <img src={covid} className='covid' alt="Covid" width='200'/> 

       <h4>{currentQuestion.description}</h4> {/* Preguntas */}
          <div className='answers'>
              {currentQuestion.answers?.map((answer, aindex)=>{
                return (
                  <button disabled={disabled}
                    onClick={()=> handleOnClickAnswer(answer.isCorrect)}
                    key={`answer-${aindex}`}>
                    {/* {<img alt="" src ={answer.img}/>} */}
                    {answer.description}  {/* Respuestas */}
                  </button>
                )
              })}
            </div>
            <h4>{result}</h4>
            <p>Tu Puntuación es: {score}</p>
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