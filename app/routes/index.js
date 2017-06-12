var express = require('express');
var router = express.Router();

router.get('/', function(request, response) {
  response.send(`
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <h1>Welcome to JS Conferences</h1>
    <img src="/images/misc/conference.jpg" alt="background" style="height: 300px;">
    <p>A place for JSConf US users who are passionate to talk about their experiences</p>`
  );
});

module.exports = router;
