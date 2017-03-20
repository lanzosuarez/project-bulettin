var express = require('express'),
  path = require('path'),
  favicon = require('serve-favicon'),
  logger = require('morgan'),
  cookieParser = require('cookie-parser'),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose');

var index = require('./routes/index');
var auth = require('./routes/auth');
var sched = require('./routes/sched');
var event = require('./routes/event');

const passport = require('passport'),
    session = require('express-session'),
    LocalStrategy = require('passport-local').Strategy,
    store = require('./session-store'),
    methodOverride = require('method-override'),
    restify = require('express-restify-mongoose');

const uri = process.env.MONGOLAB_URI || 'mongodb://lanzosuarez:bobotngacla1234@ds143777.mlab.com:43777/cpe-bulettin';
//const uri = 'localhost:27017/cpe-bulletin';
mongoose.connect(uri, function(err){
    if(err){
        console.log("Error connection to DB!");
        return;
    }
    else{
        console.log("Successfully connected!");
    }
});

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//SESSION SETUP
app.use(session({
  secret: 'This is a secret',
  cookie: {
    maxAge: 1000 * 60 * 60
  },
  store: store,
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
require('./passport-init');


app.use('/', index);
app.use('/auth', auth);
app.use('/sched', sched);
app.use('/event', event);

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  return res.render('index');
  // var err = new Error('Not Found');
  // err.status = 404;
  // next(err);
});

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;
