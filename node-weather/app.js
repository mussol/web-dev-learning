//imports
const express = require('express'),
	  request = require('request'),
	  weather = require('./weather.js'),
	  location = require('./location.js');

//create instance
const app = express();

//expose the public folder
app.use(express.static(__dirname + '/public'));

//set up template engine
app.set('view engine', 'ejs');

//define port
var port = process.env.PORT || 3000;

function getClientIp(req) {
	var ipAddress;
	// Amazon EC2 / Heroku workaround to get real client IP
	var forwardedIpsStr = req.header('x-forwarded-for'); 
	if (forwardedIpsStr) {
		// 'x-forwarded-for' header may return multiple IP addresses in
		// the format: "client IP, proxy 1 IP, proxy 2 IP" so take the
		// the first one
		var forwardedIps = forwardedIpsStr.split(',');
		ipAddress = forwardedIps[0];
	}
	if (!ipAddress) {
		// Ensure getting client IP address still works in
		// development environment
		ipAddress = req.connection.remoteAddress;
	}
	return ipAddress;
};

//root route
app.get('/', function(req, res) {
  	// same as function getClientIp (not tested) --> 
  	// var ip = req.header('x-forwarded-for') ? 
  	// 			req.header('x-forwarded-for').split(',')[0] :
  	//			req.connection.remoteAddress;
  	location (getClientIp(req), function(loc) {
  		weather(loc,function(data) {
    		res.render('home', {data: data});
    	});
	});
});

//start server
app.listen(port, function() {
	console.log(`Weather app listening on port ${port}!`);
});