const aviationQuestions = require('../data/questions')

class QuizController {
  static async getQuestions(req, res) {
    try {
      const { difficulty, limit } = req.query
      let questions = aviationQuestions

      // Filter by difficulty if specified
      if (difficulty) {
        questions = questions.filter(q => q.difficulty === difficulty)
      }

      // Limit results if specified
      if (limit) {
        questions = questions.slice(0, parseInt(limit))
      }

      res.json({ questions })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }

  static async submitQuiz(req, res) {
    try {
      const { answers } = req.body // answers = [{ questionId, selectedOption }]

      if (!answers || !Array.isArray(answers)) {
        return res.status(400).json({ error: 'Invalid answers format' })
      }

      let score = 0
      const results = answers.map(answer => {
        const question = aviationQuestions.find(q => q.id === answer.questionId)
        if (!question) {
          return { questionId: answer.questionId, correct: false }
        }

        const isCorrect = answer.selectedOption === question.correct
        if (isCorrect) score++

        return {
          questionId: answer.questionId,
          correct: isCorrect,
          explanation: question.explanation
        }
      })

      const percentage = Math.round((score / answers.length) * 100)

      res.json({
        score,
        total: answers.length,
        percentage,
        results
      })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }

  static async getLeaderboard(req, res) {
    try {
      // Mock leaderboard data
      const leaderboard = [
        { rank: 1, username: 'PilotAce', score: 950, quizzes: 45 },
        { rank: 2, username: 'SkyWalker', score: 920, quizzes: 42 },
        { rank: 3, username: 'AviationPro', score: 890, quizzes: 38 },
        { rank: 4, username: 'CloudChaser', score: 850, quizzes: 35 },
        { rank: 5, username: 'FlightEnthusiast', score: 820, quizzes: 32 }
      ]
      res.json({ leaderboard })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }
}

module.exports = QuizController
