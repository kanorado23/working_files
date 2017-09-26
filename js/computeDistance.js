/*eoneill 4510 javascript file to compute distance on the awesomem map that will not render the way I want. hooray */


function computeDistance(startCoords, destCoords, type) {
	var startLatRads = degreesToRadians(startCoords.latitude);
	var startLongRads = degreesToRadians(startCoords.longitude);
	var destLatRads = degreesToRadians(destCoords.latitude);
	var destLongRads = degreesToRadians(destCoords.longitude);

	var Radius = 6371; // radius of the Earth in km
	var distance = Math.acos(Math.sin(startLatRads) * Math.sin(destLatRads) + 
					Math.cos(startLatRads) * Math.cos(destLatRads) *
					Math.cos(startLongRads - destLongRads)) * Radius;
					
	if (type === 'miles') {
		distance = distance * 0.621371;
	}				

	return distance.toFixed(2);
}

function degreesToRadians(degrees) {
	radians = (degrees * Math.PI)/180;
	return radians;
}