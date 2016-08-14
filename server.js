/**
 * Created by puchen on 8/12/16.
 */
var express = require('express');
var app = express();
var restRouter = require('./routes/rest');
var redirectRouter = require('./routes/redirect');

app.longToShortHash = {};
app.shortToLongHash = {};

app.use('/api/v1', restRouter); //generate short url
//redirect to long url, can cache anything except '/'
app.use('/:shortUrl', redirectRouter);

app.listen(3000);