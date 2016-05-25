var fs = require('fs');
var path = require('path');

module.exports = function (dir, ext, callback) {
	fs.readdir(dir, function(err, data) {
		if (err) return callback(err, null);
		var data = data.filter(function(file) {
			return path.extname(file) == ('.' + ext);
		});
		callback(null, data);
	});
};