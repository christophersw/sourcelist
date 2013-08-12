var express = require('express');
var server = express();
 
var hbs = require('hbs');
 
server.set('view engine', 'html');
server.engine('html', hbs.__express);
 
 server.get('/', function(req, res) {
   res.render('index', {"test":"this is test text"});
});

server.listen(process.env.PORT);
console.log('Listening on port ' + process.env.PORT);