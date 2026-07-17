import React from 'react'

function Altimeter({ altitude }) {
  const thousands = Math.floor(altitude / 1000) % 10
  const hundreds = Math.floor(altitude / 100) % 10
  const tens = Math.floor(altitude / 10) % 10

  return (
    <div className="bg-gray-900 rounded-lg p-4">
      <h4 className="text-white text-sm font-bold mb-2">Altimeter</h4>
      <div className="bg-black rounded-lg p-6 text-center">
        <div className="text-4xl font-mono text-green-400 font-bold">
          {altitude.toLocaleString('en-US', { minimumIntegerDigits: 5, useGrouping: true })}
        </div>
        <div className="text-xs text-gray-500 mt-2">feet</div>
      </div>
    </div>
  )
}

export default Altimeter
