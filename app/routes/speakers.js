var express = require('express');
var router = express.Router();


router.get('/speakers', function(request, response) {
  var data = request.app.get('appData');
  var pagePhotos = [];

  var pageSpeakers = data.speakers;

  data.sponsors.forEach(function(item) {
    pagePhotos = pagePhotos.concat(item.artwork);
  });
  response.render('speakers', {
    pageTitle: 'Speakers',
    artwork: pagePhotos,
    speakers: pageSpeakers,
    pageID: 'speakerList'
  });
});


router.get('/speakers/:speakerid', function(request, response) {
  var data = request.app.get('appData');
  var pagePhotos = [];

  var pageSpeakers = [];

  data.speakers.forEach(function(item) {
    if(item.name == request.params.speakerid) {
      pageSpeakers.push(item);
      data.sponsors.forEach(function(item) {
          pagePhotos = pagePhotos.concat(item.artwork);
        }
      );
    }
  });

  response.render('speakers', {
    pageTitle: 'Speakers Info',
    artwork: pagePhotos,
    speakers: pageSpeakers,
    pageID: 'speakerDetail'
  });
});

module.exports = router;
