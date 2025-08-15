import './App.css';

import React from 'react'

export default function App() {
   
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
                <li className="bg-secondary" >{q.statement}</li>
                <ul className='text-primary'>
                  {
                    q.options.map((op) => {
                      return(
                        <>
                      <input type="radio" id='html' />
                      <label htmlFor="html">
                      <li className='text-primary'>{op}</li>

                      </label>
                      </>
                    )
                    }
                  )
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
