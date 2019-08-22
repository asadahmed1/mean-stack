const express = require('express')
var routes = express.Router()
var reservationControllers = require('../controllers/reservationController')
//save reservaation
routes.post('/reservationss',reservationControllers.reservation)
//getone reservation
routes.get('/getonereservation',reservationControllers.getone)
//delete one reservation
routes.delete('/deletereservation',reservationControllers.removereservation)
//update reservation
routes.put('/updatereservation',reservationControllers.updatereservation)
//get all reservations
routes.get('/getall',reservationControllers.allreservations)



module.exports = routes