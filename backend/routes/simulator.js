const express = require('express')
const router = express.Router()
const SimulatorController = require('../controllers/simulatorController')

// Simulator endpoints
router.get('/aircraft', SimulatorController.getAircraft)
router.post('/save-flight', SimulatorController.saveFlight)
router.get('/flights', SimulatorController.getUserFlights)

module.exports = router
