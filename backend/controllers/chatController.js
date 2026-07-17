class ChatController {
  static async handleMessage(req, res) {
    try {
      const { message } = req.body

      if (!message) {
        return res.status(400).json({ error: 'Message is required' })
      }

      // TODO: Integrate with OpenAI API or custom NLP model
      // For now, return a mock response
      const response = {
        reply: `You asked: "${message}". This is a demo response. Connect to OpenAI API for real AI responses.`,
        sources: [
          { title: 'Aviation Basics', url: '#' },
          { title: 'Aerospace Engineering', url: '#' }
        ]
      }

      res.json(response)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }

  static async getSuggestions(req, res) {
    try {
      const suggestions = [
        "How does an aircraft generate lift?",
        "What is the difference between pitch, roll, and yaw?",
        "Explain the Bernoulli principle",
        "What are the main components of an aircraft?",
        "How do jet engines work?"
      ]
      res.json({ suggestions })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }
}

module.exports = ChatController
