const express = require('express')
const router = express.Router()

// Mock authentication middleware for demo
const authMiddleware = (req, res, next) => {
  // TODO: Implement proper JWT authentication
  req.userId = 'demo-user-id'
  next()
}

router.post('/login', (req, res) => {
  // TODO: Implement login logic
  res.json({ token: 'mock-jwt-token', userId: 'demo-user-id' })
})

router.post('/register', (req, res) => {
  // TODO: Implement registration logic
  res.json({ success: true, userId: 'new-user-id' })
})

router.get('/profile', authMiddleware, (req, res) => {
  // TODO: Fetch user profile from database
  res.json({
    userId: req.userId,
    username: 'DemoUser',
    totalFlights: 15,
    totalQuizzesCompleted: 42,
    averageQuizScore: 85
  })
})

module.exports = router
