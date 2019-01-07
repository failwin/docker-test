var express = require('express');
var app = express();

var count = 1;

app.get('/', function (req, res) {
  res.send('Hello World! ' + count);
  count++;
});

app.use('/static', express.static('./static'));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
