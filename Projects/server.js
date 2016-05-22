////var http = require('http');
////var static = require('node-static');
////var file = new static.Server('.');

////http.createServer(function (req, res) {
////    file.serve(req, res);
////}).listen(8080);

////console.log('Server running on port 8080');

//var http = require('http');
//var url = require('url');
//var fs = require("fs");
//var static = require('node-static');
//var file = new static.Server('.', {
//  cache: 0
//});

//function accept(req, res) {
//    res.writeHead(200, { 'Content-Type': 'text/plain', "Access-Control-Allow-Origin": "*" });

//  if (req.url == '/profile.html') {
//    // искусственная задержка для наглядности
//      fs.readFile("profile.html", function (err, data) {
//          res.write(data);
//          res.end();
//              //res.end();
//          });
//        //file.serve(req, res);

//  } else {
  
//      response.writeHead(200, {'Content-Type': 'text/html'});
//      response.write('<b>Hey there!</b><br /><br />This is the default response. Requested URL is: ' + request.url);
//      response.end();
//  }
//  }



//}


//// ------ запустить сервер -------

//if (!module.parent) {
//  http.createServer(accept).listen(8080);
//} else {
//  exports.accept = accept;
//}

var http = require('http');
var fs = require("fs");
http.createServer(function (request, response) {
 //   if (request.url === "/profile.html") {
        var req = request.url.substr(1);
        fs.readFile(req, function (err, data) {
            response.writeHead(200, { 'Content-Type': 'text/plain', "Access-Control-Allow-Origin": "*" });
            response.write(data);
            response.end();
        });
    //}
    //else {
    //    response.writeHead(200, { 'Content-Type': 'text/plain', "Access-Control-Allow-Origin": "*" });
    //    response.write('<b>Hey there!</b><br /><br />This is the default response. Requested URL is: ' + request.url);
    //    response.end();
    //}
}).listen(3000);

