const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const multer = require("multer");
const fs = require('fs');
const cors = require('cors');

var originsWhitelist = [
  'http://localhost:4200',  //dev
  'http:127.0.0.1:4200',
  'http:192.168.1.7:4200',
  'http:192.168.43.136:4200',
  'http://www.hehe.com' //prod
]

var cors_opt = {
  origin: function(origin, callback) {
    console.log(origin);
    var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
    callback(null, isWhitelisted);
  },
  credentials: true
}

var index = require('./routes/api/origami.route');//'./routes/index');
var users = require('./routes/users');

// Get the API route ...

var api = require('./routes/api.route');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '../frontend/dist')));
// app.use('/books', express.static(path.join(__dirname, 'dist')));

// app.use(cors(cors_opt));
app.use(function(req, res, next) {
  /*console.log("ASDASDASDASD");
  var allowedOrigins = [
    'http://localhost:4200',  //dev
    'http://127.0.0.1:4200',
    'http://192.168.1.7:4200',
    'http://192.168.43.136:4200',
    'http://www.hehe.com' //prod
  ];

  var origin = req.headers.origin;
  if(allowedOrigins.indexOf(origin) > -1){
    console.log(origin);
  }
  res.setHeader('Access-Control-Allow-Origin', origin);*/
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});
app.use('/', index);
// app.use('/users', users);

//Use the API routes for all routes matching /api

app.use('/api', api);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//CORS
// app.use(function(req, res, next) {
//   console.log("ASDASDASDASD")
//   res.header("Access-Control-Allow-Origin", "http://localhost:4200");
//   res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
//   res.header("Access-Control-Allow-Credentials", true);
//   res.header("Access-Control-Allow-Headers", "Content-Type");
//   next();
// });

module.exports = app;
