var cButton = document.querySelector('#cButton');
var fButton = document.querySelector('#fButton');
var degrees = document.querySelector('#degrees');
var unit = document.querySelector('#unit');

fButton.addEventListener('click', function() {
	if (unit.textContent === 'C') {
		let cDegrees = Number(degrees.textContent);
		let fDegrees = (cDegrees * 1.8 + 32).toFixed(1);
		degrees.textContent = fDegrees;
		unit.textContent = 'F';
		fButton.classList.add('active');
		cButton.classList.remove('active');
	}
});

cButton.addEventListener('click', function() {
	if (unit.textContent === 'F') {
		let fDegrees = Number(degrees.textContent);
		let cDegrees = ((fDegrees - 32) / 1.8).toFixed(1);
		degrees.textContent = cDegrees;
		unit.textContent = 'C';
		cButton.classList.add('active');
		fButton.classList.remove('active');
	}
});

/*
yellow #FFED7C: 01d.png
lightBlue #71B1E1: 02d.png, 03d.png, 10d.png
darkBlue #315678: 01n.png, 02n.png, 03n.png, 10n.png
grey #40454A: 04d.png, 09d.png, 11d.png, 13d.png, 50d.png, 
	  04n.png, 09n.png, 11n.png, 13n.png, 50n.png
*/