const aviationQuestions = [
  {
    id: 1,
    question: "What is the primary purpose of aircraft wings?",
    options: [
      "To store fuel",
      "To generate lift",
      "To reduce drag",
      "To house the engines"
    ],
    correct: 1,
    difficulty: "easy",
    explanation: "Wings generate lift through the Bernoulli principle and Newton's third law of motion."
  },
  {
    id: 2,
    question: "What does IATA stand for?",
    options: [
      "International Air Transportation Association",
      "International Aviation and Travel Administration",
      "Integrated Air Traffic Authority",
      "International Aerospace Testing Agency"
    ],
    correct: 0,
    difficulty: "medium",
    explanation: "IATA (International Air Transport Association) represents over 290 airlines worldwide."
  },
  {
    id: 3,
    question: "At what altitude is the troposphere considered to end?",
    options: [
      "8 km",
      "12 km",
      "18 km",
      "25 km"
    ],
    correct: 1,
    difficulty: "hard",
    explanation: "The troposphere ends at approximately 12 km (40,000 feet), where the stratosphere begins."
  },
  {
    id: 4,
    question: "What is the maximum cruise altitude for most commercial aircraft?",
    options: [
      "20,000 feet",
      "35,000 feet",
      "43,000 feet",
      "50,000 feet"
    ],
    correct: 2,
    difficulty: "medium",
    explanation: "Most commercial aircraft cruise at 35,000-43,000 feet (FL350-FL430)."
  },
  {
    id: 5,
    question: "What does GPWS stand for?",
    options: [
      "Ground Proximity Warning System",
      "Global Positioning and Warning System",
      "Gravity and Pressure Warning System",
      "General Purpose Weather System"
    ],
    correct: 0,
    difficulty: "hard",
    explanation: "GPWS is a safety system that warns pilots when an aircraft is in immediate danger of hitting the ground."
  }
]

module.exports = aviationQuestions
