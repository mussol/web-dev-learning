
var cButton = document.querySelector('#cButton');
var fButton = document.querySelector('#fButton');
var degrees = document.querySelector('#degrees');
var units = document.querySelector('#units');


fButton.addEventListener('click', function() {
	let fDegrees = degrees * 1.8 + 32;
	degrees.innerHTML = fDegrees;
	units.innerHTML = F;
	fButton.classList.add('active');
	cButton.classList.remove('active');
});

cButton.addEventListener('click', function() {
	let cDegrees = (degrees - 32) / 1.8;
	degrees.innerHTML = cDegrees;
	units.innerHTML = C;
	cButton.classList.add('active');
	fButton.classList.remove('active');
});

