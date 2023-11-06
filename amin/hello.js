const express = require('express');
const app = express();

require('dotenv').config();
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended : false}));
const mongoose = require('mongoose');

const PORT = process.env.PORT || 8080;

mongoose.set('strictQuery', false);

mongoose.connect('mongodb://127.0.0.1:27017/test').then(()=>{
    console.log("Connected to Mongodb");
});




app.set('view engine', 'ejs');

app.use('/', require('./routes/router'));

app.listen(8080, ()=>{
    console.log("Server is running on Port 8080...");
});




