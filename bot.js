var twit = require('twit');

var bot = new twit({
	consumer_key: '....',
	consumer_secret: '....',
	access_token: '....',
	access_token_secret: '....'
})

module.exports = bot;