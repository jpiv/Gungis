express = require('express');
var app = express();
var port = 8000;
app.use(express.static(__dirname));
app.use(function() {
	console.log('Request...');
});
console.log("Server listening on port", port + "...");
app.listen(port);
