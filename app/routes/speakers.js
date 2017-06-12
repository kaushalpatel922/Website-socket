var express = require('express');
var router = express.Router();


router.get('/speakers', function(request, response) {
  var info = '';
  //pulling the value from app.js
  var dataFile = request.app.get('appData');
  dataFile.speakers.forEach(function(item) {
    info += `
    <li>
      <h2>${item.name}</h2>
      <img src="/images/speakers/${item.shortname}.png" alt="speaker">
      <p>${item.summary}</p>
    </li>
    `;
  });
  response.send(`
    <link rel="stylesheet" type="text/css" href="/css/style.css">
    <h1>JS Conferences</h1>
    ${info}
  `);
});


router.get('/speakers/:speakerid', function(request, response) {
  var dataFile = request.app.get('appData');
  var speaker = dataFile.speakers[request.params.speakerid];
  response.send(`
    <link rel="stylesheet" type="text/css" href="/css/style.css">
    <h1>${speaker.title}</h1>
    <h2>with ${speaker.name}</h2>
    <img src="/images/speakers/${speaker.shortname}.png" alt="speaker">
    <p>${speaker.summary}</p>
  `);
});

module.exports = router;
