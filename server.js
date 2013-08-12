var express = require('express');
var server = express();

server.get('/hello.txt', function(req, res){
  res.send('Hello World');
});

server.listen(process.env.PORT);
console.log('Listening on port ' + process.env.PORT);