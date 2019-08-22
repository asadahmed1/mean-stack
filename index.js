var express = require('express');
var mongoose = require('mongoose')
var cors = require('cors')
var bodyParser = require('body-parser')
var path = require('path')
var routes = require('./routes/reservationRoutes')
//port number

var app = express();

const port= 3000



app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname,'public')));

// mongoose.connection.openUri('mongodb://localhost:27017/reservation',{useNewUrlParser:true});
// mongoose.connection.on('connected',() => {
//     console.log("connected to db")
// })
// mongoose.connection.on('error',(err)=>{
//     if(err){
//         console.log(`Conenction failed ${err}`)
//     }
// })

app.use('/api',routes)

//listen port
app.listen(process.env.PORT||port,()=>{
    console.log(`Port ${port}`)
})
