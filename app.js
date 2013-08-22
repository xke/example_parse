/**
 * Module dependencies.
 */
var express = require('express')
  , path  = require('path')
  , http = require('http');

var app = express();

// all environments
app.set('port', process.env.PORT || 8080);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
	res.render('index');
});

var Parse = require('node-parse-api').Parse
  , APP_ID = '6wvE2eSo72lP6al29CHtiuH7mRfVYvd5jUCTOJAt'
  , MASTER_KEY = 'SqI8rEFKoJbcqb3iya2Y7jShAHK23FnCoEMkfHPl'
  , search = new Parse(APP_ID, MASTER_KEY);

app.get('/all', function(req, res){
	search.findMany('TestObject', {}, function (err, response) {
		if( err ) 
			console.warn(err);
		else{
			res.send(response.results);
		}
	});
})

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
