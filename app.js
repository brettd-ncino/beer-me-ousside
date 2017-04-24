var express = require('express');
var app = express();
var port = process.env.PORT || 5000;
app.listen(port);
app.get('/beerme', function(request, response){
	response.send('The taps are open!');
});
app.post('/beerme', function(request, response){
	response.send('The taps are open!');
});

module.exports = app;
