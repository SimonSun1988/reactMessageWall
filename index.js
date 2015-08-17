
var express = require('express');

var app = express();

var cors = require('cors');

app.use(cors());

app.set('views', './');
app.set('view engine', 'jade');
app.use('/', express.static(__dirname + '/public'));
app.use('/dest/', express.static(__dirname + '/dest'));

app.get('/', function (req, res, next){
    res.render('index');
});

app.get('/data', function (req, res, next){
    res.jsonp(['Simon', 'Webber', 'Wayne']);
});


console.log('listen port 10021');
app.listen(10021);