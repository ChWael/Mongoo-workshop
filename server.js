const express = require('express');
const app = express();
const mongoose = require('mongoose');
const connectDB = require('./config/connectDB')
const router = require('./models/model');

//Middelware:
app.use(express.json());


//Connect to db:
connectDB();



//Routes;
app.use('/posts', router)

//listen to server
app.listen(4000, (err)=>{
    if(err){
        throw err
    }else{
        console.log("SERVER IS UP")
    }
});