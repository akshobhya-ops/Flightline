# Getting Started with Flightline

## Installation

### Prerequisites
- Node.js (v16+)
- npm or yarn
- MongoDB (for database features)

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The frontend will start at `http://localhost:3000`

### Backend Setup

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

The backend will start at `http://localhost:5000`

## Features

### 1. 🤖 Aviation ChatBox
Ask questions about aviation and aerospace with our AI-powered chatbot.
- Real-time responses
- Source references
- Topic suggestions

### 2. 🎮 Interactive Quiz Game
Test your aviation knowledge with multiple difficulty levels.
- 50+ questions covering various topics
- Instant feedback and explanations
- Leaderboard system
- Progress tracking

### 3. ✈️ 3D Flight Simulator
Experience realistic flight dynamics.
- Multiple aircraft models (Boeing 747, Airbus A380, Cessna 172, etc.)
- Physics-based flight dynamics
- Weather simulation
- Real airports database
- Realistic instruments
- Flight logging and statistics

## Project Structure

```
Flightline/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ChatBox.jsx
│   │   │   ├── QuizGame.jsx
│   │   │   ├── FlightSimulator.jsx
│   │   │   └── instruments/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── index.css
│   └── package.json
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── utils/
│   ├── data/
│   └── server.js
└── README.md
```

## API Endpoints

### Chat
- `POST /api/chat/message` - Send message to chatbot
- `GET /api/chat/suggestions` - Get chat suggestions

### Quiz
- `GET /api/quiz/questions` - Get quiz questions
- `POST /api/quiz/submit` - Submit answers
- `GET /api/quiz/leaderboard` - Get leaderboard

### Simulator
- `GET /api/simulator/aircraft` - Available aircraft
- `POST /api/simulator/save-flight` - Save flight session
- `GET /api/simulator/flights` - User's flight history

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get user profile

## Technologies Used

**Frontend:**
- React 18
- Vite
- Three.js
- React Three Fiber
- Tailwind CSS

**Backend:**
- Express.js
- Node.js
- MongoDB
- Mongoose

**3D Graphics:**
- Three.js
- Babylon.js (optional)

**AI/NLP:**
- OpenAI API
- Custom aircraft database

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - see LICENSE file for details

## Support

For questions or issues, please open an issue on GitHub.

## Future Enhancements

- [ ] Multiplayer flights
- [ ] Advanced weather simulation
- [ ] Autopilot system
- [ ] Mobile app
- [ ] Voice commands
- [ ] Real-time multiplayer leaderboard
- [ ] Custom flight scenarios
- [ ] Integration with real aviation data

## Acknowledgments

- Aviation data from various open sources
- 3D models and physics inspiration from flight simulator communities
- Special thanks to the open-source community
