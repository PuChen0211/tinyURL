/**
 * Created by puchen on 8/12/16.
 */
var express = require('express');
var app = express();
var restRouter = require('./routes/rest');
var redirectRouter = require('./routes/redirect');
var indexRouter = require('./routes/index');
var mongoose = require('mongoose');

mongoose.connect("mongodb://username:pwd@ds045785.mlab.com:45785/url_db");

app.use('/public', express.static(__dirname + "/public"));

app.use('/api/v1', restRouter);

app.use('/', indexRouter);

app.use('/:shortUrl', redirectRouter);

app.listen(3000);