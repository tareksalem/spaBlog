var http = require("http");
var path = require("path");
var url = require("url");
var port = process.env.PORT || 3000;

function app(req, res) {
	res.end("hello");
}
var server = http.createServer(app);

server.listen(port);
