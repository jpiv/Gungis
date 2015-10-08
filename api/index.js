express = require('express');
path = require('path');

var app = express();
var port = 8000;

app.use(function(req, res, next) {
	console.log('Request...');
	next();
});

app.use(express.static(path.resolve(__dirname, '../frontend')));
console.log("Server listening on port", port + "...");
app.listen(port);
