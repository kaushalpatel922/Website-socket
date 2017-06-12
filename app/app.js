var express = require('express');
var app = express();
var dataFile = require('./data/data.json');

app.set('port', process.env.PORT || 3000);

app.get('/', function(request, response) {
  response.send('<h1>Virtual Conferences</h1>');
});

var server = app.listen(app.get('port'), function() {
  console.log('listening to port '+ app.get('port'));
});
