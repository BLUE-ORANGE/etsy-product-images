let express = require('express');
let path = require('path');
let bodyParser = require('body-parser');
let morgan = require('morgan');
let jsonParser = bodyParser.json();
const PORT = 3002;
var app = express();

let db = require('../database/index.js');



app.use(morgan('combined'));
app.use(express.static('public'))

app.get('/image', (req, res) => {
  db.getFive((err, data) => {
    if (err) {
      console.log(`err retrieving images: ${err}`);
      res.statusCode = 404;
      res.send('Not found');
    }  else {
      res.send(data);
    }
  })
})





app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});