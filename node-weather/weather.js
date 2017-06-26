var request = require("request");

function getWeather (location, key) {
	let city = location.city; //"Barcelona";
	let country = location.coutry; //"ES" //ISO 3166 country codes
	let units = "metric"; // Celsius: "metric", Fahrenheit: "imperial"
	let url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=${units}&appid=${key}`; //using template literals
	request(url, function(err, response, body) {
		if (!err && response.statusCode == 200) {
			// let data = JSON.parse(body);
			// let descRaw = data.weather[0].description;
			// let message = `\nIt's ${data.main.temp.toFixed(1)} degrees in ${data.name}!
			// 			   \n${descRaw.charAt(0).toUpperCase() + descRaw.slice(1)}
			// 			   \nHumidity: ${data.main.humidity}%\n`;
			//console.log(message);
			// return {
		 //        desc: descRaw.charAt(0).toUpperCase() + descRaw.slice(1) || "",
		 //        icon_url: data.weather[0].icon ? "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png" : "",
		 //        loc: data.name || "your location",
		 //        temp: data.main.temp.toFixed(1),
		 //        humidity: Math.round(+data.main.humidity),
		 //        wind: Number(data.wind.speed).toFixed(1)
		 //    };
		 	return JSON.parse(body);
		}
	});
};


module.exports = getWeather;