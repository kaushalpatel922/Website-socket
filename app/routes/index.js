var express = require('express');
var router = express.Router();

router.get('/', function(request, response) {
  var data = request.app.get('appData');
  var pagePhotos = [];

  data.sponsors.forEach(function(item) {
    pagePhotos = pagePhotos.concat(item.artwork);
  });
  response.render('index', {
    pageTitle: 'Home',
    artwork: pagePhotos,
    pageID: 'home'
  });
});


module.exports = router;
