'use strict';
var twit = require('twit'),
    apiKeys = require('./apiKeys'),
    bot = new twit(apiKeys);

module.exports = bot;
