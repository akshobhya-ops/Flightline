import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-white font-bold text-2xl flex items-center gap-2">
            <span>✈️</span>
            <span>Flightline</span>
          </Link>
          <div className="flex gap-8">
            <Link to="/" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md transition">
              Home
            </Link>
            <Link to="/chat" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md transition">
              💬 Chat
            </Link>
            <Link to="/quiz" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md transition">
              🎮 Quiz
            </Link>
            <Link to="/simulator" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md transition">
              🚁 Simulator
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
