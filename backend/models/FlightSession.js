const mongoose = require('mongoose')

const flightSessionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  aircraft: {
    type: String,
    required: true
  },
  aircraftId: {
    type: Number,
    required: true
  },
  route: {
    departure: String,
    arrival: String
  },
  distance: {
    type: Number,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  averageAltitude: Number,
  maxAltitude: Number,
  averageSpeed: Number,
  weather: String,
  difficulty: {
    type: String,
    enum: ['easy', 'medium', 'hard'],
    default: 'easy'
  },
  score: Number,
  completedAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('FlightSession', flightSessionSchema)
