const request = require("request");

function getLocation (callback) {
	request('http://ipinfo.io', function(err, response, body) {
		if (!err && response.statusCode == 200) {
			let loc = JSON.parse(body);
			callback(loc);
		} else {
			console.log('An error occurred in getLocation func: ', err);
		}
	});
};

module.exports = getLocation;