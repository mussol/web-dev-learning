const request = require("request");

function getLocation (ip, callback) {
	request(`http://ip-api.com/json/${ip}`, function(err, response, body) {
		if (!err && response.statusCode == 200) {
			let loc = JSON.parse(body);
			if (loc.lat === undefined || loc.lon === undefined) {
				console.log('Could not get latitude/longitude. Client\'s IP address might be blocked.');
			}
			callback(loc);
		} else {
			console.log('Sorry, could not get location. Error: ', err);
		}
	});
};

module.exports = getLocation;