var express = require('express');
var router = express.Router();
var bot = require('../bot');

var params = { q: 'CNN since:2011-07-11', lang: 'en', count: 10 };

router.get('/', function(req, res, next) {
	var newQ = req.query.q;
	if(newQ) {
		params.q = newQ;
	}
	bot.get('search/tweets', params, function(err, data, response) {	
		if(err) {
			console.log(err.message);
            return res.send(err.message);
		}
	
		/* GET home page. */
		res.render('index', {data: data.statuses});
	})
});

module.exports = router;