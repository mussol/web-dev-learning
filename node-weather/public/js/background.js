var colors = {
	'01d.png': '#FFED7C',
	'02d.png': '#71B1E1',
	'03d.png': '#71B1E1',
	'04d.png': '#85888B',
	'09d.png': '#85888B',
	'10d.png': '#71B1E1',
	'11d.png': '#85888B',
	'13d.png': '#85888B',
	'50d.png': '#85888B',
	'01n.png': '#315678',
	'02n.png': '#315678',
	'03n.png': '#315678',
	'04n.png': '#40454A',
	'09n.png': '#40454A',
	'10n.png': '#315678',
	'11n.png': '#40454A',
	'13n.png': '#40454A',
	'50n.png': '#40454A'
};

var icon = document.querySelector('img');
document.body.style.backgroundColor = colors[icon.src.slice(32)];


/*
day:
	yellow #FFED7C: 01d.png
	lightBlue #71B1E1: 02d.png, 03d.png, 10d.png
	lightGrey #85888B: 04d.png, 09d.png, 11d.png, 13d.png, 50d.png
night:
	darkBlue #315678: 01n.png, 02n.png, 03n.png, 10n.png
	darkGrey #40454A: 04n.png, 09n.png, 11n.png, 13n.png, 50n.png
*/