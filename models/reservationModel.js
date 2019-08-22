var mongoose = require('mongoose')

const reservationSchema =mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {   
        type: String,
        require: true
    },
    roomtype: {
        type: String,
        require: true
    },
    arrivaldate: { 
        type: Date, 
        require:true
     },
    depraturedate: { 
        type: Date, 
        require:true
        
     },
    numberofguests: {
        type: Number,
        require: true
    }, 
    freepickup:{
        type: Boolean,
        require: true
    },
    flightnumber:{
        type: String, 
        require: true
    },
    specialrequest:{
        type: String,
        require:true
    },
},
{
    timestamps:true
}
);
module.exports=mongoose.model('reservationSchema',reservationSchema)