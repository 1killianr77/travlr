const mongoose = require('mongoose');
const Trip = require('../models/travlr'); // Register model

//const Trip = require('../models/trip'); // Register model
const Model = mongoose.model('trips');
const User = require('../models/users');

// Get: /trips - lists all trips
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const tripsList = async(req, res) => {
    const q = await Model
        .find({}) // No filter, return all records
        .exec();

        // Uncomment to show query results on console
        // console.log(q);
    
    if(!q){
        // Database returned no data
        return res
                .status(404)
                .json(err);
    }
    else{
        // Return resulting trip list
        return res
            .status(200)
            .json(q);
    }

};

// Get: /trips/:tripCode - lists a single trip
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const tripsFindByCode = async(req, res) => {
    const q = await Model
        .find({'code' : req.params.tripCode }) // Returns a single record
        .exec();

        // Uncomment to show query results on console
        // console.log(q);
    
    if(!q){
        // Database returned no data
        return res
                .status(404)
                .json(err);
    }
    else{
        // Return resulting trip
        return res
            .status(200)
            .json(q);
    }

};


// POST: /trips - Adds a new Trip
// Regardless of outcome, response must include HTML status code
// And JSON message to the requesting client
const tripsAddTrip = async (req, res) => { 
    getUser(req, res,
        (req, res) => { 
            trip = Trip.create({ 
                code: req.body.code, 
                name: req.body.name, 
                length: req.body.length, 
                start: req.body.start, 
                resort: req.body.resort, 
                perPerson: req.body.perPerson, 
                image: req.body.image, 
                description: req.body.description 
            }).then(trip  => { 
                if (trip) { 
                    return res 
                        .status(201) 
                        .json(trip);
                } 
            }).catch(err => { 
                return res 
                    .status(400) 
                    .json(err);
                }
            )  
        });
    };


// PUT: /trips/:tripCode - Adds a new Trip  
// Regardless of outcome, response must include HTML status code  
// and JSON message to the requesting client  
const tripsUpdateTrip = async (req, res) => { 
    getUser(req, res, 
        (req, res) => { 
            Trip 
                .findOneAndUpdate({'code': req.params.tripCode },{ 
                    code: req.body.code, 
                    name: req.body.name, 
                    length: req.body.length, 
                    start: req.body.start, 
                    resort: req.body.resort, 
                    perPerson: req.body.perPerson, 
                    image: req.body.image, 
                    description: req.body.description 
                }, { new: true }) 
                .then(trip => { 
                    if (!trip) { 
                        return res 
                            .status(404) 
                            .send({ 
                                message: "Trip not found with code " + req.params.tripCode 
                            }); 
                    } 
                    res.send(trip); 
                }).catch(err => { 
                    if (err.kind === 'ObjectId') { 
                        return res 
                            .status(404) 
                            .send({ 
                                message: "Trip not found with code " + req.params.tripCode 
                            }); 
                    } 
                    return res 
                        .status(500) // server error 
                        .json(err); 
                }); 
            } 
        ); 
    };


// Validate user login credentials
const getUser = (req, res, callback) => {
    console.log(req.auth.email);
    if (req.auth && req.auth.email) {
        user = User
            .findOne({ email: req.auth.email })
            .exec();
            if (!user) {
                return res
                    .status(404)
                    .json({ "message": "User not found" });
            }
            try{
                callback(req, res, user.name);
            }
            catch(err){
                console.log(err);
                return res
                    .status(404)
                    .json(err);
            }
    } 
    else {
        return res
            .status(404)
            .json({ "message": "Email missing" });
    }
};

module.exports = {
    tripsList,
    tripsFindByCode,
    tripsAddTrip,
    tripsUpdateTrip
};