window.onload = function() {
	var url ="http://mysite.du.edu/~eoneil34/reds.json";
	var request = new XMLHttpRequest();
	request.open("GET", url);
	request.onload = function() {
		if (request.status == 200) {
			updateSales(request.responseText);
		}
};

request.send(null);

}