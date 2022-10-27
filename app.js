var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var apiRouter=require('./routes/api');
var app = express();
const mongoose=require("mongoose");
const dbo = require('./db/conn');
//const dbConnect
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
mongoose.connect("mongodb://127.0.0.1:27017/learnmongo")// ?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.0
const db=mongoose.connection;
db.on('error',(error)=>console.log(error))
db.once('open',()=>console.log('open connection'))
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api',apiRouter);
//app.use(mongoose);
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
  res.render('error');
});
// dbo.connectToServer(function (err) {
//   if (err) {
//     console.error(err);
//     process.exit();
//   }

//   // start the Express server
//   // app.listen(PORT, () => {
//   //   console.log(`Server is running on port: ${PORT}`);
//   // });
// });


module.exports = app;
