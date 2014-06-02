var express = require('express');
var app = express();

app.use(express.static('..'));

app.listen(5000);

console.log('Running at :5000');