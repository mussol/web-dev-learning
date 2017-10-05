// Packages //
var path = require('path');
var fs = require('fs'); //handle files
var express = require('express');

// Imports //
var indexRoutes = require('./routes/index');

// Create app //
var app = express();

// View engine //
app.set('view engine', 'html');
app.engine('html', function (path, options, callbacks) {
    fs.readFile(path, 'utf-8', callback);
});

// Middleware //
app.use(express.static(__dirname));

// Use routes //
app.use('/', indexRoutes);

// Error handler //
app.use(function (err, req, res, next) {
    res.status(err.status || 500); //either err's status or 500 = server error
});

module.exports = app;