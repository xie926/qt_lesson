var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index'); // 引入index.js路由配置
var usersRouter = require('./routes/users'); // 引入user.js路由配置

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views')); // 指定视图文件夹views
app.set('view engine', 'ejs'); // 指定视图引擎ejs

// 使用刚刚加载的资源
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); // 指定公共资源的文件夹为 public

app.use('/', indexRouter); // 当路径为'/', 即http://localhost:3000时，匹配index.js路由文件
app.use('/users', usersRouter);

// catch 404 and forward to error handler
// 匹配404，即路径未匹配时，不是报错
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
// 路径匹配错误时
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
