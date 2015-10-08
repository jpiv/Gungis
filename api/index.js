express = require('express');
path = require('path');

var app = express();
var port = 8000;

app.use(function() {
	console.log('Request...');
});

app.use(express.static(path.resolve(__dirname, '../frontend')));
console.log("Server listening on port", port + "...");
app.listen(port);
