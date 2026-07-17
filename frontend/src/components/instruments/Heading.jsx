import React from 'react'

function Heading({ heading }) {
  return (
    <div className="bg-gray-900 rounded-lg p-4">
      <h4 className="text-white text-sm font-bold mb-2">Heading Indicator</h4>
      <div className="bg-black rounded-lg p-6">
        <div className="relative w-full">
          {/* Compass rose */}
          <svg viewBox="0 0 200 200" className="w-full">
            {/* Background circle */}
            <circle cx="100" cy="100" r="90" fill="#000" stroke="#00ff00" strokeWidth="2" />

            {/* Cardinal directions */}
            <text x="100" y="25" textAnchor="middle" fill="#00ff00" fontSize="16" fontWeight="bold">
              N
            </text>
            <text x="175" y="105" textAnchor="middle" fill="#00ff00" fontSize="16" fontWeight="bold">
              E
            </text>
            <text x="100" y="185" textAnchor="middle" fill="#00ff00" fontSize="16" fontWeight="bold">
              S
            </text>
            <text x="25" y="105" textAnchor="middle" fill="#00ff00" fontSize="16" fontWeight="bold">
              W
            </text>

            {/* Heading marker */}
            <g transform={`rotate(${heading} 100 100)`}>
              <polygon points="100,20 110,50 90,50" fill="#ff0000" />
            </g>
          </svg>

          {/* Heading value */}
          <div className="text-center mt-2">
            <div className="text-2xl font-mono text-green-400 font-bold">{Math.round(heading)}°</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Heading
