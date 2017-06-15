var express = require('express');
var app = express();
var dataFile = require('./data/data.json');

app.set('port', process.env.PORT || 3000);
//setting the variable to available through entire app
app.set('appData', dataFile);
app.set('view engine', 'ejs');
app.set('views', 'app/views');

//Variable will be availble in any views
app.locals.siteTitle = "JS Conferences";
app.locals.allSpeakers = dataFile.speakers;


app.use(express.static('app/public'));
app.use(require('./routes/index'));
app.use(require('./routes/speakers'));

var server = app.listen(app.get('port'), function() {
  console.log('listening to port '+ app.get('port'));
});
