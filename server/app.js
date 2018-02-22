let express = require('express');
let path = require('path');
let bodyParser = require('body-parser');
let morgan = require('morgan');
let jsonParser = bodyParser.json();
const PORT = 3002;
var app = express();

app.use(morgan('combined'));
app.use(express.static('public'))






app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});