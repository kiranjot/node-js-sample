var express = require('express');
var app = express();
app.use(express.logger());
var fs= require('fs');
var datafile=fs.readFileSync('index.html','utf8');
app.get('/', function(request, response) {
  response.send(datafile);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
