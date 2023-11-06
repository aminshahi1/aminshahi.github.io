const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended : false}));
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Amin').then(()=>{
    console.log("Connected to Mongodb");
});


app.set('view engine', 'ejs');

app.use('/', require('./routes/router'));

app.listen(8080, ()=>{
    console.log("Server is running on Port 8080...");
});




