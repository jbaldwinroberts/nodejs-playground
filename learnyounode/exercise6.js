var search = require('./exercise6_module.js')

var dir = process.argv[2];
var ext = process.argv[3];

search(dir, ext, function(err, data){
	data.forEach(function(file) {
		console.log(file);
	});
});