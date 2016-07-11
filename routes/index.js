var express = require('express');
var router = express.Router();

var twit = require('twit');

var bot = new twit({
	consumer_key: 'n067jv4mhRfRwmzbYCN4aQJRM',
	consumer_secret: '9wL2KWC1Iyh0UztHMmVX6bqmzEtWUR8TUDQqBn2SUV0Cmv9sDG',
	access_token: '752327172585586689-B4mBeFtTGdgjAbSlCWQtKBA2A1ZZCO8',
	access_token_secret: 'IMhPHxaO1ax7zPIwOlfsRsz8Z089fYwSatkyatswLIu9I'
})

var tweets;
bot.get('search/tweets', { q: 'water since:2011-07-11', lang: 'en', count: 3 }, function(err, data, response) {
	tweets = data.statuses;
	
	if(err) {
		console.log('Something went wrong');
	}
	
	for(var i = 0; i < tweets.length; i++) {
		console.log(tweets[i].text);
	}

	/* GET home page. */
	router.get('/', function(req, res, next) {
		res.render('index', {data: tweets});
	});
})

module.exports = router;