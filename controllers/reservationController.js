const reservationSchema = require('../models/reservationModel')
const bcrypt = require('node-bcrypt')

const reservation = (req,res, next) => {

    let newReservation = new reservationSchema();

    newReservation.name = req.body.name;
    newReservation.email = req.body.email;
    newReservation.roomtype = req.body.roomtype;
    newReservation.arrivaldate = req.body.arrivaldate;
    newReservation.depraturedate = req.body.depraturedate;
    newReservation.numberofguests = req.body.numberofguests;
    newReservation.freepickup = req.body.freepickup;
    newReservation.flightnumber = req.body.flightnumber;
    newReservation.specialrequest = req.body.specialrequest;

    newReservation.save((err, result) => {

        if (err) {
            res.send(err)
        }
        else {
            res.status(200).json({
                message:"reserved Successfully",
                result
            })
            
        }
    })

}


//get one person reservation
const getone=(req,res)=>{
    reservationSchema.findById(req.body.id,(err,result)=>{
      if(err){
        res.send(err)
      }else{
        res.status(200).json({
          message:"data get succefully",
          result
        })
      }
    })
  }

  //delete reservation
  const removereservation=(req,res)=>{
    reservationSchema.findByIdAndDelete(req.body.id,(err,result)=>{
      if(err){
        res.send(err)
      }else{
        res.status(200).json({
          message:"data removed succefully",
          result
        })
      }
    })
  }

  //update reservations
  const updatereservation=(req,res)=>{
    reservationSchema.findByIdAndUpdate(req.body.id,req.body.reserve,{new:true},(err,result)=>{
      if(err){
        res.send(err)
      }else{
        res.status(200).json({
          message:"data updated succefully",
          result
        })
      }
    })
  }

  //get all reservations
  const allreservations=(req,res)=>{
    reservationSchema.find((err,result)=>{
      if(err){
        res.send(err)
      
      }
      else{
        res.status(200).json({
          message:"data save succesfully",
          result
        })
      }
    })
  }
  const test = (req,res)=>{
      //hello
  }
module.exports = {
    reservation,
    getone,
    removereservation,
    updatereservation,
    allreservations
}