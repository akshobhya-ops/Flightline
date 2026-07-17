import React, { useState } from 'react'

const quizData = [
  {
    id: 1,
    question: "What is the primary purpose of aircraft wings?",
    options: [
      "To store fuel",
      "To generate lift",
      "To reduce drag",
      "To house the engines"
    ],
    correct: 1,
    difficulty: "easy"
  },
  {
    id: 2,
    question: "What does IATA stand for?",
    options: [
      "International Air Transportation Association",
      "International Aviation and Travel Administration",
      "Integrated Air Traffic Authority",
      "International Aerospace Testing Agency"
    ],
    correct: 0,
    difficulty: "medium"
  },
  {
    id: 3,
    question: "At what altitude is the troposphere considered to end?",
    options: [
      "8 km",
      "12 km",
      "18 km",
      "25 km"
    ],
    correct: 1,
    difficulty: "hard"
  }
]

function QuizGame() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [answered, setAnswered] = useState(false)

  const handleAnswerClick = (index) => {
    setSelectedAnswer(index)
    if (index === quizData[currentQuestion].correct) {
      setScore(score + 1)
    }
    setAnswered(true)
  }

  const handleNext = () => {
    const nextQuestion = currentQuestion + 1
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion)
      setSelectedAnswer(null)
      setAnswered(false)
    } else {
      setShowScore(true)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setScore(0)
    setShowScore(false)
    setSelectedAnswer(null)
    setAnswered(false)
  }

  return (
    <div className="max-w-2xl mx-auto pt-8 pb-8">
      <div className="bg-white rounded-lg shadow-lg p-8">
        {showScore ? (
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Quiz Complete!</h2>
            <div className="text-6xl font-bold text-blue-600 mb-4">
              {score} / {quizData.length}
            </div>
            <p className="text-xl text-gray-600 mb-8">
              You scored {Math.round((score / quizData.length) * 100)}%
            </p>
            <button
              onClick={resetQuiz}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Retake Quiz
            </button>
          </div>
        ) : (
          <div>
            {/* Progress Bar */}
            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-sm font-semibold text-gray-700">
                  Question {currentQuestion + 1}/{quizData.length}
                </span>
                <span className="text-sm font-semibold text-blue-600">
                  Score: {score}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestion + 1) / quizData.length) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Question */}
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {quizData[currentQuestion].question}
            </h3>

            {/* Options */}
            <div className="space-y-4 mb-6">
              {quizData[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => !answered && handleAnswerClick(index)}
                  disabled={answered}
                  className={`w-full p-4 text-left rounded-lg transition ${
                    selectedAnswer === index
                      ? index === quizData[currentQuestion].correct
                        ? 'bg-green-500 text-white'
                        : 'bg-red-500 text-white'
                      : answered && index === quizData[currentQuestion].correct
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  } ${answered ? 'cursor-default' : 'cursor-pointer'}`}
                >
                  {option}
                </button>
              ))}
            </div>

            {/* Next Button */}
            {answered && (
              <button
                onClick={handleNext}
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
              >
                {currentQuestion === quizData.length - 1 ? 'Finish' : 'Next'}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default QuizGame
