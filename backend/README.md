# Flightline Backend

Express.js API server for Flightline aviation learning platform.

## Setup

```bash
npm install
npm run dev
```

## Endpoints

### Chat API
- `POST /api/chat/message` - Send a message to the aviation chatbot
- `GET /api/chat/suggestions` - Get chat suggestions

### Quiz API
- `GET /api/quiz/questions` - Get quiz questions
- `POST /api/quiz/submit` - Submit quiz answers
- `GET /api/quiz/leaderboard` - Get leaderboard

### Simulator API
- `GET /api/simulator/aircraft` - Get available aircraft
- `POST /api/simulator/save-flight` - Save a flight session
- `GET /api/simulator/flights` - Get user's flights

## Environment Variables

Create a `.env` file:

```
PORT=5000
MONGODB_URI=your_mongodb_connection
OPENAI_API_KEY=your_openai_api_key
```

## Database Models

- User
- QuizResult
- FlightSession
- ChatHistory
