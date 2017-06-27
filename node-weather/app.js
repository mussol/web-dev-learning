//imports
const express = require('express'),
	  request = require('request'),
	  bodyParser = require('body-parser'),
	  weather = require('./weather.js'),
	  location = require('./location.js');

//create instance
const app = express();

//expose the public folder
app.use(express.static('public'));

//so we can make use of the req.body object
app.use(bodyParser.urlencoded({ extended: true }));

//set up template engine
app.set('view engine', 'ejs');

//define port
var port = process.env.PORT || 3000;

//routes
app.get('/', function(req, res) {
  	location (function(loc) {
  		weather(loc,function(data) {
    		res.render('home', {data: data});
    	});
	});
});

//start server
app.listen(port, function() {
	console.log(`Weather app listening on port ${port}!`);
});