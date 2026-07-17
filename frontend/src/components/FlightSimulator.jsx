import React, { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Sky, Stars, PerspectiveCamera, OrbitControls } from '@react-three/drei'

function Aircraft() {
  return (
    <mesh position={[0, 5, 0]}>
      {/* Fuselage */}
      <cylinderGeometry args={[0.5, 0.5, 10, 32]} />
      <meshStandardMaterial color="#ffffff" />
      
      {/* Wings */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[20, 0.5, 3]} />
        <meshStandardMaterial color="#0066cc" />
      </mesh>
    </mesh>
  )
}

function Scene() {
  return (
    <>
      <Sky distance={450000} sunPosition={[100, 100, 100]} inclination={0} azimuth={0.25} />
      <ambientLight intensity={1} />
      <directionalLight position={[100, 100, 100]} intensity={1.5} />
      
      {/* Ground */}
      <mesh position={[0, -50, 0]} rotation={[0, 0, 0]}>
        <planeGeometry args={[500, 500]} />
        <meshStandardMaterial color="#2d5016" />
      </mesh>

      {/* Aircraft */}
      <Aircraft />

      <OrbitControls />
    </>
  )
}

function FlightSimulator() {
  const [speed, setSpeed] = useState(0)
  const [altitude, setAltitude] = useState(5000)
  const [heading, setHeading] = useState(0)

  return (
    <div className="max-w-7xl mx-auto pt-8 pb-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {/* 3D Canvas */}
        <div className="lg:col-span-3 bg-white rounded-lg shadow-lg overflow-hidden" style={{ height: '600px' }}>
          <Canvas>
            <PerspectiveCamera makeDefault position={[50, 30, 50]} />
            <Scene />
          </Canvas>
        </div>

        {/* Control Panel */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Flight Controls</h3>
          
          {/* Speed Control */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Speed (kt): {speed}
            </label>
            <input
              type="range"
              min="0"
              max="500"
              value={speed}
              onChange={(e) => setSpeed(Number(e.target.value))}
              className="w-full"
            />
          </div>

          {/* Altitude Control */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Altitude (ft): {altitude.toLocaleString()}
            </label>
            <input
              type="range"
              min="0"
              max="35000"
              value={altitude}
              onChange={(e) => setAltitude(Number(e.target.value))}
              className="w-full"
            />
          </div>

          {/* Heading Control */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Heading (°): {heading}
            </label>
            <input
              type="range"
              min="0"
              max="359"
              value={heading}
              onChange={(e) => setHeading(Number(e.target.value))}
              className="w-full"
            />
          </div>

          {/* Instruments Display */}
          <div className="bg-gray-100 rounded-lg p-4 space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-700">Speed:</span>
              <span className="font-bold">{speed} kt</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700">Altitude:</span>
              <span className="font-bold">{(altitude / 100).toFixed(1)}k ft</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700">Heading:</span>
              <span className="font-bold">{heading}°</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700">Status:</span>
              <span className="font-bold text-green-600">Flying</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FlightSimulator
