import * as createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';


dotenv.config();

import indexRouter from './routes/index.js';
import usersRouter from './routes/users.js';

var app = express();
var router = express.Router();

const corsOptions = {
  origin: process.env.ORIGIN,
  optionsSuccessStatus: 200,
  methods: "OPTIONS,GET,HEAD,PUT,PATCH,POST,DELETE", // Acceptable methods
  credentials: true,
  'Access-Control-Allow-Origin': process.env.Frontend_URL,
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions)); // include before other routes

const __dirname = path.resolve();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/', usersRouter);

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

export default app;
