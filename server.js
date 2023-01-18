var express = require('express');
var app = express();

app.use(express.static('public'));

//Serves all the request which includes /images in the url from Images folder
app.use('/iceland.jpg', express.static(__dirname + '/iceland.jpg'));

var server = app.listen(5000);
