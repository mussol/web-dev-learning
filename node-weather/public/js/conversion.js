var cButton = document.querySelector('#cButton');
var fButton = document.querySelector('#fButton');
var degrees = document.querySelector('#degrees');
var unit = document.querySelector('#unit');
var min = document.querySelector('#min');
var max = document.querySelector('#max');
var wind = document.querySelector('#wind');
var windUnit = document.querySelector('#windUnit');

fButton.addEventListener('click', function() {
	if (unit.textContent === 'C') {
		//current temp
		let cDegrees = Number(degrees.textContent);
		let fDegrees = (cDegrees * 1.8 + 32).toFixed(1);
		degrees.textContent = fDegrees;
		unit.textContent = 'F';
		fButton.classList.add('active');
		cButton.classList.remove('active');
		//max temp
		let cMax = Number(max.textContent);
		let fMax = (cMax * 1.8 + 32).toFixed(0);
		max.textContent = fMax;
		//min temp
		let cMin = Number(min.textContent);
		let fMin = (cMin * 1.8 + 32).toFixed(0);
		min.textContent = fMin;
		//wind
		let cWind = Number(wind.textContent);
		let fWind = (cWind * 2.237).toFixed(0);
		wind.textContent = fWind;
		windUnit.textContent = 'mph';
	}
});

cButton.addEventListener('click', function() {
	if (unit.textContent === 'F') {
		//current temp
		let fDegrees = Number(degrees.textContent);
		let cDegrees = ((fDegrees - 32) / 1.8).toFixed(1);
		degrees.textContent = cDegrees;
		unit.textContent = 'C';
		cButton.classList.add('active');
		fButton.classList.remove('active');
		//max temp
		let fMax = Number(max.textContent);
		let cMax = ((fMax - 32) / 1.8).toFixed(0);
		max.textContent = cMax;
		//min temp
		let fMin = Number(min.textContent);
		let cMin = ((fMin - 32) / 1.8).toFixed(0);
		min.textContent = cMin;
		//wind
		let fWind = Number(wind.textContent);
		let cWind = (fWind * 0.447).toFixed(1);
		wind.textContent = cWind;
		windUnit.textContent = 'm/s';
	}
});

/*
yellow #FFED7C: 01d.png
lightBlue #71B1E1: 02d.png, 03d.png, 10d.png
darkBlue #315678: 01n.png, 02n.png, 03n.png, 10n.png
grey #40454A: 04d.png, 09d.png, 11d.png, 13d.png, 50d.png, 
	  04n.png, 09n.png, 11n.png, 13n.png, 50n.png
*/