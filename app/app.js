var express = require('express');
var app = express();
var dataFile = require('./data/data.json');

app.set('port', process.env.PORT || 3000);

app.get('/', function(request, response) {
  response.send(`
    <h1>Welcome to JS Conferences</h1>
    <p>A place for JSConf US users who are passionate to talk about their experiences</p>`
  );
});


app.get('/speakers', function(request, response) {
  var info = '';
  dataFile.speakers.forEach(function(item) {
    info += `
    <li>
      ${item.name}
      <p>${item.summary}</p>
    </li>
    `;
  });
  response.send(`
    <h1>JS Conferences</h1>
    ${info}
  `);
});


app.get('/speakers/', function(request, response) {
  var info = '';
  dataFile.speakers.forEach(function(item) {
    info += `
    <li>
      ${item.name}
      <p>${item.summary}</p>
    </li>
    `;
  });
  response.send(`
    <h1>JS Conferences</h1>
    ${info}
  `);
});


var server = app.listen(app.get('port'), function() {
  console.log('listening to port '+ app.get('port'));
});
