
var http = require('http');
var fs = require("fs");
http.createServer(function (request, response) {

        var req = request.url.substr(1);
        fs.readFile(req, function (err, data) {
            response.writeHead(200, { 'Content-Type': 'text/plain', "Access-Control-Allow-Origin": "*" });
            response.write(data);
            response.end();
        });

}).listen(3000);

