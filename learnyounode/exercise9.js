var http = require('http')

var url_a = process.argv[2];
var url_b = process.argv[3];
var url_c = process.argv[4];

http.get(url_a, function(response) {
	response.setEncoding('utf8');
	var message = "";
	response.on("data", function(data) {
		message += data;
	});
	response.on("end", function(data) {
		console.log(message);

		http.get(url_b, function(response) {
			response.setEncoding('utf8');
			var message = "";
			response.on("data", function(data) {
				message += data;
			});
			response.on("end", function(data) {
				console.log(message);
				
				http.get(url_c, function(response) {
					response.setEncoding('utf8');
					var message = "";
					response.on("data", function(data) {
						message += data;
					});
					response.on("end", function(data) {
						console.log(message);
					});
				});
			});
		});
	});
});