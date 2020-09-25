const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const aboutRouter = require('./routes/about');
const contributeRouter = require('./routes/contribute');
const simulationsRouter = require('./routes/simulations');
const singlePendulumRouter = require('./routes/single_pendulum');
const spring_pendulum = require('./routes/spring_pendulum');
const projectileMotion2D = require('./routes/projectileMotion2D');
const pendulumSpringRouter = require('./routes/spring_double_pendulum');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/about', aboutRouter);
app.use('/contribute', contributeRouter);
app.use('/simulations', simulationsRouter);
app.use('/simulations/single_pendulum', singlePendulumRouter);
app.use('/simulations/spring_pendulum', spring_pendulum);
app.use('/simulations/projectileMotion2D', projectileMotion2D);
app.use('/simulations/spring_double_pendulum', pendulumSpringRouter);

// Stylesheets
app.use(express.static(__dirname + '/public'));
//app.use("/styles",express.static(__dirname + "/styles"));

// catch 404 and forward to error handler
//app.use(function(req, res, next) {
  //next(createError(404));
//});

//  error handler
//app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  //res.locals.message = err.message;
  //res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  //res.status(err.status || 500);
  //res.render('error');
//});

module.exports = app;
