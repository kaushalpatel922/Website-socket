var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var fs = require('fs');
var feedbackData = require('../data/feedback.json');

router.get('/api', function(request, response) {
  response.json(feedbackData);
});

//To understand request properly
router.use(bodyParser.json());
//Read urlencoded data when a form sends information
router.use(bodyParser.urlencoded({ extended: false }));

router.post('/api', function(request, response) {
  feedbackData.unshift(request.body);
  fs.writeFile('app/data/feedback.json', JSON.stringify(feedbackData, 'utf8',
    function(err) {
      if(err) {
        console.log(err);
      }
    }
  ));
  response.json(feedbackData);
});

router.delete('/api/:id', function(request, response) {
  feedbackData.splice(request.params.id, 1);
  fs.writeFile('app/data/feedback.json', JSON.stringify(feedbackData, 'utf8',
    function(err) {
      if(err) {
        console.log(err);
      }
    }
  ));
  response.json(feedbackData);
});

module.exports = router;
