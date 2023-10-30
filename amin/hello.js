const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended : false}));

const methodOverride = require('method-override');
app.use(methodOverride('method'));
app.set('view engine', 'ejs');

app.listen(8080);

app.use('/', require('./routes/router'));