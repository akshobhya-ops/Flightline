import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Welcome to Flightline
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Your comprehensive platform for aviation and aerospace learning
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Chatbox Card */}
          <Link to="/chat" className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition transform hover:scale-105">
            <div className="text-5xl mb-4">💬</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Aviation ChatBox</h2>
            <p className="text-gray-600 mb-4">
              Ask questions about aviation and aerospace. Get instant answers from our AI-powered chatbot.
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Start Chatting
            </button>
          </Link>

          {/* Quiz Game Card */}
          <Link to="/quiz" className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition transform hover:scale-105">
            <div className="text-5xl mb-4">🎮</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Quiz Game</h2>
            <p className="text-gray-600 mb-4">
              Test your aviation knowledge with interactive quizzes covering multiple difficulty levels.
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Start Quiz
            </button>
          </Link>

          {/* Flight Simulator Card */}
          <Link to="/simulator" className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition transform hover:scale-105">
            <div className="text-5xl mb-4">���</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">3D Flight Simulator</h2>
            <p className="text-gray-600 mb-4">
              Experience realistic flight dynamics with multiple aircraft and immersive 3D environments.
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Launch Simulator
            </button>
          </Link>
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600">50+</div>
              <p className="text-gray-600">Aircraft Models</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600">1000+</div>
              <p className="text-gray-600">Quiz Questions</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600">24/7</div>
              <p className="text-gray-600">AI Chatbot Support</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600">40K+</div>
              <p className="text-gray-600">Active Users</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
