const express = require('express')
const router = express.Router()
const ChatController = require('../controllers/chatController')

// Chat endpoint
router.post('/message', ChatController.handleMessage)
router.get('/suggestions', ChatController.getSuggestions)

module.exports = router
