var express = require('express');
var router = express.Router();

router.get('/', function(request, response) {
  response.send(`
    <h1>Welcome to JS Conferences</h1>
    <p>A place for JSConf US users who are passionate to talk about their experiences</p>`
  );
});

module.exports = router;
