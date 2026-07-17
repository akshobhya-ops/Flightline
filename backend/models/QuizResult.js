const mongoose = require('mongoose')

const quizResultSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  score: {
    type: Number,
    required: true
  },
  totalQuestions: {
    type: Number,
    required: true
  },
  percentage: {
    type: Number,
    required: true
  },
  difficulty: {
    type: String,
    enum: ['easy', 'medium', 'hard', 'mixed'],
    default: 'mixed'
  },
  answers: [{
    questionId: Number,
    selectedOption: Number,
    correct: Boolean,
    explanation: String
  }],
  completedAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('QuizResult', quizResultSchema)
