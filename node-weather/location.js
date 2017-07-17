const request = require("request");

function getLocation (ip, callback) {
	if (ip === '::1') {ip = '';}
	request(`http://ip-api.com/json/${ip}`, function(error, response, body) {
		if (!error && response.statusCode == 200) {
			let loc = JSON.parse(body);
			if (loc.lat === undefined || loc.lon === undefined) {
					console.log(`Could not get latitude/longitude.`);
			}
			callback(loc);
		} else {
			console.log(`Error getting location by IP. ${error}`);
		}
	});
};

module.exports = getLocation;