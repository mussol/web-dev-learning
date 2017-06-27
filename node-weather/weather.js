const request = require("request");

//access to the API key
require('dotenv').config();

function getWeather (location, callback) {
	let city = location.city; //"Barcelona"; //req.body.city;
	let country = location.country; //"ES" //ISO 3166 country codes //req.body.country;
	let units = "metric"; // Celsius: "metric", Fahrenheit: "imperial"
	let key = process.env.apiKey;
	let url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=${units}&appid=${key}`; //using template literals
	request(url, function(err, response, body) {
		if (!err && response.statusCode == 200) {
			let data = JSON.parse(body);
			callback({
				desc: data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1) || '',
				icon_url: data.weather[0].icon ? `http://openweathermap.org/img/w/${data.weather[0].icon}.png` : '',
				loc: `${data.name}, ${data.sys.country}` || 'your location',
				temp: data.main.temp.toFixed(1),
				temp_min: data.main.temp_min.toFixed(1),
				temp_max: data.main.temp_max.toFixed(1),
				humidity: Math.round(data.main.humidity),
				wind: Number(data.wind.speed).toFixed(1),
				units: units
		    });
		} else {
			console.log('An error occurred in getWeather func: ', err);
		}
	});
};

module.exports = getWeather;