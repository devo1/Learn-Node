// Import modules--- B.C.E.F.L.M.P
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var express = require('express');
var favicon = require('serve-favicon');
var logger = require('morgan');
var mongoose = require('mongoose');
var path = require('path');

//Import routes
var videos  = require('./routes/videos');

// Setup app & view engine
var app = express();
app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'views'));

//Use apps C.L.E.B.B
app.use(cookieParser());
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Use the route
app.use('/api/videos', videos);


app.listen(3000);
console.log('Visit your web page at http://localhost:3000');