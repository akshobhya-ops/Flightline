import React from 'react'

function VerticalSpeed({ verticalSpeed }) {
  const isClimbing = verticalSpeed > 0
  const color = isClimbing ? 'text-green-400' : verticalSpeed < 0 ? 'text-red-400' : 'text-white'

  return (
    <div className="bg-gray-900 rounded-lg p-4">
      <h4 className="text-white text-sm font-bold mb-2">Vertical Speed</h4>
      <div className="bg-black rounded-lg p-6 text-center">
        <div className={`text-4xl font-mono ${color} font-bold`}>
          {Math.round(verticalSpeed)}
        </div>
        <div className="text-xs text-gray-500 mt-2">ft/min</div>
      </div>
    </div>
  )
}

export default VerticalSpeed
