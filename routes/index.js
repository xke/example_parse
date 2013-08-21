/*
 * GET home page.
 */

var Parse = require('node-parse-api').Parse
  , APP_ID = '6wvE2eSo72lP6al29CHtiuH7mRfVYvd5jUCTOJAt'
  , MASTER_KEY = 'SqI8rEFKoJbcqb3iya2Y7jShAHK23FnCoEMkfHPl'
  , app = new Parse(APP_ID, MASTER_KEY);


exports.index = function(req, res){
	// // all db objects
	app.findMany('TestObject', {}, function (err, response) {
		if( err ) 
			console.warn(err);
		else{
			res.render('index',{data : response.results});
		}
	});

};