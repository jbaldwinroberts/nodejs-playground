var net = require('net')
var strftime = require('strftime')

var port = process.argv[2];

net.createServer(function(socket) {
	//console.log(strftime('%Y-%m-%d %R'));
	socket.write(strftime('%Y-%m-%d %R'));
	socket.end('\n');
}).listen(port);