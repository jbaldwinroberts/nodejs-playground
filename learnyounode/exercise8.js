var http = require('http')

var url = process.argv[2];

http.get(url, function(response) {
	response.setEncoding('utf8');
	var message = "";
	response.on("data", function(data) {
		message += data;
	});
	response.on("end", function(data) {
		console.log(message.length);
		console.log(message);
	});
});
