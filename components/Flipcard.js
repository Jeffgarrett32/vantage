import {React, useState} from 'react'



function FlipCard() {
  
  const questions = [
      {
          questionText: "You receive a message from Becky, the head of the human resources department requesting access to your departments file server. She mentions it’s urgent, and that employees won’t receive their paychecks unless it is completed immediately. What type of social engineering technique is this?",
          answerOptions: [
              { answerText: 'Piggybacking', isCorrect: false },
              { answerText: 'Business Email Compromise', isCorrect: true }, 
              { answerText: 'Domain Fraud', isCorrect: false }, 
              { answerText: 'Malware', isCorrect: false },
          ],
      },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [flip, setFlip] = useState(false);

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
        setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
    } else {
        setShowScore(true);
    }
};

    const questionCheck = (isCorrect) => {
        if (isCorrect) {

        }
    }

  function handleClick() {
    
    setFlip(!flip)
    console.log('flipped')
  }

    return (
        <div id='flipcard' className="flex justify-center pb-8">
        <div className={`grid grid-flow-row grid-cols-1 bg-amber-32 border border-black rounded-md lg:w-3/6 w-4/6  justify-self-end pt-4 px-4 pb-2 ${flip ? "card flip front" : "card back"} `} >
        
        <div id="questionSide" className=''>
        <div id="question" className='grid grid-flow-row grid-cols-1 bg-neutral-100 border border-black rounded-t-md p-5 text-black text-md font-mono justify-items-start mb-4'>
        <p className=''>{questions[currentQuestion].questionText}</p>
        </div>
        
        <div id="answers" className='grid grid-flow-row grid-cols-1 bg-neutral-100 border border-black rounded-b-md p-5 text-black text-md font-mono justify-items-start'>
        
        <div className='form-check row-span-1 py-2'>
        <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-black bg-white text-amber-32 checked:bg-white checked:border-black focus:ring-neutral-800 transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-3 cursor-pointer" type="radio" value={questions[currentQuestion].answerOptions[0].isCorrect}></input>
        <label className="form-check-label inline-block text-gray-800" htmlFor="flexRadio1">
            {questions[currentQuestion].answerOptions[0].answerText}
        </label>
       </div>
       <div className='form-check row-span-1 py-2'>
        <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-black bg-white text-amber-32 checked:bg-white checked:border-black focus:bg-amber-32 focus:ring-neutral-800 transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-3 cursor-pointer" type="radio" value={questions[currentQuestion].answerOptions[1].isCorrect}></input>
        <label className="form-check-label inline-block text-gray-800" htmlFor="flexRadio2">
        {questions[currentQuestion].answerOptions[1].answerText}
        </label>
       </div>
       <div className='form-check row-span-1 py-2'>
        <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-black bg-white text-amber-32 checked:bg-white checked:border-black focus:ring-neutral-800 transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-3 cursor-pointer" type="radio" value={questions[currentQuestion].answerOptions[2].isCorrect}></input>
        <label className="form-check-label inline-block text-gray-800" htmlFor="flexRadio2">
        {questions[currentQuestion].answerOptions[2].answerText}
        </label>
       </div>
       <div className='form-check row-span-1 py-2'>
        <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-b bg-white text-amber-32 checked:bg-white checked:border-black focus:ring-neutral-800 transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-3 cursor-pointer" type="radio" value={questions[currentQuestion].answerOptions[3].isCorrect}></input>
        <label className="form-check-label inline-block text-gray-800" htmlFor="flexRadio2">
        {questions[currentQuestion].answerOptions[3].answerText}
        </label>
       </div>
        </div>
        <div className='row-span-2 flex w-1/2 bg-yellow-32-0/50 self-center items-center pt-3 pb-2 justify-start space-x-3'>
            <button onClick={() => handleClick()} className= 'bg-neutral-100 py-2 w-1/4 rounded-md border border-black transition-colors duration-500 transform inline hover:bg-neutral-700 focus:bg-amber-32 hover:text-white focus:text-white focus:shadow-lg hover:shadow-md text-center scale-105' type="submit"> Submit
                </button>
                
        </div>
      </div>
      <div id="explainSide" className='card back bg-amber-32 w-full h-full'> 
      <div id="" className='bg-neutral-100 border border-black rounded-sm text-black text-md font-mono justify-items-start m-5 rounded-t-md h-80'>
        
      <div id="explanation" className='p-4 text-black text-md font-mono justify-items-center mb-4 w-full items-center'>
        <p className='w-full text-xl pb-4'>Business Email Compromise</p> <p> That&apos;s right! A <span className='underline'>business email compromise</span> is a cyberattack designed to gain access to money or sensitive business information via email fraud. </p>
        </div>
        </div>
        <div className='flex w-1/2 h-1/3 bg-yellow-32-0/50 items-start ml-5 justify-start'>
            <button onClick={() => handleClick()} className= 'bg-neutral-100 py-2 w-2/4 rounded-md border border-black transition-colors duration-500 transform inline hover:bg-neutral-700 focus:bg-amber-32 hover:text-white focus:text-white focus:shadow-lg hover:shadow-md text-center scale-105' type="submit"> Return to Question
                </button>
                
        </div>
      </div>
      </div>
      
      
      </div>
  )
}

export default FlipCard