'use strict';
var twit = require('twit');
var apiKeys = require('./apiKeys');
var bot = new twit(apiKeys);

module.exports = bot;
