var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/api/getOrigin', function (req, res) {
  var r = {
    code: 0,
    origin: 'localhost:19350'
  };
  res.send(r);
  //res.send('Hello World!');
});

app.get('/*', function (req, res) {
  res.send('Hello World!');
});


app.post('/*', function (req, res) {
  res.send('0');
  console.log(new Date() + ':' + req.originalUrl);
  console.log('body:' + JSON.stringify(req.body));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
