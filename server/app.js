let express = require('express');
let path = require('path');
let bodyParser = require('body-parser');
let jsonParser = bodyParser.json();
let db = require('../database/index.js');
let route = require('./routes.js');



const PORT = 3002;
let app = express();

let morgan = require('morgan');
app.use(morgan('combined'));

app.use(express.static('public'))
app.use('/v1/product', route);


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