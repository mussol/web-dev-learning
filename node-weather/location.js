const request = require("request");
// const geolocation = require('geolocation');

function getLocation (callback) {
	request('http://ip-api.com/json', function(err, response, body) {
		if (!err && response.statusCode == 200) {
			let loc = JSON.parse(body);
			callback(loc);
		} else {
			console.log('An error occurred in getLocation func: ', err);
		}
	});
};


// Alternative (not working):
// function getLocation(callback) {
// 	geolocation.getCurrentPosition (function (err, position) {
// 		if (err) {
// 			console.log("Geolocation is not supported by this browser.");
// 		}
// 		callback(position.coords);
// 	});
// };

module.exports = getLocation;