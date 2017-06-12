var http = require('http');

var myServer = http.createServer(function(request, response) {
  //When response needs to write head for Request 200.
  response.writeHead(200, {"Content-Type" : "text/html"});
  //Writing to the client
  response.write('<h1>Virtual Conferences</h1>');
  //Done with all the responses
  response.end();
});

myServer.listen(3000);
console.log('Go to localhost:3000 on browser');
