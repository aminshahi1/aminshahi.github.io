const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended : false}));

app.set('view engine', 'ejs');

app.listen(8080);

app.use('/', require('./routes/router'));