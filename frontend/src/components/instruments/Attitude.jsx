import React, { useEffect, useRef } from 'react'

function Attitude() {
  const canvasRef = useRef(null)
  const pitch = 0
  const roll = 0

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const radius = 100

    // Clear canvas
    ctx.fillStyle = '#1a1a2e'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Draw horizon
    ctx.save()
    ctx.translate(centerX, centerY)
    ctx.rotate((roll * Math.PI) / 180)

    // Sky
    ctx.fillStyle = '#87CEEB'
    ctx.fillRect(-radius, -radius - (pitch * 2), radius * 2, radius + (pitch * 2))

    // Ground
    ctx.fillStyle = '#8B7355'
    ctx.fillRect(-radius, -radius - (pitch * 2) + radius, radius * 2, radius - (pitch * 2))

    ctx.restore()

    // Draw aircraft symbol
    ctx.strokeStyle = '#ffffff'
    ctx.lineWidth = 2

    // Fuselage
    ctx.beginPath()
    ctx.moveTo(centerX, centerY - 20)
    ctx.lineTo(centerX, centerY + 20)
    ctx.stroke()

    // Wings
    ctx.beginPath()
    ctx.moveTo(centerX - 40, centerY)
    ctx.lineTo(centerX + 40, centerY)
    ctx.stroke()

    // Draw border
    ctx.strokeStyle = '#00ff00'
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
    ctx.stroke()
  }, [pitch, roll])

  return (
    <div className="bg-gray-900 rounded-lg p-4">
      <h4 className="text-white text-sm font-bold mb-2">Attitude Indicator</h4>
      <canvas
        ref={canvasRef}
        width={220}
        height={220}
        className="border-2 border-gray-700"
      />
    </div>
  )
}

export default Attitude
