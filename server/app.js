const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const jsonParser = bodyParser.json();
const db = require('../database/index.js');
const route = require('./routes.js');


const PORT = 3003;
const app = express();

const morgan = require('morgan');

app.use(morgan('combined'));

app.use(express.static('public'));

app.use(cors());
app.use(jsonParser);
app.use('/v1/product', route);

app.get('/image', (req, res) => {
  db.getFive((err, data) => {
    if (err) {
      console.log(`err retrieving images: ${err}`);
      res.statusCode = 404;
      res.send('Not found');
    } else {
      res.send(data);
    }
  });
});


app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
