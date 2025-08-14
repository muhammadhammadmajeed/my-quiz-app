import './App.css';

import React from 'react'

export default function App() {
  let questions = [
    {
      statement: "What is the name of capita of Pakistan?",
      options: ['Lahore', 'Karachi', 'Islamabad', 'Peshawar'],
      ans: 'Islamabad',
    },
    {
      statement: "What is the name of capita of Turkey?",
      options: ['Ankara', 'Istanbul', 'Izmir', 'Bursa'],
      ans: 'Ankara',
    },
    {
      statement: "What is the name of capita of United Arab Emirates?",
      options: ['Sharjah', 'Abu Dhabi', 'Dubai', 'Ajman'],
      ans: 'Abu Dhabi',
    },
    {
      statement: "What is the name of the capital of Saudi Arabia?",
      options: ['Jeddah', 'Makkah', 'Dammam', 'Riyadh'],
      ans: 'Riyadh',
    }, {
      statement: "What is the name of the capital of Qatar?",
      options: ['Doha', 'Al Rayyan', 'Lusail', 'Al Wakrah'],
      ans: 'Doha',
    },


  ]
  return (
    <div className='container my-5'>
      <h1 style={{ textAlign: "center", color: "red" }}>
        Welcome to My Online Quiz Website
      </h1>
      <ol>
        {questions.map((q) => {
          return (
            <>
              <div >
                <li  className="bg-secondary" >{q.statement}</li>
                <ul className='text-primary'>
                  {
                    q.options.map((op)=> <li className='text-primary'>{op}</li>)
                  }   
                </ul>
              </div>

            </>
          );
        })}
      </ol>
    </div>
  );
}
