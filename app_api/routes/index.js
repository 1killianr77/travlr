const express = require('express'); // Express app
const router = express.Router();    // Router logic

// Import controllers to route
const tripsController = require('../controllers/trips');

// Define route for trips endpoint
router
    .route('/trips')
    .get(tripsController.tripsList) // GET method routes tripList
    .post(tripsController.tripsAddTrip); // POST method adds a trip

// GET method routes tripsFindByCode - requires parameter
// PUT method routes tripsFindByCode - requires parameter
router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode) 
    .put(tripsController.tripsUpdateTrip);

module.exports = router;