var http = require('http');  
var path = require('path');  
var st = require('st');

var server = http.createServer();  
var port = process.env.PORT || 3000;  
var mount = st({  
  path  : path.join(__dirname, './'),
  index : 'index.html'
});

server.on('request', onRequest);  
server.on('listening', onListening);

server.listen(port);

// -- Functions ------------------------------

function onListening () {  
  console.log("Server Running on port " + port);
}

function onRequest (req, res) {  
  mount(req, res, function (err) {
    if (err) return fail(err, res);

    res.statusCode = 404;
    res.end("404 Not Found: " + req.url);
  });
}

function fail (err, res) {  
  res.statusCode = 500;
  res.setHeader('Content-Type', 'text/plain');
  res.end(err.message);
}
