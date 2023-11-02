const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended : false}));

const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');


app.use(cookieParser('rrfkijuhsjsfosuihfnusifughsibviusgehnjf@@4rt$%f2@$%j8'));
app.use(session({
    secret: 'roiuyhfienioeijvohneifeuheibfiejbi#$Oiuh$%@oif',
    resave: true,
    saveUninitialized: true,
    cookie: { secure: true }
}))
app.use(flash());




const methodOverride = require('method-override');
app.use(methodOverride('method'));
app.set('view engine', 'ejs');


app.listen(8080);


app.use('/', require('./routes/router'));