class SimulatorController {
  static async getAircraft(req, res) {
    try {
      const aircraft = [
        {
          id: 1,
          name: "Boeing 747",
          type: "Commercial",
          cruiseSpeed: 490,
          maxAltitude: 45100,
          range: 7325
        },
        {
          id: 2,
          name: "Airbus A380",
          type: "Commercial",
          cruiseSpeed: 490,
          maxAltitude: 43000,
          range: 8000
        },
        {
          id: 3,
          name: "Cessna 172",
          type: "General Aviation",
          cruiseSpeed: 122,
          maxAltitude: 13000,
          range: 800
        },
        {
          id: 4,
          name: "Boeing 787 Dreamliner",
          type: "Commercial",
          cruiseSpeed: 490,
          maxAltitude: 43000,
          range: 7635
        },
        {
          id: 5,
          name: "Airbus A320",
          type: "Commercial",
          cruiseSpeed: 460,
          maxAltitude: 43000,
          range: 3100
        }
      ]
      res.json({ aircraft })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }

  static async saveFlight(req, res) {
    try {
      const { userId, aircraftId, duration, distance, route } = req.body

      // TODO: Save to database
      const flight = {
        id: Math.random().toString(36).substr(2, 9),
        userId,
        aircraftId,
        duration,
        distance,
        route,
        timestamp: new Date()
      }

      res.json({ success: true, flight })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }

  static async getUserFlights(req, res) {
    try {
      const { userId } = req.query

      // TODO: Fetch from database
      const flights = [
        {
          id: 1,
          aircraft: "Boeing 747",
          distance: 2500,
          duration: 5,
          date: "2026-07-15"
        },
        {
          id: 2,
          aircraft: "Airbus A320",
          distance: 1200,
          duration: 2.5,
          date: "2026-07-16"
        }
      ]

      res.json({ flights })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }
}

module.exports = SimulatorController
