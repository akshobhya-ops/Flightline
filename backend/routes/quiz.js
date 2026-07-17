const express = require('express')
const router = express.Router()
const QuizController = require('../controllers/quizController')

// Quiz endpoints
router.get('/questions', QuizController.getQuestions)
router.post('/submit', QuizController.submitQuiz)
router.get('/leaderboard', QuizController.getLeaderboard)

module.exports = router
