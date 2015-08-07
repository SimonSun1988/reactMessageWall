
var express = require('express');

var app = express();

app.set('views', './');
app.set('view engine', 'jade');
app.use('/', express.static(__dirname + '/public'));

app.get('/', function (req, res, next){
    res.render('index');
});

app.get('/data', function (req, res, next){
    res.json(['Simon', 'Webber', 'Wayne']);
});


console.log('listen port 10021');
app.listen(10021);