const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
require('dotenv').config();

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/user');
const categoriesRouter = require('./routes/category');
const authRouter = require('./routes/auth');
const organizationsRouter = require('./routes/organization');
const entriesRouter = require('./routes/entry');
const awsRouter = require('./routes/aws');
const contactsRouter = require('./routes/contact')
const membersRouter = require('./routes/member');
const activitiesRouter = require('./routes/activity');
const testimonialsRouter = require('./routes/testimonials');

const app = express();
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/auth', authRouter);
app.use('/organizations', organizationsRouter);
app.use('/news', entriesRouter);
app.use('/contacts', contactsRouter);
app.use('/categories', categoriesRouter);
app.use('/members', membersRouter);
app.use('/activities', activitiesRouter);
app.use('/testimonials', testimonialsRouter);

// ROUTER PARA TESTEAR EL SERVICIO
// UPLOAD EN /files/upload
// GET FILE /files/getfile/:__filename
app.use('/files', awsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
