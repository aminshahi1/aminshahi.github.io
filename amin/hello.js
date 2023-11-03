const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended : false}));

app.set('view engine', 'ejs');

app.use('/', require('./routes/router'));

app.listen(8080, ()=>{
    console.log("Server is running on Port 8080...");
});




