import React, { useState } from 'react'
import './Quiz.css'
import QuestionList from './QuestionList';

const Quiz = () => {
    const questions = [
  {
    statement: "What is the name of capital of Pakistan?",
    options: ['Lahore', 'Karachi', 'Islamabad', 'Peshawar'],
    ans: 'Islamabad',
  },
  {
    statement: "What is the name of capital of Turkey?",
    options: ['Ankara', 'Istanbul', 'Izmir', 'Bursa'],
    ans: 'Ankara',
  },
  {
    statement: "What is the name of capital of United Arab Emirates?",
    options: ['Sharjah', 'Abu Dhabi', 'Dubai', 'Ajman'],
    ans: 'Abu Dhabi',
  },
  {
    statement: "What is the name of the capital of Saudi Arabia?",
    options: ['Jeddah', 'Makkah', 'Dammam', 'Riyadh'],
    ans: 'Riyadh',
  },
  {
    statement: "What is the name of the capital of Qatar?",
    options: ['Doha', 'Al Rayyan', 'Lusail', 'Al Wakrah'],
    ans: 'Doha',
  },
];

const [currentQuestionIndex, SetCurrentQuestionIndex] = useState(4);
const [currentAnswer, setCurrentAnswer] = useState(null);

const handleClick = (option) =>{
    setCurrentAnswer(option);
    if(option === questions[currentQuestionIndex].ans )
        setScore(score + 1 )
}
const handleNextQuestion = () =>{
    SetCurrentQuestionIndex(currentQuestionIndex + 1);
    setCurrentAnswer(null);
}
const reset = () =>{
    SetCurrentQuestionIndex(0);
    setScore(0);
}

const [score, setScore] = useState(0)
  return (
   
    <div >
        {currentQuestionIndex < questions.length ?
          <div>
        <QuestionList question={questions[currentQuestionIndex].statement}
        options={questions[currentQuestionIndex].options} handleClick={handleClick} currentAnswer={currentAnswer}  />
        <button disabled={currentAnswer === null} className={currentAnswer === null ? 'button-disable' : 'button'} onClick={handleNextQuestion}>Next Question</button>
      </div> : <div className='div-result'>
        <h3>You Score is {score} Out of {questions.length}</h3>
        <button onClick={reset} className='reset-button'>Reset</button>
        </div>}
    
    </div>
    
  )
}

export default Quiz
