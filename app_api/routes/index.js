const express = require('express'); // Express app
const router = express.Router();    // Router logic
const {expressjwt: jwt} = require('express-jwt');
const auth = jwt({
    secret: process.env.JWT_SECRET,
    algorithms: ['HS256'],
    userProperty: 'payload'
});

// Import controllers to route
const tripsController = require('../controllers/trips');
const authController = require('../controllers/authentication');

router
    .route('/login')
    .post(authController.login);

router
    .route('/register')
    .post(authController.register);

// Define route for trips endpoint
router
    .route('/trips')
    .get(tripsController.tripsList) // GET method routes tripList
    .post(auth, tripsController.tripsAddTrip); // POST method adds a trip

// GET method routes tripsFindByCode - requires parameter
// PUT method routes tripsFindByCode - requires parameter
router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode) 
    .put(auth, tripsController.tripsUpdateTrip);

module.exports = router;