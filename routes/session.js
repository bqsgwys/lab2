var session=require('express-session');
var cookie=require('cookie-parser');
var LevelStore = require('express-session-level')(session);
var db=require('./level')('session');
var mod=session({
	store: new LevelStore(db),
	secret: 'lab2lite',
	resave: 'false',
	saveUninitialized: 'false'
});

module.exports = mod;
