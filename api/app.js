
const express = require('express'),
    http = require('http'),
    mongoose = require('mongoose');

var app = express();

console.log(process.env.MONGO_PORT_6379_TCP_ADDR + ':' + process.env.MONGO_PORT_6379_TCP_PORT);

// APPROACH 1: Using environment variables created by Docker
// var client = redis.createClient(
//      process.env.REDIS_PORT_6379_TCP_PORT,
//      process.env.REDIS_PORT_6379_TCP_ADDR
// );

// APPROACH 2: Using host entries created by Docker in /etc/hosts (RECOMMENDED)
mongoose.connect('mongodb://mongo:27017/blog');
db = mongoose.connection;


db.once("open", function(){

	app.get('/', function(req, res, next) {
		res.json({
			title: "Alexander Sopov CV",
			about: "Hottest man alive"	
		})
	});

	http.createServer(app).listen(process.env.PORT || 8080, function() {
	  console.log('Listening on port ' + (process.env.PORT || 8080));
	});

});
