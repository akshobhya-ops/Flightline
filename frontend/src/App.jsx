import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import ChatBox from './components/ChatBox'
import QuizGame from './components/QuizGame'
import FlightSimulator from './components/FlightSimulator'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<ChatBox />} />
          <Route path="/quiz" element={<QuizGame />} />
          <Route path="/simulator" element={<FlightSimulator />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
