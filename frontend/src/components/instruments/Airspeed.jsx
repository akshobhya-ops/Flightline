import React from 'react'

function Airspeed({ speed }) {
  return (
    <div className="bg-gray-900 rounded-lg p-4">
      <h4 className="text-white text-sm font-bold mb-2">Airspeed Indicator</h4>
      <div className="bg-black rounded-lg p-6 text-center">
        <div className="text-4xl font-mono text-green-400 font-bold">
          {Math.round(speed)}
        </div>
        <div className="text-xs text-gray-500 mt-2">knots</div>
      </div>
    </div>
  )
}

export default Airspeed
