var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var multer = require("multer");
var fs = require('fs');

var index = require('./routes/index');
var users = require('./routes/users');

//C++ thing trial
const addon = require('./build/Release/addon');

addon.preprocess("/home/joy/Documents/cmsc190.1/Trials/images/pattern",
  "/home/joy/Documents/cmsc190.1/Trials/images/pattern/output", 3.7, 4.7);
/*const { spawn } = require('child_process');
const reconstruct = spawn('/home/joy/openMVG_Build/Linux-x86_64-RELEASE/combined', []);

reconstruct.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

reconstruct.stderr.on('data', (data) => {
  console.log(`stderr: ${data}`);
});

reconstruct.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});*/


//C++ thing trial (end)

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
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

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
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

module.exports = app;
