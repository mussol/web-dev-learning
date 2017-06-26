var express = require('express'),
	request = require('request'),
	weather = require('./weather.js'),
	location = require('./location.js');

//get API key
require('dotenv').config();
var apiKey = process.env.apiKey;

//define port
var port = process.env.PORT || 3000;

//create app
var app = express();

//set view engine
app.set("view engine", "ejs");

//app.use(express.static('assets'));

//ROUTES
app.get("/", function(req, res) {
	var data = weather(location, apiKey);
	res.render("home", {data: data});
});

//start server
app.listen(port, function() {
	console.log(`Weather app listening on port ${port}!`);
});