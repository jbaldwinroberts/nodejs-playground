var http = require('http')
var url = require('url')

var port = process.argv[2];

http.createServer(function(req, res) {
	if(req.method != 'GET') return res.end("Send me GET reuqests only\n");

	var url_properties = url.parse(req.url);
	var date = new Date(url_properties.query.substring(4));

	if(url_properties.pathname == '/api/parsetime')
	{
		res.writeHead(200, {'Content-Type': 'application/json'});
		res.end(JSON.stringify({'hour': date.getHours(), 'minute': date.getMinutes(), 'second': date.getSeconds()}));

	}
	else if(url_properties.pathname == '/api/unixtime')
	{
		res.writeHead(200, {'Content-Type': 'application/json'});
		res.end(JSON.stringify({'unixtime': date.getTime()}));
	}
}).listen(port);	




