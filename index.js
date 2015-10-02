s = require('express');
var app = express();
var port = 3002;
app.use(express.static(__dirname));
console.log("Server listening on port", port + "...");
app.listen(port);
