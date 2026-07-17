const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const chatRoutes = require('./routes/chat')
const quizRoutes = require('./routes/quiz')
const simulatorRoutes = require('./routes/simulator')

dotenv.config()

const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.use('/api/chat', chatRoutes)
app.use('/api/quiz', quizRoutes)
app.use('/api/simulator', simulatorRoutes)

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'Flightline API is running' })
})

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ error: 'Internal server error' })
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Flightline Backend running on port ${PORT}`)
})

module.exports = app
