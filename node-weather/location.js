var request = require("request");

function getLocation () {
	request('http://ipinfo.io', function(err, res, body) {
		if (!err && response.statusCode == 200) {
			return JSON.parse(body);
		}
	});
};


module.exports = getLocation;