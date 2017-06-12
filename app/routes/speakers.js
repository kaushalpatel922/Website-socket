var express = require('express');
var router = express.Router();


router.get('/speakers', function(request, response) {
  var info = '';
  //pulling the value from app.js
  var dataFile = request.app.get('appData');
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


router.get('/speakers/:speakerid', function(request, response) {
  var dataFile = request.app.get('appData');
  var speaker = dataFile.speakers[request.params.speakerid];
  response.send(`
    <h1>${speaker.title}</h1>
    <h2>with ${speaker.name}</h2>
    <p>${speaker.summary}</p>
  `);
});

module.exports = router;
