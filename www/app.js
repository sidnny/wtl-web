var createError = require('http-errors');
var express = require('express');
var hbs = require('hbs');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var proxy = require('http-proxy-middleware');

var slack = require('./routes/slack');
var router = require('./routes/index');

var app = express();

hbs.registerHelper('date', function(time, options) {
  const date = new Date(time);

  switch (options.hash.type) {
    case "day":
      return date.toLocaleString('en-US', {timeZone: 'America/New_York', day: 'numeric'});
      break;
    case "month":
      return date.toLocaleString('en-US', {timeZone: 'America/New_York', month: 'short'});
      break;
    case "date":
    default:
      return date.toLocaleString('en-US', {timeZone: 'America/New_York', weekday: 'long', month: 'long', day: 'numeric', year: 'numeric'});
  }
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', router);
app.use('/slack', slack);
app.use('/join', function(req, res, next) {
  res.redirect(301, 'https://www.meetup.com/WTL-Women-Tech-Leaders-NYC/');
});

// app.use('/slackin', proxy({
//   target: 'http://slackin:3001',
//   changeOrigin: true,
//   pathRewrite: {
//     '/slackin': '/'
//   }
// }))


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
    res.render('error', { title: 'Error | Women Tech Leaders', pageId: 'error' });
});

module.exports = app;
