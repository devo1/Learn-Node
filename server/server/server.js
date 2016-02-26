// Declaration and imports--- EAP/B.C.F.L.M.
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var favicon = require('favicon');
var logger = require('morgan');
var mongoose = require('mongoose');

// App.set view engine
app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'views'));

//App.use the C.L.E.B.B
app.use(cookieParser());
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Import routes
var routes = require('./routes/index');   //created by express
var users = require('./routes/users');    //created by express
var videos  = require('./routes/videos');  // This is what I created

// App.use the routes
app.use('/', routes);
app.use('/users', users);
app.use('/api/videos', videos);



module.exports = app;



app.listen(3000);
console.log("Visit your web page at http://localhost:3000");